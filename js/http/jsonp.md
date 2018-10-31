# `jsonp`是啥？

1. **用途：**一种跨域问题解决方案

2. **精髓：**

   `jsonp` 是一种向后端请求数据的方法，它通过动态创建script来向后端发起一个**GET**请求,后端通过回调函数把属于用JSON格式的数据当做参数传给前端 

   **小知识：**`jsonp` 通过动态创建script实现的，创建script时候只能用GET请求，无法POST。

   **约定**：回调函数用查询参数中callback  表示

3. **代码实现：**

举例：

​	请求方：a.com 的前端程序员A（浏览器） 

​	响应方：b.com 的后端程序员B（服务器） 

​	请求方A，通过`jsonp`方法，向响应方B,请求存在服务器文件 db 中数据

**请求方A代码：**

```
//1. 创建回调函数,函数名用随机数，避免覆盖全局变量
 	let functionName='a'+parseInt(Math.random()*100000,10)
	window[functionName]=function(json){
 		//后端程序员B把请求的数据以json数据格式作为回调函数的参数传给前端
 		console.log('请求数据成功，得到的数据是'+json) 
 		}
// 2.动态创建script标签。
	let script = document.creatElement('script');
//3. 指定src 指向 响应方B;在src中通过查询参数指定回调函数'?callback=xxx'
	script.src='b.com/pay?callback=' + functionName
//4.把script标签插入html中，来发起get请求
 	document.body.appendChild(script)
//5.请求完毕后，删除script标签和回调函数
	script.onload=function(e){
            e.currentTarget.remove()
            delete window[functionName]
        }
```

**请求方A代码(jQuery版本)：**
```
 $.ajax({
        url:'b.com/pay',
        dataType:'jsonp',
        success:function(json){
           console.log('请求数据成功，得到的数据是'+json) 
        }
    })
```




**响应方B代码：**

```
if(path === '/pay'){ //当请求路径为pay时
		//读取文件db内容
        var content = fs.readFileSync('db','utf8')
        //设置响应头
        response.setHeader('Content-Type','application/javascript')
        //设置状态码
        response.statusCode = 200
        //执行回调函数，并把请求的数据以JSON的格式，作为回调函数参数，返回给请求方（前端程序员A）
        //JSON+padding=JSONP 
        //设置响应体
        response.write(`
             ${query.callback}.call(undefined,{
                 "success":true,
                "content":${content}
             })
        `)        
        response.end()
```

小技巧：

```
//随机数：
	//Math.random()//0-1之间随机数
	var number=Math.random()*10000
	//取整数部分
	number = parseInt(number,10) 
//手动刷新
    window.location.reload()
```



