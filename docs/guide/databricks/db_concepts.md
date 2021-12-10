# Databricks Concepts

## Delta Table
Delta lakes are composed of three main things:

1. Files written to object storage
2. Transaction Log
3. [Optional] Metastore reference

### Transaction Logs
Transaction logs are ordered records of transactions performed on a delta table, it is the single source of truth for the table. Each transaction is `json` file.

Operations are broken downt into one or more:
* Add file
* Remove file
* Update metadata
* and more...

`DESCRIBE` & `DESCRIBE HISTORY` commands
* `describe` returns the metadata of a table
* `describe history` includes even more metadata - only available for delta tables queried using Databricks. History is kept for 30 days

### Time Travel
Query an older snapshot
```sql
SELECT * FROM events TIMESTAMP AS OF <timestamp_expression>

SELECT * FROM events version AS OF <version>
```
Using the Python API
```python
df1 = spark.read.format("delta") \
           .option("versionAsOf",<version>) \
           .load(<path>)
```