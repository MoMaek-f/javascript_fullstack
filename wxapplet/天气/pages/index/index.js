//index.js
var apiCityWeatherUrl = 'https://free-api.heweather.net/s6/weather/now?location=beijing&key=7d04873a095140c2a82913601075db15';



//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData:{},
  },
  getWeatherInfo: function (cityCode,cb) {
    var that = this
    var WeatherUrl = apiCityWeatherUrl;
    wx.request({
      
      url: apiCityWeatherUrl,
      data: {},
      success : function (res){
        that.setData({
          weatherData: res.data,
        });
        //  var weatherData = res.data.HeWeather6.now;
       console.log(res.data);
        // console.log(weatherData);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeatherInfo();
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