<template>
  <div class="mappage">
    <div class="section">
      <input type="text" placeholder="搜索" focus="true" v-model="keywords" @input="bindInput" />
    </div>
    <scroll-view scroll-y="true" class="addcont" style="height: 500rpx;">
      <div
        class="result"
        v-for="(item,index) in tips"
        :key="index"
        @touchstart="bindSearch(item.name)"
      >{{item.name}}</div>
    </scroll-view>

    <div class="map_container">
      <div class="title">显示当前位置</div>
      <map
        class="map"
        id="map"
        scale="16"
        :longitude="longitude"
        :latitude="latitude"
        :markers="markers"
      ></map>
    </div>
  </div>
</template>

<script>
import amapFile from "../../utils/amap-wx.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tips: [],
      latitude: 0,
      longitude: 0,
      markers: [],
      keywords: ""
    };
  },
  mounted() {
    this.getMapaddress();
  },
  methods: {
    ...mapMutations(['update']),
    getMapaddress() {
      let _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "8e4d112795eb693abe85db1b2b2a3e1c"
      });
      myAmapFun.getRegeo({
        iconPath: "/static/images/marker.png",
        iconWidth: 22,
        iconHeight: 32,
        success: function(data) {
          console.log(data);
          let marker = [
            {
              id: data[0].id,
              latitude: data[0].latitude,
              longitude: data[0].longitude,
              width: data[0].width,
              height: data[0].height
            }
          ];
          _this.markers = marker;
          _this.latitude = data[0].latitude;
          _this.longitude = data[0].longitude;
        },
        fail: function(info) {
          console.log(info);
        }
      });
    },
    bindInput(e) {
      // console.log(e)
      let _this = this;
      let keywords = _this.keywords;
      var myAmapFun = new amapFile.AMapWX({
        key: "8e4d112795eb693abe85db1b2b2a3e1c"
      });
      myAmapFun.getInputtips({
        keywords: keywords,
        location: "",
        success: function(data) {
          // console.log(data);
          if (data && data.tips) {
            _this.tips = data.tips;
          }
        }
      });
    },
    bindSearch(cityName) {
      this.update({ cityName: cityName });
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>