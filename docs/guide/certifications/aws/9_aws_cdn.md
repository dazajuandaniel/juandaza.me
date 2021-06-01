# Content Delivery Network (CDN)

## Introduction
Improves read performance since content is distributed in the edge points.

Provides:
* DDoS protection, integration with AWS Shield & AWS WAF
* Can expose HTTPS endpoints and talk to internal HTTPS.
* Georestriction via Blacklist & Whitelist

**Comparison vs Cross Replication**

| CloudFront | Cross Replication |
|:-:|:-:|
| Uses global edge network | Must be set up for each region |
| Files are cached for a TTL | Files are updated in near real time |
| Best for static content that has to be available everywhere| Best for dynamic content that needs to be available in one region with low latency |

## Origins
* S3 Buckets:
	* Distributes files and caching them at edge
	* Enchanced security between CDN & S3 `OAI Origin Access Identity`-> Enables that comms can only be from CDN to S3
	* Can be used as ingress
* Custom Origins:
	* Any http endpoing:
		* S3 Website
		* App Load balancer (must be publicly accessible from HTTP)
			* The security group must allow the IPs for Cloudfront
		* EC2 Instance (must be publicly accessible from HTTP)
			* The security group must allow the IPs for Cloudfront
		* Any http 

## Signed URLS
Attach a policy  with:
* URL Expiration
* IP Ranges
* Trusted signers (which aws accounts can sign urls)

Signed URL = One URL per File
Signed Cookie = One Cookie for many files

## Pricing
Three available classes:
* Price Class All -> All regions
* Price Class 200 -> most regions, excludes most expensive ones 
* Price Class 100 -> only the least expensive regions

## Multiple Origin & Origin Groups
* `Multiple Origin`: Based on pattern in path, one can route to different origins. For example, path /api/ can be directed to Load Balancer while everything else goes to S3
* `Origin Groups:` Useful for high-availability & do failover
