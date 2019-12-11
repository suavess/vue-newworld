<template>
  <div class="page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 col-xs-12">
          <h1 class="text-xs-center ng-binding">发布文章</h1>
          <div style="margin: 20px;"></div>
          <el-form label-position="right" label-width="80px" :model="article" ref="article">
            <el-form-item label="标题">
              <el-input v-model="article.title"></el-input>
            </el-form-item>
            <el-form-item label="简述">
              <el-input v-model="article.description"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <tinymce ref="editor"
              v-model="article.body"/>
            </el-form-item>
            <el-form-item label="标签">
              <el-select v-model="article.tagList" multiple filterable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in tagList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="btn-submit" @click="handleCreate">发布</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from '@/api/tags'
import { create } from '@/api/article'
import tinymce from '@/components/tinymce-editor.vue'
export default {
  components: {
    tinymce
  },
  data () {
    return {
      tagList: [],
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  created () {
    this.getTagList()
  },
  methods: {
    // onClick (e, editor) {
    //   console.log(e)
    //   console.log(editor)
    // },
    getTagList () {
      list().then(response => {
        const { data } = response
        this.tagList = data
      })
    },
    handleCreate () {
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
.btn-submit{
  float: right;
}
</style>
