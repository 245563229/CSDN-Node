<template>
  <div id="app">
    <!-- <DownLoad /> -->
    <!-- <FlexUniform /> -->
    <!-- <GaoMapVue></GaoMapVue> -->
    <AntV></AntV>
  </div>
</template>

<script>
import DownLoad from "./components/DownLoad";
import FlexUniform from "./components/FlexUniform";
import GaoMapVue from "./components/map/GaoMap.vue";
import AntV from "./components/antvX6/AntV.vue";

export default {
  name: "App",
  components: {
    DownLoad,
    FlexUniform,
    GaoMapVue,
    AntV,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
