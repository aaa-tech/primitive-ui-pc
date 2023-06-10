/*
 * @Author: your name
 * @Date: 2020-12-30 09:30:55
 * @LastEditTime: 2021-01-04 10:40:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsq-212\src\api\user.js
 */
import viewApi from '@/http/viewApi.js'

export const login = ({ userName, password }) => {
  let data = {
    username:userName,
    password:password
  }
  return viewApi.login(data)
}

export const getUserInfo = (data,token) => {
  return viewApi.getUserInfo(data,token)
}

export const logout = (token) => {
  return axios.request({
    url: 'api/logout',
    method: 'post'
  })
}
