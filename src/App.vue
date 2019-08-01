<template> 
    <el-container id="app">
      <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
      <el-aside width="350px">
        <navlist :listarr="navArr"></navlist>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container> 
</template>

<script>
import Loading from '@/components/loading/index'
import navlist from '@/components/nav'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      isLoading: true,
      navArr: [
        { title: 'one', url: '/' },
        { title: 'two', url: '/two' },
        { title: 'three', url: '/three' }
      ]
    }
  },
  components: {
    navlist,
    Loading  
  },
   computed:{
      ...mapState(["loadLength"]),//监听loadLength的变化
   },
   watch: {
     loadLength(){
       if(this.$store.getters.getters_loadLength == false){
          setTimeout(() => {
            this.isLoading = false
          }, 3000);
        } 
     }
   },
}
</script>

<style> 
html,body{
  height: 100%;
}
body{
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: rgb(220, 245, 241); 
} 
a {
  text-decoration: none;
}
.el-aside{
  height: 800px;
  position: fixed;
  top:-300px;
  left: -30px;
  overflow: hidden;
  transform: rotate(45deg); 
  z-index: 99;
}
.el-main{
  text-align: center;
  padding: 0;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
