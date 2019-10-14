<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid col-md-9">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">NewWorld</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/home">主页</router-link>
          </li>
          <li>
            <router-link to="/editor">
              <i class="el-icon-plus"></i>
              发布文章
            </router-link>
          </li>
          <li>
            <router-link to="/settings"><i class="el-icon-setting"></i>设置</router-link>
          </li>
          <li>
            <router-link to="/profile">Suave</router-link>
          </li>
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li>
            <router-link to="/register">注册</router-link>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.navbar{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .container-fluid{
    .navbar-header{
      a{
        font-weight: 700;
        color: #409EFF!important;
        font-size: 18px;
      }
    }
    .navbar-collapse{
      .navbar-right{
        a{
          font-size: 14px;
          color: rgba(0, 0, 0, .4)
        }
        a:hover{
          color: rgba(0, 0, 0)
        }
        .active{
          color: rgba(0, 0, 0)
        }
      }
    }
  }
}
</style>
