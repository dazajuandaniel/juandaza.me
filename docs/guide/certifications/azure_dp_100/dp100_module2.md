# Azure DP-100 Module 2

## No-Code Machine Learning Designer
A graphical environment for creating machine learning models through a `drag and drop` interface. To run a pipeline, a `Compute Cluster` needs to be createad.

Multiple modules are available across different items such as:
* Data Transformations
* Feature Selection
* ML Algorithms
* Statistical Functions
* Model Training/Scoring
* Custom Python/R Functions
* Text Analysis/Recommendation/Anomaly Detection

## Training Models in Designer
### Pipelines & Modules
A pipeline is a dataflow (series of steps) for training a machine learning model.

#### Pipeline Features
* Each step is `independently executed` and can be run on `any valid compute target`

### Training, Scoring, and Evaluating Models
AML Designer includes modules for training, scoring, and evaluating ML models. General approach:

1. Use algo Module: Type of model (classification/Regression/Clustering/etc)
2. Train the model by fitting the algo to the training data.

    * For supervised use the `Train Model` module
    * For unsupervised use the `Train Clustering Model` module
3. Split to `train` and `test` and then use the `Score Model` module to predict values and evaluate the model. In unsupervised, use the `Assign Data to Clusters` module.
4. Evaluate the model using the `Evaluate Model` module to view metrics. Obviously, the metrics depend on model/use case. Some metrics available are `accuracy`, `precision`, `recall`, `ROC Chart`, `RMSE` (regression), and `R^2` (regression).

### Code Modules
There are pre-defined transformations available in designer, but Azure provides custom functions such as:
1. `Apply SQL Transformation`: This module has up to three inputs, each of which can be treated as a table in a SQL statement based on the SQLite implementation of the SQL language
2. `Execute Python Script`: Python function that processes one or two input dataframes, and returns one or two output dataframes. The entry function in your script must be named `azureml_main`.
3. `Create Python Model`: You can use this module to implement code for a custom model in place of the built-in algorithms provided in the designer. Your code must implement a class named `AzureMLModel` with `init`, `train`, and `predict` methods.
4. `Execute R Script`: R function that processes one or two input dataframes, and returns one or two output dataframes. The entry function in your script must be named `azureml_main`.

## Publishing Models in Designer
An `inference pipeline` is used to create a web service that predicts labels for new data.

* The web service defines an interface for new data to be scored. By default, this is based on the schema of the training dataset (including label).
* Steps that require transformation are encapsulated in transformation datasets that are applied to new data.
* The model is encapsulated in a dataset, removing the algorithm and model training modules.
* A Web service output is added at the end of real-time inferencing pipelines and  returned to applications consuming the service.

### Modyfing the Inference Pipeline
* Consider replacing the training dataset at the beginning of the pipeline to not include the label column.
* Ensure the label column is not explicitly referenced in any other modules in the pipeline, as this will cause a runtime exception.
* Remove any modules that are not required.
* Consider filtering the output columns. The Score Model module returns its input data as well as the scored label and probability columns.
* Consider adding parameters, which can be passed by calling applications to add flexibility to the pipeline. Typically, parameters are used to enable a choice of data sources to be used in the pipeline.

### Publishing a Service Endpoint

For real-time inferencing, you must deploy (HTTP REST) the service on an Azure Kubernetes Services (AKS) compute target. 

**Note:** It's important to note that batch inference pipelines are run on `training compute`, even when published as consumable services.

### Consuming a Service Endpoint
As with any other endpoint, it is just a matter of making a REST request to the HTTP endpoint.
Published services can be viewed from the Endpoints page in AML Studio.

To make a REST call to a published service, you need the service `endpoint URL` and `authorization key`.



