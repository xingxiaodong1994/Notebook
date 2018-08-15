# MVC进阶技巧

## 1. MVC 基本框架

```
let view={}
let model={}
let controller={
    init(options){
        let view=options.view
        let model=options.model
        this.view=view
        this.model=model
    }
}
controller.init({view:view,model:model})
```

## 2. view实现方法

```
//view是视口，用户交互和数据显示的窗口。主要由HTML写成
	//1. 在 index.html 中写入 视口div 如
	<div id='app'></div>
	//2. 在 js 中对视口div 进行操作
		// 插入一段html 
		let html='xxx'
		let app=document.querySelector('#app')
		app.innerHTML(html)
```

## 3. model实现方法

```
//model是模型，主要用于操纵数据的增删改查
```

## 4. controller 实现方法

```
//controller: 控制器，连接视图和模型。
```

