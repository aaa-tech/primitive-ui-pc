<!--
 * @Author: your name
 * @Date: 2020-12-30 09:30:55
 * @LastEditTime: 2021-07-17 17:27:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsq-212\src\view\login\login.vue
-->
<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login" @keydown.enter="handleLogin">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录-营口市污染源监测系统" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import loginForm from '_c/login-form'
import viewApi from '@/http/viewApi.js'
import {setToken,setUserMap} from '@/libs/util.js'
export default {
  components: {
    loginForm
  },
  methods: {
    handleSubmit ({ userName, password }) {
      let data = {
        username:userName,
        password:password
      }
      viewApi.login(data).then(res => {
        let token = res.data.token
        setToken(token)
        let data1 = {}
        viewApi.getUserInfo(data1,token).then(resu => {
          setUserMap(resu.data)
          localStorage.setItem('userId',userName)
          this.$router.push({
            name: 'homePage'
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
