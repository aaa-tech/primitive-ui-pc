<!--
 * @Author: your name
 * @Date: 2020-03-01 13:46:58
 * @LastEditTime: 2020-11-30 15:32:47
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
					<el-button type="primary" class="single-button" @click="exportErrorCompanys1">按日期打印<span style="font-size:16px;color:#000;">异常</span>企业</el-button>
					<div class="description">使用说明：默认查询昨日异常企业信息（不选日期），选择日期时查询时间为初始日期的零点，到结束日期的零点前，不包含结束日期，例如选择1970年1月1日至1970年1月3日，查询结果为1970年1月1日和1970年1月2日</div>
				</div>
				<div class="col-3">
					<el-button type="primary" class="single-button" @click="exportExcel(1)">打印所有<span style="font-size:16px;color:#000;">离线</span>企业基本信息</el-button>
					<div class="description">使用说明：直接点击查询当前所有离线企业的基本信息</div>
				</div>
				<div class="col-3">
					<el-button type="primary" class="single-button" @click="exportExcel(2)">打印所有<span style="font-size:16px;color:#000;">未生产</span>企业基本信息</el-button>
					<div class="description">使用说明：直接点击查询当前所有未生产企业的基本信息</div>
				</div>
				<div class="col-3">
					<el-button type="primary" class="single-button" @click="exportExcel(3)">打印所有<span style="font-size:16px;color:#000;">正常在产</span>企业基本信息</el-button>
					<el-button type="primary" class="single-button" @click="exportOnProduct">按日期打印<span style="font-size:16px;color:#000;">正常在产</span>企业</el-button>
					<div class="description">使用说明：直接点击查询当前所有正常在产企业的基本信息</div>
				</div>
			</div>
			<div class="row">
				<div class="col-3">
					<el-button type="primary" class="single-button" @click="exportExcel(4)">打印所有<span style="font-size:16px;color:#000;">异常</span>企业基本信息</el-button>
					<div class="description">使用说明：直接点击查询当前所有异常企业的基本信息</div>
				</div>
				<div class="col-3">
					<el-button type="primary" class="single-button" @click="exportExcel(5)">打印<span style="font-size:16px;color:#000;">当前查询</span>的企业基本信息</el-button>
					<div class="description">使用说明：直接点击查询当前企业列表搜索到的企业的基本信息可以按企业级别或者企业归属地等先进行查询</div>
				</div>
				<div class="col-3">
					<el-button v-if="!askPass" type="primary" class="single-button" @click="exportExcel(6)">打印所有<span style="font-size:16px;color:#000;">离线</span>企业设备关系表</el-button>
					<div class="description">使用说明：直接点击查询当前所有离线企业设备关系表。<span style="color:red">注意：查询设备关系的功能需要请求服务器大量数据，如果频繁操作，易造成服务器宕机，请按需操作</span></div>
				</div>
				<div class="col-3">
					<el-button v-if="!askPass" type="primary" class="single-button" @click="exportExcel(7)">打印所有<span style="font-size:16px;color:#000;">未生产</span>企业设备关系表</el-button>
					<div class="description">使用说明：直接点击查询当前所有未生产企业设备关系表。<span style="color:red">注意：查询设备关系的功能需要请求服务器大量数据，如果频繁操作，易造成服务器宕机，请按需操作</span></div>
				</div>
			</div>
			<div class="row">
				<div class="col-3">
					<el-button v-if="!askPass" type="primary" class="single-button" @click="exportExcel(8)">打印所有<span style="font-size:16px;color:#000;">正常在产</span>企业设备关系表</el-button>
					<div class="description">使用说明：直接点击查询当前所有正常在产企业设备关系表。<span style="color:red">注意：查询设备关系的功能需要请求服务器大量数据，如果频繁操作，易造成服务器宕机，请按需操作</span></div>
				</div>
				<div class="col-3">
					<el-button v-if="!askPass" type="primary" class="single-button" @click="exportExcel(9)">打印所有<span style="font-size:16px;color:#000;">异常</span>企业设备关系表</el-button>
					<div class="description">使用说明：直接点击查询当前所有异常企业设备关系表。<span style="color:red">注意：查询设备关系的功能需要请求服务器大量数据，如果频繁操作，易造成服务器宕机，请按需操作</span></div>
				</div>
				<div class="col-3">
					<el-button v-if="!askPass" type="primary" class="single-button" @click="exportExcel(10)">打印<span style="font-size:16px;color:#000;">当前查询</span>的企业设备关系表</el-button>
					<div class="description">使用说明：直接点击查询当前企业列表搜索到的企业设备关系表可以按企业级别或者企业归属地等先进行查询。<span style="color:red">注意：查询设备关系的功能需要请求服务器大量数据，如果频繁操作，易造成服务器宕机，请按需操作</span></div>
				</div>
				<div class="col-3" v-if="askPass">
					<el-input v-if="askPass" class="single-button" v-model="passWord" placeholder="请输入密码"></el-input>
					<el-button v-if="askPass" type="primary" @click="confirmPass">确定</el-button>
				</div>
				<div class="col-3" v-if="askBelong">
					<el-input v-if="askBelong" class="single-button" v-model="belong" placeholder="请输入归属地"></el-input>
					<el-button v-if="askBelong" type="primary" @click="confirmBelong">确定</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import util from '@/common/util.js'
	export default {
		name: 'printPage',
		data() {
			return {
				askPass:false,
				askBelong:false,
				belong:'',
				passWord:'',
				value1:'',
				startTime:util.formatDate.format(new Date(new Date().getTime() - 24*60*60*1000),'yyyy-MM-dd'),
				endTime:util.formatDate.format(new Date(),'yyyy-MM-dd'),
			}
		},
		methods: {
			confirmPass(){
				if(this.passWord == 'dldthwt'){
					this.askPass = false
					this.passWord = ''
					this.$emit('exportExcel',this.res)
				}else{
					this.askPass = false
					this.passWord = ''
					this.$Message.error('密码错误');
				}
			},
			confirmBelong(){
				if(this.belong != '大石桥' && this.belong != '鲅鱼圈' && this.belong != '营口' && this.belong != '盖州'){
					this.belong = ''
					this.$Message.error('请输入正确的归属地')
				}else{
					this.askBelong = false
					let belong = this.belong
					this.belong = ''
					this.exportErrorCompanys(belong)
				}
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
			exportExcel(res){
				if(res >= 6){
					this.$Message.warning('消耗内存的功能，请输入密码')
					this.askPass = true
					this.askBelong = false
					this.res = res
				}else{
					this.$emit('exportExcel',res)
				}
			},
			exportErrorCompanys1(){
				this.askPass = false
				this.askBelong = true
			},
			exportErrorCompanys(res){
				let times = {}
				times.startTime = this.startTime
				times.endTime = this.endTime
				times.belong = res
				this.$emit('exportErrorCompanys',times)
			},
			exportOnProduct(){
				let times = {}
				times.startTime = this.startTime
				times.endTime = this.endTime
				this.$emit('exportOnProduct',times)
			}
		},
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
	.single-button{
		display: block;
		height:50px;
		width:calc(25vw - 30px);
		margin:0 auto;
	}
	.description{
		display: block;
		width:calc(25vw - 30px);
		margin:0 auto;
		font-size:15px;
		line-height: 20px;
		max-height: calc(33.33vh - 100px);
	}
	.close-it{
		position: fixed;
		top:-10px;
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
		padding-top:40px;
	}
	.row{
		display: flex;
		margin-top:10px;
		width: calc(100vw - 40px);
		height:calc(33.33vh - 20px);
	}
	.col-3{
		flex:0 0 25%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: #c9e6dc
	}
</style>