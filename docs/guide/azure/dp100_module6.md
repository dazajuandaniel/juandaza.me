# Azure DP-100 Module 6

## Pipelines
Pipelines are workflow of machine learning tasks. A pipeline can be executed as a `process` by running it as an `experiment`. Each `step` is run on its `compute target`.

### Steps
Common steps in a pipeline in AML include:
* PythonScriptStep
* EstimatorStep
* DataTransferStep
* DatabricksStep
* AdlaStep
* [and more...](https://aka.ms/AA70rrh)

To create a pipeline, first define the `steps` and then create the pipeline that includes the steps.

Define steps:
```python
from azureml.pipeline.steps import PythonScriptStep, EstimatorStep

# Step to run a Python script
step1 = PythonScriptStep(name = 'prepare data',
                         source_directory = 'scripts',
                         script_name = 'data_prep.py',
                         compute_target = 'aml-cluster',
                         runconfig = run_config)

# Step to run an estimator
step2 = EstimatorStep(name = 'train model',
                      estimator = sk_estimator,
                      compute_target = 'aml-cluster')
```

Assign steps:
```python
from azureml.pipeline.core import Pipeline
from azureml.core import Experiment

# Construct the pipeline
train_pipeline = Pipeline(workspace = ws, steps = [step1,step2])

# Create an experiment and run the pipeline
experiment = Experiment(workspace = ws, name = 'training-pipeline')
pipeline_run = experiment.submit(train_pipeline)
```
### Passing Data between steps
Using the `PipelineData` object you can pass data between steps. It is like an intermediary store for data. It allows you to:
* Reference locations in a datastore
* Creates a data dependency between steps

To create a `PipelineData` object you must:
1. Define a named object that references a location in a datastore
    ```python
    from azureml.pipeline.core import PipelineData
    from azureml.pipeline.steps import PythonScriptStep, EstimatorStep

    # Get a dataset for the initial data
    raw_ds = Dataset.get_by_name(ws, 'raw_dataset')

    # Define a PipelineData object to pass data between steps
    data_store = ws.get_default_datastore()
    prepped_data = PipelineData('prepped',  datastore=data_store)
    ```
2. Specify the object as an input/output for the steps that use it
    ```python
    # Step to run a Python script
    step1 = PythonScriptStep(name = 'prepare data',
                            source_directory = 'scripts',
                            script_name = 'data_prep.py',
                            compute_target = 'aml-cluster',
                            runconfig = run_config,
                            # Specify dataset as initial input
                            inputs=[raw_ds.as_named_input('raw_data')],
                            # Specify PipelineData as output
                            outputs=[prepped_data],
                            # Also pass as data reference to script
                            arguments = ['--folder', prepped_data])
    ```
3. Pass the object as a script argument in the steps that run the scripts.
    ```python
    # code in data_prep.py
    ...
    # Get PipelineData argument
    parser = argparse.ArgumentParser()
    parser.add_argument('--folder', type=str, dest='folder')
    args = parser.parse_args()
    output_folder = args.folder

    # code to prep data (in this case, just select specific columns)
    prepped_df = raw_df[['col1', 'col2', 'col3']]

    # Save prepped data to the PipelineData location
    os.makedirs(output_folder, exist_ok=True)
    output_path = os.path.join(output_folder, 'prepped_data.csv')
    prepped_df.to_csv(output_path)
    ```
### Steps Reuse
By default AML offers out of the box reuse for some features in pipeline steps as long as the *script*, *source directory*, and other parameters do not change. The `allow_reuse` parameter controls the reuse for an individual step.
```python
step1 = PythonScriptStep(name = 'prepare data',
                         source_directory = 'scripts',
                         script_name = 'data_prep.py',
                         compute_target = 'aml-cluster',
                         runconfig = run_config,
                         inputs=[raw_ds.as_named_input('raw_data')],
                         outputs=[prepped_data],
                         arguments = ['--folder', prepped_data]),
                         # Disable step reuse
                         allow_reuse = False)
````
If you want to force all steps to rerun, use the `regenerate_outputs` parameter when submitting a pipeline experiment.
```python
pipeline_run = experiment.submit(train_pipeline, regenerate_outputs=True)
```
## Publishing Pipelines
Pipeline can be published as a REST endpoint.

To publish a pipeline, call the `publish` method:
```python
published_pipeline = pipeline.publish(name='training_pipeline',
                                      description='Model training pipeline',
                                      version='1.0')

# Or Publish on Successful run
# Get the most recent run of the pipeline
pipeline_experiment = ws.experiments.get('training-pipeline')
run = list(pipeline_experiment.get_runs())[0]

# Publish the pipeline from the run
published_pipeline = run.publish_pipeline(name='training_pipeline',
                                          description='Model training pipeline',
                                          version='1.0')
```
To initiate a published endpoint, you make an HTTP request to its REST endpoint, passing an authorization header with a token for a service principal with permission to run the pipeline, and a JSON payload specifying the experiment name. The pipeline is run asynchronously, so the response from a successful REST call includes the run ID. You can use this to track the run in Azure Machine Learning studio.
```python
import requests

response = requests.post(rest_endpoint,
                         headers=auth_header,
                         json={"ExperimentName": "run_training_pipeline"})
run_id = response.json()["Id"]
print(run_id)
```
### Pipeline Parameters
To define parameters, create `PipelineParameter` object for each parameter.
```python
from azureml.pipeline.core.graph import PipelineParameter

reg_param = PipelineParameter(name='reg_rate', default_value=0.01)

...

step2 = EstimatorStep(name = 'train model',
                      estimator = sk_estimator,
                      compute_target = 'aml-cluster',
                      inputs=[prepped],
                      estimator_entry_script_arguments=['--folder', prepped,
                                                        '--reg', reg_param])
```
Parameters can be passed in the JSON payload in the request object.
```python
response = requests.post(rest_endpoint,
                         headers=auth_header,
                         json={"ExperimentName": "run_training_pipeline",
                               "ParameterAssignments": {"reg_rate": 0.1}})
```
### Scheduling Pipelines
On top of starting pipelines on demand via a REST endpoint, you can schedule it to run. To schedule use the `ScheduleRecurrance` object to determine the frequency and the use it in the `Schedule`.
```python
from azureml.pipeline.core import ScheduleRecurrence, Schedule

daily = ScheduleRecurrence(frequency='Day', interval=1)
pipeline_schedule = Schedule.create(ws, name='Daily Training',
                                        description='trains model every day',
                                        pipeline_id=published_pipeline.id,
                                        experiment_name='Training_Pipeline',
                                        recurrence=daily)
```
Schedules can have as a trigger to run whenever the data changes. A `Schedule` can be created to monitor paths on a datastore.
```python
from azureml.core import Datastore
from azureml.pipeline.core import Schedule

training_datastore = Datastore(workspace=ws, name='blob_data')
pipeline_schedule = Schedule.create(ws, name='Reactive Training',
                                    description='trains model on data change',
                                    pipeline_id=published_pipeline_id,
                                    experiment_name='Training_Pipeline',
                                    datastore=training_datastore,
                                    path_on_datastore='data/training')
```



