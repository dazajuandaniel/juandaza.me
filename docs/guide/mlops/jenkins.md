# Jenkins Learning

## Jenkis Terraform Architecture

### VPC
**VPC Config**
* IPv4 CIDR: `10.0.0.0/16`

**Subnets**
* Private Subnets x2
    * Private Subnet 1:
        * IPv4 CIDR: `10.0.2.0/24`
    * Private Subnet 2:
        * IPv4 CIDR: `10.0.3.0/24`

* Public Subnets x2
    * Public Subnet 1:
        * IPv4 CIDR: `10.0.0.0/24`
        * Auto Assign IP Address: `True`
    * Public Subnet 2:
        * IPv4 CIDR: `10.0.1.0/24`
        * Auto Assign IP Address: `True`
    
* Router Tables x3:
    * Public Router Table:
        * Routes Target -> From `0.0.0.0/0` to `Internet Gateway`
        * Associations: Public Subnets
    * Private Router Table 1:
        * Routes Target -> From `0.0.0.0/0` to `NAT Gateway`
        * Private Subnet 1
    * Private Router Table 2:
        * Routes Target -> From `0.0.0.0/0` to `NAT Gateway`
        * Private Subnet 2

**Internet Gateway**

Attached to VPC

**Elastic IP IDs**
* Associated to `Nat Gateways`

**Nat Gateways**
* One per Public Subnet

**Network ACL**
* Associated with all 4 Subnets
* Inbound Rules:
    * Source `0.0.0.0/0` - Rule Number `100` - Type `All traffic`
* Outbound Rules:
    * Source `0.0.0.0/0` - Rule Number `100` - Type `All traffic`

**Security Groups**
* Load Balancer SG
    * Inbound Rules: `HTTPS` - `443` - `0.0.0.0/0`
    * Outbound Rules: `8080` - `JenkinsSecurityGroup`
* Jenkins SG
    * Inbound Rules: `TCP` - `8080` - `0.0.0.0/0`
    * Outbound Rules: `All traffic` - `0.0.0.0/0`
* Jenkins EFS
    * Inbound Rules: `TCP` - `2049` - `JenkinsSecurityGroup`
    * Outbound Rules: `All traffic` - `0.0.0.0/0`

## EC2
**Load Balancer**
* Attributes:
    * HTTP LB
    * Internet-facing scheme
    * Subnets: `Public Subnet 1` & `Public Subnet 2`
* Security Group: `Load Balancer SG`
* Listener:
    * HTTP 443
    * Certification from DNS
* Forwarding:
    * To `JenkinsTargetGroup`:
        * Target: `10.0.3.81` - `8080` - 
## Resources

#### Install Jenkins

Install Java
```sh
sudo apt update
sudo apt install openjdk-8-jdk
```

Install Jenkins
```sh
sudo apt-get update

wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
    /etc/apt/sources.list.d/jenkins.list'

sudo apt-get update

sudo apt-get install jenkins
```

After installing run
```sh
sudo systemctl start jenkins

sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

To run commands as `sudo`:

```sh
vi  /etc/sudoers
jenkins ALL=(ALL) NOPASSWD: ALL
```

#### Things to Consider for Installation
1. Make sure Jenkins user can run `sudo` commands.
2. Be mindful of the Terraform state.
3. Get the right plugins and credentials in place.
4. Make sure AWS Resources have the right accesses.