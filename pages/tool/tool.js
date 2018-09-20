//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    tool: []
  },
  onLoad: function (options) {
    var taht = this;
    wx.request({
      url: 'http://10.10.1.57:9012/api/tool/tool', //仅为示例，非真实的接口地址
      Data: {
      },
      success: function (res) {
        console.log(res);
        taht.setData({
          tool: res.data,
        })

      }
    })
  },
})
