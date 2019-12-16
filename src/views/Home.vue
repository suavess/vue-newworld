<template>
  <div>
    <div class="banner">
      <div class="container">
        <h1>NewWorld</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关注" name="feed" :disabled="!name">
              <feed-list />
            </el-tab-pane>
            <el-tab-pane label="首页" name="index">
              <article-list />
            </el-tab-pane>
            <el-tab-pane v-if="Object.keys(tag).length !== 0" :label="'#'+tag.name" :name="tag.name">
              <article-list :tag.sync="tag.name" />
            </el-tab-pane>
          </el-tabs>
        </div>
        <!-- Sidebar where popular tags are listed -->
        <div class="col-md-3">
          <tag-list @tag-get="handleGetTag" />
        </div>
        <!-- End the row & container divs -->
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/home/ArticleList'
import FeedList from '@/components/home/FeedList'
import TagList from '@/components/home/TagList'
export default {
  name: 'Home',
  components: {
    ArticleList,
    TagList,
    FeedList
  },
  data() {
    return {
      tag: {},
      activeName: 'index'
    }
  },
  computed: {
    name() {
      return this.$store.getters.name
    }
  },
  methods: {
    handleClick(tab) {
      if (tab.name === 'index' || tab.name === 'feed') {
        this.tag = {}
      }
      this.activeName = tab.name
    },
    handleGetTag(obj) {
      this.tag = obj
      this.activeName = obj.name
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  background-color: #409EFF;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 30px;
  margin-bottom: 40px;
  .container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    h1 {
      font-weight: 700;
    }
    p {
      font-size: 20px;
    }
  }
}
</style>
