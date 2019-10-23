<template>

    <el-container id="two"> 
      <h1>{{ msg }}</h1>
      <h2>Ms-222222</h2>
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
  name: 'Two',
  data () {
    return {
      msg: 'Two', 
    }
  },
  components: {
    navlist, 
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
