<template>
  <div style="width:65%;max-width:750px;">
    <!-- 发布评论框 -->
    <el-form>
      <el-form-item>
        <el-input type="textarea" :rows="4"></el-input>
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
        <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-delete"></i></el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {

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
