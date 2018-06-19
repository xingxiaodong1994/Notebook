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



 





