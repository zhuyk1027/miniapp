//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    imgUrls: '',
    flag:false
  },
  onLoad: function () {
    this.setData({
      
    })
  },
  bindFormSubmit: function (e) {
    const that = this;
    var urls = e.detail.value.url;
    wx.request({
      url: 'http://10.10.1.57:9012/api/tool/qrcode', //仅为示例，非真实的接口地址
      data: {
        urls: urls
      },
      success: function (res) {       
        that.setData({
          imgUrls: res.data,
          flag: true
        })

      }
    })
  },
  saveImgToPhotosAlbumTap: function () {
    wx.downloadFile({
      url: this.data.imgUrls,
      success: function (res) {
        //console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            //console.log(res)
          },
          fail: function (res) {
            //console.log(res)
            //console.log('fail')
          }
        })
      },
      fail: function () {
        //console.log('fail')
      }
    })

  }
})


