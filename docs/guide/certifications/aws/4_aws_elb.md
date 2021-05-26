# Elastic Load Balancer
Forwards traffic to multiple EC2 instances
![elb_main](/images/elb_main.png)

Benefits:
* Exponse single point of access
* Spread loads
* Handle failures (Health Checks)
* Provide SSL termination
* Enforce Stickiness of cookies
* Separate public & private traffic.

## Health Checks
Enables knowing if instance is up or not. It is done a particular port & route.

## Type of Load Balancers
* Classic LB -> HTTP/HTTPS/TCP
* Application LB -> HTTP/HTTPS/Websockets
    
* Network LB -> TCP/TLS & UDP

It can be either `private` or `public`.

### Application Load Balancers
Allows to Load balance to multiple HTTP applications across machines (`target group`) and across applicatios in same machine (eg. containers)

* Supports routing based on path in URL (example.com/`users` & example.com/`posts`)
* Supports routing based on hostname
* Supports routing based on Query Strings (exampel.com/users?`id=2&order=3`)
* Work great for containers and micro-services since they have port mapping features to redirect to dynamic port in ECS

**Target Groups**

Can be:
* EC2 Instances
* ECS Tasks
* Lambda Functions
* IP Addresses (private only)
Can route to multiple Target Groups and Health Checks are done at the TG level.

**Other APLB Notes**
* Returns a fixed hostname
* The application's server don't see the IP address of the client. The true IP is inserted in the header `X-Forwarded-For` 

### Network Load Balancer
Allows to forward TCP/UDP traffic to instances (Layer 5)
* Less latency ~100ms (vs 400 ms for ALB)
* Has *one static IP per AZ* and supports assigning Elastic IP
* Useful for extreme performance.

## Load Balancer Security Groups
![elb_security_group](/images/elb_security_group.png)

## Stickiness
The same client is always redirected to the same intance behind a load balancer. Works on Classic & Application LB. It is enabled at the Target Group level.

![elb_security_group](/images/elb_stickiness.png)

Use case:
* Enables the user not to lose their session data.

## Cross Zone LB
Each load balancer instance distributes evenly across all registered instances in **all AZs**
![elb_cross_zone](/images/elb_cross_zone.png)

* For ALB -> it is always on and cannot be disabled (user doesn't for cross AZ data transfer)
* For NLB -> disabled by default, user pays for cross AZ data transfer
* For CLB -> No charges for cross AZ data transfer

## SSL/TLS Certificates
Allows traffic between clients and load balancer to be encryted in transit.

**SNI Server Name Indication**

Solves the problem of loading multiple SSL certificates onto one webserver.

**Note**: Only works for ALB & NLB

## ELB Connection Draining
Different Naming:
* If CLB: Connection Draining
* If Target Group: Deregistration delay
It is *the time to complete "in-flight requests"* while the instance is de-registering or unhealthy. It stops sending new requests to the instance which is de-registrering.

## Notes
* They scale but are not instantenous
* Troubleshooting:
    * 4xx client induced errors
    * 5xx application induced errors
    * 503 is at capacity or no registered target
    * if it cannot connect to application, it is a security group
* Monitoring:
    * Logs all access requests


