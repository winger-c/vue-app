// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Header, Swipe, SwipeItem } from 'mint-ui';//mint-ui按需导入轮播图
import app from './App.vue'
import '../node_modules/mint-ui/lib/style.css'
import './clib/mui-master/dist/css/mui.min.css'
import './clib/mui-master/dist/css/icons-extra.css'//导入字体扩展文件
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component(Header.name, Header)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)



/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  render:c => c(app),
  router
})
