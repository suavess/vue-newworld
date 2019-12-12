<template>
  <div v-loading="loading" class="page">
    <div class="banner">
      <div class="container">
        <img :src="user.image" alt="">
        <h3>{{ user.username }}</h3>
        <p>{{ user.bio }}</p>
        <el-button type="info" plain size="mini" icon="el-icon-setting" class="btn-editProfile" @click="$router.push('/settings')">修改个人信息</el-button>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的文章" name="myArticle">
              <article-list :author="email" />
            </el-tab-pane>
            <el-tab-pane label="收藏" name="myFeed">
              <article-list :favorited="email" />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/home/ArticleList'
import { info } from '@/api/user'
export default {
  name: 'Profile',
  components: {
    ArticleList
  },
  data() {
    return {
      loading: true,
      activeName: 'myArticle',
      user: {
        username: '',
        image: '',
        bio: ''
      }
    }
  },
  computed: {
    email() {
      return this.$store.getters.email
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    async getInfo() {
      this.loading = true
      await info().then(response => {
        const { data } = response
        this.user = data
      })
      this.loading = false
    }
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
