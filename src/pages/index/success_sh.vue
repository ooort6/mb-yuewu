<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <!-- 555 -->
      <!-- <van-swipe style :autoplay="3000" :height="200" >
        <van-swipe-item>
          <img src="../../assets/image/su_1.png" width="100%" height="100%" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/image/su_2.png" width="100%" height="100%" alt />
        </van-swipe-item>

          <van-swipe-item>
          <img src="../../assets/image/su_4.png" width="100%" height="100%" alt />
        </van-swipe-item>
          <van-swipe-item>
          <img src="../../assets/image/su_5.png" width="100%" height="100%" alt />
        </van-swipe-item>
          <van-swipe-item>
          <img src="../../assets/image/su_6.png" width="100%" height="100%" alt />
        </van-swipe-item>
          <van-swipe-item>
          <img src="../../assets/image/su_8.png" width="100%" height="100%" alt />
        </van-swipe-item>
          <van-swipe-item>
          <img src="../../assets/image/su_9.png" width="100%" height="100%" alt />
        </van-swipe-item>
          <van-swipe-item>
          <img src="../../assets/image/su_10.png" width="100%" height="100%" alt />
        </van-swipe-item>
          <van-swipe-item>
          <img src="../../assets/image/su_22.png" width="100%" height="100%" alt />
        </van-swipe-item>
      </van-swipe>-->
      <div class="box_1">
        <img
          src="../../assets/image/tu45897.png"
          style="width:100%;margin-top:.64rem;margin-bottom:.393333rem"
          alt
        />
      </div>
      <div class="box_1">
        <img src="../../assets/image/tu95495.png" style="width:100%;margin-bottom:.693333rem" alt />
      </div>
      <span class="span_1">目标定位：</span>
      <div class="box_1">
        <span class="span_2">展示馆目标: 超过国内同行业的展示馆，向国外优秀的展示馆看齐</span>
        <span class="span_2">1. 以转型业务和增值业务为主，突出融合业务和综合服务概念</span>
        <span class="span_2">2. 体现未来2~3年的技术和业务发展趋势</span>
        <span class="span_2">3. 中国电信新的业务模式和服务模式</span>
        <span class="span_2">4. 展现中国电信实力和能力，同时能体现电信的价值，并带来效益</span>
      </div>
      <!-- <img src="../../assets/image/crhnrg2.jpg" width="100%" alt=""> -->
      <!-- <img src="../../assets/image/" alt=""> -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import commonHeader from "common/common-header";
export default {
  data() {
    return {
      tittle: "成功案例_云南",
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
    commonHeader
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
  padding-top: 0;
  background: #f9f9f9;
  .mb(0);
  // .box{
  //   width: 98%;
  //   float: right;
  // }
  .box_1 {
    width: 96%;
    margin: 0 auto;
  }
  .span_1 {
    display: block;
    text-align: left;
    margin-left: 2%;
    margin-bottom: 0.226667rem;
    font-size: 0.36rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(41, 41, 43, 1);
  }
  .span_2 {
    text-align: left;
    // margin-left: 2%;
    display: block;
    font-size: 0.266667rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(41, 41, 43, 1);
    margin-bottom: 0.16rem;
  }
}
</style>
