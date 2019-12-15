<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <h1 class="text-xs-center ng-binding">登录</h1>
        <p class="text-xs-center">
          <router-link to="/register">需要注册？</router-link>
        </p>
        <div style="margin: 20px;"/>
        <el-form label-position="right" label-width="80px" :model="user" ref="user" :rules="rules">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.trim="user.email"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model.trim="user.password" type="password" @keyup.enter="handleLogin"/>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="btn-submit" @click="handleLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
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
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('user/userLogin', this.user).then(() => {
        this.$router.push('/home')
        this.$message.success('登录成功！')
      })
    }
  }
}
</script>

<style lang="less">
.btn-submit{
  float: right;
}
</style>
