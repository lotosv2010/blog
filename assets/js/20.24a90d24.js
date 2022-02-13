(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{600:function(e,n,s){"use strict";s.r(n);var t=s(10),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"知识点一-数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点一-数据类型"}},[e._v("#")]),e._v(" 知识点一 数据类型")]),e._v(" "),s("h3",{attrs:{id:"基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[e._v("#")]),e._v(" 基本数据类型")]),e._v(" "),s("p",[e._v("基本数据类型按照值来操作的")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("number")])]),e._v(" "),s("li",[s("code",[e._v("string")])]),e._v(" "),s("li",[s("code",[e._v("boolean")])]),e._v(" "),s("li",[s("code",[e._v("null")])]),e._v(" "),s("li",[s("code",[e._v("undefined")])])]),e._v(" "),s("h3",{attrs:{id:"引用数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[e._v("#")]),e._v(" 引用数据类型")]),e._v(" "),s("p",[e._v("引用数据类型按照引用地址来操作的")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("object")])])]),e._v(" "),s("p",[e._v("对象 "),s("code",[e._v("{}")])]),e._v(" "),s("p",[e._v("数组 "),s("code",[e._v("[]")])]),e._v(" "),s("p",[e._v("正则 "),s("code",[e._v("/^$/")])]),e._v(" "),s("p",[e._v("日期 "),s("code",[e._v("Date")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("function")])])]),e._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),s("h2",{attrs:{id:"知识点二-数据类型检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点二-数据类型检测"}},[e._v("#")]),e._v(" 知识点二 数据类型检测")]),e._v(" "),s("h3",{attrs:{id:"typeof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[e._v("#")]),e._v(" "),s("code",[e._v("typeof")])]),e._v(" "),s("ol",[s("li",[e._v("检测数据类型的运算符")]),e._v(" "),s("li",[e._v("使用 "),s("code",[e._v("typeof")]),e._v(" 检测数据类型，首先返回的都是一个字符串，其次字符串中包含了对应的数据类型，例如： "),s("code",[e._v('"number"')]),e._v(" 、 "),s("code",[e._v('"string"')]),e._v(" 、 "),s("code",[e._v('"boolean"')]),e._v(" 、 "),s("code",[e._v('"undefined"')]),e._v(" 、 "),s("code",[e._v('"function"')]),e._v(" 、 "),s("code",[e._v('"object"')])]),e._v(" "),s("li",[s("strong",[e._v("局限性")]),e._v("：")])]),e._v(" "),s("ul",[s("li",[s("ul",[s("li",[s("code",[e._v("typeof null")]),e._v(" 为 "),s("code",[e._v('"object"')])]),e._v(" "),s("li",[e._v("不能具体的细分是数组还是正则，还是对象中其他的值，因为使用 "),s("code",[e._v("typeof")]),e._v(" 检测数据类型，对于对象数据类型中的值，最后返回的结果都是 "),s("code",[e._v('"object"')])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 面试题\nconsole.log(typeof typeof typeof function() {}) // string\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[e._v("#")]),e._v(" "),s("code",[e._v("instanceof")])]),e._v(" "),s("ol",[s("li",[e._v("检测某一个实例是否属于某个类")]),e._v(" "),s("li",[s("strong",[e._v("局限性")]),e._v("：")])]),e._v(" "),s("ul",[s("li",[s("ul",[s("li",[s("strong",[e._v("不能用来检测出来字面量方式创建出来的基本数据类型的值")]),e._v("：对于基本数据类型来说，字面量方式创建处理的结果和实例方式创建出来的结果有一定区别的，从严格意义上来讲，只有实例创建出来的结果才是标准的对象数据类型值，也是标准的 "),s("code",[e._v("Number")]),e._v(" 这个类的一个实例；对于字面量方式创建出来的结果是基本的数据类型值，不是严谨的实例，但是由于js的松散特点，导致了可以使用 "),s("code",[e._v("Number.prototype")]),e._v(" 上提供的方法，例如： "),s("code",[e._v("new Number(1) instanceof Number")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" ， "),s("code",[e._v("1 instanceof Number")]),e._v(" 为 "),s("code",[e._v("false")])]),e._v(" "),s("li",[s("strong",[e._v("只要在当前实例的原型链上，用其检测出来的结果都是")]),e._v(" "),s("strong",[s("code",[e._v("true")])]),e._v(" ，如下案例：")])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function fn() {}\nconsole.log(fn instanceof Function)  // true\nconsole.log(fn instanceof Object) // true\nconsole.log(fn instanceof Array) // false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[s("ul",[s("li",[s("strong",[e._v("在类的原型继承中，最后检测出来的结果未必准确")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function Fn() {}\nvar ary = new Array;\n// 原型继承：让子类的原型等于父类的一个实例\nFn.prototype = ary\nvar f = new Fn\n// f--\x3eFn.prototype--\x3eArray.prototype--\x3eObject.prototype\nconsole.log(f instanceof Array) // true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[s("strong",[e._v("实例：")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/738210/1606552453320-81e964d0-e41e-4891-bb80-20b75a918ab2.png",alt:"image.png"}})]),e._v(" "),s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[e._v("#")]),e._v(" "),s("code",[e._v("constructor")])]),e._v(" "),s("ol",[s("li",[e._v("构造函数，作用和 "),s("code",[e._v("instanceof")]),e._v(" 类似")]),e._v(" "),s("li",[s("code",[e._v("constructor")]),e._v(" 可以处理基本数据类型的检测")]),e._v(" "),s("li",[s("code",[e._v("constructor")]),e._v(" 检测 "),s("code",[e._v("Object")]),e._v(" 和 "),s("code",[e._v("instanceof")]),e._v(" 不一样，一般情况下是检测不了的")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var ary = []\nconsole.log(ary.constructor === Array) // true\n\n// 可以处理基本数据类型的检测\nvar num = 1\nconsole.log(num.constructor === Number) // true\n\n// constructor 检测 Object 和 instanceof 不一样，一般情况下是检测不了的\nvar reg = /^\\d+$/\nconsole.log(reg.constructor === RegExp) // true\nconsole.log(reg.constructor === Object) // true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("ol",[s("li",[s("strong",[e._v("局限性")]),e._v("：")])]),e._v(" "),s("ul",[s("li",[s("ul",[s("li",[e._v("我们可以把类的原型进行重写，在重新的过程中很有可能出现之前的 "),s("code",[e._v("constructor")]),e._v(" 给覆盖了，这样检测出来的结果就是不准确的")])])])]),e._v(" "),s("ol",[s("li",[e._v("对于特殊的数据类型 "),s("code",[e._v("null")]),e._v(" 和 "),s("code",[e._v("undefined")]),e._v(" ，他们的所属类是 "),s("code",[e._v("Null")]),e._v(" 和 "),s("code",[e._v("Undefined")]),e._v(" ，但是浏览器把这个两个类保护起来了，不允许我们在外面访问使用")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function Fn() {}\nvar ary = new Array;\n// 原型继承：让子类的原型等于父类的一个实例\nFn.prototype = ary\nvar f = new Fn\n// f--\x3eFn.prototype--\x3eArray.prototype--\x3eObject.prototype\nconsole.log(f.constructor === Fn) // false\nconsole.log(f.constructor === Array) // true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h3",{attrs:{id:"object-prototype-tostring-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-prototype-tostring-call"}},[e._v("#")]),e._v(" "),s("code",[e._v("Object.prototype.toString.call()")])]),e._v(" "),s("ol",[s("li",[e._v("最准确最常用")]),e._v(" "),s("li",[e._v("首先获取 "),s("code",[e._v("Object")]),e._v(" 原型上的 "),s("code",[e._v("toString")]),e._v(" 方法，让方法执行，并且改变方法中的 "),s("code",[e._v("this")]),e._v(" 关键字的指向")]),e._v(" "),s("li",[e._v("它的作用是返回当前方法执行主体(方法中 "),s("code",[e._v("this")]),e._v(")所属类的详细信息")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var obj = { name: 'test' }\n// toString 中的 this 是 obj，返回的是 obj 所属类的信息 [object Object]\n// [object Object] 中，第一个 object 代表当前实例的对象数据类型的(这个是固定死的)，第二个 Object 代表 obj 所属的类是 Object\nconsole.log(obj.toString()) // [object Object]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"知识点三-tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点三-tostring"}},[e._v("#")]),e._v(" 知识点三 "),s("code",[e._v("toString")])]),e._v(" "),s("ol",[s("li",[s("code",[e._v("toString")]),e._v(" 的理解：")])]),e._v(" "),s("ul",[s("li",[s("ul",[s("li",[e._v("此方法应该是转换为字符串，但是某些 "),s("code",[e._v("toString")]),e._v(" 方法不仅仅是转换为字符串")]),e._v(" "),s("li",[e._v("对于 "),s("code",[e._v("Number")]),e._v(" 、 "),s("code",[e._v("String")]),e._v(" 、 "),s("code",[e._v("Boolean")]),e._v(" 、 "),s("code",[e._v("Array")]),e._v(" 、 "),s("code",[e._v("RegExp")]),e._v(" 、 "),s("code",[e._v("Date")]),e._v(" 、 "),s("code",[e._v("Function")]),e._v(" 原型上的 "),s("code",[e._v("toString")]),e._v(" 方法都是把当前的数据类型转换成字符串的类型(它们的作用仅仅是用来转换为字符串的)")]),e._v(" "),s("li",[s("code",[e._v("Object.prototype.toString")]),e._v(" 并不是用来转换为字符串的，它的作用是返回当前方法执行主体(方法中 "),s("code",[e._v("this")]),e._v(")所属类的详细信息")])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 转换为字符串，调用自身原型上的toString\nconsole.log((1).toString()) // '1'\nconsole.log(('abc').toString()) // 'abc'\nconsole.log((true).toString()) // 'true'\nconsole.log([12, 23, 34].toString()) // '12,23,34'\nconsole.log(/^-?(\\d|[1-9]\\d+)(\\.\\d+)?$/.toString()) // '/^-?(\\d|[1-9]\\d+)(\\.\\d+)?$/'\nconsole.log(new Date().toString()) // 'Wed Sep 02 2020 11:26:23 GMT+0800 (China Standard Time)'\nconsole.log((function() { return 'test' }).toString()) // 'function() { return 'test' }'\n\n// 报错\nconsole.log((null).toString()) // Cannot read property 'toString' of null\nconsole.log((undefined).toString()) // Cannot read property 'toString' of undefined\n\n// 调用Object原型上的toString\nconsole.log(Math.toString()) // '[object Math]'\nconsole.log({name: 'test'}.toString()) // '[object Object]'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("h2",{attrs:{id:"知识点四-null-和-undefined-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点四-null-和-undefined-的区别"}},[e._v("#")]),e._v(" 知识点四 "),s("code",[e._v("null")]),e._v(" 和 "),s("code",[e._v("undefined")]),e._v(" 的区别")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("null")]),e._v(" ：空对象指针，没有具体的值，一般都是我们手动设置初始化的值为 "),s("code",[e._v("null")]),e._v(" ，后期的话会给其赋值")])]),e._v(" "),s("ul",[s("li",[s("ul",[s("li",[e._v("我们设定一个变量，后期需要使用，那么前期我们设置的默认值为 "),s("code",[e._v("null")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var timer = null\nfunction move() {\n  window.clearTimeout(timer)\n  // code...\n  timer = window.setTimeout(move, 1000)\n}\nmove()\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("ul",[s("li",[s("ul",[s("li",[e._v("在 "),s("code",[e._v("js")]),e._v(" 内存释放中，我们想释放一个堆内存，就让其值变为 "),s("code",[e._v("null")]),e._v(" 即可")])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var obj = { name: 'test' }\nobj = null\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[s("ul",[s("li",[e._v("我们通过 "),s("code",[e._v("DOM")]),e._v(" 中提供的属性和方法获取页面中的某一个元素标签，如果当前这个标签不存在，获取的结果是    "),s("code",[e._v("null")]),e._v(" ，而不是 "),s("code",[e._v("undefined")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("document.getElementById('box') // 如果页面中没有 #box，获取的结果就是null\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("ul",[s("li",[e._v("在正则的 "),s("code",[e._v("exec")]),e._v(" /字符串的 "),s("code",[e._v("match")]),e._v(" 捕获中，如果当前捕获的字符串和正则不匹配的话，捕获的结果为 "),s("code",[e._v("null")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var reg = /\\d+?/g\nvar str = 'hello world'\nreg.exec(str)\nstr.match(reg)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ol",[s("li",[s("code",[e._v("undefined")]),e._v(" ：为定义，连东西都没有，一般都是浏览器默认的值")])]),e._v(" "),s("ul",[s("li",[s("ul",[s("li",[e._v("在 "),s("code",[e._v("js")]),e._v(" 预解释的时候，只声明未定义，默认的只是 "),s("code",[e._v("undefined")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("console.log(num)\nvar num = 13\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[s("ul",[s("li",[e._v("在一个函数中，如果没有写 "),s("code",[e._v("return")]),e._v(" ，或者 "),s("code",[e._v("return")]),e._v(" 后啥都没返回，默认的返回值是 "),s("code",[e._v("undefined")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function fn () {}\nvar res = fn()\nconsole.log(res) // undefined\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[s("ul",[s("li",[e._v("函数中设置了形参，但是执行的时候如果没有传递参数值，那么形参默认值是 "),s("code",[e._v("undefined")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function fn(a, b, c) {\n  console.log(a) // 10\n  console.log(b) // 20\n  console.log(c) // undefined\n}\nfn(10, 20)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("ul",[s("li",[s("ul",[s("li",[e._v("获取一个对象的属性对应的属性值，如果当前的这个属性名不存在的话，属性默认值是 "),s("code",[e._v("undefined")])])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var obj = {}\nconsole.log(obj.name) // undefined\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);