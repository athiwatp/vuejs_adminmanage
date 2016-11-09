<template>
  <div id="app">
    <Vhead></Vhead>
    <Vbody></Vbody>
    <Vfoot></Vfoot>
  </div>
</template>
<script>
//引入css文件
import 'assets/bootstrap/css/bootstrap.min.css'
import 'assets/bootstrap/js/bootstrap.min.js'

import Vhead from './components/Vhead'
import Vbody from './components/Vbody'
import Vfoot from './components/Vfoot'

export default {
  name: 'app',
  components: {
    Vhead,Vbody,Vfoot
  },
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
