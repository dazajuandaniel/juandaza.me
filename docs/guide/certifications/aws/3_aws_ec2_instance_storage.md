# EBS

## EBS Volume
It is a Network Drive that can be attached to an instance (Network USB Stick). May add some latency.

![ebs_general](/images/ebs_general.png)

## EBS Snapshots
Backup of the EBS Volume.
* AWS allows to copy the snapshot across AZ or Regions
    ![ebs_snapshots](/images/ebs_snapshots.png)

## EBS Volume Types
1. `gp2`/`gp3` (SSD): General Purpose
2. `io2`/`io3` (SSD): Highest performance
3. `stI` (HDD): Low cost
4. `scI` (HDD): Lowest cost
EBS Volumes are characterized in Size, Throuhput & IOPS. **Only `gp2` and `gp3` can be used as root volumes**.

**gp2 vs gp3**
| gp2 | gp3 |
| :-: | :-: |
| Size and IOPS are linked | Size and IOPS are independent |


**Provisioned IOPS (PIOPS)**

* Useful for Critical Business Application
* Application that needs more than 16k IOPS
* io2/io3
    * Max PIOPS: 64k for Nitro EC2 & 32k for other
    * PIOPS can be increased independently
    * `io2` -> Sub-millisecond latency & Max PIOPS of 256k with a PIOPS:Gb ratio of 1k:1 
    * Supports EBS Multi Attach

**HDD**

Cannot be boot volumnes, good for Big Data or Data Warehousing. 

More details, in the [documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html)

## EBS Multi Attach
Attach the same EBS volume to multiple instances in the same AZ - **Only for `io1`/`io2`**. Used for very specific cases and application must be able to manage concurrent writes.

## EBS Encryption
Implies the following:
* Data at rest is encrypted
* Data in flight is encrypted
* Snapshots are encrypted
* All volumes from snapshots are encrypted
* Minimal impact on latency
* Leverages keys from KMS

How to encrypt an unencrypted volume?
1. Create an EBS snapshot
2. Encrypt the EBS snapshot (using copy)
3. Create a new EBS volume of snapshot 
4. Attach encrypted volume to instance.

## EBS Raid Options
RAID is possible as long as the OS supports it. Doesn't live in the Console, has to be done at the OS level.
* Raid 0 -> Increases performance
    * Combines 2 or more volumnes and gets the total disk space & I/O
    * Useful when more IOPS are required, i.e. 100k IOPS
    ![ebs_raid0](/images/ebs_raid0.png)
* Raid 1 -> Increases fault tolerance
    * Mirrors volumes so has more fault tolerant
    * Uses 2 times the network throughput
    ![ebs_raid1](/images/ebs_raid1.png)
* Raid 5 (Not recommended for EBS)
* Raid 6 (Not recommended for EBS)

## EFS
Managed Network File System that can be mounted on many EC2 and works with multiple AZs. It is more expensive that EBS gp1/gp2.

![ebs_efs](/images/ebs_efs.png)

* It uses Security Groups to control access
* Works only with Linux, not Windows
* Scales automatically

**Notes**
* EFS Scale:
    * 1000s of concurrent NFS client and up to 10 GB+/second
    * Grow to Peta-byte scale automatically
* Options:

    **Performance Mode**

        * General Purpose (default)

        * Max I/O: Higher latency but higher throughput

    **Throughput Mode**

        * Bursting (1 TB = 50MiB/s + burst of up to 100MiB/s)

        * Provisioned: set throughput regardless of storage size

    **Storage tiers**

        * Standard

        * Infrequent Access


## AMI
Customization of own software, configuration,etc. They are built for a `specific region` & can be copied across regions.

Process:
1. Start EC2 instance and customize it
2. Stop the instance (data integrity)
3. Build an AMI - this will also create an EBS Snapshot
4. Launch instances from other AMIs

## EC2 Instance Store
EBS volumes lack performance due to network latency. For **High Performance** use `EC2 Instance Store` but this is `ephemeral storage` but one gets very High IOPS.
* Better I/O performance
* Good for buffer/cache
* Risk of data loss if hardware fails

**Notes:**
* Bound to an AZ
* Multi Attach capability
* To do cross AZ -> Via Snapshots

