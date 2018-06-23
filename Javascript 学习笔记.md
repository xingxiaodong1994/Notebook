# Javascript 学习笔记

标签： Javascript

---

## 条件语句
### if语句
```if(布尔值){语句}else{语句} ```
### switch语句
``` 
seitch(表达式或变量){
case true:
     语句
     break;
case true:
     语句
     break;
default:
} 
```
### 三元运算符
```
(条件)？表达式1 ： 表达式2
```
上面如果“条件”为true，则返回表达式1值；否则返回表达式2的值
## 循环语句
While循环
```
while(条件){语句};
```
while循环语句包括一个循环条件和一段代码块，只要条件满足就不断循环执行代码块
## for循环
```
for(初始化表达式;条件;递增表达式;){语句}
```
所以for循环都可以改成while循环。
for循环（initialize、test、increment），可以省略任何一个，也可以全部省略。
## do while 循环
```
do{语句}while（条件）;
```
特点：不管条件是否成立，语句都会先执行一次。
特别注意：while（条件）;最后的分号不能省略。
## break语句和continue语句
```
<script>
for(var i=0;i<10;i++)
{
    console.log(i);
    if(i===5){break;}
}
</script>
//0 1 2 3 4 5
```
当i为5时，跳出for循环。
``` 
<script>
for(var i=0;i<10;i++)
{
     if(i===5){break;}
     console.log(i);
}
</script>
//0 1 2 3 4 6 7 8 9 

```
当i为5时，结束本次循环，继续执行下次循环。
## 标签（lable）
```
label:
  语句
```
lable 可以是任意标识符;常和break语句和contunie语句一起使用，跳出特定循环。
```
 <script>
     top: //（label:）注意“:”不能丢！！！
        for (var i = 0; i < 3; i++){
          for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1){ break top;}
            console.log('i=' + i + ', j=' + j);
          }
        }
     // i=0, j=0
        i=0, j=1
        i=0, j=2
        i=1, j=0
  </script>
```
加lable标签top;只接跳出双重循环.
```
 <script>
    for (var i = 0; i < 3; i++){
         for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1) {break;}
            console.log('i=' + i + ', j=' + j);
         }
    }
     // i=0, j=0
        i=0, j=1
        i=0, j=2
        i=1, j=0
        i=2, j=0
        i=2, j=1
        i=2, j=2
  </script>
```
如果不加lable标签;只能跳出当前循环.
## 数据类型
JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript的数据类型，共有六种。（ES6 又新增了第七种 Symbol 类型的值。）
>* 数值（number）：整数和小数（比如1和3.14）
>* 字符串（string）：文本（比如Hello World）。
>* 布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
>* undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
>* null：表示空值，即此处的值为空。
>* 对象（object）：各种值组成的集合。
>* symbol类型

**对象是最复杂的数据类型，又可以分成三个子类型。**

>* 狭义的对象（object）
>* 数组（array）
>* 函数（function）

**如何确定一个数据的类型呢？**
>* typeof运算符
>* instanceof运算符
>* Object.prototype.toString方法


用typeof运算符可以返回一个值得数据类型。

```
typeof 123 //"number"
typeof '123' //"string"
typeof false //"boolean"
typeof undefined //"undefined"
```
特殊返回类型
```typeof null //"object"```
> null的类型是object，这是由于历史原因造成的。1995年的
> JavaScript 语言第一版，只设计了五种数据类型（对象、整> > 数、浮点数、字符串和布尔值），没考虑null，只把它当作ob > jec t的一种特殊值。后来null独立出来，作为一种单独的数 > 据类型> ，为了兼容以前的代码，typeof 
> null返回object就没法改变了。
```
typeof a //"undefined"
```
>未定义变量，返回undefined
```
typeof function(){} //"function"
```
>函数返回的类型是"function"
```
typeof window //"object"
typeof [1,2,3] //"object"
```
数组是一种特殊的对象！！！

```
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```
```
Number(null) // 0
5 + null // 5

Number(undefined) // NaN
5 + undefined // NaN
```

##1, undefined
```
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```
##2, null
>null表示空值，即该处的值现在为空。调用函数时，某个参数>>未设置任何值，这时就可以传入null，表示该参数为空。比如>>，某个函数接受引擎抛出的错误作为参数，如果运行过程中未>>出错，那么这个参数就会传入null，表示未发生错误。
## 3,boolean布尔值
下列运算符返回Boolean值
>两元逻辑运算符： && (And)，|| (Or)
前置逻辑运算符： ! (Not)
相等运算符：===，!==，==，!=
比较运算符：>，>=，<，<=

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。
>undefined
null
false
0
NaN
""或''（空字符串）

但是！！！**空数组[]和空对象{}都是true**
```
if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}
// true
```
## number
### 整数和浮点数
>JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算
```
1===1.0 //true
```
由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。
```
0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```
### 正零和负零
``` -0 === +0 // true
0 === -0 // true
0 === +0 // true ```

> JavaScript 内部实际上存在2个0：一个是+0，一个是-0，区别就是64位浮点数表示法的符号位不同。它们是等价的。

### NAN
>NaN是 JavaScript 的特殊值，表示“非数字”（Not a Number）
```
5 - 'x' // NaN
0/0 //NAN
Math.acos(2) // NaN
Math.log(-1) // NaN
Math.sqrt(-1) // NaN

NaN === NaN // false

Boolean(NaN) // false

typeof NaN // 'number'
```
### Infinity(无穷)
```
// 场景一
Math.pow(2, 1024)
// Infinity

// 场景二
0 / 0 // NaN
1 / 0 // Infinity
```
### parseInt()
parseInt方法用于将字符串转为整数。
>1.如果字符串头部有空格，空格会被自动去除。
2.如果parseInt的参数不是字符串，则会先转为字符串再转换
3.字符串转为整数的时候，是一个个字符依次转换，如果遇到不 能转为数字的字符，就不再进行下去，返回已经转好的部分。
4.如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。
```
parseInt('123') // 123

parseInt('   81') // 81

parseInt(1.23) // 1
// 等同于
parseInt('1.23') // 1

parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15

parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1

parseInt('1000', 2) // 8
parseInt('1000', 6) // 216
parseInt('1000', 8) // 512
```
如果parseInt 有第二个参数，视为2-36进制转换
```
parseInt('10', 37) // NaN
parseInt('10', 1) // NaN
parseInt('10', 0) // 10
parseInt('10', null) // 10
parseInt('10', undefined) // 10
```
### parseFloat()
parseFloat方法用于将一个字符串转为浮点数。
```
parseFloat('\t\v\r12.2')
//12.2
parseFloat('\t\v\12.2')
//0.2
parseFloat('\t\s\12.2')
//NaN
```
这是为什么？
### isNAN()
isNaN方法可以用来判断一个值是否为NaN。
### isFinite()
isFinite方法返回一个布尔值，表示某个值是否为正常的数值。


 





