// miniprogram/pages/weather/weather.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    navs: [
      { navimg: '../../images/class.png', navtext: '课表', alias: 'jianjie' },
      { navimg: '../../images/weather.png', navtext: '天气', alias: 'weather' },
      { navimg: '../../images/jiangshi.png', navtext: '讲师', alias: 'jiangshi'},
      { navimg: '../../images/ziliao.png', navtext: '资料', alias: 'ziliao'},
      { navimg: '../../images/anpai.png', navtext: '行程日历', alias: 'date'},
      { navimg: '../../images/jihua.png', navtext: '学习计划', alias: 'jihua'},
      { navimg: '../../images/huodong.png', navtext: '放松活动', alias: 'huodong' },
      { navimg: '../../images/shunfeng.png', navtext: '任务目标', alias: 'renwu' },
    ], 
    navs2: [
      { navimg: '../../images/class.png', navtext: '学习清单', alias: 'list' },
     
    ],
    
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
  switchtap: function (pg) {
    console.log(pg);
    const alias = pg.currentTarget.dataset.alias
    wx.navigateTo({
      url: `category/${alias}/${alias}`,    //这个是要加载的页面的路径
      
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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