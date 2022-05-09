# ETL using SQL on Databricks
Brief overview of using SQL to Extract, Load, & Transform data in Databricks. Topics to discuss:
* Extracting data directly & Using options for external sources
* Delta Tables
* SQL Transformations
* UDFs & Control Flows

## Extracting Files Directly

```sql
SELECT * FROM <file_format>.`path_to_file`

--JSON
SELECT * FROM json.`my/path/here`

--CSV
SELECT * FROM text.`my/path/here` 
```
Assuming all files in the path_to_file have the same schema, only folder is required, not file itself.

This works best for self-describing formats (`json`, `parquet`, `delta`) not really for formats such as `csv`.

For `csv`, the best is to have a schema declaration. This can be done by using External Data Sources.

```sql
CREATE TEMPORARY TABLE <table_name> USING <format> OPTIONS (<options>); 

--CSV
CREATE TEMPORARY TABLE <table_name> (<schema>) USING CSV OPTIONS (
    header = 'true',
    delimiter = ','
)
LOCATION 'my/path/here'; 
```

**JDBC** connections can also be used.

**Limits of External Data Sources**
* when defining tables against external sources we cannot guarantee performance guarantees associated with `Delta` i.e. latest version, etc
* We can manually refresh by running 
    ```sql 
    REFRESH TABLE <table_name>
    ```

## Delta Tables
CTAS (Create Table as Select)
```sql
CREATE OR REPLACE TABLE <tb_name> AS
    SELECT * FROM parquet.`file/path`

DESCRIBE EXTENDED sales
```
Notes on CTAS:
* Infer schema automatically from query results and **DO NOT** support manual schema declaration
* Do not support additional file `options` -> To do this, we first create and register an external table (temp table) and use that as a create

**Generated Columns**

Special type of column whose values are automatically generated based on user-specified function of an existing column. Special implementation of `check constraint`
```sql
CREATE OR REPLACE TABLE <> (
    id STRING,
    date DATE GENERATED ALWAYS as (
        <function using existing column>
    )
)
```
If the value given for a generated column, does not match what the generated column would calculate, there's an error

**Table Constraints**
```sql
ALTER TABLE <> ADD CONSTRAINT <constraint_name> (<similar to where clause here>)
DESCRIBE EXTENDED sales -- Shown here the constraints
```

**Enrich Tables with Additional Options & Metadata**

* `current_timestamp()`
* `input_file_name()`
* `COMMENT`
* `LOCATION`
* `PARTITIONED BY`
As best practice, you should default to non-partitioned tables for most use cases
```sql
CREATE OR REPLACE TABLE <>
COMMENT <>
LOCATION <>
PARTITIONED BY <>
AS
    SELECT
        *
    FROM <>

DESCRIBE EXTENDED <>
```
**Cloning Delta Tables**
* `Deep Clone` -> Incremental changes, all data files are copied over
* `Shallow Clone` -> No data files are copied, only delta transaction logs

**Writing to Delta Talbes**

* `INSERT OVERWRITE` -> Overwrites the full table (still ACID compliant). Expects the same schema (unless options are used)
* `INSERT INTO` -> Appends new rows. No built in guarantees for avoiding duplicates
* `MERGE INTO` -> Updates. Rather than having 3 txns, there's only one to do.
* `CTAS` -> Overwrites the full table (still ACID compliant). Allows to redefine schema
* `COPY INTO` -> Loads incrementally it's idempotent. Expects consistent schema

```sql
--MERGE INTO
MERGE INTO <>
USING <>
ON <>
WHEN MATCHED THEN <>
WHEN NOT MATCHED THEN <>
```
**SQL UDFs**
```sql
CREATE OR REPLACE FUNCTION name(<> STRING)
RETURNS STRING
RETURN <FUNC>

DESCRIBE FUNCTION EXTENDED name
```
SQL UDFs persist between execution environemnts, exist as objects in the metastore and are governed by the same Table ACLs as Databases, tables or views