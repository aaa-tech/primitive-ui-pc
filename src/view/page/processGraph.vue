<template>
	<div>
		<div id="svg-cover-canvas">
			<div class="down-load" @click="downloadGraph">下载</div>
			<svg xmlns:xlink="http://www.w3.org/1999/xlink" id="svg-canvas" :width="width" :height="height"></svg>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'procesGraph',
		props: ['companyCodeForGraph','companyName'],
		data() {
			return {
				width: 960,
				height: 600,
			}
		},
		methods: {
			downloadGraph() {
				saveSvgAsPng(d3.select('svg').node(), this.companyName + '.png', {scale: 2,backgroundColor:"#ffffff",encoderOptions:1.0});
			}
		},
		mounted() {
			let companyCode = this.companyCodeForGraph
			let companyGraph = window.companyGraphs[companyCode]
			console.log(companyGraph)
			if (!companyGraph) {
				return
			}
			companyGraph.nodes.map(item=>{
				item.label = item.text
				item.id = item.index
				if(item.equipFlg){
					item.class = 'type-out'
				}else{
					item.class = 'type-on'
				}
			})
			let g = new dagreD3.graphlib.Graph().setGraph({}).setDefaultEdgeLabel(() => ({}))
			companyGraph.nodes.forEach((node, i) => {
				if (!!node.statu) {
					if(node.statu.includes('异常')){
						if (node.statu == '生产异常') {
							node.class = 'type-Red-p'
						} else {
							node.class = 'type-Red-c'
						}
						g.setNode(node.id, {label:node.label,class:node.class,id:node.id})
					}else{
						if (node.statu == '开机正常') {
							node.class = 'type-Green'
						} else {
							node.class = 'type-Gray'
						}
						g.setNode(node.id, {label:node.label,class:node.class,id:node.id})
					}
				} else {
					g.setNode(node.id, {label:node.label,class:node.class,id:node.id})
				}
			})
			g.nodes().forEach(function (v) {
				let node = g.node(v)
				node.rx = node.ry = 5
			})
			companyGraph.edges.forEach((edge, i) => {
				if (edge.statu.includes('异常')) {
					edge.info = {
						arrowheadClass: 'arrowhead',
						style: 'stroke: red'
					}
					g.setEdge(parseInt(edge.from), parseInt(edge.to), edge.info)
				} else {
					g.setEdge(parseInt(edge.from), parseInt(edge.to))
				}
			})
			let render = new dagreD3.render()
			let svg = d3.select('svg')
			console.log(svg)
			let svgGroup = svg.append('g')
			render(d3.select('svg g'), g)
			if (svg.attr('width') < g.graph().width) {
				this.width = g.graph().width
			}
			let xCenterOffset = (svg.attr('width') - g.graph().width) / 2
			if (companyGraph.nodes.length < 10) {
				svgGroup.attr('transform', 'translate(' + xCenterOffset + ', 20)')
			}
			svg.attr('height', g.graph().height + 40)
		},
	}
</script>

<style id="css">
	g.type-Red-p>rect {
		stroke: #ff7979;
		fill: #ff7979;
	}
	g.type-out>rect{
		stroke: #f90;
		fill:#f90;
	}
	g.type-Red-c>rect {
		stroke: #ff7979;
		fill: #bdc3c7;
	}

	g.type-Green>rect {
		fill: #00ffd0;
	}

	g.type-Gray>rect {
		fill: #bdc3c7;
	}

	text {
		font-weight: 300;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serf;
		font-size: 14px;
	}

	.node rect {
		stroke: #999;
		fill: #fff;
		stroke-width: 1.5px;
	}
	.edgePath path.path {
		stroke: #333;
		fill: none;
		stroke-width: 1.5px;
	}

	.arrowhead {
		stroke: red;
		fill: red;
		stroke-width: 1.5px;
	}
</style>
<style scoped>
	.down-load{
		font-size:16px;
		width:92px;
		color:#fff;
		height:32px;
		line-height: 32px;
		cursor:pointer;
		background-color:#2d8cf0;
		border-radius: 5px;
		text-align: center;
	}
</style>