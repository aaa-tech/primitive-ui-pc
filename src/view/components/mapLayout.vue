<template>
    <div :id="mapName" class="map-wrap" ref="mapDiv"></div>
</template>

<script>
import { setUserMap, getUserMap } from "@/libs/util";

export default {
    name: "mapLayout",
    data() {
        return {
            map: "",
            infoWin: "",
            mapDivStyle: {}
        };
    },
    props: ["makerData", "markerId", "mapName", "applyFlag", "mapCenter"],
    created() {},
    mounted() {
        this.initMap();
        let userMap = getUserMap();
        this.setMapCenter(userMap);
    },
    watch: {
        makerData: function(val, oldVal) {
            if (val && val.length >= 0) {
                this.addMaker(this.map, this.makerData);
            }
        },
        markerId: function(val, oldVal) {
            if (val) {
                this.addInfoWin(val);
            }
        },
        mapCenter: function() {
            this.setMapCenter(this.mapCenter);
        }
    },
    methods: {
        initMap() {
            const zoom = 10;
            this.map = new T.Map(`${this.mapName}`, {
                attributionControl: false,
                projection: "EPSG:900913",
                minZoom: 4,
                maxZoom: 18
            });
        },
        addInfoWin(markerId) {
            if (this.mapName != "index-map") {
                let infoArr;
                if (this.infoWin) {
                    this.infoWin.closeInfoWindow();
                }
                this.makerData.forEach((item, i) => {
                    if (item.monitor_object_sn == markerId) {
                        infoArr = item;
                    }
                });
                let center = new T.LngLat(infoArr.mapx, infoArr.mapy);
                this.map.centerAndZoom(center, this.map.getZoom());
                let content = `<div class="ivu-modal-content">
              <div class="ivu-modal-header primary-bg">企业信息</div>
              <div class="ivu-modal-body dark">
               <p>企业名称：${infoArr.monitor_object_sn}</p>
               <p>企业编号：${infoArr.devsize}</p>
               </div>
               </div>`;
                this.infoWin = new T.InfoWindow(content, {
                    offset: new T.Point(0, -19),
                    closeButton: true,
                    closeOnClick: true,
                    minWidth: 255,
                    autoPan: true
                });
                this.infoWin.setLngLat(center);
                this.map.addOverLay(this.infoWin);

                let btnElement = document.getElementById(
                    "btn-" + infoArr.monitor_object_sn
                );

                let _this = this;
                this.infoWin.addEventListener("close", function() {
                    _this.$emit("update:markerId", "");
                });
            }
        },
        setMapCenter(markerInfo) {
            // console.log(markerInfo)
            this.map.centerAndZoom(
                new T.LngLat(markerInfo.lng, markerInfo.lat),
                markerInfo.zoomVal ? markerInfo.zoomVal : 18
            );
        },
        addMaker(mapObj, markerData) {
            mapObj.clearOverLays();
            if (markerData.length === 0) {
                return;
            }
            let _this = this;

            let iconUrl;
            markerData.forEach(function(markerInfo, markerIdx, array) {
                let time = Date.parse(markerInfo.receiveTime);
                let nowtime = new Date().getTime();
                let differtime = nowtime - time;
                let rightstatus = markerInfo.status.value;
                if (differtime > 600000 || rightstatus === 5) { // 离线
                    iconUrl = "/images/exception-yellow.png";
                }else if (rightstatus === 7) { // 灰错误
                    iconUrl = "/images/exception-offline.png";
                }else if (rightstatus === 8) { // 橙色错误
                    iconUrl = "/images/exception_orange.png";
                } else if (rightstatus === 10) { // 红错误
                    iconUrl = "/images/exception_red.png";
                } else if (rightstatus === 1) { // 正常
                    iconUrl = "/images/exception_green.png";
                }else{
                    iconUrl = "/images/exception_unknow.png";
                }
                let markerIcon = new T.Icon({
                    iconUrl: iconUrl,
                    iconSize: new T.Point(38, 38),
                    iconAnchor: new T.Point(10, 25)
                });
                let marker = new T.Marker(
                    new T.LngLat(markerInfo.longitude, markerInfo.latitude),
                    {
                        icon: markerIcon,
                        companyCode: markerInfo.companyCode
                    }
                );

                //生成一个文字标记
                let markerwz = new T.Label({
                    // 动态获取公司名字
                    text: markerInfo.companyName,
                    offset: new T.Point(0, 0),
                    position: new T.LngLat(
                        markerInfo.longitude,
                        markerInfo.latitude
                    ),
                    offset: new T.Point(10, -10)
                });

                mapObj.addOverLay(marker);
                mapObj.addOverLay(markerwz); //添加到画面
                // console.log(markerInfo)
                marker.addEventListener("click", e => {
                    _this.$emit("markerOnClick", markerInfo);
                });
                //点击公司名字部分可以打开遮罩
                markerwz.addEventListener("click", e => {
                    _this.$emit("markerOnClick", markerInfo);
                });
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.map-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0px;
    left: 0px;
}
</style>
