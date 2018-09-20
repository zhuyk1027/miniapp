//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    flag:false,
  },
  onLoad: function () {
    this.setData({
      
    })
  },
  bindFormSubmit: function (e) {
    const that = this;
    that.setData({
      flag: false
    });
    var text_to = e.detail.value.text_to;
    var text_title = e.detail.value.text_title;
    var text_cont = e.detail.value.text_cont;;
    wx.request({
      url: 'http://10.10.1.57:9012/api/tool/send_email', //仅为示例，非真实的接口地址
      data: {
        text_to: text_to,
        text_title: text_title,
        text_cont: text_cont
      },
      success: function (res) {      
        that.setData({
          flag: true
        })

      }
    })
  }

})


