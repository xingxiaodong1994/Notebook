## ES6 课程


# ES6与JS

 ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现


# ES6 stage

Stage 0 - Strawman（展示阶段）
Stage 1 - Proposal（征求意见阶段）
Stage 2 - Draft（草案阶段）
Stage 3 - Candidate（候选人阶段）
Stage 4 - Finished（定案阶段



# ES6 语法测试

- 安装babel命令行

```bash

	$ cnpm install babel-cli

```


[参考文档](http://es6.ruanyifeng.com/)

ES6
变量声明 let const
当参数不定的时候使用`...args`
function(a,b,...c){
	console.log(c)
}
支持参数初始值设定
function(a,b=3){
	console.log(c)
}
箭头函数this会绑定上下文
解构赋值 destructuring
	{x,y}={x:1,y:2}//x===1,y===2
module模块
	模块1:`export let a=1` ,路径'./module1.js'
	模块2:`import {a} from './module1.js' console.log(a)//1 `
	原理通过webpack、gulp编译，使用关键字require,执行
class 类
	```js
	class A{
		constructor(){
			this.name=name
		}
		eat(){}
	}
	class B extends A{
		constructor(){
			super()
		}
	}
	```
promise
	microtask and macrotask
	macrotasks:
		setTimeout
		setInterval
		setImmediate
		requestAnimationFrame
		I/O
		UI rendering
	microtasks:
		process.nextTick
		Promises
		Object.observe
		MutationObserver
fulfilled pending rejected

generator
	// 一是，function关键字与函数名之间有一个星号；
	// 二是，函数体内部使用yield语句，定义不同的内部状态（yield在英语里的意思就是“产出”）	。
	function* helloWorldGenerator() {
	  yield 'hello';
	  yield 'world';
	  return 'ending';
	};
	var hw = helloWorldGenerator();
	let a = hw.next();
	let b = hw.next();
	let c = hw.next();
	console.log(a,b,c,d)
AMD:Async Module Definition//异步 模块 定义
	define(['jquery'],function(){
		return{}
	})
	require(['./xxx'],function(xxx){
		console.log(xxx)
	})
CommonJS