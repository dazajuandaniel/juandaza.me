(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{382:function(e,t,a){"use strict";a.r(t);var i=a(42),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rds-elasticcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rds-elasticcache"}},[e._v("#")]),e._v(" RDS & ElasticCache")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Managed Relational Database Service")]),e._v(" "),a("ul",[a("li",[e._v("Postgre")]),e._v(" "),a("li",[e._v("MySQL")]),e._v(" "),a("li",[e._v("MariaDB")]),e._v(" "),a("li",[e._v("SQL Server")]),e._v(" "),a("li",[e._v("Oracle")]),e._v(" "),a("li",[e._v("Aurora")])]),e._v(" "),a("p",[a("strong",[e._v("Benefits")])]),e._v(" "),a("ol",[a("li",[e._v("Provisioning is automated")]),e._v(" "),a("li",[e._v("Continuos backups and restore to specific timestamp")]),e._v(" "),a("li",[e._v("Read replicas for performance improvement")]),e._v(" "),a("li",[e._v("Multi AZ setup for DR")]),e._v(" "),a("li",[e._v("Maintenance Windows")]),e._v(" "),a("li",[e._v("Scaling capability")]),e._v(" "),a("li",[e._v("Storaged backed by EBS ("),a("code",[e._v("gp2")]),e._v(" or "),a("code",[e._v("io1")]),e._v(")")])]),e._v(" "),a("p",[a("strong",[e._v("Backups")])]),e._v(" "),a("ul",[a("li",[e._v("Automatically enabled by default")]),e._v(" "),a("li",[e._v("Transaction logs are done every 5 mins.")]),e._v(" "),a("li",[e._v("7-day retention (increased to 35 days)")])]),e._v(" "),a("p",[a("strong",[e._v("Snapshots")])]),e._v(" "),a("ul",[a("li",[e._v("Triggered by user")]),e._v(" "),a("li",[e._v("Retention is up to user")])]),e._v(" "),a("p",[a("strong",[e._v("RDS AutoScaling")])]),e._v(" "),a("ul",[a("li",[e._v("Increases storage dynamically -> Avoid manual scaling, useful for unpredictable workloads")]),e._v(" "),a("li",[e._v("User has to set "),a("em",[e._v("Maximum Storage Threshold")])])]),e._v(" "),a("h2",{attrs:{id:"read-replicas-vs-multi-az"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-replicas-vs-multi-az"}},[e._v("#")]),e._v(" Read Replicas vs Multi AZ")]),e._v(" "),a("h3",{attrs:{id:"read-replicas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-replicas"}},[e._v("#")]),e._v(" Read Replicas")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/rds_read_replica.png",alt:"rds_read_replica"}})]),e._v(" "),a("p",[e._v("Helps scale "),a("code",[e._v("reads")]),e._v(", user can:")]),e._v(" "),a("ul",[a("li",[e._v("Set up to 5 read replicas within AZ, cross AZ or cross region")]),e._v(" "),a("li",[e._v("Replication is "),a("strong",[e._v("Async")]),e._v(" -> reads are eventually consistent.")]),e._v(" "),a("li",[e._v("Replicas can be promoted to their own database.")]),e._v(" "),a("li",[a("strong",[e._v("Note")]),e._v(" -> Applications must update the connection string to leverage the read replicas.")])]),e._v(" "),a("p",[a("strong",[e._v("Network Costs")])]),e._v(" "),a("ul",[a("li",[e._v("If Read Replica are within the same region, there are NO networking costs.")]),e._v(" "),a("li",[e._v("For Cross Region replica, will incur in a replication fee for network")])]),e._v(" "),a("h3",{attrs:{id:"multi-az"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-az"}},[e._v("#")]),e._v(" Multi AZ")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/rds_multi_az.png",alt:"rds_multi_az"}})]),e._v(" "),a("p",[e._v("Uses "),a("strong",[e._v("Sync")]),e._v(" replication")]),e._v(" "),a("ul",[a("li",[e._v("Writes need to be replicated to be accepted")]),e._v(" "),a("li",[e._v("Get one DNS name")]),e._v(" "),a("li",[e._v("Increases availability and failover")]),e._v(" "),a("li",[e._v("No manual intervention in Apps")])]),e._v(" "),a("p",[e._v("To go from Single AZ to Multi AZ:")]),e._v(" "),a("ul",[a("li",[e._v("Zero downtime operation, just click on "),a("code",[e._v("modify")]),e._v(" in the DB settings\nWhat happens is that a snapshot is taken and restored into a new standby DB. Then Sync is established.")])]),e._v(" "),a("h2",{attrs:{id:"encryption-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption-security"}},[e._v("#")]),e._v(" Encryption & Security")]),e._v(" "),a("h3",{attrs:{id:"encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),a("p",[e._v("At rest encryption:")]),e._v(" "),a("ul",[a("li",[e._v("Possibility to encrypt master & read. "),a("em",[e._v("If master is not encrypted, replicas can't be encrypted")])]),e._v(" "),a("li",[e._v("Transparent Data Encryption (TDE) is available for Oraacle and SQL Server")])]),e._v(" "),a("p",[e._v("In flight encryption:")]),e._v(" "),a("ul",[a("li",[e._v("SSL certificates to encrypt data")]),e._v(" "),a("li",[e._v("User can enforce SSL")])]),e._v(" "),a("p",[a("strong",[e._v("Encryption Operations")])]),e._v(" "),a("p",[e._v("RDS Backups:")]),e._v(" "),a("ul",[a("li",[e._v("Snapshots of unencrypted DBs are unencrypted")]),e._v(" "),a("li",[e._v("Snapshots of encrypted DBs are encrypted")]),e._v(" "),a("li",[e._v("Users can copy a snapshot unencrypted and then create an encrypted version.\n"),a("ol",[a("li",[e._v("Create a snapshot")]),e._v(" "),a("li",[e._v("Copy and enable encryption")]),e._v(" "),a("li",[e._v("Restore DB from encrypted version")]),e._v(" "),a("li",[e._v("Migrate applications to new DB and delete old DB.")])])])]),e._v(" "),a("h3",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("p",[e._v("RDS are usually deployed in a private subnet, not a public one and works by leveraging security groups.")]),e._v(" "),a("p",[a("strong",[e._v("Access Management")])]),e._v(" "),a("ul",[a("li",[e._v("IAM policies help control who can manage the RDS")]),e._v(" "),a("li",[e._v("Tradition Username/Pwd can be used to login the DB")]),e._v(" "),a("li",[e._v("IAM-Based authentication can be used to login into the RDS only for "),a("code",[e._v("MySQL")]),e._v(" & "),a("code",[e._v("Postgre")])])]),e._v(" "),a("h2",{attrs:{id:"aurora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aurora"}},[e._v("#")]),e._v(" Aurora")]),e._v(" "),a("h3",{attrs:{id:"overview-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("It's a propietary technology from AWS. Both MySQL & MariaDB are supported -> it's cloud optimized.")]),e._v(" "),a("ul",[a("li",[e._v("Automatically grows up to 64TBs")]),e._v(" "),a("li",[e._v("Can have up to 15 replicas (MySQL has 5)")]),e._v(" "),a("li",[e._v("Failover is instantaneous (HA native)")]),e._v(" "),a("li",[e._v("Industry Compliance")]),e._v(" "),a("li",[e._v("20% more expensive")]),e._v(" "),a("li",[e._v("Provides a Serverless type")]),e._v(" "),a("li",[e._v("Storage is done across AZ")])]),e._v(" "),a("h3",{attrs:{id:"aurora-ha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aurora-ha"}},[e._v("#")]),e._v(" Aurora HA")]),e._v(" "),a("p",[e._v("6 copies across 3 AZs:\n* 4 copies for writes\n* 3 copies for reads\n* Self healing with p2p replication\n* Storage is striped across 100s of volumes")]),e._v(" "),a("p",[a("strong",[e._v("Aurora Cluster")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/rds_aurora_cluster.png",alt:"rds_aurora_cluster"}})]),e._v(" "),a("ul",[a("li",[e._v("Aurora provides one "),a("code",[e._v("writer endpoint")])]),e._v(" "),a("li",[e._v("To manage read replicas, Aurora provides a "),a("code",[e._v("reader endpoint")]),e._v(". Load Balancing happens at the connection level.")])]),e._v(" "),a("h3",{attrs:{id:"security-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-2"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("ul",[a("li",[e._v("It follows the same features as RDS")]),e._v(" "),a("li",[e._v("Encryption at rest using KMS")]),e._v(" "),a("li",[e._v("Automated backups etc are also encrypted")]),e._v(" "),a("li",[e._v("Encryption in flight using SSL")]),e._v(" "),a("li",[e._v("Authentication is available using IAM Token")]),e._v(" "),a("li",[e._v("Instance security is up the User")])]),e._v(" "),a("h3",{attrs:{id:"advanced-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-concepts"}},[e._v("#")]),e._v(" Advanced Concepts")]),e._v(" "),a("ul",[a("li",[e._v("Custom EndPoints can be created to potentially targer specific replicas, for example, when some instances are bigger than others.")]),e._v(" "),a("li",[e._v("Serverless:\n"),a("ul",[a("li",[e._v("Automated DB instantiation and auto scaling based on usage")]),e._v(" "),a("li",[e._v("Good for intermittent workload")]),e._v(" "),a("li",[e._v("No capacity planning needed, it uses a Proxy Fleet")])])]),e._v(" "),a("li",[e._v("Multi-Master: If immediate failover for write node is required")]),e._v(" "),a("li",[e._v("Global Aurora:\n"),a("ul",[a("li",[e._v("Cross Region replicas & Global Database (up to 5 secondary read replicas, less than 1 sec latency)")]),e._v(" "),a("li",[e._v("Up to 16 read replicas per secondary region")]),e._v(" "),a("li",[e._v("Recovery Time Objective (RTO) < 1 min")])])]),e._v(" "),a("li",[e._v("Machine Learning:\n"),a("ul",[a("li",[e._v("Integration between Aurora, Sagemaker and Comprehend")])])])]),e._v(" "),a("h2",{attrs:{id:"elastic-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-cache"}},[e._v("#")]),e._v(" Elastic Cache")]),e._v(" "),a("p",[e._v("Managed in-memory database (Redis/Memcache). Helps make application stateless.")]),e._v(" "),a("p",[a("strong",[e._v("DB Cache")])]),e._v(" "),a("p",[e._v("App queries ElasticCache and if no values, get from RDS and store in ElasticCache. It helps relieve the load on the DB. Caching must have an invalidation strategy to make sure only the most current data is used.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/rds_elasticache.png",alt:"rds_elasticache"}})]),e._v(" "),a("p",[a("strong",[e._v("User Session")])]),e._v(" "),a("p",[e._v("App queries ElasticCache and if no values, get from RDS and store in ElasticCache. It helps relieve the load on the DB. Caching must have an invalidation strategy to make sure only the most current data is used.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/rds_elasticache_session.png",alt:"rds_elasticache_session"}})]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Redis")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("MemCached")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("MultiAZ with AutoFailover")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Multi-node partitioning of data (sharding)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Read replicas to scale reads")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("No high availability")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Data durability usig AOF persistance")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Non persistet")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Back and restore")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("No backup and restore")])])])]),e._v(" "),a("h3",{attrs:{id:"elasticcache-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticcache-security"}},[e._v("#")]),e._v(" ElasticCache Security")]),e._v(" "),a("ul",[a("li",[e._v("Does not support IAM Roles for within the Cache")]),e._v(" "),a("li",[e._v("Redis Auth for authentication")]),e._v(" "),a("li",[e._v("SSL is offered for Redis and SASL for Memcached")])]),e._v(" "),a("h3",{attrs:{id:"paterns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paterns"}},[e._v("#")]),e._v(" Paterns")]),e._v(" "),a("ul",[a("li",[e._v("Lazy loading: Only write to Cache when getting a miss")]),e._v(" "),a("li",[e._v("Write Through: Add to Cache when writing to DB")]),e._v(" "),a("li",[e._v("Session Store: Store session data on Cache")])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("ul",[a("li",[e._v("Once a VPC has been established, it cannot be changed.")]),e._v(" "),a("li",[e._v("ElasticCache Requires heavy application code changes")])])])}),[],!1,null,null,null);t.default=r.exports}}]);