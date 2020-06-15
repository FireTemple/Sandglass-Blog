<template>
  <div class="home">
    <carousel :contents="carouselContents"/>
    <big-board :content="bigBoardData"/>
    <media-card/>
    <blog-card :blogs="recentBlogs"/>
  </div>
</template>

<script>
  import Carousel from "../components/common/Carousel";
  import BigBoard from "../components/common/BigBoard";
  import MediaCard from "../components/common/MediaCard";
  import BlogCard from "../components/content/BlogCard";

  export default {
    name: "Home",
    components: {
      BlogCard,
      Carousel,
      MediaCard,
      BigBoard,
    },
    data() {
      return {
        carouselContents: [
          {id: 1, title: '标题2', subTitle: '副标题2', clickInfo: 'learn more', link: '/profile'},
          {id: 2, title: '标题2', subTitle: '副标题2', clickInfo: 'learn more', link: '/profile'},
          {id: 3, title: '标题3', subTitle: '副标题3', clickInfo: 'learn more', link: '/profile'},
        ],
        bigBoardData: {
          title: 'Sandglass 个人博客所用到的技术栈和源码',
          content: '这个人很懒目前细节还没有整理',
          btnInfo: 'gitHub',
          address: 'https://github.com/FireTemple'
        },
        recentBlogs: [
          {id:1,title: 'CSS真的要把我烦死了',imgUrl:'img-6',date: new Date()},
          {id:2,title: '想到写完还要写后端人就傻了',imgUrl:'img-5',date: new Date()},
        ]
      }
    }
  }
</script>

<style scoped>
  .home {
    background-color: whitesmoke;
  }
</style>
