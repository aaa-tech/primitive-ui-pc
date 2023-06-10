<template>
  <Row>
    <Col>
    <Card>
      <Row>
        <Col span="12">
        <h2>人员管理</h2>
        </Col>
        <Col span="12">
        <Button type="primary" style="float: right;" @click="modalAdd = true">新增人员</Button>
        </Col>
      </Row>
      <br>
      <Row>
        <Table border :stripe=true :columns="columns" :data="userAllList" style="width: 100%"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total="totalPage" :current.sync="currentPage" :page-size="pageSize" :loading=true size="small" show-total @on-change="pageOnChange"></Page>
          </div>
        </div>
        <Modal
          v-model="modalAdd"
          title="新增人员"
          @on-visible-change="userBeforeClose">
          <Form ref="userInfoFormItem" :rules="ruleUserManage" :model="userInfoFormItem" :label-width="105" style="margin-top: 10px;">
            <FormItem label="人员编号：" prop="userCode">
              <Input v-model="userInfoFormItem.userCode" placeholder="请输入人员编号" clearable></Input>
            </FormItem>
            <FormItem label="人员姓名：" prop="userName">
              <Input v-model="userInfoFormItem.userName" placeholder="请输入人员姓名" clearable></Input>
            </FormItem>
            <FormItem label="人员角色：" prop="role">
              <Select v-model="userInfoFormItem.role" placeholder="请输入人员角色">
                <Option value="A">管理人员</Option>
                <Option value="I">安装人员</Option>
                <Option value="N">浏览人员</Option>
              </Select>
            </FormItem>
            <FormItem label="工作单位：" prop="userOrg">
              <Input v-model="userInfoFormItem.userOrg" placeholder="请输入工作单位" clearable></Input>
            </FormItem>
            <FormItem label="联系方式：" prop="userPhone">
              <Input v-model="userInfoFormItem.userPhone" placeholder="请输入联系方式" clearable></Input>
            </FormItem>
            <FormItem label="定位经度：" prop="lng">
              <Input v-model="userInfoFormItem.lng" placeholder="请输入定位经度" clearable></Input>
            </FormItem>
            <FormItem label="定位纬度：" prop="lat">
              <Input v-model="userInfoFormItem.lat" placeholder="请输入定位纬度" clearable></Input>
            </FormItem>
            <FormItem label="缩放精度：" prop="zoomVal">
              <Input v-model="userInfoFormItem.zoomVal" placeholder="请输入缩放精度" clearable></Input>
            </FormItem>
            <FormItem label="密码：" prop="userPwd">
              <Input v-model="userInfoFormItem.userPwd" type="password" placeholder="请输入密码" clearable></Input>
            </FormItem>
          </Form>
          <Row slot="footer">
              <Button type="text" @click="cancel('modalAdd')">取消</Button>
              <Button type="primary" @click="insertUser('userInfoFormItem')">确定</Button>
          </Row>
        </Modal>
        <Modal
          v-model="modalUserEdit"
          title="修改信息"
          class-name="center-modal"
          @on-visible-change="userBeforeClose">
          <Form ref="editUserFormItem" :model="editUserFormItem" :label-width="100" :rules="ruleUserManage">
            <FormItem label="人员编号：" prop="userCode">
              <Input v-model="editUserFormItem.userCode" disabled></Input>
            </FormItem>
            <FormItem label="人员姓名：" prop="userName">
              <Input v-model="editUserFormItem.userName" clearable></Input>
            </FormItem>
            <FormItem label="工作单位：" prop="userOrg">
              <Input v-model="editUserFormItem.userOrg" clearable></Input>
            </FormItem>
            <FormItem label="联系方式：" prop="userPhone">
              <Input v-model="editUserFormItem.userPhone" clearable></Input>
            </FormItem>
            <FormItem label="定位经度：" prop="lng">
              <Input v-model="editUserFormItem.lng" placeholder="请输入定位经度" clearable></Input>
            </FormItem>
            <FormItem label="定位纬度：" prop="lat">
              <Input v-model="editUserFormItem.lat" placeholder="请输入定位纬度" clearable></Input>
            </FormItem>
            <FormItem label="缩放精度：" prop="zoomVal">
              <Input v-model="editUserFormItem.zoomVal" placeholder="请输入缩放精度" clearable></Input>
            </FormItem>
          </Form>
          <Row slot="footer">
              <Button type="text" @click="cancel('modalUserEdit')">取消</Button>
              <Button type="primary" @click="editUserOk('editUserFormItem')">确定</Button>
          </Row>
        </Modal>
        <Modal v-model="modalOwnCompanyAssi" title="设备分配" @on-ok="insertUserCompany" @on-cancel="cancel" class-name="center-modal" width="60%">
          <Row style="margin-left: 20px;">
            <Col span="3">人员编号：</Col>
            <Col span="8">{{selectedUserInfo.userCode}}</Col>
            <Col span="3">人员姓名：</Col>
            <Col span="8">{{selectedUserInfo.userName}}</Col>
          </Row>
          <br>
          <Transfer :data="dataCompanyList" :target-keys="targetCompanyList" filterable :list-style="listStyle" :operations="['移除','添加']" :titles="['全部企业', '下属企业']" @on-change="handleOwnCompanyChange"></Transfer>
        </Modal>
        <Modal v-model="modalOwnUserAssi" title="从属关系" @on-ok="insertUserOwnUser" @on-cancel="cancel" class-name="center-modal" width="60%">
          <Row style="margin-left: 20px;">
            <Col span="3">人员编号：</Col>
            <Col span="8">{{selectedUserInfo.userCode}}</Col>
            <Col span="3">人员姓名：</Col>
            <Col span="8">{{selectedUserInfo.userName}}</Col>
          </Row>
          <br>
          <Transfer :data="dataUserList" :target-keys="targetUserList" :list-style="listStyle" filterable :operations="[' 移除','添加']" :titles="['全部人员', '下属人员']" @on-change="handleOwnUserChange"></Transfer>
        </Modal>
        <Modal v-model="modalDelete" title="删除信息" @on-ok="ok" @on-cancel="cancel" class-name="center-modal" width="15%">
          <p style="text-align:center">确定删除该条信息吗？</p>
        </Modal>
      </Row>
    </Card>
    </Col>
  </Row>
