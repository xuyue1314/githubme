// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入store
import store from './store'
// 设置浏览器控制台提示信息是否显示
Vue.config.productionTip = false
/* eslint-disabled no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 注册store
  store
})