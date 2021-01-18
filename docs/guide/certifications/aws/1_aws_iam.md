---
title: AWS IAM
description: Learnings from Online Courses
author: Juan Daza
type: article
---
# Identity Access Management (IAM)
## Introduction
Manage users and their levels of access to the AWS Console, provides the following features:
* Centralized control of account
* Share access of account
* Granular permissions
* Federation:  Active Directory, FB, LinkedIn, etc
* MFA
* Temporary access
* Setup own password rotation policy
* Integrates with AWS Services
* Supports PCI/DSS

## Terminology
| *Concept* | *Definition* | 
|--|--|--|--|
|**Users:**  | End users such as people, employee | 
| **Groups** | Collection of Users |
| **Policies**| Documents (Permissions) - JSON|
| **Roles** | Roles are assigned to AWS services |

## Other Notes
* Users can get sign-in link (can be customizable)
* `Root Account` -> Can do EVERYTHING, best practice is not to use this account.
* IAM is a global service
* Password Policies available:
	* Length
	* Require Upper/Lower case
	* Require Number/Non-Alphanumeric
	* Expiration days
	* Password reuse