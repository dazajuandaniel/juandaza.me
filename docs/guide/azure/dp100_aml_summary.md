# Azure DP-100 Summary

## Major Components of AML Workspaces

Workspace -> Top Level Resource for AML

* Compute Instances
* User Roles
* Compute Targets
* Experiments
* Pipelines
* Datasets
* Models (registered models)
* Deployment Endpoints

## Creating a AML [Workspace](https://docs.microsoft.com/en-us/azure/machine-learning/concept-workspace)
Resources built as accompanying resource
* Azure Storage Account
* Azure Container Registry
* Azure Application Insights
* Azure Key Vault

**Workspace Settings**
* Access Controls
* Event Suscriptions (generate alerts or triggers based on events)
* Alerts & Diagnostic Settings

**AML Studio**
* Author
    * Notebooks
    * Automate ML
    * Designer
* Assets
    * Datasets
    * Experiments
    * Models
    * Endpoints
* Monitoring
    * Compute
    * Datastores
    * Data Labelling

### [IAM/RBAC](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview#how-rbac-works)
Users in the Azure Active Directory are assigned specific roles which grants access to resources via multippe ways (CLI/Portal/etc).

## [Experiments](https://docs.microsoft.com/en-us/azure/machine-learning/concept-azure-machine-learning-architecture#experiments)
A grouping of many runs
* Run: Singe execution of a training script
* Info Stored: Metadata about run, metrics, etc.

**Run Configuration**
* Used when we want to run a training experiment on a different compute targets.

**Estimator Class**
* Allows the creation of run configuration utilizing the AML Python SDK

Designer can only be *run* on Azure Machine Learning Compute Cluster

## Data Objects

**Pipelines**

Independently executable workflow of a ML task (orchestration).
* Steps that don't need re-run are not run
* Each step can run in a separate compute target
* Dependencies are managed by the pipeline

**Datastores**

An abstraction over Azure Storage services.

**Datasets**

References to where the data lives (tabular, file)

**Dataset Management**
* Version and tracking
* Monitor (data drift)
* Open datasets

**Data Drift**
* Change in model input data that leads to the degradation of model performance
* Possible causes:
    * Upstream process change
    * Quality issues
    * Natural Causes
    * Covariate shift

**Other Notes**
CSV files can expand up to 10x in a dataframe, and you want double the RAM of that (20GB Ram for a 1GB dataset). 

## Feature Selection (AML Exam Concepts)
* Pearson's correlation
    * Dependent and Independent Variables don't make any diff.
    * Linear data
* Mutual Info Score
    * Measure the reduction in uncertainty to predict parts of outcomes of a system
    * `h(x) = -log(p(x))`
* Kendall's Correlation Coefficient
    * A nonparametric analysis of the strength of a relationship between 2 variables
    * Variables are measured on an ordinal scale and data needs to have a monotonic relationship
    * Usually preferred over Spearman
* Chi-Squared Stat
    * Reveals how close expected values are to actual results
    * Used for categorical variables
* Fisher Score
    * Measures the variance between expected value and observed value
    * Determines if a features are independent
* Count-based Feature Selection

## Inferencing Notes

[Main Docs](https://docs.microsoft.com/en-us/azure/machine-learning/concept-compute-target)
* For inferencing in Prod you should use AKS (which supports GPU)
* AML compute instances for deploying real-time services do not provide GPU and should be mainly used for Batch inferencing models.
* Azure Container Instances are for testing/debugging and don't provide GPU (only low-scale CPU workloads).

## Authentication

[Authentication Docs](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-setup-authentication)

[Consuming a Web Service](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-consume-web-service?tabs=python)

| Auth Method | ACI                 | AKS                 |   |   |
|-------------|---------------------|---------------------|---|---|
| Key         | Disabled by default | Enabled by default  |   |   |
| Token       | Not available       | Disabled by default |   |   |


## List of Common Modules in AML
* [Clean Missing Data](https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/clean-missing-data)
* [Select Columns in Dataset](https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/select-columns-in-dataset)
* [Normalize Data](https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/normalize-data)
* [Partition and Sample Data](https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/partition-and-sample)

## List of Common/Functions Methods in the SDK

| Package                 | Class      | Example                                               | Description |
|-------------------------|------------|-------------------------------------------------------|-------------|
| azureml.core            | Workspace  | `Workspace.from_config()`                             |             |
| azureml.core            | Experiment | `Experiment(workspace=ws, name='name')`               |             |
| azureml.core            | Experiment | `experiment.start_logging()`                          |             |
| azureml.core            | Datastore  | `Datastore.register_azure_blob_container(...)`        |             |
| azureml.core            | Datastore  | `Datastore.get(workspace,datastore_name)`             |             |
| azureml.core            | Dataset    | `Dataset.Tabular.from_delimited(path=datastore_path)` |             |
| azureml.core            | Dataset    | `my_dataset.register(ws,name,description)`            |             |
| azureml.core            | Dataset    | `Dataset.get_by_name(ws,name)`                        |             |
| azureml.train.estimator | Estimator  | `Estimator(source_directory,script_params,...)`       |             |
| azureml.core            | Run        | `Run.get_context()`                                   |             |
| azureml.core            | Run        | `run.log()`,`run.log_list()`,`run.log_row()`,etc..    |             |
| azureml.core            | Run        | `run.get_details()`, `run.get_metrics()`,`run.get_file_names` |             |
| azureml.widgets         | RunDetails | `RunDetails(run).show()`                              |             |
| azureml.core.webservice | AciWebservice | `aci_service.get_logs()`                           |             |

## Other Commands
