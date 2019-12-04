<template>
  <div class="header-box">
    <van-row type="flex" style="width:98%" justify="space-between">
      <van-col span="6">
        <!-- <van-icon
          name="bars"
          @click="isShow1"
          style="display:block;float:left;margin-left:12%;margin-top:3%"
          size="25px"
          color="#F2B500"
        /> -->
        <img
        src="../assets/images/fg.png"
          @click="isShow1"
           style="display:block;float:left;margin-left:12%;margin-top:8%;width:20px"
         alt="">
      </van-col>
      <van-col span="6" style="display:flex;align-items:center">
        <img
          src="../assets/images/logo.png"
          @click="gotoHome"
          width="75%"
          style="display:block; margin:0 auto; margin-top:4%"
          alt
        />
      </van-col>
      <van-col span="6">
        <!-- <van-icon
          class="wap-home"
          @click="gotoHome"
          name="wap-home"
          style="margin-top:3%;"
          size="26px"
          color="#F2B500"
        /> -->
      </van-col>
    </van-row>
    <!-- <van-popup v-model="show" duration="0.1"   position="left" :style="{ height: '100%',width:'22%' }">

    <ul style="margin-top:20%">
      <li v-for="(item,index) in items" :key="item.id" class="li_1"  @click="liClick(index)" >
        {{item.id}}
      </li>
    </ul>
    </van-popup>-->
    <div v-show="show1">
      <div class="triangle-down"></div>
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in items"
            :key="item.id"
            class="li_1"
            @click="liClick(index)"
          >{{item.id}}</li>
          <li  class="li_1" @click="isShow2">关闭</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cusInput from "common/cus-input";
// import { Icon } from 'vant'
export default {
  data() {
    return {
      show: false,
      show1: false,
      items: [
        // { id: "产品与解决方案", url: "/solution" },
        { id: "主页介绍", url: "/home" },
        { id: "智慧展厅系统", url: "/z_solution" },
         { id: "辅助控制系统", url: "/f_solution" },
        { id: "展示宣传系统", url: "/zs_solution" },
        { id: "展示技术", url: "/case" },
        { id: "成功案例", url: "/control" },
        // { id: "申请合作", url: "/hezuoform" }
      ]
    };
  },
  props: {
    showright: {
      type: Boolean,
      default: false
    },
    showleft: {
      type: Boolean,
      default: false
    },
    showinput: {
      type: Boolean,
      default: false
    },
    tittle: {
      type: String,
      default: "标题"
    },
    showback: {
      type: Boolean,
      default: true
    },
    showmore: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.goBack();
    },
    gotoHome() {
      this.$router.push("/Home");
    },
    // showPopup() {
    //   this.show = true;
    // },
    isShow1() {
      this.show1 = true;
    },
    isShow2() {
      this.show1 = false;
    },
    liClick(index) {
      this.show1 = false;
      // console.log(this._data.items[index].url)
      let Url = this._data.items[index].url;
      // _this.click-overlay();
      // this.$router.push(Url),
      // console.log(this.show)
      this.show1 = false;
      this.$router.push(Url);
      this.show1 = false;
      // console.log(this.show)
    }
  },
  Mounted() {
    this.show = false;
  },
  components: {
    cusInput
  }
};
</script>

<style lang="less" scoped>
@import "~styles/index.less";
@import "~styles/variable.less";
.header-box {
  // box-shadow:0px 2px 8px 0px rgba(50,50,50,0.52);
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  .h(60);
  .lh(100);
  background-color: @base-color;
  color: @base-header-color;
  .fs(@base-header-size);
  display: flex;
  z-index: 1;
  box-shadow:0px 4px 30px 0px rgba(210,210,210,0.5);
  // .left-icon{
  //   position: relative;
  //   flex: 1;
  //   .icon-back{
  //     position: absolute;
  //     display: inline-block;
  //     .w(50);
  //     .h(50);
  //     .left(25);
  //     .top(25);
  //     background-image: url("../assets/imgs/w-back.svg");
  //     background-size: cover;
  //   }
  // }
  .header-tittle {
    flex: 3;
  }
  .right-icon {
    position: relative;
    flex: 1;
    .icon {
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .right(25);
      .top(5);
      background-image: url("../assets/imgs/more.svg");
      background-size: cover;
    }
  }
  .wap-home {
    // background: red;
    display: block;

    float: right;
  }
  .li_1 {
    font-size: .48rem;
    line-height: 250%;
    font-family: PingFang-SC-Medium;
    color: #fff;

    text-align: left;
    padding-left: 20%;
  }
  .nav {
    width:5.56rem;
    height: 8.24rem;
    background: linear-gradient(-30deg,rgba(195,13,35,1),rgba(224,70,23,1),);;
    position: absolute;
    // border-radius: 0.133333rem;
    top: 0.83333rem;
    left: 0rem;
  }
  .triangle-down {
    width: 0;
    height: 0;
    border-left: 0.26rem solid transparent;
    border-right: 0.26rem solid transparent;
    border-top: 0.32rem solid #fff;
    position: absolute;
    top: 0.8rem;
    left: 0.28rem;
    z-index: 999;
  }
}
</style>
