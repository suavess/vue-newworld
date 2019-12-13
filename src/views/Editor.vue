<template>
  <div v-loading="loading" class="page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 col-xs-12">
          <h1 class="text-xs-center ng-binding">发布文章</h1>
          <div style="margin: 20px;" />
          <el-form ref="article" label-position="right" label-width="80px" :model="article">
            <el-form-item label="标题">
              <el-input v-model="article.title" />
            </el-form-item>
            <el-form-item label="简述">
              <el-input v-model="article.description" />
            </el-form-item>
            <el-form-item label="内容">
              <tinymce
                ref="editor"
                v-model="article.body"
              />
            </el-form-item>
            <el-form-item label="标签">
              <el-select v-model="article.tagList" multiple filterable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in tagList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-form>
          <div class="submit">
            <el-button v-if="aid" @click="$router.go(-1)">取消</el-button>
            <el-button v-if="aid" type="primary" @click="handleEdit">编辑</el-button>
            <el-button v-else type="primary" @click="handleCreate">发布</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from '@/api/tags'
import { create, findById, edit } from '@/api/article'
import tinymce from '@/components/tinymce-editor.vue'
export default {
  components: {
    tinymce
  },
  data() {
    return {
      aid: null,
      tagList: [],
      loading: false,
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  created() {
    this.aid = this.$route.params.id
    this.getTagList()
    if (this.aid) {
      this.getArticleById()
    }
  },
  methods: {
    getTagList() {
      list().then(response => {
        const { data } = response
        this.tagList = data
      })
    },
    async getArticleById() {
      this.loading = true
      await findById(this.aid).then(response => {
        const { data } = response
        const tmp = []
        data.tagList.forEach(item => {
          tmp.push(item.id)
        })
        data.tagList = tmp
        this.article = data
      })
      this.loading = false
    },
    handleEdit() {
      edit(this.article).then(response => {
        const { code } = response
        if (code === 200) {
          this.$message.success('更新文章成功！')
          this.$router.go(-1)
        }
      })
    },
    handleCreate() {
      create(this.article).then(response => {
        if (response) {
          this.$message.success('添加文章成功！')
        }
      })
    }
  }
}
</script>

<style lang="less">
.submit{
  float: right;
}
</style>
