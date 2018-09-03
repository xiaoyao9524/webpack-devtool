// 移动端调试
// if (process.env.NODE_ENV === 'development') {
//   let VConsole = require('vConsole');
//   new VConsole();
// }

import 'babel-polyfill';
import "../scss/reset.scss";
import "./scss/index.scss";
import $ from 'jquery';
import _ from 'lodash';
import axios from 'axios';

let app = require('./index.art');
let html = app({
  testMsg: '测试模板引擎'
});
document.getElementById('test').innerHTML = html;

let btn = $("#btn");

btn.on("click", function () {
  alert('im home.js!!');
});

console.log(
    _.join(['测试', 'lodash', '信息'], ' ')
);
console.log('当前环境', process.env.NODE_ENV); // development or production

async function testAjax () {
 try {
   let {data} = await axios.get('/index/recommend.json');
   console.log('跨域测试：', data.list);
 }catch (err) {
   console.log('跨域测试失败，请确认当前是否在开发环境：', err)
 }
}
testAjax();


