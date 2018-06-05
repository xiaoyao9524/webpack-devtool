const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rules = require('../base-config/rules').rules;
// const config = require("../config");
/*
const configs = require("../config");
const chunks = configs.chunks;
const config = configs.config;

let entry = {};

if (Object.keys(chunks).length) {
  entry.push(chunks);
}

let plugins = [
  new CleanWebpackPlugin(["dist"], {
    root: path.resolve(__dirname, "../")
  })
];

for (let i = 0; i < config.length; i++) {
  let item = config[i];
  entry[item["entryName"]] = item["entryPath"];
  let baseConfig = {
    filename: null,
    template: null,
    inject: true,
    chunks: null
  };
  for (let key in item) {
    baseConfig[key] = item[key];
  }
  // baseConfig['chunks'] = item['entryName'];
  plugins.push(new HtmlWebpackPlugin(item));
}
*/
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.main.js'),
    test: path.resolve(__dirname, '../src/test.main.js')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        jquery: {
          name: "jquery",
          chunks: "initial",
          minChunks: 2
        },
        lodash: {
          name: "lodash",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  output: {
    filename: "js/[chunkhash].bundle.js",
    chunkFilename: "js/[chunkhash].bundle.js",
    path: path.resolve(__dirname, "../", "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../")
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      chunks: ['index', 'lodash']
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: path.resolve(__dirname, '../src/test.html'),
      inject: true,
      chunks: ['test', 'jquery']
    })
  ],
  module: {
    rules
  }
};
