# New初探

1. **类**：我们把一些写代码是重复用到的属性和函数提炼出来，写在一起作为一个类   。              

   类的实质：代码复用。

2. **new** 是一个语法糖，当我们自定义一个类时，new关键字可以让我们少写几行代码。

```
//我们定义一个函数作为类
var Fn=function Fn(){
    
}
//然后我们new这个函数，会发生什么？
var fn=new Fn（）

//实际上new帮我们做了一下3件事
var fn=function(){
	this.__proto__=Fn.prototype  //1. 使this.__proto__指向Fn的原型
    return this					//2. return this
}
Fn.prototype={					//3.创建Fn.prototype对象，其中Fn.prototype.constructor指向Fn()
    constructor:Fn()
}

```

http://js.jirengu.com/qerum/2/edit