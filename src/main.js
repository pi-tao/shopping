import Vue from "vue";
import App from "./App.vue";
//引入三级联动组件
import TypeNav from "@/components/TypeNav";
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
//引入路由
import router from "@/router";
// 引入仓库stroe
import store from "@/store";
// 引入mockjs
import "@/mock/mockServe";

// 引入swiper样式
import "swiper/swiper-bundle.css";
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  //注册路由
  router,
  // 注册仓库store，组件实例身上会多一个$store
  store,
}).$mount("#app");
