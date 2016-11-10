<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top " role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" style="cursor: context-menu;">{{headTitle}}</a>
        </div>
        <div class="navbar-right">
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>
          <ul class="nav navbar-nav">
            <li><a data-toggle="modal" data-target="#signin" style="cursor:pointer">登录</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="modal fade" id="signin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title" id="myModalLabel">登陆</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-2 control-label">你是谁</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" v-model="loginName" placeholder="登录名">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">车钥匙</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" v-model="loginPwd" placeholder="密码">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="login">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
    import Bus from '../bus.js';
    export default{
        data(){
            return{
                loginName:'',
                loginPwd:'',
                headTitle:'后台接口管理系统'
            }
        },
        methods:{
            login:function(){
                alert(this.loginName)
                $("#signin").modal('hide')
                console.log(this.$store)
                localStorage.usertype=this.loginName
                this.$store.commit('changeType',localStorage.usertype)
            }
        }
    }
</script>
