## redux讲解
action(行为，动作)
reducer(handler处理器)
state(状态)

```js
function createStore(reducer,preloadedState,enhancer){
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
            }
        return enhancer(createStore)(reducer, preloadedState);
    }
    var currentReducer=reducer;
    var currentState=preloadedState;
    var isDispatching=false;
    var currentListeners=[];
    var nextListeners=currentListeners;

    function getState(){
        return currentState
    }

    function subscribe(listener){//listener必须是一个函数
        if (typeof listener !== 'function') {
            throw new Error('Expected listener to be a function.');
        }
        var isSubscribed = true;
        nextListeners.push(listener);
        return function(){}
    }

    function dispatch(action){
        isDispatching=true;
        currentState=currentReducer(currentState,action);

        var listeners=currentListeners=nextListeners
        for(var i=0;i<listeners.length;i++){
            var listener = listeners[i]
            listener()
        }

        return action
    }

    dispatch({ type: ActionTypes.INIT });//redux初始化

    return {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      //replaceReducer: replaceReducer
    }
}
//通过上面源码，我们可以理解下面的代码
var action=function(){}
var reducer=function (state,action){}
var preloadedState={}
var store=function createStore(reducer,preloadedState)
store.dispatch(action)
store.getState()
store.subscribe(()=>{
    console.log('我注册了')
})//push一个函数进入listeners
```
如何使用redux来更新UI数据?
答：
```js
    var ROOTDOM=document.querySelector('#root')
    store.subscribe(()=>{
        console.log('我要跟新UI')
        ROOTDOM.innerHTML = JSON.stringify(store.getState()) 
    })
```
中间件(applyMiddleware)的概念：
    我的理解：数据处理的中间环节，用于把凌乱的数据转变为整齐的数据；
    我使用过redux的中间件applyMiddleware(a,b,c)API
    原先的redux数据流向是
        action --> dispatch(action) --> reducer(action,currentState) --> nextState
    加入中间件以后
        action -applyMiddleware-> dispatch(action) --> reducer(action,currentState) --> nextState

redux.孟庆辉
1.action的写法：
```js
action={
    type:'LOGIN_SUCCESS'
}
//or
function addTodo(text){
    return {
        type:'ADD_TODO',
        payload:{
            text:text
            }
    }
}
dispatch(addTodo('123'))
```
2.reducer的写法
```js
reducer(state=initState,action){
    switch(action.type){
        case xxx:
            return Object.assign({},state,{key:value})
        default:
            return state
    }
}
```
3. 插件：case-sensitive-paths-webpack-plugin:大小写敏感
   pwa?
   sw-precache-webpack-plugin?启动server？
4. 如何把redux应用到react中：
   `npm install --save redux react-redux`
    新建文件夹`components,data(actions,reducers),creat.js`

ff:
    redux 使用：
    1. 引入redux 
    2. 防呆子
    3. 事件都有事件名（action.type）
    4. 数据只读
    5. context
    6. Suspence
    7. hook
