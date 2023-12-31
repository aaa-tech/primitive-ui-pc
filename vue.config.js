const path = require('path')
const fs = require('fs')

const resolve = dir => {
    return path.join(__dirname, dir)
}

const env = process.env.NODE_ENV
fs.writeFileSync(path.join(__dirname, './config/env.js'), `export default '${env}'`)

// 这里需要修改为你线上项目存放的路径
// 比如你打包的文件放到服务器的my-app文件夹，域名为a.com，则应改为
// http(s)://a.com/my-app/
// const BASE_URL = 'https://iview.github.io/iview-admin/'

//const BASE_URL = 'http://114.116.38.171:8080/'
// const BASE_URL = 'http://192.168.0.126/'
const BASE_URL = ''
// const BASE_URL = 'http://127.0.0.1:8887'
// const BASE_URL = 'http://114.116.38.171/'

module.exports = {
    // Project deployment base
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'
    publicPath: BASE_URL,
    lintOnSave:false,
    productionSourceMap: false,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('_conf', resolve('config'))
    }
}