# Azure DP-100 Module 8

## Hyperparameter Tuning
AML enables Hyperparameter tunning with the `hyperdrive` run that initiates a child run for each hyperparameter combination.

### Search Space
The possible space types are:

* Discrete Hyperparameters
    
    * Uses `choice`, e.g. `choice([10,20,30])` or `choice(range(50))` 
    * From a discrete distrbution (`qnormal`,`quniform`,`qlognormal`,`qloguniform`)
* Continous Hyperparameters
    
    * From a continous distribution (`normal`,`uniform`,`lognormal`,`loguniform`)

To define a search space, create a `dictionary` with the appropiate values
```python
from azureml.train.hyperdrive import choice, normal

param_space = {
                 '--batch_size': choice(16, 32, 64),
                 '--learning_rate': normal(10, 3)
              }
```
### Hyperparameter Sampling
The values used in the Hyperparameter tuning depend on the sampling method:

* Grid Sampling
    
    Can only be employed whan all Hyperparameters are discrete (tries every combination possible)
    ```python
    from azureml.train.hyperdrive import GridParameterSampling, choice

    param_space = {
                    '--batch_size': choice(16, 32, 64),
                    '--learning_rate': choice(0.01, 0.1, 1.0)
                }

    param_sampling = GridParameterSampling(param_space)
    ```
* Random Sampling

    Randomly selects a value from the hyperparameters
    ```python
    from azureml.train.hyperdrive import RandomParameterSampling, choice, normal

    param_space = {
                    '--batch_size': choice(16, 32, 64),
                    '--learning_rate': normal(10, 3)
                }

    param_sampling = RandomParameterSampling(param_space)
    ```
* Bayesian Sampling

    Chooses hyperparameter values based on the Bayesian optimization algorithm, which tries to select parameter combinations that will result in improved performance from the previous selection
    ```python
    from azureml.train.hyperdrive import BayesianParameterSampling, choice, uniform

    param_space = {
                    '--batch_size': choice(16, 32, 64),
                    '--learning_rate': uniform(0.5, 0.1)
                }

    param_sampling = BayesianParameterSampling(param_space)
    ```
    **Note:** You can only use Bayesian sampling with choice, uniform, and quniform parameter expressions, and you can't combine it with an early-termination policy.

### Early Termination Policy
Prevents long runs by allowing the definition of policies to terminate early based on performance or other aspects such as based on the number of runs.

* Bandit Policy: Stops a run if the target performance metric underperforms the best run so far by a specified margin.
    ```python
    from azureml.train.hyperdrive import BanditPolicy

    early_termination_policy = BanditPolicy(slack_amount = 0.2,
                                            evaluation_interval=1,
                                            delay_evaluation=5)
    ```
* Median Stopping Policy: Abandons runs where the target performance metric is worse than the median of the running averages for all runs.
    ```python
    from azureml.train.hyperdrive import MedianStoppingPolicy

    early_termination_policy = MedianStoppingPolicy(evaluation_interval=1,
                                                    delay_evaluation=5)
    ```
* Truncation Selection Policy: Cancels the lowest performing X% of runs at each evaluation interval based on the truncation_percentage value you specify for X.
    ```python
    from azureml.train.hyperdrive import TruncationSelectionPolicy

    early_termination_policy = TruncationSelectionPolicy(truncation_percentage=10,
                                                        evaluation_interval=1,
                                                        delay_evaluation=5)
    ```
### Using Hyperdrive
Parameters are tunned using the `Hyperdrive` experiment object. The script **MUST** have:
* An argument for each hyperparameter
* Log the target performance metric.

