# PySpark Snippets

### Basic Code Snippets

Count distincts
```python
df.select('col_name').distinct.show()
```

Fill NA
```python
df.fillna({'col':'fill_value'})
```

Pivot DataFrame
```python
df.groupby("column").pivot("column2").agg(count("column3"))
```

### Window Function

Useful [Stackoverflow Question](https://stackoverflow.com/questions/56287224/rangebetween-with-negative-values-for-previous-rows)
```python
w = (Window()
     .partitionBy(col(''),col(''),...)
     .orderBy(col(''),col(''),...)
     .rowsBetween(Window.unboundPreceding,0)
)

df = df.withColumn('new_name',count('col_name').over(w))
```

### Forward Filling in PySpark

Taken from [this link](https://johnpaton.net/posts/forward-fill-spark/)

```python
from pyspark.sql import Window
from pyspark.sql.functions import last

# define the window
window = Window.partitionBy('location')\
               .orderBy('time')\
               .rowsBetween(-sys.maxsize, 0)

# define the forward-filled column
filled_column = last(spark_df['temperature'], ignorenulls=True).over(window)

# do the fill
spark_df_filled = spark_df.withColumn('temp_filled_spark', filled_column)

# show off our glorious achievements
spark_df_filled.orderBy('time', 'location').show(10)  
```

### Applying a mapping from a dictionary
```python
from itertools import chain
from pyspark.sql.functions import *

mapping_expr = create_map([lit(x) for x in chain(*mapping_dict.items())])
df = df.withColumn("result", mapping_expr.getItem(col("column")))
```

### Rolling Window Structure
```python
from pyspark.sql.window import Window

windowSpec = \
  Window \
    .partitionBy(...) \
    .orderBy(...)
```