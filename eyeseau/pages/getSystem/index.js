// pages/getSystem/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText: {},
    systemInfos: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.btnText) {
      this.setData({
        btnText: app.globalData.btnText
      })
    } else {
      console.warn('app.globalData fail')
    }

    // 获取系统版本信息
    this.getSystemInfos()
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
  
  },

  /**
   * 获取系统信息
   */
  getSystemInfos: function() {
    let _this = this
    wx.getSystemInfo({
      success: function(res) {
        console.log('res',res)
        _this.setData({
          systemInfos: res
        })
      },
      fail: function(err) {
        console.warn(err)
      }
    })
  }
  
})