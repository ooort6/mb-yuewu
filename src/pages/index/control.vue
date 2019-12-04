<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <ul class="ul_1">
        <div class="ul_2"></div>
        <li class="li_1" v-for="(item,index) in items " :key="item.id">
          <img :src="item.imgUrl" width="80%" @click="activeShow(index)" alt />
          <span @click="activeShow(index)">{{item.id}}</span>
        </li>
      </ul>
      <img src="../../assets/image/jiantou.png" style="margin-top:2.58rem;width:.28rem" alt />

      <div class="c_1" v-show="ins==0" style="margin-top:1.4rem">
        <span class="span_1">上海电信客户体验中心</span>
        <span
          class="span_2"
        >接待区（参观接待功能）、行业区（智慧民生）、智慧城市（政府监管、产业应用）网真会议区、十二五规划区、企业区（高效协调办公）、个人区（移动个人生活）视讯区（网络综合实力）、结束区（参观功能区）</span>
        <div style="width:96%;margin:0 auto;height:10.5rem">
          <img src="../../assets/images/z5.png" width="100%" alt />
        </div>

        <div class="c_2">
          <span class="span_3">目标定位</span>
          <span
            class="span_4"
          >展示馆目标: 超过国内同行业的展示馆，向国外优秀的展示馆看齐以转型业务和增值业务为主，突出融合业务和综合服务概念体现未来2~3年的技术和业务发展趋势中国电信新的业务模式和服务模式，展现中国电信实力和能力，同时能体现电信的价值，并带来效益</span>
        </div>
        <common-footer></common-footer>
      </div>
      <div class="c_1" v-show="ins==1" style="margin-top:1.4rem;height:8rem">
        <span class="span_1">中国船舶重工业集团业务展示厅</span>
        <span class="span_2">业务展示厅（参观接待、业务展示功能）、大型机组实验室1（智能制造传感器信号采集）、大型机组实验室2（智能制造数字双胞胎业务展示）</span>
        <div style="width:96%;margin:0 auto;height:7.2rem">
          <img src="../../assets/images/z8.png" width="100%" alt />
        </div>

        <div class="c_2" style="height:3.5rem">
          <span class="span_3">目标定位</span>
          <span class="span_4">
            展示本单位在大型机械制造领域内的新技术、新思路。
            接待兄弟单位以及客户单位进行业务体验及交流，促进新技术的应用及推广。
          </span>
        </div>
        <common-footer></common-footer>
      </div>

      <div class="c_1" v-show="ins==2" style="margin-top:1.4rem;height:8rem">
        <span class="span_1">宝山党建中心</span>
        <span
          class="span_2"
        >党建服务中心使用面积为2345平方米，将成为全区党员教育活动的阵地、服务党组织和党员的平台、基层党建成果展示的窗口、党建项目研发的中心、统筹协调区域化党建资源的枢纽。</span>
        <div style="width:96%;margin:0 auto;height:6.5rem">
          <img src="../../assets/images/z7.png" width="100%" alt />
        </div>

        <div class="c_2" style="height:3.5rem">
          <span class="span_3">目标定位</span>
          <span class="span_4">
            展示本单位在大型机械制造领域内的新技术、新思路。
            接待兄弟单位以及客户单位进行业务体验及交流，促进新技术的应用及推广。
          </span>
        </div>
        <div></div>
        <common-footer></common-footer>
      </div>
      <div class="c_1" v-show="ins==3" style="margin-top:1.4rem">
        <span class="span_1">上海计算机软件技术开发中心</span>
        <span class="span_2">于1984年由原国家科委批准成立，是国家863软件专业孵化器(上海)基地、上海市软件行业协会和上海软件园管理办公室的技术支撑单位。</span>
        <div style="width:96%;margin:0 auto;height:7.5rem">
          <img src="../../assets/images/z6.png" width="100%" alt />
        </div>

        <div class="c_2" style="height:4.5rem">
          <span class="span_3">目标定位</span>
          <span class="span_4">
            展示上海市大数据建模与存储、大数据挖掘、大数据融合、数据可视化等关键技术及产业化情况，为政府提供决策数据支撑。
            结合互动技术等领先的科技让展馆科技感与未来感十足，并充分调动参观者能动性，实现良好的参与和互动。
            在丰富内涵的基础上，辅以多媒体展览展示手段，以最直观的方式进行大数据观测体验。
          </span>
        </div>
        <common-footer></common-footer>
      </div>

      <!-- <img src="../../assets/image/crhnrg2.jpg" width="100%" alt=""> -->
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
      tittle: "关于我们",
      num: 0,
      ins: this.$route.query.ins ? this.$route.query.ins : 0,
      // ins:4,
      items: [
        { id: "信息行业", imgUrl: require("../../assets/images/z4.png") },
        { id: "制造行业", imgUrl: require("../../assets/images/z3.png") },
        { id: "政府单位", imgUrl: require("../../assets/images/z2.png") },
        { id: "事业单位", imgUrl: require("../../assets/images/z1.png") }
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
      if(!to.query.ins){
        this.ins=0
      }
      else if (to.query.ins != from.query.ins) {
        this.ins = to.query.ins;
        // this.$router.go(0);//重新加载数据
      }
    }
  },
  created() {
    // console.log(this.$route.params)
  },
  mounted() {
    const _this = this;
      console.log(_this.$route.query.ins);
    //   if(_this.$route.query.ins){
    //  this.ins=_this.$route.query.ins

    //   }else{
    //     this.ins=0
    //   }
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
  padding-top: 0;
  // background: #f6f6f6;
  .mb(0);
  .ul_1 {
    position: fixed;
    top: 0.8rem;
    left: 0%;
    width: 100%;
    height: 4rem;
    // background: red;
    margin: 0 auto;
    // display: block;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    // width: 84%;
    box-shadow: 0px 2px 10px 1px rgba(101, 101, 101, 0.1);
    background: #f6f6f6;
    .ul_2 {
      // height: .96rem;
      background: #f6f6f6;
    }
    .li_1 {
      display: block;
      float: left;
      // margin-top: 5%;
      // margin-left: 3%;
      // background: #d4d4d4;
      color: #262022;
      width: 20%;
      // height: 0.48rem;

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
  .c_1 {
    height: 16.546667rem;
    // background: red;
    padding-top: 0.72rem;
    .span_1 {
      display: block;
      text-align: center;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 550;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 0.613333rem;
    }
    .span_2 {
      display: block;
      width: 96%;
      margin: 0 auto;
      text-align: left;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 0.666667rem;
    }
    .c_2 {
      height: 5.586667rem;
      background: #f6f6f6;
      padding-top: 0.786667rem;
      .span_3 {
        font-size: 18px;
        text-align: left;
        display: block;
        margin-left: 0.266667rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(13, 21, 35, 1);
        margin-bottom: 2.5%;
      }
      .span_4 {
        display: block;
        width: 94%;
        margin: 0 auto;
        text-align: left;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 22px;
        color: #0d1523;
      }
    }
  }
}
</style>
