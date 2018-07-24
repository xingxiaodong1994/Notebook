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

## 1, undefined

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
## 2, null

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
## 4.number

 ###  整数和浮点数

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

```
0 === -0 // true

0 === +0 // true 
```

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
>2.如果parseInt的参数不是字符串，则会先转为字符串再转换
>3.字符串转为整数的时候，是一个个字符依次转换，如果遇到不 能转为数字的字符，就不再进行下去，返回已经转好的部分。
>4.如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。

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

## string
### 字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。
>* 如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。
>   如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

```    
var longString = 'Long \

long \

long \

string';

longString

// "Long long long string"

```
var longString = 'Long '
  + 'long '
  + 'long '
  + 'string';
  ```
  
 如果想输出多行字符串，有一种利用多行注释的变通方法。
  
 `
 (function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')
// "line 1
// line 2
// line 3"
`

反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符
>**\0 ：null（\u0000）
\b ：后退键（\u0008）
\f ：换页符（\u000C）
\n ：换行符（\u000A）
\r ：回车键（\u000D）
\t ：制表符（\u0009）
\v ：垂直制表符（\u000B）
\' ：单引号（\u0027）
\" ：双引号（\u0022）
\\ ：反斜杠（\u005C）**

特殊用法：用来表示字符
  ```
'\251' // "©"
'\xA9' // "©"
'\u00A9' // "©"

'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
```

字符串是特殊的字符数组，可以用数组遍历它
```
var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 直接对字符串使用方括号运算符
'hello'[1] // "e"

'abc'[3] // undefined
'abc'[-1] // undefined
'abc'['x'] // undefined
```

length属性返回字符串的长度，该属性也是无法改变的。

我们还需要知道，每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。
JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。四字节字符𝌆，浏览器会正确识别这是一个字符，但是JavaScript无法识别，会认为这是两个字符。
```
'𝌆'.length //2
```

### 5.Base64 转码
所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。
>btoa()：任意值转为 Base64 编码
atob()：Base64 编码转为原来的值

btoa('你好') // 报错
非ASCII码会报错，需要加入转码才可以正常显示
```
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
```

## 运算符
加法：
```
true + true // 2
1 + true // 2
'a' + 'bc' // "abc"
1 + 'a' // "1a"
false + 'a' // "falsea"
```
加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。
```
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"
```
除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。
​```1 - '2' // -1
1 * '2' // 2
1 / '2' // 0.5
```

### 对象的相加：
```
var obj = { p: 1 };
obj + 2 // "[object Object]2"


对象相加，会把对象转换为原始类型的值，再相加；
 var obj = { p: 1 };
obj.valueOf().toString() // "[object Object]" 
知道了这个规则以后，就可以自己定义valueOf方法或toString方法，得到想要的结果。
```
```
 valueOf: function () {

    return 1;

  }

};

obj + 2 // 3

var obj = {

  toString: function () {

    return 'hello';

  }

};

obj + 2 // "hello2"

```

这里有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法。

```
var obj = new Date();

obj.valueOf = function () { return 1 };

obj.toString = function () { return 'hello' };

obj + 2 // "hello2"

```

上面代码中，对象obj是一个Date对象的实例，并且自定义了valueOf方法和toString方法，结果toString方法优先执行。

十种运算符
>加法运算符：x + y
>减法运算符： x - y
>乘法运算符： x * y
>除法运算符：x / y
>指数运算符：x ** y
>余数运算符：x % y
>自增运算符：++x 或者 x++
>自减运算符：--x 或者 x--
>数值运算符： +x
>负数值运算符：-x

### 注意负数取余由第一个数的正负决定
```
-1 % 2 // -1

1 % -2 // 1

```


所以需要用到绝对值函数Math.abs（）

```
// 错误的写法

function isOdd(n) {

  return n % 2 === 1;

}

isOdd(-5) // false

isOdd(-4) // false

// 正确的写法

