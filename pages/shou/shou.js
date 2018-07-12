Page({
  data: {
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    account: {
      num: "",
      password: ""
    }
  },
  //事件处理函数
  onLoad: function () {
  },
  //手机号
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  //下一步
  enter: function () {
    console.log(1)
    wx.navigateTo({
      url: '../loginPass/loginPass'
    })
  }
})
