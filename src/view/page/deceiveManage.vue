<template>
  <Row>
    <Col>
    <Card>
      <Row>
        <Col span="12">
        <h2>设备管理</h2>
        </Col>
      </Row>
      <br>
      <Row>
        <Table border :stripe=true :columns="columns" :data="dataAllList" :loading="tableLoading" style="width: 100%"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page ref="pages" :total="totalPage" :current.sync="currentPage" :page-size="pageSize" :loading=true size="small" show-total @on-change="pageOnChange"></Page>
          </div>
        </div>
        <Modal v-model="modalAdd" title="新增设备">
          <Row>
            <Col>
            <Form :model="formItem" :label-width="105" style="margin-top: 10px;">
              <FormItem label="设备编号 : ">
                <Input v-model="formItem.input1" placeholder="请输入设备编号" clearable></Input>
              </FormItem>
              <FormItem label="设备地址 : ">
                <Input v-model="formItem.input2" placeholder="请输入设备地址" clearable></Input>
              </FormItem>
              <FormItem label="建设规模 : ">
                <Input v-model="formItem.input3" placeholder="请输入建设规模" clearable></Input>
              </FormItem>
              <FormItem label="工艺 : ">
                <Input v-model="formItem.input4" placeholder="请输入工艺" clearable></Input>
              </FormItem>
              <FormItem label="监控状态 : ">
                <Input v-model="formItem.input5" placeholder="请输入监控状态" clearable></Input>
              </FormItem>
              <FormItem label="设备负责人 : ">
                <Input v-model="formItem.input6" placeholder="请输入设备负责人" clearable></Input>
              </FormItem>
              <FormItem label="负责人联系方式 : ">
                <Input v-model="formItem.input7" placeholder="请输入负责人联系方式" clearable></Input>
              </FormItem>
              <FormItem label="经度 : ">
                <Input v-model="formItem.input8" placeholder="请输入经度" clearable></Input>
              </FormItem>
              <FormItem label="纬度 : ">
                <Input v-model="formItem.input9" placeholder="请输入纬度" clearable></Input>
              </FormItem>
            </Form>
            </Col>
          </Row>
        </Modal>
        <Modal v-model="modalUpdate" title="修改信息" @on-ok="ok" @on-cancel="cancel" class-name="center-modal">
          <Form :model="formItem" :label-width="110" style="">
            <FormItem label="设备编号：">
              <Input v-model="detailData.monitor_object_sn" disabled></Input>
            </FormItem>
            <FormItem label="设备地址：">
              <Input v-model="detailData.detail_address" clearable></Input>
            </FormItem>
            <FormItem label="建设规模：">
              <Input v-model="detailData.devsize" clearable></Input>
            </FormItem>
            <FormItem label="工艺：">
              <Input v-model="detailData.devtec" clearable></Input>
            </FormItem>
            <FormItem label="监控状态：">
              <Input v-model="detailData.status" clearable></Input>
            </FormItem>
            <FormItem label="设备负责人：">
              <Input v-model="detailData.user_name" clearable></Input>
            </FormItem>
            <FormItem label="负责人联系方式：">
              <Input v-model="detailData.user_phone" clearable></Input>
            </FormItem>
            <FormItem label="原密码：">
              <Input type="password" clearable></Input>
            </FormItem>
            <FormItem label="重置密码：">
              <Input type="password" clearable></Input>
            </FormItem>
          </Form>
        </Modal>
        <Modal v-model="modal1" title="详情信息" @on-ok="ok" @on-cancel="cancel" class-name="center-modal">
          <Row>
            <Col span="8">设备地址：</Col>
            <Col span="16">{{detailData.detail_address}}</Col>
          </Row>
          <Row>
            <Col span="8">设备编号：</Col>
            <Col span="16">{{detailData.monitor_object_sn}}</Col>
          </Row>
          <Row>
            <Col span="8">建设规模：</Col>
            <Col span="16">{{detailData.devsize}}</Col>
          </Row>
          <Row>
            <Col span="8">工艺：</Col>
            <Col span="16">{{detailData.devtec}}</Col>
          </Row>
          <Row>
            <Col span="8">监控状态：</Col>
            <Col span="16">{{detailData.status}}</Col>
          </Row>
          <Row>
            <Col span="8">设备负责人：</Col>
            <Col span="16">{{detailData.user_name}}</Col>
          </Row>
          <Row>
            <Col span="8">负责人联系方式：</Col>
            <Col span="16">{{detailData.user_phone}}</Col>
          </Row>
        </Modal>
        <Modal v-model="modalCompany" title="设备分配" @on-ok="ok" @on-cancel="cancel" class-name="center-modal" width="30%">
          <Row style="margin-left: 20px;">
            <Col span="6">人员编号：</Col>
            <Col span="18"> {{detailData.monitor_object_sn}}</Col>
          </Row>
          <Row style="margin-left: 20px;">
            <Col span="6" style="margin-top: 10px">人员姓名：</Col>
            <Col span="18" style="margin-top: 10px">{{detailData.deviceName}}</Col>
          </Row>
          <br>
          <Transfer :data="data3" :target-keys="targetKeys3" :list-style="listStyle" :operations="['移除','添加']" filterable :filter-method="filterMethod2" @on-change="handleChange3" :titles="['全部企业', '所属企业']">
          </Transfer>
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
import axios from '@/libs/api.request';
export default {
  mounted() {},
  data() {
    name: ''
    return {
      modal1: false,
      modalAdd: false,
      modalUpdate: false,
      modalDelete: false,
      modalCompany: false,
      tableLoading: false,
      formItem: {
        input: '',
        select: '',
        switch: true,
        date: ''
      },
      data3: this.getMockData3(),
      targetKeys3: this.getTargetKeys3(),
      listStyle: {
        width: '40%',
        margin: '1%'
      },
      pageLoading: true,
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      detailData: {
        detail_address: '',
        monitor_object_sn: '',
        deviceName: '',
        devsize: '',
        devtec: '',
        status: '',
        user_name: '',
        user_phone: ''
      },
      columnsWide: [{
          title: '地区',
          align: 'center',
          key: 'areaname'
        },
        {
          title: '设备数量',
          align: 'center',
          key: 'val'
        }
      ],
      dataWide: [],
      columns: [
        {
          title: '设备节点',
          align: 'center',
          key: 'nodeIndex'
        },
        {
          title: '传感器数量',
          align: 'center',
          key: 'subDeceiveCount',
          render: (h, params) => {
            return h('span', params.row.subDeceiveInfo.length)
          }
        },
        {
          title: '传感器明细',
          align: 'center',
          key: 'subDeceiveDetail',
          render: (h, params) => {
            let colArr = new Array();
            params.row.subDeceiveInfo.forEach(function(dataInfo,dataIdx,dataArray) {
              let dispStr = dataInfo.comment;
              colArr.push(h('Col', {
                props: {
                    span: '4'
                }
              },dispStr));
            });
            return h('Row', colArr)
          }
        },
      ],
      dataAllList: []
    }
  },
  created() {
    this.getDataList(true);
  },
  methods: {
    getPageSize() {
      //根据屏幕高度获取每页显示条数
      let height = window.innerHeight - 300;
      let num = Math.floor(height / 48);
      if (num < 5) {
        num = 5;
      }
      return num;
    },
    getDataList(refresh) {
      this.pageLoading = true;
      let perPageNum = this.getPageSize();
      this.pageSize = perPageNum;
      axios.request({
        url: 'api/deceive/find/deceive/设备/' + 0 + '/' + perPageNum,
        method: 'get',
      }).then(data => {
        this.dataAllList = data.data.resultData;
        this.totalPage = data.data.dataTotal;
      })
    },
    getMockData3() {
      let mockData = [];
      let deceiveId = ['辽宁省营口市大石桥市金和耐火材料厂（B）', '辽宁省营口市大石桥市金和耐火材料厂', '辽宁省营口市大石桥市营口贺祥耐火材料有限公司', '辽宁省营口市大石桥市营口东祥镁制品有限公司', '辽宁省营口市大石桥市营口久弘耐火材料有限公司'];
      deceiveId.forEach((Id, index) =>
        mockData.push({
          label: Id,
          key: index,
        })
      )
      return mockData;
    },
    getTargetKeys3() {
      return this.getMockData3()
        .filter(() => Math.random() * 2 > 1)
        .map(item => item.key);
    },
    handleChange3(newTargetKeys) {
      this.targetKeys3 = newTargetKeys;
    },
    pageOnChange(pageIndex) {
      this.tableLoading = true;
      this.pageLoading = true;
      this.dataAllList = [];
      let perPageNum = this.getPageSize();
      let startIndex = Number((pageIndex - 1) * perPageNum);
      this.pageSize = perPageNum;
      axios.request({
        url: 'api/deceive/find/deceive/设备/' + startIndex + '/' + perPageNum,
        method: 'get',
      }).then(data => {
        this.dataAllList = data.data.resultData;
        this.totalPage = data.data.dataTotal;
        this.tableLoading = false;
      })
      this.currentPage = pageIndex;
    },
    show() {
      this.modal1 = true
    },
    ok() {},
    cancel() {

    }
  }
}

</script>
