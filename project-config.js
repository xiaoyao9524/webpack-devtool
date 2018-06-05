/*
* 配置第三方库
* 描述来源：https://blog.csdn.net/github_36487770/article/details/80228147
* 官方描述（英文）：https://webpack.js.org/configuration/optimization/#src/components/Sidebar/Sidebar.jsx
* @param 每一项      类型      默认值     描述
* @param name       String   无（必传）  库的名称，也是生成的共享模块bundle的名字
* @param chunks     String   initial   有三个可选值，”initial”, “async” 和 “all”. 分别对应优化时只选择初始的chunks，所需要的chunks 还是所有chunks 。
* @param minChunks  Number   2         是split前，有共享模块的chunks的最小数目 ，默认值是1， 但我看示例里的代码在default里把它重写成2了，从常理上讲，minChunks = 2 应该是一个比较合理的选择吧。
* */

exports.cacheGroupsConfig = [
  {
    name: 'jquery'
  },
  {
    name: 'lodash'
  }
];

/*
  * 配置入口文件和html-webpack-plugin
  * @param 每一项     类型      描述
  * @param entryName String   该模块（页面）入口文件名称
  * @param entryPath String   该模块（页面）入口文件的路径
  * @param filename  String   打包后的html文件名
  * @param template  String   该文件的html模板
  * @param chunks    Array    该模块（页面）依赖的chunks和第三方库(比如jquery和lodash)，一般第一个为该模块的入口文件
* */

exports.config = [
  {
    entryName: "index",
    entryPath: "./src/index.main.js",
    filename: "index.html",
    template: "./src/index.html",
    chunks: ['index', 'jquery', 'lodash']
  },
  {
    entryName: "test",
    entryPath: "./src/test.main.js",
    filename: "test.html",
    template: "./src/test.html",
    chunks: ['test', 'jquery']
  }
];
