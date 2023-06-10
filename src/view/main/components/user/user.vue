<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <Icon :size="12" type="arrow-down-b"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="changePwd">修改密码</DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Modal v-model="editPasswordModal" :closable='false' :mask-closable=false :width="500">
        <h3 slot="header" style="color:#2D8CF0">修改密码</h3>
        <Form ref="editPasswordForm" :model="editPasswordForm" :label-width="100" label-position="right" :rules="passwordValidate">
            <FormItem label="原密码" prop="oldPass" :error="oldPassError">
                <Input v-model="editPasswordForm.oldPass" placeholder="请输入现在使用的密码" ></Input>
            </FormItem>
            <FormItem label="新密码" prop="newPass">
                <Input v-model="editPasswordForm.newPass" placeholder="请输入新密码，至少6位字符" ></Input>
            </FormItem>
            <FormItem label="确认新密码" prop="rePass">
                <Input v-model="editPasswordForm.rePass" placeholder="请再次输入新密码" ></Input>
            </FormItem>
        </Form>
        <div slot="footer">
            <Button type="text" @click="cancelEditPass">取消</Button>
            <Button type="primary" :loading="savePassLoading" @click="saveEditPass">保存</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
import axios from '@/libs/api.request'
import { getMd5 } from '@/libs/util'
export default {
  name: 'user',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },
  data () {
    const valideRePassword = (rule, value, callback) => {
        if (value !== this.editPasswordForm.newPass) {
            callback(new Error('两次输入密码不一致'));
        } else {
            callback();
        }
    };
    return {
      editPasswordModal: false,
      savePassLoading: false,
      oldPassError: '',
      editPasswordForm: {
          oldPass: '',
          newPass: '',
          rePass: ''
      },
      passwordValidate: {
          oldPass: [
              { required: true, message: '请输入原密码', trigger: 'blur' }
          ],
          newPass: [
              { required: true, message: '请输入新密码', trigger: 'blur' },
              { type: 'string', pattern: /^([0-9]|[A-Za-z]|[A-Za-z0-9]){6,15}$/, message: '6-15位以数字或大小写字母', trigger: 'blur' }
          ],
          rePass: [
              { required: true, message: '请再次输入新密码', trigger: 'blur' },
              { validator: valideRePassword, trigger: 'blur' }
          ]
      },
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.handleLogOut().then(() => {
            this.$router.push({
              name: 'login'
            })
          })
        case 'changePwd':
          this.showEditPassword()
          break
      }
    },
    showEditPassword () {
        this.editPasswordModal = true;
    },
    saveEditPass () {
        this.$refs['editPasswordForm'].validate((valid) => {
            if (valid) {
                this.savePassLoading = true;
                axios.request({
                  url: 'api/changePwd',
                  method: 'post',
                  data: {
                    oldPass: getMd5(this.editPasswordForm.oldPass),
                    newPass: getMd5(this.editPasswordForm.newPass)
                  }
                }).then(data => {
                  this.editPasswordModal = false;
                  this.savePassLoading = false;
                })
            }
        });
    },
    cancelEditPass () {
        this.editPasswordModal = false;
    },
    beforeClose() {
      this.$refs.editPasswordForm.resetFields()
      this.editPasswordForm = {
          oldPass: '',
          newPass: '',
          rePass: ''
      }
    }
  }
}
</script>
