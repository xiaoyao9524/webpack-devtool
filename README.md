# 一个比较简单的webpack脚手架

## 可以转换ES6、支持scss、支持跨域调试

```
# 1、 安装依赖
npm install or yarn install

# 2、 开发
npm run dev， 默认监听8080，注意：默认路径为：http://localhost:8080/index.html,如果出现"Cannot GET /xxx.html"，这很可能是没有index.html导致的。

# 3、 打包
npm run build，默认在主目录下"dist"文件夹。
```
# 增加页面：
    可直接在根目录下config.js中增加一项。
# 跨域调试
    具体配置项根据根目录下api.js修改