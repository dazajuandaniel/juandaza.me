# Data Engineering Tricks with Databricks

## General Databricks

Include different functions, variables or the likes from configuration files into the Databricks notebooks. 

Similar to doing `from library import bla`
```bash
%run ./<path_to_file>/<config_file>
```

**Databricks Utilites**
```bash
# List files
dbutils.fs.ls(<path>)
```
## Delta Table Versioning

## Streams
::: tip
Best practice is to avoid using `.table()` notation since it will create fully managed tables by writing output to a default location on DBFS.
:::



Create a Stream
```python
from pyspark.sql.functions import col

(
    raw_health_tracker_data_df.select(
        "datasource", "ingesttime", "value", col("ingestdate").alias("p_ingestdate")
        )
    .writeStream.format("delta")
    .outputMode("append")
    .option("checkpointLocation", bronzeCheckpoint)
    .partitionBy("p_ingestdate")
    .queryName("write_raw_to_bronze")
    .start(bronzePath)
)
```

Dsiplay running Streams
```python
for stream in spark.streams.active:
    print(stream.name)
```