<template>
  <div class="sidebar">
    <p>热门标签</p>
    <div class="tag-list">
      <a class="tag">butt</a>
      <a class="tag">dragons</a>
      <a class="tag">test</a>
      <a class="tag">training</a>
      <a class="tag">tags</a>
      <a class="tag">as</a>
      <a class="tag">coffee</a>
      <a class="tag">animation</a>
      <a class="tag">flowers</a>
      <a class="tag">cars</a>
      <a class="tag">baby</a>
      <a class="tag">money</a>
      <a class="tag">caramel</a>
      <a class="tag">happiness</a>
      <a class="tag">japan</a>
      <a class="tag">clean</a>
      <a class="tag">sugar</a>
      <a class="tag">sushi</a>
      <a class="tag">cookies</a>
      <a class="tag">well</a>
    </div>
    <!-- <div>正在加载热门标签。。。</div>
    <div>暂时没有热门标签。。。</div> -->
  </div>
</template>

<script>
export default {

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
