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

4 . 

```
//背景图片居中 整体模糊filter:blur(5px)
.cover{
	
	position:relative;
}
.cover::before{
    content:'';
    display:absolute;
    top:0;
    left:0;
    width:100%
    height:100%
    filter:blur(5px)
    background:transparent url:"" center center noreap ;
    background-size:cover;
    z-index:-1;
}
```
css预加载：Chrome等待css加载完毕再渲染页面！
性能优化
1. 减少DNS查询数量：把所以资源放在一个域名
2. tcp协议，开启连接复用，在http协议中写入keep-aline?,使用http2.0的多路复用
3. 请求：减少cookie长度，使用Cache-Control,同时发请求（一个域名可以发4个请求）（多cdn域名（文件多时使用，虽然会增加DNS查询数量））
4. 响应：使用ETag. Gzip压缩

