<template>
  <Row>
    <Col>
    <Card>
      <Row>
        <Col span="3">
          <h2>企业管理</h2>
        </Col>
        <Col span="2">
          &nbsp;
        </Col>
        <Col span="9">
          <Input placeholder="请输入企业名称或地址" ref="searchInput" @on-enter="searchCompany">
            <Button slot="append" icon="ios-search" @click="searchCompany"></Button>
          </Input>
        </Col>
        <Col span="8">
          &nbsp;
        </Col>
        <Col span="2">
          <Button type="primary" @click="showInserCompany">新增企业</Button>
        </Col>
      </Row>
      <br>
      <Row>
        <Table
          ref="tableCompanyInfoList"
          :height="tableHeight"
          :stripe=true
          :columns="companyListcolumns"
          :loading="tableLoading"
          :data="companyDataList"
          border
          style="width: 100%;"
          size="small"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page
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
        <Modal
          v-model="modalCompanyInsert"
          title="新增企业"
          class-name="center-modal"
          @on-visible-change="companyBeforeClose">
          <Row>
            <Col>
              <Form ref="insertCompanyFormItem" :rules="ruleCompany" :model="insertCompanyFormItem" :label-width="105" style="margin-top: 10px;">
                <FormItem label="地区 : " prop="area">
                  <al-cascader ref="insertCompanyFormCascader" level="2" v-model="insertCompanyFormItem.area" placeholder="请选择地区"/>
                </FormItem>
                <FormItem label="企业名称 : " prop="companyName">
                  <Input v-model="insertCompanyFormItem.companyName" placeholder="请输入企业名称" clearable></Input>
                </FormItem>
                <FormItem label="企业编码 : " prop="companyCode">
                  <Input v-model="insertCompanyFormItem.companyCode" placeholder="请输入企业编码" clearable></Input>
                </FormItem>
                <FormItem label="企业地址 : " prop="address">
                  <Input v-model="insertCompanyFormItem.address" placeholder="请输入企业地址" clearable></Input>
                </FormItem>
                <FormItem label="定位经度 : " prop="lng">
                  <Input v-model="insertCompanyFormItem.lng" placeholder="请输入定位经度" clearable></Input>
                </FormItem>
                <FormItem label="定位纬度 : " prop="lat">
                  <Input v-model="insertCompanyFormItem.lat" placeholder="请输入定位纬度" clearable></Input>
                </FormItem>
                <FormItem label="企业负责人 : " prop="manager">
                  <Input v-model="insertCompanyFormItem.manager" placeholder="请输入负责人名称" clearable></Input>
                </FormItem>
                <FormItem label="企业负责人电话 : " prop="managerPhone">
                  <Input v-model="insertCompanyFormItem.managerPhone" placeholder="请输入负责人电话" clearable></Input>
                </FormItem>
              </Form>
            </Col>
          </Row>
          <Row slot="footer">
              <Button type="text" @click="cancel('modalCompanyInsert')">取消</Button>
              <Button type="primary" @click="insertCompanyOk('insertCompanyFormItem')">确定</Button>
          </Row>
        </Modal>
        <Modal
          v-model="modalCompanyEdit"
          title="修改企业信息"
          class-name="center-modal"
          @on-visible-change="companyBeforeClose">
          <Row>
            <Col>
              <Form ref="editCompanyFormItem" :rules="ruleCompany" :model="editCompanyFormItem" :label-width="105" style="margin-top: 10px;">
                <FormItem label="地区 : " prop="area">
                  <al-cascader ref="editCompanyFormCascader" :level="2" v-model="editCompanyFormItem.area" placeholder="请选择地区"/>
                </FormItem>
                <FormItem label="企业名称 : " prop="companyName">
                  <Input v-model="editCompanyFormItem.companyName" placeholder="请输入企业名称" clearable></Input>
                </FormItem>
                <FormItem label="企业编码 : " prop="companyCode">
                  <Input v-model="editCompanyFormItem.companyCode" placeholder="请输入企业编码" clearable disabled></Input>
                </FormItem>
                <FormItem label="企业地址 : " prop="address">
                  <Input v-model="editCompanyFormItem.address" placeholder="请输入企业地址" clearable></Input>
                </FormItem>
                <FormItem label="定位经度 : " prop="lng">
                  <Input v-model="editCompanyFormItem.lng" placeholder="请输入定位经度" clearable></Input>
                </FormItem>
                <FormItem label="定位纬度 : " prop="lat">
                  <Input v-model="editCompanyFormItem.lat" placeholder="请输入定位纬度" clearable></Input>
                </FormItem>
                <FormItem label="企业负责人 : " prop="manager">
                  <Input v-model="editCompanyFormItem.manager" placeholder="请输入负责人名称" clearable></Input>
                </FormItem>
                <FormItem label="企业负责人电话 : " prop="managerPhone">
                  <Input v-model="editCompanyFormItem.managerPhone" placeholder="请输入负责人电话" clearable></Input>
                </FormItem>
                <!-- add -->
                <FormItem label="企业产品 : " prop="chanpin">
                  <Input v-model="editCompanyFormItem.chanpin" placeholder="请输入企业产品" clearable></Input>
                </FormItem>
                <FormItem label="主要产能 : " prop="channeng">
                  <Input v-model="editCompanyFormItem.channeng" placeholder="请输入企业产能" clearable></Input>
                </FormItem>
                <FormItem label="环保设备数量 : " prop="huanbaoshebeishuliang">
                  <Input v-model="editCompanyFormItem.huanbaoshebeishuliang" placeholder="请输入环保设备数量" clearable></Input>
                </FormItem>
                <FormItem label="生产设备数量 : " prop="shengchanshebeishuliang">
                  <Input v-model="editCompanyFormItem.shengchanshebeishuliang" placeholder="请输入生产设备数量" clearable></Input>
                </FormItem>
                <FormItem label="监控设备数量 : " prop="jiankongshebeishuliang">
                  <Input v-model="editCompanyFormItem.jiankongshebeishuliang" placeholder="请输入监控设备数量" clearable></Input>
                </FormItem>
                <FormItem label="安装位置 : " prop="anzhuangweizhi">
                  <Input v-model="editCompanyFormItem.anzhuangweizhi" placeholder="请输入安装位置" clearable></Input>
                </FormItem>
                <FormItem label="预警条件 : " prop="yujingtiaojian">
                  <Input v-model="editCompanyFormItem.yujingtiaojian" placeholder="请输入预警条件" clearable></Input>
                </FormItem>
              </Form>
            </Col>
          </Row>
          <Row slot="footer">
              <Button type="text" @click="cancel('modalCompanyEdit')">取消</Button>
              <Button type="primary" @click="editCompanyOk('editCompanyFormItem')">确定</Button>
          </Row>
        </Modal>
        <Modal
          v-model="modalLineInsert"
          title="新增生产线"
          class-name="center-modal"
          @on-visible-change="companyBeforeClose">
          <Row>
            <Col>
            <Form ref="insertLineFormItem" :rules="ruleLine" :model="insertLineFormItem" :label-width="100" style="margin-top: 10px;">
              <FormItem label="监控设备ID : " prop="lineDeceiveId">
                <Input v-model="insertLineFormItem.lineDeceiveId" placeholder="请输入监控设备ID" clearable></Input>
              </FormItem>
              <FormItem label="生产线名称 : " prop="lineName">
                <Input v-model="insertLineFormItem.lineName" placeholder="请输入生产线名称" clearable></Input>
              </FormItem>
              <FormItem label="生产线节点 : " prop="nodeIndex">
                <Input v-model="insertLineFormItem.nodeIndex" placeholder="请输入生产线节点" clearable></Input>
              </FormItem>
              <FormItem label="负责人名称 : " prop="lineManager">
                <Input v-model="insertLineFormItem.lineManager" placeholder="请输入负责人名称" clearable></Input>
              </FormItem>
              <FormItem label="负责人电话 : " prop="lineManagerPhone">
                <Input v-model="insertLineFormItem.lineManagerPhone" placeholder="请输入负责人电话" clearable></Input>
              </FormItem>
            </Form>
            </Col>
          </Row>
          <Row slot="footer">
              <Button type="text" @click="cancel('modalLineInsert')">取消</Button>
              <Button type="primary" @click="insertLineOk('insertLineFormItem')">确定</Button>
          </Row>
        </Modal>

        <Modal v-model="modalLineList"  @on-ok="lineDetailOk" @on-cancel="cancel" class-name="center-modal" width="70%">
          <p slot="header" style="">
            <span >{{selectCompanyRow.companyInfo.companyName}}</span>
          </p>
          <Table border :stripe=true :columns="columnLineDetail" :data="detailLineData" style="width: 100%" size="small"></Table>
        </Modal>

        <Modal v-model="modalDeceiveList" title="设备信息" @on-ok="insertSubDeceiveList" @on-cancel="cancel" class-name="center-modal" width="40%">
          <Row>
            <div>
              <Button type="primary" size="small" style="float: right;" @click="createDeceiveRow">新增设备</Button>
            </div>
          </Row>
          <br>
          <Row>
            <div class="edittable-table-height-con">
              <can-edit-table refs="tableDeceiveList" v-model="subDeceiveListData" :columns-list="subDeceiveListColumns"></can-edit-table>
            </div>
          </Row>
        </Modal>
        <Modal
          v-model="modalDeceiveThresholdList"
          title="监控点阈值设定"
          @on-ok="insertDeceiveThresholdList"
          @on-cancel="cancel"
          class-name="center-modal"
          width="40%">
          <Tabs ref="subDeceiveThresholdTabs" type="card" size="small" @on-click="getDeceiveListData" :animated="false" :value="subDeceiveTabsIndex">
            <TabPane v-for="(subDeceiveTab,index) in subDeceiveTabs" :key="index" :label="`${subDeceiveTab.comment}`" :value="subDeceiveTabsIndex">
              <div class="edittable-table-height-con">
                <can-edit-table
                  refs="tableDeceiveThreshold"
                  v-model="subDeceiveThresholdListData"
                  :columns-list="subDeceiveThresholdListColumns"></can-edit-table>
              </div>
            </TabPane>
          </Tabs>
        </Modal>
        <Modal
          ref="refExceptionCond"
          v-model="modalExceptionCond"
          title="预警条件设定"
          class-name="center-modal"
          width="60%">
          <Card style="width: 97%">
            <Table border :columns="subDeceiveTable" :data="subDeceiveTableData" size="small"></Table>
          </Card>
          <br>
          <Card>
            <Row :gutter="16">
              <Col offset="22" span="2">
                <Button type="primary" size="small" @click="createExceptionCondRow">新增条件</Button>
              </Col>
            </Row>
            <br>
            <Row>
              <div class="edittable-table-height-con" style="width:99%">
                <can-edit-table refs="tableDeceiveException" v-model="deceiveExceptionListData" :columns-list="deceiveExceptionListColumns"></can-edit-table>
              </div>
            </Row>
          </Card>
          <Row slot="footer">
              <Button type="text" @click="cancel('modalExceptionCond')">取消</Button>
              <Button type="primary" @click="insertExceptionCondList">确定</Button>
          </Row>
        </Modal>
      </Row>
    </Card>
    </Col>
  </Row>
