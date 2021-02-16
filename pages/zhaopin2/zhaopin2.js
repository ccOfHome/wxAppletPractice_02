Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    putaway: [], //true为 未下架 false为 下架

    hidden: true
  },
  //点击进入详情页
  getDetail: function(e) {
    console.log("getDetail")
    //console.log(e)
    var index = e.currentTarget.dataset.ind;
    var that = this;
    var data = that.data.content[index];
    //跳转到详情页
    wx.navigateTo({
      url: './../neirong/neirong?data=' + JSON.stringify(data)
    })
  },
  //修改
  alter: function(e) {
    //console.log(e)
    var that = this;
    var id = e.currentTarget.dataset.id;
    //跳转到详情页
    wx.navigateTo({
      url: './../zhaopin/zhaopin?data=' + id
    })
  },
  //下架
  soldOut: function(e) {
    //console.log(e)
    var that = this;
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.ind;
    wx.request({
      url: "http://25y41l4404.wicp.vip/recruit/underRecruit",
      data: {
        id
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //console.log(res);
        if (res.data.code == 1) {
          var put = "putaway[" + index + "]";
          that.setData({ //下架
            [put]: false
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //上架
  putaway: function(e) {
    //console.log(e)
    var that = this;
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.ind;
    wx.request({
      url: "http://25y41l4404.wicp.vip/recruit/upRecruit",
      data: {
        id
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //console.log(res);
        if (res.data.code == 1) {
          var put = "putaway[" + index + "]";
          that.setData({ //上架
            [put]: true
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: "http://25y41l4404.wicp.vip/recruit/getRecruitByOpenId",
      data: {
        "openId": "1"
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        var data = res.data;
        if (data == null) {
          that.setData({
            hidden: true
          })
          return;
        }
        else {
          that.setData({
            content: data
          })
          for (var j = 0; j < data.length; j++) {
            if (data[j].displayStatus == 1) { //未下架
              var put = "putaway[" + j + "]";
              that.setData({
                [put]: true
              })
            } else { //下架
              var put = "putaway[" + j + "]";
              that.setData({
                [put]: false
              })
            }
          }
          that.setData({
            hidden: false
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.request({
      url: "http://25y41l4404.wicp.vip/recruit/getRecruitByOpenId",
      data: {
        "openId": "1"
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        var data = res.data;
        if (data == null) {
          that.setData({
            hidden: true
          })
          return;
        }
        else {
          that.setData({
            content: data
          })
          for (var j = 0; j < data.length; j++) {
            if (data[j].displayStatus == 1) { //未下架
              var put = "putaway[" + j + "]";
              that.setData({
                [put]: true
              })
            } else { //下架
              var put = "putaway[" + j + "]";
              that.setData({
                [put]: false
              })
            }
          }
          that.setData({
            hidden: false
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})