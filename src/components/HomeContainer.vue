<template>
  <div class="container">
    <!--   轮播图   -->
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/images/1.jpg" alt="" width="100%"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/2.jpg" alt="" width="100%"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/3.jpg" alt="" width="100%"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/4.jpg" alt="" width="100%"></mt-swipe-item>
    </mt-swipe>

    <!--   九宫格图标   -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../assets/images/homeIcon/menu1.png" alt="" class="">
        <div class="mui-media-body">新闻资讯</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../assets/images/homeIcon/menu2.png" alt="" class="">
        <div class="mui-media-body">图片分享</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../assets/images/homeIcon/menu3.png" alt="" class="">
        <div class="mui-media-body">商品购买</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../assets/images/homeIcon/menu4.png" alt="" class="">
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../assets/images/homeIcon/menu5.png" alt="" class="">
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../assets/images/homeIcon/menu6.png" alt="" class="">
        <div class="mui-media-body">联系我们</div>
      </a></li>
    </ul>

  </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    name: "HomeContainer",
    data() {
      return {
        lunbotuList: []
      }
    },
    created() {
      this.getLunbotu();
    },
    methods: {
      getLunbotu() {
        //获取轮播图数据的方法
        Toast('欢迎来到首页')
        // this.$http.get("https://www.58pic.com/index.php?m=userinfo&a=loginPopupImg").then(result =>{
        //   console.log(result)
        // });//此处存在跨域问题
      }
    }
  };
</script>

<style scoped lang="scss">
  .mint-swipe {
    height: 200px;
  }

  .container {
    padding-bottom: 50px;
  }

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 0;
    padding: 11px 15px;
    vertical-align: top;
    border-right: 0;
    border-bottom: 0;
    img{
      width:50%;
    }
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 12px;
  }
</style>
