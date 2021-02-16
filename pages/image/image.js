// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
    img:[
      "http://img5.imgtn.bdimg.com/it/u=1200889471,2010793696&fm=26&gp=0.jpg",
      "http://img2.imgtn.bdimg.com/it/u=1080760116,732088640&fm=26&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=1200889471,2010793696&fm=26&gp=0.jpg"
    ],
    imgs:[],
    path:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  test:function(){
    wx.chooseImage({
      count:2,
      success: res => {
        console.log(res);
        /*this.setData({
          src:res.tempFilePaths,
        })*/
        var path=res.tempFilePaths;
        console.log(path);
        wx.saveFile({
          tempFilePath: path[0],
          success:(e)=>{
            console.log(e);
            this.setData({
              src:e.savedFilePath,
            })
          }
        })
      },
    })
  },

  test1:function(){
    /*wx.getSavedFileList({
      success:function(e){
        console.log(e);
      }
    })*/
    /*wx.getSavedFileInfo({
      filePath: '',
      success: function (e) {
        console.log(e);
      }
    })*/
    wx.removeSavedFile({
      filePath: '',
    })
  },

  test2:function(){
    wx.previewImage({
      urls: this.data.img,
      //current:"http://img5.imgtn.bdimg.com/it/u=1200889471,2010793696&fm=26&gp=0.jpg",

    })
  },
  choose:function(){
    var {imgs}=this.data; //var imgs=this.data.imgs;
    wx.chooseImage({
      success: (res)=> {
        var path=res.tempFilePaths;
        this.setData({
          imgs: imgs.concat(res.tempFilePaths),
        })
      },
    })
  },

  test3:function(){
    wx.getImageInfo({
      src: '../../img/return.png',  //是网络图片要小心
      success:function(e){
        console.log(e);
      }
    })
  },
  test4:function(){
    /*wx.getSetting({
      success:function(e){
        console.log(e);
      }
    })*/
    /*wx.openSetting({
      success: function (res) {
        console.log(res);
      }
    })*/
    wx.authorize({
      scope: 'scope.writePhotosAlbum',
    })
  },

  save:function(){
    for(var i=0;i<path.length;i++){
      wx.saveImageToPhotosAlbum({
        filePath: this.data.path[i],
        fail:function(e){
          console.log(e);
          if(e.errMsg=="saveImageToPhotosAlbum:fail auth deny"){
            wx.openSetting({
              
            })
          }
        }
      })
    }
  },
  select:function(){
    wx.chooseImage({
      success: function(res) {
        path = path.concat(res.tempFilePaths);
      },
    })
  },

  Set:function(){
    wx.openSetting({
      
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