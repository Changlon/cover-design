<template>

 <div>
   <el-header>

    <el-row style="padding-top: 1.25rem;padding-left: 2.25rem;">
     <el-button type="danger" plain size="small">爬取单词</el-button>
      <el-button type="primary" plain size="small">预览</el-button>
      <el-button type="warning" plain size="small">打印</el-button>
    </el-row>

   </el-header>
<el-row :gutter="20">
  <el-col :span="14" :xs="24">
    <div class="words">
      <!-- 编辑器wangEditor -->
          <wangEditor v-model="wangEditorDetail" :isClear="isClear" @change="wangEditorChange"></wangEditor>
    </div>

  </el-col>
  <el-col :span="10" :xs="24">
    <div class="words" >
          <!-- <span class="nothing" style="color: #909399;">暂无数据... </span> -->
          <wordCard/>
          <wordCard/>
          <wordCard/>
          <wordCard/>
          <wordCard/>
          <wordCard/>
    </div>
  </el-col>

</el-row>
 </div>

</template>

<script>

  import wangEditor from '../../components/wangEditor/wangEditor.vue'
  import wordCard from '../../components/wordCard/wordCard.vue'


  export default {
    mounted() {
      this.wangEditorDetail = "开始排版..."; //设置富文本框默认显示内容
    },
    data(){
      return {
          isClear: false,//设置为true的时候，这个可以用this.wangEditorDetail=''来替代
          wangEditorDetail: ""
      }
    },
    methods:{
      wangEditorChange(val) {
        console.log(val);
      }
    },
    components:{
      wangEditor,
      wordCard,
    }

  }
</script>

<style scoped="scoped">
 .el-row {

     margin-bottom: 1.25rem;
     &:last-child {
       margin-bottom: 0;
     }
   }

   .el-col {
     margin-bottom: 1.25rem;
     margin-top: .5rem;
     &:last-child {
       margin-bottom: 0;
     }

     border-radius: 4px;
    }

   .words{
     border-radius: 4px;
     line-height: 0;
     /* min-height: 2rem; */
     padding: 1.625rem 1.25rem;
      background: rgba(100,100,100,.6);


   }
</style>
