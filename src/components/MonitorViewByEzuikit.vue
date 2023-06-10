<template>
    <div class="monitor-box">
        <div id="monitorInstanse" ref="monitorInstanse" class="monitor" :class="{watermark:!loading && EZUIKitLoaded }"></div>
        <div class="controller-panel" v-if="EZUIKitLoaded && visibleControl">
            <ul>
                <li @click="getCapture()">截图</li>
            </ul>
        </div>
        <Spin fix size="large" v-if="loading">
            <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
            <p class="loading-content">加载中...</p>
            <div class="loading-slot">
                <div class="logo">
                    <img src="../../public/images/logo.dark.png">
                </div>
                <p class="logo-title">| 实时画面</p>
            </div>
        </Spin>
        <div class="load-msg" v-if="errorMsg != ''">
            <div class="msg-icon">
                <Icon type="android-cancel"></Icon>
            </div>
            <div class="msg-content">
                <p>{{errorMsg}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import $axios from "axios";
import monitorJSONList from "@/assets/monitor.json";
export default {
    name: "monitor",
    props: {
        companyCode: {
            type: String,
            default: "shxh002"
        },
        companyName: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            EZUIKit: null,
            accessToken: "",
            loading: true,
            visibleControl: true,
            errorMsg: "",
            Cookie: function() {
                this.set = function(c_name, value, expiredTime) {
                    document.cookie =
                        c_name +
                        "=" +
                        escape(value) +
                        ";expires=" +
                        expiredTime.toGMTString() +
                        ";path=/";
                };
                this.get = function(c_name) {
                    if (document.cookie.length > 0) {
                        let c_start = document.cookie.indexOf(c_name + "=");
                        if (c_start != -1) {
                            c_start = c_start + c_name.length + 1;
                            let c_end = document.cookie.indexOf(";", c_start);
                            if (c_end == -1) c_end = document.cookie.length;
                            return unescape(
                                document.cookie.substring(c_start, c_end)
                            );
                        }
                    }
                    return null;
                };
            }
        };
    },
    mounted() {
        const atoken = this.Cookies.get("monitorAccessToken");
        if (atoken !== null) {
            this.accessToken = atoken;
            this.createEzuikit();
        } else {
            this.getToken(this.createEzuikit);
        }
    },
    computed: {
        realSrc() {
            return this.getMonitorUrl(this.companyCode);
        },
        Cookies() {
            return new this.Cookie();
        },
        monitorList() {
            return monitorJSONList;
        },
        EZUIKitLoaded() {
            return this.EZUIKit != null;
        }
    },
    methods: {
        getToken(callback) {
            $axios({
                url:
                    "https://bird.ioliu.cn/v1?url=" +
                    "https://open.ys7.com/api/lapp/token/get",
                method: "POST",
                data: {
                    appKey: "8f16fbcb698b4ed09a22bb8ec319ff0c",
                    appSecret: "445590eae9d23cf94571438e6ff1015c"
                }
            })
                .then(result => {
                    const res = result.data;
                    if (res.code == 200) {
                        this.accessToken = res.data.accessToken;
                        this.Cookies.set(
                            "monitorAccessToken",
                            res.data.accessToken,
                            new Date(res.data.expireTime)
                        );
                        callback && callback();
                    }
                })
                .catch(err => {
                    this.errorMsg = "无法获取accessToken";
                    this.loading = false;
                    console.dir(err);
                });
        },
        createEzuikit() {
            try {
                this.errorMsg = "";
                const parentNode =
                    this.$refs.monitorInstanse.parentElement ||
                    this.$refs.monitorInstanse.parentNode;
                this.EZUIKit = new EZUIKit.EZUIPlayer({
                    id: "monitorInstanse",
                    autoplay: true,
                    url: this.realSrc.SD,
                    accessToken: this.accessToken,
                    decoderPath: "ezuikit",
                    width: parentNode.offsetWidth,
                    height: parentNode.offsetWidth * 0.5,
                    handleError: this.handleError,
                    handleSuccess: this.handleSuccess
                });
            } catch (error) {
                console.error(error);
            }
        },
        handleSuccess() {
            this.loading = false;
            let resizeFunc = window.onresize;
            window.onresize = () => {
                resizeFunc();
                if (this.$refs.monitorInstanse) {
                    const parentNode =
                        this.$refs.monitorInstanse.parentElement ||
                        this.$refs.monitorInstanse.parentNode;
                    let realCanvasList = Array.prototype.slice.call(
                        this.$refs.monitorInstanse.querySelectorAll("canvas")
                    );
                    let realCanvasContainer = this.$refs.monitorInstanse.querySelector(
                        ".parent-wnd>div"
                    );

                    let w = parentNode.offsetWidth;
                    let h = parentNode.offsetWidth * 0.5;

                    parentNode.style.width = w + "px";
                    parentNode.style.height = h + "px";

                    realCanvasContainer.style.width = w + "px";
                    realCanvasContainer.style.height = h + "px";
                    realCanvasList.forEach(element => {
                        element.setAttribute("width", w);
                        element.setAttribute("height", h);
                    });
                }
            };
            this.$Message.success("载入成功");
        },
        handleError(err) {
            if (this.$refs.monitorInstanse) {
                this.$refs.monitorInstanse.parentElement.removeChild(
                    this.$refs.monitorInstanse
                );
            }
            this.loading = false;
            this.visibleControl = false;
            console.info(err.retcode);
            // switch (err.retcode) {
            //     case value:
            //         this.errorMsg = `当前访问人数过多，请稍后重试。(${err.retcode})`;
            //         break;
            //     default:
            //         this.errorMsg = `${err.msg} (${err.retcode})`;
            //         break;
            // }
            this.$Notice.error({
                title: "出现异常",
                desc: `${err.msg} 错误码:${err.retcode}`
            });
        },
        getMonitorUrl(companyCode) {
            let monitorCode = this.monitorList[companyCode];
            return {
                SD: `ezopen://open.ys7.com/${monitorCode}/1.live`,
                HD: `ezopen://open.ys7.com/${monitorCode}/1.hd.live`,
                REC: `ezopen://open.ys7.com/${monitorCode}/1.rec`
            };
        },
        getCapture() {
            function dateFormat(unix) {
                var date = new Date(unix);
                let Y = date.getFullYear();
                let M =
                    date.getMonth() + 1 < 10
                        ? "0" + (date.getMonth() + 1)
                        : date.getMonth() + 1;
                let D = date.getDate();
                let h = date.getHours();
                let m = date.getMinutes();
                let s = date.getSeconds();
                return `${Y}${M}${D}${h}${m}${s}`;
            }
            var callback = iTime => {
                let fileName = `${this.companyName}_${dateFormat(iTime)}`;
                this.EZUIKit.capturePicture(0, fileName);
                this.$Message.success("截图成功");
            };
            this.EZUIKit && this.EZUIKit.getOSDTime(callback);
        }
    }
};
</script>

