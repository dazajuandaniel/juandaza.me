(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{328:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"entities-on-databricks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entities-on-databricks"}},[a._v("#")]),a._v(" Entities on Databricks")]),a._v(" "),s("p",[a._v("Brief overview of different entities in Databricks such as Tables, DBs, and more. Topics to discuss:")]),a._v(" "),s("ul",[s("li",[a._v("Create & Explore databases and tables on Databricks")]),a._v(" "),s("li",[a._v("Views & CTEs on Databricks")])]),a._v(" "),s("h2",{attrs:{id:"databases-tables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#databases-tables"}},[a._v("#")]),a._v(" Databases & Tables")]),a._v(" "),s("p",[s("strong",[a._v("Create a Database")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("db_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("db_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" LOCATION "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("location"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("When creating a database in Databricks, if no location is provided, it's created in "),s("code",[a._v("dbfs:/users/hive/warehouse/")])]),a._v(" "),s("p",[a._v("It's best practice to include a location when creating a database:")]),a._v(" "),s("ul",[s("li",[a._v("Avoids storing the data on the default location and rather use a mounted location")])]),a._v(" "),s("p",[a._v("To get metadata details for the Database, run the below command")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DESCRIBE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXTENDED")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("db_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[s("strong",[a._v("Create a (managed) Table within the Database")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("db_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("OR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("REPLACE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("schema")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DESCRIBE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXTENDED")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[s("strong",[a._v("Create External/Unmanaged Tables")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("OR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("REPLACE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" LOCATION "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("location"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("source_table"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Managed vs Unmanaged (External) Tables")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Managed Table:")]),a._v(" "),s("ul",[s("li",[a._v("Created without the "),s("code",[a._v("LOCATION")]),a._v(" keyword")]),a._v(" "),s("li",[a._v("When dropped, the files are also removed (metadata + data are removed)")])])]),a._v(" "),s("li",[s("strong",[a._v("Unmanaged Table:")]),a._v(" "),s("ul",[s("li",[a._v("Created with the "),s("code",[a._v("LOCATION")]),a._v(" keyword")]),a._v(" "),s("li",[a._v("When dropped, the files are NOT removed. Only metadata is removed.")])])])]),a._v(" "),s("p",[s("strong",[a._v("Create Temporary Tables/Tables from Files")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("OR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("REPLACE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEMPORARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tb_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USING")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("format"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" OPTIONS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n")])])]),s("h2",{attrs:{id:"views-ctes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views-ctes"}},[a._v("#")]),a._v(" Views & CTEs")]),a._v(" "),s("p",[s("strong",[a._v("Create Views")])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("OR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("REPLACE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VIEW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("view_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("select_from_statement "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Views don't create underlying files. The logic is registered in the Metastore (definition of the instruction rather than data itself).")]),a._v(" "),s("p",[a._v("Temporary views/tables are lost when the notebook is deattached from the cluster (they only live within the existing Spark Session).")]),a._v(" "),s("p",[a._v("Create a "),s("code",[a._v("global")]),a._v(" view")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("OR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("REPLACE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GLOBAL")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VIEW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("view_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("select_from_statement "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("It's not used often, but it's possible to create. "),s("code",[a._v("Global")]),a._v(" are registered as long as the "),s("strong",[a._v("Cluster")]),a._v(" lives.")]),a._v(" "),s("p",[s("strong",[a._v("Common Table Expressions (CTES)")]),a._v("\nInline statements - they live in the execution of the cell.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    select_from_statement\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[s("code",[a._v("CTEs")]),a._v(" can be used in conjuction with "),s("code",[a._v("CREATE VIEW")]),a._v(" statements")])])}),[],!1,null,null,null);s.default=r.exports}}]);