<template>
	<div>
		<div class="zcqiye">
			<!-- 正常企业 -->
			<div class="ivu-progress ivu-progress-success ivu-progress-show-info">
				<div class="ivu-progress-outer">
					<div class="ivu-progress-inner">
						<div class="ivu-progress-bg"
							:style="{ width: normalCompanyNum + '%', height: '10px', background: '#19be6b' }">
						</div>
						<div class="ivu-progress-bg"
							:style="{ width: abnormalCompanyNum + '%', height: '10px', background: '#ed3f14' }">
						</div>
						<div class="ivu-progress-bg"
							:style="{ width: offLineCompanyNum + '%', height: '10px', background: '#f90' }">
						</div>
					</div>
				</div>
				<div style="display:flex">
					<span class="ivu-progress-text" style="color: #19be6b">正常企业: {{ normalCompanyNum + '%' }}
						({{ normalCompanyNum2 }} 家)</span>
					<span class="ivu-progress-text" style="color: #19be6b">在产: {{ normalCompanyOnNum + '%' }}
						({{ normalCompanyOnNum2 }} 家)</span>
					<span class="ivu-progress-text" style="color: #19be6b">停产: {{ normalCompanyOffNum + '%' }}
						({{ normalCompanyOffNum2 }} 家)</span>
				</div>
				<div style="display:flex">
					<span class="ivu-progress-text" style="color: #ed3f14">异常企业: {{ abnormalCompanyNum + '%' }}
						({{ abnormalCompanyNum2 }} 家)</span>
				</div>
				<div style="display:flex">
					<span class="ivu-progress-text" style="color: #ed3f14">三分钟: {{ abnormalCompanyNumthreemin + '%' }}
						({{ abnormalCompanyNumthreemin2 }} 家)</span>
					<span class="ivu-progress-text" style="color: #ed3f14">半小时: {{ abnormalCompanyNumhalfhour + '%' }}
						({{ abnormalCompanyNumhalfhour2 }} 家)</span>
					<span class="ivu-progress-text" style="color: #ed3f14">一小时: {{ abnormalCompanyNumonehour + '%' }}
						({{ abnormalCompanyNumonehour2 }} 家)</span>
				</div>
				<div style="display:flex">
					<span class="ivu-progress-text" style="color: #f90">离线企业: {{ offLineCompanyNum + '%' }}
						({{ offLineCompanyNum2 }} 家)</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'cartogram',
		props: ['cartogramdata'],
		data() {
			return {}
		},
		created() {},
		mounted() {},
		watch: {},
		methods: {
		},
		computed: {
			// 正常企业百分比
			normalCompanyNum() {
				const normalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.value === 1
				})
				return Math.round(
					(normalCompanys.length / this.cartogramdata.length) * 100
				)
			},
			// 正常生产企业百分比
			normalCompanyOnNum() {
				const normalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					if (c.status.log.includes('未生产')) {
						return false
					}
					return c.status.value === 1
				})
				return Math.round(
					(normalCompanys.length / this.cartogramdata.length) * 100
				)
			},

			// 正常停产企业百分比
			normalCompanyOffNum() {
				const normalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					if (!c.status.log.includes('未生产')) {
						return false
					}
					return c.status.value === 1
				})
				return Math.round(
					(normalCompanys.length / this.cartogramdata.length) * 100
				)
			},
			// 异常企业百分比
			abnormalCompanyNum() {
				const abnormalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.value === 10
				})
				return Math.round(
					(abnormalCompanys.length / this.cartogramdata.length) * 100
				)
			},
			// 异常三分钟企业百分比
			abnormalCompanyNumthreemin() {
				const abnormalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count < 10 && c.status.value === 10
				})
				return Math.round(
					(abnormalCompanys.length / this.cartogramdata.length) * 100
				)
			},
			// 异常半小时企业百分比
			abnormalCompanyNumhalfhour() {
				const abnormalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count >= 10 && c.status.count < 20
				})
				return Math.round(
					(abnormalCompanys.length / this.cartogramdata.length) * 100
				)
			},
			// 异常一小时企业百分比
			abnormalCompanyNumonehour() {
				const abnormalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count >= 20
				})
				return Math.round(
					(abnormalCompanys.length / this.cartogramdata.length) * 100
				)
			},
			// 离线企业百分比
			offLineCompanyNum() {
				const offLineCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						if(c.status.value != 7){
							return true
						}
					}
					return c.status.value === 5
				})
				return Math.round(
					(offLineCompanys.length / this.cartogramdata.length) * 100
				)
			},
			// 正常企业数量
			normalCompanyNum2() {
				const normalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.value === 1
				})
				return normalCompanys.length
			},
			// 正常生产企业数量
			normalCompanyOnNum2() {
				const normalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					if (c.status.log.includes('未生产')) {
						return false
					}
					return c.status.value === 1
				})
				return normalCompanys.length
			},
			// 正常停产企业数量
			normalCompanyOffNum2() {
				const normalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					if (!c.status.log.includes('未生产')) {
						return false
					}
					return c.status.value === 1
				})
				return normalCompanys.length
			},
			// 异常企业数量
			abnormalCompanyNum2() {
				const abnormalCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.value === 10
				})
				return abnormalCompanys.length
			},
			// 异常三分钟企业数量
			abnormalCompanyNumthreemin2() {
				const a1 = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count < 10 && c.status.value === 10
				})
				return a1.length
			},
			// 异常半小时企业数量
			abnormalCompanyNumhalfhour2() {
				const a2 = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count >= 10 && c.status.count < 20
				})
				return a2.length
			},
			// 异常一小时企业数量
			abnormalCompanyNumonehour2() {
				const a3 = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						return false
					}
					return c.status.count >= 20
				})
				return a3.length
			},
			// 离线企业数量
			offLineCompanyNum2() {
				const offLineCompanys = this.cartogramdata.filter(c => {
					if (Date.now() - Date.parse(c.receiveTime) > 600000) {
						if(c.status.value != 7){
							return true
						}
					}
					return c.status.value === 5
				})
				return offLineCompanys.length
			}
		}
	}
</script>
<style>
	.ivu-progress-inner {
		display: flex;
		overflow: hidden;
	}
	.ivu-progress-bg {
		border-radius: 0;
	}
</style>