<template>
  <div class="content-box">
    <common-header ></common-header>
      <div class="page-content">
        <!-- 555 -->
        <div class="box_1">
        <img src="../../assets/image/tu1548.png" style="width:100%;margin-top:.64rem;margin-bottom:.693333rem" alt="">

        </div>
          <div class="box_1">
        <img src="../../assets/image/tu6588.png" style="width:100%;margin-bottom:.693333rem" alt="">

        </div>
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
      tittle: '成功案例_云南',
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),

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
  padding-top: 0;
  background: #f9f9f9;
  .mb(0);
  // .box{
  //   width: 98%;
  //   float: right;
  // }
    .box_1{
    width: 96%;
    margin: 0 auto;
  }
}
</style>
