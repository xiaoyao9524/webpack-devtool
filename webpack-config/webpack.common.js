const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rules = require('../base-config/rules').rules;
// 配置入口文件和plugins
const projectConfig = require('../project-config');
const config = projectConfig.config;
let entry = {};
let plugins = [
  new CleanWebpackPlugin(["dist"], {
    root: path.resolve(__dirname, "../")
  })
];
for (let i = 0; i < config.length; i++) {
  // entry
  let item = config[i];
  entry[item['entryName']] = item['entryPath'];
  // plugins
  let pluginItem = {
    filename: item['filename'],
    template: item['template'],
    inject: item['inject'] ? item['inject'] : true,
    chunks: item['chunks']
  };
  plugins.push(new HtmlWebpackPlugin(pluginItem));
}

// 配置依赖和第三方库
let cacheGroupsConfig = projectConfig.cacheGroupsConfig;
let cacheGroups = {};
for (let i = 0; i < cacheGroupsConfig.length; i++) {
  let item = cacheGroupsConfig[i];
  let cacheGroupsItem = {
    name: item['name'],
    chunks: item['chunks'] ? item['chunks'] : 'initial',
    minChunks: item['minChunks'] ? item['minChunks'] : 2
  };
  cacheGroups[item['name']] = cacheGroupsItem;
};

module.exports = {
  entry,
  optimization: {
    splitChunks: {
      cacheGroups
    }
  },
  output: {
    filename: "js/[chunkhash].bundle.js",
    chunkFilename: "js/[chunkhash].bundle.js",
    path: path.resolve(__dirname, "../", "dist")
  },
  plugins,
  module: {
    rules
  }
};
