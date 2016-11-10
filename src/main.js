import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(ElementUI)
Vue.use(Vuex);
//vuex类似于总闸
const store=new Vuex.Store({
  //存放数据
  state:{
    usertype:localStorage.usertype
  },
  //监听突变
  mutations:{
    changeType (state,n){
      state.usertype=n
    }
  }
})

new Vue({
    el: '#app',
    store,
    template: '<App/>',
  components: { App },
    render: h => h(App)
})
