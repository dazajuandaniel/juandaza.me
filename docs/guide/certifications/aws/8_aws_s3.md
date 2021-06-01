# Simple Storage Service (S3)

## Introduction
Secure, durable, highly-scalable object storage.
* Safe place to store files
* Spread across devices/facilities
* Object size: 0 bytes - 5 TB
	* Max upload object size is 5GB (multipart)
* Universal namespace -> Names must be unique
* HTTP 200 code is upload successful
* Object Features:
	* Key (name of object)
	* Value (Data, sequence of bytes)
	* Version ID (Important for Versioning)
	* Metadata (Data about data that is being stored)
	* Sub resources
		* ACL/Torrents

## Data Consistency for S3
* `Read after write consistency of PUTS of **new** objects`
	* If a file is uploaded, the file is readable immediately
* `Eventual Consistency for **overwrite** PUTS and DELETES (takes time to progapate)` 
	* If it's updated, we might get the old version
	* **As of Dec 2020 all operations are strongly consistant**

## Guarantees
Build for 99.99% availability -> Amazon guarantees 99.9% availability
Amazon guarantees 99.999999999% durability (11x9s)

## Features
* Tiered Storage
* Lifecycle management
* Versioning
* Encryption
* MFA Delete -> Only root account can enable/disable MFA Delete
* Secure using ACL & Bucket Policies

## Storage Classess
|Class| Description  |  Notes |
|--|--|--|
| S3 Standard | 99.99% ava - 99.99...9% dur| Stored across multiple facilities |
| S3 IA | 99.9% ava - 99.99...9% dur| Charged a retrieval fee |
| S3 One Zone IA | 99.5% ava - 99.99...9% dur| Charged a retrieval fee |
| S3 Intelligent Tiering | 99.9% ava - 99.99...9% dur|  |
| S3 Glacier | |  |
| S3 Glacier Deep Archive| | ~12 hrs retrieval times |
* ava = Designed for availability
* dur = Durability

![s3_storage_classes](/images/s3_storage_classes.png)


## S3 Pricing
Charged on:
* Storage
* Requests
* Storage management pricing (tiers)
* Data Transfer
* Cross Region Replication
* Transfer Acceleration

## S3 Security & Encryption

**Security**
* User Based:
	* IAM Policies: IAM principal can access an S3 object if either IAM permission allows or the Bucket Policy allows.
* Resourced Based:
	* Bucket policies (allows cross account)
* Object ACL

By default all buckets are private

* Bucket Policies -> Workt at a Bucket level
* Access Control Lists -> Work at an object level

**Access Logs**
* S3 Buckets can be configured to create access logs and log any api call on the S3

**Encryption**

In Transit ->

SSL/TLS

Amazon S3 exposes:
* HTTP endpoint
* HTTPS endpoint (mandatory for `SSE-C`)

At Rest -> 

Server side: 
1. `SSE-S3` -> S3 Managed Keys by AWS:
	* Server side encryption
	* AES-256 
	* Must set header: `x-amz-server-side-encryption:AE256`
2. `SSE-KMS` -> AWS KMS
	* Gives User Control + audit trail 
	* Must set header: `x-amz-server-side-encryption:awskms`
3. `SSE-C` -> Customer Provided Keys
	* Customer provides keys
	* HTTPS must be used
	* Encryption key must be provided in HTTP header
4. `Client Side` -> Encryption is done before sending to S3

## S3 Versioning
* Cannot be disabled only suspended
* Has MFA Delete capability
* Size of version is the sum of all version
* Lifecyle policies can be applied to versions.
* When a new version is uploaded the permissions are removed.
* When deleted a file with the "Hide" button, a marker is applied. We can then delete the delete marker.

## S3 Lifecycle
* Can be enabled for Current/Previous versions
* Analytics can be enabled to help understand when to transition.	

## S3 Object Lock & Glacier Lock
* Used for a `write once, read many` model
	* *Governance Mode*: Users can't overwrite unless they have the right permissions
	* *Compliance Mode*: Cannot be overwritten even by the admin for the retention period.
	* *Legal Hold*: Prevents an object version from being overwritten -> there is no retention period.

## S3 Performance
**S3 Prefix**
Anything after the bucket-name

The application can achieve `3500` PUT/COPY/POST/DELETE and `5500` GET *per prefix*.
* KMS is a limitation since when a file is uploaded, there is a quota of up to 300000 requests/sec.

