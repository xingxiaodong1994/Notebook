这是一个webpack入门demo。告诉你如何用webpack快速打包一个项目。
步骤
1. 新建一个文件夹(我的文件夹名字是demo)，进入这个文件夹。
2. 运行
   ```js
    //此命令会创建一个名字为package.json的npm初始化文件。
   npm init -y
    //此命令会局部安装最新的webpack到你的项目目录。我安装的版本是webpack@4.20.2
   npm install webpack webpack-cli --save-dev 
   ```
3. 在demo文件夹中创建两个文件夹目录`src`文件夹和`dist`文件夹。在`src`文件夹下创建`index.js`文件并在`dist`目录下创建`index.html`文件
4. 在`dist`目录下`index.html`中写入内容如下：
   ```js
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>webpack-demo</title>
    </head>
    <body>
        <div id='root'></div>
        <script src="bundle.js"></script>//引入打包后的js文件
    </body>
    </html>
   ```
5. 在`src`目录下的`index.js`文件中引入你所有的`js模块`
   在这里我引入一个`hello.js`作为例子
   ```js
   //这里是hello.js中代码
   let hello = function () {
        let element = document.createElement('p');
        element.innerHTML = "hello webpack!";
        return element;
    }
    export {hello}
   //下面是index.js中代码
    import {hello} from './js/hello.js'
    document.querySelector("#root").appendChild(hello());
   ```
6. 在demo文件夹下创建`webpack.config.js`
   ```js
   const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
    };
   ```
7. 运行webpack,这样最简单的webpack就搭建起来了！
   ```bash
   node_modules/.bin/webpack 
   或者
   npx webpack
   ```
   这里的webpack命令也可以写入`package.json`的`scripts`中，如下
   ```js
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"node_modules/.bin/webpack "
    }
   ```
   这样做之后，以后运行以下命令就相当于运行了
   `node_modules/.bin/webpack`
   ```bash
   npm run build
   ```
8. 当然还有许多问题需要解决，下面我们一一探讨。
9. 问题一：`css`如何用`import`引入，以及`sass,less`的转换
    答：在webpack.config.js中写入
    ```js
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
      }
    ```
    然后运行命令

    `npm install style-loader css-loader --save-dev`

    在index.js中引入css,就可以使用了

    `import css from './css/hello.css'`

    对于`sass`来说一样的方法
    ```js
    npm install sass-loader node-sass  --save-dev
    // webpack.config.js
    module.exports = {
    	...
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader", 
                    "sass-loader" 
                ]
            }]
        }
    };
    ```
    在index.js中引入css,就可以使用了

    `import './css/hello.scss'`
10. css加前缀
    `npm install --save-dev postcss-loader autoprefixer`
     ```js
    //webpack.config.js
    module.exports = {
        ...
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader"
                        }, {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        }, {
                            loader: "postcss-loader"
                        }
                    ]
                }
            ]
        }
    }
    // postcss.config.js
    module.exports = {
        plugins: [
            require('autoprefixer')
        ]
    }
    ```
11. js语法检查
    `$ npm install eslint-loader eslint --save-dev`

    `$ ./node_modules/.bin/eslint --init`
    ```js
    //webpack.config.js
    module.exports = {
      // ...
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
              // eslint options (if necessary)
            }
          },
        ],
      },
      // ...
    }
    ```
12.处理图片
`npm install --save-dev file-loader`
13.
`npm install --save-dev html-webpack-plugin`
`npm install clean-webpack-plugin --save-dev`


