//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    blog_top:[],
    blog_list: [],
    friendship: [],
    groups: [],
    tags: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var taht = this;
    wx.request({
      url: 'http://10.10.1.57:9012/api/blog/index', //仅为示例，非真实的接口地址
      // url: 'http://www.zhuyk.cn/api/blog/index', //仅为示例，非真实的接口地址
      formData: {
      },
      success: function (res) {
        taht.setData({
          imgUrls : res.data.ad,
          blog_top: res.data.blog_top,
          blog_list: res.data.blog,
          groups: res.data.groups,
          tags: res.data.tags,
        })

      }
    })
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

  
})



