(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{311:function(e,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"azure-dp-100-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-dp-100-summary"}},[e._v("#")]),e._v(" Azure DP-100 Summary")]),e._v(" "),t("h2",{attrs:{id:"major-components-of-aml-workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major-components-of-aml-workspaces"}},[e._v("#")]),e._v(" Major Components of AML Workspaces")]),e._v(" "),t("p",[e._v("Workspace -> Top Level Resource for AML")]),e._v(" "),t("ul",[t("li",[e._v("Compute Instances")]),e._v(" "),t("li",[e._v("User Roles")]),e._v(" "),t("li",[e._v("Compute Targets")]),e._v(" "),t("li",[e._v("Experiments")]),e._v(" "),t("li",[e._v("Pipelines")]),e._v(" "),t("li",[e._v("Datasets")]),e._v(" "),t("li",[e._v("Models (registered models)")]),e._v(" "),t("li",[e._v("Deployment Endpoints")])]),e._v(" "),t("h2",{attrs:{id:"creating-an-aml-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-aml-workspace"}},[e._v("#")]),e._v(" Creating an AML "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/concept-workspace",target:"_blank",rel:"noopener noreferrer"}},[e._v("Workspace"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Resources built as accompanying resource")]),e._v(" "),t("ul",[t("li",[e._v("Azure Storage Account")]),e._v(" "),t("li",[e._v("Azure Container Registry")]),e._v(" "),t("li",[e._v("Azure Application Insights")]),e._v(" "),t("li",[e._v("Azure Key Vault")])]),e._v(" "),t("p",[t("strong",[e._v("Workspace Settings")])]),e._v(" "),t("ul",[t("li",[e._v("Access Controls")]),e._v(" "),t("li",[e._v("Event Suscriptions (generate alerts or triggers based on events)")]),e._v(" "),t("li",[e._v("Alerts & Diagnostic Settings")])]),e._v(" "),t("p",[t("strong",[e._v("AML Studio")])]),e._v(" "),t("ul",[t("li",[e._v("Author\n"),t("ul",[t("li",[e._v("Notebooks")]),e._v(" "),t("li",[e._v("Automate ML")]),e._v(" "),t("li",[e._v("Designer")])])]),e._v(" "),t("li",[e._v("Assets\n"),t("ul",[t("li",[e._v("Datasets")]),e._v(" "),t("li",[e._v("Experiments")]),e._v(" "),t("li",[e._v("Models")]),e._v(" "),t("li",[e._v("Endpoints")])])]),e._v(" "),t("li",[e._v("Monitoring\n"),t("ul",[t("li",[e._v("Compute")]),e._v(" "),t("li",[e._v("Datastores")]),e._v(" "),t("li",[e._v("Data Labelling")])])])]),e._v(" "),t("h3",{attrs:{id:"iam-rbac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iam-rbac"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview#how-rbac-works",target:"_blank",rel:"noopener noreferrer"}},[e._v("IAM/RBAC"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Users in the Azure Active Directory are assigned specific roles which grants access to resources via multippe ways (CLI/Portal/etc).")]),e._v(" "),t("h2",{attrs:{id:"experiments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#experiments"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/concept-azure-machine-learning-architecture#experiments",target:"_blank",rel:"noopener noreferrer"}},[e._v("Experiments"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("A grouping of many runs")]),e._v(" "),t("ul",[t("li",[e._v("Run: Singe execution of a training script")]),e._v(" "),t("li",[e._v("Info Stored: Metadata about run, metrics, etc.")])]),e._v(" "),t("p",[t("strong",[e._v("Run Configuration")])]),e._v(" "),t("ul",[t("li",[e._v("Used when we want to run a training experiment on a different compute targets.")])]),e._v(" "),t("p",[t("strong",[e._v("Estimator Class")])]),e._v(" "),t("ul",[t("li",[e._v("Allows the creation of run configuration utilizing the AML Python SDK")])]),e._v(" "),t("p",[e._v("Designer can only be "),t("em",[e._v("run")]),e._v(" on Azure Machine Learning Compute Cluster")]),e._v(" "),t("h2",{attrs:{id:"data-objects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-objects"}},[e._v("#")]),e._v(" Data Objects")]),e._v(" "),t("p",[t("strong",[e._v("Pipelines")])]),e._v(" "),t("p",[e._v("Independently executable workflow of a ML task (orchestration).")]),e._v(" "),t("ul",[t("li",[e._v("Steps that don't need re-run are not run")]),e._v(" "),t("li",[e._v("Each step can run in a separate compute target")]),e._v(" "),t("li",[e._v("Dependencies are managed by the pipeline")])]),e._v(" "),t("p",[t("strong",[e._v("Datastores")])]),e._v(" "),t("p",[e._v("An abstraction over Azure Storage services.")]),e._v(" "),t("p",[t("strong",[e._v("Datasets")])]),e._v(" "),t("p",[e._v("References to where the data lives (tabular, file)")]),e._v(" "),t("p",[t("strong",[e._v("Dataset Management")])]),e._v(" "),t("ul",[t("li",[e._v("Version and tracking")]),e._v(" "),t("li",[e._v("Monitor (data drift)")]),e._v(" "),t("li",[e._v("Open datasets")])]),e._v(" "),t("p",[t("strong",[e._v("Data Drift")])]),e._v(" "),t("ul",[t("li",[e._v("Change in model input data that leads to the degradation of model performance")]),e._v(" "),t("li",[e._v("Possible causes:\n"),t("ul",[t("li",[e._v("Upstream process change")]),e._v(" "),t("li",[e._v("Quality issues")]),e._v(" "),t("li",[e._v("Natural Causes")]),e._v(" "),t("li",[e._v("Covariate shift")])])])]),e._v(" "),t("p",[t("strong",[e._v("Other Notes")]),e._v("\nCSV files can expand up to 10x in a dataframe, and you want double the RAM of that (20GB Ram for a 1GB dataset).")]),e._v(" "),t("h2",{attrs:{id:"feature-selection-aml-exam-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feature-selection-aml-exam-concepts"}},[e._v("#")]),e._v(" Feature Selection (AML Exam Concepts)")]),e._v(" "),t("ul",[t("li",[e._v("Pearson's correlation\n"),t("ul",[t("li",[e._v("Dependent and Independent Variables don't make any diff.")]),e._v(" "),t("li",[e._v("Linear data")])])]),e._v(" "),t("li",[e._v("Mutual Info Score\n"),t("ul",[t("li",[e._v("Measure the reduction in uncertainty to predict parts of outcomes of a system")]),e._v(" "),t("li",[t("code",[e._v("h(x) = -log(p(x))")])])])]),e._v(" "),t("li",[e._v("Kendall's Correlation Coefficient\n"),t("ul",[t("li",[e._v("A nonparametric analysis of the strength of a relationship between 2 variables")]),e._v(" "),t("li",[e._v("Variables are measured on an ordinal scale and data needs to have a monotonic relationship")]),e._v(" "),t("li",[e._v("Usually preferred over Spearman")])])]),e._v(" "),t("li",[e._v("Chi-Squared Stat\n"),t("ul",[t("li",[e._v("Reveals how close expected values are to actual results")]),e._v(" "),t("li",[e._v("Used for categorical variables")])])]),e._v(" "),t("li",[e._v("Fisher Score\n"),t("ul",[t("li",[e._v("Measures the variance between expected value and observed value")]),e._v(" "),t("li",[e._v("Determines if a features are independent")])])]),e._v(" "),t("li",[e._v("Count-based Feature Selection")])]),e._v(" "),t("h2",{attrs:{id:"inferencing-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inferencing-notes"}},[e._v("#")]),e._v(" Inferencing Notes")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/concept-compute-target",target:"_blank",rel:"noopener noreferrer"}},[e._v("Main Docs"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("For inferencing in Prod you should use AKS (which supports GPU)")]),e._v(" "),t("li",[e._v("AML compute instances for deploying real-time services do not provide GPU and should be mainly used for Batch inferencing models.")]),e._v(" "),t("li",[e._v("Azure Container Instances are for testing/debugging and don't provide GPU (only low-scale CPU workloads).")])]),e._v(" "),t("h2",{attrs:{id:"authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/how-to-setup-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authentication Docs"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/how-to-consume-web-service?tabs=python",target:"_blank",rel:"noopener noreferrer"}},[e._v("Consuming a Web Service"),t("OutboundLink")],1)]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Auth Method")]),e._v(" "),t("th",[e._v("ACI")]),e._v(" "),t("th",[e._v("AKS")]),e._v(" "),t("th"),e._v(" "),t("th")])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Key")]),e._v(" "),t("td",[e._v("Disabled by default")]),e._v(" "),t("td",[e._v("Enabled by default")]),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("Token")]),e._v(" "),t("td",[e._v("Not available")]),e._v(" "),t("td",[e._v("Disabled by default")]),e._v(" "),t("td"),e._v(" "),t("td")])])]),e._v(" "),t("h2",{attrs:{id:"list-of-common-modules-in-aml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-common-modules-in-aml"}},[e._v("#")]),e._v(" List of Common Modules in AML")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/clean-missing-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clean Missing Data"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/select-columns-in-dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("Select Columns in Dataset"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/normalize-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("Normalize Data"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/partition-and-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("Partition and Sample Data"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"list-of-common-functions-methods-in-the-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-common-functions-methods-in-the-sdk"}},[e._v("#")]),e._v(" List of Common/Functions Methods in the SDK")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("Class")]),e._v(" "),t("th",[e._v("Example")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Workspace")]),e._v(" "),t("td",[t("code",[e._v("Workspace.from_config()")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Experiment")]),e._v(" "),t("td",[t("code",[e._v("Experiment(workspace=ws, name='name')")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Experiment")]),e._v(" "),t("td",[t("code",[e._v("experiment.start_logging()")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Datastore")]),e._v(" "),t("td",[t("code",[e._v("Datastore.register_azure_blob_container(...)")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Datastore")]),e._v(" "),t("td",[t("code",[e._v("Datastore.get(workspace,datastore_name)")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Dataset")]),e._v(" "),t("td",[t("code",[e._v("Dataset.Tabular.from_delimited(path=datastore_path)")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Dataset")]),e._v(" "),t("td",[t("code",[e._v("my_dataset.register(ws,name,description)")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Dataset")]),e._v(" "),t("td",[t("code",[e._v("Dataset.get_by_name(ws,name)")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.train.estimator")]),e._v(" "),t("td",[e._v("Estimator")]),e._v(" "),t("td",[t("code",[e._v("Estimator(source_directory,script_params,...)")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Run")]),e._v(" "),t("td",[t("code",[e._v("Run.get_context()")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Run")]),e._v(" "),t("td",[t("code",[e._v("run.log()")]),e._v(","),t("code",[e._v("run.log_list()")]),e._v(","),t("code",[e._v("run.log_row()")]),e._v(",etc..")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core")]),e._v(" "),t("td",[e._v("Run")]),e._v(" "),t("td",[t("code",[e._v("run.get_details()")]),e._v(", "),t("code",[e._v("run.get_metrics()")]),e._v(","),t("code",[e._v("run.get_file_names")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.widgets")]),e._v(" "),t("td",[e._v("RunDetails")]),e._v(" "),t("td",[t("code",[e._v("RunDetails(run).show()")])]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("azureml.core.webservice")]),e._v(" "),t("td",[e._v("AciWebservice")]),e._v(" "),t("td",[t("code",[e._v("aci_service.get_logs()")])]),e._v(" "),t("td")])])]),e._v(" "),t("h2",{attrs:{id:"other-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-commands"}},[e._v("#")]),e._v(" Other Commands")])])}),[],!1,null,null,null);t.default=n.exports}}]);