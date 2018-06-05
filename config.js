// 此项配置页面依赖的第三方库
exports.chunks = {
  jquery: ['jquery'],
  lodash: ['lodash']
};

/*
  * @param 每一项     类型      描述
  * @param entryName String   该模块（页面）入口文件名称
  * @param entryPath String   该模块（页面）入口文件的路径
  * @param filename  String   打包后的html文件名
  * @param template  String   该文件的html模板
  * @param chunks    Array    该模块（页面）的依赖chunks
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
