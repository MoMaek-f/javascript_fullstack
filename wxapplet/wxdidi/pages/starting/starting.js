// pages/starting/starting.js
var QQmapWx = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk = new QQmapWx({
  key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
  });
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 39.912721, 
    longitude: 116.402544,
    scale:16,
    address: '',
    bluraddress:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          success: (res) => {
            console.log(res);
            // app.globalData.location = location
            this.setData({
              address: res.result.address,
              bluraddress: res.result.formatted_addresses.recommend
            });
          }
        })
      }
    })
  },
  bindregionchange (e) {
    console.log(e)
    //经纬度换了 lat lng 
    //下面的address 改成换后的？
    // 得到新的地址
    var that = this;
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.latitude,res.longitude)
        qqmapsdk.reverseGeocoder({
          lacation: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function(res) {
            that.setData({
              address: res.sesult.address,
              bluraddress:
              res.result.formatted_addresses.recommend
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('didMap');
    this.movetoPosition();

  },
  movetoPosition(){
    this.mapCtx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})