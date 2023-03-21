# Medallion Architecture

**Bronze**
* "Copy" of Raw ingested data -> replaces the traditional Data Lake. 
* Usually it's the append only function (idea is to retain full history)
* Captures provenance -> date recieved, source, a field with raw unparsed, any other metadata
* Should be append only
* Plan ahead if it needs to be deleted

**Silver**

* Validated, enriched data for downstream analytics.
* Unlocks benefits since it's usable. 
* Preserves grain of original data (no aggregations). 
* Eliminates duplicate records. 
* Production enforced schema
* Data quality checks, corrupt data quarantined
* Use DeltaLake tables

**Gold**
* Refined views of data, typically aggregations
* Optimizes query performance for business critical data