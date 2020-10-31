/**
 *  cover-design的路由配置文件
 *  路由分析:
 *    
 *   start 路由 = 》默认首页
 * 
 *   work 路由 =》 点击确认创建一个排版后跳转到的地方
 *        
 *          在work路由页面头部 有一个 toolbar组件
 *           
 * 
 */


import Vue  from  'vue' //引入vue
import VueRouter from 'vue-router' //引入vue-router

Vue.use(VueRouter) //注册vue-router组件



import Start from '../pages/Start/Start.vue'
import Edit from '../pages/Edit/Edit.vue'

//暴露路由接口
export default new VueRouter({
    routes:[
      
        {
          path:'/start',
          component:Start
        },
        {
          path:'/',
          redirect:'/start'
        },
        {
          path:'/edit',
          component:Edit
        }
      
    ]
})


