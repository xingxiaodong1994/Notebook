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

