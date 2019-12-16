<template>
  <div v-loading="loading" class="sidebar">
    <p>热门标签</p>
    <div class="tag-list">
      <div v-for="tag in tagsList" :key="tag.id" class="tag" @click="$emit('tag-get', {id:tag.id,name:tag.name})">{{ tag.name }}</div>
    </div>
    <!-- <div>正在加载热门标签。。。</div>
    <div>暂时没有热门标签。。。</div> -->
  </div>
</template>

<script>
import { list } from '@/api/tags'
export default {
  data() {
    return {
      loading: true,
      tagsList: []
    }
  },
  created() {
    this.getTags()
  },
  methods: {
    async getTags() {
      this.loading = true
      await list().then(response => {
        const { data } = response
        this.tagsList = data
      })
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar{
  padding: 10px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px;
  p{
    margin-bottom: 5px;
  }
  .tag-list{
    .tag{
      color: #fff!important;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 50px;
      white-space: nowrap;
      margin-right: 3px;
      margin-bottom: 2px;
      display: inline-block;
      background-color: #818a91;
      text-decoration: none;
      cursor: pointer;
    }
    .tag:hover{
      background: #687077;
    }
  }
}
</style>
