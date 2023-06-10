<template>
  <div>
    <div>
      <map-layout map-name="index-map" :maker-data="listData" :marker-id.sync='markerId' :apply-flag.sync="statusModal" @marker-tap="markerTap"></map-layout>
    </div>
    <div id="listDiv">
      <Card>
        <Row>
          <!-- <Col> -->
          <h3>小型环境治理设备监控对象</h3>
          <!-- </Col> -->
        </Row>
        <br>
        <Row>
          <!-- <Col> -->
          <Input placeholder="请输入设备地址或编号">
          <Select slot="prepend" style="width: 80px">
            <Option value="day">地区</Option>
            <Option value="month">编号</Option>
          </Select>
          <Button slot="append" icon="ios-search"></Button>
          </Input>
          <!-- </Col> -->
        </Row>
        <br>
        <Row>
          <!-- <Col> -->
          <Tabs type="card">
            <TabPane label="全部">
              <Table border :columns="columnsWide" :data="dataWide" @on-row-click="markerOnClick"></Table>
            </TabPane>
            <TabPane label="开机">
              <Table border :columns="columnsWide" :data="dataWide" @on-row-click="markerOnClick"></Table>
            </TabPane>
            <TabPane label="未开机">
              <Table border :columns="columnsWide" :data="dataWide" @on-row-click="markerOnClick"></Table>
            </TabPane>
          </Tabs>
          <!-- </Col> -->
        </Row>
        <div style="overflow: hidden;margin-top: 10px">
          <div style="width: 500px">
          <Page :total="40" size="small" show-elevator show-sizer></Page>
          </div>
        </div>
      </Card>
    </div>
  </div>

</template>

<script>
import mapLayout from '../components/mapLayout'
import axios from '@/libs/api.request'
export default {
  name: 'index',
  components: {
    mapLayout
  },
  data () {
    return {
      columnsWide: [{
        title: '地区',
        align: 'center',
        key: 'detail_address'
      },
      {
        title: '编号',
        align: 'center',
        width: 80,
        key: 'monitor_object_sn'
      },
      {
        title: '监控状态',
        align: 'center',
        width: 100,
        key: 'monitor_object_state'
      }
      ],
      dataWide: []
    }
  },
  created () {
    this.getDataAll(true)
  },
  methods: {
    getDataAll (refresh) {
      this.pageLoading = true
      axios.request({
        url: 'jsonData/topJson.json',
        method: 'get'
      }).then(data => {
        this.dataWide = data.result.rows
        this.totalPage = data.result.total
      })
    }
  }
}
</script>

<style>
#listDiv {
  position: absolute;
  overflow: auto;
  width: 454px;
  top: 10%;
  right: 2%;
  z-index: 501;
}

</style>
