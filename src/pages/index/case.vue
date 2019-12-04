<template>
  <div class="content-box">
    <common-header></common-header>
    <div class="page-content">
      <div style="width:100%; background: #fff; height: 6.0rem; position: fixed; ">
        <ul class="ul_1">
          <div class="ul_2"></div>
          <li class="li_1" v-for="(item,index) in items " :key="item.id">
            <img :src="item.imgUrl" width="80%" @click="activeShow(index)" alt />
            <span @click="activeShow(index)">{{item.id}}</span>
          </li>
        </ul>
      </div>

      <img src="../../assets/image/jiantou.png" style="margin-top:2.58rem;width:.28rem" alt />

      <div class="c_1" v-show="ins==0" style="margin-top:1.4rem">
        <span
          class="span_1"
          style="background:linear-gradient(270deg,rgba(79,172,254,1) 0%, rgba(0,242,254,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;"
        >上海电信客户体验中心</span>
        <span class="line_1"></span>
        <span class="span_2">
          无论在任何行业，只要您需要对您的产品进行展示，多点触摸产品永远都是您最好的选择：直观、互动。展会、商场、零售商店...都是多点触摸产品的用武之地。
          越梧通过使用带有网络连接的大型多点触摸屏幕（现在已经和普通LCD显示器一般大小）作为大型展牌，可以实现网络化、集成化的管理，从而极大降低整体运营成本。
        </span>

        <div class="c_2">
          <div class="img_1">
            <img src="../../assets/images/58.png" width="100%" alt />
          </div>
          <span class="span_1">可视化的商业数据展示</span>
          <span class="span_2">将您的数据可视化，并通过互动的界面展示给用户， 通过多点触摸界面，用户可以轻松了解海量数据信息， 并且可以十分直观的对数据进行分析操作。</span>

          <div class="box_1">
            <img src="../../assets/images/89.png" width="100%" style="margin-bottom:.293333rem" alt />
            <span class="span_1">多媒体展示交互终端</span>
            <span
              class="span_2"
              style="font-size:12px"
            >它通过液晶显示屏幕或投影仪与交互传感器的双向整合， 利用各种网络，提供动画、视频、游戏等全方位的娱乐享受。是各品牌极佳的发布平台，受众只需轻触一块拥有触摸功能的显示屏，就可获取想关注的产品画面与信息。</span>
          </div>
          <div class="box_1">
            <img src="../../assets/images/23.png" width="100%" style="margin-bottom:.293333rem" alt />
            <span class="span_1">虚拟试衣镜</span>
            <span
              class="span_2"
              style="font-size:12px"
            >基于最新虚拟现实技术和测控技术的高档时尚电子产品，虚拟试衣系统通过全高清摄像头实时捕捉现场影像，并结合体感探测装置将服装的2D图片或3D模型叠加到顾客的影像上，实现虚拟服装与真实顾客身形的完美融合。</span>
          </div>
          <div class="box_1">
            <img src="../../assets/images/77.png" width="100%" style="margin-bottom:.293333rem" alt />
            <span class="span_1">互动魔镜</span>
            <span
              class="span_2"
              style="font-size:12px"
            >互动魔镜系统采用特殊材质镜面玻璃作为投影介质，投影机背投架设。参观者不仅可以照镜子，还可以用手触摸镜子表面，选择感兴趣的内容，镜面内的投影内容会被触发并与参观者形成互动。</span>
          </div>
          <div class="box_1">
            <img src="../../assets/images/56.png" width="100%" style="margin-bottom:.293333rem" alt />
            <span class="span_1">互动橱窗</span>
            <span
              class="span_2"
              style="font-size:12px"
            >互动橱窗系统是利用投影设备将图像投射到玻璃橱窗的普通玻璃上，顾客通过手指在橱窗外玻璃上触摸点击、拖动等控制图像，阅读文字、欣赏图片及观看视频，体验神秘和魔术般的感觉。</span>
          </div>
          <div class="box_1">
            <img src="../../assets/images/78.png" width="100%" style="margin-bottom:.293333rem" alt />
            <span class="span_1">互动吧台</span>
            <span
              class="span_2"
              style="font-size:12px"
            >互动吧台系统是把互动投影与多点触控技术相结合，让普通桌面立刻变成一个多媒体互动娱乐游戏平台，图文并茂，形式新颖。参观者只需轻轻挥动手臂或触摸屏幕，就能观赏图像或参与游戏。</span>
          </div>
          <div class="box_1" style="margin-bottom:5%">
            <img
              src="../../assets/images/785.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">透明显示器，裸眼三维立体特效展示</span>
            <span
              class="span_2"
              style="font-size:12px"
            >互动魔镜系统采用特殊材质镜面玻璃作为投影介质，投影机背投架设。参观者不仅可以照镜子，还可以用手触摸镜子表面，选择感兴趣的内容，镜面内的投影内容会被触发并与参观者形成互动。</span>
          </div>
          <common-footer></common-footer>
        </div>
      </div>

      <div class="c_1" v-show="ins==1" style="margin-top:1.4rem">
        <span
          class="span_1"
          style="background:linear-gradient(-90deg,rgba(67,233,123,1) 0%, rgba(56,249,215,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;"
        >互动投影</span>
        <span
          class="line_1"
          style="background:linear-gradient(-90deg,rgba(67,233,123,1),rgba(56,249,215,1));"
        ></span>
        <span
          class="span_2"
        >互动投影系统是采用先进的计算机视觉技术和投影显示技术来营造一种奇幻动感的交互体验,系统可在你脚下产生各种特效影像让你进入一种虚实融合、亦真亦幻的奇妙世界。该项目包括水波纹、翻转、碰撞 、擦除、避让、跟随等表现形式。</span>

        <div class="c_2">
          <div class="box_1">
            <img
              src="../../assets/images/75632.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">多媒体展示交互终端</span>
            <span
              class="span_2"
              style="font-size:12px"
            >它通过液晶显示屏幕或投影仪与交互传感器的双向整合， 利用各种网络，提供动画、视频、游戏等全方位的娱乐享受。是各品牌极佳的发布平台，受众只需轻触一块拥有触摸功能的显示屏，就可获取想关注的产品画面与信息。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/4215.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">虚拟试衣镜</span>
            <span
              class="span_2"
              style="font-size:12px"
            >基于最新虚拟现实技术和测控技术的高档时尚电子产品，虚拟试衣系统通过全高清摄像头实时捕捉现场影像，并结合体感探测装置将服装的2D图片或3D模型叠加到顾客的影像上，实现虚拟服装与真实顾客身形的完美融合。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/47656.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">互动魔镜</span>
            <span
              class="span_2"
              style="font-size:12px"
            >互动魔镜系统采用特殊材质镜面玻璃作为投影介质，投影机背投架设。参观者不仅可以照镜子，还可以用手触摸镜子表面，选择感兴趣的内容，镜面内的投影内容会被触发并与参观者形成互动。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/74527.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">互动橱窗</span>
            <span
              class="span_2"
              style="font-size:12px"
            >互动橱窗系统是利用投影设备将图像投射到玻璃橱窗的普通玻璃上，顾客通过手指在橱窗外玻璃上触摸点击、拖动等控制图像，阅读文字、欣赏图片及观看视频，体验神秘和魔术般的感觉。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/62598.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">互动吧台</span>
            <span
              class="span_2"
              style="font-size:12px"
            >互动吧台系统是把互动投影与多点触控技术相结合，让普通桌面立刻变成一个多媒体互动娱乐游戏平台，图文并茂，形式新颖。参观者只需轻轻挥动手臂或触摸屏幕，就能观赏图像或参与游戏。</span>
          </div>

          <common-footer></common-footer>
        </div>
      </div>
      <div class="c_1" v-show="ins==2" style="margin-top:1.4rem">
        <span
          class="span_1"
          style="background:linear-gradient(270deg,rgba(250,112,154,1) 0%, rgba(254,225,64,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;"
        >电子沙盘系统</span>
        <span
          class="line_1"
          style="background:linear-gradient(270deg,rgba(250,112,154,1) 0%, rgba(254,225,64,1) 100%);"
        ></span>
        <span
          class="span_2"
        >传统的物理沙盘和现代化的电子设备相结合,将静态模型与多媒体触摸屏互动的结合起来。使用者通过手指点击触摸屏,通过投影或大屏幕浏览具体的多媒体介绍演示内容,得到文字、图片、视频、解说等信息的同时, 自动控制系统将同步控制模型内的灯光状态,全方位地将模型展示给参观者,赋予了模型更加生动的内涵,更好地诠释设计规划者的理念和模型这种艺术作品。</span>

        <div class="c_2">
          <div class="box_1">
            <img
              src="../../assets/images/kb8.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">背光式数字沙盘</span>
            <span
              class="span_2"
              style="font-size:12px"
            >采用的是最新的高亮度液晶技术,数字内容精度更高,色彩饱和艳丽,亮度适应普通室内环境,无宜消耗品,·寿命超长,维护方便。由于具备以上的优势,我公司相信这种背光数字动态沙盘必将成为未来博物馆,科技馆的主要展示手段。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/kb9.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">半景画</span>
            <span
              class="span_2"
              style="font-size:12px"
            >采用的是最新的高亮度液晶技术,数字内容精度更高,色彩饱和艳丽,亮度适应普通室内环境,无宜消耗品,·寿命超长,维护方便。由于具备以上的优势,我公司相信这种背光数字动态沙盘必将成为未来博物馆,科技馆的主要展示手段。</span>
          </div>

          <common-footer></common-footer>
        </div>
      </div>

      <div class="c_1" v-show="ins==3" style="margin-top:1.4rem">
        <span
          class="span_1"
          style="background:linear-gradient(-90deg,rgba(79,172,254,1) 0%, rgba(142,45,226,1) 0%, rgba(74,0,224,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;"
        >投影拼接融合</span>
        <span
          class="line_1"
          style="background:linear-gradient(-90deg,rgba(79,172,254,1) 0%, rgba(142,45,226,1) 0%, rgba(74,0,224,1) 100%);"
        ></span>
        <span
          class="span_2"
        >投影拼接融合系统利用多块普通民用级显卡来进行融合,形成多通道显卡阵列,利用最新GPU计算技术对显存进行深度操作,在经过一系列运算后,输出到各个端口,并直接接投影机进行输出。在进行像素复制后,再通过后期的shader模型进行渲染优化,使得投影输出的图像可以在弧面等任意不规则曲面上显示光滑清晰的图像。能实现桌面机融合和视频融合。</span>

        <div class="c_2">
          <div class="box_1">
            <img
              src="../../assets/images/4568.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">球幕影院</span>
            <span
              class="span_2"
              style="font-size:12px"
            >银幕形如一个大半球,斜扣在观众厅之上,把观众包围在其中。其超大的天穹形银幕和六路立体还音系统,以超人眼视角的画面和逼真的环绕音响效果,让观众置身于电影的景观中,有着极为真实的临场效果。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/5985.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">球幕</span>
            <span
              class="span_2"
              style="font-size:12px"
            >当我们播放的视频在变化时,观众可以感觉到外投球在旋转,就好像地球在自转一样。经过曲边校正和无缝拼接技术,在外投球上形成一个完整的图像,播放内容根据客户要求订制。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/7898.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">DLP大屏幕拼接</span>
            <span
              class="span_2"
              style="font-size:12px"
            >DLP大屏幕投影显示系统作为当今最现代的视讯工具之一，已经被广泛地应用于国民经济生产的各个领域。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/444444.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">无缝等离子拼接大屏幕</span>
            <span
              class="span_2"
              style="font-size:12px"
            >具有良好的灵活性、兼容性、扩展性和可移植性。系统可直接接入计算机RGB信号、视频信号外,还可接入网络信号 ,通过对信号系统各种计算机图文及网络信息、视频图像信息的动态综合显示,操控自如。</span>
          </div>

          <common-footer></common-footer>
        </div>
      </div>

      <div class="c_1" v-show="ins==4" style="margin-top:1.4rem">
        <span
          class="span_1"
          style="background:linear-gradient(-90deg,rgba(185,29,115,1) 0%, rgba(249,83,198,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;"
        >虚拟成像</span>
        <span
          class="line_1"
          style="background:linear-gradient(-90deg,rgba(185,29,115,1) 0%, rgba(249,83,198,1) 100%);"
        ></span>
        <span class="span_2">虚拟成像是由国内开发商创造的名词,是一种在三维空间中投射三维立体影像(影像为物理上的“立体"而非单纯视觉上的“立体")的次世代显示技术。</span>

        <div class="c_2">
          <div class="box_1">
            <img
              src="../../assets/images/5245.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">360°全息成像</span>
            <span
              class="span_2"
              style="font-size:12px"
            >将三维画面悬浮在实景的半空中成像，营造了亦幻亦真的氛围，效果奇特，具有强烈的纵深感，真假难辩。柜体时尚美观，有科技感 。顶端四面透明，真正的空间成像色彩鲜艳，对比度，清晰度高；有空间感，透视感。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/456.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">3D空中投影</span>
            <span
              class="span_2"
              style="font-size:12px"
            >无需昂贵的设备以及眼镜等配套设施，通过透光薄膜，展示立体影象。该系统在舞台中融合了高度视觉刺激的幻像技术，可根据舞台节目进度进行幻影光效配合，另外加上一些实物或真人的配合能够做到以假乱真的光学特效。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/485.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">空气立体成像系统</span>
            <span
              class="span_2"
              style="font-size:12px"
            >是结合了国外最新技术生产的一套完整的方案，投影机将画面投射在上面，由于空气与雾墙的分子震动不均衡，可以形成层次感和立体感很强的图像。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/4578.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">幻影成像</span>
            <span
              class="span_2"
              style="font-size:12px"
            >幻影成像系统是基于“实景造型”和“幻影”的光学成像结合，将所拍摄的影像（人、物）投射到布景箱中的主体模型景观中，演示故事的发展过程。绘声绘色，虚幻莫测，非常直观，给人留下较深的印象。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/52441.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">虚拟导览</span>
            <span
              class="span_2"
              style="font-size:12px"
            >我们将导览员形象投射在特种玻璃屏幕上，形成科幻电影般的空间形象，在参观的起始阶段为观众指明参观方向。</span>
          </div>

          <common-footer></common-footer>
        </div>
      </div>

      <div class="c_1" v-show="ins==5" style="margin-top:1.4rem">
        <span
          class="span_1"
          style="background:linear-gradient(-90deg,rgba(63,43,150,1) 0%, rgba(168,192,255,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;"
        >识别系统</span>
        <span
          class="line_1"
          style="background:linear-gradient(-90deg,rgba(63,43,150,1) 0%, rgba(168,192,255,1) 100%);"
        ></span>
        <span class="span_2"></span>

        <div class="c_2">
          <div class="box_1">
            <img
              src="../../assets/images/25898.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">人脸识别</span>
            <span
              class="span_2"
              style="font-size:12px"
            >将照片中的人脸信息提取出来，可通过专用的网络业务平台进行传输，在服务器端将照片中的人脸信息与特定人员数据库中的人脸信息进行比对，进而鉴别出照片中的人员“相似”的人员身份，并获取其详细信息。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/598.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">动作识别</span>
            <span
              class="span_2"
              style="font-size:12px"
            >用户只需要将检测端贴于被测物体表面或内部即可检测，操作简便。同时本产品支持多个检测端的组合连接，可通过不同的连接方式实现多关节物体的姿态检测以及数据手套等功能。</span>
          </div>
          <common-footer></common-footer>
        </div>
      </div>

  <div class="c_1" v-show="ins==6" style="margin-top:1.4rem">
        <span
          class="span_1"
          style="background:linear-gradient(-90deg,rgba(250,112,154,1) 0%, rgba(255,65,108,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;"
        >增强现实</span>
        <span
          class="line_1"
          style="background:linear-gradient(-90deg,rgba(250,112,154,1) 0%, rgba(255,65,108,1) 100%);"
        ></span>
        <span class="span_2"></span>

        <div class="c_2">
          <div class="box_1">
            <img
              src="../../assets/images/52.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">虚拟现实</span>
            <span
              class="span_2"
              style="font-size:12px"
            >在计算机中模拟建成开发中或招商中的楼盘，用数字化的方式，直观在计算机中进行表现。同时，用户可以利用鼠标、键盘、方向杆、遥控器等操控设备，在虚拟的楼盘中进行360度全方位漫游浏览。</span>
          </div>
          <div class="box_1">
            <img
              src="../../assets/images/4552.png"
              width="100%"
              style="margin-bottom:.293333rem"
              alt
            />
            <span class="span_1">增强现实</span>
            <span
              class="span_2"
              style="font-size:12px"
            >可以模拟真实的现场景观 ,它是以交互性和构想为 基本特征的计算机高级人机界面。使用者不仅能够通过虚拟现实系统感受到在客观物理世界中所经历的“身临其境”的逼真性 ,而且能够突破空间、时间以及其它客观限制 ,感受到在真实世界中无法亲身经历的体验。
