Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  blur: function(e){
    this.value=e.detail.value;
  },
  test:function(){
    wx.setStorageSync("save", this.value);
  },
  test1:function(){
    let test1=wx.getStorageSync('test1') || [];
    test1.unshift(this.value);
    wx.setStorageSync('test1', test1);
  },
  test2:function(){
    let test2 = wx.getStorageSync('test2') || [];
    test2.unshift(this.value);
    wx.setStorage({
      key: 'test2',
      data: test2,
      success:function(e){
        console.log(e);
      }
    })
  },
  history: function(){
    wx.navigateTo({
      url: '../show/show',
    })
  },
  remove: function(){
    wx.removeStorageSync(test1);
  },
  clear: function () {
    wx.clearStorage();
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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