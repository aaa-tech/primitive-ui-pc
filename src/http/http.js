/*
 * @Author: your name
 * @Date: 2019-09-02 13:39:01
 * @LastEditTime: 2021-08-05 14:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-app\src\http\http.js
 */
import axios from 'axios'
// console.log( process.env.NODE_ENV)
// 判断环境提供baseURL，注意要与后台地址一致
const rootDG = (process.env.NODE_ENV === 'production') ? 'http://120.46.157.219:8080/hwt' : 'http://120.46.157.219:8080/hwt'
const root = (process.env.NODE_ENV === 'production') ? 'http://114.116.248.195:8080/hwt' : 'http://114.116.248.195:8080/hwt'
//const root = (process.env.NODE_ENV === 'production') ? 'http://211.140.230.46:18080/hwt' : 'http://211.140.230.46:18080/hwt'
//const root = (process.env.NODE_ENV === 'production') ? 'http://192.168.3.36:8080' : 'http://192.168.3.36:8080'
//const root = (process.env.NODE_ENV === 'production') ? 'http://111.230.108.177:8080/hwt' : 'http://111.230.108.177:8080/hwt'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

function apiAxios (method, url, params, token) {
  if(url.includes('special')){
    if(params.username == 'as001'){
      return axios({
        method: method,
        // 拼接参数
        url: url,
        data: params,
        baseURL: rootDG,
        timeout: 10000,
        withCredentials: false
      })
    }else{
      return axios({
        method: method,
        // 拼接参数
        url: url,
        data: params,
        baseURL: root,
        timeout: 10000,
        withCredentials: false
      })
    }
  }else if(url.includes('crc16')){
    return axios({
      method:method,
      url:url,
      data:params,
      baseURL:rootDG,
      timeout:10000,
      withCredentials:false
    })
  }else{
    return axios({
      method: method,
      // 拼接参数
      url: url,
      data: params,
      baseURL: root,
      timeout: 10000,
      headers: { Authorization: `${token}` }, // jwt
      withCredentials: false
    })
  }
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, token) {
    return apiAxios('GET', url, params, token)
  },
  post: function (url, params, token) {
    return apiAxios('POST', url, params, token)
  },
  put: function (url, params, token) {
    return apiAxios('PUT', url, params, token)
  },
  delete: function (url, params, token) {
    return apiAxios('DELETE', url, params, token)
  }
}
