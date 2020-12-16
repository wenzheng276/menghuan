// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
import store from './assets/store';
// 先导入再用
import axios from 'axios';
import {request} from "./network/request"
Vue.use(Vant);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
// axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   console.log(res)
// })

request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)})
