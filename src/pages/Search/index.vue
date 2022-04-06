<template>
  <div>
    <!-- <h1>parmas参数:{{ $route.parmas.keyword }}</h1> -->
    <h1>query参数:{{ $route.query.k }}</h1>
    <h1>params参数：{{ $route.params.keyword }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword", "k"],
};
</script>

<style>
</style>