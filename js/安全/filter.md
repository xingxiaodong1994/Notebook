```js 
过滤字符 和检测 特殊字符 js
// var str1 = str.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');// 去掉转义字符 
// var str2= str.replace(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g, '');// 去掉特殊字符
// return str2;

 

var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/); 
return ( containSpecial.test(s) ); 判断是否含有

var filterRule= /[^0-9a-zA-Z_]/g; 
var judge= filterRule.test(str); //判断传进来的数据是否含有特殊字符。test函数返回匹配结

 

var rows=JSON.stringify(rows);////将json对象转换成json对符串 
var rows=JSON.parse(rows);//将json字符串转换成json对象
```