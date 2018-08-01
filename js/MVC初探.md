# MVC初探

##  mvc 定义：model,view,controller

**model**:模型 ，**view**:视图 ， **controller**:控制器

1. view: 视图，用户看见和操作的页面，主要有html写成。数据显示区。

   ```
   var View =function (selector){
       return document.querySelector(selector)
   }
   ```

   通过定义一个函数，是view为视图元素。

2. model:模型。一般用来存储和修改数据。

   ```
   var Model=function (){
       return{
      	 	init(){},    //初始化模型
       	fetch(){},	//取数据
       	save(){}    //保存和修改数据
       }
   }
   ```

3. controller: 控制器，连接视图和模型。

   通常用来读取用户在视图输入数据，传递给模型，在模型进行数据存储和修改后，在展示到页面视图中，告诉用户操作成功。

   ```
   var Controller=function(){
       return{
           init:function(view,model){
               this.view=view,
               this.model=model
           },
           bindEvents:function(){}
       }
   }
   ```

   ## 优点：

   **耦合性低** ，实现视图，控制器，模型相分离。在代码修改时允许只修改一部分代码，避免牵一发而动全身。

   **代码重用高**，对应不同的视图，我们都可以调用同一模型，不用每次都重写模型代码。

   ## 缺点：

   对于一些小型demo,使用MVC反而会使代码结构复杂。比较框架本身也需要代码来搭建，一些小的demo根本体现不出框架的优势，反而使代码变得笨重。