// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL='http://localhost:8080'
axios.defaults.withCredentials=true
axios.interceptors.request.use(
  (config)=>{
    //对post请求数据进行格式化
    if (config.method.toUpperCase() === 'POST') {
      config.data = qs.stringify(config.data);
    }
    return config
  },
  (error) => {
    console.log(error)
  })

//对响应进行预处理
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  })

Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.use(ElementUI);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