function isOdd(n) {

  return Math.abs(n % 2) === 1;

}

isOdd(-5) // true

isOdd(-4) // false

```

### 注意自增自减运算
自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。

```
var x = 1;

var y = 1;

x++ // 1

++y // 2

```

## 比较运算符

> < 小于运算符
>
> (>)大于运算符
>
> <= 小于或等于运算符
> = 大于或等于运算符
> == 相等运算符
> === 严格相等运算符
> != 不相等运算符
> !== 严格不相等运算符

### 字符串的比较
JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。

```

'cat' > 'dog' // false
'cat' > 'catalog' // false

```
### 非字符串的比较
两个原始类型的值的比较，除了相等运算符（==）和严格相等运算符（===），其他比较运算符都是先转成数值再比较。

原始类型比较

```
5 > '4' // true

// 等同于 5 > Number('4')

// 即 5 > 4

true > false // true

// 等同于 Number(true) > Number(false)

// 即 1 > 0

2 > true // true

// 等同于 2 > Number(true)

// 即 2 > 1

```

对象比较
```
var x = [2];

x > '11' // true

// 等同于 [2].valueOf().toString() > '11'

// 即 '2' > '11'

x.valueOf = function () { return '1' };

x > '11' // false

// 等同于 [2].valueOf() > '11'

// 即 '1' > '11'
```
严格相等‘===’
```
>NaN === NaN  // false
+0 === -0 // true

>{} === {} // false
[] === [] // false
(function () {} === function () {}) // false

>undefined === undefined // true
null === null // true
//由于变量声明后默认值是undefined，因此两个只声明未赋值的变量是相等的。
var v1;
var v2;
v1 === v2 // true
```
### 相等运算符

```1 == true // true
// 等同于 1 === Number(true)

0 == false // true

// 等同于 0 === Number(false)

2 == true // false

// 等同于 2 === Number(true)

2 == false // false

// 等同于 2 === Number(false)

'true' == true // false

// 等同于 Number('true') === Number(true)

// 等同于 NaN === 1

'' == 0 // true

// 等同于 Number('') === 0

// 等同于 0 === 0

'' == false  // true

// 等同于 Number('') === Number(false)

// 等同于 0 === 0

'1' == true  // true

// 等同于 Number('1') === Number(true)

// 等同于 1 === 1

'\n  123  \t' == 123 // true

// 因为字符串转为数字时，省略前置和后置的空格

```

原始类型的数据会转换成数值类型再进行比较。
```
[1] == 1 // true

// 等同于 Number([1]) == 1

[1] == '1' // true

// 等同于 Number([1]) == Number('1')

[1] == true // true

// 等同于 Number([1]) == Number(true)

```
数组[1]与数值进行比较，会先转成数值，再进行比较；与字符串进行比较，会先转成数值，然后再与字符串进行比较，这时字符串也会转成数值；与布尔值进行比较，两个运算子都会先转成数值，然后再进行比较。

特殊情况

```
0 == ''             // true

0 == '0'            // true

2 == true           // false

2 == false          // false

false == 'false'    // false

false == '0'        // true

false == undefined  // false

false == null       // false

null == undefined   // true

' \t\r\n ' == 0     // true

```
## 布尔运算符

```
!undefined // true

!null // true

!0 // true

!NaN // true

!"" // true

!false // true

//以上取反为true，其他为false。

!54 // false

!'hello' // false

![] // false

!{} // false

```
两次取反等同于Boolean()函数
!!x
// 等同于
Boolean(x)

且运算&&
或运算||

```
function saveText(text) {

  text = text || '';

  // ...

}

// 或者写成

saveText(this.text || '')
```
三元条件运算符（?:）
```
't' ? 'hello' : 'world' // "hello"

0 ? 'hello' : 'world' // "world"

