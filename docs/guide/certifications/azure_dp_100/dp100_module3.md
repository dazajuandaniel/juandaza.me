# Azure DP-100 Module 3

## Running Experiments and Training Models
In AMZL, an experiment is a named process (running a file or a script) that generates outputs.

### The `Run Context`
The `run context` is used to start/end an experiment. Once completed results are visibile in AML Studio
```python
experiment = Experiment(worskpace = ws, name = 'my_exp')

run = experiment.start_logging()

...

run.complete()
```
### Logging Metrics & Outputs
The `Run` object provides logging functions:
* `log`: Single named value
* `log_list`: Named list of values
* `log_row`: Row with multiple columns
* `log_table`: Dictionary as a table
* `log_image`: Log Image or plot

**Note**

`ML Flow` can be used in conjuction with AML, see [docs](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-use-mlflow)

### Retrieving Logged Metrics
The `RunDetails` object provides widget capability in a notebook to view metrics
```python
from azureml.widgets import RunDetails

RunDetails(run).show()

# Metrics can also be retrieved using the run object
metrics = run.get_metrics()
```

### Output
Output files are saved in the `outputs` folder and it can be done by using the `run` object.
```python
run.upload_file(name='outputs/sample.csv', path_or_stream='./sample.csv')

# To get the list of outputs
files = run.get_file_names()
```
### Running a Script as an Experiment
When running from a script, to access the experiment run context, the **script** needs to have the `azureml.core.Run` class imported and call the `get_context` method.

```python
from azureml.core import Run
run = Run.get_context()
...
run.complete()
```

### Running an Experiment Script
A  `script configuration` is required to define the script to be run and the environment in which it'll run, this is achieved using the `ScriptRunConfig` object.

To associate a script with a RunConfig, you must use a ScriptRunConfig object.

```python
from azureml.core import Experiment, ScriptRunConfig

# Create a script config
script_config = ScriptRunConfig(source_directory=experiment_folder,
                                script='experiment.py')
# submit the experiment
experiment = Experiment(workspace = ws, name = 'my-experiment')
run = experiment.submit(config=script_config)
run.wait_for_completion(show_output=True)
```
**Note**

If your script depends on packages that are not included in the default environment, you must associate the `ScriptRunConfig` with an Environment object that makes use of a `CondaDependencies` object to specify the Python packages required.

## Training and Registering Models
### Estimators
AML provides an `Estimator` class that combines a `run configuration` and a `script configuration` in a single object to make it easy to run Scripts (removes the need to manage packages).

Link to [docs](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-set-up-training-targets)
### Writing a Script to train a Model
The script should save the trained model in the outputs folder.

Example training script below:
```python
from azureml.core import Run
import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Get the experiment run context
run = Run.get_context()

...

model = LogisticRegression(C=1/reg, solver="liblinear").fit(X_train, y_train)

...

# Save the trained model
os.makedirs('outputs', exist_ok=True)
joblib.dump(value=model, filename='outputs/model.pkl')

run.complete()
```
Then using the estimator, you can run the script quite easily and define the `run configuration`.
```python
from azureml.train.estimator import Estimator
from azureml.core import Experiment

# Create an estimator
estimator = Estimator(source_directory='experiment_folder',
                      entry_script='training_script.py'
                      compute_target='local',
                      conda_packages=['scikit-learn']
                      )

# Create and run an experiment
experiment = Experiment(workspace = ws, name = 'training_experiment')
run = experiment.submit(config=estimator)
```
**Notes**

You can use the framework specific estimators and it will have the required conda packages pre-installed.
```python
from azureml.train.sklearn import SKLearn

estimator = SKLearn(source_directory='experiment_folder',
                    entry_script='training_script.py'
                    compute_target='local'
                    )
```
### Script Parameters
The library `arparse` has to be used to read the arguments passed to the script.
```python
from azureml.core import Run
import argparse

...

# Get the experiment run context
run = Run.get_context()

# Set regularization hyperparameter
parser = argparse.ArgumentParser()
parser.add_argument('--reg_rate', type=float, dest='reg', default=0.01)
args = parser.parse_args()
reg = args.reg

...

# Train a logistic regression model
model = LogisticRegression(C=1/reg, solver="liblinear").fit(X_train, y_train)

...

# Save the trained model
os.makedirs('outputs', exist_ok=True)
joblib.dump(value=model, filename='outputs/model.pkl')

run.complete()
```

The estimator can also receive the parameters by using the `script_params` value.
```python
# Create an estimator
estimator = SKLearn(source_directory='experiment_folder',
                    entry_script='training_script.py',
                    script_params = {'--reg_rate': 0.1},
                    compute_target='local'
                    )
```

### Registering a Trained Model
The `Run` object can be used to retrieve outputs including models. The `get_file_names` lists all the files generated and you can use the `download_file`/`download_files` to download the output files in the local file system.

#### Registering a Model
AML provides the ability to register and keep track of models and their versions and use this for inferencing. It is done using the `register` method of the `Model` object.
```python
from azureml.core import Model

model = Model.register(workspace=ws,
                       model_name='classification_model',
                       model_path='model.pkl', # local path
                       description='A classification model',
                       tags={'dept': 'sales'},
                       model_framework=Model.Framework.SCIKITLEARN,
                       model_framework_version='0.20.3')

...

# To view the models
for model in Model.list(ws):
    # Get model name and auto-generated version
    print(model.name, 'version:', model.version)
```