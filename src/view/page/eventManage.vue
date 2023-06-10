<template>
  <Card>
    <Row>
      <Col span="12">
      <h2>事件一览</h2>
      </Col>
    </Row>
    <Form  :label-width="80" style="margin-top: 20px;">
      <Row>
        <Col span="5">
        <FormItem label="设备编号 : ">
          <Input  placeholder="请输入搜索编码关键字" style="width:80%;"></Input>
        </FormItem>
        </Col>
        <Col span="5">
        <FormItem label="设备地址 : ">
          <Input  placeholder="请输入搜索地址关键字" style="width:80%;"></Input>
        </FormItem>
        </Col>
        <Col span="7">
        <FormItem label="创建时间 : ">
          <Row>
            <Col span="11">
            <DatePicker type="date" placeholder="请选择日期" ></DatePicker>
            </Col>
            <Col span="2" style="text-align: left;">
            <span>~~</span>
            </Col>
            <Col span="11">
            <DatePicker type="date" placeholder="请选择日期"></DatePicker>
            </Col>
          </Row>
        </FormItem>
        </Col>
        <Col span="3">
        <FormItem label="处理状态">
          <Select  placeholder="请选择处理状态">
            <Option value="O">全部</Option>
            <Option value="T">正常</Option>
            <Option value="F">异常</Option>
          </Select>
        </FormItem>
        </Col>
        <Col span="2">
        <Button type="primary" icon="ios-search" style="float: right;width: 52%;">搜索</Button>
        </Col>
        <Col span="1">
        </Col>
      </Row>
      </FormItem>
    </Form>
    <Row>
      <Table border :stripe=true :columns="columns" :data="eventData" :loading="tableLoading" style="width: 100%"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="totalPage" :current.sync="currentPage" :page-size="pageSize" :loading=true size="small" show-total @on-change="pageOnChange"></Page>
        </div>
      </div>
      <Modal v-model="modalEventList" title="详情信息" @on-ok="insertEventOk">
        <Row>
          <Col span="8">设备编号：</Col>
          <Col span="16"></Col>
        </Row>
        <Row>
          <Col span="8">设备地址：</Col>
          <Col span="16"></Col>
        </Row>
        <Row>
          <Col span="8">创建时间：</Col>
          <Col span="16"></Col>
        </Row>
        <Row>
          <Col span="8">异常信息：</Col>
          <Col span="16"></Col>
        </Row>
        <Row>
          <Col span="8">处理状态：</Col>
          <Col span="16"></Col>
        </Row>
      </Modal>
      <Modal v-model="modal2" title="编号" :styles="{top: '20px'}" width="1000" ok-text="确定" cancel-text="取消">
        <p slot="header" style="">
          <!-- <Icon type="information-circled"></Icon> -->
          <span>编号：{{detailData.deceiveId}}({{detailData.deceiveAddr}})</span>
        </p>
        <div>
          <Row>
            <Col span="20">
            <DatePicker type="date" placeholder="输入日期" v-model="formItem.date" style="width: 300px"></DatePicker>
            </Col>.
          </Row>
          <table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse;margin-top: 10px">
            <tr>
              <td rowspan="1" colspan="4" height="40px" style="background-color: #2d8cf0;color: white;border-radius: 5px">&emsp;设备信息</td>
            </tr>
            <tr style="text-align: center;">
              <td width="300px" height="40px">总耗能(kW·h)</td>
              <td width="200px">28.139</td>
              <td width="300px">平均单台耗能(kW·h)</td>
              <td width="200px">1.172</td>
            </tr>
            <tr style="text-align: center;">
              <td width="300px" height="40px">总净水流量(m³)</td>
              <td width="200px">0</td>
              <td width="300px">平均单台流量(m³)</td>
              <td width="200px">1</td>
            </tr>
          </table>
          <Row style="margin-top: 10px;">
            <Col span="8">
            <Card>
              <p slot="title" class="card-title">
                总能耗
              </p>
              <div class="data-source-row">
                <data-source-pie></data-source-pie>
              </div>
            </Card>
            </Col>
            <Col span="16">
            <Card style="margin-left: 10px">
              <p slot="title" class="card-title">
                设备耗能(kW·h)
              </p>
              <div class="line-chart-con" style="height: 200px">
                <service-requests></service-requests>
              </div>
            </Card>
            </Col>
          </Row>
          <Row style="margin-top: 10px">
            <Col>
            <Card>
              <p slot="title" class="card-title">
                设备流量、浑浊度
              </p>
              <div class="">
                <visite-volume></visite-volume>
              </div>
            </Card>
            </Col>
          </Row>
        </div>
        <div slot="footer" style="text-align: center"></div>
      </Modal>
    </Row>
  </Card>
