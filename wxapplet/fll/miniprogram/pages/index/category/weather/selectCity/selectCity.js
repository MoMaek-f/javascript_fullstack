// miniprogram/pages/weather/selectCity/selectCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['江西省', '南昌市', '青山湖区'],
    citySelected: [
      { 
        city: `{{weatherData.HeWeather6[0].basic.parent_city}}`,
        pic: `../../../../images/weather-icon/{{weatherData.now.cond_code}}.png`
      }
    ],
  },
  addCity: function (e) {
    that.setData({
      region: e.detail.value
      
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    citySelected = {

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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