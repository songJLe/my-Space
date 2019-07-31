import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import 'element-ui/lib/theme-chalk/display.css';引入此文件，即可使用断点隐藏 内置过渡动画

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>'
})
