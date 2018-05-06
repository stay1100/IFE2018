## 打卡
* 日期：2018年5月6日
* 本节学习用时：3h

## 课程内问题

#### 1、什么是CSS，CSS是如何工作的

* CSS是为HTML文档指定呈现样式的一门语言。

* 浏览器将HTML文档解析成DOM树，再将CSS渲染到DOM树的各个节点上，并最终展现整个渲染后的页面。

#### 2、CSS的基本语法是怎样的

* CSS declaration: `propertie:vlaue`

* CSS declaration block: `{propertie:vlaue};`

* CSS规则就是由声明块+选择器组成的。
CSS rule = declaration block + selector

* CSS语句

  * CSS规则块（最常见的一种）

  * `@-规则`：在CSS中被用来传递元数据、条件信息或其它描述性信息。语法如：
    > @charset 和 @import （元数据）
    > @media 或 @document （条件信息，又被称为嵌套语句，见下方。)
    > @font-face （描述性信息）
    ```
    @import 'custom.css';
    ```

  * `嵌套语句`：是@-规则中的一种，它的语法是 CSS 规则的嵌套块，只有在特定条件匹配时才会应用到文档上。
    > @media 只有在运行浏览器的设备匹配其表达条件时才会应用该@-规则的内容；
    > @supports 只有浏览器确实支持被测功能时才会应用该@-规则的内容；
    > @document 只有当前页面匹配一些条件时才会应用该@-规则的内容。
    ```
    @media (min-width: 801px) {
      body {
        margin: 0 auto;
        width: 800px;
      }
    }
    ```

#### 3、CSS选择器是什么概念，简单选择器和属性选择器是什么

* CSS选择器是用来精确选择要样式化的元素的。

* 简单选择器：通过元素类型、class或id匹配一个或多个元素。
  属性选择器：通过属性或属性值匹配一个或多个元素。

#### 4、文本样式都有哪些相关属性，对应哪些值

* 字体样式：

`color`

`font-style`/`font-weight`/`font-size`/`font-family`

`text-decoration`/`text-shadow`/`text-transform`

* 文本布局风格：

`text-align`/`line-height`

`text-indent`/`letter-spacing`/`word-spacing`/`word-wrap`

## 笔记

#### 属性选择器：

* `[attr]`：选择包含attr属性的所有元素。

* `[attr=val]`：选择attr属性被赋值为val的所有元素。

* `[attr~=val]`：选择attr属性的值（以空格间隔出多个值）中有包含val值的所有元素，比如位于被空格分隔的多个类（class）中的一个类。

* 子串值属性选择器，也被称为“伪正则选择器”。（注意，这些选择器并不是真正的正则表达式）
`[attr|=val]`/`[attr^=val]`/`[attr$=val]`/`[attr*=val]`

#### 伪类和伪元素的区别：

答：伪类重在匹配处于**确定状态**的元素；伪元素重在匹配处于**相对确定位置**的元素。（以前为了区分，伪元素需要写俩冒号`::`）

#### 控制继承

CSS为处理继承提供了四种特殊的**通用属性值**：`inherit`/`inherit`/`unset`/`revert`
(注意:initial和unset不被IE支持。)

> 重新设置所有的属性值：CSS速写属性all能够被应用到每一个继承属性，一次性应用所有的继承属性。

#### 盒模型
这里记录一些注意点：

* 默认情况下background-color/background-image 延伸到了border的内边缘。该行为可以使用background-clip属性来改变。

* 如果content框变得比示例输出窗口大，它将从窗口溢出，此时会出现滚动条，可以使用overflow属性来控制溢出。

* 盒子的高度height不遵守百分比的长度，它总是适应盒子内容的高度，除非指定一个绝对的高度值（px或者em）。

* border也忽略百分比宽度设置。

* box-sizing可以用来调整盒模型总体宽高的计算规则。

* outline是一个看起来像是边框但又不属于盒模型的东西。它的行为和边框差不多，但是并不改变盒模型的尺寸（更准确的说，它的轮廓被勾画于在border之外，margin区域之内）