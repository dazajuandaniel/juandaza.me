(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{372:function(t,s,a){"use strict";a.r(s);var n=a(42),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pyspark-snippets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyspark-snippets"}},[t._v("#")]),t._v(" PySpark Snippets")]),t._v(" "),a("h3",{attrs:{id:"basic-code-snippets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-code-snippets"}},[t._v("#")]),t._v(" Basic Code Snippets")]),t._v(" "),a("p",[t._v("Count distincts")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'col_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("distinct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Fill NA")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillna"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'col'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fill_value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Pivot DataFrame")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groupby"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"column"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pivot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"column2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("agg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"column3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"window-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-function"}},[t._v("#")]),t._v(" Window Function")]),t._v(" "),a("p",[t._v("Useful "),a("a",{attrs:{href:"https://stackoverflow.com/questions/56287224/rangebetween-with-negative-values-for-previous-rows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stackoverflow Question"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partitionBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orderBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rowsBetween"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unboundPreceding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'col_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("over"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"forward-filling-in-pyspark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-filling-in-pyspark"}},[t._v("#")]),t._v(" Forward Filling in PySpark")]),t._v(" "),a("p",[t._v("Taken from "),a("a",{attrs:{href:"https://johnpaton.net/posts/forward-fill-spark/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Window\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" last\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# define the window")]),t._v("\nwindow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partitionBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'location'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\\\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orderBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\\\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rowsBetween"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxsize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# define the forward-filled column")]),t._v("\nfilled_column "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spark_df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'temperature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ignorenulls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("over"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# do the fill")]),t._v("\nspark_df_filled "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark_df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'temp_filled_spark'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filled_column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# show off our glorious achievements")]),t._v("\nspark_df_filled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orderBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'location'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])]),a("h3",{attrs:{id:"applying-a-mapping-from-a-dictionary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applying-a-mapping-from-a-dictionary"}},[t._v("#")]),t._v(" Applying a mapping from a dictionary")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" itertools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" chain\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\nmapping_expr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mapping_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapping_expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"column"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"rolling-window-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rolling-window-structure"}},[t._v("#")]),t._v(" Rolling Window Structure")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Window\n\nwindowSpec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\\n  Window \\\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partitionBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \\\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orderBy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);