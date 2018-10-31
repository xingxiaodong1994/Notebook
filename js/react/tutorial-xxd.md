传统方式
<div data-id='1'>
    hello world
</div>
vue
<div data-id={{id}}>
    {{name}}
</div>
{
    view=new Vue({
        el:'#xxx',
        data:{
            name:'hello world',
            id:1
        }
    })
}
react
var JSX=<div data-id='1'>
    hello world
</div>;
render(JSX,document.querySelector('root'));

react-study
1.JSX语法：由于react要用到JSX（javascript in XML）,
所以我们需要在'.babelrc'文件中配置react
```
{
  "presets": [
     "stage-0",
     "es2015",
     "react"//配置react
  ],
   "plugins": ["transform-decorators-legacy"]
}
```
同时在webpack.config.js中配置
```
 module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }  
        ]
    }
```
然后查看package.json(包(文件)清单)
启动的时候，使用npm start 命令
这时候会读到package.json中这句话
` "start": "opn http://localhost:8080/dist/index.html && webpack-dev-server"`
这句话做两件事，
    1：开一个http://localhost:8080/dist/index.html窗口
    2：起一个webpack-dev-server，它会读取wabpack.json清单，安装依赖。
    3:方法`React.createElement()和ReactDOM.render()`
接下来填写index.html文件
    1.给一个接口div，`<div id="root"></div>`
    2.写一个index.js
    ```
    import React from 'react';
    import ReactDom from 'react-dom';

    // const helloWorldJsx = <span>ddd</span>
    const rootNode= document.querySelector('#root')
    let JSX1=<h1>Hello,xxd!</h1>
    //可以写作
    let JSX1=React.createElement('h1',null,"hello,xxd!")
    let JSX2=['1','2','yyy'].map((string)=>{
        return <p>{string}</p>
    })
    ReactDom.render(
    <div>
        {JSX1}{JSX2}
    </div>
    ,rootNode)
    ```
    注意：JSX语法只能有一个根元素，最好在最外层用'()'括住!
接下来介绍组件：将数据和模板进行分离
JSX不仅仅可以解析传统html标签，还可以用来写组件(函数)！！！
此时的标签可以看做一个函数，
其中写在attributes{a:1,b:2}上的属性可以看做函数的传参props{a:1,b:2}
通过{this.props.children}拿到标签的子元素
此时children：null;作为函数没有孩子，孩子为空！
```js
let A = (props)=>{
    return <div>hello {props.name}! 我是 {props.person}</div>
}
ReactDom.render(
    <A name="xxd" person="xiaohong"/>,
    rootNode
)
```
写组件的时候大部分会继承一个类Component,这个类直接写在React的库中！，其次组件中必须有render方法！
    组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。
    组件只能有一个根元素！
    组件内部不允许修改传入的参数props！如果要实现动态交互，请使用state
    单一功能原则：一个组件只做一件事情
数据模型 `props vs state ???`
props:表示传入的参数，在组件中不会被改变
state:自身维护的数据状态，不能被通过其他props或者state计算出来，不是传入的参数！
state的位置：确定需要state的所有组件，找到一个公共所有者组件(需要state的所有组件的公共父组件)，
    在这个组件或者它的父组件的类的
    `constructor(){this.state:{}}`
    如果要更新state，则必须使用setState({})函数进行更新，
    注意setState()会重新render()!!
生命周期lifecycle
    1. 创建组件实例时会调用
        1. constructor()
        2. static getDerivedStateFromProps()
        3. render()
        4. **componentDidMount()**
    2. 重新渲染更新组件时会调用
        1. static getDerivedStateFromProps()
        2. **shouldComponentUpdate()**
        3. render()
        4. getSnapshotBeforeUpdate()
        5. **componentDidUpdate()**
    3. 从DOM中删除组件
        1. **componentWillUnmount()**
    4. 错误处理
        1. componentDidCatch()
JSX:
    tagName+attributes(props)+children(props.children)
组件化：
    函数式组件(props)=>{return(JSX)}
    class类组件：class A extends Component;
数据源：
    数据永远单项。数据更新只会是props+state更新，数据更新只会影响到当前组件和子组件！！！
    更新state，则必须使用setState({})函数进行更新。一旦调用setState(),就会自动调用render()
小问题：
    父子组件如何通信？答：通过props
    redux是什么？
        答:react中数据源为props+state，当数据越来越多且复杂时，需要一种数据解决方案redux;
        发起数据变更(click 等) ==> action
        生成新的数据结构(state[store])==> redux的reducer生成react的state
        render()渲染数据
    jsonp是啥？
        前端有一个函数，来执行后端传过来的数据
        callback=(data)=>{
            dispatch({
                type:'jsonp',
                payload:data
            })
        }
        服务器jsonp===>'callback({"a":"1"})'

react的进阶


render可以return一个数组[<div></div>,<div></div>]
可以捕获子组件的错误：componentDidCatch(){}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
    
ReactDOM.createPortal(child, container)但是此时其任然在dom树中，其父组件仍然能够捕获它触发的事件！

React.createElement('div',null,child)

Dom树的搜索和遍历
搜索：深度优先策略（DFS），广度优先策略
遍历： 中序遍历，前序遍历，后序遍历

 
