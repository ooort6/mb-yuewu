<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <div class="c_1">
        <div class="c_2">
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
        </div>

        <div class="c_3">
          <van-swipe style :autoplay="3000">
            <van-swipe-item>
              <img src="../../assets/images/kj.png" width="100%" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../assets/images/bj3.png" width="100%" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../assets/images/bj4.png" width="100%" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../assets/images/bj5.png" width="100%" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>

      <div class="c_4">
        <img src="../../assets/images/xzwm.png" style="margin-bottom:.88rem" width="100%" alt />
        <span class="span_1">
          我们不仅仅是一家展示技术公司，我们更是你的营销辅助专家。
          <br />我们构建的展厅，将使：
          <br />1、您的技术方案成为客户项目规划阶段的技术标准；
          <br />2、您的产品成为客户采购决策阶段的最佳选择。
          <br />因为，我们深知：
          <br />领先的核心技术，精锐的销售团队，强大的支撑团队。在今天的知识经济时代，这些都不是企业在激烈竞争中制胜的唯一法宝
        </span>
      </div>
      <!-- <van-swipe style :autoplay="3000">
        <van-swipe-item>
          <img src="../../assets/image/lunbo1.png" width="100%" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/image/lunbo2.png" width="100%" alt />
        </van-swipe-item>
      </van-swipe>-->

      <!-- <mt-button @click="todetail">home</mt-button>
      <mt-button @click="toalert" type="default">default</mt-button>-->

      <div class="content_1">
        <div class="c_5">
          <img src="../../assets/images/djj.png" width="100%" alt />
        </div>
        <div class="c_6">
          <div class="content_2" @click="$router.push({ path: '/control', query: { ins: 0 } })">
            <img src="../../assets/images/xx.png" class="img_1" alt />
            <span class="span_2">信息行业</span>
          </div>
          <div class="content_2" @click="$router.push({ path: '/control', query: { ins: 1 } })">
            <img src="../../assets/images/zz.png" class="img_1" alt />
            <span class="span_2">制造行业</span>
          </div>
          <div class="content_2" @click="$router.push({ path: '/control', query: { ins: 2 } })">
            <img src="../../assets/images/zf.png" class="img_1" alt />
            <span class="span_2">政府单位</span>
          </div>
          <div class="content_2" @click="$router.push({ path: '/control', query: { ins: 3 } })">
            <img src="../../assets/images/sy.png" class="img_1" alt />
            <span class="span_2">事业单位</span>
          </div>
        </div>
      </div>

      <div class="fo_1">
        <div class="fo_2">
          <div class="fo_2_1"></div>
          <span class="span_1">联系我们</span>
          <span class="span_2">CONTACT</span>
        </div>
        <div class="fo_3">良好的服务从一次愉快的沟通开始</div>
        <div class="fo_4">
          <div>
            <span>电话：021-2281-9090</span>
          </div>

          <div>
            <span>邮箱：xiaoshou@yuewu.info</span>
          </div>
        </div>
        <div class="fo_5">
          <span style="color:#DC5E56">
            <a href="tencent://message/?uin=522272806" style="color:#DC5E56">QQ：522272806</a>
          </span>
          (点击QQ,即可在线咨询)
        </div>
        <div class="fo_6"></div>

        <div class="text">
          <input class="input_1" type="text" placeholder="电话：" v-model="phone" />
        </div>
        <div class="text">
          <input class="input_1" type="text" placeholder="邮箱：" v-model="email" />
        </div>
        <div class="text">
          <input class="input_1" type="text" placeholder="地址：" v-model="company_address" />
        </div>
        <div class="text">
          <textarea class="input_2" type="text" placeholder="内容：" v-model="cooperation_intention" />
        </div>
        <div class="btn_1" @click="handleSubmit()">提交留言</div>
      </div>

      <!-- <img  v-lazy="imgUrl"  width="80%" style="margin-bottom:1.106667rem" alt=""> -->

      <div class="foot_1">
        <img src="../../assets/images/gywm.png" class="img_1" alt />
        <span
          class="span_1"
          style="margin-bottom:5%"
        >上海越梧信息科技有限公司有一家聚焦于展览展示创意设计及技术研发的高科技公司。公司首创“艺术创造美好，科技服务生活，实现合作共赢”经营理念，以智慧展示系统为核心，跨界融合策划创意、空间装饰、互动科技、软件开发、数字CG、影视制作、系统集成、舞美灯光、平面设计、建筑模型等行业，打造中国展览展示行业全新产业链模式。</span>
        <span
          class="span_1"
        >公司现有员工50多人，其中研发及设计人员占比超过80%。公司以人工智能技术为核心，以各种高科技数字化展示技术手段如：全息投影、VR、AR、大数据可视化等为辅助，完成了诸多展示场馆及临展的设计及实施工作。客户范围跨越政府、电信运营商、大型制造企业、电力、能源等多个行业。</span>
      </div>
      <!-- <div class="foot_2">
          <span >沪ICP备19022185号	上海越梧信息科技有限公司</span>
      </div>-->
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
// import { Toast } from "mint-ui";
// import { Swipe, SwipeItem, Lazyload } from "vant";
import { mapMutations, mapGetters, mapState } from "vuex";
import commonHeader from "common/common-header";
import commonFooter from "common/common-footer";
import { Dialog } from "vant";
// import * as homeApi from 'api/home-api'
// import { ERR_OK } from 'config/index'
export default {
  data() {
    return {
      num: 0,
      // imgUrl: require('../../assets/image/hezuo1.png'),
      imgList: ["https://img.yzcdn.cn/2.jpg"],
      phone: "",
      email: "",
      company_address: "",
      cooperation_intention: ""
      //    images: [
      //   '../../assets/image/lunbo1.png',
      //   '../../assets/image/lunbo2.png',
      // ]
    };
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: "SET_NUM"
    }),

    handleSubmit() {
      const _this = this;
      let params = new URLSearchParams();

      params.append("our_company_type", 2);
      params.append("phone", _this.phone);
      params.append("company_address", _this.company_address);
      params.append("email", _this.email);
      params.append("cooperation_intention", _this.cooperation_intention);

      const api = this.$common.getUrl() + "/webForm/add";
      // const api =this.$common.getUrl() + "/webForm/prese";
      this.$axios({
        method: "post",
        url: api,
        data: params
      }).then(function(res) {
        if (res.data.status == "000") {
          Dialog.alert({
            message: res.data.message
          }).then(() => {
            let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
            _this.$router.push(NewPage);
            _this.$router.go(-1);
            // _this.$router.push({path:'/'})
            // on close
          });

          //  _this.$refs[name].resetFields();
        } else {
          Dialog.alert({
            message: res.data.message
          }).then(() => {
            let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
            _this.$router.push(NewPage);
            _this.$router.go(-1);
            // _this.$router.push({path:'/'})
            // on close
          });
          //  _this.$Message.error(res.data.message);
        }
      });
    },

    todetail() {
      this.$router.togo("/Home/Detail");
    },
    toalert() {
      Toast("提示信息");
    },


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

