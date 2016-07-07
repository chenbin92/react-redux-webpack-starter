var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.js')       // 定义入口文件
  ],
  output: {                                       // 定义出口目录
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/' // html引用路径
  },
  resolve: {                                      // resolve 指定可以被 import 的文件后缀
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/, // 检测哪些文件需要此loader，是一个正则表达式，用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel']  // 加载模块 "babel" 是 "babel-loader" 的缩写
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
}

module.exports = config;
