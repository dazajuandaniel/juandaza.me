# Sagemaker Studio Deepdive

## Interesting Concepts

### Compute Instances
Compute instances live in Containers and a container can have specific algorithms or images. Spot instances can also be used.

```python
container = get_image_uri(region, 'xgboost', repo_version = '0.90-2')
``` 
### Debugger
[**Sagemaker debugger:**](https://sagemaker.readthedocs.io/en/stable/amazon_sagemaker_debugger.html)

Tries inspect what's going on in the model and save the state to s3

```python
debugger_hook_config = DebuggerHookConfig(
    s3_output_path = "s3_xxx"
    collection_configs=[
        name="metrics",
        parameter={
            "save_internal":save_internal
        },
        CollectionConfig(
            name="feature_importance",
            parameters={
                "save_interval": save_intercval
            }
        )
    ]
)
```
Sagemaker knows how to automatically calculate metrics and feature importance for the different estimators used.

[**Rules**](https://sagemaker.readthedocs.io/en/stable/amazon_sagemaker_debugger.html#continuous-analyses-through-rules)

Check for rules such as class imbalance (as part of the debugger)
```python
rules=[
    Rule.sagemaker(
        rule_config.class_imbalance(),
        rule_parameters={
            "collection_names":"metrics"
        }
    )
]
```
Custom rules can be applied while training is ongoing. These rules are run when the model is training and raise alerts.

### Other Features
* Support for Batch Prediction as well as HTTPS predictions
* Ability to launch an Automatic Model [Tunning Jobs](https://sagemaker.readthedocs.io/en/stable/api/training/tuner.html)

### Resources
* [YouTube Video](https://www.youtube.com/watch?v=pGhn8Ax8QmQ&ab_channel=AWSOnlineTechTalks)