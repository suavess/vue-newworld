import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/permission'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.filter('filterHtml', val => {
  return val.replace(/<[^>]*>/g, '').substr(0, 30) + '......'// 去除文字的<...></...>标签
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
