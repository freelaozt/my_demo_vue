<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
    </div>
    <!-- <img src="./assets/logo.png"> -->

    <!-- 路由组件出口 -->
    <router-view />
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";

export default {
  name: "App",
  components: {
    "top-header": TopHeader
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
