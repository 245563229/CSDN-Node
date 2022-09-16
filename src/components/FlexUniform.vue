<template>
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FlexUniform",
  data() {
    return {
      name: "实现flex布局等分",
    };
  },
  methods: {},
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  width: 500px;
  height: 500px;
  /* flex布局 */
  display: flex;
  /* 主轴上的对齐方式 */
  justify-content: space-between;
  /* 换行(类似浮动布局) */
  flex-wrap: wrap;
  /* 副轴上的对齐方式 */
  align-content: space-between;
  background-color: skyblue;
}
li {
  width: 49%;
  height: 49%;
  list-style: none;
  background-color: red;
}
</style>