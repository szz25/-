const QRCode = require('../../utils/weapp-qrcode.js');
let qrcode;
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bowl:'18622383061',
    address: '5a4s5d6as65d6as776sa87dad87a',
    filePath:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.username){
      this.setData({
        bowl: app.globalData.num.replace(app.globalData.num.substring(3, 7), '****'),
        address: app.globalData.username
      })
      qrcode = new QRCode('canvas', {
        text: this.data.address,
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
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
  // 复制地址
  openToast: function () {
    wx.setClipboardData({
      data: this.data.address,
      success: function (res) {
        wx.showToast({
          title: '已复制到粘贴板',
          icon: 'success',
          duration: 3000
        });
      }
    })
  }
})