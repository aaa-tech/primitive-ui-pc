/*
 * @Author: your name
 * @Date: 2020-12-30 09:30:55
 * @LastEditTime: 2021-01-07 12:50:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsq-212\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'
import { getToken } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  routes
})
const LOCK_PAGE_NAME = 'lock_page'
const LOGIN_PAGE_NAME = 'login'

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
