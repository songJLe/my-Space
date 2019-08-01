<template>
  <div class="loading">
    <div class="loadImg"></div>
    <h1 class="oneShow">{{ msg }}</h1>
  </div>
</template>
 
<script>
import {mapActions} from 'vuex'
export default {
  name: 'Loading', // 定义的组件名称 使用时写法：loading
  data() {
    return {
      msg: '',
      newMsg:'hey~hhhhhhh对于文本，我们可以再做一点微调',
      msgLength:0,
      interval:null
    }
  },
  mounted() { 
    setTimeout(() => {
      this.lang()
    }, 1500)
  },
  methods: {
    lang: function() { 
      var _this = this 
      _this.interval = setInterval(function() {
        _this.msgLength++
        //累计截取每一个字符
        var oneMsg = _this.newMsg.substring(0, _this.msgLength)
        //重新赋值
        _this.msg = oneMsg
        if(_this.msg.length == _this.newMsg.length){ 
          _this.$store.commit('mutations_loadLength',false)
          clearInterval(_this.interval)
        } 
      }, 50) 
    },
  }
}
</script>
 
<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0; 
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgb(160, 226, 215); 
}
.loadImg{
  width: 100px;
  height: 100px;
  background: url('../../../static/images/loading-ball.gif') center center no-repeat ;
  background-size: cover;
  margin: 100px auto;
}
.oneShow {
  width:600px;
  text-align: left;
  height: 30px;
  margin: 0 auto;
}
</style>