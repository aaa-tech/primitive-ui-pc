<!--
 * @Author: your name
 * @Date: 2020-03-01 13:46:58
 * @LastEditTime: 2020-09-21 14:46:36
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
					<el-button type="primary" class="single-button" @click="handle">按日期打印<span style="font-size:16px;color:#000;">低电流</span>企业</el-button>
				</div>
				<div class="col-3">
					<el-input v-if="askPass" v-model="passWord" placeholder="请输入电流限值" style="padding:0 10px;"></el-input>
					<el-button v-if="askPass" class="single-button" type="primary" @click="confirmPass">确定</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import util from '@/common/util.js'
	export default {
		name: 'printZero',
		data() {
			return {
				askPass:false,
				max:'',
				passWord:'',
				value1:'',
				startTime:util.formatDate.format(new Date(new Date().getTime() - 24*60*60*1000),'yyyy-MM-dd'),
				endTime:util.formatDate.format(new Date(),'yyyy-MM-dd'),
			}
		},
		methods: {
			closePage(){
				this.$emit('cancel',false)
			},
			confirmPass(){
				let reg = /(^[1-9]\d*$)/
				if(!reg.test(this.passWord)){
					this.$Message.error('请输入正整数');
				}else{
					this.max = this.passWord
					this.passWord = ''
					this.exportErrorCompanys()
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
			handle(){
				this.askPass = true
			},
			exportErrorCompanys(){
				let times = {}
				times.startTime = this.startTime
				times.endTime = this.endTime
				times.max = this.max
				this.closePage()
				this.$emit('exportExcel',times)
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
	.el-button+.el-button{
		margin-left:0!important;
	}
	.single-button{
		display: block;
		height:50px;
		width:calc(25vw - 30px);
		margin:10px auto;
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