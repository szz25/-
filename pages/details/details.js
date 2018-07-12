// pages/details/details.js
Page({
  data: {
    content:{}
  },
  onLoad: function (options) {
    this.setData({
      content: JSON.parse(options.content)
    })
  }
})