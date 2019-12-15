<template>
  <div v-loading="loading" class="page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="article-mate">
          <router-link :to="`/profile/${article.author.id}`">
            <img :src="article.author.image">
          </router-link>
          <div class="info">
            <router-link :to="`/profile/${article.author.id}`">{{ article.author.username }}</router-link>
            <span>{{ article.updatedAt }}</span>
          </div>
          <div v-if="loginId===article.author.id">
            <el-button type="info" plain size="mini" icon="el-icon-edit" style="margin-left:20px" @click="$router.push(`/editor/${article.id}`)">编辑文章</el-button>
            <el-button type="danger" icon="el-icon-minus" class="btn-feed" size="mini" plain @click="handleDel">删除文章</el-button>
          </div>
          <div v-else>
            <el-button v-if="article.author.following" type="info" size="mini" icon="el-icon-minus" style="margin-left:20px" @click="handleUnFollow(article.author.id)">取关{{ article.author.username }}</el-button>
            <el-button v-else type="info" plain size="mini" icon="el-icon-plus" style="margin-left:20px" @click="handleFollow(article.author.id)">关注{{ article.author.username }}</el-button>
            <el-button v-if="article.favorited" type="primary" icon="el-icon-star-on" class="btn-feed" size="mini" @click="handleUnFavorite(article.id)">取消收藏({{ article.favoritesCount }})</el-button>
            <el-button v-else class="btn-feed" type="primary" plain icon="el-icon-star-off" size="mini" @click="handleFavorite(article.id)">收藏文章({{ article.favoritesCount }})</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div v-html="article.body" />
      <div class="tags">
        <ul class="tag-list">
          <li v-for="tags in article.tagList" :key="tags.id">
            {{ tags.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="comment-mate">
        <img :src="article.author.image">
        <div class="info">
          <a href="http://www.baidu.com">{{ article.author.username }}</a>
          <span>{{ article.updatedAt }}</span>
        </div>
        <div v-if="loginId==article.author.id" style="display:flex;">
          <el-button type="info" plain size="mini" icon="el-icon-edit" style="margin-left:20px" @click="$router.push(`/editor/${article.id}`)">编辑文章</el-button>
          <el-button type="danger" icon="el-icon-minus" class="btn-feed" size="mini" @click="handleDel">删除文章</el-button>
        </div>
        <div v-else style="display:flex;">
          <el-button v-if="article.author.following" type="info" size="mini" icon="el-icon-minus" style="margin-left:20px" @click="handleUnFollow(article.author.id)">取关{{ article.author.username }}</el-button>
          <el-button v-else type="info" plain size="mini" icon="el-icon-plus" style="margin-left:20px" @click="handleFollow(article.author.id)">关注{{ article.author.username }}</el-button>
          <el-button v-if="article.favorited" type="primary" icon="el-icon-star-on" class="btn-feed" size="mini" @click="handleUnFavorite(article.id)">取消收藏({{ article.favoritesCount }})</el-button>
          <el-button v-else class="btn-feed" type="primary" plain icon="el-icon-star-off" size="mini" @click="handleFavorite(article.id)">收藏文章({{ article.favoritesCount }})</el-button>
        </div>
      </div>
      <comment :id="article.id" />
    </div>
  </div>
</template>

<script>
import { follow, unFollow } from '@/api/profile'
import { findById, favorite, unFavorite, del } from '@/api/article'
import comment from '@/components/comment.vue'
export default {
  components: {
    comment
  },
  data() {
    return {
      loading: false,
      id: null,
      article: {

      }
    }
  },
  computed: {
    loginId() {
      return this.$store.getters.id
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getArticle()
  },
  methods: {
    async getArticle() {
      this.loading = true
      await findById(this.id).then(response => {
        const { data } = response
        this.article = data
      })
      this.loading = false
    },
    // 收藏文章
    handleFavorite(id) {
      favorite({ id: id }).then(response => {
        if (response) {
          this.getArticle()
          this.$message.success('收藏成功！')
        }
      })
    },
    // 取消收藏文章
    handleUnFavorite(id) {
      unFavorite({ id: id }).then(response => {
        if (response) {
          this.getArticle()
          this.$message.success('取消收藏成功！')
        }
      })
    },
    // 关注用户
    handleFollow(id) {
      follow({ id: id }).then(response => {
        if (response) {
          this.getArticle()
          this.$message.success('关注该用户成功！')
        }
      })
    },
    // 取消关注用户
    handleUnFollow(id) {
      unFollow({ id: id }).then(response => {
        if (response) {
          this.getArticle()
          this.$message.success('取消关注该用户成功！')
        }
      })
    },
    handleDel() {
      this.$confirm('确定删除该文章？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return del(this.article.id)
      }).then(response => {
        if (response) {
          this.$router.go(-1)
          this.$message.success('删除文章成功！')
        }
      })
    }
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
  max-width: 1140px;
  margin-bottom: 70px;
  .tag-list{
    margin-top: 20px;
    float: left;
    max-width: 50%;
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
.footer{
  border-top: #cccccc 1px solid;
  padding-top: 30px;
  width: 75%;
  max-width: 1140px;
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
      width: 120px;
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
