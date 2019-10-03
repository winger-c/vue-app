<template>
  <div class="vip-container">
    <el-form :label-position="right" label-width="50px" >
      <el-form-item label="账号">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="input_password" show-password></el-input>
      </el-form-item>
        <div class="button-group">
          <el-button type="primary" class="login-btn">登录</el-button>
          <el-button type="primary" class="register-btn">注册</el-button>
        </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        input_password:''
      }
    }
  }
</script>

<style scoped lang="scss">
  .vip-container{
    form{
      padding:20px;
    }
    .button-group{
      display: flex;
      justify-content: center;
      .login-btn,.register-btn{
        width:30%;
      }
    }
  }

</style>