</span>
          </div>
          <common-footer></common-footer>
        </div>
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
      ins: this.$route.params.ins ? this.$route.params.ins : 6,
      // ins:4,
      items: [
        {
          id: "多点触控软硬件 解决方案",
          imgUrl: require("../../assets/images/kb6.png")
        },
        { id: "互动投影", imgUrl: require("../../assets/images/kb4.png") },
        { id: "电子沙盘系统", imgUrl: require("../../assets/images/kb1.png") },
        { id: "投影拼接融合", imgUrl: require("../../assets/images/kb2.png") },
        { id: "虚拟成像", imgUrl: require("../../assets/images/kb7.png") },
        { id: "识别系统", imgUrl: require("../../assets/images/kb5.png") },
        { id: "增强现实", imgUrl: require("../../assets/images/kb3.png") },
        { id: "", imgUrl: "" }

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
// mounted() {
//     const _this = this;
//       // console.log(_this.$route.query.ins);
//       if(_this.$route.query.ins){
//      this.ins=_this.$route.query.ins

//       }else{
//         this.ins=0
//       }
//   },
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
    top: 1.2rem;
    left: 7%;

    width: 100%;
    height: 4rem;
    // background: red;
    margin: 0 auto;
    // display: block;
    display: flex;
    // padding-left: 4%;
    // padding-right: 4%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 88%;
    margin: 0 auto;
    // box-shadow: 0px 2px 10px 1px rgba(101, 101, 101, 0.1);
    background: #fff;
    .ul_2 {
      // height: .96rem;
      background: #fff;
    }
    .li_1 {
      display: block;
      float: left;
      // margin-top: 5%;
      // margin-left: 3%;
      // background: #d4d4d4;
      color: #262022;
      width: 25%;
      // height: 0.48rem;

      border-radius: 0.133333rem;
      margin-bottom: 14%;
      span {
        display: block;
        //  width: 2.906667rem;
        height: 0rem;
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
    background: #f0f0f0;
    padding-top: 2.22rem;
    .span_1 {
      display: block;
      text-align: center;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 550;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 0.213333rem;
    }
    .line_1 {
      width: 0.88rem;

      height: 0.04rem;
      background: linear-gradient(
        270deg,
        rgba(79, 172, 254, 1),
        rgba(0, 242, 254, 1)
      );
      border-radius: 0.026667rem;
      display: block;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 0.213333rem;
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
      height: 15.586667rem;
      background: #fff;
      padding-top: 0.786667rem;
      .img_1 {
        width: 96%;
        margin: 0 auto;
        margin-bottom: 0.48rem;
      }
      .span_1 {
        display: block;
        width: 96%;
        margin: 0 auto;
        text-align: left;
        margin-bottom: 0.48rem;
      }
      .box_1 {
        width: 9.506667rem;
        height: 6.366667rem;
        margin: 0 auto;

        // background: red;
        margin-bottom: 0.666667rem;
        border: 0.026667rem solid rgba(229, 229, 229, 1);
      }
    }
  }
}
</style>
