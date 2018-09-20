Page({
  data: {
    message: ''
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    const that = this;
    this.mapCtx.getCenterLocation({
      success: function (res) {
        // 打印当前位置经纬度
        console.log(res.longitude),
        console.log(res.latitude),
        that.setData({
          message: "经度: " + res.latitude +"\n纬度: " + res.longitude 
        })
        
      }
    })
  },
  moveToLocation: function () {
    // 移动到当前位置
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    // 默认加载位置
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  // 
  getRegion: function () {
    // 获取视野范围
    const that = this;
    this.mapCtx.getRegion({
      success: function (res) {
        console.log('西南角 经度' + res.northeast.longitude + ' 纬度' + res.northeast.latitude);
        console.log('东北角 经度' + res.southwest.longitude + ' 纬度' + res.southwest.latitude);
        that.setData({
          message: '西南角: 经度' + res.northeast.longitude + ' 纬度' + res.northeast.latitude + '\n东北角:经度' + res.southwest.longitude + ' 纬度' + res.southwest.latitude 
        })
      }
    })
  },
  getScale: function () {
    // 获取地图缩放级别
    const that = this;
    this.mapCtx.getScale({
      success: function (res) {
        console.log('缩放级别为'+res.scale);
        that.setData({
          message: '缩放级别为' + res.scale
        })
      }
    })
  }
})