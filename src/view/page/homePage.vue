<template>
	<div v-loading="loading" element-loading-text="程序执行中" element-loading-spinner="el-icon-loading"
		element-loading-background="rgba(0, 0, 0, 0.8)">
		<el-button type="primary" @click="openPrintPage" class="print-button">打印Excel</el-button>
		<el-button type="primary" @click="openErrorPage" class="elec-button">异常企业列表</el-button>
		<!-- <el-button type="primary" @click="openZeroPage" class="elec-button">打印低电流</el-button>
		<el-button type="primary" @click="openEchartPage" class="echart-button">图表</el-button>
		<el-button type="primary" @click="openDatePage" class="date-button">日历</el-button> -->
		<el-button type="primary" @click="openDGAlterPage" class="dg-alter-button" v-if="asFlg">东莞改数据</el-button>
		<el-button type="primary" @click="openNoProductPage" class="no-product-button">企业生产状况</el-button>
		<dg-alter-page v-if="showDGAlterPage" v-on:exportExcel="exportConvertReportText" v-on:cancel="closeDGAlterPage" />
		<print-page v-if="showPrintPage" v-on:exportExcel="exportExcel" v-on:exportOnProduct="exportOnProduct"
			v-on:exportErrorCompanys="exportErrorCompanys" v-on:cancel="closePrintPage" />
		<error-page v-if="showErrorPage" v-on:cancel="closeErrorPage" />
		<!-- <print-zero v-if="showPrintZero" v-on:exportExcel="exportZero" v-on:cancel="closeZeroPage" /> -->
		<echart-page v-if="showEChartPage" v-on:cancel="closeChartPage" :installCompanyLength="installCompanyLength" />
		<date-page v-if="showDatePage" v-on:cancel="closeDatePage" :allCompany="markerDataall"
			v-on:exportProducting="exportProducting" />
		<no-product-page v-if="showNoProductPage" v-on:cancel="closeNoProductPage" :allCompany="markerDataall"
			v-on:exportNoProduct="exportNoProduct" />
		<!-- 地图组件 -->
		<div>
			<map-layout map-name="index-map" :maker-data="markerData" :marker-id.sync='markerId'
				@markerOnClick="markerOnClick" :map-center="mapCenter">
			</map-layout>
		</div>

		<!-- 统计图组件 -->

		<div
			style="width: 380px; position: absolute; top: 80px; left: 10px; background-color: rgba(255, 255, 255, 0.8); font-size: 1.5em; padding: 10px;">
			<cartogram :cartogramdata="markerDataall">
			</cartogram>
		</div>

		<!-- 企业列表组件 -->
		<div>
			<list-div :cartogramdata="markerDataall" :alldata="markerData" @showCompanyDetail="showCompanyDetail"
				@getAllCompany="getAllCompany" @getAllCompany2="getAllCompany2" @getAllCompany3="getAllCompany3"
				@getAllCompany4="getAllCompany4" @getAllCompany5="getAllCompany5">
			</list-div>
		</div>
		<!-- 企业详情页组件 TODO: 拆分 -->
		<div>
			<Modal v-model="modalCompanyDetail" @on-cancel="beforeModalCancel" :scrollable="scrollableFlag"
				ref="detailModal" :styles="{ top: '10%', overflow: 'auto' }" width="70%" :draggable="true" height="20%"
				class-name="center-modal" @on-visible-change="companyBeforeClose">
				<p slot="header">
					<span style="font-size: 22px;color:white;">企业详情页</span>
				</p>
				<div>
					<Card>
						<Row>
							<Col span="2">企业名称 : </Col>
							<Col span="10">{{ companyDetailData.companyName }}</Col>
							<Col span="2">负责人 : </Col>
							<Col span="10">{{ companyDetailData.companyManager }}</Col>
						</Row>
						<Row>
							<Col span="2">企业地址 : </Col>
							<Col span="10">{{ companyDetailData.companyAddress }}</Col>
							<Col span="2">联系方式 : </Col>
							<Col span="10">{{ companyDetailData.companyManagerPhone }}</Col>
						</Row>
						<Row>
							<Col span="2">类型 : </Col>
							<Col span="10">{{ companyDetailData.type }}</Col>
							<Col span="2">归属 : </Col>
							<Col span="10">{{ companyDetailData.belong }}</Col>
						</Row>
						<Row>
							<Col span="2">等级 : </Col>
							<Col span="10">{{ companyDetailData.level }}</Col>
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
							<Col span="9">{{ companyStatus }}</Col>
						</Row>
					</Card>
					<Button type="primary" style="margin-top:10px;margin-bottom:10px;" v-show="imgBtnShow"
						@click="imgShow(); showMonitor = false">显示拓扑图</Button>
					<div class="lct" v-show="imgBoxShow" style="overflow: auto">
						<ProcessGraph :companyCodeForGraph="companyCodeForGraph" :companyName="exlname"
							v-if="modalCompanyDetail && imgBoxShow" />
					</div>
					<el-tabs v-model="msgValue" type="card" :value="lineTabIndex" @tab-click="clickLineTabs()">
						<el-tab-pane v-for="(lineTab, index) in lineTabs" :key="index" :label="`${lineTab.deviceName}`"
							:name="`${lineTab.deviceName}`">
							<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse;margin-top: 10px;"
								width="100%" size="small">
								<tr style="text-align: center;" height="25px">
									<td width="20%">数据更新时间</td>
									<td width="30%">{{ lineDetailData.lineUpdateTime }}</td>
									<td width="20%">被监控单元状态</td>
									<td width="30%">{{ lineDetailData.lineStatus }}</td>
								</tr>
							</table>
							<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse;border-top:white;"
								width="100%" size="small">
								<tr style="text-align: center;" height="25px">
									<td width="20%">被监控单元状态描述</td>
									<td width="80%">{{ unitStatus }}</td>
								</tr>
							</table>
							<Tabs type="card" @on-click="clickLineDetailInfoTabs" :animated="false" :value="dateRangIndex"
								style="overflow:visible;">
								<TabPane label="基本信息">
									<Card style="margin-top: 10px;">
										<Table border :columns="columnsDevice" :data="dataLineDeceive"
											:loading="deviceListLoading" size="small">
										</Table>
									</Card>
								</TabPane>
								<TabPane label="实时数据" style="overflow:visible;">
									<div v-if="tabIndex === 1">
										<Form :label-width="80" style="height: 35px;">
										<Row>
											<Col span="10">
											<FormItem label="选择日期 : ">
												<Row style="width:500px">
													<Col span="24">
													<FormItem prop="date">
														<DatePicker v-model="startData" type="datetime" placeholder="请选择开始日期 "
															style="width: 40%;display:inline-block;"
															@on-change="getstartData"></DatePicker>~
														<DatePicker v-model="endData" type="datetime" placeholder="请选择截止日期 "
															style="width: 40%;display:inline-block;"
															@on-change="getendData"></DatePicker>
														<Button @click="onRealChange">点击搜索</Button>
													</FormItem>
													</Col>
												</Row>
											</FormItem>
											</Col>
										</Row>
									</Form>
									<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse" width="100%">
									</table>
										<Button type="primary" style="margin-bottom:10px;"
										@click="changeEcharts(1)">折线图</Button>
										<Button type="primary" style="margin-bottom:10px;margin-left:5px;"
										@click="changeEcharts(2)">时序图</Button>
										<!-- 折线图 -->
										<Tabs type="card" :animated="false" width="100%" style="overflow:visible;" v-show="echartsNumber==1">
											<TabPane :label=pmname :disabled="histogramHourEnegyDisabled" style="overflow:visible;">
												<div style="width:100%">
													<histogram :init-value="lineRealTimeData"></histogram>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
										<!-- 时序图 -->
										<Tabs type="card" :animated="false" width="100%" style="overflow:visible;" v-show="echartsNumber==2">
											<TabPane :label=pmname :disabled="histogramHourEnegyDisabled" style="overflow:visible;">
												<div style="width:100%">
													<timing :init-value="realTimeData"></timing>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
								    </div>
								</TabPane>
								<TabPane label="分钟数据" style="overflow:visible;">
									<div v-if="tabIndex === 2">

										<Form :label-width="80" style="height: 35px;">
										<Row>
											<Col span="10">
											<FormItem label="选择日期 : ">
												<Row style="width:500px">
													<Col span="24">
													<FormItem prop="date">
														<DatePicker v-model="startData" type="datetime" placeholder="请选择开始日期 "
															style="width: 40%;display:inline-block;"
															@on-change="getstartData"></DatePicker>~
														<DatePicker v-model="endData" type="datetime" placeholder="请选择截止日期 "
															style="width: 40%;display:inline-block;"
															@on-change="getendData"></DatePicker>
														<Button @click="onRealChange">点击搜索</Button>
													</FormItem>
													</Col>
												</Row>
											</FormItem>
											</Col>
										</Row>
									</Form>
									<table border="1" bordercolor="#d7d7d7" style="border-collapse:collapse" width="100%">
									</table>
									
										<Button type="primary" style="margin-bottom:10px;"
											@click="changeEcharts(1)">折线图</Button>
										<Button type="primary" style="margin-bottom:10px;margin-left:5px;"
											@click="changeEcharts(2)">时序图</Button>
										<Tabs type="card" :animated="false" width="100%" style="overflow:visible;"
											v-show="echartsNumber == 1">
											<TabPane :label=pmname :disabled="histogramHourEnegyDisabled"
												style="overflow:visible;">
												<div style="width:100%">
													<histogram :init-value="lineHourEnegyData"></histogram>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
										<!-- 分钟时序图 -->
										<Tabs type="card" :animated="false" width="100%" style="overflow:visible;"
											v-show="echartsNumber == 2">
											<TabPane :label=pmname :disabled="histogramHourEnegyDisabled"
												style="overflow:visible;">
												<div style="width:100%">
													<timing :init-value="timeData"></timing>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
								    </div>
								</TabPane>
								<TabPane label="日查询">
									<Form :label-width="80" style="height: 35px;">
										<Row>
											<Col span="10">
											<FormItem label="选择日期 : ">
												<Row style="width:500px">
													<Col span="24">
													<FormItem prop="date">
														<DatePicker v-model="startData" type="datetime" placeholder="请选择开始日期 "
															style="width: 40%;display:inline-block;"
															@on-change="getstartData"></DatePicker>~
														<DatePicker v-model="endData" type="datetime" placeholder="请选择截止日期 "
															style="width: 40%;display:inline-block;"
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
									<div v-if="tabIndex === 3">
										<Button type="primary" style="margin-bottom:10px;"
											@click="changeEcharts(1)">折线图</Button>
										<Button type="primary" style="margin-bottom:10px;margin-left:5px;"
											@click="changeEcharts(2)">时序图</Button>
										<!-- 日查询折线图 -->
										<Tabs type="card" :animated="false" style="width: 100%;" v-show="echartsNumber == 1">
											<TabPane :label=pmname :disabled="histogramDayEnegyDisabled">
												<div style="width:100%">
													<histogram :init-value="lineDayEnegyData"></histogram>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
										<!-- 日查询时序图 -->
										<Tabs type="card" :animated="false" width="100%" style="overflow:visible;"
											v-show="echartsNumber == 2">
											<TabPane :label=pmname :disabled="histogramHourEnegyDisabled"
												style="overflow:visible;">
												<div style="width:100%">
													<timing :init-value="timeDayData"></timing>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
								    </div>
								</TabPane>
								<TabPane label="月查询">
									<Form :label-width="80" style="height: 50px;">
										<FormItem label="选择年月 : ">
											<Row>
												<Col span="5">
												<Cascader :data="yearMonthList" @on-change="onYearMonthChange"
													v-model="yearMonthValue">
												</Cascader>
												</Col>
											</Row>
										</FormItem>
									</Form>
									<div v-if="tabIndex === 4">
										<Button type="primary" style="margin-bottom:10px;"
											@click="changeEcharts(1)">折线图</Button>
										<Button type="primary" style="margin-bottom:10px;margin-left:5px;"
											@click="changeEcharts(2)">时序图</Button>
										<!-- 月查询折线图 -->
										<Tabs type="card" :animated="false" v-show="echartsNumber == 1">
											<TabPane :label=pmname :disabled="histogramMonthEnegyDisabled">
												<div style="width:100%">
													<histogram :init-value="lineMonthEnegyData"></histogram>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
										<!-- 月查询时序图 -->
										<Tabs type="card" :animated="false" width="100%" style="overflow:visible;"
											v-show="echartsNumber == 2">
											<TabPane :label=pmname :disabled="histogramHourEnegyDisabled"
												style="overflow:visible;">
												<div style="width:100%">
													<timing :init-value="timeMonthData"></timing>
													<Spin size="large" fix v-if="histogramLoading"></Spin>
												</div>
											</TabPane>
										</Tabs>
								    </div>
								</TabPane>
							</Tabs>
						</el-tab-pane>
					</el-tabs>
				</div>
				<div slot="footer" style="text-align: center">
				</div>
			</Modal>
		</div>
	</div>
