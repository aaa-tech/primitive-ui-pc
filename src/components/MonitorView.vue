<template>
    <div ref="monitorInstanse" class="monitor"></div>
</template>

<script>

import '@/libs/dplayer/dist/DPlayer.min.css'
import DPlayer from '@/libs/dplayer/dist/DPlayer.min.js'

export default {
  name: 'monitor',
  props: {
    src: {
      type: [String, Array],
      default: '',
      required: true
    }
  },
  data () {
    return {
      dp: null
    }
  },
  beforeDestroy () {
    this.dp && this.dp.destroy()
  },
  mounted () {
    this.dp = new DPlayer({
      container: this.$refs.monitorInstanse,
      live: true,
      autoplay: true,
      logo: './images/logo.png',
      video: {
        url:
                    'http://hls01open.ys7.com/openlive/3dd48e96498d473d8a4d59b3aa4844a4.m3u8',
        type: 'hls'
      },
      contextmenu: [
        {
          text: '营口市污染源监测系统'
        }
      ]
    })

    this.dp.on('destroy', function () {
      window.dplayerHls && window.dplayerHls.destroy()
      console.log('我被销毁啦')
    })
  },
  computed: {
    realSrc () {
      if (Array.isArray(this.src)) {
        return this.src.join(',')
      } else {
        return this.src
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.monitor {
    width: 100%;
    height: 100%;
    & /deep/ .dplayer-menu {
        & .dplayer-menu-item:last-child,
        & .dplayer-menu-item:nth-last-child(2) {
            display: none;
        }
    }
    & /deep/ .dplayer-logo {
        max-width: 150px;
        max-height: 20px;
        top: auto;
        bottom: 20px;
    }
}
</style>
