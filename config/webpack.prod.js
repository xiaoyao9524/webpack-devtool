const webpack = require('webpack');
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
const DashboardPlugin = require('webpack-dashboard/plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = env => {
  return merge(common, {
    mode: 'production',
    devtool: 'source-map',
    stats: {
      assets: true,
      version: true,
      builtAt: true,
      performance: false,
      warnings: false
    },
    plugins: [
      new webpack.DefinePlugin({
        currentEnv: JSON.stringify(env.currentEnv)
      }),
      new CleanWebpackPlugin(),
      new DashboardPlugin()
    ]
})};
