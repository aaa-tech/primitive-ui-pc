<template>
	<div>
		<p slot="header">
			<span style="font-size: 22px;color:white;">企业详情页</span>
		</p>
		<div>
			<Card>
				<Row>
					<Col span="3">企业名称 : </Col>
					<Col span="4">{{companyDetailData.companyName}}</Col>
					<Col span="3">企业地址 : </Col>
					<Col span="9">{{companyDetailData.companyAddress}}</Col>
				</Row>
				<Row>
					<Col span="2">负责人 : </Col>
					<Col span="4">{{companyDetailData.companyManager}}</Col>
					<Col span="2">联系方式 : </Col>
					<Col span="4">{{companyDetailData.companyManagerPhone}}</Col>
					<Col span="2">归属 : </Col>
					<Col span="2">{{companyDetailData.belong}}</Col>
					<Col span="2">等级 : </Col>
					<Col span="2">{{companyDetailData.level}}</Col>
					<Col span="2">类型 : </Col>
					<Col span="2">{{companyDetailData.type}}</Col>
				</Row>
			</Card>
			<Card>
				<Row>
					<Col span="3">执行标准 : </Col>
					<Col span="9">
					1A以下的电流，显示为未开机<br>
					1A以上的电流，显示为已开机
					</Col>
				</Row>
			</Card>
			<Card>
				<Row>
					<Col span="3">企业状态 : </Col>
					<Col span="9">{{companyStatus}}</Col>
				</Row>
			</Card>
			<button class="imgBtn" v-show="imgBtnShow" @click="imgShow">显示拓扑图</button>
			<div class="lct" v-show="imgBoxShow" style="overflow: auto">
				<ProcessGraph :companyCodeForGraph="companyCodeForGraph" :companyDataForGraph="companyDataForGraph"
					v-if="modalCompanyDetail && imgBoxShow" />
			</div>
			<Tabs type="card" @on-click="clickLineTabs" :animated="false" :value="lineTabIndex" ref="tabWithLine">
				<TabPane v-for="(lineTab,index) in lineTabs" :key="index" :label="`${lineTab.comment}`"
					:name="`${lineTab.deceiveId}`">
					<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse;margin-top: 10px;" width="100%"
						size="small">
						<tr style="text-align: center;" height="25px">
							<td width="20%">数据更新时间</td>
							<td width="30%">{{lineDetailData.lineUpdateTime}}</td>
							<td width="20%">被监控单元状态</td>
							<td width="30%">{{lineDetailData.lineStatus}}</td>
						</tr>

					</table>
					<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse;border-top:white;" width="100%"
						size="small">
						<tr style="text-align: center;" height="25px">
							<td width="20%">被监控单元状态描述</td>
							<td width="80%">{{unitStatus}}</td>
						</tr>
					</table>
					<Tabs type="card" @on-click="clickLineDetailInfoTabs" :animated="false" :value="dateRangIndex">
						<TabPane label="基本信息">
							<Card style="margin-top: 10px;">
								<Table border :columns="columnsDevice" :data="dataLineDeceive" :loading="deviceListLoading"
									size="small"></Table>
							</Card>
						</TabPane>
						<TabPane label="实时数据">
							<Tabs type="card" :animated="false" width="100%">
								<TabPane label="设备电流(A)" :disabled="histogramHourEnegyDisabled">
									<div>
										<histogram :init-value="lineHourEnegyData"></histogram>
										<Spin size="large" fix v-if="histogramLoading"></Spin>
									</div>
								</TabPane>
							</Tabs>
						</TabPane>
						<TabPane label="日报表">
							<Form :label-width="80" style="height: 35px;">
								<Row>
									<Col span="10">
									<FormItem label="选择日期 : ">
										<Row style="width:500px">
											<Col span="24">
											<FormItem prop="date">
												<DatePicker type="date" placeholder="请选择开始日期 " style="width: 40%;display:inline-block;"
													@on-change="getstartData"></DatePicker>~
												<DatePicker type="date" placeholder="请选择截止日期 " style="width: 40%;display:inline-block;"
													@on-change="getendData"></DatePicker>
												<Button @click="onDayChange2">点击搜索</Button>
											</FormItem>
											</Col>
										</Row>
									</FormItem>
									</Col>
								</Row>
							</Form>
							<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse" width="100%">
							</table>
							<Tabs type="card" :animated="false" style="width: 100%;">
								<TabPane label="设备电流(A)" :disabled="histogramDayEnegyDisabled">
									<div>
										<histogram :init-value="lineDayEnegyData"></histogram>
										<Spin size="large" fix v-if="histogramLoading"></Spin>
									</div>
								</TabPane>
							</Tabs>
						</TabPane>
						<TabPane label="月报表">
							<Form :label-width="80" style="height: 35px;">
								<FormItem label="选择年月 : ">
									<Row>
										<Col span="5">
										<Cascader :data="yearMonthList" @on-change="onYearMonthChange" v-model="yearMonthValue"></Cascader>
										</Col>
									</Row>
								</FormItem>
							</Form>
							<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse;" width="100%">
								<tr>
									<td rowspan="1" colspan="6" height="25px"
										style="background-color: #2d8cf0;color: white;border-radius: 5px">&emsp;设备详情</td>
								</tr>
								<tr style="text-align: center;" height="25px">
									<td width="20%">总电流(A)</td>
									<td width="30%">{{lineMonthSum.enrgyDataSum}}</td>
								</tr>
							</table>
							<Tabs type="card" :animated="false">
								<TabPane label="设备总电流(A)" :disabled="histogramMonthEnegyDisabled">
									<div>
										<histogram :init-value="lineMonthEnegyData"></histogram>
										<Spin size="large" fix v-if="histogramLoading"></Spin>
									</div>
								</TabPane>
							</Tabs>
						</TabPane>
					</Tabs>
				</TabPane>
			</Tabs>
		</div>
		<div slot="footer" style="text-align: center">
		</div>
	</div>
