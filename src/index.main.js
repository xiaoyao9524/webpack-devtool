// 首页的入口文件
import "./scss/reset.scss";
import "./scss/index.scss";
import "./js/home";

import axios from 'axios'
axios.get('/index/recommend.json')
    .then((res) => {
      console.log('跨域测试：', res.data);
    })
