# react

1. 引入`umd`格式的`react.js` 和` react-dom.js`

   ```
    <script src="https://cdn.bootcss.com/react/16.4.0/umd/react.production.min.js"></script>
       <script src="https://cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js"></script>
   ```

   

2. `API`

   - `React.createElement('span',{slassName:'red'},number)`
   - `ReactDOM.render(span,document.querySelector('#root')) `
   - 

3.命令行输入 `npm install -g npm `npm更新到最新版

- 运行

  ```
  npm install -g create-react-app //安装react 到全局 我的全局是
  //C:\Users\Administrator\AppData\Roaming\npm\create-react-app -> C:\Users\Administrator\AppD  //       ata\Roaming\npm\node_modules\create-react-app\index.js
  //+ create-react-app@1.5.2
  
  create-react-app my-app
  
  /*  uglifyjs-webpack-plugin@0.4.6 postinstall C:\Users\Administrator\desktop\desk\react-  *study\my-app\        node_modules\uglifyjs-webpack-plugin
  *> node lib/post_install.js
  *
  *+ react-dom@16.4.2
  *+ react@16.4.2
  *+ react-scripts@1.1.5
  *added 1336 packages from 811 contributors in 120.466s
  *
  *Success! Created my-app at C:\Users\Administrator\desktop\desk\react-study\my-app
  *Inside that directory, you can run several commands:
  *
  *  npm start
  *   Starts the development server.
  *
  * npm run build
  *    Bundles the app into static files for production.
  *
  *  npm test
  *   Starts the test runner.
  *
  *  npm run eject
  *    Removes this tool and copies build dependencies, configuration files
  *    and scripts into the app directory. If you do this, you can’t go back!
  *
  *We suggest that you begin by typing:
  *
  * cd my-app
  * npm start
  *
  * Happy hacking!
  *
  *
  *cd my-app
  *npm start
  ```

  运行完毕后打开`my-app下的index.js`



```
import React from 'react';         //引入react
import ReactDOM from 'react-dom';  //引入react-dom
import './index.css';              //引入index.css
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

console.log('xxd')
```

知识点讲解：

1. JSX语法：
   - 元素可以自定义，变量用大括号包起来
   - JSX 可以防止XSS漏洞,避免转义：dangerouslySetlnnerHTML
   - 输入undefined,false,null变量不会渲染,输入0渲染0
   - js使用驼峰式命名？空格的显示问题：因为HTML对大小写不敏感，而JavaScript对大小写敏感。
   - html中属性可以使用data-name 这种形式，js中为啥不行？
2. 声明组件
  ```js
  class A extends React.Compontent{
    constructor(props){
      super(props)

    }
    static defaultProps='xxxx'
  
    render(){

    }
  }
  function A(props){
    return <h1>{props}</h1>
  }
  ```
  思考：组件为什么必须大写？
  prop的类型检查
3.
```js
class A extends React.Component{
    constructor(){
        super()
        this.state={
            age:18,
            name:"&gt;"
        }
    }
    componentWillMount(){
        this.setState({
            age:20
        })
        console.log(this.state.age)//打印为18.this.setState()是异步操作！
    }
    compontentDidMount(){}
    
    render(){
        return <h1>我的"&gt;"年龄是{this.state.age}</h1>
    }
}
```
4.生命周期函数
```js
class A{
  constructor(){}//只会触发一次
  componentWillMount(){
    //这里dom元素还未挂载，不能使用
    //这里可以发请求
  }//只会触发一次
  render(){}//多次触发
  componentDidMount(){
  //这里dom元素已经挂载，能使用
  }//只会触发一次
  shouldComponentUpdate(){
    return false //返回值为false，进程中断！，则紧接着更新componentWillUpdate()不会被执行
  }
  componentWillUpdate(){
   
  }
  componentWillReceiveProps(nextPropS){
       // setState()不会触发此函数执行
  }
  componentWillUnmount(){
    //在组件上绑定的事件，设置的定时器必须在此移除，否则内存会泄露！
  }
}
  
```
5.绑定事件：react中event与原生event事件区别？:react对event进行了重构，大部分功能一样，但是react的event对象执行完就销毁，不能放在异步请求中
` 都有e.preventDefault() 和e.stopPropagation()方法`
6.访问react里的dom元素？：
建议使用`ref((dom)=>{this.refdom=dom}),然后使用this.refdom对react的dom元素进行操作`,
如果直接通到`document.querySelector('')`去访问，性能不好！不建议
7.对于css样式操作？我喜欢使用加减class切换状态的方法！
8.渲染li是key的作用？
```jsx
this.state={
  person:[
    {id:1,name:x},
    {id:2,name:xx},
    {id:3,name:xxx}
    ]
}
this.state.person.map((item,i)=>{
  return (<li key={i}>{item.name}</li>)
})
```
9. `this.props.children`?
10. 不要在render函数中bind(this),会导致其子组件跟着render，性能不好
11. 渲染ul>li时，如何只渲染变化的li?
    做li的深拷贝
    li的key使用稳定的值
    使用shouldComponentUpdate(){}
12. 条件渲染写法
    1. ` return (<div>{isLogin?<Login/>:<Logout/>}</div>)`
    2.
    ```js
      let component=null
        if(isLogin){
            component=<Login/>
        }else{
            component=<Logout/>
        }
        return (<div>{component}</div>
    ```
    3.  `{isLogin && <Login/>} {!isLogin && <Logout/>}`
13. 如何在原有组件A不改变的情况下打日志？
    答：对原有组件进行进行一次原型链封装
    ```js
    let oldA=A.prototype.componentWillReceiveProps
    A.prototype.componentWillReceiveProps=function(nextProps,nextState){
      console.log('打印'+nextProps+nextState)
      oldA(nextProps,nextState)
    }
    ```
    或者：使用高阶组件
    ```js
    function logProps(WrappedComponent){
      return class extends React.Component{
        componentWillReceivePeops(nextProps,nextState){
          console.log('打印日志')
        }
        render(){
          return <WrappedComponent {...this.props} />
        }
      }
    }
    const EnhancedComponent=logProps(component1)
    ```
14. lifecycle introduction
    当我们使用一个类(继承了React.Component)的时候，我们就可以使用state和lifecycle
15.setState()可以接受函数;因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。
    不要在setState()中直接使用 `this.props 和 this.state`!!!
  ```js
  // Wrong
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
  // Correct
  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
  }));
  ```
16:结果赋值赋默认值
`let[x,y='b']=['a'] //['a','b']`
`let[x,y='b']=['a',2] //['a',2]`
`let[x,y='b']=['a',null] //['a',null]`
17. 函数经过bind(this)后返回的函数的函数名变为('bound 原先函数名')
18. 箭头函数不能使用yield命名，不能作为generator
19. `let s=new set() ;s.add();s.size//注意set只能有NAN！！`
    
    `set去重([...new set()])`
20. 什么是迭代器？用迭代器实现set,map?
21. 类的实例，方法，私有方法(_method下划线开头，不允许在实例中调用)，公有方法，静态属性(static name:xxx;),静态方法
22. promise的3种状态(pending,fulfilled,rejected)
23. await/async,处理异常记得用`try{}catch(){}`;
    多个await函数是串行执行，如果想并行用Promise.all([await function1,await function2])
24. 关于命令`npm run eject`执行完这个命令——npm run eject后会将封装在 CRA 中的配置全部反编译到当前项目，这样用户就可以完全取得 webpack 文件的控制权，想怎么修改就怎么修改了。