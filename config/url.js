/*
 * @Author: your name
 * @Date: 2020-12-30 09:25:31
 * @LastEditTime: 2021-01-07 18:35:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsq-212\config\url.js
 */
//已废弃，真正控制接口地址的在http.js
import env from './env'
//营口市污染源监测系统
const DEV_URL = 'http://114.116.248.195:8080/hwt/'
const PRO_URL = 'http://114.116.248.195:8080/hwt/'
export default env === 'development' ? DEV_URL : PRO_URL