```
如果第一个表达式的布尔值为true，则返回第二个表达式的值，否则返回第三个表达式的值。

位运算符(7个)

二进制或运算符（or）：符号为|，表示若两个二进制位都为0，则结果为0，否则为1。
二进制与运算符（and）：符号为&，表示若两个二进制位都为1，则结果为1，否则为0。
二进制否运算符（not）：符号为~，表示对一个二进制位取反。
异或运算符（xor）：符号为^，表示若两个二进制位不相同，则结果为1，否则为0。
左移运算符（left shift）：符号为<<，详见下文解释。
右移运算符（right shift）：符号为>>，详见下文解释。
带符号位的右移运算符（zero filled right shift）：符号为>>>，详见下文解释。
----------------------------------------

视频笔记2018.7.11

###  1.历史

**1**.浏览器、网页、HTML 的发明者 ：**Berners-lee**李爵士

**2**. **Javascript**设计者 **Brendan Eich**

**3**. **Javascript**标准**ECMAscript**标准。

### 2.数据类型转换

其他类型转换为**数字**

```
number('2') ;         //2
'2'-0;                //2
'2'                   //2
 parseInt('12',10)    //12
 parseFloat('1.23')   //1.23
```

其他类型转换为**字符串**,注意**String()中'S'**大写！！！

```
注意String()中'S'大写！！！
var a=123;
a.toString();// '123'

string(123); // '123'

123+''       //  '123'

var a=null;
a.toString();// 报错
var a=undefined;
a.toString();// 报错

String(null); //'null'
String(undefined); //'undefined'
null+''       //  'null'
undefined+''       //  'undefined'

var b={name:'andy',age:18}
toString(b)
// "[object Undefined]"     //为什么？不理解。
String(b)
// "[object Object]"
b+''
// "[object Object]"

```

其他类型转换为**布尔值** , 注意**Boolean中'B'大写**！！！

```
注意Boolean中'B'大写！！！
Boolean(1) //true
!!1 //true 两次取反转换为布尔值

5种为false的情况，其他全部为true；
!!('');//false   !!("");//false
!!(0);//false
!!(NaN);//false
!!(null);//false
!!(undefined);//false

```

**内存图**

储存

```
var a=1; 
var b='andy';
var c={name:'lee',age:18}
```



| 代码区 | 数据区：stack栈内存                             | 数据区：heap堆内存           |
| ------ | ----------------------------------------------- | ---------------------------- |
| a      | 以1的64位浮点数存储；                           | 地址100：                    |
| b      | 'andy' 的以字符编码的方式存储，每个字符占16位； | 地址502：{name:'lee',age:18} |
| c      | 地址502                                         | 地址442：                    |

**浏览器在存储对象时，使用引用的方法，即在stack内存区存地址，在heap内存区存实际的数据**！！！

### 垃圾回收

如果一个对象没有被引用，它将被浏览器回收！

### 内存泄漏

**但是**IE6有一个BUG,导致一些没有被引用没有被回收，出现了**内存泄漏！！！**

## 3.**原型与原型链**

### 全局对象window

1.  ECMAScript 规定全局对象叫做 global，但是浏览器把 window 作为全局对象（浏览器先存在的）.
2. window 就是一个哈希表，有很多属性。  

### 全局函数

在浏览器window属性中，预制了许多实例函数，就是全局函数。

例如：

1. Number

   `Number var n = new Number(1) //创建一个 Number 对象 `

2. String 

   `var s = new String('hello') //创建一个 String 对象` 

3. Boolean

    `var b = new Boolean(true) //创建一个 Boolean 对象 `

4. Object

    `var object = new Object({}) //创建一个 普通 对象 `

5. Function

    `var f = new Function() //创建一个 Function 对象 `

### 构造函数与原型

1. **构造函数**      .prototype====>         **原型**
2.  **原型**          .constructor====>    **构造函数**

### 构造函数与实例

