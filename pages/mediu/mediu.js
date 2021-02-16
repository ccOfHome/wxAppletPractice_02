// pages/mediu/mediu.js
var r=wx.getRecorderManager();
var temp;

var audio=wx.createInnerAudioContext();

var s=wx.getSystemInfoSync();
console.log(s.brand);
console.log(s.model);

r.onStop(function(res){
  console.log(res);
  temp=res.tempFilePath; 
});

r.onStart(function(){
  console.log("开始");
});

r.onPause(function () {
  console.log("暂停");
});


Page({

  /**
   * 页面的初始数据
   */
  data: {
    brand:"",
    model:"",
    width:"",
    height:"",

  },

  start:function(){
    r.start();
  },
  pause:function(){
    r.pause();
  },
  go:function(){
    r.resume();
  },
  stop:function(){
    r.stop();
  },

  play:function(){
    audio.src=temp;
    audio.autoplay=true;
  },

  test:function(){
    var self=this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        self.setData({
          brand: res.brand,
          model: res.model,
          width: res.windowWidth,
          height: res.windowHeight,
        })
      },
    })
  },
  test1: function () {
    wx.getNetworkType({
      success: function(res) {
        console.log(res);

      },
    })
  },
  test2: function () {
    wx.chooseLocation({
      success: function(res) {
        
      },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onNetworkStatusChange(function(res){
      console.log(res);
    });
    var self=this;

    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          width: res.windowWidth,
          height: res.windowHeight,
        })
      },
    });
    type:"gcj02",
    wx.getLocation({
      success: function(res) {
        var latitude=res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
        })
      },
    })
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

  }
})