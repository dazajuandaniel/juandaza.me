# Incremental Data & Autoloader
Important since allows to deal solely with only new data.
Autoloader is the recommended approach by Databricks
* Execute Autoloader code
* Describe what happens when a new file arrives
* Query a table fed by a streaming Auto Loader Query

### Autoloader
Minimum set of arguments
| Argument               | Definition                                     |
|------------------------|------------------------------------------------|
| `data_source`          | Directory of the source data                   |
| `source_format`        | Format of the source data                      |
| `table_name`           | Name of the target table                       |
| `checkpoint_directory` | Location for storing metadata about the stream |

```python
def myfunct(source_format, checkpoint_directory, data_source, table_name):
    query = (
        spark.readStream
             .format("cloudFiles")
             .option("cloudFiles.format", source_format)
             .option("cloudFiles.schemaLocation", checkpoint_directory)
             .load(data_source)
             .writeStream
             .option("checkpointLocation", checkpoint_directory)
             .option("mergeSchema", "true")
             .trigger(once=True)
             .table(table_name)
             .awaitTermination() #Optional to block execution of next cells
    )
    return query

query = myfunct(data_source='my/path',source_format='json',checkpoint_directory='other/path',table_name='table')
```
### Incremental Data
A `data stream` describes any data source that grows over time:
* A new JSON log file landing in S3
* Updates to a database captured in a CDC feed
* Events queued in a pub/sub feed
* A CSV file of sales closed the previous day

**Basic Concepts**
1. `input_table` -> Streaming read against
2. `query` -> Defined againts the input table.
3. `results_table` -> Contains the incremental state information of the stream
4. `output` -> will persist updates to the results by writing to an external `sink`. A sink is a durable system
5. `trigger interval` -> New rows are appended to the input table for each interval (similar to micro batches)

Structured Streaming ensures end-to-end exactly-once fault-tolerance through checkpointing and `write ahead logs`
    * Streaming sinks are designed to be idempotent

**Reading a Stream**
```python
spark.readStream.table('bronze').createOrReplaceTempView('streaming_tmp_vw')
```

**Unsupported Operations**
Some operations are not supported, it doesn't make sense to sort an infite growing table
* `ORDER BY`