<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <span style="color:#ECB101; margin-bottom:2%; display:block">贵公司基本信息</span>
      <div class="text">
        <span class="span_2">
          <span style="color:red">*</span>公司名称：
        </span>
        <input class="input_1" type="text" name id v-model="name" style />
      </div>
      <div class="text">
        <span class="span_2">
          <span style="color:red">*</span>联系人：
        </span>
        <input class="input_1" type="text" name id v-model="contacts" style />
      </div>
      <div class="text">
        <span class="span_2">
          <span style="color:red">*</span>手机号码：
        </span>
        <input class="input_1" type="text" name id v-model="phone" style />
      </div>
      <span style="text-align:left;display:block;margin-bottom:2%;margin-left:2%">意向合作行业：</span>
      <van-radio-group v-model="radio">
        <van-radio name="1" style="margin-right:4%;">政府</van-radio>
        <van-radio name="2" style="margin-right:4%">金融</van-radio>
        <van-radio name="3" style="margin-right:4%">教育</van-radio>
        <van-radio name="4" style="margin-right:4%">能源</van-radio>
        <van-radio name="5" style="margin-right:4%">运营商</van-radio>
        <van-radio name="6" style="margin-right:4%">企业</van-radio>
        <van-radio name="7" style="margin-right:4%">其他</van-radio>
      </van-radio-group>

      <div class="text">
        <span class="span_2">公司地址：</span>
        <input class="input_1" type="text" name id v-model="city" style />
      </div>
      <div class="text">
        <span class="span_2">职务：</span>
        <input class="input_1" type="text" name id v-model="post" style />
      </div>
      <div class="text">
        <span class="span_2">联系电话：</span>
        <input class="input_1" type="text" name id v-model="number" style />
      </div>
      <div class="text">
        <span class="span_2">邮箱：</span>
        <input class="input_1" type="text" name id v-model="mail" style />
      </div>
      <div class="text" style="margin-bottom:2%">
        <span class="span_2">公司网址：</span>
        <input class="input_1" type="text" name id v-model="gurl" style />
      </div>
      <div class="text" style="margin-top:4%;display:block">
        公司业务简介：
        <textarea rows="3" cols="39" style="vertical-align:top" v-model="desc"></textarea>
      </div>
      <van-button type="info" @click="handleSubmit()" class="btn_1">提交</van-button>

      <!-- <img src="../../assets/image/" alt=""> -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import commonHeader from "common/common-header";
import { Dialog } from "vant";

// import { Field } from 'vant';
// import 'vant/lib/button/style';
export default {
  data() {
    return {
      tittle: "合作表单",
      num: 0,
      // name:"",
      radio: "1",
      name: "",
      mail: "",
      gender: "",
      // interest: [],
      // time: '',
      desc: "",
      money: "",
      ctime: "",
      contacts: "",
      post: "",
      phone: "",
      number: "",
      gurl: "",
      city: "",
      cooperative_company: 2
    };
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: "SET_NUM"
    }),

    handleSubmit() {
      const _this = this;
      //  this.$notify('提示文案');
      let params = new URLSearchParams();

      params.append("company", _this.name);
      params.append("contacts", _this.contacts);
      params.append("phone", _this.phone);
      _this.radio == "" ? "" : params.append("cooperate", _this.radio);
      // params.append("cooperate", _this.formValidate.gender);
      params.append("company_address", _this.city);
      params.append("duty", _this.post);
      params.append("tel", _this.number);
      params.append("email", _this.mail);
      params.append("web_site", _this.gurl);
      params.append("company_introduce", _this.desc);
      params.append("cooperative_company", _this.cooperative_company);

      console.log(params);

      const api = this.$common.getUrl() + "business/add.do";
      // this.$axios.post('http://192.168.1.31:8080/controlManager/bsVenue/getVenueList.do')
      this.$axios({
        method: "post",
        url: api,
        data: params
      })
        .then(function(res) {
          // console.log(res)
          // _this.items = res.data;
          // res=this.items;
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
          console.log(res.data.status);
        })
        .catch(function(error) {
          Dialog.alert({
            message: "请求超时 请重试"
          }).then(() => {
            let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
            _this.$router.push(NewPage);
            _this.$router.go(-1);
            // _this.$router.push({path:'/'})
            // on close
          });
          console.log(error);
        });
      // this.$Message.success("Success!");
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
// @import "~styles/index.less";
// @import "~styles/variable.less";
// /deep/.Router{
// background-color: red;
// }
.page-content {
  background: #fff;
  font-size: 14px;
  // height: 120%;
  padding-top: 0.493333rem;
  // .mb(0);
  .text {
    width: 100%;
    height: 10%;
    text-align: left;
    padding-left: 2%;
    margin-bottom: 2%;
    .input_1 {
      // border-radius: 10px;
      width: 92%;
      // height: 100%;
    }
    .span_2 {
      width: 20%;
      display: block;
      margin-bottom: 2%;
    }
  }
  /deep/.van-radio-group {
    display: flex;
    margin-left: 2%;
    flex-wrap: wrap;
    height: 1.293333rem;
    margin-bottom: 2%;
    // justify-content: flex-start;
  }
  /deep/.van-radio__icon {
    font-size: 0.386667rem;
  }
  .btn_1 {
    display: block;
    background: black;
    margin: 0 auto;
    margin-top: 5%;
    width: 88%;
    margin-bottom: 10%;
    // text-align: center;
  }
}
</style>
