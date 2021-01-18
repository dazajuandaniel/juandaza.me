# Azure DP-100 Module 5

# Environments
Environments are encapsulated in the `Environment` class which can be configured to specify the runtime config of an experiment.
## Explicitly Creating Environments
There are two options
### From Spec File
You can specify the environments you wish to create in a `yaml` file.

`my-enmv.yaml`
```yaml
name: py_env
dependencies:
  - numpy
  - pandas
  - scikit-learn
  - pip:
    - azureml-defaults
```
```python
from azureml.core import Environment

env = Environment.from_conda_specification(name='training_environment',
                                           file_path='./conda.yml')
```
### From Existing Conda Environment
If there is an environment already registered, then you can use that
```python
from azureml.core import Environment

env = Environment.from_existing_conda_environment(name='training_environment',
                                                  conda_environment_name='py_env')
```
## Creating an Environment by Specifying Packages
Alternatively, you can specify the packages required with the dependencies
```python
from azureml.core import Environment
from azureml.core.conda_dependencies import CondaDependencies

env = Environment('training_environment')
deps = CondaDependencies.create(conda_packages=['scikit-learn','pandas' 'numpy'],
                                pip_packages=['azureml-defaults'])
env.python.conda_dependencies = deps
```
### Registering & Reusing Environments
After an environment has been created, you can register it on the Workspace.
```python
env.register(workspace = ws)
```
Using the `get` method of the `Environment` class you can retrieve an environment. To use it, you can pass it to the `Estimator` object or `ScriptRunConfig`.
```python
from azureml.core import Environment
from azureml.train.estimator import Estimator

# Get the environment
training_env = Environment.get(workspace=ws, name='training_environment')

# Use it in the estimator
estimator = Estimator(source_directory='experiment_folder'
                      entry_script='training_script.py',
                      compute_target='local',
                      environment_definition=training_env)
```
### Curated Environments
AML provides a list of pre-configured environemnts for common scenarions (tensorflow, Pytorch, Scitkit-Learn)

## Compute Targets
Virtual computers where the experiments actually run. This provides both flexibility and Cost-Effectiveness.

**Types of compute:**

* Local
* Compute Cluster
* Inference Cluster
* Attached Compute

### Creating a Compute Target
To create on using the SDK, use the `azureml.core.compute.ComputeTarget` and the `AmlCompute`.

The example below is for a *managed* compute target
```python
from azureml.core import Workspace
from azureml.core.compute import ComputeTarget, AmlCompute

# Load the workspace from the saved config file
ws = Workspace.from_config()

# Specify a name for the compute (unique within the workspace)
compute_name = 'aml-cluster'

# Define compute configuration
compute_config = AmlCompute.provisioning_configuration(vm_size='STANDARD_DS12_V2',
                                                       min_nodes=0, max_nodes=4,
                                                       vm_priority='dedicated')

# Create the compute
aml_cluster = ComputeTarget.create(ws, compute_name, compute_config)
aml_cluster.wait_for_completion(show_output=True)
```
You can also attach *unmanaged* compute targets (they are outside of AML Studio such as Databricks).

### Using Compute Targets
Compute targets are used to run workloads such as Experiments. To do this add a parameter in the Estimator class.
```python
from azureml.core import Environment
from azureml.train.estimator import Estimator

compute_name = 'aml-cluster'

training_env = Environment.get(workspace=ws, name='training_environment')

estimator = Estimator(source_directory='experiment_folder',
                      entry_script='training_script.py',
                      environment_definition=training_env,
                      compute_target=compute_name)
```
**Note**

Instead of specifying the compute name, you can also specify the a `ComputeTarget` object
```python
from azureml.core import Environment
from azureml.train.estimator import Estimator
from azureml.core.compute import ComputeTarget

compute_name = "aml-cluster"

training_cluster = ComputeTarget(workspace=ws, name=compute_name)

training_env = Environment.get(workspace=ws, name='training_environment')

estimator = Estimator(source_directory='experiment_folder',
                      entry_script='training_script.py',
                      environment_definition=training_env,
                      compute_target=training_cluster)
```
