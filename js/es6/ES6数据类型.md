数据类型

`number string boolean null undefined object symbol`

`Symbol()是个全局函数，但是不能new Symbol()//报错`

`symbol`是一个基本数据类型！

```
a=Symbol('xxx')//'xxx'可以看做注释
b=Symbol('xxx')
a===b//false
obj=new Object()
obj[a]='sssss'//symbol可以作为对象的属性
//Symbol()可以看做全局唯一的字符串，唯一用法作为对象的属性
```

```
{
    let a=Symbol()
    let object={
        name:'000',
        age:18,
        [a]:'隐藏属性'
    }
    window.object=object
}//自己可以访问到隐藏属性，别人无法访问到'隐藏属性'
```

新增object对象Set

```
a=new Set([1,2,3,4,4,4,4])//a:[1,2,3,4]
Set()自动去重，无论是原始值还是原始引用
```

```
//es5去重
function uniq(array){
    let result=[]
    let hash={}
    for(let i=0;i<array.length;i++){
        hash[array[i]]=true
    }
    for(let key in hash){
        result.push(key)
    }
    return result
}//缺点值是字符串,无法区分number4和'4',无法统计对象
let a=[1,2,3,4,4,1]
uniq(a)

//es6
function uniq(array){
    return Array.from(new Set(array))
}
```

