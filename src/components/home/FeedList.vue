<template>
  <div v-loading="loading">
    <div v-if="articleList.length === 0" style="text-align:center;color:#aaa;">暂无数据</div>
    <div v-else>
      <div v-for="article in articleList" :key="article.id" class="article-preview">
        <div class="article-meta">
          <router-link :to="`/profile/${article.author.id}`">
            <img :src="article.author.image">
          </router-link>
          <div class="info">
            <a class="author" href="">{{ article.author.username }}</a>
            <span class="date">{{ article.updatedAt }}</span>
          </div>
          <el-button type="primary" class="btn-feed" icon="el-icon-star-off" size="mini" plain>{{ article.favoritesCount }}</el-button>
        </div>
        <router-link :to="`/article/${article.id}`" class="preview-link">
          <h1>{{ article.title }}</h1>
          <p>
            {{ article.body | filterHtml }}
          </p>
          <span>查看更多...</span>
          <ul class="tag-list">
            <li v-for="tags in article.tagList" :key="tags.id">
              {{ tags.name }}
            </li>
          </ul>
        </router-link>
      </div>
      <el-pagination
        style="margin-top:10px"
        :hide-on-single-page="true"
        :current-page.sync="queryParam.page"
        :page-size="queryParam.size"
        :total="total"
        layout="prev, pager, next, jumper"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { feedList, favorite, unFavorite } from '@/api/article'
export default {
  data() {
    return {
      loading: true,
      total: 0,
      queryParam: {
        page: 1,
        size: 10
      },
      articleList: []
    }
  },
  created() {
    if (getToken()) {
      this.getArticleList()
    }
  },
  methods: {
    // 分页方法，页码改变时触发
    handleCurrentChange(val) {
      this.queryParam.page = val
    },
    async getArticleList() {
      this.loading = true
      await feedList(this.queryParam).then(response => {
        const { data } = response
        this.articleList = data.rows
        this.total = data.total
      })
      this.loading = false
    },
    // 收藏文章
    handleFavorite(id) {
      favorite({ id: id }).then(response => {
        if (response) {
          this.getArticleList()
          this.$message.success('收藏成功！')
        }
      })
    },
    // 取消收藏文章
    handleUnFavorite(id) {
      unFavorite({ id: id }).then(response => {
        if (response) {
          this.getArticleList()
          this.$message.success('取消收藏成功！')
        }
      })
    }
  }
}
</script>

<style lang="less">
.article-preview {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 18px 0;
  .article-meta {
    margin: 0 0 10px;
    display: block;
    position: relative;
    font-weight: 300;
    img {
      display: inline-block;
      vertical-align: middle;
      height: 32px;
      width: 32px;
      border-radius: 30px;
    }
    .info {
      margin: 0 15px 0 5px;
      display: inline-block;
      vertical-align: middle;
      line-height: 16px;
      .author {
        color: #409eff;
        text-decoration: none;
        font-size: 14px;
      }
      .date {
        color: #bbb;
        font-size: 12px;
        display: block;
      }
    }
    .btn-feed {
      float: right !important;
    }
  }
  .preview-link {
    text-decoration: none;
    cursor: pointer;
    h1 {
      color: #000000;
      font-weight: 600 !important;
      font-size: 20px !important;
      margin-bottom: 5px;
    }
    p {
      font-weight: 300;
      color: #999;
      margin-bottom: 15px;
      font-size: 14px;
      line-height: 15px;
    }
    span {
      max-width: 30%;
      font-size: 12px;
      font-weight: 300;
      color: #bbb;
      vertical-align: middle;
    }
    .tag-list{
      float: right;
      max-width: 50%;
      vertical-align: top;
      padding-left: 0px !important;
      list-style: none !important;
      li{
        font-weight: 300;
        font-size: 1rem !important;
        padding-top: 2px !important;
        padding-bottom: 2px !important;
        border: 1px solid #ddd;
        color: #aaa !important;
        background: none !important;
        float: left;
        padding-right: 1em;
        padding-left: 1em;
        border-radius: 10rem;
        margin-right: 3px;
      }
    }
  }
}
</style>
