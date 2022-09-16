<template>
  <div id="app">
    <DownLoad />
    <!-- <FlexUniform /> -->
  </div>
</template>

<script>
import DownLoad from "./components/DownLoad";
import FlexUniform from "./components/FlexUniform";
export default {
  name: "App",
  components: {
    DownLoad,
    FlexUniform,
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
