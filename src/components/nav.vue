<template>
  <div class="nav">  
   
  <nav>
    <el-menu :default-active="ins" class="el-menu-vertical-demo" :collapse="toggleHides">
      <el-menu-item v-for="(item, index) in navArr" :index="index.toString()" :key="index">
        <router-link :to="item.url" style="color:#000;">
        <i class="el-icon-menu"></i> 
        <span>{{item.title}}</span>
        </router-link>
      </el-menu-item>
    </el-menu>
    </nav> 
      <!-- <el-main>
        <div @click="isToggleShow">
          <router-view></router-view>
        </div>
      </el-main> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Nav',
  data() {
    return { 
      toggleHides: '', 
      navArr: [
        { title: 'home', url: '/' },
        { title: 'place', url: '/place' },
        { title: 'three', url: '/three' }
      ], 
      ins:this.$route.name
    }
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
  computed:{
      ...mapState(["toggleHide"]),//监听toggleHide的变化
   },
  watch: {
    toggleHide(){
      this.toggleHides = this.$store.getters.getters_toggleHide
    }
  },
}
</script>
    
<style>
  .nav,nav,nav ul{ 
    height: 100%;
  }
  .nav ul li:first-child{
    margin-top: 300px;
  }
  .nav ul li{
    width: 60%;
    transform: rotate(-45deg);
    float: right;
  }
  .el-menu{
    width: 500px;
    z-index: 99;
  }
  .el-menu-item{
    padding-left: 50px !important;
  }
  .el-menu-item.is-active a span{
    color:green;
    font-weight: bold;
  }
  .el-menu-item a{
    display: block;
  } 
  .el-menu--collapse{
    width: 100px;
  }
</style>
