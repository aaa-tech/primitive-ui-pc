<template>
	<div style='width: 100%; height: 350px;overflow:auto'>
		<div style='width: 100%; height:320px;' ref='histogramDiv'>
		</div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		name: 'histogram',
		props: ['initValue'],
		mounted() {
		},
		data() {
			var ggg = 'llllll'
			return {
				divId: '',
				visiteVolume: {},
				option: {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: []
					},
					toolbox: {
						show: true,
						feature: {
							// dataView: { show: true, readOnly: false },
							dataView: {
								show: true,
								title: ' 切换数据统计',
								readOnly: false,
								lang: ['数据视图', '关闭', '导出excel'],
								contentToOption: function (opts) {
									const table = document.querySelector('#tableExcel_Day')
									// console.log(this.initValue.exlname)
									$('#tableExcel_Day').table2excel({
										exclude: '.noExl', // 过滤位置的 css 类名
										filename: '新建文件' + '.xls', // 文件名称
										name: 'Excel Document Name.xls',
										exclude_img: true,
										exclude_links: true,
										exclude_inputs: true
									})
								},
								optionToContent: function (opt) {
									console.log(opt)
									var colName = '序号'
									var typeName = '时间'
									var dataview = opt.toolbox[0].feature.dataView // 获取dataview
									var table = '<div style="line-height:1.6em;text-align:center;font-size:14px;" class="showtable">'
									'</div>'
									table += (function (opt, colName, typeName) {
										var axisData = opt.xAxis[0].data // 获取图形的data数组
										var axisStatus = opt.xAxis[0].status
										var series = opt.series // 获取series
										var num = 0 // 记录序号
										var sum = new Array() // 获取合计数组（根据对应的系数生成相应数量的sum）
										console.log(opt)
										for (var i = 0; i < series.length; i++) {
											sum[i] = 0
										}
										var table = '<table class="bordered" id="tableExcel_Day" border="1"><thead><tr>' +
											'<th>' + colName + '</th>' +
											'<th>' + typeName + '</th>' +
											'<th>' + '当前状态' + '</th>'
										for (var i = 0; i < series.length; i++) {
											table += '<th>' + series[i].name + '</th>'
										}
										table += '</tr></thead><tbody>'
										for (var i = 0, l = axisData.length; i < l; i++) {
											num += 1
											for (var n = 0; n < series.length; n++) {
												if (series[n].data[i]) {
													sum[n] += Number(series[n].data[i])
												} else {
													sum[n] += Number(0)
												}
											}
											table += '<tr>' +
												'<td>' + num + '</td>' +
												'<td>' + axisData[i] + '</td>' +
												'<td>' + axisStatus[i] + '</td>'
											for (var j = 0; j < series.length; j++) {
												if (series[j].data[i]) {
													table += '<td>' + series[j].data[i] + '</td>'
												} else {
													table += '<td>' + 0 + '</td>'
												}
											}
											table += '</tr>'
										}
										table += '</tr></tbody></table>'
										return table
									})(opt, colName, typeName)
									return table
								}
							},
							// magicType: { show: true, type: ['line', 'bar'] },
							restore: {
								show: true
							},
							saveAsImage: {
								default: 'png',
								name: '未命名'
							}
						}

					},
					grid: {
						top: '22%',
						left: '5%',
						right: '5%',
						bottom: '1%',
						containLabel: true
					},
					xAxis: [],
					yAxis: [{
						type: 'value',
						// min: 'dataMin',
						// max: 'dataMax',
						scale: true
						// splitLine:false
					}],
					series: []
				},

				theme: {
					color: [
						'#7ccdd8',
						'#919e8b',
						'#d7ab82',
						'#6e7074',
						'#61a0a8',
						'#efa18d',
						'#787464',
						'#cc7e63',
						'#724e58',
						'#4b565b'
					]
				}
			}
		},
		methods: {
			initData() {
				echarts.registerTheme('vintage', this.theme)
				this.visiteVolume = echarts.init(this.$refs.histogramDiv, 'vintage')
				window.addEventListener('resize', function () {
					if (this.visiteVolume) {
						this.visiteVolume.resize()
					}
				})
				if (this.initValue.legendData && this.initValue.legendData.data.length) {
					this.visiteVolume.showLoading()
					// this.option.yAxis[0].max = (this.initValue.yMax) + 10
					this.option.legend = this.initValue.legendData
					this.option.xAxis = this.initValue.xAxisData
					this.option.series = this.initValue.seriesData
					//强制连接断线
					this.option.series.forEach(item => item.connectNulls = true)
					this.visiteVolume.setOption(this.option)
					this.visiteVolume.hideLoading()
				} else {
					this.visiteVolume.clear()
					this.visiteVolume.hideLoading()
				}
			}
		},
		watch: {
			initValue: function () {
				this.initData()
			}
		}
	}
</script>
<style>
	.showtable {
		text-align: center;
	}
</style>