<template>
  <div class="comment_container">
    <h3>评论区</h3>
    <div v-for="item in commentData" class="part-box">
      <p class="commentor-msg"><span class="commentor">{{item.name}}</span>
        <span class="comment-date">{{item.date | dateFormat("YYYY-MM-DD")}}</span></p>
      <p class="comment-msg">{{item.msg}}</p>
    </div>
    <h3>发表评论</h3>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="吐槽不得多于120字"
      maxlength="240"
      v-model="textarea">
    </el-input>
    <el-row>
      <el-button type="primary" @click.prevent="add()">{{send}}</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "comment",
    data() {
      return {
        textarea: '',
        send: '发送',
        commentData: [{
          date: '2016-05-02',
          name: '王小虎',
          msg: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          msg: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          msg: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          msg: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      add() {
        var comment = {date: new Date(), msg: this.textarea,name:'匿名用户'}
        this.commentData.push(comment);
        this.textarea = ""
      }
    }
  }
</script>

<style scoped lang="scss">
  .comment_container {
    .part-box {
      padding: 10px;
      border-bottom: 1px solid #ccc;

      .commentor-msg {
        display: flex;
        justify-content: space-between;
      }
      .comment-msg{
        line-height:150%;
      }
    }

    .el-button--primary {
      width: 100%;
      background: dodgerblue;
      color: white;
      height: 45px;
    }
  }
</style>
