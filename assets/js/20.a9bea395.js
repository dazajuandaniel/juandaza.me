(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{378:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ec2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ec2"}},[t._v("#")]),t._v(" EC2")]),t._v(" "),a("h2",{attrs:{id:"ec2-basics-elastic-compute-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ec2-basics-elastic-compute-cloud"}},[t._v("#")]),t._v(" EC2 Basics - Elastic Compute Cloud")]),t._v(" "),a("p",[t._v("Mainly consists of:")]),t._v(" "),a("ul",[a("li",[t._v("Virtual machines (instances)")]),t._v(" "),a("li",[t._v("Storing data on virtual drives (EBS)")]),t._v(" "),a("li",[t._v("Distributing loads (ELB)")]),t._v(" "),a("li",[t._v("Scaling services using auto-scaling groups (ASG)")])]),t._v(" "),a("p",[t._v("Configuration options:")]),t._v(" "),a("ol",[a("li",[t._v("OS -> Windows/Linux/MacOS")]),t._v(" "),a("li",[t._v("CPU & RAM")]),t._v(" "),a("li",[t._v("Storage")]),t._v(" "),a("li",[t._v("Network card")]),t._v(" "),a("li",[t._v("Firewall Rules")]),t._v(" "),a("li",[t._v("Bootstrap Scripts -> Launching commands when instance starts (runs with "),a("code",[t._v("root")]),t._v(" users)")])]),t._v(" "),a("h2",{attrs:{id:"instance-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-types"}},[t._v("#")]),t._v(" Instance Types")]),t._v(" "),a("p",[t._v("Naming convention, eg:")]),t._v(" "),a("p",[a("code",[t._v("m5.2xlarge")])]),t._v(" "),a("p",[a("code",[t._v("m")]),t._v(" -> instance class")]),t._v(" "),a("p",[a("code",[t._v("5")]),t._v(" -> generation")]),t._v(" "),a("p",[a("code",[t._v("2xlarge")]),t._v(" -> size of instance class")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Instance Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("T")]),t._v(": General Purpose")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Balance between Compute, Memory Networking")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("C")]),t._v(": Compute Optimized")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Compute intesive tasks (Batch processing/HPC)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("R")]),t._v(": Memory Optimized")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DBs/BI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("I")]),t._v(": Storage Optimized")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DBs/Cache Memory")])])])]),t._v(" "),a("h2",{attrs:{id:"security-groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-groups"}},[t._v("#")]),t._v(" Security Groups")]),t._v(" "),a("p",[t._v("Control how traffic is controlled into and out of the instance.")]),t._v(" "),a("p",[a("strong",[t._v("Notes:")])]),t._v(" "),a("ul",[a("li",[t._v("Security Groups contains only "),a("code",[t._v("allow")]),t._v(" rules")]),t._v(" "),a("li",[t._v("Regulate:\n"),a("ul",[a("li",[t._v("Access to ports")]),t._v(" "),a("li",[t._v("Authorised IP Ranges")]),t._v(" "),a("li",[t._v("Control of inbound network")]),t._v(" "),a("li",[t._v("Control of outbound network")])])]),t._v(" "),a("li",[t._v("Can be attached to multiple instances")]),t._v(" "),a("li",[t._v("Lock down to region/VPC combination")]),t._v(" "),a("li",[t._v("EC2 Instance Connects allows to SSH easier (still requires Security Groups)")])]),t._v(" "),a("h2",{attrs:{id:"launch-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-types"}},[t._v("#")]),t._v(" Launch Types")]),t._v(" "),a("ul",[a("li",[t._v("On-Demand Instances: Pay for what you use")]),t._v(" "),a("li",[t._v("Reserved: Min 1 year")]),t._v(" "),a("li",[t._v("Spot Instances: Can lose an instance if Spot Price > Max price willing to pay")]),t._v(" "),a("li",[t._v("Dedicated Hosts")])]),t._v(" "),a("h2",{attrs:{id:"spot-instances-fleet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spot-instances-fleet"}},[t._v("#")]),t._v(" Spot Instances & Fleet")]),t._v(" "),a("p",[a("strong",[t._v("Spot Instances")])]),t._v(" "),a("p",[t._v("To launch one needs "),a("code",[t._v("Max Price")]),t._v(", "),a("code",[t._v("No Instances")]),t._v(", "),a("code",[t._v("Launch Specification")]),t._v(", "),a("code",[t._v("Request Type")]),t._v(", and "),a("code",[t._v("Valid From")]),t._v(" and "),a("code",[t._v("Valid To")]),t._v(". To terminate a launch instance both the request and the instance need to be terminated.")]),t._v(" "),a("p",[a("strong",[t._v("Spot Fleet")])]),t._v(" "),a("p",[t._v("Spot Instances + On-Demand Instances = Try to meet target capacity with price constraints.")]),t._v(" "),a("p",[t._v("Strategies to allocate Spot Instances:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lowestPrice")]),t._v(": Best for short workloads")]),t._v(" "),a("li",[a("code",[t._v("diversified")]),t._v(": Best for availability")]),t._v(" "),a("li",[a("code",[t._v("capacityOptimized")]),t._v(": Optimal Capacity based on No of Instances")])]),t._v(" "),a("h2",{attrs:{id:"placement-groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#placement-groups"}},[t._v("#")]),t._v(" Placement Groups")]),t._v(" "),a("p",[t._v("Gives control over the EC2 instance placement strategy")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Cluster")]),t._v(": Low latency group in the same AZ\n"),a("img",{attrs:{src:"/images/placement_group_cluster.png",alt:"placement_group_cluster"}})]),t._v(" "),a("li",[a("code",[t._v("Spread")]),t._v(": Across different Hardware (only max 7 instances per AZ per placement group)\n"),a("img",{attrs:{src:"/images/placement_group_spread.png",alt:"placement_group_spread"}})]),t._v(" "),a("li",[a("code",[t._v("Partition")]),t._v(": Across different partitions (racks of Hardware)\n"),a("img",{attrs:{src:"/images/placement_group_partition.png",alt:"placement_group_partition"}})])]),t._v(" "),a("h2",{attrs:{id:"elastic-network-card"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-network-card"}},[t._v("#")]),t._v(" Elastic Network Card")]),t._v(" "),a("p",[t._v("Logical component in a VPC that represents a virtual network card. Works to handle failover of networks since it can be attached at will to different instances.")]),t._v(" "),a("ul",[a("li",[t._v("Can be created independent of the EC2 instance")]),t._v(" "),a("li",[t._v("Bound to one AZ")]),t._v(" "),a("li",[t._v("Attributes:\n"),a("ul",[a("li",[t._v("Primary private IPv4")]),t._v(" "),a("li",[t._v("One Elastic IP ID")]),t._v(" "),a("li",[t._v("One Public IPv4")]),t._v(" "),a("li",[t._v("One or more Security Groups")]),t._v(" "),a("li",[t._v("A MAC Address")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Other notes about ENI"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"other-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[t._v("#")]),t._v(" Other notes")]),t._v(" "),a("ul",[a("li",[t._v("When an instance is stopped, the public IPV4 address changes. To avoid this, use "),a("code",[t._v("elastic IP Address")])]),t._v(" "),a("li",[t._v("One can only have 5 Elastic IP in an account (preferred is to use DNS name or use Load Balancer)")])])])}),[],!1,null,null,null);e.default=n.exports}}]);