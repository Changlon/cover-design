
import Vue from 'vue'
import App from './App'
import router from './router/index.js' //引入router

Vue.config.productionTip = false //生产你是开发

//引入reset.css重置样式初始化
import './static/css/reset.css'

//引入element-ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)




new Vue({
  el: '#app',
  render: h => h(App), //渲染模板
  router,

})
