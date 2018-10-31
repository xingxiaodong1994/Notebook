const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
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
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader" ]
      }
     
    ]
  }
};