</template>
<script>
import viewApi from '@/http/viewApi.js'
import { getToken } from '@/libs/util.js'
import printPage from '../components/printPage'
import errorPage from '../components/errorPage'
import printZero from '../components/printPage1'
import echartPage from '../components/echartPage'
import datePage from '../components/datePage'
import noProductPage from '../components/noProductPage'
import dgAlterPage from '../components/dgAlterPage'
import util1 from '@/common/util.js'
import axios from '@/libs/api.request'
import mapLayout from '../components/mapLayout'
import histogram from '../components/histogram.vue'
import timing from '../components/timing.vue'
import listDiv from '../components/listDiv.vue'
import cartogram from '../components/cartogram.vue'
import detailpage from '../components/detailpage.vue'
import ProcessGraph from './processGraph.vue'
export default {
	name: 'index',
	components: {
		printPage,
		errorPage,
		dgAlterPage,
		printZero,
		echartPage,
		datePage,
		noProductPage,
		mapLayout,
		histogram,
		timing,
		ProcessGraph,
		listDiv,
		cartogram,
		detailpage,
	},
	data() {
		return {
			msgValue: '',
			token: '',
			currentDeviceCode: [],
			storageAllCompanys: [], //全部企业基本信息
			installCompanyLength: 0,
			showPrintPage: false,
			showErrorPage: false,
			showPrintZero: false,
			showEChartPage: false,
			showDatePage: false,
			showDGAlterPage: false,
			showNoProductPage: false,
			loading: false,
			lctshow: false,
			yujingtiaojian: '',
			startData: '',
			endData: '',
			pmname: '',
			justEq: false,
			companyStatus: '',
			unitStatus: '',
			imgUrl: '',
			imgBtnShow: true,
			imgBoxShow: false,
			exlname: '',
			histogramLoading: false,
			isShowCompanyList: false,
			scrollableFlag: true,
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
			timeData:{},
			lineHourFlowData: {},
			lineDayEnegyData: {},
			timeDayData:{},
			lineDayFlowData: {},
			lineMonthEnegyData: {},
			timeMonthData:{},
			lineMonthFlowData: {},
			histogramHourEnegyDisabled: false,
			histogramHourFlowDisabled: false,
			histogramDayEnegyDisabled: false,
			histogramDayFlowDisabled: false,
			histogramMonthEnegyDisabled: false,
			histogramMonthFlowDisabled: false,
			selectedCompanyRow: '',
			modalCompanyDetail: false,
			markerId: '0',
			markerData: [],
			markerDataall: [],
			mapCenter: {},
			lineTabs: [],
			lineTabIndex: '',
			dateRangIndex: 0,
			displayItemRegExp: /-(2|5|8)$/,
			BJdisplayItemRegExp: /-(1|3)$/,
			BJstatusdisplayItemRegExp: /-(1|2|3|4)$/,
			showMonitor: false,
			monitorData: null, // 监控数据 token and src
			dataCompanyList: [],
			deviceListLoading: false,
			asFlg: false,
			columnsDevice: [
				{
					title: '监控项目',
					align: 'center',
					key: 'monitorPointName',
					render: (h, params) => {
						let commentStr = params.row.monitorPointName
						return h('span', commentStr)
					}
				},
				{
					title: '实时数据',
					align: 'center',
					render: (h, params) => {
						let commentValue = params.row.factorValue
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
						let colArr = new Array()
						if (params.row.factorValue > 1) {
							typeStr = 'success'
							statusStr = '开机'
						} else {
							typeStr = 'error'
							statusStr = '未开机'
						}
						colArr.push(
							h(
								'Button', {
								props: {
									type: typeStr,
									size: 'small',
									long: true
								}
							},
								statusStr
							)
						)
						return h('Row', colArr)
					}
				}
			],
			dataLineDeceive: [],
			// 企业拓扑图
			companyCodeForGraph: '',
			companyDataForGraph: {},
			echartsNumber: 1,
			lineRealTimeData:{},
			tabIndex:0,
			realTimeData:{}
		}
	},
	created() {
		this.token = getToken()
		let userId = localStorage.getItem('userId')
		if (userId.match('as001')) {
			this.asFlg = true
		} else {
			this.asFlg = false
		}
		this.firstalldata('')
		setInterval(() => {
			this.firstalldata()
		}, 1000 * 60 * 5)
		// let data1 = util1.getStorage('2022-03-15')
		// let data2 = util1.getStorage('2022-03-16')
		// let data3 = util1.getStorage('2022-03-17')
		// let data4 = util1.getStorage('2022-03-18')
		// let data5 = util1.getStorage('2022-03-19')
		// let data6 = util1.getStorage('2022-03-20')
		// let data7 = util1.getStorage('2022-03-21')
		// let data8 = util1.getStorage('2022-03-22')
		// let data9 = util1.getStorage('2022-03-23')
		// let data10 = util1.getStorage('2022-03-24')
		// let data11 = util1.getStorage('2022-03-25')
		// let data12 = util1.getStorage('2022-03-26')
		// let data13 = util1.getStorage('2022-03-27')
		// let data14 = util1.getStorage('2022-03-28')
		// let data15 = util1.getStorage('2022-03-29')
		// let data16 = util1.getStorage('2022-03-30')
		// let array = []
		// array.push(...data1)
		// array.push(...data2)
		// array.push(...data3)
		// array.push(...data4)
		// array.push(...data5)
		// array.push(...data6)
		// array.push(...data7)
		// array.push(...data8)
		// array.push(...data9)
		// array.push(...data10)
		// array.push(...data11)
		// array.push(...data12)
		// array.push(...data13)
		// array.push(...data14)
		// array.push(...data15)
		// array.push(...data16)
		// let array1 = []
		// array[0].count = 0
		// array1.push(array[0])
		// for(let i=1;i<array.length;i++){
		// 	if(!array1.find(item=>{
		// 		return item.companyName == array[i].companyName
		// 	})){
		// 		array[i].count = 0
		// 		array1.push(array[i])
		// 	}
		// }
		// for(let i=0;i<array.length;i++){
		// 	array1.map(item=>{
		// 		if(item.companyName == array[i].companyName){
		// 			item.count++
		// 		}
		// 	})
		// }
		// let array2 = []
		// array1.map(item=>{
		// 	if(item.count > 0){
		// 		array2.push(item)
		// 	}
		// })
		// this.export2Excel(array2,'2021-03-15' + '-' + '2022-03-30' + '正常在产企业基本信息')
	},
	computed: {
		monitorList() {
			return monitorJSONList
		}
	},
	methods: {
		//新增功能开始
		closePrintPage() {
			this.showPrintPage = false
		},
		closeErrorPage() {
			this.showErrorPage = false
		},
		closeChartPage() {
			this.showEChartPage = false
		},
		closeDGAlterPage() {
			this.showDGAlterPage = false
		},
		closeZeroPage() {
			this.showPrintZero = false
		},
		closeDatePage() {
			this.showDatePage = false
		},
		closeNoProductPage() {
			this.showNoProductPage = false
		},
		openErrorPage() {
			this.showErrorPage = true
		},
		openPrintPage() {
			this.showPrintPage = true
		},
		openDGAlterPage() {
			this.showDGAlterPage = true
		},
		openZeroPage() {
			this.showPrintZero = true
		},
		openEchartPage() {
			this.showEChartPage = true
		},
		openDatePage() {
			this.showDatePage = true
		},
		openNoProductPage() {
			this.showNoProductPage = true
		},
		exportZero(res) {
			this.loading = true
			this.showZeroPage = false
			let data = {
				'startTime': res.startTime,
				'endTime': res.endTime
			}
			axios.requestNormal({
				url: 'http://114.116.38.171:8013/test/zeroData',
				data,
				method: 'post'
			}).then(res1 => {
				this.loading = false
				this.handle1(res1, res.max)
			})
		},

		exportErrorCompanys(res) {
			this.loading = true
			this.showPrintPage = false
			let data = {
				'startTime': res.startTime,
				'endTime': res.endTime
			}
			let belong = res.belong
			axios.requestNormal({
				url: 'http://114.116.38.171:8013/test/redReport',
				data,
				method: 'post'
			}).then(res1 => {
				this.loading = false
				this.handle(res1, belong)
			})
		},
		exportProducting(res) {
			this.export2Excel5(res, '在产企业名单')
		},
		exportNoProduct(res) {
			this.export2Excel6(res.tableData, res.startTime)
		},
		//新增功能结束
		handle(res, belong) {
			if (res && res.length > 0) {
				let errorCompanyCodes = []
				let errorCompanys = []
				for (let i = 0; i < res.length; i++) {
					if (!errorCompanyCodes.includes(res[i].companyCode)) {
						let obj = {}
						obj.receiveTime = util1.formatDate.format(new Date(res[i].receiveTime), 'yyyy-MM-dd hh:mm:ss')
						obj.companyName = res[i].companyName
						obj.companyCode = res[i].companyCode
						obj.log = res[i].status.log
						errorCompanyCodes.push(res[i].companyCode)
						errorCompanys.push(obj)
					}
				}
				let errorCompanys2 = []
				errorCompanys.map(item => {
					let obj = this.storageAllCompanys.find(item1 => {
						return item1.companyCode == item.companyCode
					})
					if (obj.belong) {
						item.belong = obj.belong
					} else {
						item.belong = '大石桥'
					}
					if (item.belong != '营口' && item.belong != '盖州' && item.belong != '鲅鱼圈') {
						item.belong = '大石桥'
					}
					if (item.belong == belong) {
						errorCompanys2.push(item)
					}
				})
				if (errorCompanys2.length > 0) {
					this.export2Excel3(errorCompanys2, belong + '异常企业列表')
				} else {
					this.$Message.error('没有查询到' + belong + '的异常企业')
				}
			} else {
				setTimeout(() => {
					this.handle(res)
				}, 1000)
			}
		},
		handle1(res, max) {
			if (res && res.length > 0) {
				let errorCompanyCodes = []
				let errorCompanys = []
				for (let i = 0; i < res.length; i++) {
					if (res[i].maxElectric > max || res[i].maxElectric == 'NaN') {
						continue
					}
					if (!errorCompanyCodes.includes(res[i].companyCode)) {
						let obj = {}
						obj.receiveTime = util1.formatDate.format(new Date(res[i].receiveTime), 'yyyy-MM-dd hh:mm:ss')
						obj.companyName = res[i].companyName
						obj.companyCode = res[i].companyCode
						obj.maxElectric = res[i].maxElectric
						obj.count = 1
						errorCompanyCodes.push(res[i].companyCode)
						errorCompanys.push(obj)
					} else {
						errorCompanys.map(item => {
							if (item.companyCode == res[i].companyCode) {
								item.receiveTime = util1.formatDate.format(new Date(res[i].receiveTime), 'yyyy-MM-dd hh:mm:ss')
								item.count++
							}
						})
					}
				}
				this.export2Excel4(errorCompanys, '低电流企业列表')
			} else {
				setTimeout(() => {
					this.handle1(res)
				}, 1000)
			}
		},

		export2Excel3(tableData, excelName) {
			require.ensure([], () => {
				let {
					export_json_to_excel
				} = require('../../excel/Export2Excel');
				let tHeader = ['公司名称', '最早异常时间', '异常原因', '归属'];
				let filterVal = ['companyName', 'receiveTime', 'log', 'belong'];
				let list = tableData;
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, excelName);
			})
		},
		export2Excel4(tableData, excelName) {
			require.ensure([], () => {
				let {
					export_json_to_excel
				} = require('../../excel/Export2Excel');
				let tHeader = ['公司名称', '接收时间', '最大电流', '次数'];
				let filterVal = ['companyName', 'receiveTime', 'maxElectric', 'count'];
				let list = tableData;
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, excelName);
			})
		},
		export2Excel5(tableData, excelName) {
			require.ensure([], () => {
				let {
					export_json_to_excel
				} = require('../../excel/Export2Excel');
				let tHeader = ['公司名称'];
				let filterVal = ['companyName'];
				let list = tableData;
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, excelName + tableData[0].startTime);
			})
		},
		export2Excel6(tableData, excelName) {
			excelName = excelName + '查询企业窑炉设备运行汇总'
			require.ensure([], () => {
				let {
					export_json_to_excel
				} = require('../../excel/Export2Excel');
				let tHeader = ['公司名称', '窑炉总数', '窑炉类型', '生产总数', '生产类型', '停产总数', '停产类型', '归属', '备注'];
				let filterVal = ['companyName', 'deviceNumber', 'deviceName', 'productNumber', 'productName', 'noProductNumber', 'noProductName', 'belong', 'remark'];
				let list = tableData;
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, excelName);
			})
		},
		exportExcel(res) {
			this.showPrintPage = false
			this.loading = true
			let obj = {}
			obj.startTime = res.startTime
			obj.endTime = res.endTime
			let resNumber = res.res
			viewApi.getCompanyStatusByDate(obj, this.token).then(result => {
				this.loading = false
				let infos = result.data.list
				let companyList = []
				infos.map(item => {
					let state = 0
					for (let i = 0; i < item.produceInfos.length; i++) {
						if (item.produceInfos[i].produceState > state) {
							state = item.produceInfos[i].produceState
						}
					}
					if (state == resNumber) {
						let objs = {}
						let telephone = item.company.telephone
						let length = telephone.length
						telephone = telephone.slice(0, 3) + '****' + telephone.slice(length - 4, length)
						item.company.telephone = telephone
						objs.companyName = item.company.companyName
						objs.manager = item.company.manager
						objs.telephone = item.company.telephone
						objs.address = item.company.address
						objs.paymentTime = item.company.paymentTime
						companyList.push(objs)
					}
				})
				// util1.setStorage(obj.startTime,companyList)
				if (resNumber == 0) {
					this.export2Excel(companyList, obj.startTime + '-' + obj.endTime + '未生产企业基本信息')
				} else if (resNumber == 1) {
					this.export2Excel(companyList, obj.startTime + '-' + obj.endTime + '正常在产企业基本信息')
				} else if (resNumber == 5) {
					this.export2Excel(companyList, obj.startTime + '-' + obj.endTime + '离线企业基本信息')
				} else if (resNumber == 10) {
					this.export2Excel(companyList, obj.startTime + '-' + obj.endTime + '异常企业基本信息')
				}
			})
		},
		exportConvertReportText(res) {
			this.showDGAlterPage = false
			let data = res
			let convertedData = []
			for (let i = 0; i < data.length; i++) {
				if (data[i].length > 4) {
					let obj = {
						start: '',
						end: '',
					}
					obj.start = data[i]
					viewApi.convertReportText(escape(data[i]), this.token).then(res => {
						obj.end = res
						convertedData.push(obj)
					})
				}
			}
			setTimeout(() => {
				this.export2ExcelDGSJ(convertedData, '数据')
			}, 2000)
		},
		exportOnProduct(res1) {
			this.showPrintPage = false
			this.loading = true
			let url = "test/findOnProduct"
			// let url = "http://127.0.0.1:8013/test/findOnProduct"
			axios.request({
				url: url,
				data: res1,
				method: 'post'
			}).then(res => {
				this.loading = false
				this.exportOnProduct1(res)
			})
		},
		exportOnProduct1(res) {
			let result = []
			res.map(item => {
				if (item.status == 1 || item.status == 10) {
					result.push(item)
				}
			})
			let companyInfos = []
			companyInfos.push(result[0])
			let companyCodes = []
			companyCodes.push(result[0].companyCode)
			for (let i = 0; i < result.length; i++) {
				if (companyCodes.find(item => { return item == result[i].companyCode })) {
					continue
				} else {
					companyCodes.push(result[i].companyCode)
					companyInfos.push(result[i])
				}
			}
			this.export2Excel(companyInfos, this.startTime + '-' + this.endTime + '在产企业基本信息')
		},
		formatJson(filterVal, jsonData) {
			return jsonData.map(v => filterVal.map(j => v[j]))
		},
		export2Excel(tableData, excelName) {
			this.loading = false
			require.ensure([], () => {
				let nameNumber = Object.keys(tableData[0]).length
				let {
					export_json_to_excel
				} = require('../../excel/Export2Excel');
				let tHeader = ['公司名称', '联系人', '电话', '缴费日期'];
				let filterVal = ['companyName', 'manager', 'telephone', 'paymentTime'];
				for (let i = 0; i < nameNumber; i++) {
					let name = 'name' + (i * 1 + 1).toString()
					let value = 'value' + (i * 1 + 1).toString()
					let str = tableData[0][name]
					tHeader.push(str)
					filterVal.push(value)
				}
				let list = tableData;
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, excelName);
			})
		},
		exportAllEquipments(companyList, str) {
			let companyCodes = []
			let companyNames = []
			for (let i = 0; i < companyList.length; i++) {
				companyCodes.push(companyList[i].companyCode)
				companyNames.push(companyList[i].companyName)
			}
			let index = 0
			let companyEquipments = []
			this.getAllEquipmentInfos(companyEquipments, companyCodes, companyNames, index, str)
		},
		exportExcels(res, str) {
			this.export2Excel2(res, str)
		},
		export2Excel2(tableData, excelName) {
			this.loading = false
			require.ensure([], () => {
				let {
					export_json_to_excel
				} = require('../../excel/Export2Excel');
				let tHeader = ['公司名称', '监控单元名称', '监控单元id', '设备名称', '设备回路', '关联num', '关联回路'];
				let filterVal = ['companyName', 'deviceName', 'pcbId', 'equipmentName', 'code', 'num', 'process'];
				let list = tableData;
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, excelName);
			})
		},
		export2ExcelDGSJ(tableData, excelName) {
			require.ensure([], () => {
				let {
					export_json_to_excel
				} = require('../../excel/Export2Excel')
				let tHeader = ['修改前', '修改后']
				let filterVal = ['start', 'end']
				let list = tableData;
				let data = this.formatJson(filterVal, list);
				export_json_to_excel(tHeader, data, excelName);
			})
		},
		getAllEquipmentInfos(companyEquipments, companyCodes, companyNames, index, str) {
			if (index >= companyCodes.length) {
				this.exportExcels(companyEquipments, str)
				return
			}
			let j = index
			let param = {}
			param.id = companyCodes[j]
			axios.request({
				url: 'http://114.116.38.171:8019/hwt/api/deceiveInfo/find/' + param.id,
				method: 'GET'
			}).then(res => {
				let infos = res.data
				if (infos.length > 0) {
					for (let m = 0; m < infos.length; m++) {
						for (let n = 0; n < infos[m].data.length; n++) {
							let obj = {}
							obj.deviceName = infos[m].comment
							obj.pcbId = infos[m].pcbid
							obj.companyName = companyNames[j]
							this.$set(obj, 'equipmentName', infos[m].data[n].name)
							this.$set(obj, 'code', infos[m].data[n].code)
							this.$set(obj, 'num', infos[m].data[n].num)
							this.$set(obj, 'process', [])
							if (infos[m].data[n].process.length != '') {
								for (let i = 0; i < infos[m].data[n].process.length; i++) {
									obj = {}
									obj.deviceName = infos[m].comment
									obj.pcbId = infos[m].pcbid
									obj.companyName = companyNames[j]
									this.$set(obj, 'equipmentName', infos[m].data[n].name)
									this.$set(obj, 'code', infos[m].data[n].code)
									this.$set(obj, 'num', infos[m].data[n].num)
									this.$set(obj, 'process', infos[m].data[n].process[i])
									companyEquipments.push(obj)
								}
							} else {
								companyEquipments.push(obj)
							}
						}
					}
					index++
					this.getAllEquipmentInfos(companyEquipments, companyCodes, companyNames, index, str)
				} else {
					index++
					this.getAllEquipmentInfos(companyEquipments, companyCodes, companyNames, index, str)
				}
			})
		},
		//完成开始
		imgShow() {
			this.imgBoxShow = !this.imgBoxShow
		},
		getstartData(selectDay, dateObj) {
			this.startData = selectDay
		},
		getendData(selectDay, dateObj) {
			this.endData = selectDay
		},
		isShowCompanyListFun() {
			this.isShowCompanyList = !this.isShowCompanyList
		},
		companyBeforeClose(showFlag) {
			if (!showFlag) {
				this.resetHistogramData()
			}
		},
		//将接口数据重构，转换成1.0版本的数据结构
		matchCompanyList(rtnData) {
			rtnData.map(item => {
				item.payTime = ''
				if (item.level) {
					if (item.level.includes('￥')) {
						item.payTime = item.level.split('￥')[1]
						item.level = item.level.split('￥')[0]
					}
				}
				let obj = {}
				if (item.installState == 0) {
					obj.value = 7
					obj.comment = '未安装'
					obj.log = '未安装'
					obj.count = 0
				} else {
					if (item.netState == 0) {
						let currentTime = new Date().getTime()
						let payTime
						if (item.paymentTime) {
							payTime = new Date(item.paymentTime).getTime()
							if (currentTime - payTime < 365 * 24 * 60 * 60 * 1000) {
								obj.value = 5
								obj.comment = '离线'
								obj.log = '离线'
								obj.count = 0
							} else {
								if (item.payTime) {
									payTime = new Date(item.payTime).getTime()
									if (currentTime - payTime < 365 * 24 * 60 * 60 * 1000) {
										obj.value = 5
										obj.comment = '离线'
										obj.log = '离线'
										obj.count = 0
									} else {
										obj.value = 5
										obj.comment = '离线'
										obj.log = '离线'
										obj.count = 0
									}
								} else {
									obj.value = 5
									obj.comment = '离线'
									obj.log = '离线'
									obj.count = 0
								}
							}
						} else {
							if (item.payTime) {
								payTime = new Date(item.payTime).getTime()
								if (currentTime - payTime < 365 * 24 * 60 * 60 * 1000) {
									obj.value = 5
									obj.comment = '离线'
									obj.log = '离线'
									obj.count = 0
								} else {
									obj.value = 5
									obj.comment = '离线'
									obj.log = '离线'
									obj.count = 0
								}
							} else {
								obj.value = 5
								obj.comment = '离线'
								obj.log = '离线'
								obj.count = 0
							}
						}
					} else {
						if (item.alarmState == 0) {
							if (item.produceState == 0) {
								obj.value = 1
								obj.comment = '正常(未生产)'
								obj.log = '正常(未生产)'
								obj.count = 0
							} else {
								obj.value = 1
								obj.comment = '正常'
								obj.log = '正常'
								obj.count = 0
							}
						} else {
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
		getAllCompany(status) {
			let data = {
				pageSize: '9999'
			}
			viewApi.getCompanyList(data, this.token).then(res => {
				this.companyListTotal = res.total
				let rtnData = res.rows
				rtnData = this.matchCompanyList(rtnData)
				this.markerDataall = rtnData
				if (rtnData && rtnData.length > 0) {
					this.mapCenter = {
						lat: rtnData[0].latitude,
						lng: rtnData[0].longitude
					}
					if (status == 'ALL') {
						this.markerData = rtnData
					} else if (status == 'PRODUCT') {
						this.markerData = rtnData.filter(item => {
							return item.status.value == 1 && !item.status.comment.includes('未生产')
						})
					} else if (status == 'NOTPRODUCT') {
						this.markerData = rtnData.filter(item => {
							return item.status.value == 1 && item.status.comment.includes('未生产')
						})
					} else {
						this.markerData = rtnData.filter(item => {
							return item.status.value == status
						})
					}
				} else {
					this.markerData = []
				}
			})
		},
		getAllCompany2(status) {
			this.loading = true
			let data = {
				pageSize: '9999'
			}
			viewApi.getCompanyList(data, this.token).then(data => {
				this.loading = false
				let rtnData = []
				if (status == '0') {
					rtnData = data.rows
				} else if (status == 1) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].level.includes('A1')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 2) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].level.includes('A3')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 3) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].level.includes('B')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 4) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].level.includes('C')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 5) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].level.includes('A2')) {
							rtnData.push(data.rows[i])
						}
					}
				}
				rtnData = this.matchCompanyList(rtnData)
				this.markerDataall = rtnData
				this.mapCenter = {
					lat: rtnData[0].latitude,
					lng: rtnData[0].longitude
				}
				if (rtnData && rtnData.length > 0) {
					this.markerData = rtnData
					this.dataCompanyList = rtnData
					this.companyListTotal = rtnData.length
				} else {
					this.markerData = []
					this.dataCompanyList = []
					this.companyListTotal = 0
				}
			})
		},
		getAllCompany3(status) {
			this.loading = true
			let data = {
				pageSize: '9999'
			}
			viewApi.getCompanyList(data, this.token).then(data => {
				this.loading = false
				let rtnData = []
				if (status == '0') {
					rtnData = data.rows
				} else if (status == 1) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('南楼1')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 2) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('南楼2')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 3) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('南楼3')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 4) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('官屯')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 5) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('环城')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 6) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('永安')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 7) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('有色')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 8) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('高坎')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 9) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('钢都')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 10) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('汤池')) {
							rtnData.push(data.rows[i])
						}
					}
				}
				rtnData = this.matchCompanyList(rtnData)
				this.markerDataall = rtnData
				this.mapCenter = {
					lat: rtnData[0].latitude,
					lng: rtnData[0].longitude
				}
				if (rtnData && rtnData.length > 0) {
					this.markerData = rtnData
					this.dataCompanyList = rtnData
					this.companyListTotal = rtnData.length
				} else {
					this.markerData = []
					this.dataCompanyList = []
					this.companyListTotal = 0
				}
			})
		},
		getAllCompany4(status) {
			this.loading = true
			let data = {
				pageSize: '9999'
			}
			viewApi.getCompanyList(data, this.token).then(data => {
				this.loading = false
				let rtnData = []
				if (status == '0') {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].type.includes('破碎')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 1) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].type.includes('电熔炉')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 2) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].type.includes('熔铸炉')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 3) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].type.includes('轻烧窑')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 4) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].type.includes('重烧窑')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 5) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].type.includes('隧道窑')) {
							rtnData.push(data.rows[i])
						}
					}
				}
				rtnData = this.matchCompanyList(rtnData)
				this.markerDataall = rtnData
				this.mapCenter = {
					lat: rtnData[0].latitude,
					lng: rtnData[0].longitude
				}
				if (rtnData && rtnData.length > 0) {
					this.markerData = rtnData
					this.dataCompanyList = rtnData
					this.companyListTotal = rtnData.length
				} else {
					this.markerData = []
					this.dataCompanyList = []
					this.companyListTotal = 0
				}
			})
		},
		getAllCompany5(status) {
			this.loading = true
			let data = {
				pageSize: '9999'
			}
			viewApi.getCompanyList(data, this.token).then(data => {
				this.loading = false
				let rtnData = []
				if (status == '0') {
					for (let i = 0; i < data.rows.length; i++) {
						if (!data.rows[i].belong.includes('鲅鱼圈') && !data.rows[i].belong.includes('盖州') && !data.rows[i].belong
							.includes('营口')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 1) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('鲅鱼圈')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 2) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('盖州')) {
							rtnData.push(data.rows[i])
						}
					}
				} else if (status == 3) {
					for (let i = 0; i < data.rows.length; i++) {
						if (data.rows[i].belong.includes('营口')) {
							rtnData.push(data.rows[i])
						}
					}
				}
				rtnData = this.matchCompanyList(rtnData)
				this.markerDataall = rtnData
				this.mapCenter = {
					lat: rtnData[0].latitude,
					lng: rtnData[0].longitude
				}
				if (rtnData && rtnData.length > 0) {
					this.markerData = rtnData
					this.dataCompanyList = rtnData
					this.companyListTotal = rtnData.length
				} else {
					this.markerData = []
					this.dataCompanyList = []
					this.companyListTotal = 0
				}
			})
		},
		firstalldata() {
			this.companyListLoading = true
			this.pageLoading = true
			let queryStatus = 'ALL'
			this.getAllCompany(queryStatus)
		},
		//完成结束
		clickLineTabs() {
			this.lineTabIndex = this.msgValue
			this.currentDeviceCode = this.lineTabs.find(item => {
				return item.deviceName == this.msgValue
			}).deviceCode
			let companyInfo = this.markerDataall.find(item => {
				return item.companyCode == this.companyCodeForGraph
			})
			this.showCompanyDetail(companyInfo, this.currentDeviceCode)
		},
		// 日报表区间搜索
		onDayChange2() {
			if(!this.endData || !this.startData){
				this.$Message.warning('请选择查询日期')
				return
			}
			this.histogramLoading = true
			if (new Date(this.endData).getTime() - new Date(this.startData).getTime() > 7 * 24 * 60 * 60 * 1000) {
				this.$Message.warning('日数据不能查询超过7天的数据')
				this.histogramLoading = false
				return
			} else if (new Date(this.startData).getTime() > new Date(this.endData).getTime()) {
				this.$Message.warning('初始日期不能大于结束日期')
				this.histogramLoading = false
				return
			}
			this.getDailyReport(
				this.currentDeviceCode,
				util1.formatAmericaTime(this.startData),
				util1.formatAmericaTime(this.endData),
				this.dateRangIndex,
			)
		},

		onRealChange(){
			if(!this.endData || !this.startData){
				this.$Message.warning('请选择查询日期')
				return
			}
			this.histogramLoading = true
			if (new Date(this.endData).getTime() - new Date(this.startData).getTime() >  3600 * 1000) {
				this.$Message.warning('日数据不能查询超过1小时的数据')
				this.histogramLoading = false
				return
			} else if (new Date(this.startData).getTime() > new Date(this.endData).getTime()) {
				this.$Message.warning('初始日期不能大于结束日期')
				this.histogramLoading = false
				return
			}
			console.log(1234567,this.startData)
			this.getRealTimeData(
				this.currentDeviceCode,
				util1.formatAmericaTime(this.startData),
				util1.formatAmericaTime(this.endData),
				this.dateRangIndex,
			)
		},

		getYearMonthStr(value) {
			let selectYear = value[0]
			let selectMonth = value[1] < 10 ? '0' + value[1] : value[1]
			let paraDate0 = selectYear + '-' + selectMonth + '-01' + ' 00:00:00'
			let currentYearMonth = util1.formatDate.format(new Date(new Date().getTime()), 'yyyyMM')
			let selectYearMonth = selectYear + selectMonth
			let paraDate
			if (selectYearMonth > currentYearMonth) {
				this.$Message.warning('选择时间已超过当前时间')
				let startDate = util1.formatDate.format(new Date(new Date().getTime()), 'yyyy-MM') + '-01'
				let startTime = startDate + ' 00:00:00'
				let endDate = util1.formatDate.format(new Date(new Date().getTime()), 'yyyy-MM-dd')
				let endTime = endDate + ' 23:59:59'
				let basicObj = {
					paraDate: startTime,
					paraDate0: endTime
				}
				this.histogramLoading = false
				return basicObj
			} else if (selectYearMonth == currentYearMonth) {
				paraDate = util1.formatDate.format(new Date(new Date().getTime()), 'yyyy-MM-dd hh:mm:ss')
			} else {
				paraDate = util1.formatDate.format(new Date(new Date(selectYear, selectMonth, 0).getTime()), 'yyyy-MM-dd') + ' 23:59:59'
			}
			let obj = {
				paraDate: paraDate,
				paraDate0: paraDate0
			}
			return obj
		},
		onYearMonthChange(value, tabIndex) {
			if(value.length == 0){
               return
			}
			this.histogramLoading = true
			let paraDate0 = this.getYearMonthStr(value).paraDate0
			let paraDate = this.getYearMonthStr(value).paraDate
			this.getMonthReport(
				this.currentDeviceCode,
				paraDate0,
				paraDate,
				this.dateRangIndex,
			)
		},
		markerOnClick(e) {
			this.lctshow = false
			this.deviceListLoading = true
			this.modalCompanyDetail = true
			this.selectedCompanyRow = e.companyCode
			this.showCompanyDetail(e)
		},
		getTptdata(topology) {
			var nodes = []
			var edges = []
			if (topology) {
				for (var i = 0; i < topology.nodes.length; i++) {
					if (topology.nodes[i].text.includes('车间') || topology.nodes[i].text.includes('厂') || topology.nodes[i].text
						.includes('单元') || topology.nodes[i].text.includes('公司') || topology.nodes[i].text.includes('大石桥') ||
						topology.nodes[i].text.includes('营口') || topology.nodes[i].text.includes('塔')) {
						if (topology.nodes[i].text.includes('(') || topology.nodes[i].text.includes('（')) {
							nodes.push({
								id: topology.nodes[i].index,
								label: topology.nodes[i].text,
								class: 'type-out'
							})
						} else {
							nodes.push({
								id: topology.nodes[i].index,
								label: topology.nodes[i].text,
								class: 'type-on'
							})
						}
					} else {
						nodes.push({
							id: topology.nodes[i].index,
							label: topology.nodes[i].text,
							class: 'type-out'
						})
					}
				}
				for (var j = 0; j < topology.links.length; j++) {
					edges.push([
						parseInt(topology.links[j].from),
						parseInt(topology.links[j].to)
					])
				}
				var data = {
					nodes: nodes,
					edges: edges,
					errLine: [],
					errNodes: []
				}
			}
			return data
		},
		matchCompanyDetail(data, companyInfo, deviceinfos, topoinfos, tabCode) {
			if (!data.deviceInfo) {
				this.$Message.warning('当前企业无数据')
				return
			} else {
				let telephone = companyInfo.telephone
				let length = telephone.length
				telephone = telephone.slice(0, 3) + '****' + telephone.slice(length - 4, length)
				companyInfo.telephone = telephone
				let alarminfos = data.alarmContent
				let userId = localStorage.getItem('userId')
				let aa = []
				if (!userId.match('dsq001')) {
					for (let i = 0; i < data.deviceInfo.length; i++) {
						if (data.deviceInfo[i].deviceName.match('备用箱')) {
							continue
						}
						//有东南西北车间厂
						if (data.deviceInfo[i].deviceName.match('东') || data.deviceInfo[i].deviceName.match('南') ||
							data.deviceInfo[i].deviceName.match('西') || data.deviceInfo[i].deviceName.match('北') ||
							data.deviceInfo[i].deviceName.match('车间') || data.deviceInfo[i].deviceName.match('厂') ||
							data.deviceInfo[i].deviceName.match('破碎') || data.deviceInfo[i].deviceName.match('雷蒙')) {
							//有东南西北车间厂有A-Z
							if (data.deviceInfo[i].deviceName.toLowerCase().match(/[a-z]+/g)) {
								//有东南西北有A-Z有数字（去除数字)
								if (data.deviceInfo[i].deviceName.match(/^[1-9][0-9]*$/)) {
									let obj = {} //原先的 data.deviceInfo[i]
									obj = data.deviceInfo[i]
									let param = {} //准备push的 data.deviceInfo[i]
									param.deviceCode = obj.deviceCode
									param.deviceName = obj.deviceName.replace(/^[1-9][0-9]*$/, '')
									param.monitorPointList = obj.monitorPointList
									param.netState = obj.netState
									aa.push(param)
								} else {
									//有东南西北有A-Z无数字（去除A-Z）
									let obj = {} //原先的 data.pcb[0].data[i]
									obj = data.deviceInfo[i]
									let param = {} //准备push的 data.pcb[0].data[i]
									param.deviceCode = obj.deviceCode
									param.deviceName = obj.deviceName.replace(/[A-Z]+/g, '')
									param.monitorPointList = obj.monitorPointList
									param.netState = obj.netState
									aa.push(param)
								}
							} else {
								//有东南西北车间厂没A-Z有数字（去除数字）
								if (data.deviceInfo[i].deviceName.match(/[1-9]/g)) {
									let obj = {} //原先的 data.pcb[0].data[i]
									obj = data.deviceInfo[i]
									let param = {} //准备push的 data.pcb[0].data[i]
									param.deviceCode = obj.deviceCode
									param.deviceName = obj.deviceName.replace(/[1-9]/g, '')
									param.monitorPointList = obj.monitorPointList
									param.netState = obj.netState
									aa.push(param)
								} else {
									//有东南西北车间厂没A-Z没数字（什么都不动）
									aa.push(data.deviceInfo[i])
								}
							}
						} else {
							//没东南西北车间厂有A-Z
							if (data.deviceInfo[i].deviceName.toLowerCase().match(/[a-z]+/g)) {
								//没东南西北车间厂有A-Z有数字（去除数字）
								if (data.deviceInfo[i].deviceName.match(/[1-9]/g)) {
									let obj = {} //原先的 data.pcb[0].data[i]
									obj = data.deviceInfo[i]
									let param = {} //准备push的 data.pcb[0].data[i]
									param.deviceCode = obj.deviceCode
									if (data.deviceInfo[i].deviceName.match(/[0-9]+[A-Z]+/g)) {
										//param.deviceName = obj.deviceName.replace(/[A-Z]+/g, '')
										param.deviceName = obj.deviceName
									} else {
										param.deviceName = obj.deviceName.replace(/[1-9]/g, '')
									}
									param.monitorPointList = obj.monitorPointList
									param.netState = obj.netState
									aa.push(param)
								} else {
									//没东南西北有A-Z没数字（去除A-Z）
									let obj = {} //原先的 data.pcb[0].data[i]
									obj = data.deviceInfo[i]
									let param = {} //准备push的 data.pcb[0].data[i]
									param.deviceCode = obj.deviceCode
									//param.deviceName = obj.deviceName.replace(/[A-Z]+/g, '')
									param.deviceName = obj.deviceName
									param.monitorPointList = obj.monitorPointList
									param.netState = obj.netState
									aa.push(param)
								}
							} else {
								//没东南西北车间厂没A-Z(不管有没有数字，不动)
								aa.push(data.deviceInfo[i])
							}
						}
					}
					//deviceCode变数组
					for (let i = 0; i < aa.length; i++) {
						let deviceCode = []
						deviceCode.push(aa[i].deviceCode)
						aa[i].deviceCode = deviceCode
					}
					//deviceCode变数组结束
					aa = aa.sort((a, b) => {
						if (a.deviceName < b.deviceName) {
							return -1
						} else {
							return 1
						}
					})
					for (let i = aa.length - 1; i > 0; i--) {
						if (aa[i].deviceName == aa[i - 1].deviceName) {
							aa[i - 1].deviceCode.push(...aa[i].deviceCode)
							aa[i - 1].monitorPointList.push(...aa[i].monitorPointList)
							if (aa[i - 1].netState > aa[i].netState) {
								aa[i - 1].netState = aa[i].netState
							}
							aa.splice(i, 1)
						}
					}
				} else {
					for (let i = 0; i < data.deviceInfo.length; i++) {
						let deviceCode = []
						deviceCode.push(data.deviceInfo[i].deviceCode)
						data.deviceInfo[i].deviceCode = deviceCode
					}
					aa = data.deviceInfo
				}
				this.deviceListLoading = true
				this.modalCompanyDetail = true
				this.pmname = '设备电流(A)'
				this.exlname = data.companyName
				this.companyCodeForGraph = companyInfo.companyCode
				this.monitorData = {
					companyCode: companyInfo.companyCode,
					companyName: data.companyName
				}
				// 变更地图定位中心
				this.mapCenter = {
					lat: data.latitude,
					lng: data.longitude
				}
				// 拓扑图按钮
				this.imgBtnShow = true
				this.dataLineDeceive = []
				this.dateRangIndex = 0
				this.resetHistogramData()
				if (this.yearMonthList.length === 0) {
					this.getCurrentYearList()
				}
				//所有生产线
				this.lineTabs = aa.sort((a, b) => {
					if (a.deviceName < b.deviceName) {
						return -1
					} else {
						return 1
					}
				})
				this.lineTabs.map(item => {
					let obj = {}
					obj.value = 1
					obj.comment = '正常'
					obj.log = '正常'
					item.status = obj
				})
				if (alarminfos) {
					for (let i = 0; i < this.lineTabs.length; i++) {
						for (let j = 0; j < this.lineTabs[i].monitorPointList.length; j++) {
							if (alarminfos.includes(this.lineTabs[i].monitorPointList[j].monitorPointName)) {
								this.lineTabs[i].status.value = 10
								this.lineTabs[i].status.comment = '异常'
								this.lineTabs[i].status.log = alarminfos
							}
						}
					}
				}
				this.companyStatus = companyInfo.status.log
				this.selectedCompanyRow = companyInfo.companyCode
				this.companyDetailData.companyName = companyInfo.companyName
				this.companyDetailData.companyAddress = companyInfo.address
				this.companyDetailData.companyManager = companyInfo.manager
				this.companyDetailData.companyManagerPhone = companyInfo.telephone
				this.companyDetailData.belong = companyInfo.belong
				this.companyDetailData.level = companyInfo.level
				this.companyDetailData.type = companyInfo.type
				// 默认(没tabCode)显示第一条生产线
				let lineDeceive
				if (tabCode) {
					lineDeceive = this.lineTabs.find(item => {
						return JSON.stringify(item.deviceCode) == JSON.stringify(tabCode)
					})
				} else {
					lineDeceive = this.lineTabs[0]
				}
				this.lineTabIndex = lineDeceive.deviceName
				this.msgValue = lineDeceive.deviceName
				this.unitStatus = lineDeceive.status.log
				this.lineDetailData.lineUpdateTime = lineDeceive.monitorPointList[0].collectTime
				this.lineDetailData.lineStatus = lineDeceive.status.value == 1 ? '正常' : '异常'
				this.deviceListLoading = false
				let deviceCode = lineDeceive.deviceCode
				this.currentDeviceCode = deviceCode
				let obj = {}
				obj.deviceCode = this.currentDeviceCode
				let allDeviceCode = []
				for (let i = 0; i < aa.length; i++) {
					allDeviceCode.push(...aa[i].deviceCode)
				}
				let objAll = {}
				objAll.deviceCode = allDeviceCode
				this.getCompanyCurrentMinuteInfo(obj)
				let transforDevice = util1.getStorage('deviceInfos')
				this.getCompanyCurrentMinuteInfoForTopo(objAll, transforDevice, topoinfos, alarminfos)
			}
		},
		matchTopology(deviceInfo, topologyInfo, dataInfos, alarmInfos) {
			//获取所有node开始
			let lineTabs = this.lineTabs
			let topology = {}
			topology.nodes = []
			topology.links = []
			let baseNode = {}
			baseNode.text = topologyInfo[0].companyName
			baseNode.index = 0
			baseNode.deviceCode = ''
			baseNode.equipFlg = false
			let allNodes = []
			allNodes.push(baseNode)
			let deviceNodes = []
			for (let i = 0; i < lineTabs.length; i++) {
				let deviceObj = {}
				deviceObj.text = lineTabs[i].deviceName
				deviceObj.deviceCode = lineTabs[i].deviceCode
				deviceObj.index = i + 1
				deviceObj.equipFlg = false
				deviceNodes.push(deviceObj)
			}
			allNodes.push(...deviceNodes)
			this.index = 100
			for (let i = 0; i < topologyInfo.length; i++) {
				for (let j = 0; j < topologyInfo[i].monitorPointIdList.length; j++) {
					let otherObj = {}
					for (let x = 0; x < deviceInfo.length; x++) {
						for (let y = 0; y < deviceInfo[x].monitorPointList.length; y++) {
							if (deviceInfo[x].monitorPointList[y].id == topologyInfo[i].monitorPointIdList[j]) {
								otherObj.text = deviceInfo[x].monitorPointList[y].monitorPointName
								otherObj.index = this.index
								this.index++
								otherObj.deviceCode = deviceInfo[x].deviceCode
								otherObj.equipFlg = true
								otherObj.productFlg = true
								otherObj.relationId = topologyInfo[i].id
								allNodes.push(otherObj)
							}
						}
					}
				}
				for (let j = 0; j < topologyInfo[i].linkagePointIdList.length; j++) {
					for (let k = 0; k < topologyInfo[i].linkagePointIdList[j].length; k++) {
						let otherObj = {}
						for (let x = 0; x < deviceInfo.length; x++) {
							for (let y = 0; y < deviceInfo[x].monitorPointList.length; y++) {
								if (deviceInfo[x].monitorPointList[y].id == topologyInfo[i].linkagePointIdList[j][k]) {
									otherObj.text = deviceInfo[x].monitorPointList[y].monitorPointName
									otherObj.index = this.index
									this.index++
									otherObj.deviceCode = deviceInfo[x].deviceCode
									otherObj.equipFlg = true
									otherObj.productFlg = false
									otherObj.relationId = topologyInfo[i].id
									allNodes.push(otherObj)
								}
							}
						}
					}
				}
			}
			//开始向node中加状态
			allNodes.map(item => {
				if (item.equipFlg) {
					dataInfos.map(item1 => {
						if (item1.monitorPointName == item.text) {
							if (item1.factorFlag != 'N') {
								item.statu = '数据获取异常'
							} else {
								if (item1.factorValue > 1) {
									if (!!alarmInfos) {
										if (alarmInfos.includes(item.text) && item.productFlg) {
											item.statu = '生产异常'
										} else if (alarmInfos.includes(item.text) && !item.productFlg) {
											item.statu = '非生产异常'
										} else {
											item.statu = '开机正常'
										}
									} else {
										item.statu = '开机正常'
									}
								} else {
									if (!!alarmInfos) {
										if (alarmInfos.includes(item.text) && item.productFlg) {
											item.statu = '生产异常'
										} else if (alarmInfos.includes(item.text) && !item.productFlg) {
											item.statu = '非生产异常'
										} else {
											item.statu = '未开机正常'
										}
									} else {
										item.statu = '未开机正常'
									}
								}
							}
						}
					})
				}
			})
			//向node中加状态结束
			//获取所有node结束
			//获取所有link开始
			let allLinks = []
			for (let i = 0; i < allNodes.length; i++) {
				//如果不是设备
				if (!allNodes[i].equipFlg) {
					if (allNodes[i].deviceCode) {
						let obj = {}
						obj.from = 0
						obj.to = allNodes[i].index
						obj.statu = '正常'
						allLinks.push(obj)
					}
					//如果是设备
				} else {
					//如果是生产设备
					if (allNodes[i].productFlg) {
						let obj = {}
						allNodes.map(item => {
							if (!item.equipFlg && item.deviceCode) {
								if (item.deviceCode.includes(allNodes[i].deviceCode)) {
									obj.from = item.index
								}
							}
						})
						obj.to = allNodes[i].index
						obj.statu = '正常'
						allLinks.push(obj)
						//如果不是生产设备
					} else {
						//如果是除尘设备
						if (allNodes[i].text.includes('除尘')) {
							for (let x = 0; x < allNodes.length; x++) {
								if (allNodes[x].relationId == allNodes[i].relationId && allNodes[x].productFlg) {
									let obj = {}
									obj.from = allNodes[x].index
									obj.to = allNodes[i].index
									if (allNodes[i].statu) {
										if (allNodes[i].statu.includes('异常')) {
											obj.statu = '异常'
										} else {
											obj.statu = '正常'
										}
									} else {
										obj.statu = '异常'
									}
									allLinks.push(obj)
								}
							}
							//如果是脱硫水泵设备
						} else if (allNodes[i].text.includes('脱硫')) {
							for (let x = 0; x < allNodes.length; x++) {
								if (allNodes[x].relationId == allNodes[i].relationId && allNodes[x].text.includes('除尘') && !allNodes[x].productFlg && allNodes[x].equipFlg) {
									let obj = {}
									obj.from = allNodes[x].index
									obj.to = allNodes[i].index
									if (allNodes[i].statu) {
										if (allNodes[i].statu.includes('异常')) {
											obj.statu = '异常'
										} else {
											obj.statu = '正常'
										}
									} else {
										obj.statu = '异常'
									}
									allLinks.push(obj)
								}
							}
							//如果是脱硝水泵设备
						} else {
							for (let x = 0; x < allNodes.length; x++) {
								if (allNodes[x].relationId == allNodes[i].relationId && allNodes[x].text.includes('脱硫') && !allNodes[x].productFlg && allNodes[x].equipFlg) {
									let obj = {}
									obj.from = allNodes[x].index
									obj.to = allNodes[i].index
									if (allNodes[i].statu) {
										if (allNodes[i].statu.includes('异常')) {
											obj.statu = '异常'
										} else {
											obj.statu = '正常'
										}
									} else {
										obj.statu = '异常'
									}
									allLinks.push(obj)
								}
							}
						}
					}
				}
			}
			//获取所有link结束
			let datass = {
				nodes: allNodes,
				edges: allLinks
			}
			window.companyGraphs[this.companyCodeForGraph] = datass
		},
		showCompanyDetail(companyData, tabCode) {
			this.imgBoxShow = false
			let requestData = {}
			requestData.companyId = companyData.companyCode
			viewApi.getCompanyDetail(requestData, this.token).then(res => {
				let data = res.data
				data.companyCode = companyData.companyCode
				let companyInfo = this.markerDataall.find(item => {
					return item.companyCode == companyData.companyCode
				})
				util1.setStorage('deviceInfos', data.deviceInfo)
				this.matchCompanyDetail(data, companyInfo, data.deviceInfo, data.topologyInfo, tabCode)
			})
		},
		getCompanyCurrentMinuteInfoForTopo(obj, deviceinfos, topoinfos, alarminfos) {
			viewApi.getCompanyCurrentMinuteInfo(obj, this.token).then(res => {
				let datainfos = res.data.rtdList
				this.matchTopology(deviceinfos, topoinfos, datainfos, alarminfos)
			})
		},
		getCompanyCurrentMinuteInfo(obj) {
			viewApi.getCompanyCurrentMinuteInfo(obj, this.token).then(res => {
				this.dataLineDeceive = res.data.rtdList
				if(!this.companyStatus.includes('正常')){
					this.dataLineDeceive.forEach(item => item.factorValue = 0)
				}
			})
		},
		clickLineDetailInfoTabs(tabIndex) {
			this.echartsNumber = 1
			this.histogramLoading = true
			this.resetHistogramData()
			// 最新数据
			if (tabIndex == 0) {
				let companyInfo = this.markerDataall.find(item => {
					return item.companyCode == this.companyCodeForGraph
				})
				this.showCompanyDetail(companyInfo)
				return
			}
			// 一月
			if (tabIndex == 3) {
				let currentDate = new Date()
				this.yearMonthValue = [
					currentDate.getFullYear(),
					currentDate.getMonth() + 1
				]
			}
			this.dateRangIndex = tabIndex
			this.getMonitorData(tabIndex)
		},

		//原实时数据，实际是分钟数据
		getCurrentReport(deviceCode, startDate, endDate, tabIndex) {
			let data = {
				deviceCode: deviceCode,
				startTime: startDate,
				endTime: endDate
			}
			viewApi.getCompanyTenMinuteInfo(data, this.token).then(res => {
				let dataInfo = res.data.rtdMinuteHourDayBeans
				let basicInfo = res.data.rtdMonitorFactorRespVOS
				dataInfo.map(item => {
					item.data = item.minuteHourDayValueBeans
					item.data.map(ite => {
						if (!ite.monitorPointId) {
							item.data.splice(ite, 1)
						} else {
							ite.name = basicInfo.find(it => {
								return it.monitorPointId == ite.monitorPointId
							}).factorName
							ite.value = ite.factorAvg
						}
					})
				})
				this.lineHourEnegyData = this.initEnegyData(dataInfo, tabIndex, this.companyDetailData.companyName)
			})
			data.dataType = 2
			viewApi.getCompanyTimeMinuteInfo(data, this.token).then(res => {
				this.timeData=res;
			})
		},
		//获取实时数据
		getRealTimeData(deviceCode,startDate,endDate,tabIndex){
			let data = {
				deviceCode: deviceCode,
				startTime: startDate,
				endTime: endDate
			}
			viewApi.getCompanyRealHistoryInfo(data,this.token).then(res=>{
				let dataInfo = res.data.rtdHistoryRespVOs
				let basicInfo = res.data.rtdMonitorFactorRespVOS
				dataInfo.map(item=>{
					item.data = item.rtdMonitorFactorBeans
					item.data.map(ite=>{
						if(!ite.monitorPointId){
							item.data.splice(ite,1)
						}else{
							ite.name = basicInfo.find(it=>{
								return it.monitorPointId == ite.monitorPointId
							}).factorName
							ite.value = ite.factorValue
						}
					})
				})
				this.lineRealTimeData = this.initEnegyData(dataInfo, tabIndex, this.companyDetailData.companyName)
			})
			data.dataType = 1
			viewApi.getCompanyTimeMinuteInfo(data, this.token).then(res => {
				this.realTimeData=res;
			})
		},

		getDailyReport(deviceCode, startDate, endDate, tabIndex) {
			let data = {
				deviceCode: deviceCode,
				startTime: startDate,
				endTime: endDate
			}
			viewApi.getCompanyHourInfo(data, this.token).then(res => {
				let dataInfo = res.data.rtdMinuteHourDayBeans
				let basicInfo = res.data.rtdMonitorFactorRespVOS
				dataInfo.map(item => {
					item.data = item.minuteHourDayValueBeans
					item.data.map(ite => {
						if (!ite.monitorPointId) {
							item.data.splice(ite, 1)
						} else {
							ite.name = basicInfo.find(it => {
								return it.monitorPointId == ite.monitorPointId
							}).factorName
							ite.value = ite.factorAvg
						}
					})
				})
				this.lineDayEnegyData = this.initEnegyData(dataInfo, tabIndex, this.companyDetailData.companyName)
			})
			data.dataType=3
			viewApi.getCompanyTimeMinuteInfo(data, this.token).then(res => {
				this.timeDayData=res;
			})
		},
		getMonthReport(deviceCode, startDate, endDate, tabIndex) {
			let data = {
				deviceCode: deviceCode,
				startTime: startDate,
				endTime: endDate
			}
			viewApi.getCompanyDayInfo(data, this.token).then(res => {
				let dataInfo = res.data.rtdMinuteHourDayBeans
				let basicInfo = res.data.rtdMonitorFactorRespVOS
				dataInfo.map(item => {
					item.data = item.minuteHourDayValueBeans
					item.data.map(ite => {
						if (!ite.monitorPointId) {
							item.data.splice(ite, 1)
						} else {
							ite.name = basicInfo.find(it => {
								return it.monitorPointId == ite.monitorPointId
							}).factorName
							ite.value = ite.factorAvg
						}
					})
				})
				this.lineMonthEnegyData = this.initEnegyData(dataInfo, tabIndex, this.companyDetailData.companyName)
			})
			data.dataType=4
			viewApi.getCompanyTimeMinuteInfo(data, this.token).then(res => {
				this.timeMonthData=res;
			})
		},
		getNextMonth(date) {
			let arr = date.split('-');
			let year = arr[0]; //获取当前日期的年份
			let month = arr[1]; //获取当前日期的月份
			let day = arr[2]; //获取当前日期的日
			let days = new Date(year, month, 0);
			days = days.getDate(); //获取当前日期中的月的天数
			let year2 = year;
			let month2 = parseInt(month) + 1;
			if (month2 == 13) {
				year2 = parseInt(year2) + 1;
				month2 = 1;
			}
			let day2 = day;
			let days2 = new Date(year2, month2, 0);
			days2 = days2.getDate();
			if (day2 > days2) {
				day2 = days2;
			}
			if (month2 < 10) {
				month2 = '0' + month2;
			}
			let t2 = year2 + '-' + month2 + '-' + day2;
			return t2;
		},
		getMonitorData(tabIndex) {
			this.tabIndex = tabIndex
			if (tabIndex == 1) {
				let startDate = util1.formatDate.format(new Date(new Date().getTime() - 60*60*1000),'yyyy-MM-dd hh:mm:ss')
				let endDate = util1.formatDate.format(new Date(new Date().getTime()),'yyyy-MM-dd hh:mm:ss')
				this.startData = startDate
				this.endData = endDate
				this.getRealTimeData(this.currentDeviceCode,startDate,endDate,tabIndex)
			}
			else if (tabIndex == 2) {
				let startDate = util1.formatDate.format(new Date(new Date().getTime() - 60*60*1000),'yyyy-MM-dd hh:mm:ss')
				let endDate = util1.formatDate.format(new Date(new Date().getTime()),'yyyy-MM-dd hh:mm:ss')
				this.getCurrentReport(this.currentDeviceCode,startDate,endDate,tabIndex)
			} else if (tabIndex == 3) {
				let startDate = util1.formatDate.format(new Date(new Date().getTime() - 24*60*60*1000),'yyyy-MM-dd hh:mm:ss')
				let endDate = util1.formatDate.format(new Date(new Date().getTime()),'yyyy-MM-dd hh:mm:ss')
				this.startData = startDate
				this.endData = endDate
				this.getDailyReport(this.currentDeviceCode,startDate,endDate,tabIndex)
			}else if(tabIndex == 4) {
				let startDate = util1.formatDate.format(new Date(new Date().getTime()), 'yyyy-MM') + '-01'
				let startTime = startDate + ' 00:00:00'
				let endDate = util1.formatDate.format(new Date(new Date().getTime()),'yyyy-MM-dd')
				let endTime = endDate + ' 23:59:59'
				this.getMonthReport(this.currentDeviceCode,startTime,endTime,tabIndex)
			}
		},
		// 实时数据，日报表，月报表曲线图渲染
		initEnegyData(rtnData, dataType) {
			let legendData = {
				data: []
			}
			let xAxisData = []
			let seriesData = []
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
				let categoryData2 = [] // 完整的时间
				let statusComents = []
				for (let subDeceive of rtnData) {
					let timeStr = subDeceive.collectTime.split(' ')[0]
					categoryData.push(timeStr)
					let statusComent = this.lineDetailData.lineStatus
					let timeStrall = subDeceive.collectTime
					categoryData2.push(timeStrall)
					statusComents.push(statusComent)
				}
				if (dataType == 3 || dataType == 2 || dataType == 1) {
					xAxisDataCategoryData.data = categoryData2
				} else {
					xAxisDataCategoryData.data = categoryData
				}
				xAxisDataCategoryData.status = statusComents

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
						kk.data = rtnData.map(t => t.data.filter(a => a.name === kk.name).map(a => a.value)[0])
						kk.code = rtnData.map(t => t.data.filter(a => a.name === kk.name).map(a => a.code)[0])
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
				yMax: yMax,
			}
			this.histogramLoading = false
			return lineEnegyData
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
			this.timeData={}
			this.lineHourFlowData = {}
			this.lineDayEnegyData = {}
			this.timeDayData={}
			this.lineDayFlowData = {}
			this.lineMonthEnegyData = {}
			this.timeMonthData={}
			this.lineMonthFlowData = {}
		},
		beforeModalCancel() {
			this.monitorData = null
			this.showMonitor = false
		},
		changeEcharts(index) {
			this.echartsNumber = index;
		}
	}
}
</script>
<style>
.tdt-control-copyright {
	display: none;
}

