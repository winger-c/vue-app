<template>
  <div class="app-container">
<!--  顶部 Header区域  -->
    <mt-header fixed title="吾购">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
<!-- 中间的 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
<!--  底部 Tabbar 区域  -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip_user">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

</script>

<style lang="scss">
.app-container{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow:hidden;
  .mint-header.is-fixed {
    z-index: 1000;
  }
  .mui-bar-tab{
    z-index: 1000;
  }
}
  .v-enter{
    opacity:0;
    transform:translateX(100%);
  }
  .v-leave-to{
     opacity:0;
     transform:translateX(-100%);
    position: absolute;
   }

  .v-enter-active,
  .v-leave-active{
    transition:all 0.8s ease;
  }
</style>