​	 **在` javascript` 中，函数就有2个功能** 

  - 1. 作为一般函数调用

  - 2. 作为它**原型对象的构造函数** 也就是  **new（）** 

   那么当我们使用函数的第2种功能**new（）** 时，我们**实际做了什么事情？**

​	 其实我们做了**两件事情**： 

1. 创建了一个函数实例

2. 创建一个函数实例的原型

   我们可以通过函数实例的`.prototype`属性指向原型。

   同时我们也可以通过原型的`.constructor`属性指向函数实例。

   |  函数实例  | 指向  |         原型         |
   | :--------: | :---: | :------------------: |
   |  `Number`  | ====> |  `Number.prototype`  |
   |  `String`  | ====> |  `String.prototype`  |
   | `Boolean`  | ====> | `Boolean.prototype`  |
   |  `Object`  | ====> |  `Object.prototype`  |
   | `Function` | ====> | `Function.prototype` |

   

   |  原型的`.constructor`属性  | 等于 |         函数实例         |
   | :--------: | :---: | :------------------: |
   |  `Number.prototype.constructor`  | === |  `Number`  |
   |  `String.prototype.constructor`  | === |  `String`  |
   | `Boolean.prototype.constructor`  | === | `Boolean`  |
   |  `Object.prototype.constructor`  | === |  `Object`  |
   | `Function.prototype.constructor` | === | `Function` |

   那么，**函数实例**和它的构造函数有什么联系呢？

   1. 函数实例和构造函数之间并不是孤立的，函数实例可以通过`函数实例.constructor`属性来继承使用构造函数本身自带的一些属性，即

       ###    `函数实例.constructor===构造函数`

   |  函数实例`.__proto__`  | 等于 |         构造函数         |
   | :--------: | :---: | :------------------: |
   |  `Number.constructor`  | === |  `Function`  |
   |  `String.constructor`  | === |  `Function`  |
   | `Boolean.constructor`  | === |  `Function`  |
   |  `Object.constructor`  | === |  `Function`  |
   | `Function.constructor` | === |  `Function`  |

   2. 函数实例可以通过`函数实例.__proto__`属性来继承使用构造函数原型的一些属性，即

|  函数实例`.__proto__`  | 等于 |         构造函数         |
| :--------: | :---: | :------------------: |
|  `Number.__proto__`  | === |  `Function.prototype`  |
|  `String.__proto__`  | === |  `Function.prototype`  |
| `Boolean.__proto__`  | === |  `Function.prototype`  |
|  `Object.__proto__`  | === |  `Function.prototype`  |
| `Function.__proto__` | === |  `Function.prototype`  |

​      最烧脑的地方来了！！！

函数实例的原型也可以看做是一个对象，那么它也可以通过`.__proto__`属性来继承对象原型的一些属性。

|  函数实例原型（对象）`.__proto__`  | 等于 |         对象原型         |
| :--------: | :---: | :------------------: |
|  `Number.prototype.__proto__`  | === |  `Object.prototype`  |
|  `String.prototype.__proto__`  | === |  `Object.prototype`  |
| `Boolean.prototype.__proto__`  | === |  `Object.prototype`  |
|  `Object.prototype.__proto__`  | === | 主要对象的原型不能再当做对象使用！！！ |
| `Function.prototype.__proto__` | === |  `Object.prototype`  |

由于**主要对象的原型不能再当做对象使用！！！**

所以:

