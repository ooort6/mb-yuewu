import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 需要左方向动画的路由用this.$router.to('****')


Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false
  this.isleft = true
}
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
},
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/pages/index/home'], resolve)
        },
        // {
        //   path: '/design',
        //   name: 'design',
        //   component: (resolve) => require(['@/pages/index/design'], resolve)
        // },
        // {
        //   path: '/solution',
        //   name: 'solution',
        //   component: (resolve) => require(['@/pages/index/solution'], resolve)
        // },
        // {
        //   path: '/aboutus',
        //   name: 'aboutus',
        //   component: (resolve) => require(['@/pages/index/aboutus'], resolve)
        // },
        // {
        //   path: '/callus',
        //   name: 'callus',
        //   component: (resolve) => require(['@/pages/index/callus'], resolve)
        // },
        {
          path: '/z_solution',
          name: 'z_solution',
          component: (resolve) => require(['@/pages/index/z_solution'], resolve)
        },
        {
          path: '/zs_solution',
          name: 'zs_solution',
          component: (resolve) => require(['@/pages/index/zs_solution'], resolve)
        },
        {
          path: '/f_solution',
          name: 'f_solution',
          component: (resolve) => require(['@/pages/index/f_solution'], resolve)
        },
        // {
        //   path: '/success',
        //   name: 'success',
        //   component: (resolve) => require(['@/pages/index/success'], resolve)
        // },
        // {
        //   path: '/success_yn',
        //   name: 'success_yn',
        //   component: (resolve) => require(['@/pages/index/success_yn'], resolve)
        // },
        // {
        //   path: '/success_tj',
        //   name: 'success_tj',
        //   component: (resolve) => require(['@/pages/index/success_tj'], resolve)
        // },
        // {
        //   path: '/success_sh',
        //   name: 'success_sh',
        //   component: (resolve) => require(['@/pages/index/success_sh'], resolve)
        // },
        {
          path: '/control',
          name: 'control',
          component: (resolve) => require(['@/pages/index/control'], resolve)
        },
        {
          path: '/case',
          name: 'case',
          component: (resolve) => require(['@/pages/index/case'], resolve)
        },
        // {
        //   path: '/programme',
        //   name: 'programme',
        //   component: (resolve) => require(['@/pages/index/programme'], resolve)
        // },

        // {
        //   path: '/cooperation',
        //   name: 'cooperation',
        //   component: (resolve) => require(['@/pages/index/cooperation'], resolve)
        // },

        // {
        //   path: '/case',
        //   name: 'case',
        //   component: (resolve) => require(['@/pages/index/case'], resolve)
        // },
        // {
        //   path: '/case_1',
        //   name: 'case_1',
        //   component: (resolve) => require(['@/pages/index/case_1'], resolve)
        // },
        // {
        //   path: '/case_2',
        //   name: 'case_2',
        //   component: (resolve) => require(['@/pages/index/case_2'], resolve)
        // },
        // {
        //   path: '/case_3',
        //   name: 'case_3',
        //   component: (resolve) => require(['@/pages/index/case_3'], resolve)
        // },
        // {
        //   path: '/xinxi',
        //   name: 'xinxi',
        //   component: (resolve) => require(['@/pages/index/xinxi'], resolve)
        // },
        // {
        //   path: '/yewu',
        //   name: 'yewu',
        //   component: (resolve) => require(['@/pages/index/yewu'], resolve)
        // },
        // {
        //   path: '/qiye',
        //   name: 'qiye',
        //   component: (resolve) => require(['@/pages/index/qiye'], resolve)
        // },
        // {
        //   path: '/product',
        //   name: 'product',
        //   component: (resolve) => require(['@/pages/index/product'], resolve)
        // },
        // {
        //   path: '/formData',
        //   name: 'formData',
        //   component: (resolve) => require(['@/pages/index/formData'], resolve)
        // },
        {
          path: '/hezuoform',
          name: 'hezuoform',
          component: (resolve) => require(['@/pages/index/hezuoform'], resolve)
        },
        // {
        //   path: '/footprints',
        //   name: 'footprints',
        //   component: (resolve) => require(['@/pages/index/footprints'], resolve)
        // },
        // {
        //   path: '/day',
        //   name: 'day',
        //   component: (resolve) => require(['@/pages/index/day'], resolve)
        // }
      ]
    },
    // {
    //   path: '/Home/Detail',
    //   name: 'Detail',
    //   component: (resolve) => require(['@/pages/detail'], resolve)
    // }
  ]
})
