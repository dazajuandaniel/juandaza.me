# Azure DP-100 Module 7

## Real-time Inferencing
AML allows you to deploy the inferencing service in a hosted platform such as AKS.

### Deploying a Service
AML uses `containers` as a deployment mechanism, packaging the model and code to be able to be deployed into a container in whatever target (local, ACI, AKS, Azure Function, etc).

**General Steps to deploy**
1. Register a trained model in the workspace
2. Define an Inference Configuration
        
    * The model consists of a *script to load the model* and *an enviroment the script will run*
3. Create an entry Script
    * Script must have `init()` and `run(raw_data)` function
        
        * init(): Called when the services is initialised (e.g. load the model)
        * run(raw_data): Called when new data is submitted (e.g. generating predictions)
        ```python
        import json
        import joblib
        import numpy as np
        from azureml.core.model import Model

        # Called when the service is loaded
        def init():
            global model
            # Get the path to the registered model file and load it
            model_path = Model.get_model_path('classification_model')
            model = joblib.load(model_path)

        # Called when a request is received
        def run(raw_data):
            # Get the input data as a numpy array
            data = np.array(json.loads(raw_data)['data'])
            # Get a prediction from the model
            predictions = model.predict(data)
            # Return the predictions as any JSON serializable format
            return predictions.tolist()
        ```
4. Create the environment:
    
    * You can configure using Conda configuration file using the `CondaDependencies` class.
    ```python
    from azureml.core.conda_dependencies import CondaDependencies

    # Add the dependencies for your model
    myenv = CondaDependencies()
    myenv.add_conda_package("scikit-learn")

    # Save the environment config as a .yml file
    env_file = 'service_files/env.yml'
    with open(env_file,"w") as f:
        f.write(myenv.serialize_to_string())
    print("Saved dependency info in", env_file)
    ```
5. Combine Script + Environment
    * Combine it using the `InferenceConfig`
    ```python
    from azureml.core.model import InferenceConfig

    classifier_inference_config = InferenceConfig(runtime= "python",
                                                source_directory = 'service_files',
                                                entry_script="score.py",
                                                conda_file="env.yml")
    ```
6. Define a deployment Configuration
    * Configure the compute to which the service will be deployed.
    ```python
    from azureml.core.compute import ComputeTarget, AksCompute
    from azureml.core.webservice import AksWebservice


    cluster_name = 'aks-cluster'
    compute_config = AksCompute.provisioning_configuration(location='eastus')
    production_cluster = ComputeTarget.create(ws, cluster_name, compute_config)
    production_cluster.wait_for_completion(show_output=True)
    classifier_deploy_config = AksWebservice.deploy_configuration(cpu_cores = 1,
                                                                memory_gb = 1)
    ```
7. Deploy the model
    * Call `deploy` method of the `Model` class.

#### Consuming an Inferencing Service
To consume you can use the endpoint to make calls. For authentication you need the either the `key` or `token` (JWT).

**Notes:**
    
    * Authentication is disabled by default for ACI services
    * Autehntication is set to key-based for AKS
    * For token-based authentication, your client application needs to use service-principal authentication to verify its identity through Azure Active Directory (Azure AD) and call the get_token method of the service to retrieve a time-limited token.

#### Troubleshooting
1. Check the state by using the `state` method (use a service specific method such as `AksWebservice` instead of `WebService `).
    ```python
    from azureml.core.webservice import AksWebservice

    # Get the deployed service
    service = AciWebservice(name='classifier-service', workspace=ws)

    # Check its state
    print(service.state)
    ```
2. Review Service Logs
    ```python
    print(service.get_logs())
    ```
3. Deploy to local container for easy diagnosis

### Batch Inferencing
Apply predictive models to batch operations `asynchronously` and write results to a DB/file.

#### Create Batch Pipeline
**General Steps to deploy**

1. Register the model (similar to Real Time inferencing)
2. Create a scoring script:
    * Script must have `init()` and `run(mini_batch)` function
        
        * init(): Called when the pipeline is initialised (e.g. load the model)
        * run(raw_data): Called for each batch (e.g. generating predictions)
        ```python
        import json
        import joblib
        import numpy as np
        from azureml.core.model import Model

        # Called when the service is loaded
        def init():
            global model
            # Get the path to the registered model file and load it
            model_path = Model.get_model_path('classification_model')
            model = joblib.load(model_path)

        # Called when a request is received
        def run(mini_batch):
           # process each file in the batch
            for f in mini_batch:
                # Read comma-delimited data into an array
                data = np.genfromtxt(f, delimiter=',')
                # Reshape into a 2-dimensional array for model input
                prediction = model.predict(data.reshape(1, -1))
                # Append prediction to results
                resultList.append("{}: {}".format(os.path.basename(f), prediction[0]))
            return resultList
        ```
3. Create a Pipeline with a `ParallelRunStep`
    
    * AML provides a step to perform parallel batch inferencing (`ParallelRunStep`). Output can be written to a `PipelineData` reference. Also, you can set the `output_action = append_row` setting to ensure that all instances of the step that are run in parallel, collate their results to a single file
    ```python
    from azureml.pipeline.steps import ParallelRunConfig, ParallelRunStep
    from azureml.pipeline.core import PipelineData
    from azureml.pipeline.core import Pipeline

    # Get the batch dataset for input
    batch_data_set = ws.datasets['batch-data']

    # Set the output location
    default_ds = ws.get_default_datastore()
    output_dir = PipelineData(name='inferences',
                            datastore=default_ds,
                            output_path_on_compute='results')

    # Define the parallel run step step configuration
    parallel_run_config = ParallelRunConfig(
        source_directory='batch_scripts',
        entry_script="batch_scoring_script.py",
        mini_batch_size="5",
        error_threshold=10,
        output_action="append_row",
        environment=batch_env,
        compute_target=aml_cluster,
        node_count=4)

    # Create the parallel run step
    parallelrun_step = ParallelRunStep(
        name='batch-score',
        parallel_run_config=parallel_run_config,
        inputs=[batch_data_set.as_named_input('batch_data')],
        output=output_dir,
        arguments=[],
        allow_reuse=True
    )
    # Create the pipeline
    pipeline = Pipeline(workspace=ws, steps=[parallelrun_step])
    ```

4. Run the pipeline and retrieve Step Output
    ```python
    from azureml.core import Experiment

    # Run the pipeline as an experiment
    pipeline_run = Experiment(ws, 'batch_prediction_pipeline').submit(pipeline)
    pipeline_run.wait_for_completion(show_output=True)

    # Get the outputs from the first (and only) step
    prediction_run = next(pipeline_run.get_children())
    prediction_output = prediction_run.get_output_data('inferences')
    prediction_output.download(local_path='results')

    # Find the parallel_run_step.txt file
    for root, dirs, files in os.walk('results'):
        for file in files:
            if file.endswith('parallel_run_step.txt'):
                result_file = os.path.join(root,file)

    # Load and display the results
    df = pd.read_csv(result_file, delimiter=":", header=None)
    df.columns = ["File", "Prediction"]
    print(df)
    ```
#### Publishing Batch Service
Same as Real Time Publishing.

1. Publish as a Rest service
2. Use the service to intiate the pipeline on demand
3. You can Schedule the pipeline as well using the `ScheduleRecurrence` and `Schedule` object.