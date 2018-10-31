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

3.在 ES5 中如何用函数模拟一个类？ 

```
var Class=function Class(e){
    //添加类的属性
    this.name=e.name
    //添加类的方法
    this.method1=function(){}
}
//定义类的原型的属性和方法
Class.prototype={
     constructor:Class
}
//创建类的实例
options={name:'class1'}
class1=new Class(options)
```