<style lang="less" scoped>
.monitor-box {
    min-width: 100%;
    min-height: 300px;
    width: 100%;
    height: 100%;
    position: relative;
    background: rgb(76, 75, 75);
}
.monitor {
    width: 100%;
    height: 100%;
    position: relative;
    &.watermark /deep/ .parent-wnd > div {
        &::before {
            content: "| 实时画面";
            position: absolute;
            bottom: 20px;
            left: 155px;
            z-index: 999;
            font-size: 15px;
            color: #ffffff;
            user-select: none;
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 130px;
            height: 20px;
            z-index: 999;
            background-image: url(../../public/images/logo.png);
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
}
.loading-slot {
    display: flex;
    justify-content: space-between;
    .logo {
        width: 100px;
        height: 15px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .logo-title {
        font-size: 13px;
        color: #000;
        margin-left: 4px;
    }
}

.controller-panel {
    @ratio: 40px;
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    height: 100%;
    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;
        transition: all 0.2s;
    }
    &:hover {
        ul {
            opacity: 1;
            visibility: visible;
        }
        &:after {
            background: rgba(0, 0, 0, 0.3);
        }
    }
    ul {
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 3;
        width: @ratio;
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        li {
            width: @ratio;
            height: @ratio;
            margin-bottom: 10px;
            background-color: #ffffff;
            color: #000000;
            font-size: 14px;
            font-weight: 700;
            list-style: none;
            list-style-type: none;
            text-align: center;
            line-height: @ratio;
            letter-spacing: 2px;
            border-radius: 50%;
            cursor: pointer;
            user-select: none;
        }
    }
}

.load-msg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    color: #ffffff;

    .msg-icon {
        width: 30px;
        height: 30px;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        margin: 10px 0;
    }
    .msg-content {
        font-size: 16px;
        text-align: center;
    }
}
</style>
