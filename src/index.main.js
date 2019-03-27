// 移动端调试
/*
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vConsole');
  new VConsole();
}
*/

import 'babel-polyfill';
import "./scss/reset.scss";
import "./scss/index.scss";
import $ from 'jquery';
import axios from 'axios';

import FastClick from 'fastclick';
FastClick.attach(document.body);

// 测试环境为：'test'，生产环境为：'prod'。
console.log('区分测试和生产环境: ', currentEnv);

// 开发环境为：'development，构建环境为：'production'。
console.log('区分开发和构建环境: ', process.env.NODE_ENV);

// 测试模板引擎
let app = require('./index.art');
let html = app({
  testMsg: '成功'
});
document.getElementById('test').innerHTML = html;

// 测试js
let btn = $("#btn");

btn.on("click", function () {
  alert('im home.js!!');
});

// 测试跨域调试
testAjax();
async function testAjax() {
  try {
    let {
      data
    } = await axios.get('/index/recommend.json');
    console.log('跨域测试：', data.list);
  } catch (err) {
    console.error('跨域测试失败，请确认当前是否在开发环境：', err)
  }
}