//index.js
Page({
   data:{
     markers:[],
     longitude: 116.407744,  //精度
     latitude: 39.91312,   //维度
     scale:18,
   },
  tocreateMarkers(longitude, latitude){
     let markers =[{
       "id":1,
       "iconPath":"/images/map-bicycle.png",
       "latitude":latitude,
       "longitude":longitude,
       "width":52.5,
       "height":30,
       "callout":{}
     }]
     this.setData({
       markers
     });
   },
   onLoad(){
     //微信赋予小程序可以调用的api
     wx.showLoading({
       title: '获取坐标中',
     });
     //手机的GPS
     wx.getLocation({
       type:"gcj02",
       success:(res)=>{
         let{longitude,latitude} = res;
         this.tocreateMarkers(longitude,latitude)
        //  console.log(longitude, latitude);
        this.setData({
          longitude,
          latitude
        },()=>{
          wx.hideLoading();
        })
       }
     })
   },
   onReady(){
     //地图js对象
     this.mapCtx = wx.createMapContext('myMap', this)
   },
   toVisit(e){

   },
  toScan(){
    return wx.scanCode({
      success:(res)=>{
          wx.showModal({
            title: 'scan',
            content: 'JSON.stringify(res)',
          })
      }
    })
  },
   toUser(){},
   toMsg(){},
   toReset(){
     //回到最初的起点
     this.mapCtx.moveToLocation();
   }
})
