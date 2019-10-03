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
import axios from 'axios';
import moment from 'moment'//导入时间格式插件
import ElementUi from 'element-ui'
import {Button,Select,Form,Input,Image} from 'element-ui'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUi)

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Form.name, Form);
Vue.component(Input.name, Input);
Vue.component(Image.name, Image);

//定义全局过滤器,过滤时间
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

Vue.prototype.$ajax = axios; //修改原型链



/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  render:c => c(app),
  router
})
