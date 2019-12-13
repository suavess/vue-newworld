<template>
  <div style="width:65%;max-width:750px;">
    <div v-if="!name" style="text-align:center;margin:20px;">
      请先<router-link to="/login">登录</router-link>以发布评论！
    </div>
    <!-- 发布评论框 -->
    <el-form v-else>
      <el-form-item>
        <el-input type="textarea" :rows="4" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" style="float:right">发表评论</el-button>
      </el-form-item>
    </el-form>
    <!-- 评论列表 -->
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="">
        <div class="info">
          <a href="http://www.baidu.com">Suave</a>
          <span>October 2, 2019</span>
        </div>
        <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-delete" /></el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { list } from '@/api/comments'
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
      commentsList: []
    }
  },
  computed: {
    name() {
      return this.$store.getters.name
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      list(this.id).then(response => {
        const { data } = response
        this.commentsList = data
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
