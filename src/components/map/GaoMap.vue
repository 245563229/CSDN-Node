<template>
  <div class="container" id="containerAdd"></div>
</template>

<script>
import { initMap } from "@/components/map/map.js";

export default {
  name: "mapGaoAdd",
  data() {
    return {
      //必须清楚原有才可以新建
      map: null,
      AMap: null,
      // polyEditor: null,
      // newpolyEditor: null,
      // path: [],
    };
  },
  props: {},
  created() {},
  mounted() {
    //地图初始化
    initMap()
      .then(async (Amap) => {
        this.AMap = Amap;
        this.map = new Amap.Map("containerAdd", {
          //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 11, //初始缩放比例
          center: [118.040303, 35.690348], //中心点位置
        });
        //被屏蔽掉的部分是阴影或者覆盖物处理
        // this.newpolyEditor = new AMap.PolygonEditor(this.map);
        // var polygon = new AMap.Polygon({
        //   path: this.path,
        //   strokeColor: "#FF33FF",
        //   strokeWeight: 6,
        //   strokeOpacity: 0.2,
        //   fillOpacity: 0.4,
        //   fillColor: "#1791fc",
        //   zIndex: 50,
        //   bubble: true,
        // });
        // this.map.add([polygon]);
        // this.map.on("dblclick", () => {
        //   setTimeout(() => {
        //     this.polyEditorClose();
        //   }, 300);
        // });
        //缩放到合适的比例
        this.map.setFitView();
        //this.polyEditor = new AMap.PolygonEditor(this.map);
        // this.polyEditor.open();
        // this.polyEditor.on("add", (data) => {
        //   const polygon = data.target;
        //   this.polyEditor.addAdsorbPolygons(polygon);
        //   polygon.on("dblclick", () => {
        //     this.polyEditor.setTarget(polygon);
        //     this.polyEditor.open();
        //   });
        // });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    //失去焦点
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  // height: calc(80vh - 45px);
  width: 100%;
}
>>> .amap-logo {
  z-index: -1;
}
>>> .amap-copyright {
  z-index: -1;
}
</style>