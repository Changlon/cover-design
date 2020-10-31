<template>
  <div class="create">
    <!-- 创建标题 -->

    <el-drawer
      title="创建排版"
      :visible.sync="title"
      direction="ttb"
       style="min-height: 90rem;"
      >

      <el-form label-position="right" label-width="600px" :model="formLabelAlign" >
           <el-form-item label="标题:" style="text-align: left;">
             <el-input v-model="formLabelAlign.name" style="width: 26.25rem;"></el-input>
           </el-form-item>
           <el-form-item label="中文导读:"  style="text-align: left;">
             <el-input v-model="formLabelAlign.guide" style="width: 26.25rem;"></el-input>
           </el-form-item>
           <el-form-item label="图片:"  style="text-align: left;">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                 <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
           </el-form-item>
           <el-form-item style="text-align: left">
               <el-button type="primary" @click="goEdit">确定</el-button>
               <el-button @click="title=!title" >取消</el-button>
             </el-form-item>
         </el-form>
    </el-drawer>

       <el-tooltip class="item" effect="dark" content="点击创建一个排版" placement="top-start">
           <i  @click="title=!title" class="el-icon-plus plus" style="font-size: 9.5rem;position: relative;top: -10%;"></i>
       </el-tooltip>

  </div>



</template>

<script>
  export default {
    data(){
      return{
        title:false, //控制标题的关闭和打开
        formLabelAlign: { //表单的数据
          name: '',
          guide: '',
        },
        fileList: [ //上传成功的图片
          {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        ]
      }
    },
    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      goEdit(){
        this.title=!this.title
        this.$router.push('/edit')
      }

    }
  }
</script>

<style >

.create{
  /* border: 1px solid red; */
  text-align: center;
  padding: 6.25rem 0;
  margin-top: 0.625rem;
  min-height: 23.2rem;
}

 .el-drawer{
   overflow-y: auto;
 }

  .upload-demo{
    width: 18.75rem;

  }

  .plus{
    color: #DCDFE6;

  }
 .plus:hover{
   color: #5cb6ff;
 }

</style>
