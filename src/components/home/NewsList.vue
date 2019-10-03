<template>
    <div>
<!--      <ul class="mui-table-view" v-for="item in newsList" :key="item.id">-->
<!--        <li class="mui-table-view-cell mui-media">-->
<!--          <router-link :to="'/home/NewsContent/'+item.id">-->
<!--&lt;!&ndash;        写了v-bind:src=""  是为了执行src里面的内容    &ndash;&gt;-->
<!--            <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">-->
<!--            <div class="mui-media-body">-->
<!--              <h4>{{ item.msg }}</h4>-->
<!--              <p class='mui-ellipsis'><span class="mui-left">发送时间：{{ item.add_time | dateFormat("YYYY-MM-DD") }}</span><span class="on-right">点击次数：{{ item.click }}</span></p>-->
<!--            </div>-->
<!--          </router-link>-->
<!--        </li>-->
<!--      </ul>-->
      <ul class="mui-table-view" v-for="item in newsList" :key="item.id">
        <li class="mui-table-view-cell mui-media">
          <router-link :to="'/home/NewsContent/'+ item.id + '/' +item.authorId">
            <!--        写了v-bind:src=""  是为了执行src里面的内容    -->
            <img class="mui-media-object mui-pull-left" v-bind:src="item.images">
            <div class="mui-media-body">
              <h4>{{ item.title }}</h4>
              <p class='mui-ellipsis'><span class="mui-left">发送时间：{{ item.publicTime | dateFormat("YYYY-MM-DD") }}</span><span class="on-right">点击次数：{{ item.click }}</span></p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import {Toast} from "mint-ui"
  export default {
    // data() {
    //   return {
    //     newsList: []
    //   };
    // },
    // created() {
    //   this.getNewsList()
    // },
    // methods: {
    //   //获取新闻列表
    //   getNewsList() {
    //     this.$http.get("/api/getnewslist").then(result => {
    //       console.log(result)
    //       if (result.body.data.status === 0) {
    //         this.newsList = result.body.data.message;
    //         console.log(this.newsList)
    //         for (var i = 0; i < this.newsList.length; i++) {
    //           this.newsList[i].img_url = require("../../mock/img_url/news_img.png");//这里需要把传过来的相对路径用require得到，以便url-loader加载器对其打包
    //         }
    //
    //       } else {
    //         Toast("获取新闻列表失败！")
    //       }
    //     })
    //   }
    // }
    data() {
      return {
        newsList: [] // 新闻列表
      };
    },
    created() {
      this.getNewsList();
    },
    methods: {
      getNewsList() {
        // 获取新闻列表 https://m.sohu.com/cpn/1?spm=smwp.home.nav-important.1.1569901548880yfkPKNg
        this.$http.get("https://v2.sohu.com/integration-api/mix/region/10318?secureScore=50&page=1&size=24&pvId=1569901551136ZgU0p6R&mpId=0&adapter=default&refer=https%3A%2F%2Fm.sohu.com%2F%3Fspm%3Dsmwp.cpn1.hdn.1.15698917978562P2PgoJ&spm=smwp.home.nav-important.1.1569901548880yfkPKNg&channel=8&requestId=1810250306066169_1569901551161").then(result => {
          //console.log(result)
          if (result.body.data) {
            // 如果没有失败，应该把数据保存到 data 上
            this.newsList = result.body.data;
          } else {
            Toast("获取新闻列表失败！");
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .mui-table-view{
    li{
      .mui-ellipsis{
        font-size:12px;
        color:skyblue;
        display: flex;
        justify-content: space-between;/*运用了flex布局，设置成了两端对齐*/
      }
    }
  }
</style>
