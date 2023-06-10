<template>
  <Row>
    <Col span="20">
    <Card>
      <Row>
        <Col span="12">
        <h2>企业一览</h2>
        </Col>
        <Col span="2">
          &nbsp;
        </Col>
        <Col span="9">
          <Input placeholder="请输入企业名称或地址" ref="searchInput" @on-enter="searchCompany">
            <Button slot="append" icon="ios-search" ref="searchInput" @click="searchCompany"></Button>
          </Input>
        </Col>
      </Row>
      <br>
      <Row>
        <Table
          border
          :height="tableHeight"
          :stripe=true
          :columns="columnsCompany"
          :data="dataCompany"
          :loading="provLoading"
          style="width: 100%" @on-row-click="qiyeshowOnClick"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page
              ref="pages"
              :total="totalPage"
              :current.sync="currentPage"
              :page-size="pageSize"
              :loading=true
              size="small"
              show-total
              show-sizer
              @on-change="pageOnChange"
              @on-page-size-change="pageSizeOnChange"></Page>
          </div>
        </div>
      </Row>
    </Card>
    </Col>
    <Col span="4">
    <Card >
      <Row>
        <Col span="24">
        <h2>全国设备列表</h2></Col>
      </Row>
      <br>
      <Row>
        <Table border :columns="columnsProvince" :data="dataProvince" :loading="companyLoading" @on-row-click="rowOnClick" size="small"></Table>
      </Row>
    </Card>
    </Col>
    <!-- add -->
    <!-- 点击企业一览内企业弹出详细信息 -->
    <div >
      <Modal v-model="qiyexiangxi" :styles="{top: '5%'}" width="70%" height="20%" class-name="center-modal" @on-visible-change="">
        <p slot="header">
          <span style="font-size: 22px;color:white;">企业详情</span>
        </p>
        <div>
          <Card>
            <Row>
              <Col span="3">企业名称 : </Col>
              <Col span="9">{{xianximingcheng}}</Col>
              <Col span="3">企业地址 : </Col>
              <Col span="9">{{xiangxidizhi}}</Col>
            </Row>
            <Row>
              <Col span="3">负责人 : </Col>
              <Col span="9">{{qiyefuzeren}}</Col>
              <Col span="3">联系方式 : </Col>
              <Col span="9">{{lianxifangshi}}</Col>
            </Row>
            <Row>
              <Col span="3">企业产品 : </Col>
              <Col span="9">{{chanpin}}</Col>
              <Col span="3">企业产能 : </Col>
              <Col span="9">{{channeng}}</Col>
            </Row>
            <Row>
              <Col span="3">环保设备数量 : </Col>
              <Col span="9">{{huanbaoshebeishuliang}}</Col>
              <Col span="3">生产设备数量 : </Col>
              <Col span="9">{{shengchanshebeishuliang}}</Col>
            </Row>
            <Row>
              <Col span="3">监控设备数量 : </Col>
              <Col span="9">{{jiankongshebeishuliang}}</Col>
              <Col span="3">安装位置 : </Col>
              <Col span="9">{{anzhuangweizhi}}</Col>
            </Row>
            <Row>
              <Col span="3">预警条件 : </Col>
              <Col span="9">{{yujingtiaojian}}</Col>
            </Row>
          </Card>
        </div>
        
        <div>
          <card >
            <h2>日期历史记录</h2>
            <Tabs type="card" @on-click="huoqunian" :animated="false" >
              <TabPane label="2019">
                  <div id="historyerrmessage">
                  </div>
                  <div class="yearsHistory">
                    <div class="tongjibox">年度历史记录统计</div>
                    <div class="statistics-div">
                    </div>
                  </div>
              </TabPane>
              <!-- <TabPane label="2019">
                  <div id="historyerrmessage">
                  </div>
                  <div class="yearsHistory">
                    <div class="tongjibox">年度历史记录统计</div>
                    <div class="statistics-div">
                    </div>
                  </div>
              </TabPane>
              <TabPane label="2020">
                  <div id="historyerrmessage">
                  </div>
                  <div class="yearsHistory">
                    <div class="tongjibox">年度历史记录统计</div>
                    <div class="statistics-div">
                    </div>
                  </div>
              </TabPane> -->
            </Tabs> 
          </card>
        </div>

      </Modal>
    </div>
    <!-- add -->
  </Row>
