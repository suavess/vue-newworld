<template>
  <div v-loading="loading" style="width:65%;max-width:750px;">
    <div v-if="!loginId" style="text-align:center;margin:20px;">
      请先<router-link to="/login">登录</router-link>以发布评论！
    </div>
    <!-- 发布评论框 -->
    <el-form v-else>
      <el-form-item>
        <el-input v-model="body" type="textarea" :rows="4" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" style="float:right" @click="handleCreated">发表评论</el-button>
      </el-form-item>
    </el-form>
    <!-- 评论列表 -->
    <el-card v-for="item in commentsList" :key="item.id" class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <img :src="item.author.image" alt="">
        <div class="info">
          <a href="http://www.baidu.com">{{ item.author.username }}</a>
          <span>{{ item.createdAt }}</span>
        </div>
        <el-button v-if="loginId && loginId===item.author.id" style="float: right; padding: 3px 0" type="text" @click="handleDelete(item.id)"><i class="el-icon-delete" /></el-button>
      </div>
      <div class="text item">
        {{ item.body }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { list, del, create } from '@/api/comments'
export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: null
    }
  },
  data() {
    return {
      loading: true,
      commentsList: [],
      body: ''
    }
  },
  computed: {
    loginId() {
      return this.$store.getters.id
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    async getComments() {
      this.loading = true
      await list(this.id).then(response => {
        const { data } = response
        this.commentsList = data
      })
      this.loading = false
    },
    handleCreated() {
      create({ id: this.id, body: this.body }).then(response => {
        if (response) {
          this.body = ''
          this.getComments()
          this.$message.success('添加评论成功！')
        }
      })
    },
    // 删除评论，入参是评论id
    handleDelete(id) {
      this.$confirm('确定删除该评论吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return del({ aid: this.id, cid: id })
      }).then(response => {
        if (response) {
          this.getComments()
          this.$message.success('删除评论成功！')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-form-item{
  margin-bottom: 10px;
}
.el-card{
  .el-card__header{
    padding: 12px 16px!important;
    background-color: #666;
  }
}
.box-card{
  margin-bottom: 20px;
  .clearfix{
    img{
      float: left;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .info{
      vertical-align: middle;
      display: inline;
      margin-left: 1%;
      a{
        text-decoration: none;
        color: #409EFF;
      }
      span{
        font-size: 11px;
        color: #bbb;
        margin-left: 5px;
      }
    }
  }
}
</style>
