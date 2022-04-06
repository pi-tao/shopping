//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// 解决编程路由导航反复点击报错问题
const includPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return includPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return includPush.call(this, location).catch((err) => err);
};

//配置路由
export default new VueRouter({
  //配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      props: ($route) => {
        return {
          keyword: $route.params.keyword,
          k: $route.query.k,
        };
      },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      // 重定向
      path: "*",
      redirect: "/home",
    },
  ],
});
