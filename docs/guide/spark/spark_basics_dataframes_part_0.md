# Spark Basics
Notes taken for the Databricks Spark Developer Certification

## Spark Basic Architecture

### Spark Components
**Driver**

Machine in which the application runs:
* Mantains info about Spark application
* Responds to user's program
* Analyses, distributes, and schedules work across executors
Note: In a single cluster, there will only be ONE driver, regardless of the num of executors.

**Executors**

Holds a chunk (partition) of data to be processed. Responsible for carrying out work assigned bt the driver
* Executes code assigned by the driver
* Reports the state of the computation back to the driver

**Slot**

Each executor has a number of slots, each slot can be assigned a task.

**Task**

Tasks are created by the driver and assigned a partition of data to process.

**Notes**

Driver => Worker => Executor => Slots

### Transformations, Actions, Executions

**Lazy Evaluation**
Spark waits until the last moment to execute a series of operations.

**Transformations**
The instructions you use to modify a DataFrame to get the results that you want
* **Narrow Transformations** the data required to compute the records in a single partition reside in at most one partition of the parent dataset. 

* **Wide transformations** the data required to compute the records in a single partition may reside in many partitions of the parent dataset. Wide transformations require that data be redistributed over the system. This is called a shuffle. Shuffles are triggered when data needs to move between executors. 

**`Narrow` vs `Wide` transformations**

Any function that results in shuffling is a `wide` transformation.
| Type | Definition| Examples |
|:-:|:-:|:-:|
|**Narrow**|Those where each input partition will contribute to only one output partition.| `select`, `filter`, `withColumn`,`drop` |
|**Wide**| Have input partitions contributing to many output partitions| `distinct`, `union`, `groupBy`, `sort`, `join` |

**Cluster Manager**

**Dynamic Partition Prunning**
Is intended to skip over the data you don't need in the results of a query

**Spark Garbage Collection**
* Garbagae collection information can be accessed in Spark's UI
* Serializing caching can be a strategy to increase the performance of GC
* Optimizing garbage collection performance in Spark may limit caching ability.

**Client vs Cluster Mode**
In cluster mode, the driver runs on the worker nodes, while in client mode, the driver runs on the client machine.

**[Adaptive Query Execution](https://databricks.com/blog/2020/05/29/adaptive-query-execution-speeding-up-spark-sql-at-runtime.html)**
Features are dynamically switching join strategies and dynamically optimizing skew joins
