<template>
	<div id="listDiv">
		<div style="display:none">{{normalCompanyOnNum2}}{{normalCompanyOffNum2}}{{abnormalCompanyNumthreemin2}}{{abnormalCompanyNumhalfhour2}}{{abnormalCompanyNumonehour2}}</div>
		<Button long @click="isShowCompanyListFun" style="font-size: 14px; font-weight: bold;">
			<Icon type="chevron-down" style="float: left;margin:3px;"></Icon>
			小型环境治理设备监控对象
			<Icon type="chevron-down" style="float: right;margin:3px;"></Icon>
		</Button>
		<Card v-show="isShowCompanyList">
			<div>
				<Row>
					<el-autocomplete class="inline-input" v-model="searchInput" :fetch-suggestions="querySearch" @select="searchCompany">
						<el-select v-model="select1" slot="prepend" placeholder="请选择" @change="getSelect">
							<el-option label="状态" value="1"></el-option>
							<el-option label="等级" value="2"></el-option>
							<el-option label="归属" value="3"></el-option>
							<el-option label="行业" value="4"></el-option>
							<el-option label="县区" value="5"></el-option>
						</el-select>
						<el-button slot="append" icon="el-icon-search" @click="searchCompany"></el-button>
					</el-autocomplete>
				</Row>
				<br>
				<Row :gutter="8" v-if="select1 == 1 || select1 == ''">
					<Col span="4"><Button class="btn-style" type="info" long @click="itemclick(0)">全部 {{allCompanyNum2}}</Button></Col>
					<Col span="5"><Button class="btn-style" type="success" long @click="itemclick(1)">正常 {{normalCompanyNum2}}</Button></Col>
					<Col span="5"><Button class="btn-style" type="warning" long @click="itemclick(3)">离线 {{offLineCompanyNum2}}</Button></Col>
					<Col span="5"><Button class="btn-style" type="error" long @click="itemclick(2)">异常 {{abnormalCompanyNum2}}</Button></Col>
					<Col span="5"><Button class="btn-style" type="info" style="background-color:#888;border:none;" long @click="itemclick(4)">未安装 {{ notInstallCompanyNum2 }}</Button></Col>
				</Row>
				<Row v-if="select1 == 2">
					<Col span="4"><Button class="btn-style" :type="infoLevels[0]" style="width:60px" long @click="itemclick2(0)">全部</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoLevels[1]" style="width:60px" long @click="itemclick2(1)">A1</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoLevels[5]" style="width:60px" long @click="itemclick2(5)">A2</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoLevels[2]" style="width:60px" long @click="itemclick2(2)">A3</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoLevels[3]" style="width:60px" long @click="itemclick2(3)">B</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoLevels[4]" style="width:60px" long @click="itemclick2(4)">C</Button></Col>
				</Row>
				<Row v-if="select1 == 3">
					<Col span="4"><Button class="btn-style" :type="infoBelongs[0]" style="width:60px" long @click="itemclick3(0)">全部</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoBelongs[1]" style="width:60px" long @click="itemclick3(1)">南楼1</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoBelongs[2]" style="width:60px" long @click="itemclick3(2)">南楼2</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoBelongs[3]" style="width:60px" long @click="itemclick3(3)">南楼3</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoBelongs[4]" style="width:60px" long @click="itemclick3(4)">官屯</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoBelongs[5]" style="width:60px" long @click="itemclick3(5)">环城</Button></Col>
				</Row>
				<Row v-if="select1 == 3" style="margin-top:5px">
					<Col span="5"><Button class="btn-style" :type="infoBelongs[6]" style="width:60px" long @click="itemclick3(6)">永安</Button></Col>
					<Col span="5"><Button class="btn-style" :type="infoBelongs[7]" style="width:60px" long @click="itemclick3(7)">有色</Button></Col>
					<Col span="5"><Button class="btn-style" :type="infoBelongs[8]" style="width:60px" long @click="itemclick3(8)">高坎</Button></Col>
					<Col span="5"><Button class="btn-style" :type="infoBelongs[9]" style="width:60px" long @click="itemclick3(9)">钢都</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoBelongs[10]" style="width:60px" long @click="itemclick3(10)">汤池</Button></Col>
				</Row>
				<Row v-if="select1 == 4">
					<Col span="4"><Button class="btn-style" :type="infoTypes[0]" long @click="itemclick4(0)">破碎</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoTypes[1]" long @click="itemclick4(1)">电熔炉</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoTypes[2]" long @click="itemclick4(2)">熔铸炉</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoTypes[3]" long @click="itemclick4(3)">轻烧窑</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoTypes[4]" long @click="itemclick4(4)">重烧窑</Button></Col>
					<Col span="4"><Button class="btn-style" :type="infoTypes[5]" long @click="itemclick4(5)">隧道窑</Button></Col>
				</Row>
				<Row v-if="select1 == 5">
					<Col span="6"><Button class="btn-style" :type="infoCitys[0]" long @click="itemclick5(0)">大石桥</Button></Col>
					<Col span="6"><Button class="btn-style" :type="infoCitys[1]" long @click="itemclick5(1)">鲅鱼圈</Button></Col>
					<Col span="6"><Button class="btn-style" :type="infoCitys[2]" long @click="itemclick5(2)">盖州</Button></Col>
					<Col span="6"><Button class="btn-style" :type="infoCitys[3]" long @click="itemclick5(3)">营口</Button></Col>
				</Row>
				<br>
				<Row v-if="ycisNormal" style="padding-bottom: 10px;text-align: center;">
					<Col span="8" v-for="(list,tindex) in a1" :key="tindex">
					<div class="errorbtn" @click="errorbranch(tindex)" :class="{ errbgc:changeRed == tindex}">{{list.tname}} {{list.num}}</div>
					</Col>
				</Row>
				<Row v-if="zhenchang" style="padding-bottom: 10px;text-align: center;">
					<Col span="8" v-for="(list,tindex) in a2" :key="tindex">
						<div class="errorbtn" @click="findzhengchang(tindex)" :class="{ truebgc:changeRed == tindex}">{{list.tname}} {{list.num}}
						</div>
					</Col>
				</Row>
				<Row v-if="secondLevelTypeFlg && qsyFlg" style="padding-bottom: 10px;text-align: center;">
					<Col span="8" v-for="(list,tindex) in a3" :key="tindex">
						<div class="errorbtn" @click="findqingshao(tindex)" :class="{ truebgc:changeRed == tindex}">{{list.tname}}
						</div>
					</Col>
				</Row>
				<Row v-if="secondLevelTypeFlg && zsyFlg" style="padding-bottom: 10px;text-align: center;">
					<Col span="8" v-for="(list,tindex) in a4" :key="tindex">
						<div class="errorbtn" @click="findzhongshao(tindex)" :class="{ truebgc:changeRed == tindex}">{{list.tname}}
						</div>
					</Col>
				</Row>
				<Row>
					<Table border :columns="columnsCompanyList" :data="dataCompanyList" :loading="companyListLoading"
						@on-row-click="companyListRowOnClick" size="small"></Table>
				</Row>

				<div style="overflow: hidden;margin-top: 10px">
					<div style="width: 90%">
						<Page :total="companyListTotal" :current.sync="companyCurrentPage" :page-size="companyListPageSize"
							show-total size="small" @on-change="pageOnChange"></Page>
					</div>
				</div>
			</div>
		</Card>
	</div>
