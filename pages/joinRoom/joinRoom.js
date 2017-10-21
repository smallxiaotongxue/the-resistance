var app = getApp()
Page({
  /**
   * 通过data初始化数据
   */
  data: {
  },
  /**
   * 监听页面开在加载的状态
   *    页面加载完成之后就不会在执行
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   *  监听页面显示，
   *    当从当前页面调转到另一个页面
   *    另一个页面销毁时会再次执行
   */
  onShow: function () {
    console.log('index---------onShow()')
  },
  /**
   * 监听页面渲染完成
   *    完成之后不会在执行
   */
  onReady: function () {
    console.log('index---------onReaday()');
  },
  /**
   * 监听页面隐藏
   *    当前页面调到另一个页面时会执行
   */
  onHide: function () {
    console.log('index---------onHide()')
  },
  /**
   * 当页面销毁时调用
   */
  onUnload: function () {
    console.log('index---------onUnload')
  }

})