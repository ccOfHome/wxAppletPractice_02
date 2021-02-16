Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    flagArray: [false, true, true],
    fontColor: ["#556B2F", "black", "black"],
    borderColor: ["#556B2F", "white", "white"],

    labourData: [],
    budgetData: [],
    noticeData: [],

    hidden: [true, true, true]
  },
  clickLabour: function(e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    //console.log(e)
    var index = e.currentTarget.dataset.ind;
    var that = this;
    //字体颜色
    var fontColor = that.data.fontColor;
    var font = "fontColor[" + index + "]";
    var lfont = "fontColor[" + 1 + "]";
    var rfont = "fontColor[" + 2 + "]";

    //边框颜色
    var borderColor = that.data.borderColor;
    var border = "borderColor[" + index + "]";
    var lborder = "borderColor[" + 1 + "]";
    var rborder = "borderColor[" + 2 + "]";

    //内容
    var flagArray = that.data.flagArray;
    var flag = "flagArray[" + index + "]";
    var lflag = "flagArray[" + 1 + "]";
    var rflag = "flagArray[" + 2 + "]";

    that.setData({
      [font]: "#556B2F",
      [lfont]: "black",
      [rfont]: "black",

      [border]: "#556B2F",
      [lborder]: "white",
      [rborder]: "white",

      [flag]: false,
      [lflag]: true,
      [rflag]: true
    })
    that.onLoad;
  },
  clickBudget: function(e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    //console.log(e)
    var index = e.currentTarget.dataset.ind;
    var that = this;
    //字体颜色
    var fontColor = that.data.fontColor;
    var font = "fontColor[" + index + "]";
    var lfont = "fontColor[" + 0 + "]";
    var rfont = "fontColor[" + 2 + "]";

    //边框颜色
    var borderColor = that.data.borderColor;
    var border = "borderColor[" + index + "]";
    var lborder = "borderColor[" + 0 + "]";
    var rborder = "borderColor[" + 2 + "]";

    //内容
    var flagArray = that.data.flagArray;
    var flag = "flagArray[" + index + "]";
    var lflag = "flagArray[" + 0 + "]";
    var rflag = "flagArray[" + 2 + "]";
    that.setData({
      [font]: "#556B2F",
      [lfont]: "black",
      [rfont]: "black",

      [border]: "#556B2F",
      [lborder]: "white",
      [rborder]: "white",

      [flag]: false,
      [lflag]: true,
      [rflag]: true
    })
  },
  clickNotice: function(e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    //console.log(e)
    var index = e.currentTarget.dataset.ind;
    var that = this;
    //字体颜色
    var fontColor = that.data.fontColor;
    var font = "fontColor[" + index + "]";
    var lfont = "fontColor[" + 0 + "]";
    var rfont = "fontColor[" + 1 + "]";

    //边框颜色
    var borderColor = that.data.borderColor;
    var border = "borderColor[" + index + "]";
    var lborder = "borderColor[" + 0 + "]";
    var rborder = "borderColor[" + 1 + "]";

    //内容
    var flagArray = that.data.flagArray;
    var flag = "flagArray[" + index + "]";
    var lflag = "flagArray[" + 0 + "]";
    var rflag = "flagArray[" + 1 + "]";
    that.setData({
      [font]: "#556B2F",
      [lfont]: "black",
      [rfont]: "black",

      [border]: "#556B2F",
      [lborder]: "white",
      [rborder]: "white",

      [flag]: false,
      [lflag]: true,
      [rflag]: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: "http://25y41l4404.wicp.vip/memberPay/getMemberPayByOpenId",
      data: {
        "openID": "1"
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
          if (labourData == null) {
            var hidden = "hidden[" + 0 + "]";
            that.setData({
              [hidden]: true
            })
          }
          if (budgetData == null) {
            var hidden = "hidden[" + 1 + "]";
            that.setData({
              [hidden]: true
            })
          }
          if (noticeData == null) {
            var hidden = "hidden[" + 2 + "]";
            that.setData({
              [hidden]: true
            })
          }
        } else {
          for (var i = 0; i < data.length; i++) {
            if (data[i].type == "劳务队") {
              var labourData = that.data.labourData;
              labourData.push(data[i]);
              that.setData({
                labourData
              })
            } else if (data[i].type == "设计预算师") {
              var budgetData = that.data.budgetData;
              budgetData.push(data[i]);
              that.setData({
                budgetData
              })
            } else if (data[i].type == "劳务招标" || data[i].type == "货物招标") {
              var noticeData = that.data.noticeData;
              noticeData.push(data[i]);
              that.setData({
                noticeData
              })
            }
          }
          if (labourData != null) {
            var hidden = "hidden[" + 0 + "]";
            that.setData({
              [hidden]: false
            })
          }
          if (budgetData != null) {
            var hidden = "hidden[" + 1 + "]";
            that.setData({
              [hidden]: false
            })
          }
          if (noticeData != null) {
            var hidden = "hidden[" + 2 + "]";
            that.setData({
              [hidden]: false
            })
          }
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