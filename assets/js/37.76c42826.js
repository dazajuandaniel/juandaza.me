(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{312:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"azure-dp-100-exam-review-topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-dp-100-exam-review-topics"}},[e._v("#")]),e._v(" Azure DP-100 Exam Review Topics")]),e._v(" "),t("h2",{attrs:{id:"deployment-inference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment-inference"}},[e._v("#")]),e._v(" Deployment Inference")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("AciWebservice")]),e._v(" vs "),t("code",[e._v("AKSWebservice")]),e._v(" "),t("ul",[t("li",[e._v("Deployment Configurations in each")])])]),e._v(" "),t("li",[t("code",[e._v("Pipeline")]),e._v(" Submit Configurations")]),e._v(" "),t("li",[t("code",[e._v("Endpoint")]),e._v(" authentication")]),e._v(" "),t("li",[e._v("What is the source servive tag "),t("code",[e._v("BatchNodeManagement")])]),e._v(" "),t("li",[t("code",[e._v("tokens")]),e._v(" vs "),t("code",[e._v("keys")])])]),e._v(" "),t("h2",{attrs:{id:"automl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automl"}},[e._v("#")]),e._v(" Automl")]),e._v(" "),t("ul",[t("li",[e._v("Required Tabular data")]),e._v(" "),t("li",[e._v("Requires remote compute")])]),e._v(" "),t("h2",{attrs:{id:"instances-series"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instances-series"}},[e._v("#")]),e._v(" Instances Series")]),e._v(" "),t("ul",[t("li",[e._v("NCv2 -> Run Image Classification deep learning models leveraing CUDA")]),e._v(" "),t("li",[e._v("DSv2 -> General Purpose (No support for GPUs)")]),e._v(" "),t("li",[e._v("Fs -> Compute Optimized (No support for GPUs)")]),e._v(" "),t("li",[e._v("Lsv2 -> Storage optimized VMs")])]),e._v(" "),t("h2",{attrs:{id:"workspace-datastores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workspace-datastores"}},[e._v("#")]),e._v(" Workspace & Datastores")]),e._v(" "),t("ul",[t("li",[e._v("Everytime a new workspace is created, a default datastore is created (it cannot be deleted), its name is "),t("code",[e._v("workspaceblobstore")])])]),e._v(" "),t("h2",{attrs:{id:"onnx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onnx"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/concept-onnx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ONNX"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("ONNX is an open format built to represent machine learning models. ONNX defines a common set of operators - the building blocks of machine learning and deep learning models - and a common file format to enable AI developers to use models with a variety of frameworks, tools, runtimes, and compilers")]),e._v(" "),t("h2",{attrs:{id:"pipeline-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-details"}},[e._v("#")]),e._v(" Pipeline Details")]),e._v(" "),t("ul",[t("li",[e._v("Download the output files generated by the experiment\n"),t("ol",[t("li",[e._v("Get the latest run"),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("bath_run "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" pipelinerun"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("find_step_run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("pipelin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),t("li",[e._v("Get output data"),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("out "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" batch_run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("get_output_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),t("li",[e._v("Download data"),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("download"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("local_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"reinforcement-learning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reinforcement-learning"}},[e._v("#")]),e._v(" Reinforcement Learning")]),e._v(" "),t("p",[e._v("For RL jobs that use multiple compute targets, you must specify a virtual network with open ports that allow worker nodes and head nodes to communicate with each other.")]),e._v(" "),t("h2",{attrs:{id:"metrics-for-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metrics-for-models"}},[e._v("#")]),e._v(" Metrics for Models")]),e._v(" "),t("p",[t("strong",[e._v("Classification")])]),e._v(" "),t("ul",[t("li",[e._v("Accuracy")]),e._v(" "),t("li",[e._v("Precision")]),e._v(" "),t("li",[e._v("Recall")]),e._v(" "),t("li",[e._v("F-Score")]),e._v(" "),t("li",[e._v("AUC")]),e._v(" "),t("li",[e._v("Average Log Loss")]),e._v(" "),t("li",[e._v("Training Log Loss")])]),e._v(" "),t("p",[t("strong",[e._v("Metrics for Regression")])]),e._v(" "),t("ul",[t("li",[e._v("Mean Absolute Error (MAE)")]),e._v(" "),t("li",[e._v("Root mean squared error (RMSE)")]),e._v(" "),t("li",[e._v("Relative Absolute Error (RAE)")]),e._v(" "),t("li",[e._v("Relative Sqaured Error (RSE)")]),e._v(" "),t("li",[e._v("Mean Zero One Error (MZOE)")]),e._v(" "),t("li",[e._v("Coefficient of Determination (R2)")])]),e._v(" "),t("h2",{attrs:{id:"other-facts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-facts"}},[e._v("#")]),e._v(" Other Facts")]),e._v(" "),t("p",[e._v("Use Vowpal Wabbit for DNN")])])}),[],!1,null,null,null);t.default=r.exports}}]);