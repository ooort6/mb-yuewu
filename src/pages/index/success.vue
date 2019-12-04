<template>
  <div class="content-box">
    <common-header ></common-header>
      <div class="page-content">
          <div class="box_1">
              <div class="box_2">
                  <div class="box_3">
                      <img src="../../assets/image/su_4.png" style="width:100%" alt="">
                  </div>
                  <span class="span_1">上海电信客户体验中心</span>
                  <div class="btn_1" @click="gotoSH">点击详情</div>
              </div>
            <div class="box_2">
                  <div class="box_3">
                      <img src="../../assets/image/tu564.png" style="width:100%" alt="">
                  </div>
                  <span class="span_1">云南移动综合体验厅</span>
                  <div class="btn_1"  @click="gotoYN">点击详情</div>
              </div>
                 <div class="box_2">
                  <div class="box_3">
                      <img src="../../assets/image/su_22.png" style="width:100%" alt="">
                  </div>
                  <span class="span_1">天津电信信息化体验厅</span>
                  <div class="btn_1" @click="gotoTJ">点击详情</div>
              </div>
          </div>


        <!-- 23333 -->
        <!-- <img src="../../assets/image/crhnrg2.jpg" width="100%" alt=""> -->
       <!-- <img src="../../assets/image/" alt=""> -->
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
export default {
  data () {
    return {
      tittle: '成功案例',
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    gotoYN(){
      this.$router.push("/success_yn");
    },
      gotoSH(){
      this.$router.push("/success_sh");
    },
      gotoTJ(){
      this.$router.push("/success_tj");
    }


  },
  components: {
    commonHeader
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  background: #f9f9f9;
  padding-top: 0;
  .mb(0);
  .box_1{

    margin-top: .586667rem;
    height: 3.366667rem;
    display: flex;
    justify-content:space-around;
    .box_2{
      width: 3.166667rem;
      // background: red;
      background:#fff;
      box-shadow:0px 2px 10px 1px rgba(101,101,101,0.1);
      .box_3{
        margin: 0 auto;
        margin-top:.266667rem;
        // background: blue;
        width: 2.626667rem;
        height: 1.786667rem;
        margin-bottom: .053333rem;
      }
      .span_1{
        display: block;
        font-size:.213333rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(38,32,34,1);
        margin-bottom: .16rem;
      }
      .btn_1{
        margin: 0 auto;
          width: 2.24rem;
          height: .466667rem;
          background: #FFC738;
          color: #FAFBFD;
      }
    }
  }
}
</style>
