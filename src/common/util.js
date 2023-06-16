/*
 * @Author: your name
 * @Date: 2019-12-02 13:30:00
 * @LastEditTime: 2021-07-17 17:26:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \营口市污染源监测系统\src\common\util.js
 */
import dateUit from "./dateUit";
import listUtils from "./listUtils";
import crypto from 'crypto'
export const getMd5 = (str) => {
  const md5 = crypto.createHash('md5')
  md5.update(str)
  const rtnStr = md5.digest('hex')
  return rtnStr
}
export default {
  setCookie(name,value){
		var Hours = 24;
		var exp = new Date();
		exp.setTime(exp.getTime() + Hours*1000*60*60);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	},
	getCookie(name){
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
  },
  setNoCookie(name, value, day) {
    if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
      var expires = day * 24 * 60 * 60 * 1000;
      var date = new Date(+new Date()+expires);
      document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    }else{
      document.cookie = name + "=" + escape(value);
    }
  },
  deleteCookie(name){
    this.setNoCookie(name,'',-1)
  },
  getQueryStringByName: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    var context = ''
    if (r != null) { context = r[2] }
    reg = null
    r = null
    return context === null || context === '' || context === 'undefined' ? '' : context
  },
  formatDate: { //日期格式化
    format: function (date, pattern) {
      return dateUit.formatDate.format(date, pattern)
    },
    parse: function (dateString, pattern) {
      return dateUit.parse(dateString, pattern)
    },
  },
  date:{ //日期计算
    diff:function(date1,date2){
      return dateUit.dateDiff(date1,date2)
    }
  },
  guid() {
    function S4() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+""+S4()+""+S4()+""+S4()+""+S4()+S4()+S4());
  },
  randomId(){
    var ordernum="";
    for(var i=0;i<6;i++) {
      ordernum += Math.floor(Math.random()*10);
    }
    return new Date().getTime() + ordernum
  },
  //克隆
  clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  getCurrUser(){
    var user=localStorage.getItem('access-user');
    if(user) {return JSON.parse(user)}
    return user;
  },
  mapToJson(map) {
    return listUtils.mapToJson(map);
  },
  jsonToMap(jsonStr) {
    return listUtils.jsonToMap(jsonStr);
  },
  //localStorage方法封装
  setStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },
  getStorage(key){
    return JSON.parse(localStorage.getItem(key));
  },
  removeStorage(key){
    localStorage.removeItem(key);
  },
  formatAmericaTime(utcTime){
    const beijingTime = new Date(utcTime).toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
      hour12: false,
    });
    const year = new Date(beijingTime).getFullYear();
    const month = new Date(beijingTime).getMonth() + 1;
    const date = new Date(beijingTime).getDate();
    const hour = new Date(beijingTime).getHours();
    const minute = new Date(beijingTime).getMinutes();
    const second = new Date(beijingTime).getSeconds();
    return `${year}-${month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")} ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
  }
}
