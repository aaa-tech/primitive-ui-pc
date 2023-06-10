/*
 * @Author: your name
 * @Date: 2020-12-30 09:30:55
 * @LastEditTime: 2021-01-04 10:52:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsq-212\src\store\module\user.js
 */
import { login, logout, getUserInfo } from '@/api/user'
import { setToken, getToken, setUserMap, getUserMap } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',
    userMap: {}
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setUserMap (state, userMap) {
      state.userMap = userMap
      setUserMap(userMap)
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, {userName, password}) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          commit('setToken', res.data.token)
          // commit('setUserMap', data.userMap)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        commit('setToken', '')
        commit('setAccess', [])
        commit('setUserMap', '')
        resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      console.log(state)
      console.log('123')
      return
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(res => {
          const data = res.data
          commit('setAvator', data.avator)
          commit('setUserName', data.userName)
          commit('setUserId', data.userId)
          commit('setAccess', data.access)
          commit('setToken', data.token)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
