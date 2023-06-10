<!--
 * @Author: your name
 * @Date: 2020-03-12 16:03:56
 * @LastEditTime: 2020-11-19 12:41:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-dsq\src\view\components\echartPage.vue
 -->
<template>
	<div id="no-product-page" class="all-screen" v-loading="loading || loading1" element-loading-text="程序执行中"
		element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="close-it" @click="closePage">×</div>
		<div class="row">
			<div class="col-12">
				<div class="row" style="height:40px;margin-top:10px">
					<el-date-picker v-model="value1" type="date" placeholder="选择开始日期" @change="getValue1"></el-date-picker>
					<!-- <el-date-picker v-model="value2" type="date" placeholder="选择结束日期" @change="getValue2"></el-date-picker> -->
					<el-select v-model="searchInput" @change="searchCompany" filterable placeholder="企业筛选" style="padding-right:10px">
						<el-option
							v-for="item in restaurants"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="searchBelong" @change="searchBelong" filterable placeholder="县区筛选" style="padding-right:10px">
						<el-option
							v-for="item in belongList"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-select v-model="searchType" multiple collapse-tags placeholder="类型筛选" style="padding-right:10px">
						<el-option
							v-for="item in typeList"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-button type="primary" @click="searchReport" style="margin-right:10px">查询</el-button>
					<el-button type="primary" @click="printReport">打印报表</el-button>
				</div>
				<div class="row" style="margin-top:10px;">
					<el-table :data="tableData1" border style="width:100%;" height="calc(100vh - 100px)">
						<el-table-column prop="companyName" label="企业名称"></el-table-column>
						<el-table-column prop="deviceNumber" label="窑炉总数"></el-table-column>
						<el-table-column label="窑炉类型">
							<template slot-scope="scope">
								<div class="prewrap">{{scope.row.deviceName}}</div>
							</template>
						</el-table-column>
						<el-table-column prop="productNumber" label="生产总数"></el-table-column>
						<el-table-column label="生产类型">
							<template slot-scope="scope">
								<div class="prewrap">{{scope.row.productName}}</div>
							</template>
						</el-table-column>
						<el-table-column prop="noProductNumber" label="停产总数"></el-table-column>
						<el-table-column label="停产类型">
							<template slot-scope="scope">
								<div class="prewrap">{{scope.row.noProductName}}</div>
							</template>
						</el-table-column>
						<el-table-column prop="belong" label="归属"></el-table-column>
						<el-table-column prop="remark" label="备注" class="text-wrapper">
							<template slot-scope="scope">
								<div class="prewrap">{{scope.row.remark}}</div>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import viewApi from '@/http/viewApi.js'
	import {getToken} from '@/libs/util.js'
	import util from '@/common/util.js'
	export default {
		name: 'datePage',
		data() {
			return {
				splitEnd:'',//分段查询标记
				searchBelong:'',
				belongList:[
					{
						label:'全部',
						value:''
					},
					{
						label:'大石桥',
						value:'大石桥'
					},
					{
						label:'鲅鱼圈',
						value:'鲅鱼圈'
					},
					{
						label:'盖州',
						value:'盖州'
					},
					{
						label:'营口',
						value:'营口'
					},
				],
				searchType:[],
				typeList:[
					{
						label:'重烧窑',
						value:'重烧'
					},
					{
						label:'轻烧窑',
						value:'轻烧'
					},
					{
						label:'隧道窑',
						value:'隧道'
					},
					{
						label:'雷蒙',
						value:'雷蒙'
					},
					{
						label:'破碎',
						value:'破碎'
					},
					{
						label:'电熔炉',
						value:'电熔'
					},
					{
						label:'熔铸炉',
						value:'熔铸'
					},
					{
						label:'其它',
						value:'生产'
					},
				],
				noProductCompanys:[],
				tableData:[],
				tableData1:[],
				loading:false,
				loading1:false,
				searchInput:'',
				dailyCompanyCode:'',
				restaurants:[],
				value1:'',
				value2:'',
				startTime:util.formatDate.format(new Date(),'yyyy-MM-dd') + ' 00:00:00',
				// endTime:util.formatDate.format(new Date(new Date().getTime() + 24*60*60*1000),'yyyy-MM-dd') + ' 00:00:00',
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
			this.token = getToken()
			this.noProductingCompanys = []
			this.getDailyReport(this.startTime)
		},
		methods: {
			//获取查询日期startTime，接口截止时间endTime，查询月份month
			getValue1(){
				if(!!this.value1){
					this.startTime = util.formatDate.format(new Date(new Date(this.value1).getTime() + 24*60*60*1000),'yyyy-MM-dd hh:mm:ss')
				}else{
					this.startTime = util.formatDate.format(new Date(),'yyyy-MM-dd') + ' 00:00:00'
				}
			},
			// getValue2(){
			// 	if(!!this.value2){
			// 		this.endTime = util.formatDate.format(new Date(new Date(this.value2).getTime() + 24*60*60*1000),'yyyy-MM-dd hh:mm:ss')
			// 	}else{
			// 		this.endTime = util.formatDate.format(new Date(new Date().getTime() + 24*60*60*1000),'yyyy-MM-dd') + ' 00:00:00'
			// 	}
			// },
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
				this.searchTime = this.startTime
				this.noProductCompanys = []
				this.getDailyReport(this.startTime)
			},
			printReport(){
				let obj = {}
				obj.startTime = util.formatDate.format(new Date(new Date(this.searchTime).getTime() - 24*60*60*1000),'yyyy-MM-dd')
				obj.tableData = this.tableData1
				this.$emit('exportNoProduct',obj)
			},
			splitGetDailyReport(companyCode,startTime,endTime){
				if(new Date(endTime).getTime() > new Date(this.splitEnd).getTime()){
					this.$Message.success('分段查询已完成')
					this.loading = false
					return
				}else{
					let data = {startTime:startTime}
					viewApi.getProuctStatusList(data,this.token).then(res=>{
						this.loading = false
						this.tableData = []
						//按companyCode排序
						let array = res.data.sort((a,b)=>{
							if(a.companyCode < b.companyCode){
								return -1
							}else if(a.companyCode > b.companyCode){
								return 1
							}else{
								return 0
							}
						})
						array.map(item=>{
							item.companyCode = item.enterpriseId
						})
						//匹配allCompany中的belong
						array.map(item=>{
							let obj = this.allCompany.find(item1=>{
								return item.companyCode == item1.companyCode
							})
							if(obj){
								item.belong = obj.belong || ''
							}else{
								item.belong = ''
							}
						})
						this.tableData = array
						//向未生产数组中push数据
						if(this.noProductCompanys.length > 0){
							this.tableData.map(item=>{
								for(let i=0;i<this.noProductCompanys.length;i++){
									if(item.companyCode == this.noProductCompanys[i].companyCode){
										if(item.monitorPointName.includes('窑') || item.monitorPointName.includes('炉') || item.monitorPointName.includes('生产') || item.monitorPointName.includes('主机')){
											if(item.factorMax > 1){
												this.noProductCompanys[i].productNumber ++
											}else{
												this.noProductCompanys[i].noProductNumber ++
											}
											this.noProductCompanys[i].remark = this.noProductCompanys[i].remark + item.monitorPointName + '电流最大值为' + item.factorMax + ' '
										}
									}
								}
							})
						}else{
							this.allCompany.map(item=>{
								let obj={}
								obj.companyCode = item.companyCode
								obj.companyName = item.companyName
								obj.belong = item.belong
								obj.deviceNumber = 0
								obj.productNumber = 0
								obj.noProductNumber = 0
								obj.remark = ''
								this.noProductCompanys.push(obj)
							})
							this.tableData.map(item=>{
								for(let i=0;i<this.noProductCompanys.length;i++){
									if(item.companyCode == this.noProductCompanys[i].companyCode){
										if(item.monitorPointName.includes('窑') || item.monitorPointName.includes('炉') || item.monitorPointName.includes('生产') || item.monitorPointName.includes('主机')){
											this.noProductCompanys[i].deviceNumber++
											if(item.factorMax > 1){
												this.noProductCompanys[i].productNumber ++
											}else{
												this.noProductCompanys[i].noProductNumber ++
											}
											this.noProductCompanys[i].remark = this.noProductCompanys[i].remark + item.monitorPointName + '电流最大值为' + item.factorMax + ' '
										}
									}
								}
							})
						}
						//判断是否查询单个企业
						//判断searchBelong
						if(this.dailyCompanyCode == '' && this.searchBelong == ''){
							this.tableData1 = this.noProductCompanys
						}else if(this.dailyCompanyCode == '' && this.searchBelong != ''){
							if(this.searchBelong == '盖州' || this.searchBelong == '鲅鱼圈' || this.searchBelong == '营口'){
								this.tableData1 = this.noProductCompanys.filter(item=>{
									return item.belong == this.searchBelong
								})
							}else{
								this.tableData1 = this.noProductCompanys.filter(item=>{
									return item.belong != '盖州' && item.belong != '鲅鱼圈' && item.belong != '营口'
								})
							}
						}else if(this.dailyCompanyCode != '' && this.searchBelong == ''){
							this.tableData1 = this.noProductCompanys.filter(item=>{
								return item.companyCode == this.dailyCompanyCode
							})
						}else{
							if(this.searchBelong == '盖州' || this.searchBelong == '鲅鱼圈' || this.searchBelong == '营口'){
								this.tableData1 = this.noProductCompanys.filter(item=>{
									return item.belong == this.searchBelong
								})
							}else{
								this.tableData1 = this.noProductCompanys.filter(item=>{
									return item.belong != '盖州' && item.belong != '鲅鱼圈' && item.belong != '营口'
								})
							}
							this.tableData1 = this.tableData1.filter(item=>{
								return item.companyCode == this.dailyCompanyCode
							})
						}
						let limit = util.formatDate.format(new Date(new Date(endTime).getTime() + 24*60*60*1000),'yyyy-MM-dd')
						setTimeout(() => {
							this.splitGetDailyReport(companyCode,endTime,limit)
						}, 500)
					}).catch(err=>{
						console.log(err)
						this.loading = false
					})
				}
			},
			getDailyReport(startTime){
				// if(this.startTime.myReplace('-','') >= this.endTime.myReplace('-','')){
				// 	this.$Message.error('结束日期小于起始日期')
				// 	return
				// }
				//限制日期查询长度
				// if(new Date(endTime).getTime() - new Date(startTime).getTime() > 24*60*60*1000){
				// 	this.splitEnd = endTime
				// 	this.$Message.warning('查询日期间隔大于1天不可直接查询，需要分段查询，等待时间较长，每天10秒')
				// 	startTime = startTime
				// 	endTime = util.formatDate.format(new Date(new Date(startTime).getTime() + 24*60*60*1000),'yyyy-MM-dd')
				// 	this.tableData1 = []
				// 	this.splitGetDailyReport(companyCode,startTime,endTime)
				// 	return
				// }
				this.loading = true
				let data = {startTime:startTime}
				viewApi.getProuctStatusList(data,this.token).then(res=>{
					this.loading = false
					this.tableData = []
					//按companyCode排序
					let array = res.data.sort((a,b)=>{
						if(a.companyCode < b.companyCode){
							return -1
						}else if(a.companyCode > b.companyCode){
							return 1
						}else{
							return 0
						}
					})
					array.map(item=>{
						item.companyCode = item.enterpriseId
					})
					//匹配allCompany中的belong
					array.map(item=>{
						let obj = this.allCompany.find(item1=>{
							return item.companyCode == item1.companyCode
						})
						if(obj){
							item.belong = obj.belong || ''
						}else{
							item.belong = ''
						}
					})
					this.tableData = array
					//向未生产数组中push数据
					this.allCompany.map(item=>{
						let obj={}
						obj.companyCode = item.companyCode
						obj.companyName = item.companyName
						obj.belong = item.belong
						obj.deviceNumber = 0
						obj.deviceName = ''
						obj.deviceName0 = ''
						obj.productNumber = 0
						obj.productName = ''
						obj.productName0 = ''
						obj.noProductNumber = 0
						obj.noProductName = ''
						obj.noProductName0 = ''
						obj.remark = ''
						this.noProductCompanys.push(obj)
					})
					this.tableData.map(item=>{
						for(let i=0;i<this.noProductCompanys.length;i++){
							if(item.companyCode == this.noProductCompanys[i].companyCode){
								if(this.searchType.length == 0){
									if(item.monitorPointName.includes('窑') || item.monitorPointName.includes('炉') || item.monitorPointName.includes('生产') || item.monitorPointName.includes('主机')){
										this.noProductCompanys[i].deviceNumber++
										if(item.factorMax > 1){
											this.noProductCompanys[i].productNumber ++
											this.noProductCompanys[i].productName0 = this.noProductCompanys[i].productName0 + this.deleteNum(item.monitorPointName) + '\n'
											if(!this.noProductCompanys[i].productName.includes(this.deleteNum(item.monitorPointName))){
												this.noProductCompanys[i].productName = this.noProductCompanys[i].productName + this.deleteNum(item.monitorPointName) + '\n'
											}
										}else{
											this.noProductCompanys[i].noProductNumber ++
											this.noProductCompanys[i].noProductName0 = this.noProductCompanys[i].noProductName0 + this.deleteNum(item.monitorPointName) + '\n'
											if(!this.noProductCompanys[i].noProductName.includes(this.deleteNum(item.monitorPointName))){
												this.noProductCompanys[i].noProductName = this.noProductCompanys[i].noProductName + this.deleteNum(item.monitorPointName) + '\n'
											}
										}
										this.noProductCompanys[i].remark = this.noProductCompanys[i].remark + item.monitorPointName + '电流最大值为' + item.factorMax + '\n'
										this.noProductCompanys[i].deviceName0 = this.noProductCompanys[i].deviceName0 + this.deleteNum(item.monitorPointName) + '\n'
										if(!this.noProductCompanys[i].deviceName.includes(this.deleteNum(item.monitorPointName))){
											this.noProductCompanys[i].deviceName = this.noProductCompanys[i].deviceName + this.deleteNum(item.monitorPointName) + '\n'
										}
									}
								}else{
									if(this.searchType.includes(item.monitorPointName.substring(0,2))){
									// if(item.monitorPointName.includes('窑') || item.monitorPointName.includes('炉') || item.monitorPointName.includes('生产') || item.monitorPointName.includes('主机')){
										this.noProductCompanys[i].deviceNumber++
										if(item.factorMax > 1){
											this.noProductCompanys[i].productNumber ++
											this.noProductCompanys[i].productName0 = this.noProductCompanys[i].productName0 + this.deleteNum(item.monitorPointName) + '\n'
											if(!this.noProductCompanys[i].productName.includes(this.deleteNum(item.monitorPointName))){
												this.noProductCompanys[i].productName = this.noProductCompanys[i].productName + this.deleteNum(item.monitorPointName) + '\n'
											}
										}else{
											this.noProductCompanys[i].noProductNumber ++
											this.noProductCompanys[i].noProductName0 = this.noProductCompanys[i].noProductName0 + this.deleteNum(item.monitorPointName) + '\n'
											if(!this.noProductCompanys[i].noProductName.includes(this.deleteNum(item.monitorPointName))){
												this.noProductCompanys[i].noProductName = this.noProductCompanys[i].noProductName + this.deleteNum(item.monitorPointName) + '\n'
											}
										}
										this.noProductCompanys[i].remark = this.noProductCompanys[i].remark + item.monitorPointName + '电流最大值为' + item.factorMax + '\n'
										this.noProductCompanys[i].deviceName0 = this.noProductCompanys[i].deviceName0 + this.deleteNum(item.monitorPointName) + '\n'
										if(!this.noProductCompanys[i].deviceName.includes(this.deleteNum(item.monitorPointName))){
											this.noProductCompanys[i].deviceName = this.noProductCompanys[i].deviceName + this.deleteNum(item.monitorPointName) + '\n'
										}
									}
								}
							}
						}
					})
					this.noProductCompanys.map(item=>{
						item.productName = ''
						item.noProductName = ''
						let productArr = []
						let noProductArr = []
						let productArr0 = item.productName0.split('\n')
						productArr0.map(item1=>{
							item1 = this.deleteNum(item1)
							if(item1 != ''){
								let obj = {
									name:item1,
									num:1
								}
								productArr.push(obj)
							}
						})
						let noProductArr0 = item.noProductName0.split('\n')
						noProductArr0.map(item1=>{
							item1 = this.deleteNum(item1)
							if(item1 != ''){
								let obj = {
									name:item1,
									num:1
								}
								noProductArr.push(obj)
							}
						})
						let productArr1 = []
						let noProductArr1 = []
						productArr.map(item1=>{
							if(!productArr1.find(item2=>{return item2.name == item1.name})){
								let obj = {
									name:item1.name,
									num:1,
								}
								productArr1.push(obj)
							}else{
								productArr1.find(item2=>{return item2.name == item1.name}).num++
							}
						})
						noProductArr.map(item1=>{
							if(!noProductArr1.find(item2=>{return item2.name == item1.name})){
								let obj = {
									name:item1.name,
									num:1,
								}
								noProductArr1.push(obj)
							}else{
								noProductArr1.find(item2=>{return item2.name == item1.name}).num++
							}
						})
						productArr1.map(item1=>{
							item.productName = item.productName + item1.name + item1.num + '个' + '\n'
						})
						noProductArr1.map(item1=>{
							item.noProductName = item.noProductName + item1.name + item1.num + '个' + '\n'
						})
					})
					//判断是否查询单个企业
					//判断searchBelong
					if(this.dailyCompanyCode == '' && this.searchBelong == ''){
						this.tableData1 = this.noProductCompanys
					}else if(this.dailyCompanyCode == '' && this.searchBelong != ''){
						if(this.searchBelong == '盖州' || this.searchBelong == '鲅鱼圈' || this.searchBelong == '营口'){
							this.tableData1 = this.noProductCompanys.filter(item=>{
								return item.belong == this.searchBelong
							})
						}else{
							this.tableData1 = this.noProductCompanys.filter(item=>{
								return item.belong != '盖州' && item.belong != '鲅鱼圈' && item.belong != '营口'
							})
						}
					}else if(this.dailyCompanyCode != '' && this.searchBelong == ''){
						this.tableData1 = this.noProductCompanys.filter(item=>{
							return item.companyCode == this.dailyCompanyCode
						})
					}else{
						if(this.searchBelong == '盖州' || this.searchBelong == '鲅鱼圈' || this.searchBelong == '营口'){
							this.tableData1 = this.noProductCompanys.filter(item=>{
								return item.belong == this.searchBelong
							})
						}else{
							this.tableData1 = this.noProductCompanys.filter(item=>{
								return item.belong != '盖州' && item.belong != '鲅鱼圈' && item.belong != '营口'
							})
						}
						this.tableData1 = this.tableData1.filter(item=>{
							return item.companyCode == this.dailyCompanyCode
						})
					}
					this.tableData1.map(item=>{
						if(item.remark == ''){
							item.remark = '未检测到生产设备'
						}
					})
				}).catch(err=>{
					console.log(err)
					this.loading = false
				})
			},
			deleteNum(str){
      			let reg = /[0-9]+/g;
				let str1 = str.replace(reg,"");
				return str1;
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
	.prewrap {
		white-space: pre-line;
	}
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
	
	.col-12 {
		flex: 0 0 100%;
		padding:0 10px;
		background-color: #c9e6dc
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