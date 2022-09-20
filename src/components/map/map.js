import AMapLoader from "@amap/amap-jsapi-loader";

export const initMap = () =>
  AMapLoader.load({
    key: "8dfbf62bdc04abbb13bbeca81566d6b0", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      "AMap.PolygonEditor",
      "AMap.Autocomplete",
      "AMap.PlaceSearch",
      "AMap.Scale",
      "AMap.OverView",
      "AMap.ToolBar",
      "AMap.MapType",
      "AMap.PolyEditor",
      "AMap.CircleEditor",
      "AMap.Geocoder",
      "AMap.HeatMap",
    ],
  });
