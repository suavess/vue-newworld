<template>
  <div v-loading="loading" class="page">
    <div class="banner">
      <div class="container">
        <img :src="user.image" alt="">
        <h3>{{ user.username }}</h3>
        <p>{{ user.bio }}</p>
        <el-button v-if="LoginId===user.id" type="info" plain size="mini" icon="el-icon-setting" class="btn-editProfile" @click="$router.push('/settings')">修改个人信息</el-button>
        <div v-else style="margin-left: 65%;">
          <el-button v-if="user.following" type="danger" size="mini" icon="el-icon-minus" style="margin-left:20px" @click="handleUnFollow(user.id)">取关{{ user.username }}</el-button>
          <el-button v-else type="info" plain size="mini" icon="el-icon-plus" style="margin-left:20px" @click="handleFollow(user.id)">关注{{ user.username }}</el-button>
        </div>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- 防止没有数据时直接加载子组件，加v-if判断 -->
            <el-tab-pane :label="LoginId===user.id?'我的文章':'他的文章'" name="myArticle">
              <article-list v-if="user.email" :author="user.email" />
            </el-tab-pane>
            <el-tab-pane :label="LoginId===user.id?'我的收藏':'他的收藏'" name="myFeed">
              <article-list v-if="user.email" :favorited="user.email" />
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
import { info as profileInfo } from '@/api/profile'
import { follow, unFollow } from '@/api/profile'
export default {
  name: 'Profile',
  components: {
    ArticleList
  },
  data() {
    return {
      id: null,
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
    LoginId() {
      return this.$store.getters.id
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getInfo()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    async getInfo() {
      this.loading = true
      if (this.id) {
        await profileInfo({ id: this.id }).then(response => {
          const { data } = response
          this.user = data
        })
      } else {
        await info().then(response => {
          const { data } = response
          this.user = data
        })
      }
      this.loading = false
    },
    // 关注用户
    handleFollow(id) {
      follow({ id: id }).then(response => {
        if (response) {
          this.getInfo()
          this.$message.success('关注该用户成功！')
        }
      })
    },
    // 取消关注用户
    handleUnFollow(id) {
      unFollow({ id: id }).then(response => {
        if (response) {
          this.getInfo()
          this.$message.success('取消关注该用户成功！')
        }
      })
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
      margin-left: 65%;
    }
  }
}
</style>
