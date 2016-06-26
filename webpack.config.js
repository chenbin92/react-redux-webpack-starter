var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.js'),      // 定义入口文件
  ],
  output: {                                       // 定义出口目录
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
