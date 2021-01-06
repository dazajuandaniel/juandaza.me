# Azure DP-100 Module 9

## Model Interpretability
Based on the `Interpret-Community` package.
### Global and Local Feature Importance
`Global feature` importance quantifies the relative importance of each feature in the test dataset as a whole.

`Local feature` importance measures the influence of each feature value for a specific individual prediction.
### AutoML Learning Explanations
To generate model explanations when using automated machine learning, you must enable model explainability.

To generate explanations you can:

* Select the Explain best model configuration setting in the user interface.
* Specify the `model_explanaibility` option in the `AutoMLConfig` object in the SDK
    ```python
    automl_config = AutoMLConfig(name='Automated ML Experiment',
                                # <other configuration settings here...>
                                model_explainability=True
                                )
    ```

To view the explanations you can:

* Open the experiment run in Studio and go to the `explanations` tab
* Use the `RunDetails` widget to view an automated run in Jupyter
* Use the `ExplanationClient` class in the SDK
    ```python
    from azureml.contrib.interpret.explanation.explanation_client import ExplanationClient

    # Get the best model (2nd item in outputs)
    best_run, fitted_model = automl_run.get_output()

    # Get the feature explanations
    client = ExplanationClient.from_run(best_run)
    explanation = client.download_model_explanation()
    feature_importances = explanation.get_feature_importance_dict()
    ```
**Note:** When `featurization` is enabled for automated machine learning, the explanation includes the importance of the engineered features.

## Model Explainers
AML SDK can be used to create explianers for local models, even if they were not trained using AML experiments. It can be done by using the `azureml-interpret` package

Types of explainers:
* `MimicExplainer`: creates a global surrogate model
* `TabularExplainer`: acts as a wrapper around various SHAP explainer algorithms
* `PFIExplainer`: **P**ermutation **F**eature **I**mportance explainer that analyzes feature importance by shuffling feature values and measuring the impact on prediction performance

Example for Mimic Explainer
```python
from interpret.ext.blackbox import MimicExplainer
from interpret.ext.glassbox import DecisionTreeExplainableModel

mim_explainer = MimicExplainer(model=loan_model,
                               initialization_examples=X_test,
                               explainable_model = DecisionTreeExplainableModel,
                               features=['loan_amount','income','age','marital_status'],
                               classes=['reject', 'approve'])
```
### Adding Interpretability to Training Experiments
Both packages are required `azureml-interpret` and `azureml-contrib-interpret`

To include an explanation in the run details, the training script must use the ExplanationClient.upload_model_explanation method to upload the explanation created by an Explainer.


```python
# Import Azure ML run library
from azureml.core.run import Run
from azureml.contrib.interpret.explanation.explanation_client import ExplanationClient
from interpret.ext.blackbox import TabularExplainer
# other imports as required

# Get the experiment run context
run = Run.get_context()

# code to train model goes here
...

# Get explanation
explainer = TabularExplainer(model, X_train, features=features, classes=labels)
explanation = explainer.explain_global(X_test)

# Get an Explanation Client and upload the explanation
explain_client = ExplanationClient.from_run(run)
explain_client.upload_model_explanation(explanation, comment='Tabular Explanation')

# Complete the run
run.complete()
```
### Adding Interpretability to Inferencing
First create a scoring explainer and add it to the `run(raw_data)` function
```python
from interpret.ext.blackbox import TabularExplainer
from azureml.interpret.scoring.scoring_explainer import KernelScoringExplainer, save
from azureml.core import Model

# Get a registered model
loan_model - ws.models['loan_model']

tab_explainer = TabularExplainer(model = loan_model,
                             initialization_examples=X_test,
                             features=['loan_amount','income','age','marital_status'],
                             classes=['reject', 'approve'])

# Create and save a scoring explainer
scoring_explainer = KernelScoringExplainer(tab_explainer, X_test[0:100])
save(scoring_explainer, directory='explainer', exist_ok=True)

# Register the explainer (like a model)
Model.register(ws, model_name='loan_explainer', 'explainer/scoring_explainer.pkl')
```
```python
import json
import joblib
from azureml.core.model import Model

# Called when the service is loaded
def init():
    global model, explainer
    # load the model
    model_path = Model.get_model_path('loan_model')
    model = joblib.load(model_path)
    # load the explainer
    explainer_path = Model.get_model_path('loan_explainer')
    explainer = joblib.load(explainer_path)

# Called when a request is received
def run(raw_data):
    # Get the input data
    data = np.array(json.loads(raw_data)['data'])
    # Get a prediction from the model
    predictions = model.predict(data)
    # Get explanations
    importance_values = explainer.explain(data)
    # Return the predictions and explanations as JSON
    return {"predictions":predictions.tolist(),"importance":importance_values}
```
```python
service = Model.deploy(ws, 'loan-svc', [model, explainer], inf_config, dep_config)
```
