<template>
<div class="settings-page" v-loading="loading">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 col-xs-12">
        <h1 class="text-xs-center">设置</h1>

        <el-form label-position="right" label-width="80px" :model="user" :rules="rules" ref="user">
          <el-form-item label="头像链接">
            <el-input v-model="user.image"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input type="textarea" v-model="user.bio" :rows="6"></el-input>
          </el-form-item>
           <el-form-item label="新密码">
            <el-input type="password" v-model.trim="user.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="btn-submit" @click="handleUpdate">更新设置</el-button>
        <el-button type="danger" plain class="btn-logout" @click="handleLogout">退出登录</el-button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { info, update } from '@/api/user'
export default {
  data () {
    return {
      loading: true,
      user: {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: null
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    handleLogout () {
      this.$store.dispatch('user/logout')
      this.$message.success('退出成功！')
      this.$router.push('/')
    },
    async getInfo () {
      this.loading = true
      await info().then(response => {
        const { data } = response
        this.user = data
      })
      this.loading = false
    },
    async handleUpdate () {
      this.loading = true
      await update(this.user).then(response => {
        if (response) {
          console.log(this.user.password)
          if (this.user.password !== undefined && this.user.password.length > 0) {
            this.$store.dispatch('user/logout')
            this.$message.success('更新个人信息成功！请重新登录！')
            this.$router.push('/login')
          } else {
            this.$store.commit('user/SET_NAME', this.user.username)
            this.$message.success('更新个人信息成功！')
          }
        }
      })
      this.loading = false
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="less">
.el-form{
  margin-top: 40px;
}
.btn-submit{
  float: right;
}
.btn-logout{
  float: left;
}
</style>
