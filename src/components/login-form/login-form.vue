<!--
 * @Author: your name
 * @Date: 2020-12-30 09:30:55
 * @LastEditTime: 2021-01-04 10:53:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dsq-212\src\components\login-form\login-form.vue
-->
<template>
  <Form ref="loginForm" :model="form" :rules="rules">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="locked"></Icon>
        </span>
      </Input>
    </FormItem>
    <div id="vcode">
      <div id="">
        <Input
          type="text"
          v-model="form.code"
          placeholder="请输入验证码"
          @on-enter="handleSubmit"
        >
        </Input>
      </div>
      <div id="v_container"></div>
    </div>
    <FormItem>
      <Button
        @click="handleSubmit"
        type="primary"
        long
        :loading="buttonLoading"
      >
        <span v-if="!buttonLoading">登录</span>
        <span v-else>登录中...</span>
      </Button>
    </FormItem>
  </Form>
</template>
<script>
import { close } from "fs";
import { GVerify } from "./verifyCode";
export default {
  name: "loginForm",
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      },
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      },
    },
  },
  data() {
    return {
      form: {
        userName: "",
        password: "",
        code: "",
      },
      verifyCode: "",
      buttonLoading: false,
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules,
      };
    },
  },

  methods: {
    handleSubmit() {
      if (
        this.verifyCode.options.code.toLowerCase() ==
        this.form.code.toLowerCase()
      ) {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.buttonLoading = true;
            this.$emit("on-success-valid", {
              userName: this.form.userName,
              password: this.form.password,
            });
            var t = setTimeout(this.closebuttonLoading, 1000);
            //
          }
        });
      } else {
        this.verifyCode.refresh();
        alert("验证码错误");
      }
    },
    closebuttonLoading() {
      // alert("账号密码错误，请重新输入");
      this.form.userName = "";
      this.form.password = "";
      this.buttonLoading = false;
      this.verifyCode.refresh();
    },
  },
  mounted() {
    this.verifyCode = new GVerify("v_container");
  },
};
</script>
<style type="text/css">
#vcode {
  display: flex;
  margin-bottom: 20px;
}
#vcode input {
  height: 40px;
}
</style>