**S3 Performance Tips**
1. Better performance by spreading the reads across different prefixes
2. There are limitations if KMS is used:
	1. Uploading/Downloading towards the KMS quota
	2. Cannot request quota increase
3. Multipart Uploads (required for files over 5GB and recommended for files over 100MB)
4. S3 Byte-Range Fetches -> Parallelize downloads, works to download only parts of files, instead of full files

## S3 Select
Used to retrieve subset of data by running simple SQL Queries
![s3_select](/images/s3_select.png)

## AWS Organizations & Consolidated Billing
Account management service that enables to consolidate multiple AWS accounts.
* One bill per AWS account
* Volume price discount

**Ways to share s3 buckets across accounts**

1. Using Bucket policies & IAM -> Programmatic Access Only
2. Bucket ACL & IAM -> Programmatic Access Only
3. Cross-account IAM Roles -> Programmatic & Console Access

## AWS Cross Region Replication
* Requires versioning in both buckets
* Can be replicated by using tags or prefixs
* Can be to a bucket in the account or to another account
* Can change ownership or storage class
* It's set up for new objects, not for objects currently in the bucket
* Delete markers are not replicated and individual versions deletions are not replicated
* There is no replication chaining. If Bucket 1 replicates to Bucket 2, and Bucket 2 replicates to Bucket 3, then Bucket 1 is not replicated to Bucket 3.

## S3 Transfer Acceleration
Uses CloudFront to accelerate uploads to S3. Uploads to an edge location (using an url) and then it lands in the bucket. Basically it leverages AWS backbone

## S3 Event Notifications
Get notificiation when an event happens in the bucket. Rules can be created by object names.

**Use Case**
* Create thumbnails

Targets:
1. sns
2. sqs
3. Lambda

Versioning needs to be enabled to get event notifications.

## AWS DataSync
Move large amounts of on-premise data into AWS -> Install the agent in the server and copys the data to AWS
* Automatically encrypts data and accelerates transfers over WAN
* Can land in S3 / EFS

## CloundFront
[Content Delivery Network](https://aws.amazon.com/cloudfront/features/) -> Delivers content based on the geo-position of the user. Uses Edge locations

Key terminology:

	1. Edge Location
	2. Origin -> Origin of the files that CDN will distribute (S3/EC2/ELB/Route53)
	3. Distribution -> Name given to the CDN (Collection of Edge Locations)

The first uses downloads the content to the CDN and it gets cached based on the TTL (time to live). `Cache content can be invalidated but it costs`.

* Web Distribution -> Websites
* RTMP -> Adobe or media

**Signed URLs & Cookies**

* A `signed URL` is for **individual** files
* A `signed cookie` is for **multiple** files

In both cases a policy is attaached, it can have:
	1. URL Expiration
	2. IP Ranges
	3. Trusted signers

An example can be using OAI (using CloudFront SDK)

S3 Singed URL have limited lifetime and it's based on IAM user -> this means that users can access the bucket (not useful for EC2, only S3).

## Snowball
Peta-byte scale data transport solution to move data in/out of AWS.

**Snowball Edge** -> Gives compute & storage.
**Snowmobile** -> Truck

When to use? Depends on the days that it'll take (60TB or more if a 1000Mbps is available)

## Storage Gateway
Service taht connects on-premise software appliance with cloud based storage to provide integration between on-prem and AWS.

It is a virtual or physical device that replicates data into AWS. Supports either Hyper-V or VMware.

1. File Gateway (NFS & SMB) -> Copies of Files
2. Volume Gateway (iSCSI) -> Copies of HDD
	* Stored Volumes: Entire Dataset
	* Cached Volumes: Most used data
3. Tape Gateway -> Archives


## Other Notes
* Can't install DB/OS on it.
* Can have MFA delete.
* [Worth reading](https://aws.amazon.com/s3/faqs/)
	* Single largest object is 5GB
	* Normal Amazon S3 rates apply for every version of an object stored or requested
	* Encryption available is using SSE-S3, SSE-C, SSE-KMS, or a client library such as the Amazon S3 Encryption Client
	* Multipart uploads are available/recommended.
* Avoid Standard Storage as much as possible -> Go Intelligent unless there are A LOT of objects since there is a fee per 1000 objects
* S3 Buckets can be shared across accounts