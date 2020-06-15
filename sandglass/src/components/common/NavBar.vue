<template>
    <div id="fh5co-aside" role="complementary" >
      <div class="nav-content" role="navigation">
        <ul>
          <h1 id="fh5co-logo">sandglass</h1>
          <li v-for="(link,index) in links"
              :class="{active: currentIndex === index}">
            <span @click="navTo(index)">{{link}}</span></li>
        </ul>
      </div>

          <div class="nav-footer">
            <p><small>&copy;<span>2020 <span style="color: #1b6d85">Bohan</span> All Rights Reserved.</span> </small></p>
            <ul class="nav-links">
              <li><a href="#"><i class="icon-linkedin2"></i></a></li>
            </ul>
          </div>

    </div>
</template>

<script>
  export default {
    name: "SideBar",
    props: {
      links: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      navTo(index){
        this.$router.replace("/"+this.links[index]);
        this.currentIndex = index;
        console.log("/"+this.links[index]);
      }
    },
    data(){
      return{
        currentIndex : 0,
      }
    }
  }
</script>

<style scoped>

  #fh5co-aside #fh5co-logo {
    text-align: center;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 2em;
    text-transform: uppercase;
    font-size: 38px;
  }

  #fh5co-aside {
    padding-top: 60px;
    padding-bottom: 40px;
    width: 20%;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    overflow-y: scroll;
    z-index: 1001;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    background-color: whitesmoke;
  }

  .nav-content ul li {
    list-style: none;
    margin-top: 1.5em;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-family: "Roboto", Arial, sans-serif;
  }

  .nav-footer {
    text-align: center;
  }

  .nav-content {
    text-align: center;
  }


  .active{
    color: red;
  }

  .nav-content ul>li>span{
    transition-property: border-bottom-width;
    transition-duration: 0.5s;
  }

  .nav-content ul>li>span:hover{
    color: red;
    border-bottom-style:solid;
    border-bottom-width: 2px;
    border-bottom-color: #3a8ee6;
  }

  .nav-footer{
    position: absolute;
    bottom: 40px;
    font-size: 14px;
    text-align: center;
    width: 100%;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    padding: 0 20px;
  }

  .nav-links{
    list-style: none;

  }
</style>