.content-box {
}
.page-content {
  // padding-top: 1%;
  // height: 12.506667rem;
  // width: 100%;
  .c_1 {
    height: 9.906667rem;
    width: 100%;
    background: url("../../assets/images/bj1.png") no-repeat;
    background-size: 100%;
    padding-top: 2.72rem;
    .c_2 {
      width: 6.8rem;
      height: 1.293333rem;
      // background: blue;
      margin-left: 1.746667rem;
      margin-bottom: 1.48rem;
    }
    .c_3 {
      width: 8.933333rem;
      height: 5.066667rem;
      margin-left: 0.52rem;
    }
  }
  .c_4 {
    height: 6.946667rem;
    background: url("../../assets/images/hua1.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 1.133333rem;

    .span_1 {
      display: block;
      width: 94%;
      margin: 0 auto;
      font-size: 14px;
      text-align: left;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
    }
  }
  .mb(0);
  .content_1 {
    width: 100%;
    height: 4.946667rem;
    background: url("../../assets/images/aj.png") no-repeat;
    background-size: 100%;
    padding-top: 0.853333rem;
    .c_5 {
      height: 5%;
      margin-bottom: 1.286667rem;
    }
    .c_6 {
      width: 100%;
      // height: 95%;
      display: flex;
      justify-content: space-between;
      .content_2 {
        width: 25%;
        .span_1 {
          display: block;
          margin-top: 0.613333rem;
          margin-bottom: 0.306667rem;
          font-size: 14px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(41, 41, 41, 1);
        }
        .img_1 {
          width: 1.106667rem;
          margin-bottom: 0.213333rem;
        }
        .span_2 {
          margin-bottom: 0;
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(41, 41, 41, 1);
        }
      }
    }
  }

  .fo_1 {
    height: 16rem;
    background: #fff;
    padding-top: 0.013333rem;
    .fo_2 {
      width: 94%;
      margin: 0 auto;
      height: 0.466667rem;
      margin-bottom: 0.826667rem;
      // background: red;
      .fo_2_1 {
        width: 0.186667rem;
        height: 0.453333rem;
        background: linear-gradient(
          0deg,
          rgba(230, 50, 41, 1),
          rgba(224, 70, 23, 1),
          rgba(195, 13, 35, 1)
        );
        opacity: 0.7;
        border-radius: 0.093333rem;
        float: left;
        margin-right: 1%;
      }
      .span_1 {
        display: block;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        float: left;
        margin-right: 1%;

        line-height: 0.466667rem;
      }
      .span_2 {
        display: block;
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        float: left;
        line-height: 0.466667rem;
      }
    }

    .fo_3 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0.4rem;
      // background: red;
      font-size: 0.32rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(33, 34, 38, 1);
      margin-bottom: 0.533333rem;
    }
    .fo_4 {
      width: 74%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      // background: red;
      height: 0.4rem;
      font-size: 0.24rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(33, 34, 38, 1);
      margin-bottom: 0.413333rem;
    }
    .fo_5 {
      width: 74%;
      display: flex;
      margin: 0 auto;
      justify-content: center;
      // background: red;
      height: 0.4rem;
      font-size: 0.24rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(33, 34, 38, 1);
      margin-bottom: 0.12rem;
    }
    .fo_6 {
      display: block;
      margin: 0 auto;
      width: 9.466667rem;
      height: 0.053333rem;
      background: rgba(206, 206, 206, 1);
      border-radius: 0.026667rem;
      margin-bottom: 0.84rem;
    }
    .text {
      width: 100%;
      // height: 1rem;
      text-align: left;
      padding-left: 2%;
      margin-bottom: 0.653333rem;
      .input_1 {
        // border-radius: 10px;
        width: 92%;
        height: 0.8rem;
        border: 0.013333rem solid rgba(153, 153, 153, 1);
        border-radius: 0.133333rem;
        padding-left: 2%;
      }
      .input_2 {
        // border-radius: 10px;
        width: 92%;
        height: 3.28rem;
        border: 0.013333rem solid rgba(153, 153, 153, 1);
        border-radius: 0.133333rem;
        padding-left: 2%;
        padding-top: 2%;
        margin-bottom: 0.673333rem;
      }
      // .span_2 {
      //   width: 20%;
      //   display: block;
      //   margin-bottom: 2%;
      // }
    }
    .btn_1 {
      width: 6.013333rem;
      height: 0.786667rem;
      background: linear-gradient(
        -90deg,
        rgba(230, 50, 41, 1),
        rgba(195, 13, 35, 1)
      );
      border-radius: 0.133333rem;
      display: block;
      margin: 0 auto;
      line-height: 0.786667rem;
      // cursor: pointer;
      font-size: 0.32rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }

  .foot_1 {
    height: 9.88rem;
    background: url("../../assets/images/dd.png") no-repeat;
    background-size: 100% 100%;
    .img_1 {
      width: 100%;
      margin-top: 0.653333rem;
      margin-bottom: 0.813333rem;
    }
    .span_1 {
      text-align: left;
      width: 8.973333rem;
      // font-size: 0.24rem;
      text-indent: 0.333333rem;
      font-size: 14px;
      font-family: PingFang SC;
      // font-weight:400;
      color: rgba(249, 244, 244, 1);
    }
  }

  .content {
    height: 1.866667rem;
    width: 100%;
    padding-left: 0.213333rem;
    display: flex;
    margin-bottom: 0.453333rem;
    .aa {
      flex: 1;
      width: 2.986667rem;
      height: 1.866667rem;
      background: #fff;
      margin-right: 0.306667rem;
      float: left;
      box-shadow: 0px 5px 10px 1px rgba(0, 55, 115, 0.05);
      img {
        display: block;
        margin: 0 auto;
        margin-top: 8%;
        width: 2.693333rem;
      }
    }
  }
  .span_1 {
    font-size: 0.32rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(23, 42, 136, 1);
    display: block;
    margin: 0 auto;
  }
  .span_2 {
    font-size: 0.133333rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(23, 42, 136, 1);
    display: block;
    margin: 0 auto;
    margin-bottom: 0.386667rem;
  }
  .span_3 {
    width: 100%;
    height: 2.933333rem;
    margin-bottom: 0.266667rem;
    //  background:red;
    display: flex;
    justify-content: space-around;
    .span_4 {
      //  flex: 1;
      width: 1.866667rem;
      display: block;
      //  background: green;
      .span_5 {
        font-size: 0.213333rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(84, 84, 84, 1);
      }
      .span_6 {
        display: block;
        width: 0.666667rem;
        height: 0.026667rem;
        background: rgba(0, 54, 114, 0.15);
        margin: 0 auto;
        margin-bottom: 0.13333rem;
      }
      .span_7 {
        width: 1.866667rem;
        height: 2.146667rem;
        margin: 0 auto;
        background: #fff;
        box-shadow: 0px 2px 5px 0px rgba(0, 55, 115, 0.05);
        .span_8 {
          width: 1.653333rem;
          height: 1.746667rem;
          margin: 0 auto;
          img {
            margin-top: 10%;
            width: 100%;
          }
        }
      }
    }
  }
  .span_9 {
    display: block;
    width: 10rem;
    height: 0.013333rem;
    background: rgba(232, 232, 232, 1);
    margin-bottom: 0.626667rem;
  }
  .bottom_1 {
    height: 7.053333rem;
    // background:url('../../assets/image/guanmyuwom.png') no-repeat bottom  ;
    background-size: 100%;
  }
  .span_10 {
    font-weight: 400;
    text-align: left;
    text-indent: 0.266667rem;
    display: block;
    width: 9.373333rem;
    height: 3.946667rem;
    margin: 0 auto;
    line-height: 0.373333rem;
    font-size: 0.213333rem;

    color: rgba(23, 42, 136, 1);
  }
}
</style>
