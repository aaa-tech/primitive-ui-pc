/*
 * @Author: your name
 * @Date: 2020-12-30 09:30:55
 * @LastEditTime: 2021-01-07 12:53:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsq-212\src\router\routers.js
 */
import Main from '@/view/main'

export default [
  {
    path: '/',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () =>
      import ('@/view/login/login.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () =>
      import ('@/view/login/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      icon: 'social-buffer',
      title: '首页',
      access: ['A', 'N'],
    },
    // redirect: '/homePage',
    component: Main,
    children: [{
      path: 'homePage',
      name: 'homePage',
      access: ['A', 'N'],
      meta: {
        icon: 'arrow-graph-up-right',
        title: '首页'
      },
      component: () =>
        import ('@/view/page/homePage.vue')
    }]
  },
  {
    path: '/homePage',
    name: 'homePage',
    meta: {
      icon: 'social-twitch',
      title: '首页',
      access: ['A', 'N'],
    },
    component: Main,
    children: [{
      path: 'homePage',
      name: 'homePage',
      meta: {
        icon: 'social-twitch',
        title: '首页',
        access: ['A', 'N'],
      },
      component: () =>
        import ('@/view/page/homePage.vue')
    }]
  },
  {
    path: '/401',
    name: 'error_401',
    component: () =>
      import ('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () =>
      import ('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () =>
      import ('@/view/error-page/404.vue')
  }
]
