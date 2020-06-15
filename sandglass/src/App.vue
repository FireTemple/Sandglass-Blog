<template>
  <div id="app">
    <el-container>
      <el-aside width="20%">
        <nav-bar :links="['Home','Profile','Note','Blog','Profile']"/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>

</template>

<script>
  import NavBar from "./components/common/NavBar";
export default {
  name: 'app',
  components: {
    NavBar
  },
  methods: {

  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
