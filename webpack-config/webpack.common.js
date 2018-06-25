const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 配置入口文件和plugins
const projectConfig = require('../project-config');
const config = projectConfig.config;
let entry = {};
let plugins = [
  new VueLoaderPlugin(),
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

module.exports = {
  entry,
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          priority: 10,
          chunks: 'initial',
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
  plugins,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', "style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.art$/,
        loader: "art-template-loader"
      }
    ]
  },
  resolve: { alias: { 'vue$': 'vue/dist/vue.common.js' } }
};
