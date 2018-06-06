// 首页的入口文件
import "./reset.scss";
import "./index.scss";
import $ from 'jquery';
import _ from 'lodash';
import axios from 'axios';

var app = require('./index.art');
var html = app({
  testMsg: '测试模板引擎消息'
});
document.getElementById('app').innerHTML = html;

let btn = $("#btn");

btn.on("click", function () {
  alert('im home.js!');
});

console.log(
    _.join(['index', '测试', 'lodash'], ' ')
);
console.log('当前环境', process.env.NODE_ENV); // development or production

axios.get('/index/recommend.json')
    .then((res) => {
      console.log('跨域测试：', res.data);
    })


