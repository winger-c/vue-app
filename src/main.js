// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Header} from 'mint-ui';
import app from './App.vue'
import '../node_modules/mint-ui/lib/style.css'
import './clib/mui-master/dist/css/mui.css'




Vue.component(Header.name, Header);

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  render:c => c(app)
})
