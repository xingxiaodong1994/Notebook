# cookie(http协议的一段内容)

注意，HTTP本质是无状态的，使用Cookies可以创建有状态的会话。 

## 1. 小知识：

- 阻止按钮默认事件

  ```
  formDom.addEventListener('submit',function(e){
      e.preventDefault()
  })
  ```

- 获取表单中 账号密码信息

  ```
  // 方法1：
                  let hash={}
                   email=form.querySelector('[name="email"]').value
                   password=form.querySelector('[name="password"]').value
                   hash.email=email
                   hash.password=password
                   console.log(hash)
  ```

  ```
  //方法2：
                  //创建数组
                  let need=['email','password']
                  //调用数组的forEach方法
                  need.forEach((key)=>{
                      let value=form.querySelector(`[name=${key}]`).value
                      hash[key]=value
                  })
                  console.log(hash)
  ```

- 把对象hash传给后端服务器

  ```
  //使用JSON数据格式：
   //1.把对象变成符合JSON数据格式的字符串
   hash=JSON.stringify(hash)
  ```

  

- 后端服务器接收到字符串hash

  ```
  //把JSON数据格式的字符串转化为JS对象
  	hash=JSON.parse(hash)
  ```

  

# 2. 基础知识应用

###  例子 1：

```
//把给定的字符串中信息读取出来
var  string=`[{"email":'1@qq.com',"password":1},
	{"email":'2@qq.com',"password":2},
	{"email":'3@qq.com',"password":3}]`
  //1.把 符合JSON数据格式的字符串 转变为 JS数组对象
  string = JSON.parse(string)
  //遍历这个数组
  for(let i=0; i<string.length; i++){
      let email=string[i].email
      let password=string[i].password
      console.log('email:'+email+',password:'+password+';')
  }
  //email:1@qq.com,password:1;
  //email:2@qq.com,password:2;
  //email:3@qq.com,password:3;
```

**sessions:**

```
//登录后，设置Cookie
	//设置一个空哈希
	sessions={} //xxx:{sign_in_email:email}
	//生成随机数
    sessionId=Math.random()*100000 //xxx
    //在内存中存入hash{},hash中有session[sessionId]这一项
    sessions[sessionId]={sign_in_email:email}
    response.setHeader('Set-Cookie',`sessionId=${sessionId}`)
```

# 3  localStorage

```
//实质：浏览器上的一个哈希
//设置方法：
localStorage.setItem('a','2')
localStorage.getItem('a') // '2'
localStorage.clear()
//应用场景：刷新页面只提示一次信息
let already=localStorage.getItem('已经提示')
if(!already){
    alert('你哈，我们页面改版，加入新功能')
    localStorage.setItem('已经提示',true)
}
```





decodeURLComponent

找到兄弟元素

fs.writeFileSync('/xxx',users)

try{

users=JSON.parse(string)

}catch(exception){

users=[]

}



