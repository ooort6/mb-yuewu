<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <ul class="ul_1">
        <div class="ul_2"></div>
        <li class="li_1" v-for="(item,index) in items " :key="item.id">
          <span  @click="activeShow(index)">{{item.id}}</span>
        </li>
      </ul>
      <img src="../../assets/image/jiantou.png" style="margin-top:2.91rem;width:.28rem" alt />

      <div v-show="ins==0" style="margin-top:0.3rem">
        <img src="../../assets/image/tutu11.png" style="width:94%;margin:0 auto" alt />
        <img
          src="../../assets/image/tutu22.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
           <img
          src="../../assets/image/389.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
             <img
          src="../../assets/image/489.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
             <img
          src="../../assets/image/589.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
            <img
          src="../../assets/image/689.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
            <img
          src="../../assets/image/789.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
        <img
          src="../../assets/image/889.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem;margin-bottom:2.146667rem"
          alt
        />
        <!-- <div></div> -->
      </div>

      <div v-show="ins==1" style="margin-top:0.3rem">
        <img src="../../assets/image/tutu21.png" style="width:94%;margin:0 auto;" alt />
        <img
          src="../../assets/image/tutu20.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
          <img
          src="../../assets/image/tutu201.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
          <img
          src="../../assets/image/tutu202.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
          <img
          src="../../assets/image/tutu204.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
        <img
          src="../../assets/image/tutu207.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem;margin-bottom:2.146667rem"
          alt
        />
      </div>

      <div v-show="ins==2" style="margin-top:0.3rem">
        <img src="../../assets/image/1tu.png" style="width:94%;margin:0 auto;" alt />
        <img
          src="../../assets/image/2tu.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />

       <img
          src="../../assets/image/3tu.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
          <img
          src="../../assets/image/4tu.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
          <img
          src="../../assets/image/5tu.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem"
          alt
        />
          <img
          src="../../assets/image/6tu.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem;margin-bottom:2.146667rem"
          alt
        />

      </div>

      <div v-show="ins==3" style="margin-top:0.3rem">
       <img src="../../assets/image/zu6.png" style="width:94%;margin:0 auto;margin-bottom:2.146667rem" alt />
            <!-- <img
          src="../../assets/image/6tu.png"
          style="width:94%;margin:0 auto;margin-top:1.66667rem;margin-bottom:2.146667rem"
          alt
        /> -->
        <!-- <img src="../../assets/image/nl.png" style="width:94%;margin:0 auto;margin-top:0.66667rem" alt="">

        <img src="../../assets/image/jie.png" style="width:94%;margin:0 auto;margin-top:0.66667rem;" alt="">
        <img src="../../assets/image/jie1.png" style="width:94%;margin:0 auto;margin-top:0.66667rem;" alt="">
        <img src="../../assets/image/jie2.png" style="width:94%;margin:0 auto;margin-top:0.66667rem;margin-bottom:2.146667rem" alt="">-->
      </div>

      <div v-show="ins==4" style="margin-top:0.3rem">
              <img src="../../assets/image/tu31.png" style="width:94%;margin:0 auto" alt />
              <img src="../../assets/image/tu32.png" style="width:94%;margin:0 auto;margin-top:1.66667rem" alt />
              <img src="../../assets/image/tu33.png" style="width:94%;margin:0 auto;margin-top:1.66667rem;margin-bottom:2.146667rem" alt />

      </div>

   <div v-show="ins==5" style="margin-top:0.3rem">
              <img src="../../assets/image/tu41.png" style="width:94%;margin:0 auto" alt />
              <img src="../../assets/image/tu.png" style="width:94%;margin:0 auto;margin-top:1.66667rem" alt />
              <img src="../../assets/image/tu43.png" style="width:94%;margin:0 auto;margin-bottom:2.146667rem;margin-top:1.66667rem" alt />

      </div>


        <div v-show="ins==6" style="margin-top:0.3rem">
              <img src="../../assets/image/tutu7.png" style="width:94%;margin:0 auto;margin-bottom:2.146667rem;" alt />


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
      tittle: "关于我们",
      num: 0,
      ins: 0,
      // ins:4,
      items: [
        { id: "多点触控软硬件解决方案" },
        { id: "互动投影" },
        { id: "虚拟成像" },
        { id: "识别系统" },
        { id: "电子沙盘系统" },
        { id: "投影拼接融合" },
        { id: "增强现实" }
        //  { id: "自助导览系统" }
      ],
      header_content: [
        {
          id: "资源统一管理 ",
          content:
            "对馆内环境资源、设备资源、网络资源、应用资源、内容资源、电力资源六大类资源进行统一管理；提供资源统一视图快速检索资源；"
          // img: require("../../../static/images/kz组 5.png")
        },
        {
          id: "智能调度控制 ",
          content:
            "通过移动终端或PC完成多终端内容快速智能调度，实现针对展示设备的展示内容可视化推送；对馆内设备、网络、电力等各类资源统一控制；"
          // img: require("../../../static/images/kz组 4.png")
        },
        {
          id: "状态实时监控 ",
          content:
            "基于对展馆内的资源统一管理实时获取资源运行数据及状态，并提供可视化监控视图；异常监控数据实时告警并结合设备控制及时处理故障；"
          // img: require("../../../static/images/kz组 2.png")
        },
        {
          id: "快速灵活布展 ",
          content:
            "提供展示主题策略配置，多类展示主线预先配置，灵活切换；基于云计算技术构建平台，满足外出快速灵活布展需求；"
          // img: require("../../../static/images/kz组 3.png")
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      // console.log(to,from)
      if (to.params.ins != from.params.ins) {
        this.ins = to.params.ins;
        // this.$router.go(0);//重新加载数据
      }
    }
  },
  created() {
    // console.log(this.$route.params)
  },
  methods: {
    ...mapMutations({
      setNum: "SET_NUM"
    }),
    activeShow(index) {
      this.ins = index;
    }
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
  .mb(0);
  .ul_1 {
    position: fixed;
    top: 0.493333rem;
    left: 3%;
    width: 9.466667rem;
    height: 2.873333rem;
    // background: red;
    margin: 0 auto;
    margin-top: 0.293333rem;
    display: block;

    // display: flex;
    // justify-content: space-around;
    // align-items: center;
    // flex-wrap: wrap;
    box-shadow: 0px 2px 10px 1px rgba(101, 101, 101, 0.1);
    background: rgba(255, 255, 255, 1);
    .ul_2 {
      height: 0.3rem;
      background: #f6f6f6;
    }

    .li_1 {
      display: block;
      float: left;
      margin-top: 5%;
      margin-left: 2%;
      margin-right: 2%;
      background: #d4d4d4;
      color: #262022;
      // width: 2.906667rem;
      padding: 0.8%;
      height: 0.48rem;

      border-radius: 0.133333rem;
      span {
        display: block;

        //  width: 2.906667rem;
        height: 0.48rem;
        border-radius: 0.133333rem;
      }

      .active {
        background: #333333;
        color: #fed100;
      }
    }
  }
}
</style>
