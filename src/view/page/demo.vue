<!--
 * @Author: your name
 * @Date: 2019-12-17 08:24:30
 * @LastEditTime: 2020-03-12 16:14:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-dsq\src\view\page\demo.vue
 -->
<template>
	<div>
		<Switch v-model="switch1" @on-change="change"></Switch>
		<i-switch></i-switch>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				switch1: false
			}
		},
		methods: {
			change(status) {
				this.$Message.info('开关状态：' + status);
			}
		}
	}
</script>