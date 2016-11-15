import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
Vue.use(ElementUI)
Vue.use(Vuex);
Vue.use(VueRouter);

const anasiy = { template: '<div>anasiy</div>' }
const about = { template: '<div>about</div>' }
const routes = [
  { path: '/anasiy', component: anasiy },
  { path: '/about', component: about }
]
const router = new VueRouter({
  routes:routes
})
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
const app = new Vue({
    router,
    store,
    template: '<App/>',
    components: { App },
    render: h => h(App)
}).$mount('#app')


