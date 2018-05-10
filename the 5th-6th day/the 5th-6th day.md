## 打卡
* 日期：2018年5月7日
* 本节学习用时：8h

## 盒模型概要

#### 盒模型常见问题

* 外边距塌陷/折叠

* 溢流（overflow）
当用把盒子的大小设为绝对值时（比如使用固定像素的width和height），盒子里的内容可能会超出盒子的大小，此时内容就会溢出盒子。

  * 为盒子设置`overflow:hidden;`解决;如需滚动条，则设置为`overflow:auto`。

* 背景裁剪（background-clip）
盒子内使用`background`设置的背景会延伸到盒子边界的边缘(占满content+padding+border，但是被border覆盖住了)，使用`background-clip`属性可以定义背景延展范围。（但border需要设置为透明或半透明才能看出效果）

* 轮廓（outline）
outline不是盒模型的一部分，它是在盒子之上的，不占用盒子尺寸。范围界定在border之外，margin之内。

#### 宽高约束（min-\max-）
使用宽高约束时，常设置width/height为百分比值，能达到最为简单的响应式效果。

* 是一种最简单的响应式形式。
下面的示例，在宽度达到1280px之前，元素一直占整个视图的宽度的70%，在自身超过1280px后，它将保持在这个宽度不再变化，在自身小于480px时，它也不会再继续缩小。

  ```
  width: 70%;
  max-width: 1280px;
  min-width: 480px;
  ```

* 在子元素上设置宽高约束，可以防止子内容溢出（如设置max-width来防止容器缩小得过小导致图片溢出）

#### 盒模型相关知识点总结

* 默认情况下background-color/background-image 延伸到了border的内边缘。该行为可以使用background-clip属性来改变。

* 如果content框变得比示例输出窗口大，它将从窗口溢出，此时会出现滚动条，可以使用overflow属性来控制溢出。

* outline是一个看起来像是边框但又不属于盒模型的东西。它的行为和边框差不多，但是并不改变盒模型的尺寸（更准确的说，它的轮廓被勾画于在border之外，margin区域之内）

* 盒子的高度height不遵守百分比的长度，它总是适应盒子内容的高度，除非指定一个绝对的高度值（px或者em）。

* border也忽略百分比宽度设置。

* box-sizing可以用来调整盒模型总体宽高的计算规则。

#### 代码规范：

1. [百度编码规范](https://github.com/ecomfe/spec)

2. [页面设计笔记](https://segmentfault.com/a/1190000008218971)

3. [web前端工程师必看的一些前端规范与前端开发规约](http://www.25xt.com/?p=15586)