</template>
<script>
import axios from '@/libs/api.request'
import { getMd5 } from '@/libs/util'
export default {
  data() {
    return {
      userInfoFormItem: {
        userCode: '',
        userName: '',
        role: '',
        userOrg: '',
        userPhone: '',
        userPwd: '',
        lat: '',
        lng: '',
        zoomVal: ''
      },
      dataCompanyList: [],
      targetCompanyList: [],
      dataUserList: [],
      targetUserList: [],
      listStyle: {
        width: '40%',
        margin: '1%'
      },
      editUserFormItem: {
        userCode: '',
        userName: '',
        userOrg: '',
        userPhone: '',
        lat: '',
        lng: '',
        zoomVal: ''
      },
      ruleUserManage: {
        userCode: [
          { required: true, message: '人员编码不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^([0-9a-zA-Z]|_|-){4,20}$/, message: '人员编号最小4位,内容为数字大小写字母及_-', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '人员名称不能为空', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '人员角色不能为空', trigger: 'change' }
        ],
        userPwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^([0-9]|[A-Za-z]|[A-Za-z0-9]){6,15}$/, message: '6-15位以数字或大小写字母', trigger: 'blur' }
        ],
        lng: [
          { required: true, message: '定位经度不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^[\-\+]?(0?\d{1,2}\.\d{1,5}|1[0-7]?\d{1}\.\d{1,5}|180\.0{1,5})$/, message: '-180.0～+180.0（整数部分为0～180，必须输入1到5位小数）', trigger: 'blur' }
        ],
        lat: [
          { required: true, message: '定位纬度不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^[\-\+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/, message: '-90.0～+90.0（整数部分为0～90，必须输入1到5位小数）', trigger: 'blur' }
        ],
        zoomVal: [
          { required: true, message: '缩放精度不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^([1-9]|(1[0-3]))$/, message: '缩放精度为1-13的数字', trigger: 'blur' }
        ]
      },
      selectedUserInfo: {},
      modalUserEdit: false,
      modalOwnCompanyAssi: false,
      modalOwnUserAssi: false,
      modalAdd: false,
      modalDelete: false,
      modalCompany: false,
      pageSize: 10,
      tableLoading: false,
      pageLoading: true,
      currentPage: 1,
      totalPage: 0,
      detailData: {
        personName: '',
        personId: '',
        department: '',
        personPhone: ''
      },
      columns: [{
          title: '人员编号',
          width: 200,
          align: 'center',
          key: 'userCode'
        },
        {
          title: '人员姓名',
          align: 'center',
          key: 'userName'
        },
        {
          title: '人员角色',
          align: 'center',
          key: 'role',
          render: (h, params) => {
            let roleStr
            if (params.row.role === 'A') { roleStr = '管理人员' }
            if (params.row.role === 'N') { roleStr = '浏览人员' }
            if (params.row.role === 'I') { roleStr = '安装人员' }
            return h('span', roleStr)
          }
        },
        {
          title: '工作单位',
          align: 'center',
          key: 'userOrg'
        },
        {
          title: '联系方式',
          width: 300,
          align: 'center',
          key: 'userPhone'
        },
        {
          title: '操作',
          key: 'action',
          width: 280,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Poptip', {
                  props: {
                    confirm: true,
                    title: '确定要删除这条数据吗?',
                    transfer: true
                  },
                  on: {
                    'on-ok': () => {
                      this.deleteUser(params)
                    }
                  }
                }, [
                  h('Button', {
                    style: {
                      margin: '0 5px'
                    },
                    props: {
                      type: 'error',
                      placement: 'top',
                      size: 'small'
                    }
                  }, '删除')
                ]),
              h('Button', {
                props: {
                  type: 'info',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: (event) => {
                    this.showEditUser(params)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'info',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: (event) => {
                    this.showAssiOwnCompany(params)
                  }
                }
              }, '企业分配'),
              h('Button', {
                props: {
                  type: 'info',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: (event) => {
                    this.showAssiOwnUser(params)
                  }
                }
              }, '从属关系')
            ])
          }
        }

      ],
      userAllList: []
    }
  },
  created() {
    this.getDataList(true)
  },
  methods: {
    getPageSize() {
      // 根据屏幕高度获取每页显示条数
      let height = window.innerHeight - 300
      let num = Math.floor(height / 48)
      if (num < 5) {
        num = 5
      }
      return num
    },
    getDataList(refresh) {
      this.tableLoading = true
      this.pageLoading = true
      let perPageNum = this.getPageSize()
      this.pageSize = perPageNum
      axios.request({
        url: 'api/userInfo/find/' + 0 + '/' + perPageNum,
        method: 'get'
      }).then(data => {
        this.userAllList = data.data.resultData
        this.totalPage = data.data.dataTotal
      })
    },
    pageOnChange(pageIndex) {
      this.tableLoading = true
      this.pageLoading = true
      this.userAllList = []
      let perPageNum = this.getPageSize()
      let startIndex = Number((pageIndex - 1) * perPageNum)
      this.pageSize = perPageNum
      axios.request({
        url: 'api/userInfo/find/' + startIndex + '/' + perPageNum,
        method: 'get'
      }).then(data => {
        this.userAllList = data.data.resultData
        this.totalPage = data.data.dataTotal
        this.tableLoading = false
      })
      this.currentPage = pageIndex
    },

    // 关闭对话框时，input中的内容重置
    userBeforeClose(showFlag) {
      if (!showFlag) {
        this.$refs.userInfoFormItem.resetFields()
        this.$refs.editUserFormItem.resetFields()
      }
    },
    insertUser(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          axios.request({
            url: 'api/userInfo/insert/',
            method: 'post',
            data: {
              userCode: this[name].userCode,
              userName: this[name].userName,
              role: this[name].role,
              userOrg: this[name].userOrg,
              userPhone: this[name].userPhone,
              lat: this[name].lat,
              lng: this[name].lng,
              zoomVal: this[name].zoomVal,
              userPwd: getMd5(this[name].userPwd)
            }
          }).then(data => {
            if(data) {
              this.$Message.success('人员信息新增成功!')
              this.getDataList(true)
              this.currentPage = 1
              this.modalAdd = false
            }
          })
        }
      })
    },
    deleteUser(rowData) {
      axios.request({
        url: 'api/userInfo/delete/',
        method: 'post',
        data: rowData.row
      }).then(data => {
        if(data) {
          this.$Message.success('人员信息删除成功!')
          this.getDataList(true)
          this.currentPage = 1
        }
      })
    },
    showEditUser(rowData) {
      this.selectedUserInfo = rowData.row
      this.editUserFormItem = Object.assign({}, rowData.row)
      this.editUserFormItem.lat = this.editUserFormItem.lat + ''
      this.editUserFormItem.lng = this.editUserFormItem.lng + ''
      this.editUserFormItem.zoomVal = this.editUserFormItem.zoomVal + ''
      this.modalUserEdit = true
    },
    editUserOk(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          axios.request({
            url: 'api/userInfo/insert/',
            method: 'post',
            data: this.editUserFormItem
          }).then(data => {
            this.$Message.success('人员信息修改成功!')
            this.getDataList(true)
            this.currentPage = 1
            this.modalUserEdit = false
          })
        }
      })
    },
    showAssiOwnUser(rowData) {
      this.selectedUserInfo = rowData.row
      this.targetUserList = []
      this.dataUserList = []
      axios.request({
        url: 'api/userInfo/find/AssistUser/' + this.selectedUserInfo.userCode + '/N',
        method: 'get'
      }).then(data => {
        this.dataUserList = this.converUserListToTranList(data.data)
        this.targetUserList = this.selectedUserInfo.ownUserList.map(item => item.id)
      })
      this.modalOwnUserAssi = true
    },

    insertUserOwnUser() {
      let paraUser = this.selectedUserInfo
      paraUser['ownUserList'] = this.dataUserList.filter(item => this.targetUserList.includes(item.key)).map(item => { return item.object })
      axios.request({
        url: 'api/userInfo/updateOwn',
        method: 'post',
        data: paraUser
      }).then(data => {
        this.getDataList(true)
        this.currentPage = 1
      })
    },

    showAssiOwnCompany(rowData) {
      this.selectedUserInfo = rowData.row
      this.dataCompanyList = []
      this.targetCompanyList = []
      axios.request({
        url: 'api/companyInfo/findAll',
        method: 'get'
      }).then(data => {
        this.dataCompanyList = this.converCompanyListToTranList(data.data)
        this.targetCompanyList = this.selectedUserInfo.ownCompanyList.map(item => item.id)
      })
      this.modalOwnCompanyAssi = true
    },
    insertUserCompany() {
      let _this = this
      let paraUser = this.selectedUserInfo
      paraUser['ownCompanyList'] = this.dataCompanyList.filter(item => this.targetCompanyList.includes(item.key)).map(item => { return item.object })
      axios.request({
        url: 'api/userInfo/updateOwn',
        method: 'post',
        data: paraUser
      }).then(data => {
        this.getDataList(true)
        this.currentPage = 1
      })
    },
    converUserListToTranList(userList) {
      return userList.filter(item => this.selectedUserInfo.id !== item.id).map(item => {
        return {
          key: item.id,
          object: item,
          label: item.userName,
          description: '(' + item.userCode + ')'
        }
      })
    },
    converCompanyListToTranList(userList) {
      return userList.filter(item => this.selectedUserInfo.id !== item.id).map(item => {
        return {
          key: item.id,
          object: item,
          label: item.companyName,
          description: '(' + item.companyCode + ')'
        }
      })
    },
    handleOwnUserChange(newTargetKeys) {
      this.targetUserList = newTargetKeys
    },
    handleOwnCompanyChange(newTargetKeys) {
      this.targetCompanyList = newTargetKeys
    },
    cancel (modalFlag) {
      if (this[modalFlag]) {
        this[modalFlag] = false
      }
    },
    ok(){}
  }
}

</script>
