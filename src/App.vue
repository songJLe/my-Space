<template> 
    <el-container id="app">
      <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
      <el-aside width=auto>  
      </el-aside>
      <el-main> 
          <router-view></router-view> 
      </el-main>
    </el-container> 
</template>

<script>
import Loading from '@/components/loading/index' 
import {mapState} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      isLoading: true,//是否开启loading状态 
    }
  },
  components: { 
    Loading  
  },
  methods: {
    isToggleShow (){ 
      this.$store.commit('mutations_toggleHide',true)
    },
    isToggleHide (){ 
      this.$store.commit('mutations_toggleHide',false)
    }
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
     },
     
   },
}
</script>

<style> 
html,body,.mouse{
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
  height: 1000px;
  position: fixed;
  top:-350px;
  left: -120px;
  overflow: hidden;
  transform: rotate(45deg); 
  z-index: 99;
  margin-left: -60px;
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