### `Object.prototype.__proto__===null`
# 函数
- **函数声明**
 1. 匿名函数
     `function (){}`

 2. 具名函数
     `function f(){}`

 3. 具名函数赋值

     ```
     var f1=function f2(){}
     
      f1.name// f2`
     
     ```

     

     

 4. window.Function

     ```
     var f=new Function('x','y','return x+y')
     
      f.name//anonymous匿名
     
     ```

     

     

 5. 箭头函数
     `(x,y)=>{x+y}`
 - **调用函数**
 f.call(asThis,input1,input2)
 - **函数作用域**
1. 变量提升
2. ```
    var liTags = document.querySelectorAll('li') 
    
    for(var i=0;i<liTags.length;i++){
    
     liTags[i].onclick = function(){
            console.log(i) // 点击第3个 li 时，打印 2 还是打印 6？
    }
    }
    
      //声明和执行函数时，变量都是i，但是i的值可能变了！
    
    ```

- **闭包**

  函数和函数能访问变量的总和组成一个闭包。

- **函数API**

  1. ```f.call(undefined,1,2)```其中第一个参数undefined是this的值，后面的参数（1,2）是arguments参数列表。

     

# 数组array

-  **数组的声明**

```
var a=new Array(3) //声明一个length为3的数组。
var a=new Array([3])//声明一个length为1,a[0]==3的数组。
var a=new Array(3,3)//声明一个length为2,a[0]==3,a[1]==3的数组。

```

数组在声明的同时，它还自带一个属性`__Proto__`.

```
a.__proto__===Array.prototype
```

注意：伪数组的原型链中不包括`Array.prototype`

决定一个对象是不是数组的唯一依据，它的原型链包含`Array.prototype`

```
a=[1,2,3];
a.xxx='xxx';
a // [1, 2, 3, xxx: "xxx"]
Array.isArray(a) //true //数组中可以有非数组项！！！
```



- **数组的遍历**

  1. ```
     for(var i=0;i<arr.length;i++){}
     ```

  2. ```
     for(var key in arr){}  //把数组看做对象来遍历。
     ```

- **数组的API**

   - arr.push()

   - arr.pop()

   - arr.shift()

   - arr. concat (brr)

     

- 数组的判断：`Array.isArray(arr) //true`判断此arr变量是否为数组，返回boolean值。

   ```
   var arr=[1,2,3];
   arr.toString() //"1,2,3"
   arr.valueOf() //[1,2,3]
   ------
   arr.push('a') //返回数组长度：4  //[1,2,3,'a']在原数组末尾添加元素，并返回数组的长度。
   arr.pop() //返回删除元素：'a'    //[1,2,3]删除数组最后一个元素，并返回删除的元素。
   ------
   arr.unshift('b') //返回数组长度：4 //['b',1,2,3]在数组的第一个位置添加元素，并返回数组长度
   arr.shift()    //返回删除元素：'b'  //[1,2,3]删除数组的第一个元素，并返回删除的元素。
   ------
   arr.join() //'1,2,3' 把数组以指定参数分割后，再连接在一起以字符串返回，默认以','分割。
   arr.join()可以用于深拷贝！！！
   arr.join('-') //1-2-3
   ------
   arr.concat([4,5,6]) // [1,2,3,4,5,6] //将多个数组合并返回新数组，原数组不变。//浅拷贝
   ------
   arr.reverse()//[3,2,1] //颠倒数组，返回改变后数组。 //此方法会改变原数组。
   ------
   arr.slice(0,2)//[3,2] //截取数组从a[0]到a[2],但不包含a[2].原数组不改变。
   arr// [3,2,1]
   ------
   arr// [3,2,1]
   arr.map((n)=>{n+1}) //[4,3,2] //map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。注意此方法不改变原数组。
   arr//[3,2,1]
   ------
   arr.forEach()//forEach方法与map方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法。
   forEach()必须接受一个函数作为参数，否则报错。而且forEach()本身会提供给函数三个参数（elem, index, arr）当前成员，当前位置和数组本身，供函数来操作数组。
   
   
   ```

   # DOM(Document Object Model)

- 它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。 

## 节点的七种类型

1. **Document**:整个文档树最顶层的节点。
2. **DocumentType**: 文档类型doctype标签（比如`<!DOCTYPE html>`）
3. **Element**:网页各种html标签。
4. **Attribute**:网页元素的各种属性
5. **Text**:标签之间的文本。
6. **Comment**:注释
7. **DocumentFragment**:文档片段

