## 打卡
* 日期：2018年5月4日
* 本节学习用时：6h

## 课程内问题

#### 1、HTML是什么，HTML5是什么

* HTML指的是超文本**标记**语言 (Hyper Text Markup Language)。

* HTML5是最新的HTML标准，拥有更丰富的语义、图形以及多媒体元素等内容。而且它是跨平台的，在移动端开发中也有非常好的表现。

#### 2、HTML元素标签、属性都是什么概念？

* HTML元素标签是描述一个网页的基础，我们使用这些语义化标签来描述整个网页。

* 属性为HTML元素提供了更为丰富准确的语义情境，加强HTML标签的描述能力。

#### 3、文档类型是什么概念，起什么作用？

* 文档类型是浏览器解释网页所需要的规则类型。声明文档类型可以帮助浏览器正确的显示网页。

#### 4、meta标签都用来做什么的？

* meta标签是用来描述HTML文档的元数据，也即描述一个HTML网页文档的各种属性（作者、网页描述、关键词等）

#### 5、Web语义化是什么，是为了解决什么问题

* web语义化可以从代码上来展现页面结构，能让机器读懂代码。

* web语义化使得机器（浏览器、搜索引擎、爬虫等）能自行读懂代码，进而根据页面结构对某些数据或模块进行程序化操作。

#### 6、链接是什么概念，对应什么标签？

* `<a>`标签可以创建超链接，使用它可以链接到其他网页、文件、或同一页面内的不同位置（锚点）。

#### 7、8、9 常用标签、表单标签、列表标签等

[参照常见元素标签](#常见元素标签)

## `<head>`里都有什么

#### `<title>`:网站的标题

#### `<meta>`:网站元数据

元数据就是描述数据的数据，而`<meta>`就是为一个HTML文档添加元数据的“官方的”方式。

* `charset`属性：指定你的文档中字符的编码。
`<meta charset="utf-8">`
`utf-8`是一个通用的字符集，其他还有GBK。

* `name`和`content`属性
`name`属性指定了`meta`元素的类型;说明该元素包含了什么类型的信息。`content`属性指定了实际的元数据内容。
```
<meta name="author" content="作者具体信息">
<meta name="description" content="具体网页描述">
```
  > name指定的meta元素类型十分重要，对优化SEO及爬虫等都十分有必要。如一些内容管理系统能够自动获取一些name指定为author的页面，然后用于某种目的。指定name为description则可让你的网站在搜索引擎中出现的次数更多。

#### `<link>`:定义文档与外部资源的关系

最常见的用途有两个：

* 为站点添加自定义图标
```
<link rel="icon" href="xxx.ico" type="image/x-icon">
```

* 链接CSS文件
```
<link rel="stylesheet" href="main.css">
```

#### `<script>`:定义客户端脚本
`<script>`不一定要放在`<head>`中。

## 常见元素标签

#### 根元素标签

`<html>`

#### 文件数据元素标签

`<head>`/`<title>`/`<base>`/`<meta>`/`<link>`/`<style>`/`<script>`/`<noscript>`

#### 文件区域元素标签

`<body>`/`<h1>`/`<address>`

`<nav>`/`<section>`/`<article>`/`<aside>`/`<header>`/`<footer>`

`<hgroup>`

#### 群组元素标签

`<p>`/`<div>`/`<blockquote>`

`<ol>`/`<ul>`/`<li>`/`<dl>`/`<dt>`/`<dd>`

`<figure>`/`<figcaption>`

`<br>`/`<hr>`/`<pre>`

#### 文字层级元素标签

`<a>`/`<span>`

`<em>`/`<strong>`/`<small>`/`<ins>`/`<del>`

#### 内嵌媒体元素标签

`<img>`/`<video>`/`<audio>`/`<canvas>`/`<source>`

`<iframe>`/`<embed>`/`<object>`/`<param>`

#### 表格元素标签

`<table>`/`<caption>`/`<tbody>`/`<thead>`/`<tfoot>`/`<tr>`/`<td>`/`<th>`

#### 窗体表单元素标签

`<form>`/`<input>`/`<label>`/`<button>`/`<select>`/`<datalist>`/`<option>`/`<textarea>`

`<fieldset>`/`<legend>`

#### 交互式元素标签

`<details>`/`<summary>`/`<command>`/`<menu>`

延伸阅读：

1. [Iframe 有什么好处，有什么坏处？](https://www.zhihu.com/question/20653055)

2. [如何使用Web Component创建一个Shadow DOM？](https://book.douban.com/subject/27021790/)