</template>
<script>
import axios from '@/libs/api.request'
export default {
  components: {
  },
  data () {
    return {
      modalEventList: false,
      modal2: false,
      modalAdd: false,
      totalPage: 0,
      currentPage: 1,
      pageSize: 10,
      formItem: {
        input: '',
        select: '',
        switch: true,
        date: ''
      },
      
      columns: [{
        title:'预警项目',
        align: 'left',
        key: 'condition',
      },{
        title: '预警条件',
        align: 'left',
        key: 'conditionStr',
      },
      {
        title: '预警条件说明',
        align: 'center',
        key: 'conditionComment',
      },
      {
        title: '操作',
        align: 'center',
        key: 'action',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.modalEventList = true
                }
              }
            }, '详细')
          ])
        }
      }],
      // columns: [{
      //   title: '设备编号',
      //   key: 'deceiveId'
      // },
      // {
      //   title: '设备地址',
      //   key: 'address'
      // },
      // {
      //   title: '创建时间',
      //   key: 'createTime'
      // },
      // {
      //   title: '异常信息',
      //   key: 'expectionInfo'
      // },
      // {
      //   title: '处理状态',
      //   key: 'processStatus'

      // },
      // {
      //   title: '设备负责人',
      //   key: 'userName'
      // },
      // {
      //   title: '设备负责人电话',
      //   key: 'userPhone'
      // },

      // {
      //   title: '操作',
      //   key: 'action',
      //   width: 150,
      //   align: 'center',
      //   render: (h, params) => {
      //     return h('div', [
      //       h('Button', {
      //         props: {
      //           type: 'error',
      //           size: 'small'
      //         },
      //         on: {
      //           click: () => {
      //             this.detailData.deceiveId = params.row.deceiveId
      //             this.detailData.deceiveAddr = params.row.deceiveAddr
      //             this.detailData.createTime = params.row.createTime
      //             this.detailData.expectionInfo = params.row.expectionInfo
      //             this.detailData.processStatus = params.row.processStatus
      //             this.modalEventList = true
      //           }
      //         }
      //       }, '详细')
      //     ])
      //   }
      // },
      // {
      //   title: '查看',
      //   key: 'view',
      //   width: 150,
      //   align: 'center',
      //   render: (h, params) => {
      //     return h('div', [
      //       h('Button', {
      //         props: {
      //           type: 'error',
      //           size: 'small'
      //         },
      //         on: {
      //           click: () => {
      //             this.detailData.deceiveId = params.row.deceiveId
      //             this.detailData.deceiveAddr = params.row.deceiveAddr
      //             console.log(this.modal2)
      //             // this.modal2.props({
      //             //       title: 'User Info'
      //             //   })
      //             // this.modal2.info({title: "123123"});
      //             this.modal2 = true
      //           }
      //         }
      //       }, '查看图表')
      //     ])
      //   }
      // }
      // ],
      eventData: []
    }
  },
  created () {
    this.getDataList(true)
  },
  methods: {
    getPageSize (fixHeight) {
      // 根据屏幕高度获取每页显示条数
      let height = document.documentElement.scrollHeight - fixHeight
      // let height = screen.availHeight - 400; //分页部分可用高度
      // this.tableHeight=height+55
      let num = Math.floor(height / 48)
      if (num < 5) {
        num = 5
      }
      return num
    },
    getDataList (refresh) {
      this.pageLoading = true
      this.tableLoading = true
      let perPageNum = this.getPageSize(300)
      this.pageSize = perPageNum
      axios.request({
        url: 'api/companyDeceiveInfo/find/' + 0 + '/' + perPageNum,
        method: 'get'
      }).then(data => {
        this.companyDataList = data.data.resultData
        this.totalPage = data.data.dataTotal
        this.tableLoading = false
      })
    },
    pageOnChange (pageIndex) {
      this.tableLoading = true
      this.pageLoading = true
      this.companyDataList = []
      let perPageNum = this.getPageSize(300)
      let startIndex = Number((pageIndex - 1) * perPageNum)
      this.pageSize = perPageNum
      let searchValue = this.$refs.searchInput.currentValue
      let apiUrl
      if (searchValue) {
        apiUrl = 'api/companyDeceiveInfo/find/' + searchValue + '/' + startIndex + '/' + perPageNum
      } else {
        apiUrl = 'api/companyDeceiveInfo/find/' + startIndex + '/' + perPageNum
      }
      axios.request({
        url: apiUrl,
        method: 'get'
      }).then(data => {
        this.companyDataList = data.data.resultData
        this.totalPage = data.data.dataTotal
        this.tableLoading = false
      })
      this.currentPage = pageIndex
    },
    // insertEventOk(){
    //   axios.request({
    //     url: 'api/companyInfo/insert/',
    //     method: 'post',
    //     data: {
    //     }
    //   }).then(data => {
    //     this.$Message.success('企业信息新增成功!')
    //     this.currentPage = 1
    // },
    show () {
      this.modalEventList = true
      this.modal2 = true
    },
    ok () {},
    cancel () {

    }

  }
}

</script>
