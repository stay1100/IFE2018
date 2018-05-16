1. 很多字体不支持调节`font-weight`，到了400以下就没有变化了。这里在网上查找了一些支持改变weight的系统UI字体：

* `Segoe UI` 针对 Windows 和 Windows Phone。

* `Roboto` 针对 Android 和更高版本的 Chrome 操作系统。故意列出在 Segoe UI 后，因为如果你是 Windows 上的 Android 开发人员，并安装 Roboto，将使用 Segoe UI。

* `Oxygen` 针对 KDE，Ubuntu，你可以猜到，Cantarell 针对 GNOME。这一开始感到徒劳，因为一些 Linux 发行版有许多这样的字体。

* `Fira Sans` 针对 Firefox OS 系统。

* `Droid Sans` 针对旧版本系统的安卓

参考：[解决 font-weight 无效的问题](https://segmentfault.com/a/1190000007787731)

2. [CSS设置字间距、行间距、首行缩进](https://blog.csdn.net/qq_26291823/article/details/50811297)

3. `background-color:transparent`透明背景，input透明框可以用这个属性设置。

4. 运用`padding-top`和`box-sizing:border-box`，能有效避免因为margin引起的外边距堆叠问题。

5. 对于`<h>`和`<p>`类标签，因为很少能知道它们的高度，所以水平垂直居中常用的办法是使用`text-align:center`让文字居中，然后padding调整它们与外界的距离。

6. `hover`可以做到hover一个元素时，让另一个元素改变样式：`.elem:hover .other-elem{};`

7. CSS3`resize`属性规定是否可由用户调整元素的尺寸，可以用`resize: none;`来去掉textarea右下角的调整标志。

8. HTML表单元素不继承body中设置的字体属性，需要进行单独设置。

9. 通过padding/margin等进行的布局无法设置响应式，所以尽可能使用居中、flex、百分比、容器遮罩等方法进行布局定位，响应浏览器尺寸变化的能力会强一些。
