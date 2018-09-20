//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    latitude: '',
    longitude: '',
    speed: '',
    altitude: '',
  },
  onLoad: function () {
    var taht = this;
    
    this.setData({
      
    }),
    // 获取微信经纬度，然后打开微信
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 15
        })
      }
    })
  },
  // 打开微信地图，经纬度
  openmap:function(e) {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      scale: 28
    })
  }
})