</template>
<script>
	import viewApi from '@/http/viewApi.js'
	import {getToken} from '@/libs/util.js'
	import util from "@/view/components/util"
	import utils from '@/common/util.js'
	export default {
		name: 'listDiv',
		props: ['alldata','cartogramdata'],
		data() {
			return {
				token:'',
				a1: [{
						tname: '3分钟',
						tindex: 1,
						num:'',
					},
					{
						tname: '半小时',
						tindex: 2,
						num:'',
					},
					{
						tname: '一小时',
						tindex: 3,
						num:'',
					}
				],
				a2: [{
						tname: '全部',
						tindex: 0,
						num:0,
					},
					{
						tname: '生产中',
						tindex: 1,
						num:0,
					},
					{
						tname: '未生产',
						tindex: 2,
						num:0,
					}
				],
				a3: [{
						tname: '全部',
						tindex: 0,
					},
					{
						tname: '回转窑',
						tindex: 1,
					},
					{
						tname: '焖烧窑',
						tindex: 2,
					}
				],
				a4: [{
						tname: '竖窑',
						tindex: 0,
					},
					{
						tname: '高纯窑',
						tindex: 1,
					},
					{
						tname: '中档窑',
						tindex: 2,
					}
				],
				infoLevels:['info','info','info','info','info','info'],
				infoBelongs:['info','info','info','info','info','info','info','info','info','info','info'],
				infoTypes:['info','info','info','info','info','info'],
				infoCitys:['info','info','info','info'],
				changeRed: 0,
				tabheight: '',
				listdata: [],
				normaldata: [],
				abnormaldata: [],
				offlinedata: [],
				pagedata: [],
				isShowCompanyList: false,
				companyCurrentPage: 1,
				companyListLoading: false,
				companyListTotal: 0,
				dataCompanyList: [],
				companyListPageSize: 0,
				allCompany: [],
				selectedCompanyRow: {},
				// 判断是否是正常企业列表
				isNormal: false,
				ycisNormal: false,
				zhenchang: false,
				secondLevelTypeFlg:false,
				qsyFlg:false,
				zsyFlg:false,
				zccompanyList: [],
				columnsCompanyList: [{
						title: '企业名称',
						align: 'center',
						render: (h, params) => {
							const arr = [h('span', params.row.companyName)]
							if (this.isNormal && params.row.status.log.includes('未生产')) {
								arr.push(
									h('i', {
										class: 'ivu-icon ivu-icon-close-circled',
										style: 'color: black; text-indent: 0.5em;'
									})
								)
							}
							const a = h('a', arr)
							return a
						}
					},
					{
						title: '状态',
						align: 'center',
						width: 80,
						key: 'exception',
						render: (h, params) => {
							let statusStr
							let typeStr
							let time = Date.parse(params.row.receiveTime)
							let nowtime = new Date().getTime()
							let differtime = nowtime - time
							let rightstatus = params.row.status.value
							let rightComment = params.row.status.comment
							if(rightstatus === 7){
								typeStr = 'warning'
								statusStr = '未安装'
							}else{
								if (rightstatus === 5 || differtime > 600000) {
									typeStr = 'warning'
									statusStr = rightComment
								} else if (rightstatus === 10) {
									typeStr = 'error'
									statusStr = '异常'
								} else if (rightstatus === 1) {
									typeStr = 'success'
									statusStr = '正常'
								}
							}
							return h(
								'Button', {
									props: {
										type: typeStr,
										size: 'small',
										long: true
									}
								},
								statusStr
							)
						}
					}
				],
				restaurants: [],
				searchInput:'',
				select1:'',
				numberDatas:{},
			}
		},
		computed:{
			allCompanyNum2(){
				return this.cartogramdata.length
			},
			// 正常企业数量
			normalCompanyNum2() {
				let normalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.value === 1
				})
				this.a2[0].num = normalCompanys.length
				return normalCompanys.length
			},
			// 正常生产企业数量
			normalCompanyOnNum2() {
				let normalCompanysOne = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					if (c.status.log.includes('未生产')) {
						return false
					}
					return c.status.value === 1
				})
				this.a2[1].num = normalCompanysOne.length
				return normalCompanysOne.length
			},
			// 正常停产企业数量
			normalCompanyOffNum2() {
				let normalCompanysTwo = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					if (!c.status.log.includes('未生产')) {
						return false
					}
					return c.status.value === 1
				})
				this.a2[2].num = normalCompanysTwo.length
				return normalCompanysTwo.length
			},
			// 异常企业数量
			abnormalCompanyNum2() {
				let abnormalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.value === 10
				})
				return abnormalCompanys.length
			},
			// 异常三分钟企业数量
			abnormalCompanyNumthreemin2() {
				let a1 = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count < 30 && c.status.value === 10
				})
				this.a1[0].num = a1.length
				return a1.length
			},
			// 异常半小时企业数量
			abnormalCompanyNumhalfhour2() {
				let a2 = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count >= 30 && c.status.count < 60
				})
				this.a1[1].num = a2.length
				return a2.length
			},
			// 异常一小时企业数量
			abnormalCompanyNumonehour2() {
				let a3 = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count >= 60
				})
				this.a1[2].num = a3.length
				return a3.length
			},
			// 离线企业数量
			offLineCompanyNum2() {
				let offLineCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						if(c.status.value != 7){
							return true
						}
					}
					return c.status.value == 5
				})
				return offLineCompanys.length
			},
			// 未安装企业数量
			notInstallCompanyNum2() {
				let notInstallCompanys = this.cartogramdata.filter(c => {
					return c.status.value == 7
				})
				return notInstallCompanys.length
			}
		},
		mounted() {
			this.token = getToken()
		},
		watch: {
			alldata: function (newVal, oldVal) {
				this.restaurants = this.loadAll(newVal)
				if(localStorage.getItem('listDivCompanyCurrentPage') != ''){
					this.companyCurrentPage = Number(localStorage.getItem('listDivCompanyCurrentPage'))
				}
				this.getalldata(newVal)
			}
		},
		methods: {
			getSelect(){
				if(this.select1 != 1){
					this.isNormal = false
					this.ycisNormal = false
					this.zhenchang = false
					if(this.select1 == 4){
						this.secondLevelTypeFlg = true
						this.qsyFlg = false
						this.zsyFlg = false
					}else{
						this.secondLevelTypeFlg = false
						this.qsyFlg = false
						this.zsyFlg = false
					}
				}
				this.infoLevels = ['info','info','info','info','info','info']
				this.infoBelongs = ['info','info','info','info','info','info','info','info','info','info','info']
				this.infoTypes = ['info','info','info','info','info','info']
				this.infoCitys = ['info','info','info','info']
			},
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
					return (restaurant.value.toLowerCase().match(queryString.toLowerCase()));
				};
			},
			loadAll(newVal) {
				let allData = util.forInArray(newVal)
				let suggestions = []
				for(let i = 0;i<allData.length;i++){
					let obj = {}
					obj.value = allData[i].companyName
					suggestions.push(obj)
				}
				return suggestions
			},
			// watch获取所有动态数据
			getalldata(newVal) {
				let perPageNum = this.getPageSize(250)
				this.pageLoading = true
				this.dataCompanyList = []
				this.pagedata = newVal
				if(this.companyCurrentPage == 1){
					this.dataCompanyList = newVal.slice(0, perPageNum)
				}else{
					this.dataCompanyList = newVal.slice((this.companyCurrentPage*1-1)*perPageNum, (this.companyCurrentPage*1-1)*perPageNum + perPageNum)
				}
				if(this.dataCompanyList.length <= 0){
					localStorage.setItem('listDivCompanyCurrentPage',1)
					this.companyCurrentPage = 1
					this.dataCompanyList = newVal.slice(0, perPageNum)
				}
				this.zccompanyList = this.pagedata
				this.companyListTotal = newVal.length
				this.companyListLoading = false
				this.companyListPageSize = perPageNum
			},
			// 选择全部，正常，异常，离线...
			itemclick(tabPaneIdx) {
				if (tabPaneIdx === 1) {
					this.isNormal = true
					this.ycisNormal = false
					this.zhenchang = true
				} else if (tabPaneIdx === 2) {
					this.isNormal = false
					this.ycisNormal = true
					this.zhenchang = false
				} else {
					this.isNormal = false
					this.ycisNormal = false
					this.zhenchang = false
				}
				let queryStatus = 'ALL'
				if (tabPaneIdx === 1) {
					queryStatus = '1'
					this.changeRed = 0
				}
				if (tabPaneIdx === 2) {
					queryStatus = '10'
					this.changeRed = 9
				}
				if (tabPaneIdx === 3) {
					queryStatus = '5'
				}
				if (tabPaneIdx === 4) {
					queryStatus = '7'
				}
				this.$emit('getAllCompany', queryStatus)
			},
			itemclick2(index){
				this.infoLevels = ['info','info','info','info','info','info']
				this.infoLevels[index] = 'success'
				this.$emit("getAllCompany2",index);
			},
			itemclick3(index){
				this.infoBelongs = ['info','info','info','info','info','info','info','info','info','info','info']
				this.infoBelongs[index] = 'success'
				this.$emit("getAllCompany3",index);
			},
			itemclick4(index){
				this.infoTypes = ['info','info','info','info','info','info']
				this.infoTypes[index] = 'success'
				if(index == 3){
					this.changeRed = 0
					this.qsyFlg = true
					this.zsyFlg = false
				}else if(index == 4){
					this.changeRed = 9
					this.qsyFlg = false
					this.zsyFlg = true
				}else{
					this.qsyFlg = false
					this.zsyFlg = false
				}
				this.$emit("getAllCompany4",index);
			},
			itemclick5(index){
				this.infoCitys = ['info','info','info','info']
				this.infoCitys[index] = 'success'
				this.$emit("getAllCompany5",index)
			},
			findzhengchang(tabindex) {
				this.changeRed = tabindex
				let branchdata = []
				if (tabindex === 1) {
					branchdata = this.zccompanyList.filter(a => a.status.log.includes('正常') && !a.status.log.includes('未生产'))
				} else if (tabindex === 2) {
					branchdata = this.zccompanyList.filter(
						a =>a.status.log.includes('正常') && a.status.log.includes('未生产')
					)
				} else {
					branchdata = this.zccompanyList.filter(
						a =>a.status.log.includes('正常')
					)
				}
				this.pagedata = branchdata
				this.dataCompanyList = branchdata
				this.companyListTotal = branchdata.length
				let perPageNum = this.getPageSize(250)
				this.pageLoading = true
				this.dataCompanyList = []
				this.dataCompanyList = branchdata.slice(0, perPageNum)
				this.companyListTotal = branchdata.length
				this.companyListLoading = false
				this.companyListPageSize = perPageNum
			},
			findqingshao(tabindex) {
				this.changeRed = tabindex
				let branchdata = []
				if (tabindex == 1) {
					branchdata = this.zccompanyList.filter(a => a.type.includes('回转窑'))
				} else if (tabindex == 2) {
					branchdata = this.zccompanyList.filter(
						a => a.type.includes('焖烧窑')
					)
				} else {
					branchdata = this.zccompanyList
				}
				this.pagedata = branchdata
				this.dataCompanyList = branchdata
				this.companyListTotal = branchdata.length
				let perPageNum = this.getPageSize(250)
				this.pageLoading = true
				this.dataCompanyList = []
				this.dataCompanyList = branchdata.slice(0, perPageNum)
				this.companyListTotal = branchdata.length
				this.companyListLoading = false
				this.companyListPageSize = perPageNum
			},
			findzhongshao(tabindex) {
				this.changeRed = tabindex
				let branchdata = []
				if (tabindex === 1) {
					branchdata = this.zccompanyList.filter(a => a.type.includes('高纯窑'))
				} else if (tabindex === 2) {
					branchdata = this.zccompanyList.filter(
						a => a.type.includes('中档窑')
					)
				} else {
					branchdata = this.zccompanyList.filter(
						a => a.type.includes('竖窑')
					)
				}
				this.pagedata = branchdata
				this.dataCompanyList = branchdata
				this.companyListTotal = branchdata.length
				let perPageNum = this.getPageSize(250)
				this.pageLoading = true
				this.dataCompanyList = []
				this.dataCompanyList = branchdata.slice(0, perPageNum)
				this.companyListLoading = false
				this.companyListPageSize = perPageNum
			},
			errorbranch(tabindex) {
				this.changeRed = tabindex
				let branchdata = []
				if (tabindex === 0) {
					branchdata = this.pagedata.filter(a => a.status.count < 10)
				} else if (tabindex === 1) {
					branchdata = this.pagedata.filter(
						a => a.status.count >= 10 && a.status.count < 20
					)
				} else {
					branchdata = this.pagedata.filter(a => a.status.count >= 20)
				}
				this.dataCompanyList = branchdata
				this.companyListTotal = branchdata.length
			},

			// 右侧列表显示隐藏
			isShowCompanyListFun() {
				this.isShowCompanyList = !this.isShowCompanyList
			},
			//将接口数据重构，转换成1.0版本的数据结构
			matchCompanyList(rtnData){
				rtnData.map(item=>{
					let telephone = item.telephone
					let length = telephone.length
					telephone = telephone.slice(0,3) + '****' + telephone.slice(length-4,length)
					item.telephone = telephone
					let obj = {}
					item.payTime = ''
					if(item.level){
						if(item.level.includes('￥')){
							item.payTime = item.level.split('￥')[1]
							item.level = item.level.split('￥')[0]
						}
					}
					if(item.installState == 0){
						obj.value = 7
						obj.comment = '未安装'
						obj.log = '未安装'
						obj.count = 0
					}else{
						if(item.netState == 0){
							let currentTime = new Date().getTime()
							let payTime
							if(item.paymentTime){
								payTime = new Date(item.paymentTime).getTime()
								if(currentTime - payTime < 365*24*60*60*1000){
									obj.value = 5
									obj.comment = '离线'
									obj.log = '离线'
									obj.count = 0
								}else{
									if(item.payTime){
										payTime = new Date(item.payTime).getTime()
										if(currentTime - payTime < 365*24*60*60*1000){
											obj.value = 5
											obj.comment = '离线'
											obj.log = '离线'
											obj.count = 0
										}else{
											obj.value = 5
											obj.comment = '离线'
											obj.log = '离线'
											obj.count = 0
										}
									}else{
										obj.value = 5
										obj.comment = '离线'
										obj.log = '离线'
										obj.count = 0
									}
								}
							}else{
								if(item.payTime){
									payTime = new Date(item.payTime).getTime()
									if(currentTime - payTime < 365*24*60*60*1000){
										obj.value = 5
										obj.comment = '离线'
										obj.log = '离线'
										obj.count = 0
									}else{
										obj.value = 5
										obj.comment = '离线'
										obj.log = '离线'
										obj.count = 0
									}
								}else{
									obj.value = 5
									obj.comment = '离线'
									obj.log = '离线'
									obj.count = 0
								}
							}
						}else{
							if(item.alarmState == 0){
								if(item.produceState == 0){
									obj.value = 1
									obj.comment = '正常(未生产)'
									obj.log = '正常(未生产)'
									obj.count = 0
								}else{
									obj.value = 1
									obj.comment = '正常'
									obj.log = '正常'
									obj.count = 0
								}
							}else{
								obj.value = 10
								obj.comment = '异常'
								obj.log = item.alarmContent
								obj.count = item.alarmCount
							}
						}
					}
					item.status = obj
					item.companyCode = item.id
				})
				return rtnData
			},
			// 首页右侧搜索企业
			searchCompany(event) {
				if (this.searchInput != '') {
					this.companyCurrentPage = 1
					this.companyListLoading = true
					this.pageLoading = true
					this.dataCompanyList = []
					let perPageNum = this.getPageSize(250)
					this.companyListPageSize = perPageNum
					let data = {
						pageSize:'9999'
					}
					viewApi.getCompanyList(data,this.token).then(data=>{
						let rtnData = this.matchCompanyList(data.rows)
						let companyInfo = rtnData.find(item=>{
							return item.companyName == this.searchInput
						})
						this.dataCompanyList.push(companyInfo)
						this.companyListTotal = 1
						this.companyListLoading = false
					})
				}
			},
			// 根据屏幕高度获取每页显示条数
			getPageSize(fixHeight) {
				let height = window.innerHeight - fixHeight
				this.tabheight = height
				let num = Math.floor(height / 48)
				if (num < 5) {
					num = 5
				}
				return num
			},

			// 首页右侧窗口切换页面
			pageOnChange(pageIndex) {
				let perPageNum = this.getPageSize(250)
				let startindex = (pageIndex*1 - 1) * perPageNum
				let endindex = startindex + perPageNum
				this.companyListLoading = true
				this.pageLoading = true
				this.dataCompanyList = []
				this.dataCompanyList = this.pagedata.slice(startindex, endindex)
				this.companyListLoading = false
				this.companyCurrentPage = pageIndex
				localStorage.setItem('listDivCompanyCurrentPage',pageIndex)
			},
			// 点击每一行显示弹出层
			companyListRowOnClick(rowData) {
				if (rowData.companyCode) {
					if(rowData.companyName.includes('未安装')){
						this.$Message.warning('当前企业未安装监控设备')
					}else{
						this.selectedCompanyRow = rowData
						this.$emit('showCompanyDetail', rowData)
					}
				} else {
					this.$Message.warning('当前企业无code')
				}
			}
		},
		beforeDestroy(){
			localStorage.setItem('listDivCompanyCurrentPage',1)
		}
	}
