<!--
 * @Author: your name
 * @Date: 2020-03-12 16:03:56
 * @LastEditTime: 2020-04-10 16:27:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-dsq\src\view\components\echartPage.vue
 -->
<template>
	<div class="all-screen" v-loading="loading || loading1" element-loading-text="程序执行中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="close-it" @click="closePage">×</div>
		<div class="row">
			<div class="col-6">
				<div class="echart-page-chart" id="echart-page-all-error"></div>
				<div class="echart-page-chart" id="echart-page-company-error"></div>
				<div class="echart-page-chart" id="echart-page-all-outline"></div>
			</div>
			<div class="col-6">
				<div class="row" style="height:40px;margin-top:10px">
					<div class="col-3">
						<el-date-picker style="margin-right:20px;"
							@change="getValue1"
							v-model="value1"
							type="daterange"
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期">
						</el-date-picker>
					</div>
					<el-autocomplete style="padding-right:15px" class="col-3" v-model="searchInput" :fetch-suggestions="querySearch" @input="searchCompany" placeholder="企业筛选"></el-autocomplete>
					<el-button type="primary" @click="export2Excel('所有连续异常10次以上企业列表')">打印当前列表</el-button>
				</div>
				<div class="row" style="height:calc(100vh - 60px);margin-top:10px">
					<el-table :data="allList1" height="calc(100vh - 60px)" style="width: 100%" highlight-current-row @row-click="getSingleCompanyErrorLine1">
						<el-table-column prop="companyName" label="企业名称" width="80"></el-table-column>
						<el-table-column prop="stopStartTime" label="异常开始时间" width="100"></el-table-column>
						<el-table-column prop="stopEndTime" label="异常结束时间" width="100"></el-table-column>
						<el-table-column prop="lastedTime" label="持续时长(分)" width="80"></el-table-column>
						<el-table-column prop="status[log]" label="异常原因"></el-table-column>
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
		name: 'echartPage',
		data() {
			return {
				value1:'',
				companyCode:'dsq269',
				startTime:util.formatDate.format(new Date(new Date().getTime() - 24*60*60*1000),'yyyy-MM-dd'),
				endTime:util.formatDate.format(new Date(),'yyyy-MM-dd'),
				tableData:[],
				allList:[],
				allList1:[],
				chart1:'',
				chart2:'',
				chart3:'',
				dayHourErrorPercent:[],
				dayHourErrorPercentOption:{
					title: {
						text: '24小时平台在产企业异常率'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['异常占比']
					},
					grid: {
						bottom:'3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
        		boundaryGap: false,
						data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
					},
					yAxis: {
						name: '百分比（%）',
						type: 'value'
					},
					series: [{
						data: [],
						type: 'line'
					}]
				},
				sinpleCompanyOption:{
					title: {
						text: ''
					},
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						bottom: '3%',
						containLabel: true
					},
					xAxis:[
						{
							type: 'category',
							data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
							axisTick: {
								alignWithLabel: true
							}
						}
					],
					yAxis:[
						{
							type: 'value'
						}
					],
					series: [
						{
							name: '异常持续时间',
							type: 'bar',
							barWidth: '60%',
							label: {
                show: true,
                position: 'top'
            	},
							data: []
						}
					]
				},
				dayHourOutPercent:[],
				dayHourOutPercentOption:{
					title: {
						text: '24小时平台在产企业离线率'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['离线占比']
					},
					grid: {
						bottom:'3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
        		boundaryGap: false,
						data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
					},
					yAxis: {
						name: '百分比（%）',
						type: 'value'
					},
					series: [{
						data: [],
						type: 'line'
					}]
				},
				loading:false,
				loading1:false,
				searchInput:'',
				restaurants:[],
			}
		},
		props:[
			'installCompanyLength',
		],
		mounted(){
			this.chart1 = echarts.init(document.getElementById('echart-page-all-error'))
			this.chart2 = echarts.init(document.getElementById('echart-page-company-error'))
			this.chart3 = echarts.init(document.getElementById('echart-page-all-outline'))
			this.getErrorCompanys()
			this.getOutlineCompanys()
			this.interval = setInterval(()=>{
				this.getErrorCompanys()
				this.getOutlineCompanys()
			},600000)
		},
		methods: {
			searchCompany(event) {
				this.allList1 = []
				if(this.searchInput == ''){
					this.allList1 = this.allList
				}else{
					for(let i=0;i<this.allList.length;i++){
						if(this.allList[i].companyName == this.searchInput){
							this.allList1.push(this.allList[i])
						}
					}
					let row = {}
					row.companyName = this.searchInput
					row.companyCode = this.allList.find(item=>{return item.companyName == this.searchInput}).companyCode
					this.getSingleCompanyErrorLine1(row)
				}
			},
			querySearch(queryString, cb) {
				let restaurants = this.restaurants;
				let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
					return (restaurant.value.toLowerCase().match(queryString.toLowerCase()));
				};
			},
			export2Excel(excelName) {
				if(this.allList.length > 0){
					require.ensure([], () => {
						let { export_json_to_excel } = require('../../excel/Export2Excel');
						let tHeader = ['公司名称', '异常开始时间','异常结束时间','异常持续时间(分)', '异常原因'];
						let filterVal = ['companyName','stopStartTime','stopEndTime','lastedTime','log'];
						let list = this.allList;
						list.map(item=>{
							item.log = item.status.log
						})
						let data = this.formatJson(filterVal, list);
						export_json_to_excel(tHeader, data, excelName);
					})
				}else{
					this.$Message.warning('当前无数据')
				}
			},
			formatJson(filterVal, jsonData) {
				return jsonData.map(v => filterVal.map(j => v[j]))
			},
			getValue1(){
				if(!!this.value1){
					this.startTime = util.formatDate.format(this.value1[0],'yyyy-MM-dd')
					this.endTime = util.formatDate.format(this.value1[1],'yyyy-MM-dd')
				}else{
					this.startTime = util.formatDate.format(new Date(new Date().getTime() - 24*60*60*1000),'yyyy-MM-dd')
					this.endTime = util.formatDate.format(new Date(),'yyyy-MM-dd')
				}
				this.getErrorCompanys()
				this.getOutlineCompanys()
			},
			getSingleCompanyErrorLine1(row){
				this.getSingleCompanyErrorLine(row.companyCode,row.companyName)
			},
			getSingleCompanyErrorLine(companyCode,companyName){
				let data = {'startTime':this.startTime,'endTime':this.endTime,'companyCode':companyCode}
				axios.requestNormal({
					url: 'http://114.116.38.171:8013/test/redReport1',
					data,
					method: 'post'
				}).then(res=>{
					this.loading = false
					if(res.length > 0){
						let startStrs = [0,10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,110000,
						120000,130000,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000]
						let dayHourList = {
							hour1:[],hour2:[],hour3:[],hour4:[],hour5:[],hour6:[],hour7:[],hour8:[],
							hour9:[],hour10:[],hour11:[],hour12:[],hour13:[],hour14:[],hour15:[],hour16:[],
							hour17:[],hour18:[],hour19:[],hour20:[],hour21:[],hour22:[],hour23:[],hour24:[]
						}
						for(let j=res.length-1;j>=0;j--){
							if(!res[j].deceiveNumber){
								res[j].deceiveNumber = 1
							}
							let count = res[j].status.count
							let deceiveNumber = res[j].deceiveNumber
							if(count/deceiveNumber < 10){
								res.splice(j,1)
							}
						}
						for(let i=0;i<res.length;i++){
							let halfHourArray = []
							let timeStr = res[i].receiveTime.split(' ')[1].myReplace(':','')
							if(timeStr < startStrs[1]){
								dayHourList.hour1.push(res[i])
							}else if(timeStr >= startStrs[1] && timeStr < startStrs[2]){
								dayHourList.hour2.push(res[i])
							}else if(timeStr >= startStrs[2] && timeStr < startStrs[3]){
								dayHourList.hour3.push(res[i])
							}else if(timeStr >= startStrs[3] && timeStr < startStrs[4]){
								dayHourList.hour4.push(res[i])
							}else if(timeStr >= startStrs[4] && timeStr < startStrs[5]){
								dayHourList.hour5.push(res[i])
							}else if(timeStr >= startStrs[5] && timeStr < startStrs[6]){
								dayHourList.hour6.push(res[i])
							}else if(timeStr >= startStrs[6] && timeStr < startStrs[7]){
								dayHourList.hour7.push(res[i])
							}else if(timeStr >= startStrs[7] && timeStr < startStrs[8]){
								dayHourList.hour8.push(res[i])
							}else if(timeStr >= startStrs[8] && timeStr < startStrs[9]){
								dayHourList.hour9.push(res[i])
							}else if(timeStr >= startStrs[9] && timeStr < startStrs[10]){
								dayHourList.hour10.push(res[i])
							}else if(timeStr >= startStrs[10] && timeStr < startStrs[11]){
								dayHourList.hour11.push(res[i])
							}else if(timeStr >= startStrs[11] && timeStr < startStrs[12]){
								dayHourList.hour12.push(res[i])
							}else if(timeStr >= startStrs[12] && timeStr < startStrs[13]){
								dayHourList.hour13.push(res[i])
							}else if(timeStr >= startStrs[13] && timeStr < startStrs[14]){
								dayHourList.hour14.push(res[i])
							}else if(timeStr >= startStrs[14] && timeStr < startStrs[15]){
								dayHourList.hour15.push(res[i])
							}else if(timeStr >= startStrs[15] && timeStr < startStrs[16]){
								dayHourList.hour16.push(res[i])
							}else if(timeStr >= startStrs[16] && timeStr < startStrs[17]){
								dayHourList.hour17.push(res[i])
							}else if(timeStr >= startStrs[17] && timeStr < startStrs[18]){
								dayHourList.hour18.push(res[i])
							}else if(timeStr >= startStrs[18] && timeStr < startStrs[19]){
								dayHourList.hour19.push(res[i])
							}else if(timeStr >= startStrs[19] && timeStr < startStrs[20]){
								dayHourList.hour20.push(res[i])
							}else if(timeStr >= startStrs[20] && timeStr < startStrs[21]){
								dayHourList.hour21.push(res[i])
							}else if(timeStr >= startStrs[21] && timeStr < startStrs[22]){
								dayHourList.hour22.push(res[i])
							}else if(timeStr >= startStrs[22] && timeStr < startStrs[23]){
								dayHourList.hour23.push(res[i])
							}else if(timeStr >= startStrs[23] && timeStr < startStrs[24]){
								dayHourList.hour24.push(res[i])
							}
						}
						let singleCompanyHourCount = []
						for(let key in dayHourList){
							console.log(dayHourList[key])
							if(dayHourList[key].length > 0){
								singleCompanyHourCount.push(Number(dayHourList[key].length*3/dayHourList[key][dayHourList[key].length - 1].deceiveNumber).toFixed(0))
							}else{
								singleCompanyHourCount.push(0)
							}
						}
						this.sinpleCompanyOption.title.text = companyName + ' ' + '半小时异常持续时间'
						this.sinpleCompanyOption.series[0].data = singleCompanyHourCount
						this.chart2.setOption(this.sinpleCompanyOption)
					}
				})
			},
			getErrorCompanys(){
				this.loading = true
				let data = {'startTime':this.startTime,'endTime':this.endTime}
				axios.requestNormal({
					url: 'http://114.116.38.171:8013/test/redReport',
					data,
					method: 'post'
				}).then(res=>{
					let array = []
					for(let i=0;i<res.length;i++){
						if(!res[i].deceiveNumber){
							res[i].deceiveNumber = 1
						}
						let count = res[i].status.count
						let deceiveNumber = res[i].deceiveNumber
						if(count/deceiveNumber >= 10){
							array.push(res[i])
						}
					}
					let startStrs = [0,10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,110000,
					120000,130000,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000]
					let dayHourList = {
						hour1:[],hour2:[],hour3:[],hour4:[],hour5:[],hour6:[],hour7:[],hour8:[],
						hour9:[],hour10:[],hour11:[],hour12:[],hour13:[],hour14:[],hour15:[],hour16:[],
						hour17:[],hour18:[],hour19:[],hour20:[],hour21:[],hour22:[],hour23:[],hour24:[]
					}
					for(let j=0;j<array.length;j++){
						let timeStr = Number(array[j].receiveTime.split(' ')[1].myReplace(':',''))
						if(timeStr < startStrs[1]){
							dayHourList.hour1.push(array[j])
						}else if(timeStr >= startStrs[1] && timeStr < startStrs[2]){
							dayHourList.hour2.push(array[j])
						}else if(timeStr >= startStrs[2] && timeStr < startStrs[3]){
							dayHourList.hour3.push(array[j])
						}else if(timeStr >= startStrs[3] && timeStr < startStrs[4]){
							dayHourList.hour4.push(array[j])
						}else if(timeStr >= startStrs[4] && timeStr < startStrs[5]){
							dayHourList.hour5.push(array[j])
						}else if(timeStr >= startStrs[5] && timeStr < startStrs[6]){
							dayHourList.hour6.push(array[j])
						}else if(timeStr >= startStrs[6] && timeStr < startStrs[7]){
							dayHourList.hour7.push(array[j])
						}else if(timeStr >= startStrs[7] && timeStr < startStrs[8]){
							dayHourList.hour8.push(array[j])
						}else if(timeStr >= startStrs[8] && timeStr < startStrs[9]){
							dayHourList.hour9.push(array[j])
						}else if(timeStr >= startStrs[9] && timeStr < startStrs[10]){
							dayHourList.hour10.push(array[j])
						}else if(timeStr >= startStrs[10] && timeStr < startStrs[11]){
							dayHourList.hour11.push(array[j])
						}else if(timeStr >= startStrs[11] && timeStr < startStrs[12]){
							dayHourList.hour12.push(array[j])
						}else if(timeStr >= startStrs[12] && timeStr < startStrs[13]){
							dayHourList.hour13.push(array[j])
						}else if(timeStr >= startStrs[13] && timeStr < startStrs[14]){
							dayHourList.hour14.push(array[j])
						}else if(timeStr >= startStrs[14] && timeStr < startStrs[15]){
							dayHourList.hour15.push(array[j])
						}else if(timeStr >= startStrs[15] && timeStr < startStrs[16]){
							dayHourList.hour16.push(array[j])
						}else if(timeStr >= startStrs[16] && timeStr < startStrs[17]){
							dayHourList.hour17.push(array[j])
						}else if(timeStr >= startStrs[17] && timeStr < startStrs[18]){
							dayHourList.hour18.push(array[j])
						}else if(timeStr >= startStrs[18] && timeStr < startStrs[19]){
							dayHourList.hour19.push(array[j])
						}else if(timeStr >= startStrs[19] && timeStr < startStrs[20]){
							dayHourList.hour20.push(array[j])
						}else if(timeStr >= startStrs[20] && timeStr < startStrs[21]){
							dayHourList.hour21.push(array[j])
						}else if(timeStr >= startStrs[21] && timeStr < startStrs[22]){
							dayHourList.hour22.push(array[j])
						}else if(timeStr >= startStrs[22] && timeStr < startStrs[23]){
							dayHourList.hour23.push(array[j])
						}else if(timeStr >= startStrs[23] && timeStr < startStrs[24]){
							dayHourList.hour24.push(array[j])
						}
					}
					let array1 = array.sort((a,b)=>{
						if(a.companyCode < b.companyCode){
							return -1
						}else if(a.companyCode > b.companyCode){
							return 1
						}else{
							return 0
						}
					})
					let array2 = []
					array2.push(array1[0])
					for(let i=1;i<array1.length;i++){
						if(array1[i].companyCode == array1[i-1].companyCode){
							if(new Date(array1[i].receiveTime).getTime() - new Date(array1[i-1].receiveTime).getTime() > 10*60*1000){
								array2.push(array1[i-1])
								array2.push(array1[i])
							}
						}else{
							array2.push(array1[i-1])
							array2.push(array1[i])
						}
					}
					array2.push(array1[array1.length-1])
					let array3 = []
					for(let i=0;i<array2.length;i++){
						if(i%2 == 1){
							array2[i].stopStartTime = array2[i-1].receiveTime
							array2[i].stopEndTime = array2[i].receiveTime
							array2[i].lastedTime = ((new Date(array2[i].receiveTime).getTime() - new Date(array2[i-1].receiveTime).getTime())/60000).toFixed(0)
							array3.push(array2[i])
						}
					}
					this.operateDayHourList(dayHourList,array3)
				})
			},
			getOutlineCompanys(){
				this.loading1 = true
				let data = {'startTime':this.startTime,'endTime':this.endTime}
				axios.requestNormal({
					url: 'http://114.116.38.171:8013/test/outlineReport',
					data,
					method: 'post'
				}).then(res=>{
					this.loading1 = false
					let array = []
					for(let i=0;i<res.length;i++){
						if(!res[i].companyName.includes('未安装')){
							array.push(res[i])
						}
					}
					let startStrs = [0,10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,110000,
					120000,130000,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000]
					let dayHourList = {
						hour1:[],hour2:[],hour3:[],hour4:[],hour5:[],hour6:[],hour7:[],hour8:[],
						hour9:[],hour10:[],hour11:[],hour12:[],hour13:[],hour14:[],hour15:[],hour16:[],
						hour17:[],hour18:[],hour19:[],hour20:[],hour21:[],hour22:[],hour23:[],hour24:[]
					}
					for(let j=0;j<array.length;j++){
						let timeStr = Number(array[j].receiveTime.split(' ')[1].myReplace(':',''))
						if(timeStr < startStrs[1]){
							dayHourList.hour1.push(array[j])
						}else if(timeStr >= startStrs[1] && timeStr < startStrs[2]){
							dayHourList.hour2.push(array[j])
						}else if(timeStr >= startStrs[2] && timeStr < startStrs[3]){
							dayHourList.hour3.push(array[j])
						}else if(timeStr >= startStrs[3] && timeStr < startStrs[4]){
							dayHourList.hour4.push(array[j])
						}else if(timeStr >= startStrs[4] && timeStr < startStrs[5]){
							dayHourList.hour5.push(array[j])
						}else if(timeStr >= startStrs[5] && timeStr < startStrs[6]){
							dayHourList.hour6.push(array[j])
						}else if(timeStr >= startStrs[6] && timeStr < startStrs[7]){
							dayHourList.hour7.push(array[j])
						}else if(timeStr >= startStrs[7] && timeStr < startStrs[8]){
							dayHourList.hour8.push(array[j])
						}else if(timeStr >= startStrs[8] && timeStr < startStrs[9]){
							dayHourList.hour9.push(array[j])
						}else if(timeStr >= startStrs[9] && timeStr < startStrs[10]){
							dayHourList.hour10.push(array[j])
						}else if(timeStr >= startStrs[10] && timeStr < startStrs[11]){
							dayHourList.hour11.push(array[j])
						}else if(timeStr >= startStrs[11] && timeStr < startStrs[12]){
							dayHourList.hour12.push(array[j])
						}else if(timeStr >= startStrs[12] && timeStr < startStrs[13]){
							dayHourList.hour13.push(array[j])
						}else if(timeStr >= startStrs[13] && timeStr < startStrs[14]){
							dayHourList.hour14.push(array[j])
						}else if(timeStr >= startStrs[14] && timeStr < startStrs[15]){
							dayHourList.hour15.push(array[j])
						}else if(timeStr >= startStrs[15] && timeStr < startStrs[16]){
							dayHourList.hour16.push(array[j])
						}else if(timeStr >= startStrs[16] && timeStr < startStrs[17]){
							dayHourList.hour17.push(array[j])
						}else if(timeStr >= startStrs[17] && timeStr < startStrs[18]){
							dayHourList.hour18.push(array[j])
						}else if(timeStr >= startStrs[18] && timeStr < startStrs[19]){
							dayHourList.hour19.push(array[j])
						}else if(timeStr >= startStrs[19] && timeStr < startStrs[20]){
							dayHourList.hour20.push(array[j])
						}else if(timeStr >= startStrs[20] && timeStr < startStrs[21]){
							dayHourList.hour21.push(array[j])
						}else if(timeStr >= startStrs[21] && timeStr < startStrs[22]){
							dayHourList.hour22.push(array[j])
						}else if(timeStr >= startStrs[22] && timeStr < startStrs[23]){
							dayHourList.hour23.push(array[j])
						}else if(timeStr >= startStrs[23] && timeStr < startStrs[24]){
							dayHourList.hour24.push(array[j])
						}
					}
					this.operateDayHourList1(dayHourList,array)
				})
			},
			operateDayHourList(dayHourList,array){
				let dayHourList1 = {
					hour1:[],hour2:[],hour3:[],hour4:[],hour5:[],hour6:[],hour7:[],hour8:[],
					hour9:[],hour10:[],hour11:[],hour12:[],hour13:[],hour14:[],hour15:[],hour16:[],
					hour17:[],hour18:[],hour19:[],hour20:[],hour21:[],hour22:[],hour23:[],hour24:[]
				}
				//去掉每个小时重复的companyName
				for(let key in dayHourList){
					if(dayHourList[key].length > 0){
						dayHourList1[key].push(dayHourList[key][0])
						for(let i=0;i<dayHourList[key].length;i++){
							let ele = dayHourList[key][i]
							if(!dayHourList1[key].find(item=>{return ele.companyName == item.companyName})){
								dayHourList1[key].push(ele)
							}
						}
					}
				}
				this.tableData = dayHourList1
				this.operateAllList(array)
			},
			operateDayHourList1(dayHourList,array){
				let dayHourList1 = {
					hour1:[],hour2:[],hour3:[],hour4:[],hour5:[],hour6:[],hour7:[],hour8:[],
					hour9:[],hour10:[],hour11:[],hour12:[],hour13:[],hour14:[],hour15:[],hour16:[],
					hour17:[],hour18:[],hour19:[],hour20:[],hour21:[],hour22:[],hour23:[],hour24:[]
				}
				//去掉每个小时重复的companyName
				for(let key in dayHourList){
					if(dayHourList[key].length > 0){
						dayHourList1[key].push(dayHourList[key][0])
						for(let i=0;i<dayHourList[key].length;i++){
							let ele = dayHourList[key][i]
							if(!dayHourList1[key].find(item=>{return ele.companyName == item.companyName})){
								dayHourList1[key].push(ele)
							}
						}
					}
				}
				this.tableData1 = dayHourList1
				this.getAllPercent1(this.tableData1)
			},
			//获取table的数据，有报红10次以上的company出现且只出现一次，时间取最早
			operateAllList(allList){
				this.allList = allList
				this.allList1 = allList
				let restaurants = []
				let param = {}
				param.value = allList[0].companyName
				restaurants.push(param)
				for(let i=0;i<allList.length;i++){
					if(!restaurants.find(item=>{return item.value == allList[i].companyName})){
						let obj = {}
						obj.value = allList[i].companyName
						restaurants.push(obj)
					}
				}
				this.restaurants = restaurants
				this.getAllPercent(this.tableData)
				if(allList.length > 0){
					this.getSingleCompanyErrorLine(this.allList[0].companyCode,this.allList[0].companyName)
				}
			},
			getAllPercent(tableData){
				this.dayHourErrorPercent = []
				for(let key in tableData){
					let percent = Math.round(tableData[key].length / this.installCompanyLength * 10000) / 100.00
					this.dayHourErrorPercent.push(percent)
				}
				this.dayHourErrorPercentOption.series[0].data = this.dayHourErrorPercent
				this.chart1.setOption(this.dayHourErrorPercentOption)
			},
			getAllPercent1(tableData){
				this.dayHourOutPercent = []
				for(let key in tableData){
					let percent = Math.round(tableData[key].length / this.installCompanyLength * 10000) / 100.00
					this.dayHourOutPercent.push(percent)
				}
				this.dayHourOutPercentOption.series[0].data = this.dayHourOutPercent
				this.chart3.setOption(this.dayHourOutPercentOption)
			},
			closePage(){
				this.$emit('cancel',false)
			},
		},
	}
</script>
<style lang="less">
	.el-date-editor .el-range-separator{
		width:15%!important;
	}
	.el-table tr{
		cursor: pointer;
	}
	.el-table__body tr.current-row>td{
		background-color: skyblue !important;
	}
</style>
<style scoped>
	.echart-page-chart{
		width:100%;
		height:33vh;
	}
	.all-screen{
		position: fixed;
		display: flex;
		width: 100vw;
		height: 100vh;
		top:0;
		left:0;
		z-index: 999;
		background-color: #c9e6dc;
	}
	.el-button+.el-button{
		margin-left:0!important;
	}
	.close-it{
		position: fixed;
		top:0;
		right:20px;
		font-size:40px;
		color:#000;
		cursor: pointer;
	}
	.el-date-editor--daterange.el-input__inner{
		display: block;
		width:calc(25vw - 30px)!important;
	}
	.el-range-editor.el-input__inner{
		padding:0 10px!important;
	}
	.row{
		display: flex;
		width: 100%;
	}
	.col-9{
		flex:0 0 75%;
		background-color: #c9e6dc
	}
	.col-6{
		flex:0 0 50%;
		background-color: #c9e6dc
	}
	.col-3{
		flex:0 0 25%;
		background-color: #c9e6dc
	}
</style>