// pages/launch/launch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bool:true,
    price:{
      totalMoney:"0.000000",
      number:'',
      extraInfo:''
    }
  },
  change:function () {
    this.setData({
      bool:!this.data.bool
    })
  },
  // 双向数据绑定
  chang:function (e) {
    if (e.detail.value){
      this.setData({
        price: {
          totalMoney: e.detail.value,
          extraInfo: this.data.price.extraInfo,
          number: this.data.price.number
        }
      })
    }else{
      this.setData({
        price: {
          totalMoney: "",
          extraInfo: this.data.price.extraInfo,
          number: this.data.price.number
        }
      })
    }
  },
  extra:function(e){
    if (e.detail.value) {
      this.setData({
        price: {
          extraInfo: e.detail.value,
          number: this.data.price.number,
          totalMoney: this.data.price.totalMoney
        } 
      })
    } else {
      this.setData({
        price: {
          extraInfo: "",
          number: this.data.price.number,
          totalMoney: this.data.price.totalMoney
        }
      })
    }
  },
  num: function (e) {
    if (e.detail.value) {
      this.setData({
        price: {
          number: e.detail.value,
          extraInfo: this.data.price.extraInfo,
        totalMoney: this.data.price.totalMoney
        } 
      })
    } else {
      this.setData({
        price: {
          number: "",
          extraInfo: this.data.price.extraInfo,
          totalMoney: this.data.price.totalMoney
        }
      })
    }
  }
})