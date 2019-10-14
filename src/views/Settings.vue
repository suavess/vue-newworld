<template>
<div class="settings-page">
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
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="user.email"></el-input>
          </el-form-item>
           <el-form-item label="新密码">
            <el-input type="password" v-model="user.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="btn-submit">更新设置</el-button>
        <el-button type="danger" plain class="btn-logout">退出登录</el-button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: ''
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
