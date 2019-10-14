<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <h1 class="text-xs-center ng-binding">登录</h1>
        <p class="text-xs-center">
          <a>需要注册？</a>
        </p>
        <div style="margin: 20px;"></div>
        <el-form label-position="right" label-width="80px" :model="user" :rules="rules" ref="user">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="user.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="user.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="btn-submit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.btn-submit{
  float: right;
}
</style>
