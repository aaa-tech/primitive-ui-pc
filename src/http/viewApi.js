/*
 * @Author: your name
 * @Date: 2019-09-02 13:39:01
 * @LastEditTime: 2021-08-05 14:48:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-app\src\http\viewApi.js
 */
import http from './http'
export default {
  login (data) {
    return http.post('/login/special', data) // 登录接口
  },
  login1 (data) {
    return http.post('/login/special', data) // 登录接口
  },
  getUserInfo (data,token) {
    return http.get('/getUserInfo', data, token) // 取得用户信息
  },
  getCompanyList(data, token){
    return http.post('/company/list', data, token).then(res=>{
      return res.data
    })
  },
  getTopo(data,token){
    return http.post('/company/flowchart', data, token).then(res=>{
      return res.data
    })
  },
  getCompanyDetail(data, token) { //companyId:str
    return http.post('/company/details', data, token).then(res=>{
      return res.data
    })
  },
  getCompanyDayInfo (data, token) {//deviceCode:array,startTime:到秒,endTime:到秒
    return http.post('/data/day', data, token).then(res=>{
      return res.data
    }) // 企业日数据
  },
  getCompanyHourInfo (data, token) {//deviceCode:array,startTime:到秒,endTime:到秒
    return http.post('/data/hour', data, token).then(res=>{
      return res.data
    }) // 企业小时数据
  },
  getCompanyTenMinuteInfo (data, token) {//deviceCode:array,startTime:到秒,endTime:到秒
    return http.post('/data/minute', data, token).then(res=>{
      return res.data
    }) // 企业10分钟数据
  },
  getCompanyCurrentMinuteInfo (data, token) {//deviceCode:array,monitorPointCode:array
    return http.post('/data/realTimeData', data, token).then(res=>{
      return res.data
    }) // 企业实时1分钟数据
  },
  getCompanyRealHistoryInfo (data, token) {//deviceCode:array,startTime:到秒,endTime:到秒
    return http.post('/data/realHistoryData', data, token).then(res=>{
      return res.data
    }) // 企业历史数据
  },
  getEquipmentRunningState(data,token){//deviceCode:array,queryTime:到日
    return http.post('/data/runningState', data, token).then(res=>{
      return res.data
    }) // 企业某时间状态
  },
  getEquipmentRunningTime(data,token){//deviceCode:array,startTime:到日,endTime:到日
    return http.post('/data/runningTime', data, token).then(res=>{
      return res.data
    }) // 设备运行时长
  },
  getWaterBalance(data,token){//deviceCodes:array,startTime:到日,endTime:到日
    return http.post('/data/waterBalance', data, token).then(res=>{
      return res.data
    }) // 设备运行时长
  },
  getDataRate(data,token){//enterpriseId:企业id,startTime:到秒,endTime:到秒
    return http.post('/data/getDataRate', data, token).then(res=>{
      return res.data
    }) // 数据传输率
  },
  getDeviceReport(data,token){//enterpriseId:企业id,startTime:到秒,endTime:到秒
    return http.post('/data/list/hj212', data, token).then(res=>{
      return res.data
    }) // 数据传输率
  },
  getVideoInfo(data,token){//companyId:企业id
    return http.post('/company/video', data, token).then(res=>{
      return res.data
    }) // 获取视频信息
  },
  getCompanyStatusByDate(data,token){//startTime endTime
    return http.get('/company/produceList/?startTime='+ data.startTime + '&endTime=' + data.endTime, data, token).then(res=>{
      return res.data
    })
  },
  alterInstallState(data,token){
    return http.put('/system/enterprise', data, token).then(res=>{
      return res.data
    })
  },
  getAlarmList(data,token){
    return http.post('/company/alarmList', data, token).then(res=>{
      return res.data
    })
  },
  alterAlarmProcessState(data,token){
    return http.post('/company/alarmList/processState', data, token).then(res=>{
      return res.data
    })
  },
  getProuctStatusList(data,token){
    return http.post('/data/productionStatistics', data, token).then(res=>{
      return res.data
    })
  },
  convertReportText(data,token){
    let url = '/hj212/crc16?data=' + data
    return http.get(url, data, token).then(res=>{
      return res.data
    })
  }
}
