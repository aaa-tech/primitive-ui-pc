<template>
  <el-form :model="form">
    <el-form-item label="" :label-width="formLabelWidth">
      <el-upload
        ref="uploadExcel"
        action="https://jsonplaceholder.typicode.com/posts/"
        :limit=limitNum
        :auto-upload="false"
        accept=".xls,.xlsx"
        :before-upload="beforeUploadFile"
        :on-change="fileChange"
        :on-exceed="exceedFile"
        :on-success="handleSuccess"
        :on-error="handleError"
        :file-list="fileList">
        <el-button size="small" plain>选择文件</el-button>
      </el-upload>
      <!-- <el-button size="small" type="primary" @click="uploadFile">立即上传</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data() {
    return {
      limitNum: 1,
      formLabelWidth: '80px',
      form: {
        file: ''
      },
      fileList: [],
      titles:[],
      contents:[],
    }
  },
  methods: {
    // 文件超出个数限制时的钩子
    exceedFile(files, fileList) {
      this.$notify.warning({
        title: '警告',
        message: `只能选择 ${this.limitNum} 个文件，当前共选择了 ${files.length + fileList.length} 个`
      });
    },
    // 文件状态改变时的钩子
    fileChange(file, fileList) {
      console.log('change')
      this.form.file = file.raw

      let fileReader = new FileReader();
      fileReader.readAsBinaryString(this.form.file);
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: 'binary'
          });
          const wsname = workbook.SheetNames[0];//取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容
          // this.texts = []
          let datas = {
            titles:[],
            tableData:[]
          }
          for(let i=0;i<ws.length;i++){
            let obj = {}
            for(let j in ws[i]){
              console.log(j)
              console.log(ws[i][j])
              obj[j] = ws[i][j]
              if(!datas.titles.includes(j)){
                datas.titles.push(j)
              }
            }
            datas.tableData.push(obj)
          }
          this.$emit('transferDatas',datas)
        } catch (e) {
          console.log(e)
          return false;
        }
      };
    },
    // 上传文件之前的钩子, 参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传
    beforeUploadFile(file) {
      console.log('before upload')
      console.log(file)
      let extension = file.name.substring(file.name.lastIndexOf('.')+1)
      let size = file.size / 1024 / 1024
      if(extension !== 'xlsx' && extension !== 'xls') {
        this.$notify.warning({
          title: '警告',
          message: `只能上传.xlsx或者.xls的文件`
        });
      }
      if(size > 10) {
        this.$notify.warning({
          title: '警告',
          message: `文件大小不得超过10M`
        });
      }
    },
    // 文件上传成功时的钩子
    handleSuccess(res, file, fileList) {
      console.log('success')
      console.log(file)
      console.log(fileList)
      this.$notify.success({
        title: '成功',
        message: `文件上传成功`
      });
    },
    // 文件上传失败时的钩子
    handleError(err, file, fileList) {
      this.$notify.error({
        title: '错误',
        message: `文件上传失败`
      });
    },
    uploadFile() {
      this.$refs.uploadExcel.submit()
      //连接后台
    }
  }
}
</script>
<style lang="less">
  .el-form-item__content{
    margin-left:0!important;
  }
</style>