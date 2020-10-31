<template>
  <div style="margin-bottom: 1.25rem;">
    <el-card class="box-card">

      <div slot="header" class="clearfix">
        <i class="el-icon-close close"></i>
       <div class="word-info-wrap">

              <div class="word-info-top">
                <span class="word">achieve</span>
                <span class="word-structure">
           [ə'tʃi:v] <i class="el-icon-microphone" style="font-size:0.875rem ;"></i> n.恋爱；酷爱；亲爱的；vt.热爱;喜爱的人们</span>
                <el-button  type="text">拉黑</el-button>
              </div>

              <div class="word-info-case">

                    <span class="case-title">例句: </span>
                    <span class="case-content"> It was love at first sight. 他们一见钟情。</span>

              </div>

       </div>

      </div>

      <div class="bottom-choice">
          <div class="choice-left">
            <div class="choice-left-top">
              <el-switch
                v-model="isAnalysis"
                active-text="精析">
              </el-switch>
            </div>
            <div class="choice-left-bottom">
                <el-radio  :disabled="!isAnalysis" v-model="direction" label="l">左</el-radio>
                <el-radio  :disabled="!isAnalysis" v-model="direction" label="r">右</el-radio>
            </div>
          </div>
          <div class="choice-right">

          </div>
      </div>
    </el-card>

  </div>
</template>

<script>
  export default {
      data(){
        return{
          isAnalysis:false,//是否显示精析
          direction:"l",//默认将精析放在左
        }
      }
  }
</script>


<style >

/* 卡片底部样式 */

.bottom-choice{
  display: flex;
}
.choice-left{
  width: 25%;
  height:3.125rem;
  /* background-color: red; */
}
.choice-right{
  flex: 1;
  height:3.125rem;
  /* background-color: blue; */
}
.choice-left-bottom{
  margin-top: 0.625rem;
}
.el-radio {
    margin-right: 10px;
}

/* 卡片样式
 */
 .close{
   font-size: 1.125rem;
  position: absolute;
  top: 0.125rem;
  right:0.125rem
}
 .close:hover{
   color: #66b1ff;
   font-size: 1rem;
}

.word-info-top,.word-info-case{
  display: flex;
  justify-content: space-around;
  align-items: baseline;

}

.word-info-case{
  justify-content: flex-start;
}

.word-structure{
  font-size: 0.75rem;
  display: inline-block;
  width: 65%;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}

.word{
  font-size: 1.125rem;
}


.word-info-case{
    font-size: 0.75rem;
}

.case-title{
  font-weight: bold;
  padding-left: 0.9375rem;
}
.case-content{
  padding-left: 0.3125rem;
}
.el-card__header{
  position: relative;
  padding: 18px 20px;
  border-bottom: 1px solid #EBEEF5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 8px;

}




.el-card__body {
    padding: 10px;
}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }


</style>
