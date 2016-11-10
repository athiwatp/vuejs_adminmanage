<template>
    <div class="container-fluid" style="margin-bottom:80px">
      <div class="col-md-3 list-left">
        <el-tree :data="data" :highlight-current="true" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="col-md-9 list-right">
        <h3>{{titleName}}</h3>
        <div v-show="!(isPro||isMod||isInt)" class="">
          <button class="btn btn-danger my-btn" @click="newProject" v-if="showBtn">新建项目</button>
        </div>
        <div v-show="isPro" class="">
          <button class="btn btn-danger my-btn" v-if="showBtn">新建模块</button>
          <table class="table table-bordered table-responsive ">
            <tbody>
            <tr>
              <td  class="col-md-3">开始时间</td>
              <td  class="col-md-9">{{projectInfo.beginTime}}</td>
            </tr>
            <tr>
              <td  class="col-md-3">结束时间</td>
              <td  class="col-md-9">{{projectInfo.endTime}}</td>
            </tr>
            <tr>
              <td  class="col-md-3">描述</td>
              <td  class="col-md-9">{{projectInfo.dec}}</td>
            </tr>
            <tr>
              <td>后台开发人员</td>
              <td>
                <code><span v-for="i in projectInfo.adminPerson">{{i}}&nbsp;&nbsp;&nbsp;&nbsp;</span></code>
              </td>
            </tr>
            <tr>
              <td>前端开发人员</td>
              <td>
                <code><span v-for="i in projectInfo.webPerson">{{i}}&nbsp;&nbsp;&nbsp;&nbsp;</span></code>
              </td>
            </tr>
            <tr>
              <td>测试人员</td>
              <td>
                <code><span v-for="i in projectInfo.testPerson">{{i}}&nbsp;&nbsp;&nbsp;&nbsp;</span></code>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-show="isMod" class="">
          <button class="btn btn-danger my-btn" v-if="showBtn">新建接口</button>
          <table class="table table-bordered table-responsive ">
            <tbody>
            <tr>
              <td  class="col-md-3">最后一次编辑时间</td>
              <td  class="col-md-9">{{moduleInfo.lastTime}}</td>
            </tr>
            <tr>
              <td  class="col-md-3">描述</td>
              <td  class="col-md-9">{{moduleInfo.dec}}</td>
            </tr>
            <tr>
              <td>相关开发人员</td>
              <td>
                <code><span v-for="i in moduleInfo.person">{{i}}&nbsp;&nbsp;&nbsp;&nbsp;</span></code>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-show="isInt" class="">
          <button class="btn btn-danger my-btn" v-if="showBtn">修改接口</button>
          <table class="table table-bordered table-responsive ">
            <tbody>
            <tr>
              <td  class="col-md-3">责任人</td>
              <td  class="col-md-9">斯瓦辛格</td>
            </tr>
            <tr>
              <td>接口名</td>
              <td>{{titleName}}</td>
            </tr>
            <tr>
              <td>AJAX</td>
              <td>POST</td>
            </tr>
            <tr>
              <td>URL</td>
              <td><code>http://192.168.2.136:8080/markApplication/getNotice</code></td>
            </tr>
            <tr>
              <td>参数</td>
              <td>
                <table class="table table-bordered table-responsive">
                  <thead>
                    <tr>
                      <td>参数</td>
                      <td>类型</td>
                      <td>意义</td>
                      <td>备注</td>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>username</td>
                        <td>String</td>
                        <td>姓名</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>lawyerCardId</td>
                        <td>String</td>
                        <td>律师证号码</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>phone</td>
                        <td>String</td>
                        <td>预留手机号</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>checkcode</td>
                        <td>String</td>
                        <td>短信验证码</td>
                        <td></td>
                      </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>应答</td>
              <td><code>{"code":0,"msg":"发送成功","data":null}</code></td>
            </tr>
            <tr>
              <td><button class="btn btn-info">测试</button></td>
              <td>{"code":0,"msg":"发送成功","data":null}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
<style scope>
.my-btn{
    margin-bottom: 10px;
}
.list-left{
    margin-top:20px;
    border-right:1px solid #080808
}
.list-right{
    margin-top:20px;
    border-left:1px solid #080808;
    margin-left:-1px
}
.el-tree {
    cursor: default;
    background: #eee;
    border:0px solid #d3dce6;
}
</style>

<script>
  import Bus from '../bus.js';
  export default {
    data() {
      return {
        msg:'',
        titleName:'',
        text:'',
        showBtn:false,
        isPro:false,
        isMod:false,
        isInt:false,
        projectInfo:{
          beginTime:"2016-10-10",
          endTime:"2016-10-10",
          adminPerson:["陈捷","马涛","颜友福"],
          webPerson:["唐荣洋","林明德"],
          testPerson:["刘诗慧"],
          dec:"海峡大数据项目是以福州市为辐射中心为福州市、福建省、乃至海峡两岸为服务对象"
        },
        moduleInfo:{
          lastTime:"2016-11-10",
          person:["陈捷","唐荣洋"],
          dec:"xxxxx模块"
        },
        data: [{
          label: '海峡大数据项目',
          children: [{
            label: '城市运行管理',
            children:[
                {label:'医疗机构'},
                {label:'警务信息'},
                {label:'专利信息'},
            ]
          }]
        }, {
          label: '闽侯大数据项目',
          children: [{
            label: '领导驾驶舱',
            children:[
                {label:'产业经济分析'},
                {label:'医疗资源分布'},
                {label:'历年GDP'},
            ]
          }, {
            label: '舆情红黑榜'
          }]
        }, {
          label: '南昌法院项目',
          children: [{
            label: '预约立案',
            children:[
                {label:'暂存预约立案'},
                {label:'提交预约立案'},
                {label:'取消预约立案'},
            ]
          }, {
            label: '代理案件',
            children:[
                {label:'暂存代理案件'},
                {label:'提交代理案件'},
                {label:'取消代理案件'},
            ]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    computed:{
        showBtn:function(){
            return Boolean(Number(this.$store.state.usertype))
        }
    },
    methods:{
      newProject:function(){
        alert(localStorage.user);
      },
      showProject:function(){
          this.isPro=true
          this.isMod=false
          this.isInt=false
      },
      showModule:function(){
          this.isPro=false
          this.isMod=true
          this.isInt=false
      },
      showInterface:function(){
          this.isPro=false
          this.isMod=false
          this.isInt=true
      },
      handleNodeClick:function(obj,node,self){
        console.log(this.$store.state)
        this.msg=obj.label
        this.titleName=obj.label
        switch (node.level){
            case 0:
              this.showProject();
              break
            case 1:
              this.showModule();
              break
            case 2:
              this.showInterface();
              break
        }
      }
    }
  };
</script>
