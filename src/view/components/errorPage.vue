<!--
 * @Author: your name
 * @Date: 2020-03-01 13:46:58
 * @LastEditTime: 2021-07-29 16:47:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-dsq\src\view\components\printPage.vue
 -->
<template>
	<div class="all-screen">
		<div class="close-it" @click="closePage">×</div>
		<div class="button-wrapper">
			<div class="row">
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
				<div class="col-3">
					<el-select v-model="searchState" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</div>
				<div class="col-3" style="padding-left:10px">
					<el-select v-model="searchCompany" filterable placeholder="请选择">
						<el-option v-for="item in companyList" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</div>
				<div class="col-3 flexend">
					<el-button class="search-button" type="primary" @click="getList">查询</el-button>
				</div>
			</div>
			<div class="row">
				<el-table :data="tableData" style="width: 100%" height="650">
					<el-table-column label="开始时间" width="180">
						<template slot-scope="scope">
							<i class="el-icon-time"></i>
							<span style="margin-left: 10px">{{ scope.row.startTime }}</span>
						</template>
					</el-table-column>
					<el-table-column label="结束时间" width="180">
						<template slot-scope="scope">
							<i class="el-icon-time"></i>
							<span style="margin-left: 10px">{{ scope.row.stopTime }}</span>
						</template>
					</el-table-column>
					<el-table-column label="企业名称" width="260">
						<template slot-scope="scope">
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">{{ scope.row.companyName }}</el-tag>
							</div>
						</template>
					</el-table-column>
					<el-table-column label="异常原因" width="300">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.alarmContent }}</span>
						</template>
					</el-table-column>
					<el-table-column label="确认状态" width="100">
						<template slot-scope="scope">
							<span v-if="scope.row.processState == 0" style="margin-left: 10px">已确认</span>
							<span v-if="scope.row.processState == 1" style="margin-left: 10px">未确认</span>
							<span v-if="scope.row.processState == 2" style="margin-left: 10px">已忽略</span>
						</template>
					</el-table-column>
					<el-table-column label="备注" width="300">
						<template slot-scope="scope">
							<el-input v-if="!hbjFlg" v-model="scope.row.processContent" size="mini" placeholder="输入备注"/>
							<el-tag size="medium" v-if="hbjFlg">{{ scope.row.processContent }}</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="操作" v-if="!hbjFlg">
						<template slot-scope="scope">
							<el-button size="mini" type="primary" style="margin-left: 10px!important" v-if="scope.row.processState != 1" @click="handleDelete(scope.$index, scope.row)">解除</el-button>
							<el-button size="mini" type="primary" style="margin-left: 10px!important" v-if="scope.row.processState != 2" @click="handleOut(scope.$index, scope.row)">忽略</el-button>
							<el-button size="mini" type="danger" style="margin-left: 10px!important" v-if="scope.row.processState == 1" @click="handleEdit(scope.$index, scope.row)">确认</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>
<script>
	import util from '@/common/util.js'
	import viewApi from '@/http/viewApi.js'
	import {getToken} from '@/libs/util.js'
	export default {
		name: 'printPage',
		data() {
			return {
				hbjFlg:false,
				token:'',
				value1:'',
				startTime:util.formatDate.format(new Date(new Date().getTime() - 24*60*60*1000),'yyyy-MM-dd') + ' 00:00:00',
				endTime:util.formatDate.format(new Date(),'yyyy-MM-dd') + ' 00:00:00',
				tableData: [],
				options: [
					{
						value: 'ALL',
						label: '全部'
					}, 
					{
						value: '1',
						label: '未确认'
					}, 
					{
						value: '0',
						label: '已确认'
					},
					{
						value: '2',
						label: '已忽略'
					},
				],
				searchState: 'ALL',
				companyList:[],
				searchCompany:'ALL',
			}
		},
		methods: {
			getAlarmList(data,token){
				viewApi.getAlarmList(data,token).then(res=>{
					if(res.rows){
						if(res.total > 0){
							this.tableData = res.rows
							let recentData = []
							if(this.searchState != 'ALL'){
								this.tableData.map(item=>{
									if(item.processState == this.searchState){
										recentData.push(item)
									}
								})
								this.tableData = recentData
							}
							let obj = {}
							obj.label = '全部企业'
							obj.value = 'ALL'
							this.companyList.push(obj)
							this.tableData.map(item=>{
								let obj1 = {}
								obj1.label = item.companyName
								obj1.value = item.companyName
								if(!this.companyList.find(ite=>{
									return ite.label == item.companyName
								})){
									this.companyList.push(obj1)
								}
							})
							recentData = []
							if(this.searchCompany != 'ALL'){
								this.tableData.map(item=>{
									if(item.companyName == this.searchCompany){
										recentData.push(item)
									}
								})
								this.tableData = recentData
							}
						}else{
							this.tableData = []
						}
					}else{
						console.log('查询异常列表失败')
					}
				})
			},
			getValue1(){
				if(!!this.value1){
					this.startTime = util.formatDate.format(this.value1[0],'yyyy-MM-dd')
					this.endTime = util.formatDate.format(this.value1[1],'yyyy-MM-dd')
				}else{
					this.startTime = util.formatDate.format(new Date(new Date().getTime() - 24*60*60*1000),'yyyy-MM-dd')
					this.endTime = util.formatDate.format(new Date(),'yyyy-MM-dd')
				}
			},
			closePage(){
				this.$emit('cancel',false)
			},
			handleEdit(index, row) {
				this.alterProcessState(row.id,0,row.processContent)
			},
			handleDelete(index, row) {
				this.alterProcessState(row.id,1,row.processContent)
			},
			handleOut(index,row) {
				this.alterProcessState(row.id,2,row.processContent)
			},
			alterProcessState(id,processState,processContent){
				let data = {
					ids:[]
				}
				let obj = {}
				obj.id = id
				obj.processState = processState
				obj.processContent = processContent
				data.ids.push(obj)
				viewApi.alterAlarmProcessState(data,this.token).then(res=>{
					let data={
						pageNum: 1,
						pageSize: 99999,
						startTime: this.startTime,
						stopTime: this.endTime
					}
					this.getAlarmList(data,this.token)
				})
			},
			getList(){
				let data={
					pageNum: 1,
					pageSize: 99999,
					startTime: this.startTime,
					stopTime: this.endTime
				}
				this.getAlarmList(data,this.token)
			}
		},
		mounted(){
			this.token = getToken()
			let userId = localStorage.getItem('userId')
			if(userId == 'dsq001'){
				this.hbjFlg = false
			}else{
				this.hbjFlg = true
			}
			let data={
				pageNum: 1,
				pageSize: 99999,
				startTime: this.startTime,
				stopTime: this.endTime
			}
			this.getAlarmList(data,this.token)
		}
	}
</script>
<style>
	.el-date-editor .el-range-separator{
		width:15%!important;
	}
</style>
<style scoped>
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
	.single-button{
		display: block;
		height:50px;
		width:calc(25vw - 30px);
		margin:0 auto;
	}
	.search-button{
		height:40px;
		width:100px;
		margin-right:40px;
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
		margin:0 auto!important;
	}
	.button-wrapper{
		width:100vw;
		height:100vh;
		display: block;
		padding:20px;
		padding-top:5px;
	}
	.row{
		display: flex;
		margin-top:10px;
		width: calc(100vw - 40px);
	}
	.col-3{
		flex:0 0 25%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: #c9e6dc
	}
	.flexend{
		justify-content: flex-end;
		flex-direction: row;
	}
</style>