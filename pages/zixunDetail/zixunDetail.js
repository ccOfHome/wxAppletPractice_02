// mine/zixunDetail/zixunDetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zixunDetail:{
      title:"啊发布会急啊急啊妇女对你",
      date:"2019-06-18",
      details:[ 
        {
          is:0,
          text:"但是由于很多地方目前还处于寒假期间，过早的提供新学期的网络课程，无疑增加了学生的学习负担，别说寒假作业是否能够顺利完成，可能到时候就连新学期的课程学的也是参差不齐，这也必将为正常开学后的正常教学带来困扰.为此，教育部紧急叫停网上教学，要求各地在原计划的正式开学日之前，不得提前开始新学期课程网上教学。到目前为止，除了各地区教育主管部门上线了自己的网络课程外."
        },{
          is: 1,
          text: "但是由于很多地方目前还处于寒假期间."
        },{
          is: 0,
          text: "但是由于很多地方目前还处于寒假期间，过早的提供新学期的网络课程，无疑增加了学生的学习负担，别说寒假作业是否能够顺利完成，可能到时候就连新学期的课程学的也是参差不齐，这也必将为正常开学后的正常教学带来困扰.为此，教育部紧急叫停网上教学，要求各地在原计划的正式开学日之前，不得提前开始新学期课程网上教学。到目前为止，除了各地区教育主管部门上线了自己的网络课程外."
        }
          ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // var json = JSON.parse(options.json)
    var json
    wx.getStorage({
      key: 'zixun',
      success: function(res) {
        json = res.data
        console.log(json)
        json.date = json.createTime.substring(0, 10);
        that.setData({
          zixunDetail: json
        })
      },
      fail: function(res) {},
      complete: function(res) {},
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