</template>
<script>
    import axios from '@/libs/api.request'
    import canEditTable from '../components/canEditTable.vue'
    import alCascader from '../components/al-cascader.vue'
    export default {
        name: 'company',
        components: {
            canEditTable,
            alCascader
        },
        mounted: function () {},
        data () {
            return {
                tableHeight: 400,
                selectCompanyRow: {companyInfo: {}},
                selectLineRow: {},
                selectLineIndex: '',
                pageSize: 10,
                tableLoading: false,
                pageLoading: true,
                currentPage: 1,
                totalPage: 0,
                modalExceptionCond: false,
                modalCompanyInsert: false,
                modalDeceiveList: false,
                modalLineList: false,
                modalLineInsert: false,
                modalCompanyEdit: false,
                modalDeceiveThresholdList: false,
                detailLineData: [],
                subDeceiveExceptionTipTable: [
                    {
                        title: '条件示例',
                        align: 'center',
                        key: 'condition'
                    },
                    {
                        title: '说明',
                        align: 'center',
                        key: 'comment'
                    }
                ],
                subDeceiveExceptionTipTableData: [
                    {
                        condition: '((1-1AND1-2)OR(1-3OR1-4))',
                        comment: '复合组与复合组条件'
                    },
                    {
                        condition: '((1-1AND1-2)OR(1-3))',
                        comment: '复合组与单组条件'
                    },
                    {
                        condition: '(1-1AND1-2)',
                        comment: '单组条件'
                    }
                ],
                subDeceiveTable: [
                    {
                        title: '设备名称',
                        align: 'center',
                        key: 'comment'
                    },
                    {
                        title: '设备节点',
                        align: 'center',
                        key: 'nodeIndex'
                    }
                ],
                subDeceiveTableData: [],
                subDeceiveThresholdListColumns: [
                    {
                        title: '设备节点',
                        align: 'center',
                        key: 'nodeIndex',
                        editable: false
                    },
                    {
                        title: '设备名称',
                        align: 'center',
                        key: 'comment',
                        editable: false
                    },
                    {
                        title: '阈值(最小值)',
                        align: 'center',
                        key: 'minThresholdValue',
                        editable: true
                    },
                    {
                        title: '阈值(最大值)',
                        align: 'center',
                        key: 'maxThresholdValue',
                        editable: true
                    },
                    {
                        title: '预警频次',
                        align: 'center',
                        key: 'rateThresholdValue',
                        editable: true
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 90,
                        key: 'handle',
                        handle: ['edit']
                    }
                ],
                subDeceiveThresholdListData: [],
                subDeceiveTabs: [],
                subDeceiveTabsIndex: 0,
                deceiveExceptionListData: [],
                deceiveExceptionListColumns: [
                    {
                        title: '预警项目',
                        align: 'left',
                        key: 'condition',
                        editable: true
                    },
                    {
                        title: '预警条件',
                        align: 'left',
                        key: 'conditionStr',
                        editable: false
                    },
                    {
                        title: '预警条件说明',
                        align: 'center',
                        key: 'conditionComment',
                        editable: true
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 170,
                        key: 'handle',
                        handle: ['edit', 'delete']
                    }
                ],
                subDeceiveListColumns: [
                    {
                        title: '设备节点',
                        align: 'center',
                        key: 'nodeIndex',
                        editable: true
                    },
                    {
                        title: '设备名称',
                        align: 'center',
                        key: 'comment',
                        editable: true
                    },
                    {
                        title: '统计标识',
                        align: 'center',
                        key: 'comment',
                        editable: false,
                        render: (h, params) => {
                            return h('i-switch', {
                                props: {
                                    size: 'small'
                                },
                                domProps: {
                                    value: false
                                }
                            }, '<span slot="open">ON</span><span slot="close">OFF</span>')
                        }
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 170,
                        key: 'handle',
                        handle: ['edit', 'delete']
                    }
                ],
                subDeceiveListData: [],
                insertCompanyFormItem: {
                    companyName: '',
                    companyCode: '',
                    address: '',
                    lng: '',
                    lat: '',
                    manager: '',
                    managerPhone: '',
                    area: []
                },
                editCompanyFormItem: {
                    companyName: '',
                    companyCode: '',
                    address: '',
                    lng: '',
                    lat: '',
                    manager: '',
                    managerPhone: '',
                    chanpin: '',
                    channeng: '',
                    huanbaoshebeishuliang: '',
                    shengchanshebeishuliang: '',
                    jiankongshebeishuliang: '',
                    anzhuangweizhi: '',
                    yujingtiaojian: '',
                    area: []
                },
                insertLineFormItem: {
                    lineDeceiveId: '',
                    lineName: '',
                    lineManager: '',
                    lineManagerPhone: '',
                    nodeIndex: ''
                },
                ruleCompany: {
                    companyName: [
                        { required: true, message: '企业名称不能为空', trigger: 'blur' }
                    ],
                    companyCode: [
                        { required: true, message: '企业编码不能为空', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '企业地址不能为空', trigger: 'blur' }
                    ],
                    lng: [
                        { required: true, message: '定位经度不能为空', trigger: 'blur' }
                    ],
                    lat: [
                        { required: true, message: '定位纬度不能为空', trigger: 'blur' }
                    ]
                },
                ruleLine: {
                    lineDeceiveId: [
                        { required: true, message: '监控设备ID不能为空', trigger: 'blur' }
                    ],
                    lineName: [
                        { required: true, message: '生产线名称不能为空', trigger: 'blur' }
                    ]
                },
                columnLineDetail: [
                    {
                        title: '生产线名称',
                        align: 'center',
                        key: 'comment'
                    },
                    {
                        title: '设备ID',
                        align: 'center',
                        key: 'deceiveId'
                    },
                    {
                        title: '负责人名称',
                        align: 'center',
                        key: 'manager'
                    },
                    {
                        title: '负责人电话',
                        align: 'center',
                        key: 'managerPhone'
                    },
                    {
                        title: '操作',
                        key: 'detail',
                        width: 260,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showDeceiveManage(params.row, params.index)
                                        }
                                    }
                                }, '设备管理'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showDeceiveThresholdManage(params.row, params.index)
                                        }
                                    }
                                }, '阈值设定'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showExceptionConditionManage(params)
                                        }
                                    }
                                }, '预警条件')
                            ])
                        }
                    }
                ],
                companyListcolumns: [
                    {
                        title: ' ',
                        width: 60,
                        align: 'center',
                        key: 'companyName',
                        fixed: 'left',
                        render: (h, params) => {
                            let rowNum = (params.index + 1) + ((this.currentPage - 1) * this.pageSize)
                            return h('span', rowNum)
                        }
                    },
                    {
                        title: '企业名称',
                        width: 400,
                        align: 'left',
                        key: 'companyName',
                        fixed: 'left',
                        render: (h, params) => {
                            return h('span', params.row.companyInfo.companyName)
                        }
                    },
                    {
                        title: '企业编码',
                        align: 'left',
                        width: 150,
                        key: 'companyCode',
                        fixed: 'left',
                        render: (h, params) => {
                            return h('span', params.row.companyInfo.companyCode)
                        }
                    },
                    {
                        title: '企业地址',
                        align: 'left',
                        width: 400,
                        key: 'address',
                        render: (h, params) => {
                            return h('span', params.row.companyInfo.address)
                        }
                    },
                    {
                        title: '定位经度',
                        align: 'right',
                        width: 150,
                        key: 'lng',
                        render: (h, params) => {
                            return h('span', params.row.companyInfo.lng)
                        }
                    },
                    {
                        title: '定位纬度',
                        align: 'right',
                        width: 150,
                        key: 'lat',
                        render: (h, params) => {
                            return h('span', params.row.companyInfo.lat)
                        }
                    },
                    {
                        title: '企业负责人',
                        align: 'left',
                        width: 150,
                        key: 'manager',
                        render: (h, params) => {
                            return h('span', params.row.companyInfo.manager)
                        }
                    },
                    {
                        title: '负责人电话',
                        align: 'left',
                        width: 150,
                        key: 'managerPhone',
                        render: (h, params) => {
                            return h('span', params.row.companyInfo.managerPhone)
                        }
                    },
                    {
                        title: '操作',
                        key: 'detail',
                        width: 320,
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
                                            this.delCompany(params)
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
                                        click: () => {
                                            this.showEditCompany(params)
                                        }
                                    }
                                }, '修改信息'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.shwoInsertLine(params)
                                        }
                                    }
                                }, '新增生产线'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showLineList(params)
                                        }
                                    }
                                }, '查看生产线')
                            ])
                        }
                    }
                ],
                companyDataList: []
            }
        },
        created () {
            this.getDataList(true)
        },
        methods: {
            getPageSize (tableObj, fixHeight) {
                // 根据屏幕高度获取每页显示条数
                let height = window.innerHeight - fixHeight
                this.tableHeight = height + 75
                let num = Math.floor(height / 48)
                if (num < 5) {
                    num = 5
                }
                return num
            },
            getDataList (refresh) {
                this.pageLoading = true
                this.tableLoading = true
                axios.request({
                    url: 'api/companyDeceiveInfo/find/' + 0 + '/' + this.pageSize,
                    method: 'get'
                }).then(data => {
                    this.companyDataList = data.data.resultData
                    this.totalPage = data.data.dataTotal
                    this.tableLoading = false
                })
            },
            searchCompany () {
                if (this.$refs.searchInput.currentValue === '') {
                    this.getDataList(true)
                }
                this.pageLoading = true
                this.tableLoading = true
                let searchValue = this.$refs.searchInput.currentValue
                axios.request({
                    url: 'api/companyDeceiveInfo/find/' + searchValue + '/' + 1 + '/' + this.pageSize,
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
                let startIndex = Number((pageIndex - 1) * this.pageSize)
                let searchValue = this.$refs.searchInput.currentValue
                let apiUrl
                if (searchValue) {
                    apiUrl = 'api/companyDeceiveInfo/find/' + searchValue + '/' + startIndex + '/' + this.pageSize
                } else {
                    apiUrl = 'api/companyDeceiveInfo/find/' + startIndex + '/' + this.pageSize
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
            pageSizeOnChange (event) {
                this.pageSize = event
                this.pageOnChange(1)
            },
            showInserCompany () {
                this.modalCompanyInsert = true
            },
            insertCompanyOk (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        axios.request({
                            url: 'api/companyInfo/insert/',
                            method: 'post',
                            data: {
                                companyName: this[name].companyName,
                                companyCode: this[name].companyCode,
                                address: this[name].address,
                                lat: this[name].lat,
                                lng: this[name].lng,
                                manager: this[name].manager,
                                managerPhone: this[name].managerPhone,
                                area: this[name].area.map(item => { return item.code }).toString()
                            }
                        }).then(data => {
                            this.$Message.success('企业信息新增成功!')
                            this.getDataList(true)
                            this.currentPage = 1
                            this.modalCompanyInsert = false
                        })
                    }
                })
            },
            showEditCompany (rowData) {
                this.selectCompanyRow = rowData.row
                this.editCompanyFormItem = Object.assign({}, rowData.row.companyInfo)
                this.editCompanyFormItem.lat = this.editCompanyFormItem.lat + ''
                this.editCompanyFormItem.lng = this.editCompanyFormItem.lng + ''
                let areaArray = this.editCompanyFormItem.area.split(',')
                this.editCompanyFormItem.area = areaArray
                this.modalCompanyEdit = true
            },
            editCompanyOk (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let paraData = this.selectCompanyRow.companyInfo
                        paraData.companyName = this[name].companyName
                        paraData.address = this[name].address
                        paraData.lat = this[name].lat
                        paraData.lng = this[name].lng
                        paraData.manager = this[name].manager
                        paraData.managerPhone = this[name].managerPhone
                        paraData.chanpin = this[name].chanpin
                        paraData.channeng = this[name].channeng
                        paraData.huanbaoshebeishuliang = this[name].huanbaoshebeishuliang
                        paraData.shengchanshebeishuliang = this[name].shengchanshebeishuliang
                        paraData.jiankongshebeishuliang = this[name].jiankongshebeishuliang
                        paraData.anzhuangweizhi = this[name].anzhuangweizhi
                        paraData.yujingtiaojian = this[name].yujingtiaojian
                        paraData.area = this[name].area.map(item => { return item.code }).toString()
                        axios.request({
                            url: 'api/companyInfo/update/',
                            method: 'post',
                            data: paraData
                        }).then(data => {
                            this.$Message.success('企业信息修改成功!')
                            this.getDataList(true)
                            this.currentPage = 1
                            this.modalCompanyEdit = false
                        })
                    }
                })
            },
            delCompany (rowData) {
                let paraData = rowData.row.companyInfo
                axios.request({
                    url: 'api/companyInfo/delete/',
                    method: 'post',
                    data: paraData
                }).then(data => {
                    this.$Message.success('企业删除成功!')
                    this.getDataList(true)
                    this.currentPage = 1
                })
            },
            shwoInsertLine (rowData) {
                this.selectCompanyRow = rowData.row
                this.modalLineInsert = true
            },
            showLineList (rowData) {
                // 水等查看生产线区分
                // console.log(rowData)
                // if (rowData.row.companyInfo.companyCode.match(/(00067)$/)){
                //   console.log("金龙乡")
                // }
                this.selectCompanyRow = rowData.row
                if (!rowData.row.lineDeceiveList) {
                    this.detailLineData = []
                } else {
                    this.detailLineData = rowData.row.lineDeceiveList
                }
                this.modalLineList = true
            },
            showDeceiveManage (rowData, rowIndex) {
                this.selectLineRow = rowData
                this.selectLineIndex = rowIndex
                if (!rowData.subDeceiveInfo) {
                    this.subDeceiveListData = []
                } else {
                    this.subDeceiveListData = rowData.subDeceiveInfo
                }
                this.modalDeceiveList = true
            },
            showDeceiveThresholdManage (rowData, rowIndex) {
                if (rowData.comment.match(/^油烟/)) {
                    console.log('````````````````````````')
                }
                this.subDeceiveTabsIndex = 0
                if (rowData.subDeceiveInfo.length === 0) { return }
                this.selectLineRow = rowData
                this.selectLineIndex = rowIndex
                this.subDeceiveThresholdListData = []
                let subDeceiveThresholdListData = []
                let subDeceiveTabs = []
                if (rowData.subDeceiveInfo) {
                    this.subDeceiveTabs = []
                    for (let subDeceiveObj of rowData.subDeceiveInfo) {
                        subDeceiveTabs.push(subDeceiveObj)
                    }
                    for (let deceiveObj of rowData.subDeceiveInfo[0].subDeceiveInfo) {
                        subDeceiveThresholdListData.push(deceiveObj)
                    }
                }
                this.subDeceiveTabs = subDeceiveTabs
                this.subDeceiveThresholdListData = subDeceiveThresholdListData
                console.log(subDeceiveThresholdListData)
                this.modalDeceiveThresholdList = true
            },
            getDeceiveListData (tabPaneIdx) {
                this.subDeceiveTabsIndex = tabPaneIdx
                this.subDeceiveThresholdListData = []
                let rowData = this.selectLineRow
                let subDeceiveThresholdListData = []
                for (let deceiveObj of rowData.subDeceiveInfo[tabPaneIdx].subDeceiveInfo) {
                    subDeceiveThresholdListData.push(deceiveObj)
                }
                this.subDeceiveThresholdListData = subDeceiveThresholdListData
                console.log('----------', subDeceiveThresholdListData)
            },
            createDeceiveRow () {
                if (!this.subDeceiveListData) { this.subDeceiveListData = [{subDeceiveInfo: []}] }
                this.subDeceiveListData.push({})
            },
            insertLineOk (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let updatePara = {
                            id: this.selectCompanyRow.id,
                            companyInfo: this.selectCompanyRow.companyInfo,
                            lineDeceiveList: [
                                {
                                    deceiveId: this[name].lineDeceiveId,
                                    comment: this[name].lineName,
                                    nodeIndex: this[name].nodeIndex,
                                    manager: this[name].lineManager,
                                    managerPhone: this[name].lineManagerPhone
                                }
                            ]
                        }
                        axios.request({
                            url: 'api/companyDeceiveInfo/insert/',
                            method: 'post',
                            data: updatePara
                        }).then(data => {
                            this.$Message.success('生产线信息新增成功!')
                            this.getDataList(true)
                            this.currentPage = 1
                            this.modalLineInsert = false
                        })
                    }
                })
            },
            insertSubDeceiveList () {
                let subDeceiveInfo = this.subDeceiveListData ? this.subDeceiveListData : []
                for (let subDeceive of subDeceiveInfo) {
                    subDeceive['subDeceiveInfo'] = []
                }
                let updatePara = {
                    id: this.selectCompanyRow.id,
                    companyInfo: this.selectCompanyRow.companyInfo,
                    lineDeceiveList: [
                        {
                            id: this.selectLineRow.id,
                            subDeceiveInfo: subDeceiveInfo
                        }
                    ]
                }
                axios.request({
                    url: 'api/deceive/insert/',
                    method: 'post',
                    data: updatePara
                }).then(data => {
                    if (data.success) {
                        this.modalLineList = false
                        this.getDataList(true)
                        this.currentPage = 1
                    } else {
                        this.modalLineList = false
                        let errorDataStr = ''
                        for (let errorData of data.data) {
                            errorDataStr += '<div>设备节点: ' + errorData.nodeIndex + '(设备名称: ' + errorData.comment + ') 不存在</div>'
                        }
                        this.$Modal.warning({
                            title: '设备节点错误',
                            content: errorDataStr
                        })
                    }
                })
            },
            insertDeceiveThresholdList () {
                let subDeceiveThresholdList = this.subDeceiveThresholdListData
                let deceiveTabIndex = this.$refs.subDeceiveThresholdTabs.focusedKey
                let lineDeceive = this.selectLineRow
                lineDeceive.subDeceiveInfo[deceiveTabIndex].subDeceiveInfo = subDeceiveThresholdList
                let updatePara = {
                    id: this.selectCompanyRow.id,
                    companyInfo: this.selectCompanyRow.companyInfo,
                    lineDeceiveList: [lineDeceive]
                }
                axios.request({
                    url: 'api/companyDeceiveInfo/insertThresholdValue/',
                    method: 'post',
                    data: updatePara
                }).then(data => {
                })
            },
            showExceptionConditionManage (rowData) {
                this.selectLineRow = rowData.row
                this.selectLineIndex = rowData.index
                this.deceiveExceptionListData = rowData.row.exceptionCondList
                this.subDeceiveTableData = rowData.row.subDeceiveInfo
                this.modalExceptionCond = true
            },
            createExceptionCondRow () {
                if (!this.deceiveExceptionListData) { this.deceiveExceptionListData = [{condition: '', conditionComment: ''}] }
                this.deceiveExceptionListData.push({})
            },
            // validateExceptionCondRow () {
            //     if (!this.deceiveExceptionListData.length) { return }
            //     let exceptionCondSingle = '\((\d+-\d+)\)'
            //     let exceptionCondGroup = '\((\d+-\d+)(AND|OR)(\d+-\d+)\)'
            //     let exceptionCondSingleExp = /\((\d+-\d+)\)/
            //     let exceptionCondGroupExp = /\((\d+-\d+)(AND|OR)\((\d+-\d+)\)\)/
            //     let exceptionCond1Exp = / + exceptionCondGroup + '(AND|OR)' + exceptionCondSingle + /
            //     let exceptionCond2Exp = / + exceptionCondGroup + '(AND|OR)' + exceptionCondGroup + /
            //     let checkResult = false
            //     this.deceiveExceptionListData.forEach(item => {
            //         if (item.condition) {
            //             if (!exceptionCondSingleExp.test(item.condition) &&
            //                 !exceptionCondGroupExp.test(item.condition) &&
            //                 !exceptionCond1Exp.test(item.condition) &&
            //                 !exceptionCond2Exp.test(item.condition)) {
            //                     this.$Message.error({
            //                         content: item.condition + ' 预警条件校验失败',
            //                         duration: 20,
            //                         closable: true
            //                     })
            //                     if (!checkResult) { checkResult = true }
            //                 }
            //         }
            //     })
            //     if (!checkResult) {
            //         this.$Message.info({
            //             content: '预警条件校验成功',
            //             duration: 20,
            //             closable: true
            //         })
            //     }
            //     return checkResult
            // },
            insertExceptionCondList () {
                if (this.deceiveExceptionListData.length === 0) {
                    this.modalExceptionCond = false
                    return
                }
                let deceiveExceptionCondList = this.deceiveExceptionListData
                let lineDeceive = this.selectLineRow
                let exceptionCondList = deceiveExceptionCondList.map(item => {
                    let conditionStr = item.condition
                    let exceptionCondStr
                    item.condition.match(/\d+-\d+/g).forEach(itemCond => {
                        exceptionCondStr = this.subDeceiveTableData.filter(itemDeceive => itemCond === itemDeceive.nodeIndex).map(item => {
                            return item.comment
                        })
                        conditionStr = conditionStr.replace(itemCond, exceptionCondStr)
                    })
                    conditionStr = conditionStr.replace('AND', ' 与 ').replace('OR', ' 或 ').replace('!', ' 非 ')
                    return {
                        condition: item.condition,
                        conditionStr: conditionStr,
                        conditionComment: item.conditionComment
                    }
                })
                lineDeceive.exceptionCondList = exceptionCondList
                let updatePara = {
                    id: this.selectCompanyRow.id,
                    companyInfo: this.selectCompanyRow.companyInfo,
                    lineDeceiveList: [lineDeceive]
                }
                axios.request({
                    url: 'api/companyDeceiveInfo/insertExceptionCond/',
                    method: 'post',
                    data: updatePara
                }).then(data => {
                    this.modalExceptionCond = false
                })
            },
            cancel (modalFlag) {
                if (this[modalFlag]) {
                    this[modalFlag] = false
                }
            },
            lineDetailOk (name) {
                let paraData = this.selectCompanyRow.companyInfo
                paraData.companyName = this.selectCompanyRow.companyName
                paraData.address = this.selectCompanyRow.address
                paraData.lat = this.selectCompanyRow.lat
                paraData.lng = this.selectCompanyRow.lng
                paraData.manager = this.selectCompanyRow.manager
                paraData.managerPhone = this.selectCompanyRow.managerPhone
                paraData.area = this.selectCompanyRow.area.map(item => { return item.code }).toString()
                axios.request({
                    url: 'api/companyInfo/insert/',
                    method: 'post',
                    data: this.paraData
                }).then(data => {
                    this.$Message.success('生产线信息新增成功!')
                    this.getDataList(true)
                    this.currentPage = 1
                    this.modalLineInsert = false
                })
            },
            companyBeforeClose (showFlag) {
                if (!showFlag) {
                    this.$refs.insertCompanyFormItem.resetFields()
                    this.$refs.editCompanyFormCascader.$children[0].clearSelect()
                    this.$refs.editCompanyFormItem.resetFields()
                    this.$refs.insertCompanyFormCascader.$children[0].clearSelect()
                    this.$refs.insertLineFormItem.resetFields()
                }
            }
        }
    }

</script>
