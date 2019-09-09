<template>
<div>
  <div v-if="isLoading" class="article-preview">正在加载文章...</div>
  <div v-else>
    <!-- <div v-if="articles.length === 0" class="article-preview">
      目前没有文章。。。
    </div> -->
    <div class="article-preview">
      <div class="article-meta">
        <a href="#">
          <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="">
        </a>
        <div class="info">
          <a class="author" href="">KhoaTest</a>
          <span class="date">September 9, 2019</span>
        </div>
        <el-button type="success" class="btn-feed" icon="el-icon-star-off" size="mini" plain>1</el-button>
      </div>
      <a class="preview-link">
        <h1>Troi hom nay mua nhieu</h1>
        <p>hay rat nang</p>
        <span>查看更多...</span>
        <ul class="tag-list">
        </ul>
      </a>
    </div>
    <div class="article-preview">
      <div class="article-meta">
        <a href="#">
          <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="">
        </a>
        <div class="info">
          <a class="author" href="">KhoaTest</a>
          <span class="date">September 9, 2019</span>
        </div>
        <el-button type="success" class="btn-feed" icon="el-icon-star-off" size="mini" plain>1</el-button>
      </div>
      <a class="preview-link">
        <h1>Troi hom nay mua nhieu</h1>
        <p>hay rat nang</p>
        <span>查看更多...</span>
        <ul class="tag-list">
        </ul>
      </a>
    </div>
    <div class="article-preview">
      <div class="article-meta">
        <a href="#">
          <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="">
        </a>
        <div class="info">
          <a class="author" href="">KhoaTest</a>
          <span class="date">September 9, 2019</span>
        </div>
        <el-button type="success" class="btn-feed" icon="el-icon-star-off" size="mini" plain>1</el-button>
      </div>
      <a class="preview-link">
        <h1>Troi hom nay mua nhieu</h1>
        <p>hay rat nang</p>
        <span>查看更多...</span>
        <ul class="tag-list">
        </ul>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      articles: []
    }
  }
}
</script>

<style lang="less">
.article-preview{
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: 18px 0;
  .article-meta{
    margin: 0 0 10px;
    display: block;
    position: relative;
    font-weight: 300;
    img{
      display: inline-block;
      vertical-align: middle;
      height: 32px;
      width: 32px;
      border-radius: 30px;
    }
    .info{
      margin: 0 15px 0 5px;
      display: inline-block;
      vertical-align: middle;
      line-height: 16px;
      .author{
        color: #5cb85c;
        text-decoration: none;
        font-size: 14px;
      }
      .date{
        color: #bbb;
        font-size: 12px;
        display: block;
      }
    }
    .btn-feed{
      float: right!important;
    }
  }
  .preview-link{
    text-decoration: none;
    cursor: pointer;
    h1{
      color: #000000;
      font-weight: 600!important;
      font-size: 20px!important;
      margin-bottom: 5px;
    }
    p{
      font-weight: 300;
      color: #999;
      margin-bottom: 15px;
      font-size: 14px;
      line-height: 15px;
    }
    span{
      max-width: 30%;
      font-size: 12px;
      font-weight: 300;
      color: #bbb;
      vertical-align: middle;
    }
  }
}
</style>
