const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const config = require('../config').config;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const findPort = require('./FindPort');

let configPort = config.devServer.port || 8080;
const host = config.devServer.host || 'localhost';
const publicPath = config.publicPath || '';
const api = config.proxy || [];

let proxy = {};
for (let i = 0; i < api.length; i++) {
  let item = api[i];
  proxy[item['path']] = {
    changeOrigin: item['changeOrigin'] || true,
    target: item['target']
  }
}

async function returnData () {
  let port = await findPort(configPort, configPort + 1000);
  console.log('111port: ', port);
  let tipMsg = '';
  if (port !== configPort) {
    tipMsg = `${configPort}端口已被占用, 开始尝试${port}端口。`;
    console.log(tipMsg)
  }
  let retData = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
      publicPath
    },
    devServer: {
      host,
      port,
      proxy,
      contentBase: "../src",
      // hot: true,
      quiet: true,
      overlay: {
        errors: true, // 编译出现错误时，错误直接贴到页面上
      }
    },
    plugins: [
      // new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: tipMsg ? [tipMsg, `你的程序运行在：${host}:${port}`] : [`你的程序运行在：${host}:${port}`],
          notes: ['~^o^~']
        },
        clearConsole: true
      })
    ]
  });
  return retData;
}

module.exports = returnData();
