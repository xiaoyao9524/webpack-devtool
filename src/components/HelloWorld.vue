<template>
  <div class="hello">
    <img class="vue-logo" src="./vue.png" alt="">
    <p>{{msg}}</p>
    <button @click="test">测试js</button>
  </div>
</template>

<script>
  export default {
    name: "hello-world",
    data() {
      return {
        msg: '测试信息'
      }
    },
    methods: {
      test() {
        this.msg = '测试成功';
      }
    }
  }
</script>

<style scoped lang="scss">
  .hello {
    .vue-logo {
      width: 50px;
      height: 50px;
    }
    h1 {
      color: green;
    }
  }
</style>