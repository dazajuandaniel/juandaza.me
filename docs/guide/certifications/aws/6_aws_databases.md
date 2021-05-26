# RDS & ElasticCache
## Overview
Managed Relational Database Service
* Postgre
* MySQL
* MariaDB
* SQL Server
* Oracle
* Aurora

**Benefits**
1. Provisioning is automated
2. Continuos backups and restore to specific timestamp
3. Read replicas for performance improvement
4. Multi AZ setup for DR
5. Maintenance Windows
6. Scaling capability
7. Storaged backed by EBS (`gp2` or `io1`)

**Backups**
* Automatically enabled by default
* Transaction logs are done every 5 mins.
* 7-day retention (increased to 35 days)

**Snapshots**
* Triggered by user
* Retention is up to user

**RDS AutoScaling**
* Increases storage dynamically -> Avoid manual scaling, useful for unpredictable workloads
* User has to set *Maximum Storage Threshold*

## Read Replicas vs Multi AZ

### Read Replicas
![rds_read_replica](/images/rds_read_replica.png)

Helps scale `reads`, user can:
* Set up to 5 read replicas within AZ, cross AZ or cross region
* Replication is **Async** -> reads are eventually consistent.
* Replicas can be promoted to their own database.
* **Note** -> Applications must update the connection string to leverage the read replicas.

**Network Costs**
* If Read Replica are within the same region, there are NO networking costs.
* For Cross Region replica, will incur in a replication fee for network

### Multi AZ
![rds_multi_az](/images/rds_multi_az.png)

Uses **Sync** replication
* Writes need to be replicated to be accepted
* Get one DNS name
* Increases availability and failover
* No manual intervention in Apps

To go from Single AZ to Multi AZ:
* Zero downtime operation, just click on `modify` in the DB settings
What happens is that a snapshot is taken and restored into a new standby DB. Then Sync is established.

## Encryption & Security
### Encryption
At rest encryption:
* Possibility to encrypt master & read. *If master is not encrypted, replicas can't be encrypted*
* Transparent Data Encryption (TDE) is available for Oraacle and SQL Server

In flight encryption:
* SSL certificates to encrypt data
* User can enforce SSL

**Encryption Operations**

RDS Backups:
* Snapshots of unencrypted DBs are unencrypted
* Snapshots of encrypted DBs are encrypted
* Users can copy a snapshot unencrypted and then create an encrypted version.
    1. Create a snapshot
    2. Copy and enable encryption
    3. Restore DB from encrypted version
    4. Migrate applications to new DB and delete old DB.

### Security
RDS are usually deployed in a private subnet, not a public one and works by leveraging security groups.

**Access Management**
* IAM policies help control who can manage the RDS
* Tradition Username/Pwd can be used to login the DB
* IAM-Based authentication can be used to login into the RDS only for `MySQL` & `Postgre`

## Aurora

### Overview

It's a propietary technology from AWS. Both MySQL & MariaDB are supported -> it's cloud optimized.
* Automatically grows up to 64TBs
* Can have up to 15 replicas (MySQL has 5)
* Failover is instantaneous (HA native)
* Industry Compliance
* 20% more expensive
* Provides a Serverless type
* Storage is done across AZ

### Aurora HA
6 copies across 3 AZs:
    * 4 copies for writes
    * 3 copies for reads
    * Self healing with p2p replication
    * Storage is striped across 100s of volumes

**Aurora Cluster**

![rds_aurora_cluster](/images/rds_aurora_cluster.png)

* Aurora provides one `writer endpoint`
* To manage read replicas, Aurora provides a `reader endpoint`. Load Balancing happens at the connection level.

### Security
* It follows the same features as RDS
* Encryption at rest using KMS
* Automated backups etc are also encrypted
* Encryption in flight using SSL
* Authentication is available using IAM Token
* Instance security is up the User

### Advanced Concepts
* Custom EndPoints can be created to potentially targer specific replicas, for example, when some instances are bigger than others.
* Serverless:
    * Automated DB instantiation and auto scaling based on usage
    * Good for intermittent workload
    * No capacity planning needed, it uses a Proxy Fleet
* Multi-Master: If immediate failover for write node is required
* Global Aurora: 
    * Cross Region replicas & Global Database (up to 5 secondary read replicas, less than 1 sec latency)
    * Up to 16 read replicas per secondary region
    * Recovery Time Objective (RTO) < 1 min
* Machine Learning:
    * Integration between Aurora, Sagemaker and Comprehend

## Elastic Cache
Managed in-memory database (Redis/Memcache). Helps make application stateless.

**DB Cache**

App queries ElasticCache and if no values, get from RDS and store in ElasticCache. It helps relieve the load on the DB. Caching must have an invalidation strategy to make sure only the most current data is used.

![rds_elasticache](/images/rds_elasticache.png)

**User Session**

App queries ElasticCache and if no values, get from RDS and store in ElasticCache. It helps relieve the load on the DB. Caching must have an invalidation strategy to make sure only the most current data is used.

![rds_elasticache_session](/images/rds_elasticache_session.png)


| Redis | MemCached |
|:-:|:-:|
| MultiAZ with AutoFailover | Multi-node partitioning of data (sharding) |
| Read replicas to scale reads | No high availability |
| Data durability usig AOF persistance | Non persistet |
| Back and restore | No backup and restore |

### ElasticCache Security
* Does not support IAM Roles for within the Cache
* Redis Auth for authentication
* SSL is offered for Redis and SASL for Memcached

### Paterns
* Lazy loading: Only write to Cache when getting a miss
* Write Through: Add to Cache when writing to DB
* Session Store: Store session data on Cache

## Notes
* Once a VPC has been established, it cannot be changed.
* ElasticCache Requires heavy application code changes
