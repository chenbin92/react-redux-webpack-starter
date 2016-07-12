'use strict';
/*eslint no-console: 0*/

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.prod.js');

const isDeveloping = process.env.NODE_ENV === 'development';
const port = isDeveloping ? 8080 : 9090;

function baseConfig(config, contentBase) {
  return new webpackDevServer(webpack(config), {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: contentBase,
    stats: { colors: true } // 用颜色标识
  });
}

let server;
if(isDeveloping) {
  server = baseConfig(devConfig, "/app");
  console.log("development mode...");
} else {
  server = baseConfig(prodConfig, "./build");
  console.log("production mode...");
}

server.listen(port, "localhost", function(err) {
  if(err) {
    console.log(err);
  }
  console.log('==> 🌎 Listening on ' + process.env.NODE_ENV + ' port ' + port);
});
