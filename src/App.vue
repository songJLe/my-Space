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
export default {
  name: 'app',
  data() {
    return {
      isLoading: true,
      num:1,
      navArr: [
        { title: 'one', url: '/' },
        { title: 'two', url: '/two' },
        { title: 'three', url: '/three' }
      ]
    }
  },
  mounted() {
    setInterval(() => {
        this.num++ 
        if(this.num>=5){
          this.isLoading = false
        }
      }, 1000);
  },
   methosd:{
    
  },
  components: {
    navlist,
    Loading  
  }
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
} 
a {
  text-decoration: none;
}
.el-aside{
  height: 800px;
  position: fixed;
  top:-300px;
  left: 0;
  overflow: hidden;
  transform: rotate(45deg); 
}
.el-main{
  margin-left: 64px;
  text-align: center;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
