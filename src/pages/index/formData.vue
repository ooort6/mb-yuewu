<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <div class="content">
        <img src="../../assets/image/xiazai.png"   class="img_1" alt />
        <span class="span_1">资料下载</span>
      </div>
      <div class="content_1" v-for="item in items" v-bind:key="item.id">
        <span class="span_2">{{item.file_name}}</span>
        <a :href="url+item.file_url" class="a_1">下载>></a>
        <!-- <a href="http://www.ztist.com/M01/file/b02f85f3-3913-475e-9e87-dcd95a70f02c.pdf" class="a_1">下载>></a> -->

        <span class="span_3">{{item.upload_date|formatDate}}</span>
      </div>
      <van-pagination
        v-model="currentPage"
        :total-items="dataCount"
        :items-per-page="pageSize"
        @change="changepage"
        style="margin-top:10%"
      />

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
      tittle: "智天信息安全",
      num: 0,
      items: [],
      dataCount: 0,
      pageSize: 5,
      showList: [],
      totalProblemList: [],
      pageNum: 1,
      type: 1,
      company: 2,
      url: this.$common.getFileUrl(),
      currentPage: 1
    };
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d;
    }
  },
  created() {
    this.action();
  },
  methods: {
    ...mapMutations({
      setNum: "SET_NUM"
    }),
    action() {
      const _this = this;
      let params = new URLSearchParams();
      params.append("pageNum", this.pageNum);
      params.append("pageSize", this.pageSize);
      params.append("type", 1);
      params.append("company", 2);

      const api = this.$common.getUrl() + "webFile/findByPage.do";
      // this.$axios.post('http://192.168.1.31:8080/controlManager/bsVenue/getVenueList.do')
      this.$axios({
        method: "post",
        url: api,
        data: params
        //headers: {'Access-Control-Allow-Origin': '*'}
      })
        .then(function(res) {
          // console.log(res);
          _this.dataCount = res.data.data.totalNum;
          _this.items = res.data.data.items;
          // res=this.items;

          // console.log(_this.dataCount);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    changepage(index) {
      // console.log(index)
      this.pageNum = index;
      this.action();
      // this.$options.methods.action()
      // var _start=(index-1)*this.pageSize;
      // var _end=index*this.pageSize;
      // this.showList=this.totalProblemList.slice(_start,_end)
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
  background: #f6f6f6;
  .content {
    margin-bottom: 5.67%;
    .img_1 {

      display: block;
      text-align: left;
      margin-left: 3.6%;
      margin-right: 1.07%;
      float: left;
    }
    .span_1 {
      text-align: left;
      display: block;
      margin-top: 3%;
      font-size: 0.52rem;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: #ECB101;
    }
  }
  .content_1 {
    width: 89.33%;
    height: 5%;
    // background: red;
    margin: 0 auto;
    // display: flex;
    // align-items: flex-end;
    // justify-content: space-between;
    .span_2 {
      display: block;
      float: left;
      text-align: left;
      font-size: 0.34rem;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      color: rgba(123, 123, 123, 1);
    }
    .span_3 {
      display: block;
      float: right;
      text-align: left;
      margin-right: 3%;
      // align-items: flex-end;
      font-size: 0.34rem;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      color: rgba(123, 123, 123, 1);
    }
    .a_1 {
      display: block;
      float: right;
      font-size: 0.34rem;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      color: rgba(41, 78, 160, 1);
    }
  }
}
</style>
