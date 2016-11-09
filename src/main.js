import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
    render: h => h(App)
})