.elec-button {
	position: fixed;
	left: calc(50% - 150px);
	top: 10px;
	z-index: 998;
}

.dg-alter-button {
	position: fixed;
	left: calc(50% + 150px);
	top: 10px;
	z-index: 998;
}

.print-button {
	position: fixed;
	left: calc(50% + 20px);
	top: 10px;
	z-index: 998;
}

.echart-button {
	position: fixed;
	left: calc(50% + 120px);
	top: 10px;
	z-index: 998;
}

.date-button {
	position: fixed;
	left: calc(50% + 220px);
	top: 10px;
	z-index: 998;
}

.no-product-button {
	position: fixed;
	left: calc(50% + 320px);
	top: 10px;
	z-index: 998;
}

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

/* loading加权 */
.el-loading-mask {
	z-index: 99999999 !important;
	width: 80px;
	height: 80px;
	top: 50% !important;
	left: 50% !important;
	transform: translate(-50%, -50%) !important;
}

.lct {
	width: 100%;
	text-align: center;
	/*height: 600px;*/
	/*background-color: red;*/
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
	border-collapse:collapse;
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
	background: #2d8cf0;
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

/*pm的按钮颜色*/
.ivu-btn-orange {
	color: #fff;
	background-color: #f67f23;
	border-color: #f67f23;
}

.ivu-btn-orange:hover {
	color: #fff;
	background-color: #fa832e;
	border-color: #fa832e;
}

.ivu-btn-purple {
	color: #fff;
	background-color: #80287e;
	border-color: #80287e;
}

.ivu-btn-purple:hover {
	color: #fff;
	background-color: #b73eb4;
	border-color: #b73eb4;
}

.ivu-btn-brown {
	color: #fff;
	background-color: #7b1316;
	border-color: #7b1316;
}

.ivu-btn-brown:hover {
	color: #fff;
	background-color: #861517;
	border-color: #861517;
}

.monitor-box {
	width: 100%;
	height: 400px;
	border: 1px solid black;
}</style>