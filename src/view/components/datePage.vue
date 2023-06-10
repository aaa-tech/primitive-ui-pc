<!--
 * @Author: your name
 * @Date: 2020-03-12 16:03:56
 * @LastEditTime: 2020-11-19 10:46:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-dsq\src\view\components\echartPage.vue
 -->
<template>
	<div id="date-page" class="all-screen" v-loading="loading || loading1" element-loading-text="程序执行中"
		element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="close-it" @click="closePage">×</div>
		<div class="row">
			<div class="col-6">
				<div class="echart-page-chart" id="date-page-month"></div>
			</div>
			<div class="col-6 scroll-x">
				<div class="row" style="height:40px;margin-top:10px">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期" @change="getValue1"></el-date-picker>
					<el-select v-model="searchInput" @change="searchCompany" filterable placeholder="企业筛选" style="padding-right:10px">
						<el-option
							v-for="item in restaurants"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-button type="primary" @click="searchReport">查询</el-button>
				</div>
				<div class="row date-table">
					<el-table :data="tableData" border style="width:100%" height="calc(100vh - 100px)">
						<el-table-column fixed="left" prop="companyName" label="企业名称" width="260"></el-table-column>
						<el-table-column label="0" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour0,color:scope.row.companyStatus.hour0}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="1" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour1,color:scope.row.companyStatus.hour1}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="2" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour2,color:scope.row.companyStatus.hour2}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="3" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour3,color:scope.row.companyStatus.hour3}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="4" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour4,color:scope.row.companyStatus.hour4}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="5" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour5,color:scope.row.companyStatus.hour5}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="6" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour6,color:scope.row.companyStatus.hour6}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="7" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour7,color:scope.row.companyStatus.hour7}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="8" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour8,color:scope.row.companyStatus.hour8}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="9" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour9,color:scope.row.companyStatus.hour9}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="10" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour10,color:scope.row.companyStatus.hour10}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="11" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour11,color:scope.row.companyStatus.hour11}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="12" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour12,color:scope.row.companyStatus.hour12}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="13" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour13,color:scope.row.companyStatus.hour13}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="14" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour14,color:scope.row.companyStatus.hour14}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="15" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour15,color:scope.row.companyStatus.hour15}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="16" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour16,color:scope.row.companyStatus.hour16}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="17" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour17,color:scope.row.companyStatus.hour17}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="18" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour18,color:scope.row.companyStatus.hour18}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="19" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour19,color:scope.row.companyStatus.hour19}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="20" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour20,color:scope.row.companyStatus.hour20}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="21" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour21,color:scope.row.companyStatus.hour21}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="22" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour22,color:scope.row.companyStatus.hour22}">{{emptyStr}}</div>
							</template>
						</el-table-column>
						<el-table-column label="23" width="25">
							<template slot-scope="scope">
								<div :style="{backgroundColor:scope.row.companyStatus.hour23,color:scope.row.companyStatus.hour23}">{{emptyStr}}</div>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from '@/libs/api.request'
	import util from '@/common/util.js'
	import echarts from 'echarts'
	export default {
		name: 'datePage',
		data() {
			return {
				productingCompanys:[],
				emptyStr:' ',
				value1:'',
				startTime:util.formatDate.format(new Date(),'yyyy-MM-dd'),
				endTime:util.formatDate.format(new Date(new Date().getTime() + 24*60*60*1000),'yyyy-MM-dd'),
				searchInput:'',
				restaurants:[],
				loading: true,
				loading1: false,
				monthOption: [],
				chart1: '',
				companyCode:'',
				companyName: '',
				dailyCompanyCode:'',
				month: util.formatDate.format(new Date(),'yyyy-MM'),
				dateList: [],
				tableAllData:[],
				tableData:[],
			}
		},
		props: ['allCompany'],
		mounted() {
			let obj0 = {}
			obj0.value = ''
			obj0.label = '全部'
			this.restaurants.push(obj0)
			this.allCompany.map(item=>{
				let obj = {}
				obj.value = item.companyCode
				obj.label = item.companyName
				this.restaurants.push(obj)
			})
			this.chart1 = echarts.init(document.getElementById('date-page-month'))
			this.companyCode = this.allCompany[0].companyCode
			this.companyName = this.allCompany[0].companyName
			let startDate = this.month + '-01'
			let endDate1 = this.getNextMonth(startDate)
			this.getMonthReport(this.companyCode,startDate,endDate1)
			this.getDailyReport('',this.startTime,this.endTime)
		},
		methods: {
			//获取查询日期startTime，接口截止时间endTime，查询月份month
			getValue1(){
				if(!!this.value1){
					this.startTime = util.formatDate.format(this.value1,'yyyy-MM-dd')
					this.endTime = util.formatDate.format(new Date(new Date(this.value1).getTime() + 24*60*60*1000),'yyyy-MM-dd')
				}else{
					this.startTime = util.formatDate.format(new Date(),'yyyy-MM-dd')
					this.endTime = util.formatDate.format(new Date(new Date().getTime() + 24*60*60*1000),'yyyy-MM-dd')
				}
				this.month = this.startTime.split('-')[0] + '-' + this.startTime.split('-')[1]
			},
			searchCompany() {
				if(this.searchInput != ''){
					this.companyCode = this.searchInput
					this.dailyCompanyCode = this.searchInput
					this.companyName = this.allCompany.find(item=>{
						return item.companyCode == this.companyCode
					}).companyName
				}else{
					this.dailyCompanyCode = this.searchInput
				}
			},
			searchReport(){
				let startDate = this.month + '-01'
				let endDate1 = this.getNextMonth(startDate)
				this.getMonthReport(this.companyCode,startDate,endDate1)
				this.getDailyReport('',this.startTime,this.endTime)
			},
			getMonthReport(companyCode,startDate,endDate1){
				this.loading = true
				let data = {companyCode:companyCode,startTime:startDate,endTime:endDate1}
				axios.requestNormal({
					url: 'http://114.116.38.171:8013/test/findMonthInfoByCompanyCode',
					data,
					method: 'post'
				}).then(res=>{
					this.loading = false
					if (res.length !== 0) {
						this.initHasDataChart(res,startDate,endDate1)
					} else {
						this.initNoDataChart(startDate,endDate1)
					}
				}).catch(err=>{
					console.log(err)
					this.loading = false
				})
			},
			getDailyReport(companyCode,startDate,endDate1){
				this.loading1 = true
				let data = {companyCode:companyCode,startTime:startDate,endTime:endDate1}
				axios.requestNormal({
					url: 'http://114.116.38.171:8013/test/findStatusByCompanyCode',
					data,
					method: 'post'
				}).then(res=>{
					this.loading1 = false
					this.tableData = []
					//按companyCode排序
					let array = res.sort((a,b)=>{
						if(a.companyCode < b.companyCode){
							return -1
						}else if(a.companyCode > b.companyCode){
							return 1
						}else{
							return 0
						}
					})
					// 去掉一小时内companyCode重复的数据
					for(let i=array.length - 2;i>=0;i--){
						let iTime = array[i].receiveTime.split(' ')[1].split(':')[0]
						let iTime1 = array[i+1].receiveTime.split(' ')[1].split(':')[0]
						if(array[i].companyCode == array[i+1].companyCode && iTime == iTime1){
							if(array[i].status >= array[i+1].status){
								array.splice(i+1,1)
							}else{
								array.splice(i,1)
							}
						}
					}
					// 创建tableArray,先向内push一组数据
					let tableArray = []
					let obj = {}
					obj.companyName = array[0].companyName
					obj.companyCode = array[0].companyCode
					obj.companyStatus = {
						hour0:'#fff',hour1:'#fff',hour2:'#fff',hour3:'#fff',hour4:'#fff',hour5:'#fff',
						hour6:'#fff',hour7:'#fff',hour8:'#fff',hour9:'#fff',hour10:'#fff',hour11:'#fff',
						hour12:'#fff',hour13:'#fff',hour14:'#fff',hour15:'#fff',hour16:'#fff',hour17:'#fff',
						hour18:'#fff',hour19:'#fff',hour20:'#fff',hour21:'#fff',hour22:'#fff',hour23:'#fff',
					}
					tableArray.push(obj)
					// 重组数组，一个企业一条数据
					for(let i=0;i<array.length;i++){
						if(!tableArray.find(item=>{return item.companyCode == array[i].companyCode})){
							obj = {}
							obj.companyName = array[i].companyName
							obj.companyCode = array[i].companyCode
							obj.companyStatus = {
								hour0:'#fff',hour1:'#fff',hour2:'#fff',hour3:'#fff',hour4:'#fff',hour5:'#fff',
								hour6:'#fff',hour7:'#fff',hour8:'#fff',hour9:'#fff',hour10:'#fff',hour11:'#fff',
								hour12:'#fff',hour13:'#fff',hour14:'#fff',hour15:'#fff',hour16:'#fff',hour17:'#fff',
								hour18:'#fff',hour19:'#fff',hour20:'#fff',hour21:'#fff',hour22:'#fff',hour23:'#fff',
							}
							tableArray.push(obj)
						}
					}
					// 修改tableArray中的companyStatus中的数据
					for(let i=0;i<array.length;i++){
						tableArray.map(item=>{
							if(item.companyCode == array[i].companyCode){
								let hourNumber = Number(array[i].receiveTime.split(' ')[1].split(':')[0])
								let statusColor
								if(array[i].status == 1){
									statusColor = '#00ff00'
								}else if(array[i].status == 5){
									statusColor = '#ffff00'
								}else if(array[i].status == 10){
									statusColor = '#ff0000'
								}else{
									statusColor = '#ffffff'
								}
								this.$set(item.companyStatus,`hour${hourNumber}`,statusColor)
							}
						})
					}
					this.tableAllData = tableArray
					if(this.dailyCompanyCode == ''){
						this.tableData = tableArray
					}else{
						console.log(this.dailyCompanyCode)
						this.tableData = tableArray.filter(item=>{
							return item.companyCode == this.dailyCompanyCode
						})
					}
					// if(this.startTime == '2020-11-12'){
					// 	this.productingCompanys = []
					// }
					// this.productingCompanys = []
					// this.tableData.map(item=>{
					// 	let companyStates = item.companyStatus
					// 	for(let i in companyStates){
					// 		if(companyStates[i] != '#fff' && companyStates[i] != '#ffff00' && companyStates[i] != '#ffffff'){
					// 			if(!this.productingCompanys.find(item1=>{return item1.companyName == item.companyName})){
					// 				let obj = {}
					// 				obj.startTime = this.startTime
					// 				obj.companyName = item.companyName
					// 				this.productingCompanys.push(obj)
					// 			}
					// 		}
					// 	}
					// })
					// if(this.startTime == '2020-11-12'){
					// 	this.$emit('exportProducting',this.productingCompanys)
					// }
					this.$emit('exportProducting',this.productingCompanys)
				}).catch(err=>{
					console.log(err)
					this.loading = false
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
			initNoDataChart(startDate,endDate1){
				let endDate = util.formatDate.format(new Date(new Date(endDate1).getTime() - 24*60*60*1000),'yyyy-MM-dd')
				let startTimeStr = new Date(startDate).getTime()
				let totalDays = endDate.split('-')[2]
				let dateList = []
				for (let i = 0; i < totalDays; i++) {
					let array = [startDate, 0, '']
					dateList.push(array)
					startTimeStr = startTimeStr + 24 * 60 * 60 * 1000
					startDate = util.formatDate.format(new Date(startTimeStr), 'yyyy-MM-dd')
				}
				this.dateList = dateList
				this.initCompanyMonthChart()
			},
			initHasDataChart(res,startDate,endDate1){
				let monthArray = []
				//获取该月企业所有状态
				for(let i=0;i<res.length;i++){
					let obj = {}
					obj.receiveTime = util.formatDate.format(new Date(res[i].receiveTime),'yyyy-MM-dd')
					obj.status = res[i].status.value
					if(obj.status == 1 && res[i].status.log.match('未生产')){
						obj.status = 0
					}
					monthArray.push(obj)
				}
				//去重并且取最大status
				for(let i=monthArray.length-2;i>=0;i--){
					if(monthArray[i].receiveTime == monthArray[i+1].receiveTime){
						if(monthArray[i].status < monthArray[i+1].status){
							monthArray.splice(i,1)
						}else{
							monthArray.splice(i+1,1)
						}
					}
				}
				let endDate = util.formatDate.format(new Date(new Date(endDate1).getTime() - 24*60*60*1000),'yyyy-MM-dd')
				let startTimeStr = new Date(startDate).getTime()
				let totalDays = endDate.split('-')[2]
				let dateList = []
				for (let i = 0; i < totalDays; i++) {
					let currentItem = monthArray.find(item=>{return item.receiveTime == startDate})
					let array
					if(currentItem){
						let statusLog = currentItem.status == 1?'正常':currentItem.status == 5?'离线':currentItem.status == 10?'异常':'未生产'
						array = [startDate, currentItem.status, statusLog]
					}else{
						array = [startDate, 0, '未生产']
					}
					dateList.push(array)
					startTimeStr = startTimeStr + 24 * 60 * 60 * 1000
					startDate = util.formatDate.format(new Date(startTimeStr), 'yyyy-MM-dd')
				}
				this.dateList = dateList
				this.initCompanyMonthChart()
			},
			initCompanyMonthChart() {
				let getYear = this.month.split('-')[0]
				let getMonth = this.month.split('-')[1]
				let dateList = this.dateList
				let heatmapData = []
				let lunarData = []
				for (let i = 0; i < dateList.length; i++) {
					heatmapData.push([
						dateList[i][0],
						dateList[i][1],
					])
					lunarData.push([
						dateList[i][0],
						1,
						dateList[i][1],
						dateList[i][2]
					]);
				}
				this.monthOption = {
					title: {
						top: 10,
						left: 'center',
						text: this.companyName + ' ' + this.month + ' 状态汇总'
					},
					tooltip: {
						formatter: function (params) {
							let str = params.value[1] == 1 ? '正常' : params.value[1] == 5 ? '离线' : params.value[1] == 10 ? '异常' : '未生产'
							return '状态：' + str
						}
					},
					visualMap: {
						show: false,
						min: 0,
						max: 10,
						calculable: true,
						seriesIndex: [2],
						orient: 'horizontal',
						left: 'center',
						bottom: 20,
						inRange: {
							color: ['#ffffff', '#00ff00', '#ffffff', '#ffffff', '#ffffff', '#ffff00', '#ffffff', '#ffffff',
								'#ffffff', '#ffffff', '#ff0000'
							],
							opacity: 0.6
						},
					},
					calendar: [{
						left: 'center',
						top: 'middle',
						cellSize: [70, 70],
						yearLabel: {
							show: false
						},
						orient: 'vertical',
						dayLabel: {
							firstDay: 1,
							nameMap: 'cn'
						},
						monthLabel: {
							show: false
						},
						range: this.month
					}],
					series: [{
						type: 'scatter',
						coordinateSystem: 'calendar',
						symbolSize: 1,
						label: {
							show: true,
							formatter: function (params) {
								let d = echarts.number.parseDate(params.value[0]);
								return d.getDate() + '\n\n';
							},
							color: '#000'
						},
						data: lunarData
					}, {
						type: 'scatter',
						coordinateSystem: 'calendar',
						symbolSize: 1,
						label: {
							show: true,
							formatter: function (params) {
								return '\n\n\n' + params.value[3];
							},
							fontSize: 14,
							fontWeight: 700,
							color: '#000'
						},
						data: lunarData
					}, {
						name: '状态',
						type: 'heatmap',
						coordinateSystem: 'calendar',
						data: heatmapData
					}]
				}
				this.chart1.setOption(this.monthOption)
			},
			closePage() {
				this.$emit('cancel', false)
			},
		},
	}
</script>
<style lang="less">
	#date-page{
		.el-table__body td{
			text-indent: 10px
		}
		.el-table tr {
			cursor: pointer;
		}
		.el-table .cell {
			padding:0!important;
		}
		.el-table__body .cell>div{
			min-height: 24px;
		}
		.el-table__body tr.current-row>td {
			background-color: skyblue !important;
		}
		.el-table th>.cell{
			padding-left:0!important;
			padding-right:0!important;
			text-align:center;
		}
	}
</style>
<style scoped>
	.date-table{
		width:860px;
		height: calc(100vh - 70px);
		margin-top:10px;
		padding:0 10px 0 0;
	}
	.echart-page-chart {
		width: 100%;
		height: 100vh;
	}

	.all-screen {
		position: fixed;
		display: flex;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: 999;
		background-color: #c9e6dc;
	}
	.el-button+.el-button {
		margin-left: 0 !important;
	}

	.close-it {
		position: fixed;
		top: 0;
		right: 20px;
		font-size: 40px;
		color: #000;
		cursor: pointer;
	}

	.el-date-editor--daterange.el-input__inner {
		display: block;
		width: calc(25vw - 30px) !important;
	}
	.el-date-editor.el-input{
		width:150px;
		margin-right:10px;
	}

	.row {
		display: flex;
		width: 100%;
	}

	.col-9 {
		flex: 0 0 75%;
		background-color: #c9e6dc
	}

	.col-6 {
		max-width:50%;
		flex: 0 0 50%;
		background-color: #c9e6dc
	}
	.scroll-x{
		overflow-x:hidden;
		overflow-y:hidden;
	}
	.col-3 {
		flex: 0 0 25%;
		background-color: #c9e6dc
	}
</style>