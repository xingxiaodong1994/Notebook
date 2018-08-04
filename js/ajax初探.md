# AJAX初探

1.  **`ajax` 其实是 `Async Javascript And XML` 的缩写:异步的 JavaScript 和 XML** 

2.  `ajax`诞生历史：
     - js中有多种元素被创建时可以发请求：例如
        - 用 form 可以发请求，但是会刷新页面或新开页面  
        - 用 a 可以发 get 请求，但是也会刷新页面或新开页面 
        - 用 img 可以发 get 请求，但是只能以图片的形式展示 
        - 用 link 可以发 get 请求，但是只能以 CSS、favicon 的形式展示 
        - 用 script 可以发 get 请求，但是只能以脚本的形式运行 
        
     - 有没有什么方式可以实现
        - get、post、put、delete 请求都行
        - 想以什么形式展示就以什么形式展示

3. IE 5 率先在  JS  中引入` ActiveX `对象（ API ），使得  JS 可以直接发起 HTTP 请求。 随后 Mozilla、 Safari、 Opera 也跟进（抄袭）了，取名 `XMLHttpRequest`，并被纳入 W3C 规范 

4. Jesse James Garrett 将如下技术取名叫做 AJAX：异步的 JavaScript 和 XML 
   - 使用XMLHttpRequest 发请求

   - 服务器返回XML格式的字符串

   - JS解析字符串并更新局部页面

     

5. 原生js手写ajax请求

     ```
     let xhr = new XMLHttpRequest()
     xhr.open('get','/xxx')
     xhr.onreadystatechange=function(){
         if(readyState===4){
             console.log('请求响应完毕')
             if(xhr.status>=200 && xhr.status<300){
                 console.log(响应成功)
                 console.log(xhr.status)
                 console.log(xhr.responsText) 
                 //把符合JSON语法的字符串转换为JS对象
                 let string=xhr.responsText
                 let object=window.JSON.parse(string)
                 console.log(object)
             }else{
                  console.log(响应失败)
             }
         }
     }
     xhr.send()
     ```

     
