# DNS Fundamentals

**Main Concepts**
* *Root Hints File:* Contains list of all Root Servers -> Provided by the OS
* *Root Server:* Hosts the DNS root zone
* *Root Zone:* Points the TLD authorative servers (.com/.uk/etc)

# Route 53
Managed DNS, a collection of rules & records understand how to reach a server.

Common records for DNS:
1. A: Hostname to IPv4
2. AAAA: Hostname to IPv6
3. CNAME: Hostname to hostname
4. Alias: Hostname to AWS Resource

**Product Basics**
1. *Register domains:* Has relationship with all major domain registries (.io/.com/.net/etc).
2. *Host Zones, managed nameservers:* 

**TTL**

Way for web browsers to cache the response of a DNS query. Has the value of the DNS for a period of time.

**CNAME vs Alias**

AWS resources expose an AWS Hostname e.g. ELB

CNAME:
* Points a hostname to any other hostname (app.mydomain.com -> blabla.anything.com)
* Only works for *NON ROOT DOMAINS* (something.domain.com)

ALIAS:
* Points a hostname to an AWS resource (app.mydomain.com -> blabla.amazonaws.com)
* Works for *ROOT* & *NON ROOT* domains
* Free
* Native heath check

## Routing Policy
**Simple Routing Policy**
* Cannot have health checks
* Redirects to a single resource
* If multiple IP Addresses are present, they are returned at random

![r53_simple_routing](/images/r53_simple_routing.png)

**Weighted Routing Policy**
* Controls the % of requests that go a specific endpoint

![r53_weight_routing](/images/r53_weight_routing.png)

**Latency Routing Policy**
* Redirects to the server with the least latency from User to AWS resource.

![r53_latency_routing](/images/r53_latency_routing.png)

**Failover Routing Policy**
* Based on health checks and status of instances.

![r53_failover_routing](/images/r53_failover_routing.png)

**Geolocation Routing Policy**
* Based on user's location
* Requires a default's location

**Geoproximity Routing Policy**
* Routes based on geographic location of users and resources
* Shift traffic based on `bias`
* To change the size of the geographic region, specify the `bias` value:
    * 1 to 99 -> expand
    * -1 to -99 -> shrink
* Resources can be:
    * AWS Resources
    * Non-AWS Resources

**Multi Value Routing Policy**

* Routing traffic to multipe resources
* Associate Route53 health checks with records
* Up to 8 healthy records are returned for each multi value query

## Health Checks
* Fails if it X health checks failed
* Healthy if it passes X health checks in a row
* Default check interval: 30s (can set to 10s)
* Can have HTTP/HTTPS/TCP (No SSL)
Health check can be linked to DNS queries

