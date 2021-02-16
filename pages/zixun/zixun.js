var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    hidden: true
  },

  getDetail: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.ind;
    var that = this;
    var data = that.data.content[index];
    console.log(data)
    wx.setStorage({
      key: 'zixun',
      data: data,
      success: function(res) {
        wx.navigateTo({
          url: './../zixunDetail/zixunDetail'
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx.navigateTo({
    //   url: './../zixunDetail/zixunDetail?json=' + JSON.stringify(data)
    // })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.request({
      url: "https://www.feifengnuantong.com/information/getInformation",
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        var dataArray = res.data;
        if (dataArray == "") {
          that.setData({
            hidden: true
          })
          return;
        }else{
          that.setData({
            content: dataArray,
            hidden: false
          })
        }
        //console.log(that.data.content);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {},
    })
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