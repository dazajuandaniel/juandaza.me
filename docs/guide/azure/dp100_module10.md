# Azure DP-100 Module 10

## Monitoring Models with Application Insights
Application insights is an appfor performance managements of Azure services.

### Enabling Application Services
You must have an Application Insights resource associated with your AML workspace. A new Azure Application Insights is created when a new workspace is created by default (you can also add one previously created).

To determine the one associated with your workspace you can view the Overview the page in the portal or by using the `get_details()` methods of a `Workspace` object.
```python
from azureml.core import Workspace

ws = Workspace.from_config()
ws.get_details()['applicationInsights']
```
To enable use the `enable_app_insights` parameter.
```python
dep_config = AciWebservice.deploy_configuration(cpu_cores = 1,
                                                memory_gb = 1,
                                                enable_app_insights=True)
```
Any values written to standard output will be captured. The logs can be queried from the Azure Portal.

To include custom metrics, add print statements to the scoring script so that the custom information is written to the STDOUT log.

## Monitoring Data Drift
This change in data profiles between training and inferencing is known as data drift.

Data Drift monitoring is done via `datasets`. You can compare two datasets to detect drift or compare new feature data submitted to the training data.

To monitor the data, you need to register both datasets
1. A `baseline` dataset (e.g. training)
2. A `target` dataset to be compared based on time intervals. Requires a timestamp

Then you need define a `dataset monitor` to detect drift using the `DataDriftDetector` class.
```python
from azureml.datadrift import DataDriftDetector

monitor = DataDriftDetector.create_from_datasets(workspace=ws,
                                                 name='dataset-drift-detector',
                                                 baseline_data_set=train_ds,
                                                 target_data_set=new_data_ds,
                                                 compute_target='aml-cluster',
                                                 frequency='Week',
                                                 feature_list=['age','height', 'bmi'],
                                                 latency=24)
```
After creating the dataset monitor, you can backfill to immediately compare the baseline dataset to existing data in the target dataset:
```python
import datetime as dt

backfill = monitor.backfill( dt.datetime.now() - dt.timedelta(weeks=6), dt.datetime.now())
```
[More details here](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-monitor-datasets)

### Monitoring Drift in Service Inference
The steps required are:

1. Register the baseline dataset with the model
    ```python
    from azureml.core import Model, Dataset

    model = Model.register(workspace=ws,model_path='./model/model.pkl', model_name='my_model',
                        datasets=[(Dataset.Scenario.TRAINING, train_ds)])
    ```
2. Enable data collection for the Deployed Model:
    * You must use the `ModelDataCollector` class in each service's scoring script, writing code to capture data and predictions and write them to the data collector 
    ```python
    from azureml.monitoring import ModelDataCollector

    def init():
        global model, data_collect, predict_collect
        model_name = 'my_model'
        model = joblib.load(Model.get_model_path(model_name))

        # Enable collection of data and predictions
        data_collect = ModelDataCollector(model_name,
                                        designation='inputs',
                                        features=['age','height', 'bmi'])
        predict_collect = ModelDataCollector(model_name,
                                            designation='predictions',
                                            features=['prediction'])
    def run(raw_data):
        data = json.loads(raw_data)['data']
        predictions = model.predict(data)

        # collect data and predictions
        data_collect(data)
        predict_collect(predictions)

        return predictions.tolist()
    ```
3. Enable data collection in the deployment configuration
    ```python
    from azureml.core.webservice import AksWebservice

    dep_config = AksWebservice.deploy_configuration(collect_model_data=True)
    ```
4. Configure Data Drfit Detection
    * Use the `DataDriftDetector` class to configure the drift monitor
    ```python
    from azureml.datadrift import DataDriftDetector, AlertConfiguration

    # create a new DataDriftDetector object for the deployed model
    model = ws.models['my_model']
    datadrift = DataDriftDetector.create_from_model(ws, model.name, model.version,
                                        services=['my-svc'],
                                        frequency="Week")
    ```
**Note**

You can set a schedule and a threshold for the data drift monitor as wella as alerts.
    
* `frequency`: Can be day, week or month
* `latency`: Number of hours to allow for data collection
* for deployed models, you can specify `schedule_start` to indicate when the data drift run should start
* `drift_threshold`: magnitude above which you want to be notified

To notify operators about data drift, create an AlertConfiguration with the email address to be notified, and a drift threshold that defines the level of change that triggers a notification.

