<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <img src="../../assets/image/bg.png" width="100%" alt />
      <!-- <span class="span_1">产品购买与咨询</span> -->
      <div class="box_1">
        <span class="span_2">在线交谈</span>
        <p class="p_1">工作日 9:00-12:00 14:00-18:00</p>
        <p class="p_1">客服代表一对一即时消息沟通</p>
        <div class="btn">售前在线咨询</div>
      </div>
        <div class="box_1" style="height:3.826667rem">
        <span class="span_2">项目咨询</span>
        <p class="p_1">免费一对一项目与解决方案咨询服务 </p>
        <p class="p_1">1个工作日内为您安排销售顾问</p>
        <div class="btn">填写咨询表单</div>
      </div>
          <div class="box_1" style="height:3.826667rem">
        <span class="span_2">电话咨询</span>
        <p class="p_1">全国统一售前服务热线，若遇线路繁忙</p>
        <p class="p_1">请选择 <a style="color:#262022;">在线交谈</a> 进行产品和服务咨询</p>
        <span class="span_3">021-22819090</span>
      </div>
      <div class="box_1"  style="height:3.626667rem">
        <span class="span_2">成为销售合作伙伴</span>
        <p class="p_1">越梧渠道化市场战略以及全方位的渠道体系支持，期待与您携手</p>
        <div class="btn">立即申请</div>
      </div>
        <div class="box_1" style="height:3.626667rem;margin-bottom:1.3rem">
        <span class="span_2">成为供应合作伙伴</span>
        <p class="p_1">致力于建设高效、互利共赢的供应商协作体系，与您共谋行业发展</p>
        <div class="btn">立即申请</div>
      </div>


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
  .box_1 {
    box-shadow:0px 5px 5px 0px rgba(173,173,173,0.05);
    width: 94.67%;
    margin: 0 auto;
    margin-top: .4rem;
    height: 3.6rem;
    background: #fff;
    margin-bottom:.373333rem;
    .span_2 {
      text-align: left;
      display: block;
      padding-top: 0.346667rem;
      margin-left: 0.32rem;
      margin-bottom: 0.266667rem;
      font-size: 18px;
   font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(38,32,34,1);
    }
    .span_3{
      display: block;
      text-align: right;
      margin-right: 6%;
      margin-top: .466667rem;
      font-size:24px;
       margin-left: 0.32rem;
      font-family:Impact;
      font-weight:400;
      color:#262022;
    }
    .p_1 {
      text-align: left;
      margin-left: 0.32rem;
      width: 90%;
      margin-bottom: 0.166667rem;
      font-size: 14px;
      font-family: "PingFang-SC-Regular";
      font-weight: 400;
      color: rgba(83, 83, 83, 1);
    }
    .btn {
      margin-top: 0.533333rem;
      margin-left:68%;
      width: 2.313333rem;
      height: 0.533333rem;
      border: 1px solid rgba(29, 32, 136, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f6f6f6;
      background: #262022;
    }
  }
}
</style>
