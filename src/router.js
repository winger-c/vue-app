import VueRouter from 'vue-router'
import HomeContainer from './components/HomeContainer.vue'
import VipUserContainer from './components/VipUserContainer.vue'
import CartContainer from './components/CartContainer.vue'
import SearchContainer from './components/SearchContainer.vue'


var router = new VueRouter({
  routes: [
    {path: '/home', component: HomeContainer},
    {path: '/vip_user', component: VipUserContainer},
    {path: '/shopping', component: CartContainer},
    {path: '/search', component: SearchContainer}
  ],
  linkActiveClass: 'mui-active',//覆盖默认的路由高亮的类
})

//把路由器对象暴露出去
export default router
