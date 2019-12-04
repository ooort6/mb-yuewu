<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <div class="hd_1">
        <div class="c_2">
          <van-swipe style :autoplay="3000">
            <van-swipe-item>
              <img src="../../assets/images/141.png" width="100%" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../assets/images/142.png" width="100%" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- <img src="../../assets/images/144.png" width="100%" alt /> -->
        <!-- <div class="c_2">
 <van-swipe style :autoplay="3000" :show-indicators="false">
        <van-swipe-item>
          <img src="../../assets/images/2.png" width="100%" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/3k.png" width="100%" alt />
        </van-swipe-item>
         <van-swipe-item>
          <img src="../../assets/images/ju.png" width="100%" alt />
        </van-swipe-item>
         <van-swipe-item>
          <img src="../../assets/images/4.png" width="100%" alt />
        </van-swipe-item>
      </van-swipe>
        </div>-->
      </div>
      <!-- <span class="span_1">产品购买与咨询</span> -->

      <div class="box_1">
        <span class="span_box1">智能视频分析系统</span>
        <div class="box_2">
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/1421.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">视频分析能力</span>
              <span class="span_2">客流分析能力、行为能力、车辆识别、人脸识别</span>
            </div>
          </div>
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/146.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">安防监控能力</span>
              <span class="span_2">消防监控能力、防盗入侵监控能力、电梯告警能力、门禁管理能力</span>
            </div>
          </div>
        </div>

        <div class="box_2">
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/149.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">GIS地图能力</span>
              <span class="span_2">基于地图网络分析、电视墙展示</span>
            </div>
          </div>
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/1520.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">数据分析能力</span>
              <span class="span_2">告警统计分析、日常数据监控</span>
            </div>
          </div>
        </div>
      </div>

      <div class="box_1" style="background:#f1f1f1">
        <span class="span_box1">高精度定位系统</span>
        <div class="box_2">
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/1421.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">视频分析能力</span>
              <span class="span_2">客流分析能力、行为能力、车辆识别、人脸识别</span>
            </div>
          </div>
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/146.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">安防监控能力</span>
              <span class="span_2">消防监控能力、防盗入侵监控能力、电梯告警能力、门禁管理能力</span>
            </div>
          </div>
        </div>

        <div class="box_2">
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/149.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">GIS地图能力</span>
              <span class="span_2">基于地图网络分析、电视墙展示</span>
            </div>
          </div>
          <div class="box_3">
            <div class="box_4">
              <img src="../../assets/images/1520.png" width="100%" alt />
            </div>
            <div class="box_5">
              <span class="span_3">数据分析能力</span>
              <span class="span_2">告警统计分析、日常数据监控</span>
            </div>
          </div>
        </div>
      </div>

      <div class="contents_1">
        <span class="span_7">
          展览馆内通常需要对来访人员进行统计和贵重物品跟踪，为馆方提供可靠的人员行走分析及物品定位，可以提高展馆的有效性和科技含量。
          展厅人员定位解决方案，采用超宽带（UWB）实时定位系统。通过在展馆内布设一定数量的基站Anchor），实时精确地定位人员佩戴的标签（Tag），准确实时地将人员的位置信息反馈到监控中心，方便管理人员监控、调度以及后期行为分析等，该系统精度最高可达到10cm。
        </span>
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
    height: 5.413333rem;
    background: url("../../assets/images/000.png") no-repeat;
    background-size: 100%;
    padding-top: 4.266667rem;

    .c_2 {
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
    height: 6.893333rem;
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

  .contents_1 {
    height: 4.346667rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .span_7 {
      display: block;
      width: 94%;
      text-align: left;
      font-size: 0.186667rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
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
