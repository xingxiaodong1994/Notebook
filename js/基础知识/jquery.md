# jquery API 常用介绍

1. class的添加和移除

   `$("p").removeClass("myClass noClass").addClass("yourClass"); `

2. 找到兄弟元素

   `.siblings()`

3. 找到离当前元素最近的父亲元素(从里面往外面找)

   `.closest('div')`

4. 找到离当前元素父亲元素

   `.parent()`

5. 找到后代元素

   `find()`

6. 获取元素当前坐标

   `offset()//{top:0,left:0}`

7. 元素为同类元素中数组下标

   `index()//0 1 2`

8. 把`非jquery`对象包裹为`jquery`对象

   `eq()`

9. 为一个元素包裹一个div

   `$(element).wrap("<div></div>")`

10. 获取当前元素的高度

    ```
    height()//当前元素内容高度
    outerHeight()//当前元素高度:内容+padding+border
    outerHeight(true)//当前元素高度:内容+padding+border+margin
    ```

11. 清空当前元素

    ```
    $('div').empty()
    ```

    

12.当前元素后面插入一个元素

```
$('div').after('<ol></ol>')
```

13. 当前元素里面插入一个子元素

```
$('<ol></ol>').append('</li></li>')
```

