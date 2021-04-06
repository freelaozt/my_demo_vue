// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueCookies from 'vue-cookies'
import md5 from 'js-md5'
import {imageIsExist} from "./utils/handleImg";

Vue.config.productionTip = false

import './plugins/bootstraps-vue'

import '../static/css/style.css'

//配置公共的url
// Axios.defaults.baseURL = 'http://localhost:3000/'
Axios.defaults.baseURL = 'http://119.3.0.97:3000/'
//配置axios
Vue.prototype.$axios = Axios
Vue.prototype.$md5 = md5;
Vue.prototype.$cookies = VueCookies;

//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('real-img', async function (el, binding) {
    let imgURL = binding.value;//获取图片地址
    let defaultURL = el.getAttribute('default-img');//获取默认图片地址
    if (imgURL) {
        let exist = await imageIsExist(imgURL);
        if (exist) {
            el.setAttribute('src', imgURL);
        } else {
            if (defaultURL) {
                el.setAttribute('src', defaultURL);
            }
        }
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
