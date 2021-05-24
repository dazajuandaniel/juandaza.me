(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{377:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"identity-access-management-iam"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#identity-access-management-iam"}},[t._v("#")]),t._v(" Identity Access Management (IAM)")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Manage users and their levels of access to the AWS Console, provides the following features:")]),t._v(" "),e("ul",[e("li",[t._v("Centralized control of account")]),t._v(" "),e("li",[t._v("Share access of account")]),t._v(" "),e("li",[t._v("Granular permissions")]),t._v(" "),e("li",[t._v("Federation: Active Directory, FB, LinkedIn, etc")]),t._v(" "),e("li",[t._v("MFA")]),t._v(" "),e("li",[t._v("Temporary access")]),t._v(" "),e("li",[t._v("Setup own password rotation policy")]),t._v(" "),e("li",[t._v("Integrates with AWS Services")]),t._v(" "),e("li",[t._v("Supports PCI/DSS")]),t._v(" "),e("li",[t._v("Apply the "),e("code",[t._v("Least Priviledge Principle")]),t._v(": Only give access to what's required. Nothing more, nothing less.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/iam_groups.png",alt:"iam_groups"}})]),t._v(" "),e("h2",{attrs:{id:"terminology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[t._v("#")]),t._v(" Terminology")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("em",[t._v("Concept")])]),t._v(" "),e("th",[e("em",[t._v("Definition")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Users:")])]),t._v(" "),e("td",[t._v("End users such as people, employee")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Groups")])]),t._v(" "),e("td",[t._v("Collection of Users")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Policies")])]),t._v(" "),e("td",[t._v("Documents (Permissions) - JSON")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Roles")])]),t._v(" "),e("td",[t._v("Roles are assigned to AWS services")])])])]),t._v(" "),e("h2",{attrs:{id:"iam-policy-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iam-policy-structure"}},[t._v("#")]),t._v(" IAM Policy Structure")]),t._v(" "),e("ul",[e("li",[t._v("Version: Policy language Version")]),t._v(" "),e("li",[t._v("ID: Indentifier")]),t._v(" "),e("li",[t._v("Statement:\n"),e("ul",[e("li",[t._v("Sid: Identifier for statement")]),t._v(" "),e("li",[t._v("Effect: Wheter the the statement allows or denies access")]),t._v(" "),e("li",[t._v("Principal: account/user/role to which the policy apploes to")]),t._v(" "),e("li",[t._v("Action: list of actions (API Calls) this policy allows or denis")]),t._v(" "),e("li",[t._v("Resource: List of resources to which the action will be applied to.")]),t._v(" "),e("li",[t._v("Condition: when this policy is in effect.")])])])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2012-10-17"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"S3-Account-Permissions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Statement"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Sid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Effect"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Allow"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Principal"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AWS"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arn..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Action"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s3:GetObject"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s3:PutObject"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Resource"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arn..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"main-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#main-jobs"}},[t._v("#")]),t._v(" Main Jobs")]),t._v(" "),e("ol",[e("li",[t._v("Manage Identities (Identity Provider)\n"),e("ul",[e("li",[t._v("i.e. Create modify/delete users/roles")])])]),t._v(" "),e("li",[t._v("Authenticates identities\n"),e("ul",[e("li",[t._v("i.e. username/password, etc")])])]),t._v(" "),e("li",[t._v("Authorize\n"),e("ul",[e("li",[t._v("i.e. policies")])])])]),t._v(" "),e("h2",{attrs:{id:"iam-security-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iam-security-tools"}},[t._v("#")]),t._v(" IAM Security Tools")]),t._v(" "),e("ol",[e("li",[t._v("IAM Credential Report (Account Level)")]),t._v(" "),e("li",[t._v("IAM Access Advisor")])]),t._v(" "),e("h2",{attrs:{id:"other-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[t._v("#")]),t._v(" Other Notes")]),t._v(" "),e("ul",[e("li",[t._v("Users can get sign-in link (can be customizable)")]),t._v(" "),e("li",[e("code",[t._v("Root Account")]),t._v(" -> Can do EVERYTHING, best practice is not to use this account.")]),t._v(" "),e("li",[t._v("IAM is a global / free service")]),t._v(" "),e("li",[t._v("Password Policies available:\n"),e("ul",[e("li",[t._v("Length")]),t._v(" "),e("li",[t._v("Require Upper/Lower case")]),t._v(" "),e("li",[t._v("Require Number/Non-Alphanumeric")]),t._v(" "),e("li",[t._v("Expiration days")]),t._v(" "),e("li",[t._v("Password reuse")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);