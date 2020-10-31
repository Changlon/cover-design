<template>
    <div id="father">

       <!-- 目录 -->
       <el-drawer
         title="目录"
         :visible.sync="list"
         direction="ltr"
         >
         <span>当前没有排版！快去创建吧</span>
       </el-drawer>

      <!-- Header头部导航 -->
      <el-header>
        <!-- 导航 -->
         <el-row :gutter="10">
           <el-col :span="23" :xs="18">
             <div class="grid-content bg-purple">
              <span class="logo-title">英文排版 <i class="el-icon-printer"></i></span>
              </div>
            </el-col>
           <el-col :span="1" :xs="6">
             <div class="grid-content bg-purple" style="text-align: center;">
             <span class="list" @click="list=!list">目录</span>
             </div>
            </el-col>
         </el-row>

        </el-header>

        <!-- 面包屑 -->
         <el-breadcrumb separator-class="el-icon-arrow-right">
           <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item :to="{path:'/edit'}" v-show="$route.path==='/edit'">编辑</el-breadcrumb-item>

          </el-breadcrumb>

        <!-- 路由组件 -->
        <keep-alive>
           <router-view/>
        </keep-alive>

      <!-- 底部导航 -->

      <el-footer>
          Designed At ©2020 Created by Changlon
      </el-footer>
    </div>
</template>

<script>
export default {
  mounted(){
     // console.log(this.$route)
  },
  data(){
    return  {
      list:false, //控制目录的关闭与打开
    }

  }

}
</script>

<style>

  /* 设置footer样式 */
  .el-footer{
    margin-top: 1.25rem;
    padding: 2.5rem 3.125rem;
    color:#FFFFFF;
    font-size: 0.875rem;
    background-color: #000;
    text-align: center;
    position: relative;
    width: 100%;
  }

  /* 设置面包屑 */
  .el-breadcrumb{
      margin-top: 0.625rem;
      padding: 0.625rem 5.25rem;
  }
  .el-breadcrumb__inner{
    color: #909399;
  }

  .is-link{
    color:#FFFFFF!important;
    font-weight: 400!important;
  }

 /* 设置网页背景 */
  /* #father::after{
    content: "";
    background-image: url(./static/images/2.jpg);
    background-repeat: repeat-y;
    background-size: cover;

    opacity: .7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
 */

body{
  background-image: url(static/images/2.jpg);
  background-attachment: fixed;
}

  /* Header导航样式 */
  .el-row {
     /* margin-bottom: 20px; */
     &:last-child {
       margin-bottom: 0;
     }
   }

   .el-col {
     border-radius: 4px;

   }
   .bg-purple-dark {
     background:#FFFFFF;
   }
   .bg-purple {
     background: #000000;
   }
   .bg-purple-light {
     background: #e5e9f2;
   }
   .grid-content {
     border-radius: 4px;
     min-height: 36px;
     height: 3.925rem;
     line-height: 3.925rem;

   }
   .row-bg {
     padding: 10px 0;
     background-color: #f9fafc;
   }
   .logo-title{
     font-size: 1.125rem;
     color:#fff;
     font-weight: bold;
     letter-spacing: 0.0625rem;
     position: relative;
     left: 10%;
   }
   .el-icon-printer{
     color: #E6A23C;
   }

   .list{
     font-size: 0.8rem;
     cursor: pointer;
     color: #fff;

   }
   .list:hover{
     font-size: 0.9rem;
     cursor: pointer;
     color: #909399;

   }


</style>
