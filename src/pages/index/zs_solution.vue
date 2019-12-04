<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <div class="hd_1">

      </div>
      <!-- <span class="span_1">产品购买与咨询</span> -->





      <div class="box_1" style="background:#f1f1f1">
        <span class="span_box1">虚拟巡游系统</span>
        <div class="box_2">
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/161.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">VR全景</span>
              <span class="span_2">通过3D驱动引擎以及VR技术，营造身临其境的参观感受。</span>
            </div>
          </div>
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/1623.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">成本低廉</span>
              <span class="span_2">使用AI技术自动完成仿真模型，成本低廉。
</span>
            </div>
          </div>
        </div>

        <div class="box_2">
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/164.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">快速更新</span>
              <span class="span_2">仿真模型内容可局部更新，可快速实现网上模型与现实场景的一致性。</span>
            </div>
          </div>
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/165.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">营销植入</span>
              <span class="span_2">可在场景实体中添加文字、图片及视频，通过多种在线互动方式，实现业务宣传、企业推广。</span>
            </div>
          </div>
        </div>
      </div>


      <!-- <div style="height:.22rem;width:100%;background:#f5f6f9"></div> -->
      <common-footer></common-footer>
      <!-- <img src="../../assets/image/" alt=""> -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import commonHeader from "common/common-header";
import commonFooter from "common/common-footer";

export default {
  data() {
    return {
      tittle: "联系我们",
      num: 0
    };
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: "SET_NUM"
    })
  },
  components: {
    commonHeader,
    commonFooter
  },
  computed: {
    ...mapGetters(["number"]),
    ...mapState({
      number: state => state.home.number
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content {
  background: #f6f6f6;
  padding-top: 0;
  .mb(0);
  .span_1 {
    display: block;
    margin-top: 0.72rem;
    margin-bottom: 0.48rem;
    font-size: 24px;
    font-family: "PingFang-SC-Medium";
    font-weight: 500;
    color: rgba(18, 39, 127, 1);
  }
  .hd_1 {
    height:9.76rem;
    background: url("../../assets/images/160.png") no-repeat;
    background-size: 100%;

      .c_2{
        width: 7rem;
        height: 4.413333rem;
        // background: red;
        margin-left: 2.56rem;
      }
      // .c_2{
      //   width: 6.8rem;
      //   height: 1.293333rem;
      //     // background: blue;
      // margin-left: 1.746667rem;
      // margin-bottom: 1.48rem;
      // }

  }
  .box_1 {
    // box-shadow:0px 5px 5px 0px rgba(173,173,173,0.05);
    // width: 94.67%;
    // margin: 0 auto;
    // margin-top: .4rem;
    // height: 3.6rem;
    // background: #fff;
    // margin-bottom:.373333rem;
    height:7.893333rem;
    background: #fff;
    padding-top: 0.866667rem;
    .span_box1 {
      display: block;
      margin-bottom: 0.893333rem;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(9, 30, 51, 1);

    }
    .box_2 {
      display: flex;
      justify-content: space-between;
      height: 2.466667rem;
      width: 94%;
      margin: 0 auto;
      margin-bottom: 5%;

      .box_3 {
        width: 50%;
        // background: red;
        .box_4 {
          width: 1.166667rem;
          height: 100%;
          float: left;
        }
        .box_5 {
          padding-left: 4%;
          width: 3.246667rem;
          float: left;
          width: 66%;
          height: 100%;
          .span_3 {
            display: block;
            text-align: left;
            padding-left: 4%;
            margin-bottom: 6%;
            font-size: 16px;
            // width: 45%;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(31, 50, 69, 1);
          }
          .span_2 {
            font-size: 0.09rem;
            font-family: PingFang SC;
            color: rgba(31, 50, 69, 1);
            display: block;
            text-align: left;
            padding-left: 2%;
          }
        }
      }
    }
  }

.contents_1{
  height: 4.346667rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
    .span_7{
      display: block;
      width: 94%;
      text-align: left;
      font-size:9px;
font-family:PingFang SC;
font-weight:bold;
color:rgba(153,153,153,1);
    }
}

  .title_1 {
    display: flex;
    text-align: left;
    align-items: flex-end;
    padding-bottom: 2%;
    height: 1.253333rem;

    // background: red;
    width: 100%;
    .spans_1 {
      display: flex;
      margin-right: 2%;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      padding-left: 0.253333rem;
      color: rgba(51, 51, 51, 1);
    }
  }

  .adv_1 {
    height: 5.493333rem;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .span_4 {
      display: block;
      width: 94%;
      // background: black;
      margin: 0 auto;
      height: 4.253333rem;

      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-align: left;
    }
  }
  .footer_2 {
    height: 11.773333rem;
    background: #fff;
    padding-top: 0.626667rem;
    .span_1 {
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 0.546667rem;
    }
    .span_2 {
      display: block;
      margin: 0 auto;
      text-align: left;
      width: 9.373333rem;
      height: 3.693333rem;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 0.8rem;
    }
    .span_3 {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      display: block;
      margin-left: 3%;
      text-align: left;
      margin-bottom: 2%;
    }
    .span_4 {
      width: 9.293333rem;
      height: 3.066667rem;
      display: block;
      margin: 0 auto;
      text-align: left;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }

  .content_1 {
    height: 19.286667rem;
    background: #fff;
    padding-top: 0.626667rem;
    .content_2 {
      width: 9.333333rem;
      margin: 0 auto;
      // background: red;
      height: 2.553333rem;
      .img_1 {
        display: block;
        float: left;
        margin-right: 2%;
      }
      .content_3 {
        padding-top: 3%;
        width: 6.693333rem;
        height: 2.853333rem;
        float: left;
        text-align: left;
        font-size: 16px;
        line-height: 30px;
        color: #666666;
      }
    }
  }
}
</style>
