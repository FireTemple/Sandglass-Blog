<template>
  <div class="media-card container-fluid">
    <div class="media-card-title">
      <h2>你需要了解的</h2>
    </div>
    <div class="row">
      <div class="media col-lg-12 col-sm-12">
        <div class="media-left media-middle">
          <i class="fab fa-java icon-media"></i>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Java</h4>
          Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍          Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍
          Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍Java 的一些介绍
        </div>
      </div>

      <div class="media col-lg-12 col-sm-12">
        <div class="media-left media-middle">
          <i class="fab fa-vuejs icon-media"></i>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Vue.js</h4>
          Vue的一些介绍和功能使用在这个项目中Vue的一些介绍和功能使用在这个项目中Vue的一些介绍和功能使用在这个项目中Vue的一些介绍和功能使用在这个项目中Vue的一些介绍和功能使用在这个项目中
        </div>
      </div>

      <div class="media col-lg-12 col-sm-12">
        <div class="media-left media-middle">
          <i class="fas fa-database icon-media"></i>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Mybatis</h4>
          开发一个项目总归还是需要使用数据库的嘛，这里使用myabatis 主要是图标没找到
        </div>
      </div>

      <div class="media col-lg-12 col-sm-12">
        <div class="media-left media-middle">
          <i class="fab fa-linux icon-media"></i>
        </div>
        <div class="media-body">
          <h4 class="media-heading">服务器</h4>
          如何部署下去这个项目在linux上，凑次数先啦啦啦啦啦
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "MediaCard"
  }
</script>

<style scoped>
  .media {
    margin-top: 50px;
  }

  .icon-media {
    font-size: 60px;
  }


  .media-body{
    font-size: 16px;
  }

  .media-card-title{
    text-align: center;
  }

</style>
