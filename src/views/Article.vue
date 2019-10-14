<template>
  <div class="page">
    <div class="banner">
      <div class="container">
        <h1>Suave</h1>
        <div class="article-mate">
          <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="">
          <div class="info">
            <a href="http://www.baidu.com">Suave</a>
            <span>October 2, 2019</span>
          </div>
          <el-button type="info" plain size="mini" icon="el-icon-plus" style="margin-left:20px">关注Suave</el-button>
          <el-button type="success" plain size="mini" icon="el-icon-star-off">收藏文章(1)</el-button>
        </div>
      </div>
    </div>
    <div class="body">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
    <div class="footer">
      <div class="comment-mate">
        <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="">
        <div class="info">
            <a href="http://www.baidu.com">Suave</a>
            <span>October 2, 2019</span>
        </div>
        <el-button type="info" plain size="mini" icon="el-icon-plus" style="margin-left:20px">关注Suave</el-button>
        <el-button type="success" plain size="mini" icon="el-icon-star-off">收藏文章(1)</el-button>
      </div>
      <comment></comment>
    </div>
  </div>
</template>

<script>
import comment from '@/components/comment.vue'
export default {
  components: {
    comment
  }
}
</script>

<style lang="less" scoped>
.banner {
  background-color: #333;
  color: #fff;
  padding: 30px;
  margin-bottom: 40px;
  .container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    h1 {
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 30px;
    }
    .article-mate {
      display: flex;
      flex-direction: row;
      align-items: center;
      img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .info{
        display: flex;
        flex-direction: column;
        margin-left: 1%;
        a{
          text-decoration: none;
          color: #fff;
        }
        span{
          font-size: 11px;
          color: #bbb;
        }
      }
    }
  }
}
.body{
  margin: 0 auto;
  width: 75%;
  margin-bottom: 70px;
}
.footer{
  border-top: #cccccc 1px solid;
  padding-top: 30px;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .comment-mate{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    img{
      width: 32px;
      border-radius: 50%;
    }
    .info{
      display: flex;
      flex-direction: column;
      margin-left: 2%;
      width: 100px;
      a{
        text-decoration: none;
        color: #409EFF;
      }
      span{
        font-size: 11px;
        color: #bbb;
      }
    }
  }
}
</style>
