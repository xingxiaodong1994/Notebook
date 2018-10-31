# This初探

​	很多人（比如我自己）总是被`JS函数`的中的`this关键字`给绕晕，那么今天我对`this`做以下浅显的总结，帮助自己更好的理解`this`.

### 1. `this`精髓

- **`this`**是在执行上下文创建时确定的一个在执行过程中不可更改的变量。

- **`this`**不能在执行期间被赋值 ;

- **`this`**的值由函数的调用方式决定 ，并且在每次函数被调用时`this`的值也可能会不同。 

- **`bind()`**方法来设置函数的`this`值，而不用考虑函数如何被调用的 

- ES 6 引入了支持**`this`**词法解析的箭头函数（它在闭合的执行上下文内设置`this`的值）。 

  

```
this=1;  //this 可以别我们手动赋值吗？答案是：不可以，浏览器会报以下错误
Uncaught ReferenceError: Invalid left-hand side in assignment//（浏览器报错：翻译为：赋值左侧无效）
```



### 2. `this`出现位置

 - `this`出现在全局上下文中 , 不管是否为严格模式，`this`一律为`window对象`
    - `this===window //true`
    - `'use strict';this===window //true`

- `this`出现在函数中

    - 函数作为普通函数

      ```
      var fn=function(){console.log(this)}
      fn() // window对象 
      //解析: 
      fn()===window.fn() //true
      window.fn()===window.fn.call(window) //true
      ```

      ```
      //严格模式下：普通函数调用，this值指向undefined;
      'use strict';
      var fn=function(){console.log(this)}
      fn() //undefined
      ```

      

    - 函数作为对象的方法
    ```
    obj={
        name:'object',
        fn:function(){console.log(this)}
    }
    obj.fn() //obj对象
    //解析：
    window.obj.fn()===window.obj.fn.call(obj) //true //this指向最近调用函数的对象！！！
    
    var a=obj.fn
    a() //window对象 
    //解析: 
    
    obj.fn 指向 function(){console.log(this)}
    
    a===obj.fn //true
    
    a 指向 function(){console.log(this)}
    
    a()===window.a() //true
    window.a()===window.a.call(window) //true
    
    
    //深坑1：当一个函数作为另一个函数的参数传入是，this指向window
    var obj = {
      name: 'object',
      fn1: function() {
        console.log(this);
      },
      fn2: function() {
        console.log(this);
        setTimeout(this.fn1, 1000);
      }
    }
    obj.fn2(); //obj对象 1s后 打印window对象
    // setTimeout()是一个函数，this.fn1作为参数传入setTimeout()中时，
    // 相当于定义一个临时变量,a=this.fn1,然后执行setTimeout(a,1000)
    // a.call(window)默认绑定window为this。（严格模式下也一样绑定为window，而不是undefined!!!）
    
    ```
    - 函数作为DOM事件处理函数

      **`this === e.currentTarget`**

      ```
      function (e){
        console.log(this === e.currentTarget)
        }; // 总是 true
      ```

    - 函数作为构造函数

      ```
      function Person(name) {
        this.name = name;
        console.log(this);
      }
      var a = new Person('xxx');
      // Person {name: "xxx"}
      var b = Person('xxx');
      // Window
      ```

      **我们可以看到当作构造函数调用时，`this` 指向了这个构造函数调用时候实例化出来的对象；**

      **当然，构造函数其实也是一个函数，如果我们把它当作一个普通函数执行，这个 `this` 仍然执行全局window.**

    - 函数作为箭头函数

        ```
        var obj = {
        name: 'object',
        fn1: function() {
          console.log(this);
        },
        fn2: function() {
          console.log(this);
          setTimeout(()=>{ console.log(this)}, 1000);
        }
        }
        obj.fn2(); //obj对象 1s后 打印obj对象
        ```

       

    **箭头函数中的 this 只和定义它时候的作用域的 this 有关，而与在哪里以及如何调用它无关，同时它的 this 指向是不可改变的**。 


