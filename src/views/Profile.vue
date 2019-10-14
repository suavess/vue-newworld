<template>
  <div class="page">
    <div class="banner">
      <div class="container">
        <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="" />
        <h3>Suave</h3>
        <p>A place to share your knowledge.</p>
        <el-button type="info" plain size="mini" icon="el-icon-setting" class="btn-editProfile">修改个人信息</el-button>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的文章" name="myArticle"></el-tab-pane>
            <el-tab-pane label="收藏" name="myFeed"></el-tab-pane>
          </el-tabs>
          <article-list></article-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/home/ArticleList'
export default {
  name: 'profile',
  data () {
    return {
      activeName: 'myArticle'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    ArticleList
  }
}
</script>

<style lang="less" scoped>
.banner {
  background-color: #f3f3f3;
  padding: 30px;
  margin-bottom: 40px;
  .container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    img{
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
    h3 {
      font-weight: 700;
    }
    p {
      font-size: 16px;
      color: #aaa;
    }
    .btn-editProfile{
      margin-left: 70%;
    }
  }
}
</style>
