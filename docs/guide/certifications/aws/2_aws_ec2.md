# EC2

## EC2 Basics - Elastic Compute Cloud
Mainly consists of:
* Virtual machines (instances)
* Storing data on virtual drives (EBS)
* Distributing loads (ELB)
* Scaling services using auto-scaling groups (ASG)

Configuration options:
1. OS -> Windows/Linux/MacOS
2. CPU & RAM
3. Storage
4. Network card
5. Firewall Rules
6. Bootstrap Scripts -> Launching commands when instance starts (runs with `root` users)

## Instance Types
Naming convention, eg:

`m5.2xlarge`

`m` -> instance class

`5` -> generation

`2xlarge` -> size of instance class

| Instance Type | Description |
| :-: | :-: |
| `T`: General Purpose | Balance between Compute, Memory Networking |
| `C`: Compute Optimized | Compute intesive tasks (Batch processing/HPC) |
| `R`: Memory Optimized | DBs/BI |
| `I`: Storage Optimized | DBs/Cache Memory |

## Security Groups
Control how traffic is controlled into and out of the instance.

**Notes:**

* Security Groups contains only `allow` rules
* Regulate:
    * Access to ports
    * Authorised IP Ranges
    * Control of inbound network
    * Control of outbound network
* Can be attached to multiple instances
* Lock down to region/VPC combination
* EC2 Instance Connects allows to SSH easier (still requires Security Groups)
* `Instance Metadata` is available in `http://169.254.169.254/latest/meta-data`
    * Can retrieve the IAM role but not the IAM policy

## Launch Types
* On-Demand Instances: Pay for what you use
* Reserved: Min 1 year
* Spot Instances: Can lose an instance if Spot Price > Max price willing to pay
* Dedicated Hosts

## Spot Instances & Fleet
**Spot Instances**

To launch one needs `Max Price`, `No Instances`, `Launch Specification`, `Request Type`, and `Valid From` and `Valid To`. To terminate a launch instance both the request and the instance need to be terminated.

**Spot Fleet**

Spot Instances + On-Demand Instances = Try to meet target capacity with price constraints.

Strategies to allocate Spot Instances:
* `lowestPrice`: Best for short workloads
* `diversified`: Best for availability
* `capacityOptimized`: Optimal Capacity based on No of Instances

## Placement Groups
Gives control over the EC2 instance placement strategy
* `Cluster`: Low latency group in the same AZ
    ![placement_group_cluster](/images/placement_group_cluster.png)
* `Spread`: Across different Hardware (only max 7 instances per AZ per placement group)
    ![placement_group_spread](/images/placement_group_spread.png)
* `Partition`: Across different partitions (racks of Hardware)
    ![placement_group_partition](/images/placement_group_partition.png)

## Elastic Network Card
Logical component in a VPC that represents a virtual network card. Works to handle failover of networks since it can be attached at will to different instances.

* Can be created independent of the EC2 instance
* Bound to one AZ
* Attributes:
    * Primary private IPv4
    * One Elastic IP ID
    * One Public IPv4
    * One or more Security Groups
    * A MAC Address

[Other notes about ENI](https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/)

## Other notes
* When an instance is stopped, the public IPV4 address changes. To avoid this, use `elastic IP Address`
* One can only have 5 Elastic IP in an account (preferred is to use DNS name or use Load Balancer)

