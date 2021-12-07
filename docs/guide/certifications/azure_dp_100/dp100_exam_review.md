# Azure DP-100 Exam Review Topics

## Deployment Inference
* `AciWebservice` vs `AKSWebservice`
    * Deployment Configurations in each
* `Pipeline` Submit Configurations
* `Endpoint` authentication
* What is the source servive tag `BatchNodeManagement`
* `tokens` vs `keys`

## Automl
* Required Tabular data
* Requires remote compute

## Instances Series
* NCv2 -> Run Image Classification deep learning models leveraing CUDA
* DSv2 -> General Purpose (No support for GPUs)
* Fs -> Compute Optimized (No support for GPUs)
* Lsv2 -> Storage optimized VMs

## Workspace & Datastores
* Everytime a new workspace is created, a default datastore is created (it cannot be deleted), its name is `workspaceblobstore`

## [ONNX](https://docs.microsoft.com/en-us/azure/machine-learning/concept-onnx)
ONNX is an open format built to represent machine learning models. ONNX defines a common set of operators - the building blocks of machine learning and deep learning models - and a common file format to enable AI developers to use models with a variety of frameworks, tools, runtimes, and compilers

## Pipeline Details
* Download the output files generated by the experiment
    1. Get the latest run
        ```python
        bath_run = pipelinerun.find_step_run(pipelin.name)[0]
        ```
    2. Get output data
        ```python
        out = batch_run.get_output_data(output.name)
        ```
    3. Download data
        ```python
        out.download(local_path)
        ```

## Reinforcement Learning
For RL jobs that use multiple compute targets, you must specify a virtual network with open ports that allow worker nodes and head nodes to communicate with each other.

## Metrics for Models
**Classification**
* Accuracy
* Precision
* Recall
* F-Score
* AUC
* Average Log Loss
* Training Log Loss

**Metrics for Regression**
* Mean Absolute Error (MAE)
* Root mean squared error (RMSE)
* Relative Absolute Error (RAE)
* Relative Sqaured Error (RSE)
* Mean Zero One Error (MZOE)
* Coefficient of Determination (R2)

## Other Facts
Use Vowpal Wabbit for DNN