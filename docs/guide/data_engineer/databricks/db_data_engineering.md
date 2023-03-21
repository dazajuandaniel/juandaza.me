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

# View first few rows
dbutils.fs.head(<path>)
```

## Delta Table API
Delta Lake provides programmatic APIs to examine and manipulate Delta tables.

```python
from delta.tables import DeltaTable

bronzeTable = DeltaTable.forPath(spark, bronzePath)
```

Delta Table Update

```python
from delta.tables import DeltaTable

silverTable = DeltaTable.forPath(spark, silverPath)

update_match = """
  health_tracker.eventtime = updates.eventtime
  AND
  health_tracker.device_id = updates.device_id
"""

update = {"heartrate": "updates.heartrate"}

(
    silverTable.alias("health_tracker")
    .merge(updatesDF.alias("updates"), update_match)
    .whenMatchedUpdate(set=update)
    .execute()
)
```

Delta Table Prevent Duplicate Writes

```python
from delta.tables import DeltaTable

silverTable = DeltaTable.forPath(spark, silverPath)

existing_record_match = """
    table.value = latearrivals.value
"""

(
    silverTable.alias("health_tracker")
    .merge(lateArrivalDF.alias("latearrivals"), existing_record_match)
    .whenNotMatchedInsertAll()
    .execute()
)
```

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

Display running Streams
```python
for stream in spark.streams.active:
    print(stream.name)
```

Register Table in Metastore

* A Delta table registered in the Metastore is a reference to a physical table created in object storage.
* Furthermore, no table repair is required
* [AWS Glue](https://docs.databricks.com/data/metastores/aws-glue-metastore.html) can be used as Metastore

```python
spark.sql(
    """
DROP TABLE IF EXISTS health_tracker_plus_bronze
"""
)

spark.sql(
    f"""
CREATE TABLE health_tracker_plus_bronze
USING DELTA
LOCATION "{bronzePath}"
"""
)
```

