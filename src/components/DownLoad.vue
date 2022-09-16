<template>
  <div>
    <el-button @click="download">下载模版</el-button>
  </div>
</template>

<script>
export default {
  name: "DownLoad",
  data() {
    return {
      name: "CSND下载模版",
    };
  },
  methods: {
    async download() {
      //  const res = await getDownloadTemplate();
      // console.log("模版", res);
      // const Url =
      //   "http://223.99.6.99:20016/" +
      //   "pub_upload/2022-09-07/cmptckme23vmzzw1lq.xlsx";
      // console.log(Url, "Url");
      // setTimeout(() => {
      //   window.open(Url);
      // }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
