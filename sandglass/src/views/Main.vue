<template>
  <el-container>
    <el-aside>
      <nav-bar :links="['Home','Profile','Note','Blog','Profile']"/>
    </el-aside>
    <el-main class="main-main">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  import NavBar from "../components/common/NavBar";

  export default {
    name: "main",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
.main-main{
  margin-left: 100px;
}
</style>
