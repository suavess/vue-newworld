<template>
  <div class="page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 col-xs-12">
          <h1 class="text-xs-center ng-binding">发布</h1>
          <div style="margin: 20px;"></div>
          <el-form label-position="right" label-width="80px" :model="article" :rules="rules" ref="article">
            <el-form-item label="标题" prop="title">
              <el-input v-model="article.title"></el-input>
            </el-form-item>
            <el-form-item label="简述" prop="desc">
              <el-input v-model="article.desc"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="body">
              <tinymce ref="editor"
              v-model="article.body"
              @onClick="onClick()"/>
            </el-form-item>
            <el-form-item label="标签" prop="tags">
              <el-select v-model="article.tags" multiple filterable placeholder="请选择" style="width:400px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="btn-submit">发布</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tinymce from '@/components/tinymce-editor.vue'
export default {
  components: {
    tinymce
  },
  data () {
    return {
      article: {
        title: '',
        desc: '',
        body: '',
        tags: []
      },
      options: [{
        value: '1',
        label: 'Java'
      }, {
        value: '2',
        label: 'JavaScript'
      }, {
        value: '3',
        label: 'Vue'
      }, {
        value: '4',
        label: 'SpringBoot'
      }, {
        value: '5',
        label: 'PHP'
      }],
      rules: {

      }
    }
  },
  methods: {
    onClick (e, editor) {
      console.log(e)
      console.log(editor)
    }
  }
}
</script>

<style lang="less">
.btn-submit{
  float: right;
}
</style>
