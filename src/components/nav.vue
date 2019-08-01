<template>
  <div class="nav">  
  <nav @mouseenter="isToggleHide" @mouseleave="isToggleShow">
    <el-menu default-active="0" class="el-menu-vertical-demo" :collapse="toggleHide">
      <el-menu-item v-for="(item, index) in navArr" :index="index.toString()" :key="index">
        <router-link :to="item.url" style="color:#000;">
        <i class="el-icon-menu"></i> 
        <span>{{item.title}}</span>
        </router-link>
      </el-menu-item>
      <div class="el-icon-caret-right"></div>
    </el-menu>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['listarr'],
  data() {
    return {
      navArr: this.listarr,
      toggleHide: true
    }
  },
  methods: {
    isToggleShow (){ 
      this.toggleHide = true 
    },
    isToggleHide (){ 
      this.toggleHide = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav,nav,nav ul{ 
    height: 100%;
  }
  nav ul li:first-child{
    margin-top: 300px;
  }
  nav ul li{
    width: 80%;
    transform: rotate(-45deg);
    float: right;
  }
  .el-menu{
    max-width: 90%;
  }
  .el-menu-item.is-active a span{
    color:green;
    font-weight: bold;
  }
  .el-menu-item a{
    display: block;
  } 
  .el-icon-caret-right{
    position: absolute;
    right:-10px;
    top:53%;
    font-size: 20px;
    color:green; 
  }
</style>
