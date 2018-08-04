# Promise初探

1. 历史原因：

   在Promise出现之前，我们处理 `js` 的异步任务，只能用回调函数.

   异步回调的典型例子：ajax

   ```
   //ajax发请求：
   	let xhr = new XMLHttpRequest();
   	xhr.open('post','/xxx')
   	xhr.send('body')
   	//监听请求状态，执行回调函数。
   	xhr.onreadystatechange=function(){
   		//请求完毕
           if(xhr.readyState === 4){
               //回调成功，执行successFn,回调失败，执行failFn
               if(xhr.status >= 200 && xhr.status<300){
                   successFn.call(undefined,xhr.responseText)
               }else{
                   failFn.call(undefined,xhr.status)
               }
           }
   	}
   //定义成功和失败函数
   	successFn = (data)=>{
           console.log('请求成功,请求的数据为'+data)
   	}
   	failFn = (status)=>{
           console.log('请求失败，失败的请求为'+status)
   	}
   ```

   - 异步使用回调的缺点
     1. 定义两个函数`successFn`和`failFn`

     2. 多个异步任务执行时,陷入回调地狱。

        ```
        Fn1(f1success:(data1) => {
          	Fn2(f2success: (data2) => {
           		Fn3(f3success: (data3) => {
            	  console.log('请求成功,请求的数据为'+data)
            	})
          	})
        })
        ```

2.Promise基本用法：

```
//1.创建Promise实例，它接受一个函数作为参数，此参数函数也需要接受两个参数（resolve,reject）。
let p = new Promise（
	(resolve,reject)=>{
    	//执行一些代码
    	//然后在某些条件下resolve，或者reject
    	if(/*判断条件，随便写*/){
            resolve(data)
    	}else{
            reject(error)
    	}
	}
）;
p.then(
	(data)=>{
        //如果p中条件成立,执行resolve函数，就进入这里
        return data2;
	},
	(error)=>{
         //如果p中条件不成立,执行reject函数，就进入这里
         return error
	}
).then(
	(e)=>{
        //对上一次then的结果进行二次处理，成功后，进入这里
        return e     
	},
	(e)=>{
         //对上一次then的结果进行二次处理，失败后，进入这里       
	}
)

```

优点：

1. 不需要定义函数名，使用`resolve()`和`reject()`

2. 对于多重异步回调，写成`.then().then()`的链状形式，这样的代码，是线性的，符合人的阅读习惯，代码表示的流程清晰，便于阅读 

3. 在`.then().then()`的过程中,值可以穿透promise，直达最后一个then的`resolve()`函数中,举例：

   ```
   new Promise(resolve=>resolve(666))
     .then()
     .then()
     .then((e)=>{
      console.log(e)
     })  //控制台会打印出666
   ```
   3.改写`ajax`返回Promise对象：

   ```
   let p = new Promise(
   	(resolve,reject)=>{
          //ajax发请求：
   		let xhr = new XMLHttpRequest();
   		xhr.open('post','/xxx')
   		xhr.send('body')
   		//监听请求状态，执行回调函数。
   		xhr.onreadystatechange=function(){
   			//请求完毕
           	if(xhr.readyState === 4){
               	//回调成功，执行resolve,回调失败，执行reject
               	if(xhr.status >= 200 && xhr.status<300){
                   	resolve.call(undefined,xhr.responseText)
               	}else{
                   	reject.call(undefined,xhr.status)
               	}
           	}
   		} 
   	})
   	p.then(
   		(data)=>{console.log('请求成功,请求的数据为'+data)},
   		(status)=>{console.log('请求失败，失败的请求为'+status)}
   	)
   
   ```

   
