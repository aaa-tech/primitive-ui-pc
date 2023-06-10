import Axios from 'axios'
import baseURL from '_conf/url'
import {
	Message
} from 'iview'
import Cookies from 'js-cookie'
import {
	TOKEN_KEY
} from '@/libs/util'
class httpRequest {
	constructor() {
		this.options = {
			method: '',
			url: ''
		}
		// 存储请求队列
		this.queue = {}
	}
	// 销毁请求实例
	destroy(url) {
		delete this.queue[url]
		const queue = Object.keys(this.queue)
		return queue.length
	}
	// 请求拦截
	interceptors(instance, url) {
		// 添加请求拦截器
		instance.interceptors.request.use(config => {
			if (!config.url.includes('api/login') && !config.url.includes('test/')) {
				config.headers['x-access-token'] = Cookies.get(TOKEN_KEY)
			}
			// Spin.show()
			// 在发送请求之前做些什么
			return config
		}, error => {
			// 对请求错误做些什么
			return Promise.reject(error)
		})
		// 添加响应拦截器
		instance.interceptors.response.use((res) => {
			let {data} = res
			if(!data.code){
				return data
			}
			const is = this.destroy(url)
			if (!is) {
				setTimeout(() => {
					// Spin.hide()
				}, 500)
			}
			if (!(data instanceof Blob)) {
				if (data.code !== 200) {
					// 后端服务在个别情况下回报201，待确认
					if (data.code === 401 || data.code === 403) {
						Cookies.remove(TOKEN_KEY)
						window.location.href = '/#/login'
						Message.error('未登录，或登录失效，请重新登录')
					}
					if (data.code === 202) {
						Message.error(data.data)
					}
					return false
				} else {
					// if (data && data.isSuccess && data.errorMessage == "") {
					//     Message.info({
					//         content: "处理成功",
					//         duration: 20,
					//         closable: true
					//     })
					// } else if(data && data.isSuccess && data.errorMessage != "") {
					//     Message.info({
					//         content: data.errorMessage,
					//         duration: 20,
					//         closable: true
					//     })
					// } else {
					//     Message.error({
					//         content: "处理失败,请重试",
					//         duration: 20,
					//         closable: true
					//     })
					// }
				}
			}
			return data
		}, (error) => {
			if (error.response.status === 403) {
				Cookies.remove(TOKEN_KEY)
				window.location.href = '/#/login'
				Message.error('未登录，或登录失效，请重新登录')
				return
			}
			Message.error('服务内部错误')
			// 对响应错误做点什么
			return Promise.reject(error)
		})
	}
	// 创建实例
	create() {
		let conf = {
			baseURL: baseURL,
			// timeout: 2000,
			headers: {
				'Accept': 'application/json, text/plain',
				'Content-Type': 'application/json; charset=utf-8',
				'X-URL-PATH': location.pathname
			}
		}
		// Axios.defaults.withCredentials=true
		return Axios.create(conf)
	}
	create8013() {
		let conf = {
			baseURL: 'http://114.116.38.171:8013/',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			}
		}
		return Axios.create(conf)
	}
	createNormal() {
		const conf = {
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			}
		}
		// Axios.defaults.withCredentials=true
		return Axios.create(conf)
	}
	// 请求实例
	request(options) {
		let instance
		if(options.url.includes('test/')){
			instance = this.create8013()
		}else{
			instance = this.create()
		}
		this.interceptors(instance, options.url)
		options = Object.assign({}, options)
		this.queue[options.url] = instance
		return instance(options)
	}
	requestNormal(options) {
		var instance = this.createNormal()
		this.interceptors(instance, options.url)
		options = Object.assign({}, options)
		this.queue[options.url] = instance
		return instance(options)
	}
}
export default httpRequest