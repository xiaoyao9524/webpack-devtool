// 测试页的入口文件
import '@babel/polyfill';
import "./scss/reset.scss";
import "./scss/index.scss";
import $ from 'jquery'

import FastClick from 'fastclick';
FastClick.attach(document.body);

let test = $("#btn");
test.on("click", function () {
  alert('im about.js');
});
