# `es6`

1.let声明变量

- let 的作用域在最近的{}之间

- 如果在let a之前使用a,报错(暂存死区)

- 重复声明let a 报错。

  const 声明变量

- const 的作用域在最近的{}之间

- 如果在const  a之前使用a,报错(暂存死区)

- 重复声明const  a 报错。

- const a必须立即赋值，否则报错，而且const只有这一次赋值机会，第二次赋值直接报错

```
a=1 //如果当前有a变量，直接为a赋值为1，如果找不到a变量，声明一个全局变量。
var a=1 //var 会使变量提升到当前作用域最顶端
	//声明局部变量a
	!function(){
    	var a=1
   	 window.andy=function(){
        	console.log(a)
   	 	}
	}()
	//声明局部变量a
	{   console.log(a)//报错，let必须先声明再使用
    	let a=1
    	 window.andy=function(){
        console.log(a)
    	}
	}

const a=1
{
    const PI=3.1415
    PI=2//直接报错
}

```

面试题

```
for(var i=0;i<6;i++){
    setTimeout(()=>{console.log(i)},0)
}//6 6 6 6 6
for(var i=0;i<6;i++){
	let j=i
     setTimeout(()=>{console.log(j)},0)
}//0,1,2,3,4,5
for(let i=0;i<6;i++){
	//let i=i //i的作用域在小括号里！但是for循环js会自动在大括号里创建let i,接受小括号里的i
     setTimeout(()=>{console.log(i)},0)
}//0,1,2,3,4,5

```

