var url=require('../../utils/config.js');
console.log(url);

var jumpFlag=true;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    loadingMore:false,
    loadingOver: false,
    data:[],
    pageNum:1,
    color:['one','two','three']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    });
    this.request();
    },

  request:function(){
    var self=this;
    var time=new Date().getTime();
    wx.request({
      url: url.textJoke,
      data:{
        showapi_timestamp: time,
        page:this.data.pageNum,
        maxResult:40
      },
      success:function(e){
        console.log(e);

        var data = e.data.showapi_res_body.contentlist;
        var length=data.length;
        if(length==0){
          self.setData({
            loadingMore:false,
            loadingOver:true
          });
          return;
        }
        var list=self.data.data.concat(data);
        for(var i=0;i<data.length;i++){
          data[i].text = self.removeHtml(data[i].text);
        }
        self.setData({
          data: list,
          flag: true,
          loadingMore:false
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
    })
  },

  jump:function(e){
    if (jumpFlag){
      jumpFlag=false;
      console.log(e);
      var id = e.currentTarget.id;
      var temp = JSON.stringify(this.data.data[id]);
      console.log(id);
      //console.log(temp.title);
      wx.navigateTo({
        url: '../textjoke/textjoke?data=' + temp,
      })
    }
  },

  removeHtml:function(str){
    return str.replace(/<[^>]+>/g,'');
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
    jumpFlag=true;
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

  /*upper:function(){
    console.log("123")
    wx.startPullDownRefresh({
      
    })
  },
  lower:function(){
    console.log("321")
    this.setData({
      loadingMore: true,
      loadingOver: false,
      pageNum: this.data.pageNum + 1
    });
    this.request();
  },*/
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("调用API")
    this.request();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loadingMore:true,
      loadingOver:false,
      pageNum:this.data.pageNum+1
    });
    this.request();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})