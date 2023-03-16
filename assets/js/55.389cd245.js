(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{330:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"incremental-data-autoloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incremental-data-autoloader"}},[t._v("#")]),t._v(" Incremental Data & Autoloader")]),t._v(" "),a("p",[t._v("Important since allows to deal solely with only new data.\nAutoloader is the recommended approach by Databricks")]),t._v(" "),a("ul",[a("li",[t._v("Execute Autoloader code")]),t._v(" "),a("li",[t._v("Describe what happens when a new file arrives")]),t._v(" "),a("li",[t._v("Query a table fed by a streaming Auto Loader Query")])]),t._v(" "),a("h3",{attrs:{id:"autoloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoloader"}},[t._v("#")]),t._v(" Autoloader")]),t._v(" "),a("p",[t._v("Minimum set of arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Definition")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("data_source")])]),t._v(" "),a("td",[t._v("Directory of the source data")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("source_format")])]),t._v(" "),a("td",[t._v("Format of the source data")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("table_name")])]),t._v(" "),a("td",[t._v("Name of the target table")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("checkpoint_directory")])]),t._v(" "),a("td",[t._v("Location for storing metadata about the stream")])])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myfunct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkpoint_directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    query "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readStream\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cloudFiles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cloudFiles.format"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cloudFiles.schemaLocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkpoint_directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writeStream\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"checkpointLocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkpoint_directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mergeSchema"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("once"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("awaitTermination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Optional to block execution of next cells")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" query\n\nquery "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myfunct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_source"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my/path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("source_format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("checkpoint_directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'other/path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("table_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"incremental-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incremental-data"}},[t._v("#")]),t._v(" Incremental Data")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("data stream")]),t._v(" describes any data source that grows over time:")]),t._v(" "),a("ul",[a("li",[t._v("A new JSON log file landing in S3")]),t._v(" "),a("li",[t._v("Updates to a database captured in a CDC feed")]),t._v(" "),a("li",[t._v("Events queued in a pub/sub feed")]),t._v(" "),a("li",[t._v("A CSV file of sales closed the previous day")])]),t._v(" "),a("p",[a("strong",[t._v("Basic Concepts")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("input_table")]),t._v(" -> Streaming read against")]),t._v(" "),a("li",[a("code",[t._v("query")]),t._v(" -> Defined againts the input table.")]),t._v(" "),a("li",[a("code",[t._v("results_table")]),t._v(" -> Contains the incremental state information of the stream")]),t._v(" "),a("li",[a("code",[t._v("output")]),t._v(" -> will persist updates to the results by writing to an external "),a("code",[t._v("sink")]),t._v(". A sink is a durable system")]),t._v(" "),a("li",[a("code",[t._v("trigger interval")]),t._v(" -> New rows are appended to the input table for each interval (similar to micro batches)")])]),t._v(" "),a("p",[t._v("Structured Streaming ensures end-to-end exactly-once fault-tolerance through checkpointing and "),a("code",[t._v("write ahead logs")]),t._v("\n* Streaming sinks are designed to be idempotent")]),t._v(" "),a("p",[a("strong",[t._v("Reading a Stream")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bronze'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createOrReplaceTempView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'streaming_tmp_vw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Unsupported Operations")]),t._v("\nSome operations are not supported, it doesn't make sense to sort an infite growing table")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ORDER BY")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);