(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{514:function(t,a,e){"use strict";e.r(a);var n=e(4),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),e("h2",{attrs:{id:"flex-弹性布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-弹性布局"}},[t._v("#")]),t._v(" Flex 弹性布局")]),t._v(" "),e("h3",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("容器的属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("flex-direction")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("主轴的方向")])]),t._v(" "),e("tr",[e("td",[t._v("flex-wrap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("换行的方式")])]),t._v(" "),e("tr",[e("td",[t._v("flex-flow")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("主轴的方向 换行的方式")])]),t._v(" "),e("tr",[e("td",[t._v("justify-content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("主轴上的对齐方式")])]),t._v(" "),e("tr",[e("td",[t._v("align-items")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("交叉轴上的对齐方式")])]),t._v(" "),e("tr",[e("td",[t._v("align-content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("多根轴线的对齐方式")])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("item的属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("order")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("项目的排列顺序。数值越小，排列越靠前，默认为0")])]),t._v(" "),e("tr",[e("td",[t._v("flex-grow")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("放大比例，默认0")])]),t._v(" "),e("tr",[e("td",[t._v("flex-shrink")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("缩小比例，默认1")])]),t._v(" "),e("tr",[e("td",[t._v("flex-basis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("项目占据的主轴空间，默认值为auto（项目本来大小）")])]),t._v(" "),e("tr",[e("td",[t._v("flex")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("flex-grow,flex-shrink,flex-basis简写"),e("br"),t._v("默认0 1 auto"),e("br"),t._v("auto (1 1 auto) "),e("br"),t._v("none (0 0 auto)"),e("br"),t._v("1 (1 1 0)")])]),t._v(" "),e("tr",[e("td",[t._v("align-self")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单独item的对齐方式，覆盖align-items属性")])])])]),t._v(" "),e("h2",{attrs:{id:"grid-网格布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grid-网格布局"}},[t._v("#")]),t._v(" Grid 网格布局")]),t._v(" "),e("h3",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),e("ol",[e("li",[t._v("容器和项目")]),t._v(" "),e("li",[t._v("行和列")]),t._v(" "),e("li",[t._v('单元格 行和列的交叉区域，称为"单元格"（cell）。')]),t._v(" "),e("li",[t._v('网格线\n划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。'),e("br"),t._v("\n正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线，比如三行就有四根水平网格线。")])]),t._v(" "),e("h3",{attrs:{id:"属性-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-2"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),e("h4",{attrs:{id:"容器属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器属性"}},[t._v("#")]),t._v(" 容器属性")]),t._v(" "),e("ol",[e("li",[t._v("display: grid 指定一个容器采用网格布局 inline-grid; 行内")]),t._v(" "),e("li",[t._v("grid-template-columns 属性，\ngrid-template-rows 属性\n容器指定了网格布局以后，接着就要划分行和列。grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px 100px;\n}\n")])])]),e("p",[t._v("上面代码指定了一个三行三列的网格，列宽和行高都是100px。"),e("br"),t._v("\n（1）repeat()"),e("br"),t._v("\n有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数，简化重复的值。上面的代码用repeat()改写如下。"),e("br")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".container {\n  display: grid;\n  grid-template-columns: repeat(3, 33.33%);\n  grid-template-rows: repeat(3, 33.33%);\n}\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("grid-row-gap 行间距，grid-column-gap 列间距，grid-gap 属性")]),t._v(" "),e("li",[t._v("grid-template-areas 属性"),e("br"),t._v('\n网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。')]),t._v(" "),e("li",[t._v('grid-auto-flow\n划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"')]),t._v(" "),e("li",[t._v("justify-items 属性，"),e("strong",[t._v("每个")]),t._v("单元格内容的水平位置（左中右）\nalign-items 属性，单元格内容的垂直位置（上中下）\nplace-items 属性 justify-items&align-items")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".container {\n  justify-items: start | end | center | stretch;\n  align-items: start | end | center | stretch;\n}//拉伸，占满单元格的整个宽度（默认值）。\n")])])]),e("ol",{attrs:{start:"7"}},[e("li")]),t._v(" "),e("p",[t._v("justify-content 属性，"),e("strong",[t._v("整个")]),t._v("内容区域在容器里面的水平位置（左中右)\nalign-content 属性，\nplace-content 属性\n8.\ngrid-auto-columns 属性，\ngrid-auto-rows 属性\n有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目\n9. grid-template 属性，\ngrid 属性\ngrid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。")]),t._v(" "),e("p",[t._v("grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。")]),t._v(" "),e("h2",{attrs:{id:"px-em-rem-vhvw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px-em-rem-vhvw"}},[t._v("#")]),t._v(" px em rem vhvw")]),t._v(" "),e("ul",[e("li",[t._v("px 相对于显示器屏幕分辨率")]),t._v(" "),e("li",[t._v("em 相对于父元素字体尺寸")]),t._v(" "),e("li",[t._v("rem 相对于HTML根元素字体大小")]),t._v(" "),e("li",[t._v("vh 和vw相对于视口的高度和宽度,1vh 等于1/100的视口高度，1vw 等于1/100的视口宽度")])]),t._v(" "),e("h2",{attrs:{id:"css3动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3动画"}},[t._v("#")]),t._v(" CSS3动画")]),t._v(" "),e("h3",{attrs:{id:"一-过渡模块-transition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-过渡模块-transition"}},[t._v("#")]),t._v(" 一 过渡模块 （transition）")]),t._v(" "),e("p",[t._v("transition 通常用于做过渡动画; 先写好基本界面样式，然后写好过渡以后期望的样式，最后给对应的元素添加过渡。")]),t._v(" "),e("h4",{attrs:{id:"属性-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-3"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),e("p",[t._v("1.transition-property: 哪个属性需要执行过渡效果；默认值为all；\n2.transition-duration：过渡效果持续的时长； 默认值为0；\n3.transition-delay: 延迟多少秒之后开始执行过渡动画； 默认值为0；\n4.transition-timing-function: 控制过渡动画的速度；默认值为ease；\n一共有5个值分别是：\n匀速 linear； 逐渐慢下来 ease； 加速 ease-in； 减速 ease-out ； 先加速后减速 ease-in-out;\ntransition 属性连写顺序：transition: property duration timing-function delay; 连写的时候可以省略后面两个参数。")]),t._v(" "),e("h3",{attrs:{id:"二-2d-3d-转换模块-transform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-2d-3d-转换模块-transform"}},[t._v("#")]),t._v(" 二 2D/3D 转换模块（transform）")]),t._v(" "),e("p",[t._v("transform 有3个值，分别是： 旋转 rotate( ); 平移 translate( ); 缩放scale( );")]),t._v(" "),e("ol",[e("li",[t._v("平移\n第一个参数: 水平方向；第二个参数:垂直方向。\n用法： transform: translate(-100px, 0px)")]),t._v(" "),e("li",[t._v("缩放\n如果取值是1，代表不变；大于1则放大，小于1则缩小。如果水平和垂直缩放都一样，可以简写为一个参数。\n用法： transform: scale(1.5, 1) ； transform: scale(2)")]),t._v(" "),e("li",[t._v("旋转\n用法： transform: rotate(45deg)， 其中deg为单位。\ntransform:rotateY()")])]),t._v(" "),e("h3",{attrs:{id:"三-动画模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-动画模块"}},[t._v("#")]),t._v(" 三 动画模块")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  与过渡不同的是，过渡必须人为的触发才会执行动画，动画不需要人为的触发就能执行。\n  \n  动画三要素：\n  需要执行哪个动画(animation-name)；\n  需要自己创建一个名称叫做 xxx 动画 (@keyframes xxx)；\n  动画持续的时长(animation-duration);\n  div {\n      width: 50px;\n      height: 50px;\n      background: pink;\n      animation-name: xxx; \n      animation-duration: 3s;    \n  }\n   \n  @keyframes xxx {\n      from{\n          margin-left: 0;\n      }\n      to {\n          margin-left: 500px;\n      }\n  }   \n  \n  animation 属性是一个简写属性，用于设置六个动画属性：\n  * animation-name \n  * animation-duration\n  * animation-timing-function\n  * animation-delay\n  * animation-iteration-count\n  * animation-direction\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);