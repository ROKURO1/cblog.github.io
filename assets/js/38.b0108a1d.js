(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{524:function(t,n,e){"use strict";e.r(n);var a=e(4),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"手撕代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手撕代码"}},[t._v("#")]),t._v(" 手撕代码")]),t._v(" "),e("h2",{attrs:{id:"call-apply-bind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#call-apply-bind"}},[t._v("#")]),t._v(" call/apply/bind")]),t._v(" "),e("h3",{attrs:{id:"call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[t._v("#")]),t._v(" call")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Function.prototype.callCb = function (context){\n    context = context || window;\n    content.fn = this\n    let arg = Array.from(arguments).shift()\n    let result = content.fn(...arg)\n    delete content.fn\n    return result\n}\n\n")])])]),e("h3",{attrs:{id:"apply"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[t._v("#")]),t._v(" apply")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Function.prototype.applyCb = function (context){\n    context = context || window;\n    content.fn = this\n    let arg = Array.from(arguments).shift()\n    let result\n    if(arg){\n        result = context.fn(...arg)\n    }else {\n        result = context.fn()\n    }\n    delete content.fn\n    return result\n}\n\n")])])]),e("h3",{attrs:{id:"bind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[t._v("#")]),t._v(" bind")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Function.prototype.mybind = function(context){\n    context = context || window;\n    context.fn = this;\n    let outArg = Array.from(arguments).shift()\n    return function (){\n        let inArg = Array.from(arguments)\n        context.fn.apply(outArg.concat(inArg))\n    }\n}\n")])])]),e("h2",{attrs:{id:"防抖-节流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防抖-节流"}},[t._v("#")]),t._v(" 防抖/节流")]),t._v(" "),e("h3",{attrs:{id:"防抖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防抖"}},[t._v("#")]),t._v(" 防抖")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function debounce(fn, delay) {\n    let timeout = null\n    return function () {\n        let arg = arguments\n        let context = this \n        if (timeout) {\n            clearTimeout(timeout)\n        }\n        timeout = setTimeout(() => {\n            fn.apply(context, arg)\n        }, delay)\n    }\n}\n")])])]),e("h3",{attrs:{id:"节流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节流"}},[t._v("#")]),t._v(" 节流")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function throttle(fn,delay){\n    let lastTime = null\n    return function (){\n        let context = this\n        let arg = arguments\n        let now = new Date()\n        if(now - lastTime>=delay){\n            fn.apply(context,arg)\n            lastTime = now\n        }\n    }\n}\n")])])]),e("h2",{attrs:{id:"实现页面滚动到底部刷新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现页面滚动到底部刷新"}},[t._v("#")]),t._v(" 实现页面滚动到底部刷新")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\nconst el = document.querySelector('.content');\nconst clientHeight = el.clientHeight;\nel.onscroll = () => {\n    const scrollTop = el.scrollTop; // 滚动的距离\n    const scrollHeight = el.scrollHeight; // 总体的高度（包括不可见的\n    if ((clientHeight + scrollTop) >= scrollHeight) { // 滚动的距离 + 浏览器视口高度 > 总体的高度\n        //每次滚动到底部size+10\n        that.size+=10;\n    }\n}\n\n")])])]),e("p",[t._v("每个HTML元素都具有")]),t._v(" "),e("ul",[e("li",[t._v("clientHeight 包括padding但不包括border、水平滚动条、margin的元素的高度")]),t._v(" "),e("li",[t._v("offsetHeight 包括padding、border、水平滚动条")]),t._v(" "),e("li",[t._v("offsetTop")]),t._v(" "),e("li",[t._v("scrollTop 在有滚动条时，滚动条向下滚动的距离也就是元素顶部被遮住部分的高度")]),t._v(" "),e("li",[t._v("scrollHeight 代表包括当前不可见部分的元素的高度。而可见部分的高度其实就是clientHeight，也就是scrollHeight>=clientHeight恒成立")])]),t._v(" "),e("h2",{attrs:{id:"深度优先遍历dom节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度优先遍历dom节点"}},[t._v("#")]),t._v(" 深度优先遍历DOM节点")]),t._v(" "),e("p",[t._v("let root = document.documentElement\ntraverseNodes(root);")]),t._v(" "),e("p",[t._v('function display(node){\ninfo+="第"+(++num)+"个元素是:"+node.nodeName+"\\n";')]),t._v(" "),e("p",[t._v("}"),e("br"),t._v("\nfunction traverseNodes(node){\n//判断是否是元素节点"),e("br"),t._v("\nif(node.nodeType == 1){\ndisplay(node);"),e("br"),t._v("\n}\nif(node.hasChildNodes){\nlet children = node.childNodes;\nchildren.forEach(x=>traverseNodes(x))\n}")]),t._v(" "),e("h2",{attrs:{id:"关于数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于数组"}},[t._v("#")]),t._v(" 关于数组")]),t._v(" "),e("h3",{attrs:{id:"数组乱序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组乱序"}},[t._v("#")]),t._v(" 数组乱序")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function randomCb(arr){\n    let newArr = []\n    while (arr.length){\n        let index = Math.floor(Math.random()*arr.length) //其实是使索引值乱序\n        newArr.push(arr[index])\n        arr.splice(index,1) //删掉arr中的\n    }\n    return newArr\n}\n")])])]),e("h3",{attrs:{id:"数组去重"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组去重"}},[t._v("#")]),t._v(" 数组去重")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//方法1：普通版  \nfunction arrayUnique(arr){\n  let res = [];\n  for(let i=0,len=arr.length;i< len;i++){\n      let item = arr[i];\n      (res.indexOf(item) === -1) && res.push(item);// res中没有该数才push 去重\n  }\n  return res;\n}\n\n//方法2：使用 Set 进行数组去重\n// 使用 Set 完成 数组去重,只能去除字符串和数字的重复，不能去除对象的重复  \nfunction uniqueSet(array) {\n  return Array.from(new Set(array));\n}:\nfunction uniqueSet2(array) {\n  return [...new Set(array)];\n}\n\n// 方法3：使用 filter 的版本\nfunction unique(a) {\n  var res = a.filter(function(item, index, array) {\n    return array.indexOf(item) === index;// 每次都是从左边开始做找\n  });\n  return res;\n}\n")])])]),e("h2",{attrs:{id:"new"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" New")])])}),[],!1,null,null,null);n.default=r.exports}}]);