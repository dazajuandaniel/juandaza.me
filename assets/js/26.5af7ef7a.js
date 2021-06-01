(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{384:function(e,t,a){"use strict";a.r(t);var s=a(42),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"simple-storage-service-s3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-storage-service-s3"}},[e._v("#")]),e._v(" Simple Storage Service (S3)")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Secure, durable, highly-scalable object storage.")]),e._v(" "),a("ul",[a("li",[e._v("Safe place to store files")]),e._v(" "),a("li",[e._v("Spread across devices/facilities")]),e._v(" "),a("li",[e._v("Object size: 0 bytes - 5 TB\n"),a("ul",[a("li",[e._v("Max upload object size is 5GB (multipart)")])])]),e._v(" "),a("li",[e._v("Universal namespace -> Names must be unique")]),e._v(" "),a("li",[e._v("HTTP 200 code is upload successful")]),e._v(" "),a("li",[e._v("Object Features:\n"),a("ul",[a("li",[e._v("Key (name of object)")]),e._v(" "),a("li",[e._v("Value (Data, sequence of bytes)")]),e._v(" "),a("li",[e._v("Version ID (Important for Versioning)")]),e._v(" "),a("li",[e._v("Metadata (Data about data that is being stored)")]),e._v(" "),a("li",[e._v("Sub resources\n"),a("ul",[a("li",[e._v("ACL/Torrents")])])])])])]),e._v(" "),a("h2",{attrs:{id:"data-consistency-for-s3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-consistency-for-s3"}},[e._v("#")]),e._v(" Data Consistency for S3")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Read after write consistency of PUTS of **new** objects")]),e._v(" "),a("ul",[a("li",[e._v("If a file is uploaded, the file is readable immediately")])])]),e._v(" "),a("li",[a("code",[e._v("Eventual Consistency for **overwrite** PUTS and DELETES (takes time to progapate)")]),e._v(" "),a("ul",[a("li",[e._v("If it's updated, we might get the old version")]),e._v(" "),a("li",[a("strong",[e._v("As of Dec 2020 all operations are strongly consistant")])])])])]),e._v(" "),a("h2",{attrs:{id:"guarantees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guarantees"}},[e._v("#")]),e._v(" Guarantees")]),e._v(" "),a("p",[e._v("Build for 99.99% availability -> Amazon guarantees 99.9% availability\nAmazon guarantees 99.999999999% durability (11x9s)")]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Tiered Storage")]),e._v(" "),a("li",[e._v("Lifecycle management")]),e._v(" "),a("li",[e._v("Versioning")]),e._v(" "),a("li",[e._v("Encryption")]),e._v(" "),a("li",[e._v("MFA Delete -> Only root account can enable/disable MFA Delete")]),e._v(" "),a("li",[e._v("Secure using ACL & Bucket Policies")])]),e._v(" "),a("h2",{attrs:{id:"storage-classess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-classess"}},[e._v("#")]),e._v(" Storage Classess")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Class")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Notes")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("S3 Standard")]),e._v(" "),a("td",[e._v("99.99% ava - 99.99...9% dur")]),e._v(" "),a("td",[e._v("Stored across multiple facilities")])]),e._v(" "),a("tr",[a("td",[e._v("S3 IA")]),e._v(" "),a("td",[e._v("99.9% ava - 99.99...9% dur")]),e._v(" "),a("td",[e._v("Charged a retrieval fee")])]),e._v(" "),a("tr",[a("td",[e._v("S3 One Zone IA")]),e._v(" "),a("td",[e._v("99.5% ava - 99.99...9% dur")]),e._v(" "),a("td",[e._v("Charged a retrieval fee")])]),e._v(" "),a("tr",[a("td",[e._v("S3 Intelligent Tiering")]),e._v(" "),a("td",[e._v("99.9% ava - 99.99...9% dur")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("S3 Glacier")]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("S3 Glacier Deep Archive")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("~12 hrs retrieval times")])])])]),e._v(" "),a("ul",[a("li",[e._v("ava = Designed for availability")]),e._v(" "),a("li",[e._v("dur = Durability")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/s3_storage_classes.png",alt:"s3_storage_classes"}})]),e._v(" "),a("h2",{attrs:{id:"s3-pricing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-pricing"}},[e._v("#")]),e._v(" S3 Pricing")]),e._v(" "),a("p",[e._v("Charged on:")]),e._v(" "),a("ul",[a("li",[e._v("Storage")]),e._v(" "),a("li",[e._v("Requests")]),e._v(" "),a("li",[e._v("Storage management pricing (tiers)")]),e._v(" "),a("li",[e._v("Data Transfer")]),e._v(" "),a("li",[e._v("Cross Region Replication")]),e._v(" "),a("li",[e._v("Transfer Acceleration")])]),e._v(" "),a("h2",{attrs:{id:"s3-security-encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-security-encryption"}},[e._v("#")]),e._v(" S3 Security & Encryption")]),e._v(" "),a("p",[a("strong",[e._v("Security")])]),e._v(" "),a("ul",[a("li",[e._v("User Based:\n"),a("ul",[a("li",[e._v("IAM Policies: IAM principal can access an S3 object if either IAM permission allows or the Bucket Policy allows.")])])]),e._v(" "),a("li",[e._v("Resourced Based:\n"),a("ul",[a("li",[e._v("Bucket policies (allows cross account)")])])]),e._v(" "),a("li",[e._v("Object ACL")])]),e._v(" "),a("p",[e._v("By default all buckets are private")]),e._v(" "),a("ul",[a("li",[e._v("Bucket Policies -> Workt at a Bucket level")]),e._v(" "),a("li",[e._v("Access Control Lists -> Work at an object level")])]),e._v(" "),a("p",[a("strong",[e._v("Access Logs")])]),e._v(" "),a("ul",[a("li",[e._v("S3 Buckets can be configured to create access logs and log any api call on the S3")])]),e._v(" "),a("p",[a("strong",[e._v("Encryption")])]),e._v(" "),a("p",[e._v("In Transit ->")]),e._v(" "),a("p",[e._v("SSL/TLS")]),e._v(" "),a("p",[e._v("Amazon S3 exposes:")]),e._v(" "),a("ul",[a("li",[e._v("HTTP endpoint")]),e._v(" "),a("li",[e._v("HTTPS endpoint (mandatory for "),a("code",[e._v("SSE-C")]),e._v(")")])]),e._v(" "),a("p",[e._v("At Rest ->")]),e._v(" "),a("p",[e._v("Server side:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("SSE-S3")]),e._v(" -> S3 Managed Keys by AWS:\n"),a("ul",[a("li",[e._v("Server side encryption")]),e._v(" "),a("li",[e._v("AES-256")]),e._v(" "),a("li",[e._v("Must set header: "),a("code",[e._v("x-amz-server-side-encryption:AE256")])])])]),e._v(" "),a("li",[a("code",[e._v("SSE-KMS")]),e._v(" -> AWS KMS\n"),a("ul",[a("li",[e._v("Gives User Control + audit trail")]),e._v(" "),a("li",[e._v("Must set header: "),a("code",[e._v("x-amz-server-side-encryption:awskms")])])])]),e._v(" "),a("li",[a("code",[e._v("SSE-C")]),e._v(" -> Customer Provided Keys\n"),a("ul",[a("li",[e._v("Customer provides keys")]),e._v(" "),a("li",[e._v("HTTPS must be used")]),e._v(" "),a("li",[e._v("Encryption key must be provided in HTTP header")])])]),e._v(" "),a("li",[a("code",[e._v("Client Side")]),e._v(" -> Encryption is done before sending to S3")])]),e._v(" "),a("h2",{attrs:{id:"s3-versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-versioning"}},[e._v("#")]),e._v(" S3 Versioning")]),e._v(" "),a("ul",[a("li",[e._v("Cannot be disabled only suspended")]),e._v(" "),a("li",[e._v("Has MFA Delete capability")]),e._v(" "),a("li",[e._v("Size of version is the sum of all version")]),e._v(" "),a("li",[e._v("Lifecyle policies can be applied to versions.")]),e._v(" "),a("li",[e._v("When a new version is uploaded the permissions are removed.")]),e._v(" "),a("li",[e._v('When deleted a file with the "Hide" button, a marker is applied. We can then delete the delete marker.')])]),e._v(" "),a("h2",{attrs:{id:"s3-lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-lifecycle"}},[e._v("#")]),e._v(" S3 Lifecycle")]),e._v(" "),a("ul",[a("li",[e._v("Can be enabled for Current/Previous versions")]),e._v(" "),a("li",[e._v("Analytics can be enabled to help understand when to transition.")])]),e._v(" "),a("h2",{attrs:{id:"s3-object-lock-glacier-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-object-lock-glacier-lock"}},[e._v("#")]),e._v(" S3 Object Lock & Glacier Lock")]),e._v(" "),a("ul",[a("li",[e._v("Used for a "),a("code",[e._v("write once, read many")]),e._v(" model\n"),a("ul",[a("li",[a("em",[e._v("Governance Mode")]),e._v(": Users can't overwrite unless they have the right permissions")]),e._v(" "),a("li",[a("em",[e._v("Compliance Mode")]),e._v(": Cannot be overwritten even by the admin for the retention period.")]),e._v(" "),a("li",[a("em",[e._v("Legal Hold")]),e._v(": Prevents an object version from being overwritten -> there is no retention period.")])])])]),e._v(" "),a("h2",{attrs:{id:"s3-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-performance"}},[e._v("#")]),e._v(" S3 Performance")]),e._v(" "),a("p",[a("strong",[e._v("S3 Prefix")]),e._v("\nAnything after the bucket-name")]),e._v(" "),a("p",[e._v("The application can achieve "),a("code",[e._v("3500")]),e._v(" PUT/COPY/POST/DELETE and "),a("code",[e._v("5500")]),e._v(" GET "),a("em",[e._v("per prefix")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("KMS is a limitation since when a file is uploaded, there is a quota of up to 300000 requests/sec.")])]),e._v(" "),a("p",[a("strong",[e._v("S3 Performance Tips")])]),e._v(" "),a("ol",[a("li",[e._v("Better performance by spreading the reads across different prefixes")]),e._v(" "),a("li",[e._v("There are limitations if KMS is used:\n"),a("ol",[a("li",[e._v("Uploading/Downloading towards the KMS quota")]),e._v(" "),a("li",[e._v("Cannot request quota increase")])])]),e._v(" "),a("li",[e._v("Multipart Uploads (required for files over 5GB and recommended for files over 100MB)")]),e._v(" "),a("li",[e._v("S3 Byte-Range Fetches -> Parallelize downloads, works to download only parts of files, instead of full files")])]),e._v(" "),a("h2",{attrs:{id:"s3-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-select"}},[e._v("#")]),e._v(" S3 Select")]),e._v(" "),a("p",[e._v("Used to retrieve subset of data by running simple SQL Queries\n"),a("img",{attrs:{src:"/images/s3_select.png",alt:"s3_select"}})]),e._v(" "),a("h2",{attrs:{id:"aws-organizations-consolidated-billing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-organizations-consolidated-billing"}},[e._v("#")]),e._v(" AWS Organizations & Consolidated Billing")]),e._v(" "),a("p",[e._v("Account management service that enables to consolidate multiple AWS accounts.")]),e._v(" "),a("ul",[a("li",[e._v("One bill per AWS account")]),e._v(" "),a("li",[e._v("Volume price discount")])]),e._v(" "),a("p",[a("strong",[e._v("Ways to share s3 buckets across accounts")])]),e._v(" "),a("ol",[a("li",[e._v("Using Bucket policies & IAM -> Programmatic Access Only")]),e._v(" "),a("li",[e._v("Bucket ACL & IAM -> Programmatic Access Only")]),e._v(" "),a("li",[e._v("Cross-account IAM Roles -> Programmatic & Console Access")])]),e._v(" "),a("h2",{attrs:{id:"aws-cross-region-replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-cross-region-replication"}},[e._v("#")]),e._v(" AWS Cross Region Replication")]),e._v(" "),a("ul",[a("li",[e._v("Requires versioning in both buckets")]),e._v(" "),a("li",[e._v("Can be replicated by using tags or prefixs")]),e._v(" "),a("li",[e._v("Can be to a bucket in the account or to another account")]),e._v(" "),a("li",[e._v("Can change ownership or storage class")]),e._v(" "),a("li",[e._v("It's set up for new objects, not for objects currently in the bucket")]),e._v(" "),a("li",[e._v("Delete markers are not replicated and individual versions deletions are not replicated")]),e._v(" "),a("li",[e._v("There is no replication chaining. If Bucket 1 replicates to Bucket 2, and Bucket 2 replicates to Bucket 3, then Bucket 1 is not replicated to Bucket 3.")])]),e._v(" "),a("h2",{attrs:{id:"s3-transfer-acceleration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-transfer-acceleration"}},[e._v("#")]),e._v(" S3 Transfer Acceleration")]),e._v(" "),a("p",[e._v("Uses CloudFront to accelerate uploads to S3. Uploads to an edge location (using an url) and then it lands in the bucket. Basically it leverages AWS backbone")]),e._v(" "),a("h2",{attrs:{id:"s3-event-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-event-notifications"}},[e._v("#")]),e._v(" S3 Event Notifications")]),e._v(" "),a("p",[e._v("Get notificiation when an event happens in the bucket. Rules can be created by object names.")]),e._v(" "),a("p",[a("strong",[e._v("Use Case")])]),e._v(" "),a("ul",[a("li",[e._v("Create thumbnails")])]),e._v(" "),a("p",[e._v("Targets:")]),e._v(" "),a("ol",[a("li",[e._v("sns")]),e._v(" "),a("li",[e._v("sqs")]),e._v(" "),a("li",[e._v("Lambda")])]),e._v(" "),a("p",[e._v("Versioning needs to be enabled to get event notifications.")]),e._v(" "),a("h2",{attrs:{id:"aws-datasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-datasync"}},[e._v("#")]),e._v(" AWS DataSync")]),e._v(" "),a("p",[e._v("Move large amounts of on-premise data into AWS -> Install the agent in the server and copys the data to AWS")]),e._v(" "),a("ul",[a("li",[e._v("Automatically encrypts data and accelerates transfers over WAN")]),e._v(" "),a("li",[e._v("Can land in S3 / EFS")])]),e._v(" "),a("h2",{attrs:{id:"cloundfront"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloundfront"}},[e._v("#")]),e._v(" CloundFront")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://aws.amazon.com/cloudfront/features/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Content Delivery Network"),a("OutboundLink")],1),e._v(" -> Delivers content based on the geo-position of the user. Uses Edge locations")]),e._v(" "),a("p",[e._v("Key terminology:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. Edge Location\n2. Origin -> Origin of the files that CDN will distribute (S3/EC2/ELB/Route53)\n3. Distribution -> Name given to the CDN (Collection of Edge Locations)\n")])])]),a("p",[e._v("The first uses downloads the content to the CDN and it gets cached based on the TTL (time to live). "),a("code",[e._v("Cache content can be invalidated but it costs")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Web Distribution -> Websites")]),e._v(" "),a("li",[e._v("RTMP -> Adobe or media")])]),e._v(" "),a("p",[a("strong",[e._v("Signed URLs & Cookies")])]),e._v(" "),a("ul",[a("li",[e._v("A "),a("code",[e._v("signed URL")]),e._v(" is for "),a("strong",[e._v("individual")]),e._v(" files")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("signed cookie")]),e._v(" is for "),a("strong",[e._v("multiple")]),e._v(" files")])]),e._v(" "),a("p",[e._v("In both cases a policy is attaached, it can have:\n1. URL Expiration\n2. IP Ranges\n3. Trusted signers")]),e._v(" "),a("p",[e._v("An example can be using OAI (using CloudFront SDK)")]),e._v(" "),a("p",[e._v("S3 Singed URL have limited lifetime and it's based on IAM user -> this means that users can access the bucket (not useful for EC2, only S3).")]),e._v(" "),a("h2",{attrs:{id:"snowball"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snowball"}},[e._v("#")]),e._v(" Snowball")]),e._v(" "),a("p",[e._v("Peta-byte scale data transport solution to move data in/out of AWS.")]),e._v(" "),a("p",[a("strong",[e._v("Snowball Edge")]),e._v(" -> Gives compute & storage.\n"),a("strong",[e._v("Snowmobile")]),e._v(" -> Truck")]),e._v(" "),a("p",[e._v("When to use? Depends on the days that it'll take (60TB or more if a 1000Mbps is available)")]),e._v(" "),a("h2",{attrs:{id:"storage-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-gateway"}},[e._v("#")]),e._v(" Storage Gateway")]),e._v(" "),a("p",[e._v("Service taht connects on-premise software appliance with cloud based storage to provide integration between on-prem and AWS.")]),e._v(" "),a("p",[e._v("It is a virtual or physical device that replicates data into AWS. Supports either Hyper-V or VMware.")]),e._v(" "),a("ol",[a("li",[e._v("File Gateway (NFS & SMB) -> Copies of Files")]),e._v(" "),a("li",[e._v("Volume Gateway (iSCSI) -> Copies of HDD\n"),a("ul",[a("li",[e._v("Stored Volumes: Entire Dataset")]),e._v(" "),a("li",[e._v("Cached Volumes: Most used data")])])]),e._v(" "),a("li",[e._v("Tape Gateway -> Archives")])]),e._v(" "),a("h2",{attrs:{id:"other-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[e._v("#")]),e._v(" Other Notes")]),e._v(" "),a("ul",[a("li",[e._v("Can't install DB/OS on it.")]),e._v(" "),a("li",[e._v("Can have MFA delete.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aws.amazon.com/s3/faqs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Worth reading"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Single largest object is 5GB")]),e._v(" "),a("li",[e._v("Normal Amazon S3 rates apply for every version of an object stored or requested")]),e._v(" "),a("li",[e._v("Encryption available is using SSE-S3, SSE-C, SSE-KMS, or a client library such as the Amazon S3 Encryption Client")]),e._v(" "),a("li",[e._v("Multipart uploads are available/recommended.")])])]),e._v(" "),a("li",[e._v("Avoid Standard Storage as much as possible -> Go Intelligent unless there are A LOT of objects since there is a fee per 1000 objects")]),e._v(" "),a("li",[e._v("S3 Buckets can be shared across accounts")])])])}),[],!1,null,null,null);t.default=i.exports}}]);