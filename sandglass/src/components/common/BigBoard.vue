<template>
  <div class="jumbotron">
    <h1>{{content.title}}</h1>
    <p>{{content.content}}</p>
    <p><a class="btn btn-primary btn-lg" :href="content.address" role="button">{{content.btnInfo}}</a></p>
  </div>
</template>

<script>
  export default {
    name: "BigBoard",
    props: {
      content: {
        type: Object,
        default() {
          return {};
        }
      }
    },

  }
</script>

<style scoped>
  .jumbotron {
    text-align: center;
  }

  div>h1,p{
    margin-top: 40px;
  }
</style>
