const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack');

let api = require('../api').api;
let proxy = {};
for (let i = 0; i < api.length; i++) {
  let item = api[i];
  proxy[item['path']] = {
    changeOrigin: item['changeOrigin'] ? item['changeOrigin'] : true,
    target: item['target']
  }
}
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy,
    contentBase: "./dist",
    hot: true
  } ,
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
