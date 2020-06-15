<template>
  <el-carousel height="930px"  direction="vertical" :interval="5000">
    <el-carousel-item v-for="(item,index) in contents"
                      :key="item.id"
                      class="el-carousel__item">
      <div class="carousel-content">
        <h1>{{item.title}}</h1>
        <p>{{item.subTitle}}</p>
        <el-button class="carousel-button" type="primary" @click="CarouselBtnClick(index)">{{item.clickInfo}}</el-button>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
      name: "Carousel",
      props:{
          contents:{
            type: Array,
            default(){
              return [];
            }
          }
      },
      methods:{
        CarouselBtnClick(index){
          this.$router.push(this.contents[index].link);
          console.log(this.contents[index].link)
        }
      },
      created() {
        this.imgUrl = this.$store.state.ImgUrl;
      },
      data(){
        return{
          imgUrl:[],
          currentIndex: 0,
          color: 'blue'
        }
      },
      computed: {

      }
    }
</script>

<style scoped>
  /*.el-carousel__item div h1,p{*/
  /*  left: 50%;*/
  /*  top: 50%;*/
  /*}*/

  .el-carousel__item div{
    color: white;
    font-size: 18px;
    opacity: 0.75;
    height: 100%;
    text-align: center;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-top:-100px;
  }

  .el-carousel__item div>h1,p{
    margin-bottom: 30px;
  }







  /*.carousel-button{*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  top: 60%;*/
  /*}*/


  .el-carousel__item:nth-of-type(1) {
    /*background-color: red;*/
    background-image: url(../../assets/img/img_bg_1.jpg);
    background-size:100% 100%;
  }
  .el-carousel__item:nth-of-type(2) {
    /*background-color: red;*/
    background-image: url(../../assets/img/img_bg_2.jpg);
    background-size:100% 100%;
  }
  .el-carousel__item:nth-of-type(3) {
    /*background-color: red;*/
    background-image: url(../../assets/img/img_bg_3.jpg);
    background-size:100% 100%;
  }

</style>
