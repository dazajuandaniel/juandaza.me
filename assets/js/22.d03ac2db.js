(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{380:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"elastic-load-balancer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elastic-load-balancer"}},[e._v("#")]),e._v(" Elastic Load Balancer")]),e._v(" "),t("p",[e._v("Forwards traffic to multiple EC2 instances\n"),t("img",{attrs:{src:"/images/elb_main.png",alt:"elb_main"}})]),e._v(" "),t("p",[e._v("Benefits:")]),e._v(" "),t("ul",[t("li",[e._v("Exponse single point of access")]),e._v(" "),t("li",[e._v("Spread loads")]),e._v(" "),t("li",[e._v("Handle failures (Health Checks)")]),e._v(" "),t("li",[e._v("Provide SSL termination")]),e._v(" "),t("li",[e._v("Enforce Stickiness of cookies")]),e._v(" "),t("li",[e._v("Separate public & private traffic.")])]),e._v(" "),t("h2",{attrs:{id:"health-checks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#health-checks"}},[e._v("#")]),e._v(" Health Checks")]),e._v(" "),t("p",[e._v("Enables knowing if instance is up or not. It is done a particular port & route.")]),e._v(" "),t("h2",{attrs:{id:"type-of-load-balancers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-of-load-balancers"}},[e._v("#")]),e._v(" Type of Load Balancers")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Classic LB -> HTTP/HTTPS/TCP")])]),e._v(" "),t("li",[t("p",[e._v("Application LB -> HTTP/HTTPS/Websockets")])]),e._v(" "),t("li",[t("p",[e._v("Network LB -> TCP/TLS & UDP")])])]),e._v(" "),t("p",[e._v("It can be either "),t("code",[e._v("private")]),e._v(" or "),t("code",[e._v("public")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"application-load-balancers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-load-balancers"}},[e._v("#")]),e._v(" Application Load Balancers")]),e._v(" "),t("p",[e._v("Allows to Load balance to multiple HTTP applications across machines ("),t("code",[e._v("target group")]),e._v(") and across applicatios in same machine (eg. containers)")]),e._v(" "),t("ul",[t("li",[e._v("Supports routing based on path in URL (example.com/"),t("code",[e._v("users")]),e._v(" & example.com/"),t("code",[e._v("posts")]),e._v(")")]),e._v(" "),t("li",[e._v("Supports routing based on hostname")]),e._v(" "),t("li",[e._v("Supports routing based on Query Strings (exampel.com/users?"),t("code",[e._v("id=2&order=3")]),e._v(")")]),e._v(" "),t("li",[e._v("Work great for containers and micro-services since they have port mapping features to redirect to dynamic port in ECS")])]),e._v(" "),t("p",[t("strong",[e._v("Target Groups")])]),e._v(" "),t("p",[e._v("Can be:")]),e._v(" "),t("ul",[t("li",[e._v("EC2 Instances")]),e._v(" "),t("li",[e._v("ECS Tasks")]),e._v(" "),t("li",[e._v("Lambda Functions")]),e._v(" "),t("li",[e._v("IP Addresses (private only)\nCan route to multiple Target Groups and Health Checks are done at the TG level.")])]),e._v(" "),t("p",[t("strong",[e._v("Other APLB Notes")])]),e._v(" "),t("ul",[t("li",[e._v("Returns a fixed hostname")]),e._v(" "),t("li",[e._v("The application's server don't see the IP address of the client. The true IP is inserted in the header "),t("code",[e._v("X-Forwarded-For")])])]),e._v(" "),t("h3",{attrs:{id:"network-load-balancer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-load-balancer"}},[e._v("#")]),e._v(" Network Load Balancer")]),e._v(" "),t("p",[e._v("Allows to forward TCP/UDP traffic to instances (Layer 5)")]),e._v(" "),t("ul",[t("li",[e._v("Less latency ~100ms (vs 400 ms for ALB)")]),e._v(" "),t("li",[e._v("Has "),t("em",[e._v("one static IP per AZ")]),e._v(" and supports assigning Elastic IP")]),e._v(" "),t("li",[e._v("Useful for extreme performance.")])]),e._v(" "),t("h2",{attrs:{id:"load-balancer-security-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-security-groups"}},[e._v("#")]),e._v(" Load Balancer Security Groups")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elb_security_group.png",alt:"elb_security_group"}})]),e._v(" "),t("h2",{attrs:{id:"stickiness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stickiness"}},[e._v("#")]),e._v(" Stickiness")]),e._v(" "),t("p",[e._v("The same client is always redirected to the same intance behind a load balancer. Works on Classic & Application LB. It is enabled at the Target Group level.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elb_stickiness.png",alt:"elb_security_group"}})]),e._v(" "),t("p",[e._v("Use case:")]),e._v(" "),t("ul",[t("li",[e._v("Enables the user not to lose their session data.")])]),e._v(" "),t("h2",{attrs:{id:"cross-zone-lb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-zone-lb"}},[e._v("#")]),e._v(" Cross Zone LB")]),e._v(" "),t("p",[e._v("Each load balancer instance distributes evenly across all registered instances in "),t("strong",[e._v("all AZs")]),e._v(" "),t("img",{attrs:{src:"/images/elb_cross_zone.png",alt:"elb_cross_zone"}})]),e._v(" "),t("ul",[t("li",[e._v("For ALB -> it is always on and cannot be disabled (user doesn't for cross AZ data transfer)")]),e._v(" "),t("li",[e._v("For NLB -> disabled by default, user pays for cross AZ data transfer")]),e._v(" "),t("li",[e._v("For CLB -> No charges for cross AZ data transfer")])]),e._v(" "),t("h2",{attrs:{id:"ssl-tls-certificates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls-certificates"}},[e._v("#")]),e._v(" SSL/TLS Certificates")]),e._v(" "),t("p",[e._v("Allows traffic between clients and load balancer to be encryted in transit.")]),e._v(" "),t("p",[t("strong",[e._v("SNI Server Name Indication")])]),e._v(" "),t("p",[e._v("Solves the problem of loading multiple SSL certificates onto one webserver.")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": Only works for ALB & NLB")]),e._v(" "),t("h2",{attrs:{id:"elb-connection-draining"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elb-connection-draining"}},[e._v("#")]),e._v(" ELB Connection Draining")]),e._v(" "),t("p",[e._v("Different Naming:")]),e._v(" "),t("ul",[t("li",[e._v("If CLB: Connection Draining")]),e._v(" "),t("li",[e._v("If Target Group: Deregistration delay\nIt is "),t("em",[e._v('the time to complete "in-flight requests"')]),e._v(" while the instance is de-registering or unhealthy. It stops sending new requests to the instance which is de-registrering.")])]),e._v(" "),t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),t("ul",[t("li",[e._v("They scale but are not instantenous")]),e._v(" "),t("li",[e._v("Troubleshooting:\n"),t("ul",[t("li",[e._v("4xx client induced errors")]),e._v(" "),t("li",[e._v("5xx application induced errors")]),e._v(" "),t("li",[e._v("503 is at capacity or no registered target")]),e._v(" "),t("li",[e._v("if it cannot connect to application, it is a security group")])])]),e._v(" "),t("li",[e._v("Monitoring:\n"),t("ul",[t("li",[e._v("Logs all access requests")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);