## DOM树结构

1. #document （**Document**节点，文档树最顶层节点，浏览器原生节点对象）
2. `<!DOCTYPE html>`(**DocumentType节点**: 声明文档类型)
3. `<html></html>`(**Element节点**：文档第一层节点又称（**root node**根节点）)
4. 其他节点：Elememt节点、Text节点、Comment节点、Attribute节点。
   1. 其他节点都有三种层级关系。
      - 父节点关系（parentNode）：直接的那个上级节点
      - 子节点关系（childNodes,firstChild,lastChild）：直接的下级节点
      - 同级节点关系（nextSibling,previousSibling）：拥有同一个父节点的节点

## Node接口

- `Node.nodetype`通过此属性可以判断节点的类型，它会返回一个与该节点类型对应的`无符号短整型`的值，可能的值如下： 

  | 节点类型                     | 返回值                   | 对于数字 |
  | ---------------------------- | ------------------------ | -------- |
  | 元素节点Element              | `ELEMENT_NODE`           | 1        |
  | 文本节点Text                 | `TEXT_NODE`              | 3        |
  | 注释节点Comment              | ` COMMENT_NODE `         | 8        |
  | 文档节点Document             | `DOCUMENT_NODE`          | 9        |
  | 文档类型节点`DocumentType`   | `DOCUMENT_TYPE_NODE`     | 10       |
  | 文档片段节点DocumentFragment | `DOCUMENT_FRAGMENT_NODE` | 11       |

  - **Node.textContent**与**Node.innerText**区别

    - `textContent` 会获取所有元素的内容，包括`<script>`和`<style>`元素，然而 `innerText` 不会。

    - `innerText` 受 CSS 样式的影响，并且不会返回隐藏元素的文本，而textContent会。

    - 由于 `innerText` 受 CSS 样式的影响，它会触发重排（reflow），但`textContent` 不会。

    - `与 textContent 不同的是`, 在 Internet Explorer (对于小于等于 IE11 的版本) 中对 innerText 进行修改， 不仅会移除当前元素的子节点，而且还会永久性地破坏所有后代文本节点（所以不可能再次将节点再次插入到任何其他元素或同一元素中）。

  - **Node.textContent**与**Node.innerText**区别

    - `正如`其名称`，innerHTML` `返回` `HTML` `文本。`通常，为了在元素中检索或写入文本，人们使用innerHTML。但是，textContent通常具有更好的性能，因为文本不会被解析为HTML。此外，使用textContent可以防止  XSS 攻击。 

- `Node.isEqualNode()`与`Node.isSameNode()`区别

  - `Node.isEqualNode()`

    返回一个`Boolean`指示两个节点是否属于同一类型且拥有相同的内容。

  - `Node.isSameNode()`

    返回一个`Boolean`值，指示两个节点是否是同一个对象（即，它们引用同一对象）。

    此方法已经**废弃**，用`node1===node2`或者`node1==node2`代替

- `cloneNode()`

  - `cloneNode()`或者`cloneNode(false)`表示只克隆节点本身。
  - `cloneNode(true)`表示深度克隆，该节点的所有后代节点也都会被克隆 。

- `Node.normalize()`

  `Node.normalize() `方法将当前节点和它的后代节点”规范化“（normalized）。在一个"规范化"后的DOM树中，不存在一个空的文本节点，或者两个相邻的文本节点。

  - 注1：“空的文本节点”并不包括空白字符(空格，换行等)构成的文本节点。

  - 注2：两个以上相邻文本节点的产生原因包括：

    - 通过脚本调用有关的DOM接口进行了文本节点的插入和分割等。
    - HTML中超长的文本节点会被浏览器自动分割为多个相邻文本节点。

## Document接口

以前常用：

- `getElementById()`
- `getElementsByClassName()`
- `getElementsByName()`
- `getElementsByTagName()`

现在常用：

- `querySelector()`
- `querySelectorAll()`