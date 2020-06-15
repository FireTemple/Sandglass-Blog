<template>
  <div class="home">
    <carousel :contents="carouselContents"/>
    <big-board :content="bigBoardData"/>
    <media-card/>
  </div>
</template>

<script>
  import Carousel from "../components/common/Carousel";
  import BigBoard from "../components/common/BigBoard";
import MediaCard from "../components/common/MediaCard";

  export default {
    name: "Home",
    components: {
      Carousel,
      MediaCard,
      BigBoard
    },
    data(){
      return{
        carouselContents:[
          {id:111,title:'Hello,I am Bohan',subTitle:'No one can make me lose unless I don\'t want to win',clickInfo:'learn more',link:'/profile'},
          {id:211,title:'标题2',subTitle:'副标题2',clickInfo:'learn more',link:'/profile'},
          {id:3,title:'标题3',subTitle:'副标题3',clickInfo:'learn more',link:'/profile'},
        ],
        bigBoardData:{
          title:'Sandglass 个人博客所用到的技术栈和源码',
          content: '这个人很懒目前细节还没有整理',
          btnInfo: 'gitHub',
          address: 'https://github.com/FireTemple'
        }
      }
    }
  }
</script>

<style scoped>
.home{
  background-color: whitesmoke;
}
</style>
