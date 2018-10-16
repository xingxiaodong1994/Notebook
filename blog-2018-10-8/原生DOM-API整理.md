## 原生`DOM`操作`API`整理

### DOM是什么？

​	DOM即`document object model`文档对象模型，它可以把HTML文档树映射为一颗DOM对象树。`html`中标签都上`DOM`中的一个个节点Node。

### DOM干什么？

​	1. `javascrip`可以通过DOM对`html`进行动态操作，主要是HTML元素的增删改查。

### 常用`DOM`操作`API`.

 	1. 获取节点类型`Node.prototype.nodeType`
     - 元素节点(element)：`1===Node.ELEMENT_NODE`
     - 文本节点(text):`3===Node.TEXT_NODE`
    2. 获取节点文本值`Node.prototype.textContent`
    - 返回当前节点和它的所有后代节点的文本内容。
    - `textContent`会自动忽略节点内部 html标签
    3. 设置文本节点文本值，`Node.prototype.textContent("<p>你好！</p>")`
    - 该属性是可读写的，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点。它还有一个好处，就是自动对 HTML 标签转义。这很适合用于用户提供的内容。 

一. 获取元素

 1. 获取单个元素

    `let Element=document.querySelector('css选择器')`

		element就是一个HTML元素的DOM对象

2. 获取多个元素

   `let Elements=document.querySelectorAll('css选择器')`

   elements就是一个HTML元素组成的伪数组的DOM对象

二. 读取和设置元素属性

​    1.`Element.id`

​	 `Element.id`属性返回指定元素的`id`属性，该属性可读写。 

 2. `Element.title `

    `Element.title`属性用来读写当前元素的 HTML 属性`title`。该属性通常用来指定，鼠标悬浮时弹出的文字提示框 .

 3. `Element.classList`

    返回该元素节点的所有class,是一个伪数组。它有下列方法

    - `Element.classList.add('active')`

    - `Element.classList.remove('active')`

    - `Element.classList.toggle('active')`active不存在就加上，存在就移除。

      

 4. `Element.setAttribute('class','active') `

 5. `Element.removeAttribute('class')`

 6. 如果要给元素附加数据，可以使用`p.dataset.time='10-1'`//`<p data-time="10-1"></p>`

    

三. 读写元素的文本内容

	 1.  `Element.innerHTML`
	 2.  `Node.prototype.textContent`

四. 获取当前元素的父亲，儿子，上一个兄弟，下一个兄弟

 	1. `Element.parentElement`或者`Element.parentNode`
	2. `Element.children`
	3. `Element.nextElementSibling`
	4. `Element.previousElementSibling`

五. 获取当前元素所以兄弟元素节点

```
let element=document.querySelector('css 选择器')
let array=[]
let children=element.parentElement.children
for(let i=0;i<children.length;i++){
    if(children[i].nodeType === 1 && children[i] !== element){
        array.push(children[i])
    }
}
console.log(array)//element的所有兄弟元素
```

六. 创造一个元素标签

1. `document.creatElement('div')`

七。移除元素标签

1. `Element.remove()`

2. ```
   var element = document.getElementById('top');
   while (element.firstChild) {
     element.removeChild(element.firstChild);
   }
   //移除所以孩子节点
   ```

3. 

八. 插入一个元素标签

1. `Element.prepend(节点)//在子元素最前面插入子节点`
2. `Element.append(节点)//在子元素最后面插入子节点`
3. `Element.before(节点)//在当前元素前面插入节点`
4. `Element.after(节点)//在当前元素后面插入节点`

```
   let p1=document.createElement('p')
   let p2=document.createElement('p')
   p1.innerHTML='lllaaa'
   p2.innerHTML='lllaaalll'
   let main=document.querySelector('body')
   main.appendChild(p1)
   main.append(p2)
   //注意添加子节点之前，必须先创造这个节点！！！
   // main.append('<div>这是一个div</div>')报错！！//这是在添加字符串！！！
```