```python
import argparse
import joblib
from azureml.core import Run
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Get regularization hyperparameter
parser = argparse.ArgumentParser()
parser.add_argument('--regularization', type=float, dest='reg_rate', default=0.01)
args = parser.parse_args()
reg = args.reg_rate

# Get the experiment run context
run = Run.get_context()

# load the training dataset
data = run.input_datasets['training_data'].to_pandas_dataframe()

# Separate features and labels, and split for training/validatiom
X = data[['feature1','feature2','feature3','feature4']].values
y = data['label'].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30)

# Train a logistic regression model with the reg hyperparameter
model = LogisticRegression(C=1/reg, solver="liblinear").fit(X_train, y_train)

# calculate and log accuracy
y_hat = model.predict(X_test)
acc = np.average(y_hat == y_test)
run.log('Accuracy', np.float(acc))

# Save the trained model
os.makedirs('outputs', exist_ok=True)
joblib.dump(value=model, filename='outputs/model.pkl')

run.complete()
```

Once the script is ready, you have to use a `HyperDriveConfig`.
```python
from azureml.core import Experiment
from azureml.train.hyperdrive import HyperDriveConfig, PrimaryMetricGoal

# Assumes ws, sklearn_estimator and param_sampling are already defined

hyperdrive = HyperDriveConfig(estimator=sklearn_estimator,
                              hyperparameter_sampling=param_sampling,
                              policy=None,
                              primary_metric_name='Accuracy',
                              primary_metric_goal=PrimaryMetricGoal.MAXIMIZE,
                              max_total_runs=6,
                              max_concurrent_runs=4)

experiment = Experiment(workspace = ws, name = 'hyperdrive_training')
hyperdrive_run = experiment.submit(config=hyperdrive)
```
### Monitor the Hyperdrive Run
Use the `RunDetails` widget. The experiment will intiate a run child for each hyperparameter combination tried. 
```python
# Get logs for each run
for child_run in run.get_children():
    print(child_run.id, child_run.get_metrics())

# List all runs
for child_run in hyperdrive_.get_children_sorted_by_primary_metric():
    print(child_run)

# Get best performing run
best_run = hyperdrive_run.get_best_run_by_primary_metric()
```
## AutoML
Available in Studio for Enterprise. Avaialbe in Free for both Enterprise and Basic.

It can be used for the following types of tasks.

* Classification
    * Logistic Regression
    * GBM
    * Decision Tree
    * Random Forest
    * Naive Bayes
    * SVM
    * XGBoost
    * DNN and more
* Regression
    * Linear Regression
    * GBM
    * Decision Tree
    * Random Forest
    * Elastic Net
    * LARS Lasso
    * XGBoost
* Time Series Forecasting
    * Etc

You can choose which algorithms to run/avoid.

[Full list here](https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml)
### Preprocessing & Featurisation
* Scaling and Normalisation
* Missing value imputing
* Categorical encoding
* Dropping high cardinality features
* Feature Engineering (e.g. deriving date parts)

[More details here](https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml#preprocessing) 
### Running an experiment
Everything is setup using the `AutoMLConfig` class
```python
from azureml.train.automl import AutoMLConfig

automl_run_config = RunConfiguration(framework='python')
automl_config = AutoMLConfig(name='Automated ML Experiment',
                             task='classification',
                             primary_metric = 'AUC_weighted',
                             compute_target=aml_compute,
                             training_data = train_dataset,
                             validation_data = test_dataset,
                             label_column_name='Label',
                             featurization='auto',
                             iterations=12,
                             max_concurrent_iterations=4)
```
To get the list of primary metrics supported, use the `get_primary_metrics` function
```python
from azureml.train.automl.utilities import get_primary_metrics

get_primary_metrics('classification')
```
Submission is done like any other experiment
```python
from azureml.core.experiment import Experiment

automl_experiment = Experiment(ws, 'automl_experiment')
automl_run = automl_experiment.submit(automl_config)
```
### Monitor the Automl Run
Use the `RunDetails` widget. The experiment will intiate a run child for each hyperparameter combination tried. 

The get_output method of an automated machine learning run returns the best mode and the child run that trained it.


```python
best_run, fitted_model = automl_run.get_output()
best_run_metrics = best_run.get_metrics()
for metric_name in best_run_metrics:
    metric = best_run_metrics[metric_name]
    print(metric_name, metric)

# Exploer the Preprocessing steps
for step_ in fitted_model.named_steps:
    print(step)
```
