# Identity Access Management (IAM)
## Introduction
Manage users and their levels of access to the AWS Console, provides the following features:
* Centralized control of account
* Share access of account
* Granular permissions
* Federation: Active Directory, FB, LinkedIn, etc
* MFA
* Temporary access
* Setup own password rotation policy
* Integrates with AWS Services
* Supports PCI/DSS
* Apply the `Least Priviledge Principle`: Only give access to what's required. Nothing more, nothing less.

![iam_groups](/images/iam_groups.png)
## Terminology
| *Concept* | *Definition* | 
|--|--|
|**Users:**  | End users such as people, employee | 
| **Groups** | Collection of Users |
| **Policies**| Documents (Permissions) - JSON|
| **Roles** | Roles are assigned to AWS services |

## IAM Policy Structure
* Version: Policy language Version
* ID: Indentifier
* Statement:
	* Sid: Identifier for statement
	* Effect: Wheter the the statement allows or denies access
	* Principal: account/user/role to which the policy apploes to
	* Action: list of actions (API Calls) this policy allows or denis
	* Resource: List of resources to which the action will be applied to.
	* Condition: when this policy is in effect.

```json
"Version":"2012-10-17",
"Id": "S3-Account-Permissions",
"Statement": [{
	"Sid": "1",
	"Effect": "Allow",
	"Principal": {
		"AWS":["arn..."]
	},
	"Action": [
		"s3:GetObject",
		"s3:PutObject"
	],
	"Resource": ["arn..."]

}]
```
## Main Jobs
1. Manage Identities (Identity Provider)
	* i.e. Create modify/delete users/roles
2. Authenticates identities
	* i.e. username/password, etc
3. Authorize
	* i.e. policies

## IAM Security Tools
1. IAM Credential Report (Account Level)
2. IAM Access Advisor

## Other Notes
* Users can get sign-in link (can be customizable)
* `Root Account` -> Can do EVERYTHING, best practice is not to use this account.
* IAM is a global / free service
* Password Policies available:
	* Length
	* Require Upper/Lower case
	* Require Number/Non-Alphanumeric
	* Expiration days
	* Password reuse