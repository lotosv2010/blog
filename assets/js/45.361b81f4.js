(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{625:function(s,t,n){"use strict";n.r(t);var a=n(10),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[s._v("#")]),s._v(" 1. 概述")]),s._v(" "),n("p",[s._v("​\t在—— "),n("a",{attrs:{href:"https://lotosv2010.github.io/view/vue/2018/10030800.html",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[s._v("vue源码分析(三) 整体架构")]),n("OutboundLink")],1),s._v(" 中我们已经分析过了Vue源码的整理架构流程，分析Vue构造函数时，在全局AIP初始化的地方我们没有分析，下面我们具体看一下 "),n("code",[s._v("initGlobalAPI (Vue)")]),s._v(" 源码。")]),s._v(" "),n("h2",{attrs:{id:"_2-initglobalapi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-initglobalapi"}},[s._v("#")]),s._v(" 2. initGlobalAPI")]),s._v(" "),n("p",[s._v("​\t源码目录: "),n("code",[s._v("src/core/global-api/index.js")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*...*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("initGlobalAPI")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" GlobalAPI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// config")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" configDef "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  configDef"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue.config 获取 config 全局变量")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    configDef"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("set")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置Vue.config时直接报错，即不允许设置Vue.config值")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("warn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Do not replace the Vue.config object, set individual fields instead.'")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过ES5的defineProperty设置Vue的config的访问器属性")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取Vue.config时会执行configDef.get函数")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置Vue.config时会执行configDef.set函数")]),s._v("\n  Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'config'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" configDef"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*...*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("​\t"),n("code",[s._v("initGlobalAPI")]),s._v(" 主要是对全局 "),n("code",[s._v("API")]),s._v(" 的初始化，这里我们摘出这章主要分析的代码，其他的我们会在后面章节中，逐个分析。")]),s._v(" "),n("p",[s._v("​\t这段代码主要是把全局配置绑定到 "),n("code",[s._v("Vue")]),s._v(" 构造函数上，属于静态属性。执行这段代码主要做了一下几件事：")]),s._v(" "),n("p",[s._v("​\t\t(1)、定义一个 "),n("code",[s._v("configDef")]),s._v("。")]),s._v(" "),n("p",[s._v("​\t\t(2)、设置 "),n("code",[s._v("configDef")]),s._v(" 的 "),n("code",[s._v("get")]),s._v(" 属性，获取全局配置。")]),s._v(" "),n("p",[s._v("​\t\t(3)、在开发环境，设置 "),n("code",[s._v("configDef")]),s._v(" 的 "),n("code",[s._v("set")]),s._v(" 属性，当用户手动修改配置时抱警告。")]),s._v(" "),n("p",[s._v("​\t\t(4)、通过 "),n("code",[s._v("ES5")]),s._v(" 的 "),n("code",[s._v("defineProperty")]),s._v(" 设置 "),n("code",[s._v("Vue")]),s._v(" 的 "),n("code",[s._v("config")]),s._v(" 的访问器属性。")]),s._v(" "),n("p",[s._v("​\t分析源码我们可以知道，"),n("code",[s._v("config")]),s._v(" 属性是只读的，不允许用户覆盖，下面我们就对 "),n("code",[s._v("config")]),s._v(" 进行详细分析。")]),s._v(" "),n("h2",{attrs:{id:"_3-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-config"}},[s._v("#")]),s._v(" 3. config")]),s._v(" "),n("p",[s._v("​\t"),n("code",[s._v("Vue.config")]),s._v(" 是一个全局对象，包含 "),n("code",[s._v("Vue")]),s._v(" 的全局配置,可以在启动应用之前修改 "),n("code",[s._v("config")]),s._v(" 里面的属性值。")]),s._v(" "),n("p",[s._v("​\t源码目录: "),n("code",[s._v("src/core/config.js")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Option merge strategies (used in core/util/options)\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $flow-disable-line")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义合并策略的选项")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optionMergeStrategies")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Whether to suppress warnings.\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否关闭警告，默认为false，如果设置为true，那么将不会有报错信息")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("silent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Show production mode tip message on boot?\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发模式下是否在控制台显示生产提示，即一条 `You are running Vue in development mode` 提示，设置为false，即可关闭该提示")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("productionTip")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Whether to enable devtools\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否允许 `Vue-devtools` (Vue调试工具)检查代码，浏览器环境下为true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("devtools")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Whether to record perf\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启性能追踪，只是在开发默认和支持 `performance.mark API` 的浏览器上才会有效")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("performance")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Error handler for watcher errors\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定组件的渲染和观察期间未捕获错误的处理函数，这个处理函数被调用时，可获取错误信息和 Vue 实例")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("errorHandler")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Warn handler for watcher warns\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue 的运行时警告赋予一个自定义处理函数，注意这只会在开发环境下生效，在生产环境下它会被忽略")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("warnHandler")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Ignore certain custom elements\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 忽略某些自定义元素")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("ignoredElements")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Custom user key aliases for v-on\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $flow-disable-line")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给 v-on 自定义健位别名")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("keyCodes")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Check if a tag is reserved so that it cannot be registered as a\n   * component. This is platform-dependent and may be overwritten.\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保留标签，如有，则这些标签不能注册为组件")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("isReservedTag")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Check if an attribute is reserved so that it cannot be used as a component\n   * prop. This is platform-dependent and may be overwritten.\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保留属性")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("isReservedAttr")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Check if a tag is an unknown element.\n   * Platform-dependent.\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 未知标签元素")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("isUnknownElement")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Get the namespace of an element\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取元素的命名空间")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("getTagNamespace")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" noop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Parse the real tag name for the specific platform.\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析特定平台的真实标签名称")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parsePlatformTagName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" identity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Check if an attribute must be bound using property, e.g. value\n   * Platform-dependent.\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查属性")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mustUseProp")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Perform updates asynchronously. Intended to be used by Vue Test Utils\n   * This will significantly reduce performance if set to false.\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 异步执行更新")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("async")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n   * Exposed for legacy reasons\n   */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("_lifecycleHooks")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIFECYCLE_HOOKS")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br")])]),n("p",[s._v("​\t对于 "),n("code",[s._v("config")]),s._v(" 配置所有的属性值在上面代码的注释中已经详细分析了，这里就不做重复说明。")]),s._v(" "),n("p",[s._v("​")])])}),[],!1,null,null,null);t.default=e.exports}}]);