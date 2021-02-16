Page({

  /**
   * 页面的初始数据
   */
  data: {
    expriType: [{
      txt: "设计预算",
      borderColor: "grey"
    }],
    region: ['北京市', '北京市', '东城区'],

    add: false, //加号
    show: true, //头像
    expri: true, //经验类型
    IDcardBorder: false,
    IDcardPhoto: true, //身份证照片

    imgUrl: "", //头像路径
    quaPhoto: "../../img/addImg.png", //资质证件照片
    card: "", //身份证路径

    trueImgUrl: "", //返回的头像路径
    trueQuaPhoto: "", //返回的资质证件照片
    trueCard: "", //返回的身份证路径

    type: [], //存放经验类型

    headPortraitPath: "",
    identityCardPath: "",
    credentialsPicPath: "",
    designerName: "",
    telephone: "",
    receivingArea: "",
    credentialsName: "",
    experienceType: "",
    experienceDesc: "",

    createTime: "",
    headimg: "",
    idcardimg: "",
    credentimg: "",

    id: "",
    count: true,
    btnName: ["发布", "保存"],

    //在修改页判断是否修改头像
    isAlterHead: 0,
    //在修改页判断是否资质证件
    isAlterCred: 0,
    //在修改页判断是否修改身份证照片
    isAlterCard: 0
  },
  //上传头像照片
  upHeadImg: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res.tempFilePaths);
        var imgUrl = res.tempFilePaths;
        that.setData({
          imgUrl,
          add: true,
          show: false,
        });
        var type = "1";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: imgUrl[0],
          name: 'file',
          formData: {
            'type': type
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueImgUrl = obj.msg;
              that.setData({
                trueImgUrl,
                isAlterHead: 1
              });
            } else {
              wx.showToast({
                title: '上传失败',
                icon: 'loading',
                duration: 2000
              })
            }
          },
          fail(err) {
            console.log(err);
          }
        })
      }
    })
  },
  //接单区域选择
  bindRegionChange: function(e) {
    //console.log(e);
    var area = e.detail.value;
    //console.log(area);
    var that = this;
    that.setData({
      region: area
    })
  },
  //资质证件照片
  qualPhoto: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res.tempFilePaths);
        var quaPhoto = res.tempFilePaths;
        that.setData({
          quaPhoto,
        });
        var type = "4";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: quaPhoto[0],
          name: 'file',
          formData: {
            'type': type
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueQuaPhoto = obj.msg;
              that.setData({
                trueQuaPhoto,
                isAlterCred: 1
              });
            } else {
              wx.showToast({
                title: '上传失败',
                icon: 'loading',
                duration: 2000
              })
            }
          },
          fail(err) {
            console.log(err);
          }
        })
      }
    })
  },
  //点击多项经验类型
  selectExpri: function() {
    var that = this;
    that.setData({
      expri: false
    })
  },
  //点击经验类型
  clickExpri: function(e) {
    var that = this;
    if(that.data.id!=""?true:false){
      return;
    }else{
      var typeArray = that.data.type; //存放点击了的经验
      var expriType = that.data.expriType; //经验数组
      var content = e.currentTarget.dataset.text; //得到经验内容
      var index = e.currentTarget.dataset.num; //得到该经验索引
      for (var i = 0; i < expriType.length; i++) {
        if (expriType[i].txt == content) {
          //console.log(i);
          var borderColor = that.data.expriType[i].borderColor == "grey" ? "orange" : "grey";
          var newColor = 'expriType[' + i + '].borderColor';
          var delIndex;
          if (typeArray.indexOf(content) < 0) { //数组中没有
            //console.log("数组中没有")
            typeArray.push(content);
            that.setData({
              [newColor]: borderColor
            })
          } else { //数组中已经有了
            //console.log("数组中已经有了")
            for (var j = 0; j < typeArray.length; j++) {
              if (content == typeArray[j]) {
                delIndex = j;
              }
            }
            typeArray.splice(delIndex, 1);
            that.setData({
              [newColor]: borderColor
            })
          }
        }
      }
    /*for (var i = 0; i < typeArray.length; i++) {
      console.log(typeArray[i])
    }*/
    }
  },
  //关闭多选经验类型
  closeExpri: function() {
    var that = this;
    that.setData({
      expri: true
    })
  },
  //上传身份证正面照
  upIDCard: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res.tempFilePaths);
        var card = res.tempFilePaths;
        that.setData({
          card,
          IDcardPhoto: false,
          IDcardBorder: true
        });
        var type = "2";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: card[0],
          name: 'file',
          formData: {
            'type': type
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueCard = obj.msg;
              that.setData({
                trueCard,
                isAlterCard: 1
              });
            } else {
              wx.showToast({
                title: '上传失败',
                icon: 'loading',
                duration: 2000
              })
            }
          },
          fail(err) {
            console.log(err);
          }
        })
      }
    })
  },
  //提交表单
  submit: function(e) {
    var that = this;

    var id = that.data.id;

    var headPortraitPath = that.data.trueImgUrl;
    var identityCardPath = that.data.trueCard;
    var credentialsPicPath = that.data.trueQuaPhoto;

    var designerName = e.detail.value.designerName;
    var telephone = e.detail.value.telephone;
    var receivingArea = e.detail.value.receivingArea.join("-");
    var credentialsName = e.detail.value.credentialsName;

    var experienceType = that.data.type.join("-");

    var experienceDesc = e.detail.value.experienceDesc;

    //判空
    if (headPortraitPath != "" ? true : false && identityCardPath != "" ? true : false && credentialsPicPath != "" ? true : false && designerName != "" ? true : false && telephone != "" ? true : false && credentialsName != "" ? true : false && experienceType != "" ? true : false && experienceDesc != "" ? true : false) {
      //console.log("a")
      if (id != "" ? true : false) {
        //console.log("b")
        var upheadImgUrl;
        var headimg = that.data.headimg;
        if (that.data.isAlterHead == 1) { //修改头像了
          upheadImgUrl = headPortraitPath;
        } else if (that.data.isAlterHead == 0) { //没修改头像
          upheadImgUrl = headimg;
        }

        var upcredImgUrl;
        var credentimg = that.data.credentimg;
        if (that.data.isAlterCred == 1) { //修改资质证件了
          upcredImgUrl = credentialsPicPath;
        } else if (that.data.isAlterCred == 0) { //没修改资质证件
          upcredImgUrl = credentimg;
        }

        var upcardImgUrl;
        var idcardimg = that.data.idcardimg;
        if (that.data.isAlterCard == 1) { //修改身份证了
          upcardImgUrl = identityCardPath;
        } else if (that.data.isAlterCard == 0) { //没修改身份证
          upcardImgUrl = idcardimg;
        }

        wx.request({
          url: "http://25y41l4404.wicp.vip/designer/updateDesigner",
          data: {
            "openId": "1",
            id,
            headPortraitPath: upheadImgUrl,
            
            designerName,
            telephone,
            receivingArea,
            credentialsName,

            credentialsPicPath: upcredImgUrl,

            experienceType,
            experienceDesc,
            identityCardPath: upcardImgUrl,

            createTime: that.data.createTime,
            updateTime: new Date()
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'PUT',
          dataType: 'json',
          responseType: 'text',
          success: function(res) {
            console.log(res);
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            //清空表单
            that.setData({
              region: ['北京市', '北京市', '东城区'],

              add: false, //加号
              show: true, //头像
              expri: true, //经验类型
              IDcardBorder: false,
              IDcardPhoto: true, //身份证照片

              imgUrl: "", //头像路径
              quaPhoto: "../../img/addImg.png", //资质证件照片
              card: "", //身份证路径

              trueImgUrl: "", //返回的头像路径
              trueQuaPhoto: "", //返回的资质证件照片
              trueCard: "", //返回的身份证路径

              type: [], //存放经验类型

              headPortraitPath: "",
              identityCardPath: "",
              credentialsPicPath: "",
              designerName: "",
              telephone: "",
              receivingArea: "",
              credentialsName: "",
              experienceType: "",
              experienceDesc: "",

              createTime: "",
              headimg: "",
              idcardimg: "",
              credentimg: "",

              id: "",
              count: true
            })
            //清空经验类型
            for (var i = 0; i < that.data.expriType.length; i++) {
              var borderColor = "grey";
              var newColor = 'expriType[' + i + '].borderColor';
              that.setData({
                [newColor]: borderColor
              })
            }
            //返回上一页
            wx.navigateBack({
              delta: 1
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      } else {
        wx.request({
          url: "http://25y41l4404.wicp.vip/designer/addDesigner",
          data: {
            "openId": "1",
            headPortraitPath,
            identityCardPath,
            credentialsPicPath,

            designerName,
            telephone,
            receivingArea,
            credentialsName,
            experienceType,
            experienceDesc,

            createTime: new Date(),
            updateTime: new Date()
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function(res) {
            console.log(res);
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            //清空表单
            that.setData({
              region: ['北京市', '北京市', '东城区'],

              add: false, //加号
              show: true, //头像
              expri: true, //经验类型
              IDcardBorder: false,
              IDcardPhoto: true, //身份证照片

              imgUrl: "", //头像路径
              quaPhoto: "../../img/addImg.png", //资质证件照片
              card: "", //身份证路径

              trueImgUrl: "", //返回的头像路径
              trueQuaPhoto: "", //返回的资质证件照片
              trueCard: "", //返回的身份证路径


              type: [], //存放经验类型


              headPortraitPath: "",
              identityCardPath: "",
              credentialsPicPath: "",
              designerName: "",
              telephone: "",
              receivingArea: "",
              credentialsName: "",
              experienceType: "",
              experienceDesc: ""
            })
            //清空经验类型
            for (var i = 0; i < that.data.expriType.length; i++) {
              var borderColor = "grey";
              var newColor = 'expriType[' + i + '].borderColor';
              that.setData({
                [newColor]: borderColor
              })
            }
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    if (options.data != null) {
      //console.log(options);
      var id = options.data;
      wx.request({
        url: "http://25y41l4404.wicp.vip/designer/getDesignerByOpenIdAndId",
        data: {
          "openId": "1",
          id
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res);

          //获取到的数据
          var headPortraitPath = res.data.headPortraitPath;
          var trueHeadPortraitPath = "http://25y41l4404.wicp.vip/imgUpload/head/" + headPortraitPath;
          //console.log(trueHeadPortraitPath)

          var designerName = res.data.designerName;
          var telephone = res.data.telephone;

          var receivingArea = res.data.receivingArea;
          var region = [];
          var m = 0;
          for (var i = 0; i < receivingArea.length; i++) {
            if (receivingArea[i] == "-") {
              region.push(receivingArea.substring(m, i));
              m = i + 1;
            }
          } 
          region.push(receivingArea.substring(m, receivingArea.length));
          //console.log(region)

          var credentialsName = res.data.credentialsName;

          var credentialsPicPath = res.data.credentialsPicPath;
          var trueCredentialsPicPath = "http://25y41l4404.wicp.vip/imgUpload/credentials/" + credentialsPicPath;

          var experienceType = res.data.experienceType;
          var k = 0;
          var array = [];
          for (var i = 0; i < experienceType.length; i++) {
            if (experienceType[i] == "-") {
              array.push(experienceType.substring(k, i));
              k = i + 1;
            }
          }
          array.push(experienceType.substring(k, experienceType.length));
          that.setData({
            type: array
          })
          //console.log(array)
          var expriType = that.data.expriType;
          for (var i = 0; i < expriType.length; i++) {
            for (var j = 0; j < array.length; j++) {
              if (expriType[i].txt == array[j]) {
                var newColor = 'expriType[' + i + '].borderColor';
                that.setData({
                  [newColor]: "orange"
                })
              }
            }
          }

          var experienceDesc = res.data.experienceDesc;
          var identityCardPath = res.data.identityCardPath;
          var trueIdentityCardPath = "http://25y41l4404.wicp.vip/imgUpload/IdCard/" + identityCardPath;

          var createTime = res.data.createTime;

          that.setData({
            imgUrl: trueHeadPortraitPath,
            trueImgUrl: trueHeadPortraitPath,
            quaPhoto: trueCredentialsPicPath,
            trueQuaPhoto: trueCredentialsPicPath,
            designerName,
            telephone,
            credentialsName,
            type: array,
            region: region,
            experienceDesc,
            card: trueIdentityCardPath,
            trueCard: trueIdentityCardPath,

            createTime,

            add: true, //加号
            show: false, //头像
            IDcardBorder: true,
            IDcardPhoto: false, //身份证照片

            headimg: headPortraitPath,
            idcardimg: identityCardPath,
            credentimg: credentialsPicPath,

            isAlterHead: 0,
            id: id,
            count: false
          })
        }
      })
    }else{
      
    }
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