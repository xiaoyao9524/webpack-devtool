// 测试Vue
import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});


// 测试其它部分
// 首页的入口文件
import "./reset.scss";
import "./index.scss";
import $ from 'jquery';
import _ from 'lodash';
import axios from 'axios';

let app = require('./index.art');
let html = app({
  testMsg: '测试模板引擎消息'
});
document.getElementById('test').innerHTML = html;

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
    });


