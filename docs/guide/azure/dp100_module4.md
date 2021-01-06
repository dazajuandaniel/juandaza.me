# Azure DP-100 Module 4

## Datastores
A `datastore` is an abstraction for cloud data sources:
* Azure Storage
* Azure Data Lake
* Azure SQL DB
* Databricks file system
* Azure Database for PostgreSQL
* Azure Database for MySQL
* Azure Blob Container

Data stores can be accessed via the SDK, or mounted in an experiment in order to read/write data.

### Adding Datastores to a Workspace
Every workspace has 2 built-in datasores by default (Storage Blob Containter & Azure Storaga File Container), however, you can add external ones since data might be there.

#### Registering a Datastore
```python
from azureml.core import Workspace, Datastore

ws = Workspace.from_config()

# Register a new datastore
blob_ds = Datastore.register_azure_blob_container(workspace=ws,
                                                  datastore_name='blob_data',
                                                  container_name='data_container',
                                                  account_name='az_store_acct',
                                                  account_key='123456abcde789…')
...

# View Datastores
for ds_name in ws.datastores:
    print(ds_name)

...

# Reference a datastore
blob_store = Datastore.get(ws, datastore_name='blob_data')
```

Use the Workspace.get_default_datastore() method to get the default datastore.



### Using Datastores
The `datastore` class allows working directly with a datastore to upload or download data.
```python
blob_ds.upload(src_dir='/files',
               target_path='/data/files',
               overwrite=True, show_progress=True)
```

If you want to use a datastore in a script, you have to pass the data reference as an argument. It can be:
* Download
* Upload
* Mount

To access a path in a datastore in an experiment script, you must create a data reference and pass it to the script as a parameter. The script can then read data from the data reference parameter just like a local file path.


```python
# Configure the data reference to be passed to the Estimator
data_ref = blob_ds.path('data/files').as_download(path_on_compute='training_data')
estimator = SKLearn(source_directory='experiment_folder',
                    entry_script='training_script.py'
                    compute_target='local',
                    script_params = {'--data_folder': data_ref})

# Usage in the script
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--data_folder', type=str, dest='data_folder')
args = parser.parse_args()
data_files = os.listdir(args.data_folder)
```
## Datasets
They are versioned packaged data objects.
There are two different types:
1. Tabular (structured)
2. File (unstructured)

You can create datasets from individual files or multiple file paths. The paths can include wildcards (for example, /files/*.csv) making it possible to encapsulate data from a large number of files in a single dataset.

### Creating a Tabular Dataset
Using the SDK, you can use the `from_delimited_files` method in the `Dataset` class.
```python
from azureml.core import Dataset

blob_ds = ws.get_default_datastore()
csv_paths = [(blob_ds, 'data/files/current_data.csv'),
             (blob_ds, 'data/files/archive/*.csv')]
tab_ds = Dataset.Tabular.from_delimited_files(path=csv_paths)
tab_ds = tab_ds.register(workspace=ws, name='csv_table')
```
### Creating a File Dataset
Using the SDK, you can use the `from_files` method in the `Dataset` class.
```python
from azureml.core import Dataset

blob_ds = ws.get_default_datastore()
file_ds = Dataset.File.from_files(path=(blob_ds, 'data/files/images/*.jpg'))
file_ds = file_ds.register(workspace=ws, name='img_files')
```
To retrieve a dataset you can do one of the following:
1. Use the `Datasets` dictionary attribute of the Workspace object
2. Use the `get_by_name` or `get_by_id` of the `Dataset` class.

### Reading Data from Datasets
Data can be read directly from a dataset or passed as a named input to a script configuration.

```python
# Tabular
df = tab_ds.to_pandas_dataframe()

#Files
for file_path in file_ds.to_path():
    print(file_path

# As Scripts
estimator = SKLearn( source_directory='experiment_folder',
                     entry_script='training_script.py'
                     compute_target='local',
                     inputs=[tab_ds.as_named_input('csv_data')],
                     pip_packages=['azureml-dataprep[pandas]')
```
**Note** Since we are passing the dataset as an argument, we nned the `azureml-dataprep[pandas]` package installed.

### Data Versioning
Data can be versioned by using the `create_new_version` argument in the `register` function
```python
img_paths = [(blob_ds, 'data/files/images/*.jpg'),
             (blob_ds, 'data/files/images/*.png')]
file_ds = Dataset.File.from_files(path=img_paths)
file_ds = file_ds.register(workspace=ws, name='img_files', create_new_version=True)

# To retrieve a specific version
img_ds = Dataset.get_by_name(workspace=ws, name='img_files', version=2)
```