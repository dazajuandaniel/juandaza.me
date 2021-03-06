# Azure DP-100 Module 1

## Azure ML Introduction
AML is a platform for operating machine learning workloads in the cloud

### Resource Groups 
Is a container that holds related resources for an Azure solution. Defines the boundary for ML assets.

### Workspaces
As its name suggests, a workspace is a centralized place to manage all of the Azure ML assets you need to work on a machine learning project.

	* Storage account
    * Application Insights instance
    * Azure Key Vault instance
    * A Container Registry
    * Experiments, Pipelines and Models: These are generally created within a workspace
	* VMs: Compute, Notebooks and Data -> These are generally sourced in.

**Worspaces have Role Based Access controls**

Roles can be assigned based on different profiles, similar to IAM in AWS.

**Creating Workspaces**

1. Using the Azure GUI Portal
2. Using the Python SDK from `azure.core`
3. Using the Azure CLI
4. Create an Azure resource manager template.

When creating a workspace, important to bear in mind `Region`, `Resources` and `Edition`. Region dictates if the instances have or not GPU.

**Other Notes**
Designer Studio is only available in Enterprise edition, not in Free edition.
## Working with AML

### AML Studio
AML Studio studio is a web-based tool for managing an Azure Machine Learning workspace. It also provides access to:
* AutomatedML
* Designer (Drag & Drop UI)

To go Studio, go to https://ml.azure.com

### Azure ML SDK for Python (and R)
[SDK Documentation](https://docs.microsoft.com/en-us/python/api/overview/azure/ml/install?view=azure-ml-py)

`pip install azureml-sdk`

#### Connecting to the Workspace
#### Using Config File

Using the SDK, one can connect to a workspace using the *configuration file* which can be downloaded from the Overview page -> for example:
```yml
{
    "subscription_id": "1234567-abcde-890-fgh...",
    "resource_group": "aml-resources",
    "workspace_name": "aml-workspace"
}
```
With the config file, then run.
```python
from azureml.core import Workspace

ws = Workspace.from_config()
```
#### Using Workspace Class

Using the following code, one can connect to Workspace
```python
from azureml.core import Workspace

ws = Workspace.get(name='aml-workspace',
                   subscription_id='1234567-abcde-890-fgh...',
                   resource_group='aml-resources')
```

This class is usually the starting point for most code operations. It works to get the different resources available among other things. `In general it works to manage all the different assets`.

### Azure CLI Extension
Analogous to the AWS CLI

### Compute Instances
Azure allows to create compute instances to get a development environment. They include a `Jupyter Notebook`, `JupyterLab` and use the AzureSDK to manage resources.

The user can choose a VM Image that provides the compute specifications for the instance. You pay for what you use.

**Note** Notebooks can be stored independent to the workspace and be opened on any VM.

### Extension for VSCode
The extension provides a graphical interface for working with assets in an Azure Machine Learning workspace.