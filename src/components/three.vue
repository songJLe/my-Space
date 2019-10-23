<template>  
    <el-container id="three"> 
      <h1>{{ msg }}</h1>
      <h2>Ms-CutieSong</h2>
      <el-aside width=auto> 
        <div class="mouse" @mousemove="isToggleHide" @mouseleave="isToggleShow">
          <navlist></navlist> 
        </div>
      </el-aside>
      <el-main @click="isToggleShow">  
      </el-main>
    </el-container> 
</template>

<script>
import navlist from '@/components/nav'
export default {
  name: 'Three',
  data () {
    return {
      msg: 'Three', 
    }
  }, 
  components: {
    navlist, 
  }, 
  mounted() { 
  },
  methods: { 
    isToggleShow (){ 
      this.$store.commit('mutations_toggleHide',true)
    },
    isToggleHide (){ 
      this.$store.commit('mutations_toggleHide',false)
    },   
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
</style>
