<template>
  <div class="blog-card">
    <el-row class="el-row">
      <h2>最新动态</h2>
    </el-row>
    <el-row class="el-row">
      <el-col  :span="4" v-for="(blog, index) in blogs" :key="index" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="blog.imgUrl"
               class="image">
          <div style="padding: 14px;">
            <span>{{blog.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{blog.date}}</time>
              <el-button type="text" class="button" @click="readMore(index)">Read More</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "BlogCard",
    props:{
      blogs:{
        type: Array,
        default(){
          return {};
        }
      }
    },
    methods:{
      readMore(index){
        console.log(index);
      },
    },
    created() {
      //
      for (let i in this.blogs){
        this.blogs[i].imgUrl = require('../../assets/img/' + this.blogs[i].imgUrl + '.jpg');
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .blog-card{
    margin-top: 80px;
  }

  .el-row > h2{
    text-align: center;
    margin-bottom: 50px;
    margin-left: 20px;
    text-transform: uppercase;
  }
</style>
