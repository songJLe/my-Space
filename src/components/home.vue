<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ms-CutieSong</h2>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
