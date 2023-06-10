<template>
	<div style='width: 100%; height: 350px;overflow:auto'>
		<div style='width: 980px; height:320px;' id="TimingDiv">
		</div>
	</div>
</template>
<script>
import * as echarts from 'echarts';
import axios from '@/libs/api.request'
export default {
	name: 'Timing',
	props: ['initValue'],
	data() {
		return {

		}
	},
	// watch: {
	// 	initValue: function () {
	// 		this.initEcharts()
	// 	}
	// },
	mounted() {
		this.initEcharts()
		//this.getAllCompany()
	},
	methods: {
		// getAllCompany() {
		// 		axios.request({
		// 			url: '/company/list',
		// 			method: 'post'
		// 		}).then(data => {
		// 			console.log(data,202367);
		// 		})
		// 	},
		initEcharts() {
			var myChart = echarts.init(document.getElementById("TimingDiv"));
			var colors = ['#75d874', '#c0c0c0']; //三种状态的颜色
			var state = ['开启', '关闭']; //三种状态
			// echart配置
			var option = {
				color: colors,
				tooltip: {//提示框
					formatter: function (params) {
						return params.name + ':<br/>' + params.value[1] + '~' + params.value[2] + '<br/>' + params.value[3];
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
					//interval: 3600  * 2000,   //以一个小时递增 
					//interval: 3600  * 1000,   //以一个小时递增 
					min: '2009-6-1 1:00', //将data里最小时间的整点时间设为min,否则min会以data里面的min为开始进行整点递增
					axisLabel: {
						formatter: function (value) {
							var date = new Date(value); return getzf(date.getHours()) + ':00';
							function getzf(num) {
								if (parseInt(num) < 10) { num = '0' + num; }
								return num;
							}
						},
					}
				},
				yAxis: {
					data: ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#']
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
							var height = api.size([0, 1])[1] * 0.6;

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
						data: [ // 维度0 维度1 维度2
							{
								itemStyle: { normal: { color: colors[0] } },//条形颜色
								value: [0, '2009-06-01 1:00', '2009-06-01 6:00']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
							}, {
								itemStyle: { normal: { color: colors[1] } },
								value: [0, '2009-06-01 6:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[0] } },
								value: [0, '2009-06-01 6:13', '2009-06-01 8:22']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [1, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [1, '2009-06-01 8:22', '2009-06-01 9:10']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [1, '2009-06-01 12:47', '2009-06-01 14:52']
							},
							{
								itemStyle: { normal: { color: colors[0] } },
								value: [2, '2009-06-01 9:10', '2009-06-01 12:47']
							},
							{
								itemStyle: { normal: { color: colors[0] } },
								value: [2, '2009-06-01 14:52', '2009-06-01 17:00']
							},
							{
								itemStyle: { normal: { color: "#C0C0C0" } },
								value: [2, "2009-06-01 00:00:00", "2009-06-01 03:27:39.0"]
							},
							{
								itemStyle: { normal: { color: "#75d874" } },
								value: [1, "2009-06-01 03:27:39.0", "2009-06-01 23:59:59"]
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [3, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [4, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [5, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [6, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [7, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [8, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [9, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [10, '2009-06-01 5:00', '2009-06-01 6:13']
							},
							{
								itemStyle: { normal: { color: colors[1] } },
								value: [11, '2009-06-01 5:00', '2009-06-01 6:13']
							},
						]
					}
				]
			};
			option && myChart.setOption(option);
		}
	},
}
</script>
<style></style>