</template>
<script>
import axios from '@/libs/api.request'
export default {
  mounted () {},
  data () {
    name:''
    return {
      //add
      qiyexiangxi:false,
      xiangxidizhi:"",
      xianximingcheng:'',
      qiyefuzeren:'',
      lianxifangshi:'',
      channeng:'',
      chanpin:'',
      huanbaoshebeishuliang:'',
      shengchanshebeishuliang:'',
      jiankongshebeishuliang:'',
      anzhuangweizhi:'',
      yujingtiaojian:"",

      startData:"",
      endData:"",
      historyDate:"",
      companyName:"",
      exception:"",
      clickyear:"",




      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      tableHeight: 300,
      provLoading: false,
      companyLoading: false,
      provCode: '00',
      columnsProvince: [{
        title: '地区',
        align: 'center',
        key: 'areaName'
      },
      {
        title: '设备数量',
        align: 'center',
        key: 'companyNum'
      }],
      dataProvince: [],
      columnsCompany: [
        {
          title: ' ',
          width: 60,
          align: 'center',
          key: 'companyName',
          render: (h, params) => {
            let rowNum = (params.index + 1) + ((this.currentPage - 1) * this.pageSize)
            return h('span', rowNum)
          }
        },
        {
          title: '企业名称',
          width: 300,
          align: 'left',
          key: 'companyName',
          render: (h, params) => {
            return h('span', params.row.companyName)
          }
        },
        {
          title: '企业编码',
          align: 'left',
          width: 150,
          key: 'companyCode',
          render: (h, params) => {
            return h('span', params.row.companyCode)
          }
        },
        {
          title: '企业地址',
          align: 'left',
          width: 300,
          key: 'address',
          render: (h, params) => {
            return h('span', params.row.address)
          }
        },
        {
          title: '定位经度',
          align: 'right',
          width: 150,
          key: 'lng',
          render: (h, params) => {
            return h('span', params.row.lng)
          }
        },
        {
          title: '定位纬度',
          align: 'right',
          width: 150,
          key: 'lat',
          render: (h, params) => {
            return h('span', params.row.lat)
          }
        },
        {
          title: '企业负责人',
          align: 'left',
          width: 150,
          key: 'manager',
          render: (h, params) => {
            return h('span', params.row.manager)
          }
        },
        {
          title: '负责人电话',
          align: 'left',
          width: 150,
          key: 'managerPhone',
          render: (h, params) => {
            return h('span', params.row.managerPhone)
          }
        },
        {
          title: '企业产品',
          align: 'left',
          width: 150,
          key: 'chanpin',
          render: (h, params) => {
            return h('span', params.row.chanpin)
          }
        },
        {
          title: '主要产能',
          align: 'left',
          width: 150,
          key: 'channeng',
          render: (h, params) => {
            return h('span', params.row.channeng)
          }
        },
        {
          title: '环保设备数量',
          align: 'left',
          width: 150,
          key: 'huanbaoshebeishuliang',
          render: (h, params) => {
            return h('span', params.row.huanbaoshebeishuliang)
          }
        },
        {
          title: '生产设备数量',
          align: 'left',
          width: 150,
          key: 'shengchanshebeishuliang',
          render: (h, params) => {
            return h('span', params.row.shengchanshebeishuliang)
          }
        },
        {
          title: '监控设备数量',
          align: 'left',
          width: 200,
          key: 'jiankongshebeishuliang',
          render: (h, params) => {
            return h('span', params.row.jiankongshebeishuliang)
          }
        },
        {
          title: '安装位置',
          align: 'left',
          width: 150,
          key: 'anzhuangweizhi',
          render: (h, params) => {
            return h('span', params.row.anzhuangweizhi)
          }
        },
        {
          title: '预警条件',
          align: 'left',
          width: 300,
          key: 'yujingtiaojian',
          render: (h, params) => {
            return h('span', params.row.yujingtiaojian)
          }
        }],
      dataCompany: []
    }
  },
  created () {
    this.getProviceData()
    this.getCompanyWithProvData('00')
  },
  methods: {
    nowyear(){
      let currentDate = new Date()
      let currentYear = currentDate.getFullYear()
      this.clickyear = currentYear;
    },
    huoqunian(tabIndex){
      this.clickyear=this.clickyear+tabIndex
      this.geterrData()
    },
    // 添加历史记录盒子
    addbox(){
      const historyerrmessage = document.querySelector('#historyerrmessage');

      let errbox = `
          <div id="errbox"></div>
      `
      historyerrmessage.insertAdjacentHTML('beforeend', errbox); 


      let t = '<div><div class="daysStyle" style="border:none;display: inline-block; width:38px;height:22px;"></div>';
      for (let i = 0; i < 31; i++) {
        let s = 
          `
          <div class="daysStyle">${i+1}</div>
          `
        t += s;
      };
      t += '</div>'
      historyerrmessage.insertAdjacentHTML('beforeend', t);  

      let t2 = '<div class="monthStyle" style="border:none; width:38px;height:22px;"></div>';
      for (let i = 0; i < 12; i++) {
        let s = 
          `
          <div class="monthStyle">${i+1}月</div>
          `
        t2 += s;
      };
      
      
      historyerrmessage.insertAdjacentHTML('beforeend', t2)
    },
    // 年度历史记录
    geterrData() {
      const {companyCode} = this
      axios.request({
        url: `api/homepage/queryHistoryDate/${companyCode}/${this.clickyear}`,
        method: 'get'
      }).then(data => {
        const str2int = (s) => {
          const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          let [_, m, d] = s.split('-').map(s => parseInt(s))
          for (let i = 0; i < m - 1; i++) {
              d += months[i]
          }
          return d
        }

        const zfill = (s, width=2) => {
          s = String(s)
          while (s.length < width) {
              s = '0' + s
          }
          return s
        }

        const int2str = (n) => {
          n = n + 1
          const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          let s = '2018-'
          let m = 1
          let d = 0
          let x = months[m-1]
          while (x < n) {
              d = x
              x += months[m]
              m++
          }
          s = s + zfill(m) + '-' + zfill(n - d)
              return s
        }
        const bo2int = (bo1, bo2) => {
          // console.log('bo1, bo2', bo1, bo2)
          let value = 0
          if (bo1) {
              // true 没有条件 yellow
              value = 2
          } else if (bo2) {
              // true 异常 red
              value = 1
          }
          // 有数据 正常 green
          return value
        }
        const dataForYear = []
        const datas = data.data.forEach(e => {
        // const datas = JSON.parse(data).data.forEach(e => {
          let i = str2int(e.historyDate) - 1
          let v = bo2int(e.hasExceptionCond, e.exception)
          dataForYear[i] = v
        })
        dataForYear[364] = dataForYear[364]

        for (let i = 0; i < dataForYear.length; i++) {
          if (dataForYear[i] === undefined) {
              dataForYear[i] = 3
          }
        }
        // console.log(dataForYear)
        function colorbox(baoEleStr, data) {
          const e = document.querySelector.bind(document)
          const container = e(baoEleStr)
          const templateCell = (o) => {
              const {x, y, v} = o
              // 类名 决定显示的颜色
              let className = ['green', 'red', 'yellow', 'gray']
              const t = `
                  <div class="cell ${className[v % className.length]}" style="top: ${x*28+25}px; left: ${y*28+25}px"></div>
              `
              return t
          }

          const appendHTML = (element, t) => {
              element.insertAdjacentHTML('beforeend', t)
          }

          const addCss = () => {
              const t = `
                  <style>
                      .cell {
                          position: absolute;
                          width: 26px;
                          height: 26px;
                      }
                      .green {
                          background: #25a925;
                      }
                      .red {
                          background: #f32222;
                      }
                      .yellow {
                          background: yellow;
                      }
                      .gray {
                          background: gray;
                      }
                  </style>
              `
              const head = document.head
              head.insertAdjacentHTML('beforeend', t)
          }

          const int2point = (n) => {
              n = n + 1
              const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
              let s = '2018-'
              let m = 1
              let d = 0
              let x = months[m-1]
              while (x < n) {
                  d = x
                  x += months[m]
                  m++
              }
              return {x: m, y: (n - d)}
          }

          const arr2boxs = (arr) => {
              const boxs = arr.map((e, i) => {
                  const {x, y} = int2point(i)
                  const o = {
                      x: x,
                      y: y,
                      v: e,
                  }
                  return o
              })
              return boxs
          }

          const insertCell = (arr) => {
              arr.forEach((box) => {
                  const t = templateCell(box)
                  appendHTML(container, t)
              })
          }

          const __main = () => {
              addCss()
              const boxs = arr2boxs(data)
              insertCell(boxs)
          }

          __main()

        }

        colorbox('#errbox', dataForYear)
          this.tongji(dataForYear)
        })
        this.nowyear()
    },
    // 年度历史记录下进度条
    tongji(tongjiData){
      const Statis = function(data, colors, statusValues, container, size, font) {
          this.data           = data
          this.colors         = colors
          this.statusValues   = statusValues
          this.statisData     = new Array(statusValues.length)
          this.container      = container
          this.width          = size.width
          this.height         = size.height
          this.font           = font
      };

      Statis.prototype.getElement = function(selector) {
          return document.querySelector(selector)
      };

      Statis.prototype.updateStatis = function() {
          this.statisData.fill(0)
          this.data.forEach((v) => {
              ;(this.statisData[v])++
          })
          this.statisData.forEach((v, i) => {
              this.statisData[i] = v / 365
          })
      };

      Statis.prototype.addCss = function() {
          const colors    = this.colors
          const width     = this.width
          const height    = this.height
          const container = this.container
          const statisData = this.statisData
          //
          let style = `
              <style>
                  .statistics-div{
                      height: ${height}px;
                  }
                  .${container} {
                      width: ${width}px;
                  }
          `
          //
          for (let i = 0; i < colors.length; i++) {
              style += `
                  .wfb-statis-${i} {
                      float: left;
                      height: ${height}px;
                      width: ${statisData[i] * width}px;
                      background: ${colors[i]};
                  }
              `
          }
          style += '</style>'
          document.head.insertAdjacentHTML('beforeend', style)
      };

      Statis.prototype.render = function() {
          let t = ''
          let top = this.font.top
          let offset = this.font.offset
          let st = this.font.style

          for (let i = 0; i < this.colors.length; i++) {
              // let ppp=['正常','异常','待定','无数据']
              let value = Math.round(this.statisData[i] * 100)
              let s = ''
              if (value !== 0) {
                  s = value + '%'
              }
              let left = this.statisData[i] * this.width / 2 - offset
              t += `
                  <div class="wfb-statis-${i}" style="position: relative;">
                      <div style="position: absolute; top: ${top}px; left: ${left}px; ${st}">${s}</div>
                  </div>
              `
          }
          const container = this.getElement('.' + this.container)
          container.insertAdjacentHTML('beforeend', t)
      };

      Statis.prototype.init = function() {
          (this.getElement('.' + this.container)).innerHTML = ''
      };

      Statis.prototype.run = function() {
          this.init()
          this.updateStatis()
          this.addCss()
          this.render()
      };

      const status = ['normal', 'abnormal', 'noExpCod', 'nodata']
      //
      const colors = ['green', '#f32222', 'yellow', 'gray']
      const statusValues = [0, 1, 2, 3]
      const container = 'statistics-div'
      const size = {height: 10, width: 848}
      const font = {top: -20, offset: 12, style: ''}
      //
      // statusValues.length === colors.length
      const s = new Statis(tongjiData, colors, statusValues, container, size, font)
      s.run()
    },

    getPageSize() {
      //根据屏幕高度获取每页显示条数
      let height = window.innerHeight - 300
      let num = Math.floor(height / 48)
      this.tableHeight = height + 75
      if (num < 5) {
        num = 5
      }
      return num
    },
    getProviceData () {
      this.provLoading = true
      axios.request({
        url: 'api/companyInfo/findCompanyInCountry',
        method: 'get'
      }).then(data => {
        let rtnData = data.data
        this.dataProvince = rtnData
        this.provLoading = false
      })
    },
    getCompanyWithProvData (provCode) {
      this.provCode = provCode
      this.companyLoading = true
      this.currentPage = 1
      let perPageNum = this.getPageSize()
      axios.request({
        url: 'api/companyInfo/findCompanyInCountry/prov/' + provCode + '/1/' + this.pageSize,
        method: 'get'
      }).then(data => {
        let rtnData = data.data
        this.dataCompany = rtnData.resultData
        this.totalPage = rtnData.dataTotal
        this.companyLoading = false
      })
    },
    pageOnChange (pageIndex) {
      this.companyLoading = true
      this.dataCompany = []
      let perPageNum = this.getPageSize()
      let startIndex = Number((pageIndex - 1) * this.pageSize)
      let apiStr = ''
      if (this.$refs.searchInput.currentValue === "") {
        apiStr = 'api/companyInfo/findCompanyInCountry/prov/' + this.provCode + '/' + startIndex + '/' + this.pageSize
      } else {
        const conditions = this.$refs.searchInput.currentValue;
        apiStr = 'api/companyInfo/findByCond/' + conditions + '/' + startIndex + '/' + this.pageSize
      }
      axios.request({
        url: apiStr,
        method: 'get'
      }).then(data => {
        let rtnData = data.data
        this.dataCompany = rtnData.resultData
        this.totalPage = rtnData.dataTotal
        this.companyLoading = false
      })
      this.currentPage = pageIndex
    },
    pageSizeOnChange(event) {
      this.pageSize = event
      this.pageOnChange(1)
    },
    rowOnClick(rowData) {
      this.getCompanyWithProvData(rowData.areaCode)
    },
    searchCompany(event) {
      if (this.$refs.searchInput.currentValue === "") {
        this.getProviceData()
        this.getCompanyWithProvData('00')
        return
      }
      const conditions = this.$refs.searchInput.currentValue;
      this.companyLoading = true
      axios.request({
        url: 'api/companyInfo/findByCond/' + conditions + '/1/' + this.pageSize,
        method: 'get'
      }).then(data => {
        let rtnData = data.data
        this.dataCompany = rtnData.resultData
        this.totalPage = rtnData.dataTotal
        this.companyLoading = false
      })
    },
    //add
    qiyeshowOnClick(e){
      var errbox = document.querySelector("#errbox")
      if (errbox) {
        errbox.remove()   
      }
      document.querySelectorAll(".daysStyle").forEach(e => e.remove())
      document.querySelectorAll(".monthStyle").forEach(e => e.remove())

      this.qiyexiangxi=true,
      this.xiangxidizhi=e.address
      this.xianximingcheng=e.companyName
      this.qiyefuzeren=e.manager
      this.lianxifangshi=e.managerPhone
      this.channeng=e.channeng
      this.chanpin=e.chanpin
      this.huanbaoshebeishuliang=e.huanbaoshebeishuliang
      this.shengchanshebeishuliang=e.shengchanshebeishuliang
      this.jiankongshebeishuliang=e.jiankongshebeishuliang
      this.anzhuangweizhi=e.anzhuangweizhi
      this.yujingtiaojian=e.yujingtiaojian
      this.companyCode = e.companyCode
      this.nowyear()
      this.addbox()
      this.geterrData()

      // 添加函数调用的位置错了！！！！！
      // this.tongji()
    }
    //add
  }
}
</script>
<style>
  .errmsgstyle{
    text-align: center;
  }
  #historyerrmessage{
    width: 960px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    background-size: 100% 100%;
    border-radius: 10px;
    overflow: hidden;
    height: 435px;
    font-style: italic;
    font-size: 14px;
    padding: 25px;
    visibility: visible;
    border: 1px solid black;
  }
  #errbox{
    position: absolute;
    left: 10px;
    top: -4.9px;
  }

  .daysStyle{
    display: inline-block;
    width: 28px;
    text-align: center;
    float: left;
    border-right: 1px solid #589fc5;
    border-bottom: 1px solid #589fc5;
  }
  .monthStyle{
    width: 37px;
    border-right: 1px solid #589fc5;
    border-bottom: 1px solid #589fc5;
    text-align: center;
    float: initial;
    height: 28px;
  }
  .tongjibox{
    display: inline-block;
    width: 112px;
    height: 20px;
  }
  .statistics-div{
    display:inline-block;
    margin:0 auto;
    margin-top:20px;
    vertical-align: sub;
  }
  .yearsHistory{
    margin-left:158px;
  }
  /*.ivu-row :hover {
    background: #fbf8e9;
    -o-transition: all 0.1s ease-in-out;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }*/
</style>