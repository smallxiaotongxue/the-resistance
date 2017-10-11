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
    console.log('index---------onLoad()')
    // this指的就是本页面对象
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    //   //更新本页面
    //   that.update()
    // })
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