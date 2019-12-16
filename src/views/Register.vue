<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <h1 class="text-xs-center ng-binding">注册</h1>
        <p class="text-xs-center">
          <router-link to="/login">已有账号？</router-link>
        </p>
        <div style="margin: 20px;" />
        <el-form ref="user" label-position="right" label-width="80px" :model="user" :rules="rules">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="user.username" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="user.email" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="user.password" type="password" @keyup.enter="handleRegister" />
          </el-form-item>
        </el-form>
        <el-button type="primary" class="btn-submit" @click="handleRegister">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 15, message: '用户名不能大于15位', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRegister() {
      register(this.user).then(response => {
        if (response) {
          this.$message.success('注册成功！')
          this.$router.push('/login')
        }
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
