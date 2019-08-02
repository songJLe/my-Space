<template>
  <div class="loading">
    <div class="loadImg"></div>
    <el-row :gutter="10">
    <el-col class="oneShow" :xs="10" :sm="10" :md="10" v-html="msg"  :style="styleObj"></el-col>
    </el-row>
  </div>
</template>
 
<script>
import {mapActions} from 'vuex'
export default {
  name: 'Loading', // 定义的组件名称 使用时写法：loading
  data() {
    return {
      msg: '',
      newMsg:'',
      msgLength:0,
      interval:null,
      weekdays:["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      styleObj:`color:#${Math.floor(Math.random()*256).toString()}`
    }
  },
  mounted() { 
    setTimeout(() => {
      this.lang()
    }, 1500)
    this.loadingTime()
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
        _this.styleObj = `color:#${Math.floor(Math.random()*256).toString()}`
      },80) 
    },
    loadingTime:function (params) {
      var _this = this 
      var dayOfWeekPastIndex = Math.floor(_this.weekdays.length * Math.random())
      var dayOfWeekIndex = new Date().getDay()
      var dayOfWeekPast = _this.weekdays[dayOfWeekPastIndex];
      var dayOfWeek = _this.weekdays[dayOfWeekIndex];
      var hourOfDay = new Date().getHours();
      var timeOfDay
      if ((hourOfDay >= 4) && (hourOfDay <= 11)) {
        timeOfDay = "早上";
      } else if ((hourOfDay >= 12) && (hourOfDay <= 16)) {
        timeOfDay = "下午";
      } else { 
        timeOfDay = "晚上";
      }
      _this.newMsg = `hey~\n我们${dayOfWeekPast}是不是见过?\n^_^<br/>\n在这个${dayOfWeek}的${timeOfDay}\n要不要一起打一把游戏？`
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
.loading .el-row{
  display: flex;
}
.loadImg{
  width: 100px;
  height: 100px;
  background: url('../../../static/images/loading-ball.gif') center center no-repeat ;
  background-size: cover;
  margin: 100px auto;
}
.oneShow {
  text-align: left;
  height: 30px;
  margin: 0 auto;
  font-size: 24px;
  line-height: 40px;
}
</style>