# Entities on Databricks
Brief overview of different entities in Databricks such as Tables, DBs, and more. Topics to discuss:
* Create & Explore databases and tables on Databricks
* Views & CTEs on Databricks

## Databases & Tables

**Create a Database**
```sql
CREATE DATABASE IF NOT EXISTS <db_name>
CREATE DATABASE IF NOT EXISTS <db_name> LOCATION <location>
```
When creating a database in Databricks, if no location is provided, it's created in `dbfs:/users/hive/warehouse/`

It's best practice to include a location when creating a database:
* Avoids storing the data on the default location and rather use a mounted location


To get metadata details for the Database, run the below command
```sql
DESCRIBE DATABASE EXTENDED <db_name>
```

**Create a (managed) Table within the Database**
```sql
USE <db_name>;
CREATE OR REPLACE TABLE <table_name> (<schema>);
```
```sql
DESCRIBE EXTENDED <table_name>
```

**Create External/Unmanaged Tables**
```sql
CREATE OR REPLACE TABLE <table_name> LOCATION <location> AS
    SELECT * FROM <source_table>
```
Managed vs Unmanaged (External) Tables
* **Managed Table:** 
    * Created without the `LOCATION` keyword
    * When dropped, the files are also removed (metadata + data are removed)
* **Unmanaged Table:**
    * Created with the `LOCATION` keyword
    * When dropped, the files are NOT removed. Only metadata is removed.

**Create Temporary Tables/Tables from Files**
```sql
CREATE OR REPLACE TEMPORARY TABLE <tb_name> USING <format> OPTIONS (<options>); 
```
## Views & CTEs

**Create Views**
```sql
CREATE OR REPLACE VIEW <view_name> AS
    <select_from_statement >
```
Views don't create underlying files. The logic is registered in the Metastore (definition of the instruction rather than data itself).

Temporary views/tables are lost when the notebook is deattached from the cluster (they only live within the existing Spark Session).

Create a `global` view
```sql
CREATE OR REPLACE GLOBAL VIEW <view_name> AS
    <select_from_statement >
```
It's not used often, but it's possible to create. `Global` are registered as long as the **Cluster** lives.

**Common Table Expressions (CTES)**
Inline statements - they live in the execution of the cell.
```sql
WITH <name> AS (
    select_from_statement
)
SELECT * FROM <name>
```
`CTEs` can be used in conjuction with `CREATE VIEW` statements