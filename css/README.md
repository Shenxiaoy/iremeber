## 文档参考 web docs [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

## shape-outside 
shape-outside 属性指定使用下面列表的值来定义浮动元素的浮动区域。这个浮动区域决定了行内内容（浮动元素）所包裹的形状。

> 本身是浮动元素，环绕内容是内联元素；
> 对于包裹环绕目标元素，可以设置关键字（margin-box、content-box、border-radius...）进行内联包裹设置；
也可应定义函数值（circle()圆、ellipse()/椭圆、inset/插入坐标、polygon/定义多边形做白哦环绕、path()/svg路径）进行设置；还包括、图片
url(xx.png)、渐变等。

## 滤镜 filter
<a href='./filter.html' target='_blank'>demo look</a>
[demo展示](./filter.html)

1、灰度 || grayscale ，值为0-1之间小数，也支持百分比；

2、褐色 || sepla ，值为0-1之间的小数；

3、饱和度 || saturate , 值为数字，值越大越鲜明；

4、亮度 || brightness , 值为数字，值越大越鲜明；

5、对比度 || contrast ， 值为数字，值越大越鲜明；

6、模糊 || blur，单位px， 值越大，模糊越严重；

7、hue-rotate || 色相旋转，单位deg，随着值不断的变化，图像色值也是不断的变化；

8、invert || 反色 ， 值为0-1之间的小数；效果类似 x光照效果；

9、阴影 || drop-shadow ，（x, y , z, color），x表示阴影水平偏移的单位，y代表阴影垂直偏移单位，
z 表示模糊度（如果z 小于x/y，那么对应的阴影对边将不会显现），color表示偏移的颜色

10、透明度 || opacity 透明度 0-1之间

```
.box{
  grayscale(1); // 照片渲染为无色彩；
  blur(5px);  // 整个元素模糊处理；
  ...
}
```

> filter 还包括 支持url等特性，探究永无止境。



















