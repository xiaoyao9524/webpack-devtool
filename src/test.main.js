// 测试页的入口文件
import "./scss/reset.scss";
import "./scss/index.scss";
import $ from 'jquery'

let test = $("#btn");
test.on("click", function () {
  alert('im about.js');
});
å