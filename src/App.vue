<template>
  <div>
    <Header />
    <!-- 书写路由组件展示的位置 -->
    <router-view></router-view>
    <!-- 在home或者search下是显示的，登陆注册隐藏 -->
    <!-- <Footer
      v-show="$route.path == '/home' || $route.path == '/search'"
    ></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style>
</style>
