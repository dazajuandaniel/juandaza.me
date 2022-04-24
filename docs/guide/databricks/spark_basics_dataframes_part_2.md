# Spark Basics Part II
Notes taken for the Databricks Spark Developer Certification

## Selecting & Renaming Columns
```python
# Select All
df.select('*')

# Select based on Names
df.select('colA','colB','colC')
df.select(['colA','colB','colC'])

# Alias
df.alias('al').select(['al.colA','al.colB','al.colC'])

# Using Col
from pyspark.sql.functions import col
df.select(col('colA'),col('colB'),col('colC'))

# Combining
df.select(col('colA'),'colB',col('colC').alias('alias_colC'))

# Select Expression -> SQL Type Expression
df.selectExpr("*")
df.selectExpr("abs(colA)")
df.selectExpr(col('colA'),'colB',"colC AS alias_colC")

# Using ToDF
df.select(col_name_list).toDF(*target_name_list)
```

## Persist & Cache
```python
from pyspark import StorageLevel
transactionsDf.persist(StorageLevel.MEMORY_ONLY)
```
The storage level `MEMORY_ONLY` means that all partitions that do not fit into memory will be recomputed when they are needed.

```python
transactionsDf.cache() # .cache() does not take any arguments
```
The default storage level of `DataFrame.cache()` & `DataFrame.persist()` is `MEMORY_AND_DISK`, meaning that partitions that do not fit into memory are stored on disk.

## [Coalesce vs Repartition](https://blog.rockthejvm.com/repartition-coalesce/)
| Type | Definition| Examples |
|:-:|:-:|:-:|
|**coalesce**|While coalesce() can perform a partial shuffle when required, it will try to minimize shuffle operations, so the amount of data that is sent between executors.| `select`, `filter`, `withColumn`,`drop` |
|**repartition**| Always triggers a full shuffle | `distinct`, `union`, `groupBy`, `sort`, `join` |
The fundamental benefit of a repartition is uniform data distribution, which a coalesce can’t guarantee.