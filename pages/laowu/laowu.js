Page({
  /**
   * 页面的初始数据
   */
  data: {
    expriType: [{
        txt: "13管道工",
        borderColor: "grey"
      },
      {
        txt: "12焊工",
        borderColor: "grey"
      },
      {
        txt: "11电工",
        borderColor: "grey"
      },
      {
        txt: "10设计/预算",
        borderColor: "grey"
      },
      {
        txt: "9商用空调维修保养",
        borderColor: "grey"
      },
      {
        txt: "8小型家用多联机新风系统分体空调安装维修保养",
        borderColor: "grey"
      },
      {
        txt: "6地板辐射采暖系统安装",
        borderColor: "grey"
      },
      {
        txt: "5煤改电风冷水机安装",
        borderColor: "grey"
      },
      {
        txt: "4机房安装(水冷螺杆/离心机/溴化锂)",
        borderColor: "grey"
      },
      {
        txt: "3风管安装,铁皮35-55元/m2",
        borderColor: "grey"
      },
      {
        txt: "2氟系统商用多联机安装,700-900元/台",
        borderColor: "grey"
      },
      {
        txt: "14设备厂家",
        borderColor: "grey"
      },
      {
        txt: "15暖通专业外包公司",
        borderColor: "grey"
      },
      {
        txt: "16净化空调安装",
        borderColor: "grey"
      },
      {
        txt: "17自控及配电安装",
        borderColor: "grey"
      },
      {
        txt: "18地源热泵钻井埋管施工",
        borderColor: "grey"
      },
      {
        txt: "19风管水管保温施工队",
        borderColor: "grey"
      },
      {
        txt: "20装修劳务队泥工瓦工油工木工",
        borderColor: "grey"
      },
      {
        txt: "21太阳能热水系统安装",
        borderColor: "grey"
      },
      {
        txt: "7燃气锅炉房机房安装",
        borderColor: "grey"
      },
      {
        txt: "22冷库施工",
        borderColor: "grey"
      },
      {
        txt: "23消防安装",
        borderColor: "grey"
      },
      {
        txt: "24给排水及电安装队",
        borderColor: "grey"
      }
    ],

    region: ['北京市', '北京市', '东城区'],

    add: false, //加号
    show: true, //头像
    expri: true, //经验类型
    IDcardBorder: false,
    IDcardPhoto: true, //身份证照片

    imgUrl: "", //头像路径
    card: "", //身份证路径

    trueImgUrl: "", //返回的头像路径
    trueCard: "", //返回的身份证路径

    type: [], //存放经验类型

    headPortraitPath: "",
    captainName: "",
    telephone: "",
    workerNumber: "",
    electrician: "",
    welder: "",
    isInsurance: false,
    receivingArea: "",
    experienceDesc: "",
    identityCardPath: "",

    createTime: "",
    headimg: "",
    idcardimg: "",

    id: "",
    count: true,
    btnName: ["发布", "保存"],

    //在修改页判断是否修改头像
    isAlterHead: 0,
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
        //console.log(res.tempFilePaths);
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
  //展开多项经验类型
  selectExpri: function() {
    var that = this;
    that.setData({
      expri: false
    })
  },
  //点击经验类型
  clickExpri: function(e) {
    //console.log(e);
    var that = this;
    var typeArray = that.data.type; //存放点击了的经验
    var expriType = that.data.expriType; //经验数组
    var content = e.currentTarget.dataset.text; //得到经验内容
    //console.log(content);
    var index = e.currentTarget.dataset.num; //得到该经验索引
    //console.log(index);

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
        //console.log(res.tempFilePaths);
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
    //console.log(e);
    var that = this;

    var id = that.data.id;

    var headPortraitPath = that.data.trueImgUrl;
    console.log(headPortraitPath)
    var identityCardPath = that.data.trueCard;
    console.log(identityCardPath)

    var captainName = e.detail.value.captainName;
    var telephone = e.detail.value.telephone;
    var workerNumber = e.detail.value.workerNumber;
    var electrician = e.detail.value.electrician;
    var welder = e.detail.value.welder;
    var isInsurance = e.detail.value.isInsurance;
    var receivingArea = e.detail.value.receivingArea.join("-");
    var experienceType = that.data.type.join("-");
    var experienceDesc = e.detail.value.experienceDesc;

    //判空
    if (headPortraitPath != "" ? true : false && identityCardPath != "" ? true : false && captainName != "" ? true : false && telephone != "" ? true : false && workerNumber != "" ? true : false && electrician != "" ? true : false && welder != "" ? true : false && isInsurance != "" ? true : false && receivingArea != "" ? true : false && experienceType != "" ? true : false && experienceDesc != "" ? true : false) {
      if (id != "" ? true : false) {
        var upheadImgUrl;
        var headimg = that.data.headimg;
        if (that.data.isAlterHead == 1) { //修改头像了
          upheadImgUrl = headPortraitPath;
        } else if (that.data.isAlterHead == 0) { //没修改头像
          upheadImgUrl = headimg;
        }

        var upcardImgUrl;
        var idcardimg = that.data.idcardimg;
        if (that.data.isAlterCard == 1) { //修改身份证了
          upcardImgUrl = identityCardPath;
        } else if (that.data.isAlterCard == 0) { //没修改身份证
          upcardImgUrl = idcardimg;
        }

        wx.request({
          url: "http://25y41l4404.wicp.vip/labor/updateLabor",
          data: {
            "openId": "1",
            id,
            headPortraitPath: upheadImgUrl,
            captainName,
            telephone,
            workerNumber,
            electrician,
            welder,
            isInsurance,
            receivingArea,
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

              imgUrl: "", //临时头像路径
              card: "", //临时身份证路径

              trueImgUrl: "", //返回的头像路径
              trueCard: "", //返回的身份证路径

              type: [],

              headPortraitPath: "",
              captainName: "",
              telephone: "",
              workerNumber: "",
              electrician: "",
              welder: "",
              isInsurance: false,
              receivingArea: "",
              experienceDesc: "",
              identityCardPath: "",

              createTime: "",
              headimg: "",
              idcardimg: "",

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
          url: "http://25y41l4404.wicp.vip/labor/addLabor",
          data: {
            "openId": "1",
            headPortraitPath,
            captainName,
            telephone,
            workerNumber,
            electrician,
            welder,
            isInsurance,
            receivingArea,
            experienceType,
            experienceDesc,
            identityCardPath,

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

              imgUrl: "", //临时头像路径
              card: "", //临时身份证路径

              trueImgUrl: "", //返回的头像路径
              trueCard: "", //返回的身份证路径

              type: [],

              headPortraitPath: "",
              captainName: "",
              telephone: "",
              workerNumber: "",
              electrician: "",
              welder: "",
              isInsurance: false,
              receivingArea: "",
              experienceDesc: "",
              identityCardPath: ""
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
        url: "http://25y41l4404.wicp.vip/labor/getLaborByOpenIdAndId",
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

          var captainName = res.data.captainName;
          var telephone = res.data.telephone;
          var workerNumber = res.data.workerNumber;
          var electrician = res.data.electrician;
          var welder = res.data.welder;

          var isInsurance = res.data.isInsurance;
          var trueIsInsurance = false;
          if (isInsurance == "1") {
            trueIsInsurance = true;
          } else if (isInsurance == "0") {
            trueIsInsurance = false;
          }

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
            captainName,
            telephone,
            workerNumber,
            electrician,
            welder,
            isInsurance: trueIsInsurance,
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

            isAlterHead: 0,
            id: id,
            count: false
          })
        }
      })
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