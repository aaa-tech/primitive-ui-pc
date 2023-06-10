<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  /*width: 550px;*/
  position: relative;
  left: 25%;
  margin: 0 auto;
  margin-right: 20px;
}

.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <Layout style="height: 100%" class="main">
    <Header style="z-index:550;position: fixed; width: 100%; background: #2d8cf0;">
      <Row type="flex" justify="end" >
        <Col span="13">
          <div style="display:flex;align-items:center;height:64px;">
            <img src="/images/logo.png" style="width: 240px; height: 30px;">
          </div>
        </Col>
        <Col span="10">
          <Menu mode="horizontal" theme="primary" accordion :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
            <!-- <MenuItem name="companyList"><Icon type="social-buffer"></Icon>企业一览</MenuItem>
            <Submenu name="adminMenu" v-if="menuRole">
              <template slot="title"><Icon type="android-settings"></Icon>系统管理</template>
                <MenuItem name="userManage">人员管理</MenuItem>
                <MenuItem name="companyManage">企业管理</MenuItem>
                <MenuItem name="deceiveManage">设备管理</MenuItem>
            </Submenu> -->
          </Menu>
        </Col>
        <Col span="1">
          <div>
            <user :user-avator="userAvator" />
          </div>
        </Col>
      </Row>
    </Header>
    <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px', height: '100%'}">
        <router-view/>
    </Content>
  </Layout>
</template>
<script>
import sideMenu from './components/side-menu'
import headerBar from './components/header-bar'
import tagsNav from './components/tags-nav'
import user from './components/user'
import { mapMutations, mapActions } from 'vuex'
import { getNewTagList } from '@/libs/util'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import './main.less'
export default {
  name: 'Main',
  components: {
    sideMenu,
    headerBar,
    tagsNav,
    user
  },
  data () {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      menuRole: true
    }
  },
  computed: {
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    userAvator () {
      return this.$store.state.user.avatorImgPath
    },
    cacheList () {
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)) : []
    },
    menuList () {
      return this.$store.getters.menuList
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag'
    ]),
    ...mapActions([
      'handleLogin'
    ]),
    turnToPage (name) {
      this.$router.push({
        name: name
      })
    },
    handleCollapsedChange (state) {
      this.collapsed = state
    },
    handleCloseTag (res, type) {
      this.setTagNavList(res)
      if (type === 'all') this.turnToPage('home')
    },
    handleClick (item) {
      this.turnToPage(item.name)
    },
    setMenuItem () {
      this.$store.dispatch('getUserInfo').then(user => {
        if (user.access.includes('A')) {
          this.menuRole = true
        } else {
          this.menuRole = false
        }
      })
    }
  },
  watch: {
    '$route' (newRoute) {
      this.setBreadCrumb(newRoute.matched)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    }
  },
  mounted () {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setTagNavList()
    this.addTag(this.$store.state.app.homeRoute)
    this.setBreadCrumb(this.$route.matched)
    // this.setMenuItem()
  }
}

</script>