</template>

<script>
	import axios from '@/libs/api.request'
	import {mapActions} from 'vuex'
	import ProcessGraph from '../page/processGraph.vue'
	export default {
		name: 'detailpage',
		components: {
			ProcessGraph
		},
		data() {
			return {
				dayList: {
					date: ''
				},
				lctshow: false,
				yujingtiaojian: '',
				startData: '',
				endData: '',
				// 离线毫秒数
				offlineTime: 540000,

				companyStatus: '',
				unitStatus: '',
				imgUrl: '',
				imgBoxShow: false,
				imgBtnShow: false,

				isFlowDataShow: false,
				histogramLoading: false,
				isShowCompanyList: false,
				scrollableFlag: true,
				detailModalStyles: {},
				dayValue: '',
				yearMonthList: [],
				yearMonthValue: [],
				companyDetailData: {
					companyName: '',
					companyAddress: '',
					companyManager: '',
					companyManagerPhone: '',
					belong: '',
					type: '',
					level: ''
				},
				lineDaySum: {},
				lineMonthSum: {},
				lineDetailData: {
					lineManager: '',
					lineManagerPhone: '',
					lineUpdateTime: '',
					lineStatus: ''
				},
				companyListLoading: false,
				companyListTotal: 0,

				lineHourEnegyData: {},
				lineHourFlowData: {},
				lineDayEnegyData: {},
				lineDayFlowData: {},
				lineMonthEnegyData: {},
				lineMonthFlowData: {},
				histogramHourEnegyDisabled: false,
				histogramHourFlowDisabled: false,
				histogramDayEnegyDisabled: false,
				histogramDayFlowDisabled: false,
				histogramMonthEnegyDisabled: false,
				histogramMonthFlowDisabled: false,
				selectedCompanyRow: {},
				modalCompanyDetail: false,
				markerId: '0',
				markerData: [],
				mapCenter: {},
				lineTabs: [],
				lineTabIndex: 0,
				dateRangIndex: 0,
				displayItemRegExp: /-(2|5|8)$/,
				BJdisplayItemRegExp: /-(1|3)$/,
				BJstatusdisplayItemRegExp: /-(1|2|3|4)$/,

				dataCompanyList: [],
				deviceListLoading: false,
				columnsDevice: [{
						title: '监控项目',
						align: 'center',
						key: 'comment',
						render: (h, params) => {
							let commentStr = params.row.name
							return h('span', commentStr)
						}
					},
					{
						title: '实时数据',
						align: 'center',
						render: (h, params) => {
							let backColor = '#e9eaec'
							let colArr = []
							let subDeceiveList
							let commentValue = params.row.value
							return h('Row', commentValue)
						}
					},
					{
						title: '状态',
						align: 'center',
						width: 100,
						key: 'exception',
						render: (h, params) => {
							let statusStr
							let typeStr
							let subDeceiveStatusList

							let colArr = []

							let commentStatus
							if (params.row.value > 0) {
								typeStr = 'success'
								statusStr = '开机'
							} else {
								typeStr = 'error'
								statusStr = '未开机'
							}
							colArr.push(h('Button', {
								props: {
									type: typeStr,
									size: 'small',
									long: true
								}
							}, statusStr))
							return h('Row', colArr)
						}
					}
				],
				dataLineDeceive: [],
				columnsDeviceException: [{
					title: '预警项目',
					align: 'left',
					width: 150,
					key: 'conditionComment'
				}, {
					title: '预警条件',
					align: 'left',
					width: 400,
					key: 'conditionStr'
				}, {
					title: '预警信息',
					width: 1500,
					render: (h, params) => {
						let rowArr = new Array()
						params.row.conditionResult.split('|').forEach(function (dataInfo, dataIdx, dataArray) {
							let colArr = new Array()
							colArr.push(h('Col', {
								props: {
									span: '24'
								}
							}, dataInfo))
							rowArr.push(colArr)
						})
						return h('Row', rowArr)
					}
				}],
				dataLineDeceiveException: [],

				// 切换正常企业 -- 全部:生产:未生产
				normalFilter: 'normalAll',
				// 判断是否是正常企业列表
				isNormal: false,

				// 企业拓扑图
				companyCodeForGraph: '',
				companyDataForGraph: {}
			}
		},
		created() {
			this.fistalldata('')
			setInterval(() => {
				this.fistalldata()
			}, 1000 * 60 * 5)
			setInterval(() => {
				this.getUserInfo()
			}, 1000 * 60 * 20)
		},
		mounted() {
			window.innerHeight
		},
		methods: {
			judgeOffline(oldTime) {
				let time = Date.parse(oldTime)
				let nowtime = (new Date()).getTime()
				let differtime = nowtime - time
				return differtime > this.offlineTime
			},
			imgShow() {
				this.imgBoxShow = !this.imgBoxShow
			},
			getstartData(selectDay, dateObj) {
				this.startData = selectDay
			},
			getendData(selectDay, dateObj) {
				this.endData = selectDay
			},
			...mapActions([
				'getUserInfo'
			]),
			isShowCompanyListFun() {
				this.isShowCompanyList = !this.isShowCompanyList
			},
			companyBeforeClose(showFlag) {
				if (!showFlag) {
					this.$refs.dayList
					this.resetHistogramData()
				}
			},
			getCurrentDate() {
				let currentDate = new Date()
				let currentMonth = currentDate.getMonth() + 1
				let currentDateStr = currentDate.getFullYear() + '-' + (currentMonth < 10 ? '0' + currentMonth : currentMonth) +
					'-' + currentDate.getDate()
				return currentDateStr
			},

			getAllCompany(status) {
				axios.request({
					url: 'hwt/queryHomePage/' + status,
					method: 'get'
				}).then(data => {
					let rtnData = data.data
					if (rtnData && rtnData.length > 0) {
						this.markerData = rtnData
					} else {
						this.markerData = []
						this.dataCompanyList = []
						this.companyListTotal = 0
					}
				})
			},
			fistalldata(tabPaneIdx) {
				// 判断是否是正常企业列表页面
				if (tabPaneIdx === 1) {
					this.isNormal = true
				} else {
					this.isNormal = false
				}

				if (this.$refs && this.$refs.searchInput) {
					this.$refs.searchInput.currentValue = ''
				}
				this.companyListLoading = true
				this.pageLoading = true

				let queryStatus = 'ALL'
				if (tabPaneIdx == 1) {
					queryStatus = '1'
				}
				if (tabPaneIdx == 2) {
					queryStatus = '10'
				}
				if (tabPaneIdx == 3) {
					queryStatus = '5'
				}
				this.getAllCompany(queryStatus)
			},

			clickLineTabs(tabIndex) {
				this.lineTabIndex = tabIndex
				this.clickLineDetailInfoTabs(0)
			},
			onDayChange(selectDay, dateObj) {
				this.histogramLoading = true
				let companyCode = this.selectedCompanyRow.companyInfo.companyCode
				this.getMonitorData(this.dateRangIndex, companyCode, 5, 1, selectDay)
				return selectDay
			},
			// 日报表区间搜索
			onDayChange2(selectDay, dateObj) {
				this.histogramLoading = true

				let companyCode = this.selectedCompanyRow
				this.getMonitorData2(this.dateRangIndex, companyCode, this.startData, this.endData)
			},

			getYearMonthStr(value) {
				let selectYear = value[0]
				let selectMonth = (value[1]) < 10 ? '0' + (value[1]) : (value[1])
				let selectDate = new Date(selectYear, selectMonth, 0)
				let selectDay = selectDate.getDate()
				let paraDate = selectYear + '-' + selectMonth + '-' + selectDay
				return paraDate
			},
			onYearMonthChange(value, tabIndex) {
				this.histogramLoading = true

				let paraDate = this.getYearMonthStr(value)
				let companyCode = this.selectedCompanyRow

				this.getMonitorData2(this.dateRangIndex, companyCode, paraDate)
			},
			markerOnClick(e) {
				this.lctshow = false
				this.deviceListLoading = true
				this.modalCompanyDetail = true
				this.selectedCompanyRow = e

				this.showCompanyDetail(e)
			},
			companyListRowOnClick(rowData) {
				// console.log(rowData)
				this.deviceListLoading = true
				this.modalCompanyDetail = true
				this.selectedCompanyRow = rowData
				this.showCompanyDetail(rowData.companyCode)
			},
			showCompanyDetail(companyData) {
				// console.log(companyData)
				this.deviceListLoading = true
				this.modalCompanyDetail = true
				axios.request({
					url: 'hwt/queryCompanyData/' + companyData + '/' + '0' + '/',
					method: 'get'
				}).then(data => {
					this.companyCodeForGraph = data.companyinfo[0].companyCode
					this.companyDataForGraph = data.pcb[0].data

					// 变更地图定位中心
					this.mapCenter = {
						lat: data.companyinfo[0].latitude,
						lng: data.companyinfo[0].longitude
					}

					// 原拓扑图路径接口
					// this.imgUrl = data.companyinfo[0].images

					// 北京和六盘水暂时没有拓扑图
					if (data.companyinfo[0].companyCode.match(/^(bj)/)) {
						// console.log("bg.lps")
						this.imgBoxShow = false
						this.imgBtnShow = false
					} else if (data.companyinfo[0].companyCode.match(/^(lps)/)) {
						this.imgBoxShow = false
						this.imgBtnShow = false
					} else {
						// console.log("dsq")
						this.imgBtnShow = false
						this.imgBoxShow = false
					}

					this.dataLineDeceive = []
					this.dateRangIndex = 0
					this.resetHistogramData()
					let _this = this
					if (this.yearMonthList.length === 0) {
						this.getCurrentYearList()
					}
					if (data.pcb.length === 0) {
						this.companyDetailData.companyName = data.companyinfo[0].companyName
						this.companyDetailData.companyAddress = data.companyinfo[0].address
						this.companyDetailData.companyManager = data.companyinfo[0].manager
						this.companyDetailData.companyManagerPhone = data.companyinfo[0].managerPhone
						this.companyDetailData.belong = data.companyinfo[0].belong
						this.companyDetailData.level = data.companyinfo[0].level
						this.companyDetailData.type = data.companyinfo[0].type
						this.yujingtiaojian = data.companyinfo[0].yujingtiaojian
						this.lineDetailData.lineStatus = ''
						this.dataLineDeceive = ''
						this.lineDetailData.lineUpdateTime = ''
						this.$Message.warning('当前无数据')
						return
					} else {
						let aa = []
						for (let i in data.pcb[0].data) {
							aa.push(data.pcb[0].data[i])
						}
						this.companyStatus = data.pcb[0].status.log
						this.selectedCompanyRow = data.companyinfo[0].companyCode
						this.lineTabs = aa.sort((a, b) => {
							if (a.comment < b.comment) {
								return -1
							} else {
								return 1
							}
						})

						this.unitStatus = aa[0].status.log
						if (this.lineTabs && this.lineTabs.length > 0) {
							this.lineTabIndex = this.lineTabs[0].deceiveId
						}
						this.companyDetailData.companyName = data.companyinfo[0].companyName
						this.companyDetailData.companyAddress = data.companyinfo[0].address
						this.companyDetailData.companyManager = data.companyinfo[0].manager
						this.companyDetailData.companyManagerPhone = data.companyinfo[0].managerPhone
						this.companyDetailData.belong = data.companyinfo[0].belong
						this.companyDetailData.level = data.companyinfo[0].level
						this.companyDetailData.type = data.companyinfo[0].type
						this.yujingtiaojian = data.companyinfo[0].yujingtiaojian

						let lineDeceive = aa[0]
						this.dataLineDeceive = lineDeceive.data
						this.lineDetailData.lineUpdateTime = lineDeceive.receiveTime
						this.lineDetailData.lineStatus = lineDeceive.status.comment
					}

					this.deviceListLoading = false
				})
			},
			clickLineDetailInfoTabs(tabIndex) {
				this.histogramLoading = true
				this.resetHistogramData()
				let currentDateStr = 'ALL'
				let dateRangeType
				let dataRange
				// 最新数据
				if (tabIndex == 0) {
					this.deviceListLoading = true
					this.dataLineDeceive = []
					dateRangeType = 0
					dataRange = 3
				}
				// 一小时
				if (tabIndex == 1) {
					dateRangeType = 11
					dataRange = 1
				}
				// 一天
				if (tabIndex == 2) {
					dateRangeType = 5
					this.dayValue = this.getCurrentDate()
					currentDateStr = this.dayValue
					dataRange = 1
				}
				// 一月
				if (tabIndex == 3) {
					let currentDate = new Date()
					this.yearMonthValue = [currentDate.getFullYear(), currentDate.getMonth() + 1]
					currentDateStr = this.getYearMonthStr(this.yearMonthValue)
					dateRangeType = 2
					dataRange = 1
				}
				// 预警信息
				if (tabIndex == 4) {
					dateRangeType = 9
					dataRange = 3
				}
				this.dateRangIndex = tabIndex
				let companyCode = this.selectedCompanyRow

				this.getMonitorData(tabIndex, companyCode, dateRangeType, dataRange, currentDateStr)
			},
			getMonitorData(tabIndex, companyCode, dateRangeType, dateRange, currentDateStr) {
				let _this = this
				if (!currentDateStr) {
					currentDateStr = this.getCurrentDate()
				}

				axios.request({
					url: 'hwt/queryCompanyData/' + companyCode + '/' + tabIndex + '/',
					method: 'get'
				}).then(data => {
					// console.log(data)
					let lineData = []
					let lineDeceive
					let rtnData = data.pcb
					if (rtnData.length !== 0) {
						for (let i in rtnData) {
							// console.log(rtnData[i])
							rtnData[i].data.forEach(ele => {
								if (this.lineTabIndex === ele.deceiveId) {
									// console.log("---",ele.status.log,)
									this.unitStatus = ele.status.log
									this.lineDetailData.lineStatus = ele.status.comment
									lineData.push(ele)
								}
							})
						}
					} else {
						this.$Message.warning('当前日期无数据')
					}
					// console.log(lineData)
					// 即时数据
					if (tabIndex == 0) {
						this.setLineBaseInfo(lineData)
					}
					// 小时数据
					if (tabIndex == 1) {
						// 能耗
						this.lineHourEnegyData = this.initEnegyData(lineData, tabIndex)
						// 流量
						// this.lineHourFlowData = this.initFlowData(rtnData, tabIndex)
					}
					// 天数据
					if (tabIndex == 2) {
						// 能耗

						this.lineDayEnegyData = this.initEnegyData(lineData, tabIndex)
					}
					// 月数据
					if (tabIndex == 3) {
						// 能耗
						this.lineMonthEnegyData = this.initEnegyData(lineData, tabIndex)
					}
					// 预警信息
					if (tabIndex == 4) {
						this.dataLineDeceiveException = lineDeceive.exceptionList
					}
				})
			},
			// ----------------------------
			getMonitorData2(tabIndex, companyCode, startDate, endDate) {
				if (tabIndex === 2) {
					var url = 'hwt/queryReceiveData/' + companyCode + '/' + startDate + '/' + endDate + '/'
				} else if (tabIndex === 3) {
					var url = 'hwt/queryMonthData/' + companyCode + '/' + startDate + '/'
				}
				axios.request({
					url: url,
					method: 'get'
				}).then(data => {
					// console.log(data)
					let lineData = []
					let lineDeceive
					let rtnData = data.pcb
					if (rtnData.length !== 0) {
						for (let i in rtnData) {
							rtnData[i].data.forEach(ele => {
								if (this.lineTabIndex === ele.deceiveId) {
									lineData.push(ele)
								}
							})
						}
					} else {
						this.$Message.warning('当前日期无数据')
					}
					// 即时数据
					if (tabIndex == 0) {
						this.setLineBaseInfo(lineData)
					}
					// 小时数据
					if (tabIndex == 1) {
						// 能耗
						this.lineHourEnegyData = this.initEnegyData(lineData, tabIndex)
						// 流量
						// this.lineHourFlowData = this.initFlowData(rtnData, tabIndex)
					}
					// 天数据
					if (tabIndex == 2) {
						// 能耗

						this.lineDayEnegyData = this.initEnegyData(lineData, tabIndex)
					}
					// 月数据
					if (tabIndex == 3) {
						// 能耗
						this.lineMonthEnegyData = this.initEnegyData(lineData, tabIndex)
					}
					// 预警信息
					if (tabIndex == 4) {
						this.dataLineDeceiveException = lineDeceive.exceptionList
					}
				})
				let _this = this
			},

			// ----------------------------
			setLineBaseInfo(rtnData) {
				// console.log(rtnData)
				this.deviceListLoading = false
				if (rtnData.length === 0) {
					this.lineDetailData.lineStatus = '无数据'
					return
				}
				let lineData = []
				let lineDeceive
				// let rtnData = data.pcb
				// if (rtnData.length !== 0) {
				for (let i in rtnData) {
					rtnData[i].data.forEach(ele => {
						if (this.lineTabIndex === ele.deceiveId) {
							lineData.push(ele)
						}
					})
				}

				this.dataLineDeceive = rtnData[0].data
				this.lineDetailData.lineUpdateTime = rtnData[0].receiveTime
			},

			// 实时数据，日报表，月报表曲线图渲染
			initEnegyData(rtnData, dataType) {
				// console.log(rtnData)
				let legendData = {
					data: []
				}
				let xAxisData = []
				let seriesData = []
				let subDeceiveList
				// y轴最大值
				let yMax = 0
				if (rtnData.length !== 0) {
					for (let lineDeceive of rtnData) {
						for (let nodeDeceive of lineDeceive.data) {
							if (legendData.data.indexOf(nodeDeceive.name) == -1) {
								legendData.data.push(nodeDeceive.name)
							}
						}
					}
					// console.log(legendData.data)
					let xAxisDataCategoryData = {
						type: 'category',
						data: []
					}
					let xAxisDataCategory = {
						type: 'category',
						axisTick: {
							alignWithLabel: true
						}
					}
					let categoryData = []

					for (let subDeceive of rtnData) {
						let timeStr
						// console.log(subDeceive)
						if (dataType === 3) {
							timeStr = subDeceive.receiveTime.match(/^\d+-\d+-\d+/)[0]
						} else {
							timeStr = subDeceive.receiveTime.match(/\s\d\d:\d\d/)
						}
						categoryData.push(timeStr)
					}
					xAxisDataCategoryData.data = categoryData
					xAxisData.push(xAxisDataCategoryData)
					xAxisData.push(xAxisDataCategory)

					for (let legendDataObj of legendData.data) {
						let seriesDataObj = {
							name: legendDataObj,
							type: 'line',
							smooth: true,
							data: [],
							markPoint: {
								data: [{
										type: 'max',
										name: '最大值'
									},
									{
										type: 'min',
										name: '最小值'
									}
								]
							},
							markLine: {
								data: [{
									type: 'average',
									name: '平均值'
								}]
							}
						}
						const arrValue = legendData.data.map(e => {
							const kk = {}
							kk.name = e
							kk.data = rtnData
								.map(t =>
									(t.data
										.filter(a => a.name === kk.name)
										.map(a => a.value)
									)[0]
								)
							kk.code = rtnData
								.map(t =>
									(t.data
										.filter(a => a.name === kk.name)
										.map(a => a.code)
									)[0]
								)
							return kk
						})
						for (let subDeceive of arrValue) {
							if (subDeceive.name === legendDataObj) {
								seriesDataObj.data = subDeceive.data
								seriesDataObj.code = subDeceive.code[0]
							}
						}
						seriesData.push(seriesDataObj)
					}
				} else {
					let seriesDataObj = {
						name: {
							data: []
						},
						type: 'bar',
						smooth: true,
						data: [],
						markPoint: {
							data: [{
									type: 'max',
									name: '最大值'
								},
								{
									type: 'min',
									name: '最小值'
								}
							]
						},
						markLine: {
							data: [{
								type: 'average',
								name: '平均值'
							}]
						}
					}
					seriesData.push(seriesDataObj)
				}
				// 获取y轴最大值
				for (let p = 0; p < seriesData.length; p++) {
					let a = seriesData[p].data
					let numMax = a.reduce(function (x, y) {
						return x > y ? x : y
					}, 0)
					if (numMax > yMax) {
						yMax = numMax
					}
				}

				let lineEnegyData = {
					legendData: legendData,
					xAxisData: xAxisData,
					seriesData: seriesData,
					yMax: yMax
				}
				this.histogramLoading = false
				return lineEnegyData
			},
			initFlowData(rtnData, dataType) {
				let legendData = {
					data: []
				}
				let xAxisData = []
				let seriesData = []
				if (rtnData.length !== 0) {
					let newestData = rtnData[rtnData.length - 1]
					// 能耗
					for (let lineDeceive of newestData.lineDeceiveDataList) {
						if (this.lineTabIndex === lineDeceive.id) {
							for (let nodeDeceive of lineDeceive.subDeceiveDataList) {
								let nodeIndex = nodeDeceive.nodeIndex
								if ((nodeIndex.match(/^17|18|19|20|21|22|23|24/))) {
									legendData.data.push(nodeDeceive.comment)
								}
							}
						}
					}

					let xAxisDataCategoryData = {
						type: 'category',
						data: []
					}
					let xAxisDataCategory = {
						type: 'category',
						axisTick: {
							alignWithLabel: true
						}
					}
					for (let subDeceive of rtnData) {
						if (true) {}
						let timeStr
						if (dataType === 3) {
							timeStr = subDeceive.receiveDate.match(/^\d+-\d+-\d+/)[0]
						} else {
							[
								timeStr = subDeceive.receiveDate.match(/(\d+:\d+):\d+$/)[1]
							]
						}
						xAxisDataCategoryData.data.push(timeStr)
					}
					xAxisData.push(xAxisDataCategoryData)
					xAxisData.push(xAxisDataCategory)

					for (let legendDataObj of legendData.data) {
						let seriesDataObj = {
							name: legendDataObj,
							type: 'bar',
							smooth: true,
							data: [],
							markPoint: {
								data: [{
										type: 'max',
										name: '最大值'
									},
									{
										type: 'min',
										name: '最小值'
									}
								]
							},
							markLine: {
								data: [{
									type: 'average',
									name: '平均值'
								}]
							}
						}
						for (let subDeceive of rtnData) {
							for (let lineDeceive of subDeceive.lineDeceiveDataList) {
								if (this.lineTabIndex === lineDeceive.id) {
									for (let nodeDeceive of lineDeceive.subDeceiveDataList) {
										let nodeIndex = nodeDeceive.nodeIndex
										if (legendDataObj === nodeDeceive.comment &&
											(nodeIndex.match(/^17|18|19|20|21|22|23|24/))) {
											for (let deceive of nodeDeceive.subDeceiveDataList) {
												if (deceive.comment.match(/PH值|溶解氧|流量/)) {
													seriesDataObj.data.push(deceive.nodeValue)
												}
											}
										}
									}
								}
							}
						}
						seriesData.push(seriesDataObj)
					}
				}

				// 流量
				let lineFlowData = {
					legendData: legendData,
					xAxisData: xAxisData,
					seriesData: seriesData
				}
				this.histogramLoading = false
				return lineFlowData
			},
			getCurrentYearList() {
				let currentDate = new Date()
				let currentMonth = currentDate.getMonth() + 1
				let currentYear = currentDate.getFullYear()
				let yearMonthList = []
				for (let i = currentYear; i >= currentYear - 3; i--) {
					let yearObj = {
						value: i,
						label: i + '年',
						children: []
					}
					for (let j = 1; j <= 12; j++) {
						let monthObj = {
							value: j,
							label: j + '月'
						}
						yearObj.children.push(monthObj)
					}
					yearMonthList.push(yearObj)
				}
				this.yearMonthList = yearMonthList
			},
			resetHistogramData() {
				this.lineHourEnegyData = {}
				this.lineHourFlowData = {}
				this.lineDayEnegyData = {}
				this.lineDayFlowData = {}
				this.lineMonthEnegyData = {}
				this.lineMonthFlowData = {}
			},
			setMonitorItemUint(monitorItem) {
				if (/'流量'/.test(monitorItem)) {
					return monitorItem + '(m³/s)'
				}
				if (/'电流'/.test(monitorItem)) {
					return monitorItem + '(A)'
				}
				if (/'溶解氧'/.test(monitorItem)) {
					return monitorItem + '(mg/L)'
				}
				return monitorItem
			}
		}
	}
