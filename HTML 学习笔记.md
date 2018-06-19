#  HTML 学习笔记

标签： HTML

---

# 概述
**HTML** (HyperText Markup Language)不是一门编程语言；而是一门**标记语言**。

以下是一句普通的话
>1. My cat is very kawaii

在HTML中如何**标记**这行话呢？
>1. &lt;p class="p1"&gt; My cat is very kawaii &lt;/p&gt;

进一步分析这句话
>1.开始标签（Opening tag）：&lt;p&gt;
>>这表示元素开始或开始生效 - 在这种情况下，表示了一个段落的开头。

>2.结束标签（Closing tag）：&lt;/p&gt;
>> 这表示元素结束的位置 - 在这种情况下，表示了一个段落的结尾.

>3.内容（Content）：My cat is very kawaii
>>这是元素的内容，在这种情况下只是文本。

>4.元素（Element）： &lt;p&gt; My cat is very kawaii &lt;/p&gt;
>>开始标记，加结束标记，加内容，等于元素。
>>**空元素**：只有一个标签的元素，不能添加内容。例如  &lt;img&gt;标签

>5 属性（Attribute）:class="p1"
>>(1)在元素和属性之间有个空格space (如果有一个或多个已存在的属性，就与前一个属性之间有一个空格.)
>>(2)属性后面紧跟着一个“=”符号.
>>(3)有一个属性值,由一对引号“ ”引起来.
>>(4)**布尔属性**:一些没有值的特殊属性，但它是合法的。例如 ***disabled*** 属性，他们可以标记表单输入使之变为不可用(变灰色)，此时用户不能向他们输入任何数据。
# 最简单的HTML文档
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Html document</title>
  </head>
  <body>
    <p>This is my document</p>
  </body>
</html>
```
>解释
``` <!DOCTYPE html> 声明这是HTML文档 .```
``` <html></html>: <html>元素。```
``` <head></head>: <head>元素。 ```
``` <body></body>: <body>元素。```
```<title></title>: 设置标题。```
```<meta charset="utf-8">: 使用utf-8字符集编码```
# 常用HTML标签
## meta 标签：
```
<meta name="" content="">
```
> * name 特性指定了meta 元素的类型; 说明该元素包含了什么类型的信息。
> * content 指定了实际的元数据内容。

## 为文档指定字符编码
```<meta charset="utf-8">: 使用utf-8字符集编码```

## 为文档页面添加图标
```<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">```

## 为文档添加主语言 
```<html lang="zh-Hans">：使用中文简体```

## 为文档添加外部CSS样式
```<link rel="stylesheet" herf="my-css-file.css">```

## 为文档添加脚本文件javascript
```<script src=""my-js-file.js></script>```

## 为文档添加标题和段落
```
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```
> <h1>一级标题</h1>
> <h2>二级标题</h2>
> <h3>三级标题</h3>
> <h4>四级标题</h4>
> <h5>五级标题</h5>
> <h6>六级标题</h6>

```<p>这是一个段落</p>```
> <p>这是一个段落</p>



