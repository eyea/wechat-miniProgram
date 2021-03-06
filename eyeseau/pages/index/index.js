//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    btnText: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 断网时候用
    this.setData({
      btnText: app.globalData.btnText
    })
    // 断网 end
    if (app.globalData.userInfo && app.globalData.btnText) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        btnText: app.globalData.btnText
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleWeather: function() { // 跳转到天气页面
    wx.navigateTo({
      url: '../weather/weather'
    })
  },
  handleSystemInfo: function() { // 跳转到查看系统信息页面
    wx.navigateTo({
      url: '../getSystem/index'
    })    
  }
})
