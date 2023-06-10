// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
// import i18n from '@/locale'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import config from '@/config'
import 'iview/dist/styles/iview.css'
import env from '../config/env'
import axios from '@/libs/api.request'

// if (env === 'development') require('@/mock')
Vue.use(ElementUI)
Vue.use(iView)
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
String.prototype.myReplace=function(f,e){//吧f替换成e
  var reg=new RegExp(f,"g"); //创建正则RegExp对象   
  return this.replace(reg,e); 
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // i18n,
  axios,
  render: h => h(App)
})
// .$mount('#app')
