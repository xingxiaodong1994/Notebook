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
  
 ``` (function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')
// "line 1
// line 2
// line 3"
  ```

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
```1 - '2' // -1
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
```










 






```