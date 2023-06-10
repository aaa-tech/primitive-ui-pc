<!--
 * @Author: your name
 * @Date: 2020-03-12 16:03:56
 * @LastEditTime: 2020-11-19 12:41:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hwt-dsq\src\view\components\echartPage.vue
 -->
<template>
	<div id="dg-alter-page" class="all-screen">
		<div class="close-it" @click="closePage">×</div>
		<div class="row">
			<div class="col-12">
				<div class="row" style="height:40px;margin-top:10px;">
					<div class="col-1">
						<uploadfile @transferDatas="getExcelTables"></uploadfile>
						<!-- <input type="file" @change="readFile" accept=".xls,.xlsx"> -->
					</div>
					<el-input class="col-1" v-model="beforeAlterString" placeholder="修改前词语"></el-input>
					<el-input class="col-1" v-model="afterAlterString" placeholder="修改后词语"></el-input>
					<el-button type="primary" @click="alterString">全局修改</el-button>
					<el-button type="primary" @click="alterColName">修改列名</el-button>
					<div class="col-1 row" style="justify-content:flex-end">
						<el-button type="primary" @click="insertRowDialoag = true">插入行</el-button>
						<el-dialog title="插入行" :visible.sync="insertRowDialoag">
							<el-form :model="insertRow">
								<el-form-item label="插入位置" :label-width="formLabelWidth">
									<el-select v-model="insertRow.index" clearable placeholder="请选择插入位置">
										<el-option
											v-for="item in tableData"
											:key="item.index"
											:label="item.index"
											:value="item.index">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="插入几行" :label-width="formLabelWidth">
									<el-select v-model="insertRow.num" placeholder="请选择插入几行">
										<el-option label="1" value="1"></el-option>
										<el-option label="2" value="2"></el-option>
										<el-option label="3" value="3"></el-option>
										<el-option label="4" value="4"></el-option>
									</el-select>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="insertRowDialoag = false" style="margin-right:10px!important">取 消</el-button>
								<el-button type="primary" @click="insertRows">确 定</el-button>
							</div>
						</el-dialog>
					</div>
					<div class="col-1 row" style="justify-content:flex-end">
						<el-button type="primary" @click="deleteRowDialoag = true">删除行</el-button>
						<el-dialog title="删除行" :visible.sync="deleteRowDialoag">
							<el-form :model="deleteRow">
								<el-form-item label="删除位置" :label-width="formLabelWidth">
									<el-select v-model="deleteRow.index" clearable placeholder="默认删除第一行">
										<el-option
											v-for="item in tableData"
											:key="item.index"
											:label="item.index"
											:value="item.index">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="删除几行" :label-width="formLabelWidth">
									<el-select v-model="deleteRow.num" placeholder="请选择删除几行">
										<el-option label="1" value="1"></el-option>
										<el-option label="2" value="2"></el-option>
										<el-option label="3" value="3"></el-option>
										<el-option label="4" value="4"></el-option>
									</el-select>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="deleteRowDialoag = false" style="margin-right:10px!important">取 消</el-button>
								<el-button type="primary" @click="deleteRows">确 定</el-button>
							</div>
						</el-dialog>
					</div>
					<div class="col-1 row" style="justify-content:flex-end">
						<el-button type="primary" @click="insertColDialoag = true">插入列</el-button>
						<el-dialog title="插入列" :visible.sync="insertColDialoag">
							<el-form :model="insertCol">
								<el-form-item label="插入位置" :label-width="formLabelWidth">
									<el-select v-model="insertCol.index" clearable placeholder="默认从第一列插入">
										<el-option
											v-for="item in titles"
											:key="item"
											:label="item"
											:value="item">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="插入列名" :label-width="formLabelWidth">
									<el-input style="width:220px" v-model="insertCol.name" placeholder="请输入插入列名"></el-input>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="insertColDialoag = false" style="margin-right:10px!important">取 消</el-button>
								<el-button type="primary" @click="insertCols">确 定</el-button>
							</div>
						</el-dialog>
					</div>
					<div class="col-1 row" style="justify-content:flex-end">
						<el-button type="primary" @click="deleteColDialoag = true">删除列</el-button>
						<el-dialog title="删除列" :visible.sync="deleteColDialoag">
							<el-form :model="deleteCol">
								<el-form-item label="删除位置" :label-width="formLabelWidth">
									<el-select v-model="deleteCol.name" clearable placeholder="请选择删除列名">
										<el-option
											v-for="item in titles"
											:key="item"
											:label="item"
											:value="item">
										</el-option>
									</el-select>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="deleteColDialoag = false" style="margin-right:10px!important">取 消</el-button>
								<el-button type="primary" @click="deleteCols">确 定</el-button>
							</div>
						</el-dialog>
					</div>
					<div class="col-1 row" style="justify-content:flex-end">
						<el-button type="primary" @click="demandDialoag = true">命令算法</el-button>
						<el-dialog title="命令算法" :visible.sync="demandDialoag">
							<el-form :model="demands">
								<el-form-item label="输入命令" :label-width="formLabelWidth">
									<el-input style="width:220px" v-model="demands.demand" placeholder="请输入插入列名"></el-input>
								</el-form-item>
								<el-form-item label="函数规则" v-if="demands.demand.includes('F')" :label-width="formLabelWidth">
									<el-input style="width:220px" v-model="demands.rules.beforeText" placeholder="字符前加"></el-input>
									<el-input style="width:220px" v-model="demands.rules.old" placeholder="转换前字符"></el-input>
									<el-input style="width:220px" v-model="demands.rules.new" placeholder="转换后字符"></el-input>
									<el-input style="width:220px" v-model="demands.rules.afterText" placeholder="字符后加"></el-input>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="demandDialoag = false" style="margin-right:10px!important">取 消</el-button>
								<el-button type="primary" @click="doDemand">确 定</el-button>
							</div>
						</el-dialog>
					</div>
					<el-button class="dg-alter-print" type="primary" @click="printReport">打印报表</el-button>
				</div>
				<div class="row" style="justify-content:space-between;margin-top:40px;height:calc(100vh - 100px)">
					<div class="col-1">
						<div class="row just-center left-bar">
							<el-button type="primary" @click="concerPosFac">锁定位置与因子</el-button>
						</div>
						<div class="row just-center left-bar">
							<el-button type="primary" @click="alterPosition">选择算法位置</el-button>
						</div>
						<div class="row just-center left-bar">
							<el-button type="primary" @click="alterFactor">选择算法因子</el-button>
						</div>
						<div class="row just-center left-bar">
							<el-button type="primary" @click="addAlgorithmsDialoag = true">添加算法</el-button>
							<el-dialog title="添加算法" :visible.sync="addAlgorithmsDialoag">
								<el-form :model="algorithm">
									<el-form-item label="算法名称" :label-width="formLabelWidth">
										<el-input style="width:220px" v-model="currentAlgorithm.name" placeholder="请输入算法名称">
										</el-input>
									</el-form-item>
									<el-form-item label="计算函数" :label-width="formLabelWidth">
										<el-select v-model="currentAlgorithm.method" clearable placeholder="请选择计算函数">
											<el-option
												v-for="item in methods"
												:key="item.code"
												:label="item.name"
												:value="item.code">
											</el-option>
										</el-select>
									</el-form-item>
									<el-form-item label="函数规则" v-if="currentAlgorithm.method == 'alter'" :label-width="formLabelWidth">
										<el-input style="width:220px" v-model="currentAlgorithm.rules.beforeText" placeholder="字符前加"></el-input>
										<el-input style="width:220px" v-model="currentAlgorithm.rules.old" placeholder="转换前字符"></el-input>
										<el-input style="width:220px" v-model="currentAlgorithm.rules.new" placeholder="转换后字符"></el-input>
										<el-input style="width:220px" v-model="currentAlgorithm.rules.afterText" placeholder="字符后加"></el-input>
									</el-form-item>
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="addAlgorithmsDialoag = false" style="margin-right:10px!important">取 消</el-button>
									<el-button type="primary" @click="addAlgorithms">确 定</el-button>
								</div>
							</el-dialog>
						</div>
						<div class="row just-center left-bar">
							<el-button type="primary" @click="alterAlgorithms">修改算法</el-button>
							<el-dialog title="修改算法" :visible.sync="alterAlgorithmsDialoag">
								<el-form :model="algorithm">
									<el-form-item label="算法名称" :label-width="formLabelWidth">
										<el-input style="width:220px" v-model="currentAlgorithm.name" placeholder="请输入算法名称">
									</el-input>
									</el-form-item>
									<el-form-item label="计算函数" :label-width="formLabelWidth">
										<el-select v-model="currentAlgorithm.method" clearable placeholder="请选择计算函数">
											<el-option
												v-for="item in methods"
												:key="item.code"
												:label="item.name"
												:value="item.code">
											</el-option>
										</el-select>
									</el-form-item>
									<el-form-item label="函数规则" v-if="currentAlgorithm.method == 'alter'" :label-width="formLabelWidth">
										<el-input style="width:220px" v-model="currentAlgorithm.rules.beforeText" placeholder="字符前加"></el-input>
										<el-input style="width:220px" v-model="currentAlgorithm.rules.old" placeholder="转换前字符"></el-input>
										<el-input style="width:220px" v-model="currentAlgorithm.rules.new" placeholder="转换后字符"></el-input>
										<el-input style="width:220px" v-model="currentAlgorithm.rules.afterText" placeholder="字符后加"></el-input>
									</el-form-item>
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="alterAlgorithmsDialoag = false" style="margin-right:10px!important">取 消</el-button>
									<el-button type="primary" @click="alterAlgorithms1">确 定</el-button>
								</div>
							</el-dialog>
						</div>
						<div class="row just-center left-bar">
							<el-button type="primary" @click="deleteAlgorithms">删除算法</el-button>
						</div>
						<div class="row just-center left-bar">
							<el-button type="primary" @click="doAlgorithms">执行算法</el-button>
						</div>
						<div class="row just-center left-bar">
							<el-select @change="selectAlgorithm" v-model="currentAlgorithm.id" clearable placeholder="请选择要执行命令的算法">
								<el-option
									v-for="item in algorithms"
									:key="item.id"
									:label="item.name"
									:value="item.id">
								</el-option>
							</el-select>
						</div>
					</div>
					<div class="col-11" style="background-color:red;">
						<el-table ref="multipleTable" :data="tableData" style="width: 100%;height:calc(100vh - 100px);overflow:auto;" @selection-change="handleSelectionChange" @header-click="headerClick" @cell-click="cellClick">
							<el-table-column type="selection" width="55"></el-table-column>
							<el-table-column v-for="title in titles" :key="title" :prop="title" :label="title">
								<template slot-scope="scope">
									<span v-if="title == 'index'">{{scope.row[title]}}</span>
									<el-input v-else v-model="scope.row[title]">{{scope.row[title]}}</el-input>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import XLSX from 'xlsx'
	import uploadfile from '@/view/components/upLoadFile'
	export default {
		name: 'datePage',
		components:{
			uploadfile
		},
		data() {
			return {
				currentAlgorithm:{
					id:'',
					code:'',
					positions:[],
					factors:[],
					name:'',
					rules:{
						beforeText:'',
						afterText:'',
						old:'',
						new:''
					}
				},
				altPos:false,
				altFac:false,
				multipleSelection:[],
				methods:[
					{
						code:'add',
						name:'加'
					},
					{
						code:'sub',
						name:'减'
					},
					{
						code:'mul',
						name:'乘'
					},
					{
						code:'div',
						name:'除'
					},
					{
						code:'concat',
						name:'合并'
					},
					{
						code:'alter',
						name:'修改'
					}
				],
				addAlgorithmsDialoag:false,
				alterAlgorithmsDialoag:false,
				algorithms:[],//算法集合
				algorithm:{
					id:'',
					code:'',
					positions:[],
					factors:[],
					name:'',
					rules:{
						beforeText:'',
						afterText:'',
						old:'',
						new:''
					}
				},//当前要执行的算法
				texts:[],
				titles:[],
				tableData:[],
				beforeAlterString:'',
				afterAlterString:'',
				insertRowDialoag: false,
				insertColDialoag: false,
				deleteRowDialoag: false,
				deleteColDialoag: false,
				insertRow:{
					index:'',
					num:'1',
				},
				insertCol:{
					index:'',
					name:'',
				},
				deleteRow:{
					index:'',
					num:'1',
				},
				deleteCol:{
					name:'',
				},
				formLabelWidth: '120px',
				R1:['asdf','fdsa','#','th2'],
				demandDialoag:false,
				demands:{
					demand:'',
					rules:{
						beforeText:'',
						afterText:'',
						old:'',
						new:''
					}
				}
			}
		},
		props: [''],
		mounted() {
		},
		methods: {
			doDemand(){
				this.demandDialoag = false
				let demand = this.demands.demand
				this.R1 = [
					this.demands.rules.beforeText,
					this.demands.rules.afterText,
					this.demands.rules.old,
					this.demands.rules.new
				]
				this.superAlgorithm(demand)
			},
			superAlgorithm(res){
				let obj0 = {
					method:'',
					factor:[
					],
					rule:[],//带*的算法不可以是F,rule为空，必须有to(因为没有to就是适配，前面说不能是F)
					to:[],//带*的算法二级obj中不可以有to
					repeat:''//带*的算法二级obj中不可以有repeat
				}
				let obj = Object.assign({}, JSON.parse(JSON.stringify(obj0)))
				res = res.toString()
				//先计算有多少条算法
				let algorithms = []
				if(res.includes('%')){
					algorithms = res.split('%')
				}else{
					algorithms.push(res)
				}
				//对每条算法进行解析
				algorithms.map(item=>{
					if(item.includes('*')){
						let arr = item.split('*')
						obj0.method = arr[0]//obj.method是arr[0],其它是arr[1]
						let arr1
						let arr2
						//obj0.repeat，arr1是其它
						if(arr[1].includes('X')){
							obj0.repeat = 'X' + arr[1].split('X')[1]
							arr1 = JSON.parse(JSON.stringify(item.split('X')[0]))
						}else if(arr[1].includes('Y')){
							obj0.repeat = 'Y' + arr[1].split('Y')[1]
							arr1 = JSON.parse(JSON.stringify(arr[1].split('Y')[0]))
						}else{
							arr1 = JSON.parse(JSON.stringify(arr[1]))
						}
						//obj0.to，arr2是其它
						arr2 = arr1.split('T')[0]
						if(arr1.split('T')[1].includes('&')){
							obj0.to.push(...arr1.split('T')[1].split('&'))
						}else{
							obj0.to.push(arr1.split('T')[1])
						}
						let newArr = arr2.split('+')
						//obj.factor
						for(let i=0;i<newArr.length;i++){
							let obj1 = Object.assign({},JSON.parse(JSON.stringify(obj)))
							let obj2 = Object.assign({},JSON.parse(JSON.stringify(this.matchItem(newArr[i],obj1))))
							obj0.factor.push(obj2)
						}
					}else{
						if(item.includes('X') || item.includes('Y')){
							let items = []
							if(item.includes('X')){
								let begin = item.split('X[')[1].substr(0,1)
								let end = item.split('#')[1].substr(0,1)
								if(end == 0){
									end = this.tableData.length
								}
								item = item.split('X')[0]
								for(let i=Number(begin);i<=end;i++){
									let string = item.myReplace(begin + ',',i + ',')
									items.push(string)
								}
							}else{
								let begin = item.split('Y[')[1].substr(0,1)
								let end = item.split('#')[1].substr(0,1)
								if(end == 0){
									end = this.titles.length
								}
								item = item.split('Y')[0]
								for(let i=Number(begin)+1;i<=end;i++){
									let string = item.myReplace(',' + begin ,',' + i)
									items.push(string)
								}
							}
							for(let i=0;i<items.length;i++){
								let obj1 = Object.assign({},JSON.parse(JSON.stringify(obj0)))
								let obj2 = Object.assign({},JSON.parse(JSON.stringify(this.matchItem(items[i],obj1))))
								this.doSuper(obj2)
							}
						}else{
							obj0 = this.matchItem(item,obj0)
							this.doSuper(obj0)
						}
					}
				})
			},
			//matchItem方法不接收带*字符串
			matchItem(item,obj){
				let newItem
				let newItem1
				//预存批处理到obj.repeat
				if(item.includes('X')){
					obj.repeat = 'X' + item.split('X')[1]
					newItem = JSON.parse(JSON.stringify(item.split('X')[0]))
				}else if(item.includes('Y')){
					obj.repeat = 'Y' + item.split('Y')[1]
					newItem = JSON.parse(JSON.stringify(item.split('Y')[0]))
				}else{
					newItem = JSON.parse(JSON.stringify(item))
				}
				//预存适配到obj.to,方法到obj.method,规则到obj.rule,同时把只含有factor的字符串传给newItem1
				obj.method = newItem.substr(0,1)
				if(item.includes('T')){
					newItem1 = newItem.split('T')[0]
					if(obj.method == 'F'){
						let ruleArr = newItem.split('T')[0].split('{')[1].split('}')[0].split(',')
						newItem1 = newItem1.split('{')[0].split(obj.method)[1]
						obj.rule.push(...this[ruleArr])
					}else{
						newItem1 = newItem1.split(obj.method)[1]
					}
					if(newItem.split('T')[1].includes('&')){
						obj.to.push(...newItem.split('T')[1].split('&'))
					}else{
						obj.to.push(newItem.split('T')[1])
					}
				}else{
					newItem1 = newItem.split('T')[0]
					if(obj.method == 'F'){
						let ruleArr = newItem.split('{')[1].split('}')[0]
						newItem1 = newItem1.split('{')[0].split(obj.method)[1]
						obj.rule.push(...this[ruleArr])
					}else{
						newItem1 = newItem1.split(obj.method)[1]
					}
				}
				if(newItem1.includes('&')){
					obj.factor.push(...newItem1.split('&'))
				}else{
					obj.factor.push(newItem1)
				}
				return obj
			},
			//通过转换的json--obj0,执行算法
			doSuper(obj0){
				if(obj0.factor[0].method){//双层结构
					let algorithm0 = {
						method:obj0.method,
						positions:[],
						factors:[],
						rules:{
							beforeText:'',
							afterText:'',
							old:'',
							new:''
						}
					}
					for(let i=0;i<obj0.to.length;i++){
						let index = obj0.to[i].split(',')[0].split('[')[1]
						let title = obj0.to[i].split(',')[1].split(']')[0]
						let obj = {
							rowIndex:index - 1,
							colIndex:this.titles[title - 1]
						}
						algorithm0.positions.push(obj)
					}
					for(let i=0;i<obj0.factor.length;i++){
						let obj1 = obj0.factor[i]
						let algorithm = this.matchJson(obj1)
						algorithm0.factors.push(...this.doSuperAlgorithm(algorithm))
					}
					this.doSuperAlgorithm(algorithm0)
				}else{//单层结构
					let algorithm = this.matchJson(obj0)
					this.doSuperAlgorithm(algorithm)
				}
			},
			doSuperAlgorithm(algorithm){
				if(algorithm.method == 'A'){
					algorithm.method = 'add'
				}else if(algorithm.method == 'S'){
					algorithm.method = 'sub'
				}else if(algorithm.method == 'M'){
					algorithm.method = 'mul'
				}else if(algorithm.method == 'D'){
					algorithm.method = 'div'
				}else if(algorithm.method == 'C'){
					algorithm.method = 'concat'
				}else if(algorithm.method == 'F'){
					algorithm.method = 'alter'
				}
				let positions = algorithm.positions
				let factors = []
				let rules = algorithm.rules
				for(let i=0;i<algorithm.factors.length;i++){
					let factor = algorithm.factors[i]
					if (isNaN(Number(factor)) && algorithm.method != 'concat' && algorithm.method != 'alter'){
						this.$message.warning('选中参数含有非数字，请重新选择')
						this.algorithm.factors = []
						return
					}
					factors.push(factor)
				}
				if(positions.length > 0){
					if(algorithm.method == 'add'){
						for(let i=0;i<positions.length;i++){
							this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.add(factors)
						}
					}else if(algorithm.method == 'sub'){
						for(let i=0;i<positions.length;i++){
							this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.sub(factors)
						}
					}else if(algorithm.method == 'mul'){
						for(let i=0;i<positions.length;i++){
							this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.mul(factors)
						}
					}else if(algorithm.method == 'div'){
						for(let i=0;i<positions.length;i++){
							this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.div(factors)
						}
					}else if(algorithm.method == 'concat'){
						for(let i=0;i<positions.length;i++){
							this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.concat(factors)
						}
					}else if(algorithm.method == 'alter'){
						for(let i=0;i<positions.length;i++){
							this.tableData[positions[i].rowIndex][positions[i].colIndex] = 
							this.alter(factors[i],rules)
						}
					}
				}else{
					let data
					let data0 = []
					if(algorithm.method == 'add'){
						data = this.add(factors)
						data0.push(data)
					}else if(algorithm.method == 'sub'){
						data = this.sub(factors)
						data0.push(data)
					}else if(algorithm.method == 'mul'){
						data = this.mul(factors)
						data0.push(data)
					}else if(algorithm.method == 'div'){
						data = this.div(factors)
						data0.push(data)
					}else if(algorithm.method == 'concat'){
						data = this.concat(factors)
						data0.push(data)
					}else if(algorithm.method == 'alter'){
						for(let i=0;i<factors.length;i++){
							data = this.alter(factors[i],rules)
							data0.push(data)
						}
					}
					return data0
				}
			},
			matchJson(obj0){
				let algorithm = {
					method:obj0.method,
					positions:[],
					factors:[],
					rules:{
						beforeText:'',
						afterText:'',
						old:'',
						new:''
					},
				}
				if(obj0.rule){
					algorithm.rules.beforeText = obj0.rule[0]
					algorithm.rules.afterText = obj0.rule[1]
					algorithm.rules.old = obj0.rule[2]
					algorithm.rules.new = obj0.rule[3]
				}
				if(obj0.to){
					for(let i=0;i<obj0.to.length;i++){
						let index = obj0.to[i].split(',')[0].split('[')[1]
						let title = obj0.to[i].split(',')[1].split(']')[0]
						let obj = {
							rowIndex:index - 1,
							colIndex:this.titles[title - 1]
						}
						algorithm.positions.push(obj)
					}
				}else{
					if(obj0.method == 'F'){
						for(let i=0;i<obj0.factor.length;i++){
							let index = obj0.factor[i].split(',')[0].split('[')[1]
							let title = obj0.factor[i].split(',')[1].split(']')[0]
							let obj = {
								rowIndex:index - 1,
								colIndex:this.titles[title - 1]
							}
							algorithm.positions.push(obj)
						}
					}else{

					}
				}
				for(let i=0;i<obj0.factor.length;i++){
					let index = obj0.factor[i].split(',')[0].split('[')[1]
					let title = obj0.factor[i].split(',')[1].split(']')[0]
					algorithm.factors.push(this.tableData[index - 1][this.titles[title - 1]])
				}
				return algorithm
			},
			selectAlgorithm(){
				this.algorithm = this.algorithms.find(item=>{
					return item.id == this.currentAlgorithm.id
				})
				this.algorithm.positions = []
				this.algorithm.factors = []
			},
			concerPosFac(){
				this.altPos = false
				this.altFac = false
			},
			alterPosition(){
				this.$refs.multipleTable.clearSelection()
				this.algorithm.positions = []
				this.altPos = true
				this.altFac = false
			},
			alterFactor(){
				this.$refs.multipleTable.clearSelection()
				this.algorithm.factors = []
				this.altFac = true
				this.altPos = false
			},
			handleSelectionChange(val) {
				this.multipleSelection = val
				if(this.altPos){
					this.algorithm.positions = []
					for(let i=0;i<this.multipleSelection.length;i++){
						for(let j=0;j<this.titles.length;j++){
							let obj = {
								rowIndex:val[i].index - 1,
								colIndex:this.titles[j]
							}
							if(obj.colIndex == 'index'){
								continue
							}
							this.algorithm.positions.push(obj)
						}
					}
				}
				if(this.altFac){
					this.algorithm.factors = []
					for(let i=0;i<this.multipleSelection.length;i++){
						for(let j=0;j<this.titles.length;j++){
							let obj = {
								rowIndex:val[i].index - 1,
								colIndex:this.titles[j]
							}
							if(obj.colIndex == 'index'){
								continue
							}
							this.algorithm.factors.push(obj)
						}
					}
				}
			},
			headerClick(e){
				if(this.altPos){
					for(let i=0;i<this.tableData.length;i++){
						let obj = {
							rowIndex:i,
							colIndex:e.label
						}
						if(obj.colIndex == 'index'){
							continue
						}
						this.algorithm.positions.push(obj)
					}
				}
				if(this.altFac){
					for(let i=0;i<this.tableData.length;i++){
						let obj = {
							rowIndex:i,
							colIndex:e.label
						}
						if(obj.colIndex == 'index'){
							continue
						}
						this.algorithm.factors.push(obj)
					}
				}
			},
			cellClick(row,col,cell,ev){
				if(this.altPos){
					let obj = {
						rowIndex:row.index - 1,
						colIndex:col.label
					}
					if(obj.colIndex == 'index'){
						this.$message('index列不可编辑')
						return
					}
					this.algorithm.positions.push(obj)
				}
				if(this.altFac){
					let obj = {
						rowIndex:row.index - 1,
						colIndex:col.label
					}
					if(obj.colIndex == 'index'){
						this.$message('index列不可编辑')
						return
					}
					this.algorithm.factors.push(obj)
				}
			},
			addAlgorithms(){
				this.addAlgorithmsDialoag = false
				this.currentAlgorithm.id = this.algorithms.length + 1
				let data = Object.assign({}, JSON.parse(JSON.stringify(this.currentAlgorithm)))
				this.algorithms.push(data)
				this.algorithm = data
			},
			alterAlgorithms(){
				this.alterAlgorithmsDialoag = true
			},
			alterAlgorithms1(){
				this.alterAlgorithmsDialoag = false
				for(let i=0;i<this.algorithms.length;i++){
					if(this.algorithms[i].id == this.currentAlgorithm.id){
						let data = Object.assign({}, JSON.parse(JSON.stringify(this.currentAlgorithm)));
						this.algorithms[i] = data
						this.algorithm = data
					}
				}
			},
			deleteAlgorithms(){
				if(this.algorithm != ''){
					this.algorithms = this.algorithms.filter(x=>{x.id !== this.algorithm.id})
				}
				this.algorithm = this.algorithms[0]
			},
			doAlgorithms(){
				let positions = this.algorithm.positions
				let factors = []
				let rules = this.algorithm.rules
				for(let i=0;i<this.algorithm.factors.length;i++){
					let factor = this.tableData[this.algorithm.factors[i].rowIndex][this.algorithm.factors[i].colIndex]
					if (isNaN(Number(factor)) && algorithm.method != 'concat' && algorithm.method != 'alter'){
						this.$message.warning('选中参数含有非数字，请重新选择')
						this.algorithm.factors = []
						return
					}
					factors.push(factor)
				}
				if(this.algorithm.method == 'add'){
					for(let i=0;i<positions.length;i++){
						this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.add(factors)
					}
				}else if(this.algorithm.method == 'sub'){
					for(let i=0;i<positions.length;i++){
						this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.sub(factors)
					}
				}else if(this.algorithm.method == 'mul'){
					for(let i=0;i<positions.length;i++){
						this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.mul(factors)
					}
				}else if(this.algorithm.method == 'div'){
					for(let i=0;i<positions.length;i++){
						this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.div(factors)
					}
				}else if(this.algorithm.method == 'concat'){
					for(let i=0;i<positions.length;i++){
						this.tableData[positions[i].rowIndex][positions[i].colIndex] = this.concat(factors)
					}
				}else if(this.algorithm.method == 'alter'){
					for(let i=0;i<positions.length;i++){
						this.tableData[positions[i].rowIndex][positions[i].colIndex] = 
						this.alter(this.tableData[positions[i].rowIndex][positions[i].colIndex],rules)
					}
				}
			},
			insertRows(){
				this.insertRowDialoag = false
				let array1 = []
				let array2 = []
				let newArray = []
				for(let i=0;i<this.insertRow.index;i++){
					array1.push(this.tableData[i])
				}
				newArray.push(...array1)
				for(let i=0;i<this.insertRow.num;i++){
					let obj = {
						index:parseInt(this.insertRow.index) + i + 1
					}
					newArray.push(obj)
				}
				for(let i=this.insertRow.index;i<this.tableData.length;i++){
					this.tableData[i].index = parseInt(this.tableData[i].index) + parseInt(this.insertRow.num)
					array2.push(this.tableData[i])
				}
				newArray.push(...array2)
				this.tableData = newArray
			},
			deleteRows(){
				this.deleteRowDialoag = false
				if(this.deleteRow.index > 0){
					this.tableData.splice(parseInt(this.deleteRow.index - 1),parseInt(this.deleteRow.num))
				}else{
					this.tableData.splice(0,parseInt(this.deleteRow.num))
				}
				for(let i=0;i<this.tableData.length;i++){
					this.tableData[i].index = i + 1
				}
			},
			insertCols(){
				this.insertColDialoag = false
				if(!!this.insertCol.index){
					for(let i=0;i<this.titles.length;i++){
						if(this.titles[i] == this.insertCol.index){
							this.titles.splice(i+1,0,this.insertCol.name)
							return
						}
					}
				}else{
					this.titles.unshift(this.insertCol.name)
				}
				this.tableData.map(item=>{
					item[this.insertCol.name] = ''
				})
			},
			deleteCols(){
				this.deleteColDialoag = false
				this.titles= this.titles.filter((x) => x !== this.deleteCol.name)
				this.tableData.map(item=>{
					delete item[this.deleteCol.name]
				})
			},
			alterString(){//简单的全局替换
				this.tableData.map(item=>{
					for(let i in item){
						if(item[i].includes(this.beforeAlterString)){
							item[i] = item[i].myReplace(this.beforeAlterString,this.afterAlterString)
						}
					}
				})
			},
			alterColName(){
				for(let i=0;i<this.titles.length;i++){
					if(this.titles[i] == this.beforeAlterString){
						this.titles[i] = this.titles[i].myReplace(this.beforeAlterString,this.afterAlterString)
					}
				}
				this.tableData.map(item=>{
					this.$set(item,this.afterAlterString,item[this.beforeAlterString])
					delete item[this.beforeAlterString]
				})
			},
			getExcelTables(res){
				this.titles = []
				this.titles.push('index')
				this.titles.push(...res.titles)
				this.tableData = res.tableData
				for(let i=0;i<this.tableData.length;i++){
					this.tableData[i].index = i+1
				}
			},
			printReport(){//打印当前table为excel
				this.$emit('exportExcel',this.texts)
			},
			readFile(e) {//接收excel中的数据
				const files = e.target.files;
				//如果没有文件名
				if(files.length<=0){
					return false;
				}else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
					console.log('文件传格式不正确');
					return false;
				}
				const fileReader = new FileReader();
				
				fileReader.readAsBinaryString(files[0]);
				fileReader.onload = (ev) => {
					try {
						const data = ev.target.result;
						const workbook = XLSX.read(data, {
							type: 'binary'
						});
						const wsname = workbook.SheetNames[0];//取第一张表
						const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容
						this.texts = []
						for(let i=0;i<ws.length;i++){
							let text = JSON.stringify(ws[i]).split('{')[1].split('}')[0]
							this.texts.push(text)
						}
					} catch (e) {
						return false;
					}
				};
				// fileReader.readAsArrayBuffer(files[0]);
			},
			closePage() {
				this.$emit('cancel', false)
			},
			add(args,tofix) {//加法
				let ds = []
				for(let i=0;i<args.length;i++){
					args[i] = args[i].toString()// 将传入的数据转化为字符串
					let argsArr = args[i].split(".") // 将小数的数据从小数点的位置拆开
					let d = argsArr.length == 2 ? argsArr[1] : "" // 获取数的小数点的长度
					ds.push(d.length)
				}
				let maxLen = Math.max(...ds); // 获取小数点长度较大的值
				let m = Math.pow(10, maxLen); // 这里表示10的小数点长度次方 也就是说如果小数点长度为2 m的值就是100 如果小数点长度是3 m的值就是1000如果不懂请自行查找api
				let result = 0; // 将小数转化为整数后相加在除掉两个数乘过的倍数然后去小数点较长的长度的小数位数
				for(let i=0;i<args.length;i++){
					result = Number((result * m + args[i] * m) / m).toFixed(maxLen)
				}
				if(tofix){//参数用户可以自行决定是否要传递 用来定义要保留的小数长度
					return Number((result).toFixed(tofix))
				}else{
					return result
				}
			},
			sub(args,tofix) {//减法
				let newArgs = JSON.parse(JSON.stringify(args))//深拷贝
				for(let i=0;i<newArgs.length;i++){
					if(i!=0){
						newArgs[i] = -newArgs[i]
					}
				}
				return this.add(newArgs,tofix)
			},
			mul(args,tofix) {//乘法
				let d = tofix
				let m = 0
				let resultVal = 1
				for(let i=0;i<args.length;i++){
					args[i] = args[i].toString()// 将传入的数据转化为字符串
					m = m + args[i].split(".")[1] ? args[i].split(".")[1].length : 0 // 获取多个数字的小数位数的和
					// 乘积的算法就是去掉小数点做整数相乘然后除去10的所有小数位的次方
					resultVal = resultVal * Number(args[i].replace(".", "")) / Math.pow(10, m)
				}
				return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
			},
			div(args,tofix) {//除法
				let newArgs = JSON.parse(JSON.stringify(args))//深拷贝
				for(let i=0;i<newArgs.length;i++){
					if(i!=0){
						newArgs[i] = 1 / newArgs[i]
					}
				}
				return this.mul(newArgs,tofix)
			},
			concat(args){//合并
				let string = ''
				for(let i=0;i<args.length;i++){
					string = string + args[i]
				}
				return string
			},
			alter(arg,rules){//按规则修改
				return this.filterRule(arg,rules)
			},
			filterRule(text,rules){//适配页面定义的规则
				let a = rules.beforeText
				let b = rules.afterText
				let c
				if(text.includes(rules.old)){
					c = text.myReplace(rules.old,rules.new)
				}else{
					c = text
				}
				let d = String(a) + String(c) + String(b)
				return d
			}
		},
	}
</script>
<style scoped>
	.prewrap {
		white-space: pre-line;
	}
	.left-bar{
		margin-top:15px;
	}
	.just-center{
		justify-content: center;
	}
	.dg-alter-print{
		position: fixed;
		top:10px;
		right: 80px;
		width: 120px;
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
	.col-1 {
		flex: 0 0 8.3%;
		background-color: #c9e6dc
	}
	.col-11 {
		flex: 0 0 90%;
		background-color: #c9e6dc
	}
</style>