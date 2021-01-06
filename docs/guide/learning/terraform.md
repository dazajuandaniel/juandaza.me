# Terraform Learning

## Learning Presentation

<iframe src="https://onedrive.live.com/embed?cid=42456911A7C9B1CB&amp;resid=42456911A7C9B1CB%2132990&amp;authkey=AKQrec1_VsHwX7U&amp;em=2&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

## What is Terraform
Allows to write infrastructure as code.
Keeps infrastructure in a certain state (compliant)
 * Tries to match it at all times
 * Makes infratructure auditable

Ansible, Chef, Puppet, Saltstack focus on automating the installation and config of software.
Terraform can automate provisioning the infrastructure itself.

Hardware (Terraform) -> Software (Ansible,etc)

## Terraform HCL (HashiCorp Config Language)

Interprets `.tf` files

### Variables Basics
`variable` is a keyword to create variables:

```terraform
variable "myvar" {
    type = "string"
    default = "hello terraform"
}

//Map of strings

variable "mymap" {
    type = map(string)
    default = {
        mykey = "my value"
        }
}

variable "mylist" {
    type = list
    default = [1,2,3]
}
```
Enter the terraform console

```shell
terraform console
```
and then run the following examples
```terraform
var.myvar
//outputs 'hello terraform'

var.mymap
//outputs '{"mykey" = "my value"}'

var.mymap["mykey"]
//outputs 'my value'

var.mylist
//outputs [1,2,3]

var.mylist[0]
//outputs 1

element(var.mylist,1)
//outputs 2

slice(var.mylist,0,1)
//outputs [1,2]
```

I can also create variables in files. E.g. `file.tfvars`

```terraform
AWS_REGION="eu-west-1"
```
then, in the console I can do
```terraform
var.AWS_REGION
//outputs eu-west-1
```

**Terraform Simple Variable Types**
1. String
2. Number
3. Bool

**Terraform Complex Types**
1. list(type)
    * List: `[1,2,3]`
    * Is always ordered
2. Set(Type)
    * It's like a list but no order (given by user) is preserved, can only contain unique values
3. Map(type)
    * `{"key" = "value"}`
4. Tuple([])
    * Like a list but each element can have a different type
5. Object({})
    * Like a map but each element can have a different type

### Resources
When creating a resource one needs to add a provider with the `provider` keyword. The keyword `resource` denotes a resource.

**Syntax for a resource**
```terraform
resource <resource type> <name> {
    <properties>
}
```

```terraform
provider "aws"{

}

resource "aws_instance" "example"{
    ami = var.AMIS[var.AWS_REGION]
    instance_type = "t2.micro"
}
```
an alternate notation is:
```terraform
resource "aws_instance" "example"{
    ami = ${var.AMIS[var.AWS_REGION]}
    instance_type = "t2.micro"
}
```
**Macro Steps when Running Terraform**
```terraform
//Run this to download cloud-specific plugins or when in a new directory
terraform init

//This command actually executes the code
terraform apply

//Destroy created resources
terraform destroy

//Shows the plan
terraform plan
```

### Variables Deep Dive
Use variables for elements that might change or to make it easier to reuse terraform files.

Instead of having:

`instance.tf`
```terraform
provider "aws" {
    access_key = "ACCESS_KEY"
    secret_key = "SECRET_KEY"
    region = "us-east-1"
}

resource "aws_instance" "example" {
    ami = "ami_id_here"
    instance_type = "t2.micro"
}
```
better to split the files to:

`provider.tf`
```terraform
provider "aws" {
    access_key = "${var.ACCESS_KEY}"
    secret_key = "${var.AWS_SECRET_KEY}"
    region = "${var.AWS_REGION}"
}
```
`vars.tf`

Here we declare the variablaes
```terraform
variable "ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}
variable "AWS_REGION" {
    default = "eu-west-1"
}
variable "AMIS" {
    type = "map"
    default = {
        us-east-1 = "ami-xxx1"
        us-west-2 = "ami-xxx2"
        eu-west-1 = "ami-xxx3"
    }
}
```
`terraform.tfvars`

This one HAS to be included in `.gitignore`
```terraform
ACCESS_KEY = ""
AWS_SECRET_KEY = ""
```
`instance.tf`

```terraform
resource "aws_instance" "example" {
    ami = "${lookup(var.AMIS,var.AWS_REGION)}"
    instance_type = "t2.micro"
}
```
### Software Privision Basics
Ways to provision software:
1. Buold own custom AMI and bundle Software
    * Packer
2. Boot Standard AMI, and then install software
    * Using file uploads
    * Using remote exec
    * Use Chef (integrated with terraform), Puppet, Ansible

**File Uploads**

```terraform
provisioner "file" {
    source = "app.conf"
    destination = "/etc/myapp.conf"
}
```
File uploads can be used in conjunction with `remote-exec`
We might have to override SSH defaults

```terraform
provisioner "file" {
    source = "app.conf"
    destination = "/etc/myapp.conf"
    connection {
        user = "${var.instance_username}"
        password = "${var.instance_password}"
    }
}
```

To use SSH keypairs:
```terraform
resource "aws_key_pair" "mykey" {
    key_name = "mykey"
    public_key = "ssh-rsa my-public-key"
}

resource "aws_instance" "example" {
    ami = "${lookup(var.AMIS, var.AWS_REGION)}"
    instance_type = "t2.micro"
    key_name = "${aws_key_pair.mykey.key_name}"
}
provisioner "file" {
    source = "app.conf"
    destination = "/opt/script.sh"
    connection {
        user = "${var.instance_username}"
        private_key = "${file(${var.path_to_private_key})}"
    }
}

After uploading a script, we need to execute it

```terraform
provisioner "remote-exec" {
    inline = [
        "chmod +x /opt/script.sh",
        "/opt/script.sh arguments"
    ]
}
```
### Output
Terraform keeps attributes of resources created. They can be queried using the keyword `output`.

```terraform
resource "aws_instance" "example" {
    ami = ""
    instance_type=""
}
 output "ip" {
     value = "${aws_instance.example.public_ip}"
 }
```
Attributes can also be used in a script.