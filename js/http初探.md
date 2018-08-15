# http协议初探(HyperText Transfer Protocol)

1. `http`请求流程：

   - 1. 打开一个TCP连接
     2. 发送`http`报文
     3. 读取服务端返回的响应报文
     4. 关闭连接或者为后续请求重用连接

2. `http`请求和响应

   - HTTP请求报文（requests）：

   ```
   POST /pay HTTP/1.1
   Host: localhost:8080
   Cache-Control: no-cache
   Content-Type: text/plain;charset=UTF-8
   
   
   {"email":"1204642219@qq.com","password":"9"}
   ```

   

   1. 首部字段

      ```
      //method方法 path路径 版本号version of the protocol 
      POST /pay HTTP/1.1
      ```

   2. requests headers(请求头)

      ```
      //域名
      Host: localhost:8080
      //请求体类型
      Content-Type:appliction/json
      
      ```

   3. 回车（无内容，用来把第二部分和第四部分隔开）

   4. 请求体   

      ```
      "{}"
      ```

      

注意：GET请求没有第四部分，get请求的请求体以查询参数的形式放在首部字段

   - HTTP响应报文（responses）：

```
HTTP/1.1 200 OK
Conent-Type: text/html;charset=utf-8
Date: Mon, 13 Aug 2018 11:55:30 GMT
Connection: keep-alive
Transfer-Encoding: chunked
```

1. 首部字段

   ```
   //版本号version of the protocol 状态码200  
   HTTP/1.1 200 OK
   ```

2. rsponses headers(响应头)

   ```
   //请求体类型
   Conent-Type: text/html;charset=utf-8
   //日期
   Date: Mon, 13 Aug 2018 11:55:30 GMT
   
   ```

3. 回车（无内容，用来把第二部分和第四部分隔开）

4. 响应体   

   ```
   success
   ```

   

例子

```
//浏览器端发请求，读取响应
var xhl = new XMLHttpRequest()
xhl.open('get','/xxx')  //设置请求方法和路径
xhl.setRequestHeader('Conent-Type','appliction/json')//设置请求头
xhl.send('{}')//设置请求体
xhl.onreadystatechange=function(){
    if(xhl.readyState===4){
        console.log('请求完毕')
        let a=xhl.getAllResponseHeaders()//获取响应头
        let b=xhl.getResponseHeader('Content-Type')//获取响应头
        let c=xhl.statusText //获取原因短语‘200 OK’
        console.log(a)
        console.log(b)
        console.log(c)
        if(xhl.status===200){ //获取状态码
             console.log('请求成功')
             console.log(xhl.responseText)//获取响应体
        }else{
             console.log('请求失败')
        }
    }
}
```

```
//服务器端读取请求，发出响应（依托于server.js服务器）
if(path === '/' && method='POST'){ //读取路径和方法
    //读取文件
    let string = fs.readFileSync('./index.html','utf8')
    //响应客户端
      //1.响应第一部分：状态码
      response.statusCode=200
      //2.响应的第二部分：响应头
      response.setHeader('Content-Type','text/html;charset=utf-8;')
      //3.响应第四部分：响应体
      response.write(string)
    //响应结束
    response.end()
 //读取请求体体函数
function readBody(request){
  return new Promise((resolve,reject)=>{
    let body=[]
    request.on('data',(chunk)=>{
      body.push(chunk);
    }).on('end',()=>{
      body=Buffer.concat(body).toString()
      resolve(body)
    })
  })
}
```

