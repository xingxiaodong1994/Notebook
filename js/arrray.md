# 数组操纵方法实例

- 把 arguments 类数组转化为数组对象

  ```
  //用slice()方法：
  //对于数组，slice会返回这个数组的一部分
  arr.slice();
  // [0, end]
  
  arr.slice(begin);
  // [begin, end]
  
  arr.slice(begin, end);
  // [begin, end]
  //注意，slice方法包括开始不包括结束。
  //!!Es6新API（ 类数组转化为数组对象）
  array = Array.from(arrayLike)
  
  ```

  - **begin** 可选
    从该索引处开始提取原数组中的元素（从0开始）。
    如果该参数为**负数**，则表示从原数组中的倒数第几个元素开始提取，slice(-2)表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
    如果**省略 begin**，则 slice 从索引 0 开始。

  - `end`可选

    在该索引处结束提取原数组元素（从0开始）。`slice`会提取原数组中索引从 `begin` 到 `end `的所有元素（包含begin，但不包含end）。

    `slice(1,4)` 提取原数组中的第二个元素开始直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。

    如果该参数为负数， `则它表示在原数组中的倒数第几个元素结束抽取`。 `slice(-2,-1)`表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。

    如果 `end` 被省略，`则slice` 会一直提取到原数组末尾。

    如果 `end 大于数组长度，slice 也会一直提取到原数组末尾。`

  ```
  //对于类数组，slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。你只需将该方法  //绑定到这个对象上。 一个函数中的 arguments 就是一个类数组对象的例子。
  function list() {
    return Array.prototype.slice.call(arguments);
  }
  
  var list1 = list(1, 2, 3); // [1, 2, 3]
  //除了使用 Array.prototype.slice.call(arguments)，你也可以简单的使用 [].slice.call(arguments) //来代替。
  
  ```

- `join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。 

  ```
    var arr = [1,2,3]
      Array.prototype.join.call(arr,'-') //"1-2-3"
      arr.join.call(arr,'-')//"1-2-3"
    //join方法不会改变数组！
    //手写join方法:
    Array.prototype.join=function(string){
              let result=this[0]||''
              //console.log(this)
              //console.log(string)    
              for(let i=1;i<this.length;i++){
              //console.log(this[i])
              result=result+string+this[i]
              //console.log(result)
              }
              return result
          }
          var arr = [1,2,3]
          console.log(arr.join.call(arr,'-'))
  ```

  

- ` slice() `方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。 

  ```
  var arr = [1,2,3,4,5]
  var brr=Array.prototype.slice.call(arr,1,3)
  console.log(arr) //[1,2,3,4,5]
  console.log(brr)  //[2,3] 
   //slice方法不会改变数组！
   //手写join方法:
    Array.prototype.slice=function(begin,end){
          let result=[]
          begin = begin || 0
          end = end || this.length
          for(let i=begin;i<end;i++){
             result.push(this[i])
          }
          return result
    }
  ```

  