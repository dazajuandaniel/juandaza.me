# Spark Basics Part I
Notes taken for the Databricks Spark Developer Certification

## Python Collections & Pandas Dataframes

`createDataFrame`

    Takes an iterable as data input & DataTypes for schema among other inputs.
    By default, all columns have the name `value`


```python
# Create DF using List
sample_list = [1,2,3,4]

df = spark.createDataFrame(sample_list, 'int') # Needs the schema since Spark can't infer schema
df = spark.createDataFrame(sample_list, IntegerType())

sample_list_tuples = [(1,),(2,),(3,)]
df = spark.createDataFrame(sample_list_tuples) # This does work without Schema definition
df = spark.createDataFrame(sample_list, ('col_name int')) # Can also add the schema definition

# Create Multi Col DF using List
sample_list_multi = [(1,'A'),(2,'B'),(3,'C')]
df = spark.createDataFrame(sample_list_multi) # This does work without Schema definition
df = spark.createDataFrame(sample_list_multi, ('col_name_A int, col_name_B string')) # Can also add the schema definition

# DF Collect
from pyspark.sql import Row
df.collect() #Returns a List of Rows
new_row = Row(col_name_A=1, col_name_B='my_value') # Values can be accessed new_row.col_name_A or new_row['col_name_A']

# List to Row Conversion
sample_list_of_lists = [[1,'A'],[2,'B'],[3,'C']]
df_rows = [Row(*x) for x in sample_list_of_lists]
df = spark.createDataFrame(df_rows) # This does work without Schema definition
df = spark.createDataFrame(df_rows, ('col_name_A int, col_name_B string')) # Can also add the schema definition
```

## Basic Data Types & Schema Definition
Below are samples of basic data types, more complex ones include `struct`, `array`, and others.
```python
('id', 'bigint'),
('first_name', 'string'),
('last_name', 'string'),
('email', 'string'),
('is_customer', 'boolean'),
('amount_paid', 'double'),
('customer_from', 'date'),
('last_updated_ts', 'timestamp')
```
Below are sample [Spark Types](https://spark.apache.org/docs/latest/sql-ref-datatypes.html):
```python
StructType([
    StructField('id', IntegerType()),
    StructField('first_name', StringType()),
    StructField('last_name', StringType()),
    StructField('email', StringType()),
    StructField('is_customer', BooleanType()),
    StructField('amount_paid', FloatType()),
    StructField('customer_from', DateType()),
    StructField('last_updated_ts', TimestampType())
])
```

The schema can be defined using a string
```python
my_schema = """
    id INT,
    first_name STRING,
    last_name STRING,
    email STRING,
    is_customer BOOLEAN,
    amount_paid FLOAT,
    customer_from DATE,
    last_updated_ts TIMESTAMP
"""

df = spark.createDataFrame(my_data, schema=my_schema)
```

## Pandas Dataframe


