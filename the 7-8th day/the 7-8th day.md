## Flexbox `display: flex;`

如果也想设置内联元素为弹性盒子，可以使用`display:inline-flex;`

#### 实现三种其他布局难以达到的效果：
1. 在父内容里面垂直居中一个块内容。

2. 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。

3. 使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。

#### flex盒子属性(只对flex container弹性盒子起作用)

属性 | 值 | 备注
---- |-----| ----
flex-direction|row（默认）/column|用来指定主轴方向
flex-wrap|wrap/wrap-reverse|自动换行，防止内容溢出
justify-content|flex-start（默认）/flex-end/center/space-around（均匀分布）/space-between（不会在两端留下任何空间）|控制子项在主轴上的位置
align-items|stretch（默认）/center/flex-start/flex-end|控制子项在交叉轴上的位置，align-self可以覆盖align-items

* `flex-flow`：`flex-direction`和`flex-wrap`的缩写。

* 弹性盒子的子元素上可以应用`flex`属性，实现每个元素的动态尺寸，并可以自由处理剩余空间。

* 弹性盒子的子元素上可以应用`order`属性进行子项的任意排序。

#### 兼容性（只支持IE11）

![](imgs/flex兼容性.jpg)

## 布局方案汇总

以前只有float和position被广泛用于布局中，未来我们可以期待flexbox和grid。

#### float浮动布局

1. 百分比宽度布局

2. 单边固定流体布局

#### inline-block布局

将元素设为`display: inline-block`进行布局（不建议整体布局时使用）。

布局注意点：

* vertical-align属性会影响到inline-block元素，你可能会把它的值设置为top 。

* 你需要设置每一列的宽度。

* 如果HTML源代码中元素之间有空格，那么列与列之间会产生空隙。

#### position定位布局

#### 冻结布局

用一个全局性的固定大小的div包裹整个页面，给这个div设置一个宽度width，并使用`margin:0 auto;`将整个页面在浏览器中居中。

#### 圣杯布局

* 为三列嵌套一个container box，对这个box设置`padding-left`和`padding-right`，留出左右列的空间。

* 中间盒子设置`width:100%;`，三列盒子都设置`float: left;`。

* 使用`margin-left: -100%;`和相对定位的right值把左边盒子放入正确的位置。

* 使用`marigin-right`同样放置好右边的盒子。

* 进行整体margin的调整，留出三列的边距。

* 圣杯布局的关键在于两边的列元素设置负值 margin 可以抵消掉.container容器元素设置的padding，推荐对这一块儿进行拓展阅读

参考：[http://alistapart.com/article/holygrail](http://alistapart.com/article/holygrail)

#### 双飞翼布局

在圣杯布局的基础上，在中间列的内容外再包裹一层div，直接用css调整包裹层div的位置，就可以更加便捷的操控中间列的内容不被两边遮挡，还能方便设置与两边的间距。

参考：[双飞翼布局介绍-始于淘宝UED](http://www.imooc.com/wenda/detail/254035)

#### flexbox布局

#### Grid布局

1. [5分钟学会 CSS Grid 布局](http://www.css88.com/archives/8506)

2. [CSS Grid网格布局属性总结及网格布局资料推荐](https://www.jianshu.com/p/620174de3d25)

3. [MDN-网格布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

4. [CSS Grid 系列(上)-Grid布局完整指南](https://segmentfault.com/a/1190000012889793)

5. [前端未来页面布局发展方向是 Flexbox 还是 Grid？](https://www.zhihu.com/question/28691822)

## 跟布局相关的技术总结

#### 媒体查询

[MDN媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

注：媒体查询可以直接嵌入`<link>`中。

#### Meta Viewport and @viewport

[Viewport学习](https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport)

有些CSS属性需要触发叫做`hasLayout`的东西，触发`hasLayout`是用来支持旧浏览器的(IE6/IE7等)。

#### css reset

* Normalize.css

* 常规reset.css

#### 布局类型

布局类型无非就是一列/两列/三列/等分列/混合布局等。

参考：[柴小智——CSS网页布局方式](http://www.cnblogs.com/chaixiaozhi/p/8486647.html)

* 两栏布局：[七种实现左侧固定，右侧自适应两栏布局的方法](https://segmentfault.com/a/1190000010698609)

* 三栏布局：圣杯布局和双飞翼布局 及 [三种三栏网页宽度自适应布局方法](http://www.zhangxinxu.com/wordpress/2009/11/%E6%88%91%E7%86%9F%E7%9F%A5%E7%9A%84%E4%B8%89%E7%A7%8D%E4%B8%89%E6%A0%8F%E7%BD%91%E9%A1%B5%E5%AE%BD%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95/)

  > `margin-left：-100%`怎么理解？可是手动设置一下`margin-left：-200px\-300px\-500px`，结合父元素留出的padding，多看看效果，理解这个问题主要在于两点：一是按CSS规定，浮动元素会尽量往上浮动；二是margin负值会改变元素占据的空间。可参考：[为什么左边的模块margin-left：-100%会跑到左上方](https://segmentfault.com/q/1010000010910574/a-1020000010911652)

#### 扩展阅读

1. [CSS深入理解流体特性和BFC特性下多栏自适应布局](http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)

2. [对负边距的一些认识](https://blog.csdn.net/qq_34881462/article/details/53433633)

3. [为什么.row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding？](https://www.zhihu.com/question/28044848)

#### 布局中的问题记录

1. width宽度设为100%后，再设置margin/padding会超出屏幕

解决方案：width值为100%指的是宽度为其父元素宽度，如果父元素本身就是body，那么再设置边距就会超出屏幕。解决方法就是使用`box-sizing: borde-box;`再使用padding设置间距（不要使用margin）。如果只是为了自适应，也可以试试不设置宽度，不一定非要把宽度设为100%。

2. 当li在ul里浮动时，如果想当鼠标hover到li时改变它的高度，会发现所有的li会同时往上浮动，这是因为改变的那个li的高度将ul撑开了，其余的li又是遵循浮动的，会尽量往上浮动。解决的办法就是不要对li使用浮动，而是使用`display:inline-block;`。

3. 将li设置为横排nav有两种办法：`float`和`display: inline-block`。