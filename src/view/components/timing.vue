<template>
	<div style='width: 100%; height: 350px;overflow:auto'>
		<div style='width: 980px; height:320px;' ref="TimingDiv">
		</div>
	</div>
</template>
<script>
import * as echarts from 'echarts';
export default {
	name: 'Timing',
	props: ['initValue'],
	data() {
		return {

		}
	},
	watch: {
		initValue: function () {
			if (this.initValue.dataList) {
				this.initEcharts()
			}
		}
	},
	methods: {
		initEcharts() {
			var myChart = echarts.init(this.$refs.TimingDiv);
			var colors = ['#75d874', '#c0c0c0']; //三种状态的颜色
			var state = ['生产', '关闭']; //三种状态
			for (let i = 0; i < this.initValue.dataList.length; i++) {
				if (this.initValue.dataList[i].name == "生产") {
					this.initValue.dataList[i]["itemStyle"] = {
						normal: { color: colors[0] },
					};
				} else {
					this.initValue.dataList[i]["itemStyle"] = {
						normal: { color: colors[1] },
					};
				}
				this.initValue.dataList[i].value = eval(this.initValue.dataList[i].value);
			}
			// echart配置
			var option = {
				color: colors,
				tooltip: {//提示框
					formatter: function (params) {
						return params.name + ':'+ params.value[3] + '<br/>' + params.value[1] + '~' + params.value[2]/*  + '<br/>' + params.value[3] */;
					}//数据的值
				},
				legend: {//图例
					data: state,
					top: '5%',
					selectedMode: false, // 图例设为不可点击
					textStyle: {
						color: '#000'//文字颜色
					}
				},
				grid: {//绘图网格
					left: '8%',
					right: '3%',
					top: '10%',
					bottom: '10%',
					containLabel: false
				},
				xAxis: {
					type: 'time',
					scale: true,
					interval: 3600 * 2000,   //以两个小时递增 
					//interval: 3600  * 1000,   //以一个小时递增 
					//min: '2009-6-1 1:00', //将data里最小时间的整点时间设为min,否则min会以data里面的min为开始进行整点递增
					// axisLabel: {
					// 	formatter: function (value) {
					// 		var date = new Date(value); return getzf(date.getHours()) + ':00';
					// 		function getzf(num) {
					// 			if (parseInt(num) < 10) { num = '0' + num; }
					// 			return num;
					// 		}
					// 	},
					// }
				}, yAxis: {
					data: this.initValue.yList,
				},
				series: [
					{ name: state[0], type: 'bar', data: [] },
					{ name: state[1], type: 'bar', data: [] },// 用空bar来显示三个图例
					{
						type: 'custom',
						renderItem: function (params, api) {//开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
							var categoryIndex = api.value(0);//这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
							var start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
							var end = api.coord([api.value(2), categoryIndex]);
							var height = 16;
							return {
								type: 'rect',// 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
								shape: echarts.graphic.clipRectByRect({ // 矩形的位置和大小。
									x: start[0],
									y: start[1] - height / 2,
									width: end[0] - start[0],
									height: height
								}, { // 当前坐标系的包围盒。
									x: params.coordSys.x,
									y: params.coordSys.y,
									width: params.coordSys.width,
									height: params.coordSys.height
								}),
								style: api.style()
							};
						},
						encode: {
							x: [1, 2], // data 中『维度1』和『维度2』对应到 X 轴
							y: 0// data 中『维度0』对应到 Y 轴
						},
						data: this.initValue.dataList,
					}
				]
			};
			option && myChart.setOption(option);
		}
	},
}
</script>
<style></style>