</script>

<style>
	.imgBtn {
		width: 98px;
		height: 38px;
		border-radius: 5px;
		line-height: 38px;
		font-size: 13px;
		text-align: center;
		border: 1px solid #ccc;
		margin: 5px 0 5px 0;
		background: #f8f8f9;
		box-shadow: 1px 1px 1px #888888;
	}

	.lct {
		width: 100%;
		text-align: center;
	}

	.lct img {
		min-height: 300px;
		max-height: 600px;
	}

	.ivu-table .company-table-cell-excetpion {
		color: #ed3f14;
		font-weight: bold;
	}

	.ivu-table .company-table-cell-normal {
		color: #19be6b;
		font-weight: bold;
	}

	.ivu-table .company-table-cell-warn {
		color: #ff9900;
		font-weight: bold;
	}

	.specialdays {
		background-color: red;
	}

	table {
		*border-collapse: collapse;
		/* IE7 and lower */
		border-spacing: 0;
		width: 100%;
	}

	.bordered tr:hover {
		background: #fbf8e9;
		-o-transition: all 0.1s ease-in-out;
		-webkit-transition: all 0.1s ease-in-out;
		-moz-transition: all 0.1s ease-in-out;
		-ms-transition: all 0.1s ease-in-out;
		transition: all 0.1s ease-in-out;
	}

	.bordered th {
		padding: 7px;
		text-align: center;
	}

	.bordered td {
		padding: 7px;
		text-align: center;
	}

	.ivu-modal-header {
		background: #2D8CF0;
	}

	.ivu-modal-content {
		overflow: hidden;
	}

	.ivu-modal-header {
		padding: 12px 16px;
	}

	.ivu-modal-header p {
		height: 22px;
		line-height: 22px;
	}

	.ivu-modal-close .ivu-icon-ios-close-empty {
		color: white;
	}

	.tdt-label:hover {
		z-index: 999999;
	}
</style>