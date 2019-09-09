<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12 banner">
        <h1 class="text-xs-center ng-binding">登录</h1>
        <p class="text-xs-center">
          <a>需要注册？</a>
        </p>
        <div style="margin: 20px;"></div>
        <el-form label-position="right" label-width="80px">
          <el-form-item label="邮箱：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <el-button type="success" class="btn-submit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  min-height: 78vh;
  .row {
    display: flex;
    justify-content: center;
    .banner {
      h1,
      p {
        text-align: center;
      }
      a {
        cursor: pointer;
        color: #5cb85c;
      }
      .btn-submit{
        float: right;
      }
    }
  }
}
</style>
