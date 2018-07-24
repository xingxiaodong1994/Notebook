# 手机适配方案

## 1. 防止页面缩放

在html文件中加入以下meta标签

```
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 2. 媒体查询方案

在写css时使用media来对手机屏幕进行适配

```
/*下面代码表示当手机屏幕小于425px时页面背景变为灰色*/
@media(max-width:425px){
            body{
                background: grey;
            }
        }
```

这样对于手机屏幕使用媒体查询写css样式进行适配。

**缺点**：市面上不同型号手机屏幕宽度不一，需要些很多套css样式来进行适配，十分耗时间。

于是推出了rem方案

## 3. 动态rem方案

1rem=根元素html 的font-size大小；

pc端默认font-size大小为16px;对于浏览器Chrome来说最小字号为12px;

动态rem方案就是利用Js使1rem=当前页面宽度；代码如下：

```
 <script>
       var pageWidth=window.innerWidth
       console.log(pageWidth)
       document.write('<style>html{font-size:'+pageWidth+'px;}</style>')
    </script>
```

这样我们可以rem作为长度单位进行手机百分比布局，自动适应不同宽度的手机屏幕。