<template>
<!--  <div class="newscontent_container">-->
<!--    <h4 class="title">{{news_content.title}}</h4>-->
<!--    <p class="">-->
<!--      <span>发表时间：{{news_content.add_time | dateFormat("YYYY-MM-DD")}}</span>-->
<!--      <span>点击：{{news_content.click}}次</span>-->
<!--    </p>-->
<!--    <hr/>-->
<!--    <div class="content"></div>-->
<!--  </div>-->
  <div class="newscontent_container">
    <div class="content" v-html="news_content"></div>
    <comment-box></comment-box>
  </div>
</template>

<script>

  //导入评论子组件
  import comment from '../comment.vue'

  export default {
    name: "NewsContent",
    data() {
      return {
        id: this.$route.params.id,
        authorId: this.$route.params.authorId,
        arr:[this.$route.params.id,this.$route.params.authorId],
        news_content:""
      };
    },
    created() {
      this.getNewsContent()
      // console.log( this.arr.join("_"))//结果控制台输出：344496687_120047501
    },
    methods: {
      //获取新闻列表
      getNewsContent() {
        this.$http.get("https://m.sohu.com/a/" + this.arr.join("_")).then(result => {
          //console.log(result.body)
          // if (result.body.data.status === 0) {
          //   this.news_content = result.body.data.message[0];
          //   console.log(this.newsList)
          // } else {
          //   Toast("获取新闻内容失败！")
          // }
          this.news_content=result.body
        })
      }
    },
    components:{
      'comment-box':comment
    }
    // data() {
    //   return {
    //     id: this.$route.params.id,
    //     title:this.$route.params.title
    //     news_content: {}
    //   };
    // },
    // created() {
    //   this.getNewsContent()
    // },
    // methods: {
    //   //获取新闻列表
    //   getNewsContent() {
    //     this.$http.get("/api/getnew/" + this.id).then(result => {
    //       console.log(result)
    //       if (result.body.data.status === 0) {
    //         this.news_content = result.body.data.message[0];
    //         console.log(this.newsList)
    //       } else {
    //         Toast("获取新闻内容失败！")
    //       }
    //     })
    //   }
    // }
  }
</script>

<style scoped lang="scss">
  .newscontent_container{
    h4{
      color:red;
      text-align:center;
      padding: 0 5px;
    }
    p{
      padding:5px 10px;
      color: #2070ff;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
