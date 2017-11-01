
var app = getApp();
Page({
  /**
   * 通过data初始化数据
   */
  data: {
    hideInterface: true
  },
  /**
   * 监听页面开在加载的状态
   *    页面加载完成之后就不会在执行
   */
  onLoad: function () {
    
  },
  setReady: function () {
    this.setData({
      hideInterface : false
    })
    console.log(this.data.hideInterface);
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
  // chooseRole: function () {
  //   this.setData({
  //     isChoosing: false,
  //     choosedRole: this.data.roles[this.data.swiperCurrent - 1]
  //   });
  //   var that = this;
  //   setTimeout(function () {
  //     var animation = wx.createAnimation({
  //       duration: 2000,
  //       timingFunction: 'ease'
  //     });
  //     animation.scale(10, 10).step();
  //     that.setData({
  //       roleLogoAnimationData: animation.export(),
  //     });
  //   }, 100);
  // }
});