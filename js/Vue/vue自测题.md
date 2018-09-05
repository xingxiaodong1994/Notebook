# `vue`文档阅读

1. 安装与介绍

   - `Vue `**不支持** `IE8` 及以下版本 

   - `Vue `是一套用于构建用户界面的渐进式框架

   - `Vue`中用{{data}}将数据data渲染进DOM系统

```

html
     <div id="app">
       {{message}}
     </div>
     js
     
     var app = new Vue({
       el: '#app',
       data: {
         message: 'Hello Vue!'
       }
     })
     //Vue中用{{data}}将数据data渲染进DOM系统
```

`Vue`绑定元素特性使用``v-bind:titie="message"`

```
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
//绑定时可以省略v-bind,直接写:title="message",双引号也可以省略不写，Vue会自动识别，建议写全！
```

`Vue`切换元素在DOM中的显示和移除` <p v-if="seen">现在你看到我了</p>`	

```
//html

<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
//js

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})
//用户看不见该 p 元素是因为该 p 元素没有出现在 DOM 结构中
```

`Vue`用` <li v-for="todo in todos">`遍历`数组todos`中数据，并展示在页面的`li`元素中

```
html

<div id="app-4">
  <ol>
    <li v-for="todo in todos">//todo of todos也可以！！！
      {{ todo.text }}
    </li>
  </ol>
</div>
js

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```

`Vue`用`  <button v-on:click="reverseMessage">逆转消息</button>`监听事件

```
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>
</div>
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
//注意关键字methods;函数必须写在methods中Vue才能找到
```

每个 `Vue `实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。 

缩写

```
v-bind 缩写
	完整语法
	<a v-bind:href="url">...</a>
	缩写 
	<a :href="url">...</a>
	
v-on 缩写
	完整语法
	<a v-on:click="doSomething">...</a>
	缩写
	<a @click="doSomething">...</a>
```

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让 模板过重且难以维护

对于 Vue 模板中任何复杂逻辑，你都应当使用 计算属性computed

```
html

<div id="app">
    <span>
      {{computedMessage}} 
      {{computedMessage}} 
      {{computedMessage}} 
    </span>
    <span>
      {{calcMessage()}}
      {{calcMessage()}}
      {{calcMessage()}}
    </span>
  </div>
js

var app = new Vue({
  el: '#app',
  data: {
    message: 'hi'
  },
  computed:{
    computedMessage(){
      console.log('computed')
      return 'computed ' + this.message
    },
  },
  methods:{
    calcMessage(){
      console.log('methods')
      return 'calc ' + this.message
    }
  }
})//一次 computed，三次 methods
```

watch

```
html

<div id="app">
    <span>
       {{count}}
    </span>
    <div>
      <button @click="count+=1">+1</button>
      <button @click="count-=1">-1</button>
    </div>
    <div>
      你改了 {{modified}} 次
    </div>
  </div>
js

var app = new Vue({
  el: '#app',
  data: {
    count: 1,
    modified: 0
  },
  watch:{
    count(){
      this.modified += 1
    }
  }
})
//如果我点击 +1 按钮 3 次，然后点击 -1 按钮 1 次，请问最终 modified 的值为多少？//4
//如果 count 变成了 obj.count，那么要如何写代码才能监听 obj.count 的变化？
var app = new Vue({
  el: '#app',
  data: {
    obj:{count: 1},
    modified: 0
  },
  watch:{
    'obj.count':function(){
      this.modified += 1
    }
  }
})
//如果 obj 有 N 个属性，要怎么才能监听所有属性呢？
var app = new Vue({
  el: '#app',
  data: {
    modified: 0,
    obj: {a:1,b:2,c:3}
  },
  created(){
      this.$watch('obj', ()=>{
        this.modified += 1
      }, {deep:true})
  }
})
```

