<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
  export default {
    data() {
      return {
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
    }
  };
</script>