</script>
<style lang="less">
	#listDiv{
		.ivu-table-cell{
			padding-left:10px!important;
			padding-right:10px!important;
		}
	}
	.el-input-group__prepend{
		width:100px;
	}
	#listDiv {
		position: absolute;
		overflow: auto;
		width: 454px;
		top: 10%;
		right: 2%;
		z-index: 501;
	}

	.btn-style {
		padding-left: 0 !important;
		padding-right: 0 !important;
		/*padding-top:6px;
    padding-bottom:6px;*/
	}

	.errorbtn {
		width: 52%;
		height: 1.7rem;
		margin: 0 0.25rem;
		border-radius: 0.3rem;
		background: #b5b4b4;
		display: inline-block;
		line-height: 1.7rem;
		color: white;
		cursor: pointer;
	}

	.errbgc {
		width: 52%;
		height: 1.7rem;
		margin: 0 0.25rem;
		border-radius: 0.3rem;
		/*background: #ff9a1b;*/
		display: inline-block;
		line-height: 1.7rem;
		background-color: #ed3f14;
		color: white;
		cursor: pointer;
	}

	.truebgc {
		width: 52%;
		height: 1.7rem;
		margin: 0 0.25rem;
		border-radius: 0.3rem;
		/*background: #ff9a1b;*/
		display: inline-block;
		line-height: 1.7rem;
		background-color: #19be6b;
		color: white;
		cursor: pointer;
	}
</style>
<style scoped>
	.inline-input{
		width: 100%;
		height:50px;
	}
</style>