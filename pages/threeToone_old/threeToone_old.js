Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    flagArray: [false, true, true],
    fontColor: ["#556B2F", "black", "black"],
    borderColor: ["#556B2F", "white", "white"],

    /*劳务数据*/
    expriType_0: [{
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

    region_0: ['北京市', '北京市', '东城区'],

    add_0: false, //加号
    show_0: true, //头像
    expri_0: true, //经验类型
    IDcardBorder_0: false,
    IDcardPhoto_0: true, //身份证照片

    imgUrl_0: "", //头像路径
    card_0: "", //身份证路径

    trueImgUrl_0: "", //返回的头像路径
    trueCard_0: "", //返回的身份证路径

    type_0: [], //存放经验类型

    headPortraitPath_0: "",
    captainName_0: "",
    telephone_0: "",
    workerNumber_0: "",
    electrician_0: "",
    welder_0: "",
    isInsurance_0: false,
    receivingArea_0: "",
    experienceDesc_0: "",
    identityCardPath_0: "",

    createTime_0: "",
    headimg_0: "",
    idcardimg_0: "",

    id_0: "",
    count_0: true,
    btnName_0: ["发布", "保存"],

    //在修改页判断是否修改头像
    isAlterHead_0: 0,
    //在修改页判断是否修改身份证照片
    isAlterCard_0: 0,

    /*设计预算数据*/
    expriType_1: [{
      txt: "设计预算",
      borderColor: "grey"
    }],
    region_1: ['北京市', '北京市', '东城区'],

    add_1: false, //加号
    show_1: true, //头像
    expri_1: true, //经验类型
    IDcardBorder_1: false,
    IDcardPhoto_1: true, //身份证照片

    imgUrl_1: "", //头像路径
    quaPhoto_1: "../../img/addImg.png", //资质证件照片
    card_1: "", //身份证路径

    trueImgUrl_1: "", //返回的头像路径
    trueQuaPhoto_1: "", //返回的资质证件照片
    trueCard_1: "", //返回的身份证路径

    type_1: [], //存放经验类型

    headPortraitPath_1: "",
    identityCardPath_1: "",
    credentialsPicPath_1: "",
    designerName_1: "",
    telephone_1: "",
    receivingArea_1: "",
    credentialsName_1: "",
    experienceType_1: "",
    experienceDesc_1: "",

    createTime_1: "",
    headimg_1: "",
    idcardimg_1: "",
    credentimg_1: "",

    id_1: "",
    count_1: true,
    btnName_1: ["发布", "保存"],

    //在修改页判断是否修改头像
    isAlterHead_1: 0,
    //在修改页判断是否资质证件
    isAlterCred_1: 0,
    //在修改页判断是否修改身份证照片
    isAlterCard_1: 0,

    /*设备材料数据*/
    single_2: [], //产品价格
    double_2: [], //产品价格距离
    check_2: [], //switch开关

    procutType_2: ["氟系统材料", "水系统管道", "风系统材料", "保温材料", "电及自控系统设备材料", "水系统机房辅助设备", "水系统阀门管件", "空调主机末端设备", "施工工具", "设备材料人工大包"],
    productIndex_2: [], //产品类型索引

    productImg_2: [], //产品图片
    trueProductImg_2: [], //返回的产品图片

    companyName_2: [],
    area_2: [],

    productSum_2: 1, //产品个数

    //定义一个数组  存放多个产品
    productArray_2: [],

    produceName_2: [],
    produceSpecs_2: [],
    price_2: [],
    priceLower_2: [],
    priceUpper_2: [],
    measureUnit_2: [],
    produceDetail_2: [],

    productimg_2: "",

    id_2: "",
    count_2: true,
    btnName_2: ["发布", "保存"],

    //在修改页判断是否修改产品图片
    isAlterProduct_2: 0
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

  /*劳务函数*/
  //上传头像照片
  upHeadImg_0: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        //console.log(res.tempFilePaths);
        var imgUrl_0 = res.tempFilePaths;
        that.setData({
          imgUrl_0,
          add_0: true,
          show_0: false,
        });
        var type_0 = "1";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: imgUrl_0[0],
          name: 'file',
          formData: {
            'type_0': type_0
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueImgUrl_0 = obj.msg;
              that.setData({
                trueImgUrl_0,
                isAlterHead_0: 1
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
  bindRegionChange_0: function(e) {
    //console.log(e);
    var area = e.detail.value;
    //console.log(area);
    var that = this;
    that.setData({
      region_0: area
    })
  },
  //展开多项经验类型
  selectExpri_0: function() {
    var that = this;
    that.setData({
      expri_0: false
    })
  },
  //点击经验类型
  clickExpri_0: function(e) {
    //console.log(e);
    var that = this;
    var typeArray = that.data.type_0; //存放点击了的经验
    var expriType = that.data.expriType_0; //经验数组
    var content = e.currentTarget.dataset.text; //得到经验内容
    //console.log(content);
    var index = e.currentTarget.dataset.num; //得到该经验索引
    //console.log(index);

    for (var i = 0; i < expriType.length; i++) {
      if (expriType[i].txt == content) {
        //console.log(i);
        var borderColor = that.data.expriType_0[i].borderColor == "grey" ? "orange" : "grey";
        var newColor = 'expriType_0[' + i + '].borderColor';
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
  closeExpri_0: function() {
    var that = this;
    that.setData({
      expri_0: true
    })
  },
  //上传身份证正面照
  upIDCard_0: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        //console.log(res.tempFilePaths);
        var card_0 = res.tempFilePaths;
        that.setData({
          card_0,
          IDcardPhoto_0: false,
          IDcardBorder_0: true
        });
        var type_0 = "2";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: card_0[0],
          name: 'file',
          formData: {
            'type_0': type_0
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueCard_0 = obj.msg;
              that.setData({
                trueCard_0,
                isAlterCard_0: 1
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
  submit_0: function(e) {
    //console.log(e);
    var that = this;

    var id = that.data.id;

    var headPortraitPath = that.data.trueImgUrl_0;
    console.log(headPortraitPath)
    var identityCardPath = that.data.trueCard_0;
    console.log(identityCardPath)

    var captainName = e.detail.value.captainName_0;
    var telephone = e.detail.value.telephone_0;
    var workerNumber = e.detail.value.workerNumber_0;
    var electrician = e.detail.value.electrician_0;
    var welder = e.detail.value.welder_0;
    var isInsurance = e.detail.value.isInsurance_0;
    var receivingArea = e.detail.value.receivingArea_0.join("-");
    var experienceType = that.data.type_0.join("-");
    var experienceDesc = e.detail.value.experienceDesc_0;

    //判空
    if (headPortraitPath != "" ? true : false && identityCardPath != "" ? true : false && captainName != "" ? true : false && telephone != "" ? true : false && workerNumber != "" ? true : false && electrician != "" ? true : false && welder != "" ? true : false && isInsurance != "" ? true : false && receivingArea != "" ? true : false && experienceType != "" ? true : false && experienceDesc != "" ? true : false) {
      if (id != "" ? true : false) {
        var upheadImgUrl;
        var headimg = that.data.headimg_0;
        if (that.data.isAlterHead_0 == 1) { //修改头像了
          upheadImgUrl = headPortraitPath;
        } else if (that.data.isAlterHead_0 == 0) { //没修改头像
          upheadImgUrl = headimg;
        }

        var upcardImgUrl;
        var idcardimg = that.data.idcardimg_0;
        if (that.data.isAlterCard_0 == 1) { //修改身份证了
          upcardImgUrl = identityCardPath;
        } else if (that.data.isAlterCard_0 == 0) { //没修改身份证
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
            identityCardPath: upcardImgUrl_0,

            createTime: that.data.createTime_0,
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
              region_0: ['北京市', '北京市', '东城区'],

              add_0: false, //加号
              show_0: true, //头像
              expri_0: true, //经验类型
              IDcardBorder_0: false,
              IDcardPhoto_0: true, //身份证照片

              imgUrl_0: "", //临时头像路径
              card_0: "", //临时身份证路径

              trueImgUrl_0: "", //返回的头像路径
              trueCard_0: "", //返回的身份证路径

              type_0: [],

              headPortraitPath_0: "",
              captainName_0: "",
              telephone_0: "",
              workerNumber_0: "",
              electrician_0: "",
              welder_0: "",
              isInsurance_0: false,
              receivingArea_0: "",
              experienceDesc_0: "",
              identityCardPath_0: "",

              createTime_0: "",
              headimg_0: "",
              idcardimg_0: "",

              id_0: "",
              count_0: true
            })
            //清空经验类型
            for (var i = 0; i < that.data.expriType_0.length; i++) {
              var borderColor = "grey";
              var newColor = 'expriType_0[' + i + '].borderColor';
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
              region_0: ['北京市', '北京市', '东城区'],

              add_0: false, //加号
              show_0: true, //头像
              expri_0: true, //经验类型
              IDcardBorder_0: false,
              IDcardPhoto_0: true, //身份证照片

              imgUrl_0: "", //临时头像路径
              card_0: "", //临时身份证路径

              trueImgUrl_0: "", //返回的头像路径
              trueCard_0: "", //返回的身份证路径

              type_0: [],

              headPortraitPath_0: "",
              captainName_0: "",
              telephone_0: "",
              workerNumber_0: "",
              electrician_0: "",
              welder_0: "",
              isInsurance_0: false,
              receivingArea_0: "",
              experienceDesc_0: "",
              identityCardPath_0: ""
            })
            //清空经验类型
            for (var i = 0; i < that.data.expriType_0.length; i++) {
              var borderColor = "grey";
              var newColor = 'expriType_0[' + i + '].borderColor';
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

  /*设计预算函数*/
  //上传头像照片
  upHeadImg_1: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res.tempFilePaths);
        var imgUrl_1 = res.tempFilePaths;
        that.setData({
          imgUrl_1,
          add_1: true,
          show_1: false,
        });
        var type_1 = "1";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: imgUrl_1[0],
          name: 'file',
          formData: {
            'type_1': type_1
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueImgUrl_1 = obj.msg;
              that.setData({
                trueImgUrl_1,
                isAlterHead_1: 1
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
  bindRegionChange_1: function(e) {
    //console.log(e);
    var area = e.detail.value;
    //console.log(area);
    var that = this;
    that.setData({
      region_1: area
    })
  },
  //资质证件照片
  qualPhoto_1: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res.tempFilePaths);
        var quaPhoto_1 = res.tempFilePaths;
        that.setData({
          quaPhoto_1,
        });
        var type_1 = "4";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: quaPhoto_1[0],
          name: 'file',
          formData: {
            'type_1': type_1
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueQuaPhoto_1 = obj.msg;
              that.setData({
                trueQuaPhoto_1,
                isAlterCred_1: 1
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
  selectExpri_1: function() {
    var that = this;
    that.setData({
      expri_1: false
    })
  },
  //点击经验类型
  clickExpri_1: function(e) {
    var that = this;
    if (that.data.id_1 != "" ? true : false) {
      return;
    } else {
      var typeArray = that.data.type_1; //存放点击了的经验
      var expriType = that.data.expriType_1; //经验数组
      var content = e.currentTarget.dataset.text; //得到经验内容
      var index = e.currentTarget.dataset.num; //得到该经验索引
      for (var i = 0; i < expriType.length; i++) {
        if (expriType[i].txt == content) {
          //console.log(i);
          var borderColor = that.data.expriType_1[i].borderColor == "grey" ? "orange" : "grey";
          var newColor = 'expriType_1[' + i + '].borderColor';
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
  closeExpri_1: function() {
    var that = this;
    that.setData({
      expri_1: true
    })
  },
  //上传身份证正面照
  upIDCard_1: function() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        console.log(res.tempFilePaths);
        var card_1 = res.tempFilePaths;
        that.setData({
          card_1,
          IDcardPhoto_1: false,
          IDcardBorder_1: true
        });
        var type_1 = "2";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: card_1[0],
          name: 'file',
          formData: {
            'type_1': type_1
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var trueCard_1 = obj.msg;
              that.setData({
                trueCard_1,
                isAlterCard_1: 1
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
  submit_1: function(e) {
    var that = this;

    var id = that.data.id_1;

    var headPortraitPath = that.data.trueImgUrl_1;
    var identityCardPath = that.data.trueCard_1;
    var credentialsPicPath = that.data.trueQuaPhoto_1;

    var designerName = e.detail.value.designerName_1;
    var telephone = e.detail.value.telephone_1;
    var receivingArea = e.detail.value.receivingArea_1.join("-");
    var credentialsName = e.detail.value.credentialsName_1;

    var experienceType = that.data.type_1.join("-");

    var experienceDesc = e.detail.value.experienceDesc_1;

    //判空
    if (headPortraitPath != "" ? true : false && identityCardPath != "" ? true : false && credentialsPicPath != "" ? true : false && designerName != "" ? true : false && telephone != "" ? true : false && credentialsName != "" ? true : false && experienceType != "" ? true : false && experienceDesc != "" ? true : false) {
      if (id != "" ? true : false) {
        var upheadImgUrl;
        var headimg = that.data.headimg;
        if (that.data.isAlterHead_1 == 1) { //修改头像了
          upheadImgUrl = headPortraitPath;
        } else if (that.data.isAlterHead_1 == 0) { //没修改头像
          upheadImgUrl = headimg;
        }

        var upcredImgUrl;
        var credentimg = that.data.credentimg_1;
        if (that.data.isAlterCred_1 == 1) { //修改资质证件了
          upcredImgUrl = credentialsPicPath;
        } else if (that.data.isAlterCred_1 == 0) { //没修改资质证件
          upcredImgUrl = credentimg;
        }

        var upcardImgUrl;
        var idcardimg = that.data.idcardimg_1;
        if (that.data.isAlterCard_1 == 1) { //修改身份证了
          upcardImgUrl = identityCardPath;
        } else if (that.data.isAlterCard_1 == 0) { //没修改身份证
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

            createTime: that.data.createTime_1,
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
              region_1: ['北京市', '北京市', '东城区'],

              add_1: false, //加号
              show_1: true, //头像
              expri_1: true, //经验类型
              IDcardBorder_1: false,
              IDcardPhoto_1: true, //身份证照片

              imgUrl_1: "", //头像路径
              quaPhoto_1: "../../img/addImg.png", //资质证件照片
              card_1: "", //身份证路径

              trueImgUrl_1: "", //返回的头像路径
              trueQuaPhoto_1: "", //返回的资质证件照片
              trueCard_1: "", //返回的身份证路径

              type_1: [], //存放经验类型

              headPortraitPath_1: "",
              identityCardPath_1: "",
              credentialsPicPath_1: "",
              designerName_1: "",
              telephone_1: "",
              receivingArea_1: "",
              credentialsName_1: "",
              experienceType_1: "",
              experienceDesc_1: "",

              createTime_1: "",
              headimg_1: "",
              idcardimg_1: "",
              credentimg_1: "",

              id_1: "",
              count_1: true
            })
            //清空经验类型
            for (var i = 0; i < that.data.expriType_1.length; i++) {
              var borderColor = "grey";
              var newColor = 'expriType_1[' + i + '].borderColor';
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
              region_1: ['北京市', '北京市', '东城区'],

              add_1: false, //加号
              show_1: true, //头像
              expri_1: true, //经验类型
              IDcardBorder_1: false,
              IDcardPhoto_1: true, //身份证照片

              imgUrl_1: "", //头像路径
              quaPhoto_1: "../../img/addImg.png", //资质证件照片
              card_1: "", //身份证路径

              trueImgUrl_1: "", //返回的头像路径
              trueQuaPhoto_1: "", //返回的资质证件照片
              trueCard_1: "", //返回的身份证路径


              type_1: [], //存放经验类型


              headPortraitPath_1: "",
              identityCardPath_1: "",
              credentialsPicPath_1: "",
              designerName_1: "",
              telephone_1: "",
              receivingArea_1: "",
              credentialsName_1: "",
              experienceType_1: "",
              experienceDesc_1: ""
            })
            //清空经验类型
            for (var i = 0; i < that.data.expriType_1.length; i++) {
              var borderColor = "grey";
              var newColor = 'expriType_1[' + i + '].borderColor';
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

  /*设备材料函数*/
  //产品类型
  bindPickerChange_2: function (e) {
    //console.log(e);
    var index = e.currentTarget.dataset.index;

    var that = this;
    var singleProductIndex = e.detail.value;

    var productIndex = "productIndex_2[" + index + "]";
    that.setData({
      [productIndex]: singleProductIndex
    })
    /*for (var i = 0; i < that.data.productIndex.length; i++) {
      console.log(that.data.productIndex[i])
    }*/
  },
  //公司地址
  getLocation_2: function (e) {
    //console.log(e)
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        //console.log(res.address)
        var pro;
        var city;
        var proIndex;
        var cityIndex;
        for (var i = 0; i < res.address.length; i++) {
          if (res.address[i] == "省") {
            proIndex = i;
            pro = res.address.substring(0, proIndex + 1);
            console.log(pro)
          } else if (res.address[i] == "区") {
            proIndex = i;
            pro = res.address.substring(0, proIndex + 1);
            console.log(pro)
          }
          if (res.address[i] == "市") {
            cityIndex = i;
            city = res.address.substring(proIndex + 1, cityIndex + 1);
            console.log(city)
          } else if (res.address[i] == "州") {
            cityIndex = i;
            city = res.address.substring(proIndex + 1, cityIndex + 1);
            console.log(city)
          }
        }
        //console.log(res.name);
        var index = e.currentTarget.dataset.index;
        var companyname = "companyName_2[" + index + "]";
        var area = "area_2[" + index + "]";
        var areaData = pro + "-" + city;
        that.setData({
          [companyname]: res.name,
          [area]: areaData
        })
        /*for (var i = 0; i < that.data.companyName.length; i++) {
          console.log(that.data.companyName[i])
        }*/
      },
      fail: function () { },
      complete: function () { }
    })
  },
  //产品规格多样
  click_2: function (e) {
    var that = this;
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var check = "check_2[" + index + "]";
    var single = "single_2[" + index + "]";
    var double = "double_2[" + index + "]";

    var price = "price_2[" + index + "]";
    var priceLower = "priceLower_2[" + index + "]";
    var priceUpper = "priceUpper_2[" + index + "]";

    if (e.detail.value == false) {
      that.setData({
        [check]: false,
        [single]: false,
        [double]: true,

        [priceLower]: "",
        [priceUpper]: ""
      })
    } else {
      that.setData({
        [check]: true,
        [single]: true,
        [double]: false,

        [price]: ""
      })
    }
    console.log(that.data.check)
  },
  //上传产品图片
  upProductImg_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var productImg = "productImg_2[" + index + "]";
    var trueProductImg = "trueProductImg_2[" + index + "]";

    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //console.log(res.tempFilePaths);
        var img = res.tempFilePaths;
        that.setData({
          [productImg]: img
        });
        var type_2 = "3";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: img[0],
          name: 'file',
          formData: {
            'type_2': type_2
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var img = obj.msg;
              that.setData({
                [trueProductImg]: img,
                isAlterProduct_2: 1
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
  //添加产品
  addProduct_2: function () {
    var that = this;
    that.setData({
      productSum: that.data.productSum_2 + 1
    })
    //加载产品价格默认
    var single = that.data.single_2;

    //加载产品价格距离默认
    var double = that.data.double_2;

    //加载seitch开关默认
    var check = that.data.check_2;

    //添加产品类型默认索引0
    var productIndex = that.data.productIndex_2;

    //加载默认图片
    var productImg = that.data.productImg_2;
    var len = that.data.productSum_2;

    //加载表单
    var produceName = that.data.produceName_2;
    var produceSpecs = that.data.produceSpecs_2;
    var price = that.data.price_2;
    var priceLower = that.data.priceLower_2;
    var priceUpper = that.data.priceUpper_2;
    var measureUnit = that.data.measureUnit_2;
    var produceDetail = that.data.produceDetail_2;

    for (var i = 0; i < len; i++) {
      if (i + 1 === len) {
        var single = 'single_2[' + i + ']';
        var double = 'double_2[' + i + ']';
        var check = 'check_2[' + i + ']';
        var productIndex = 'productIndex_2[' + i + ']'; //产品类型默认索引
        var productImg = 'productImg_2[' + i + ']'; //产品图片

        var produceName = 'produceName_2[' + i + ']';
        var produceSpecs = 'produceSpecs_2[' + i + ']';
        var price = 'price_2[' + i + ']';
        var priceLower = 'priceLower_2[' + i + ']';
        var priceUpper = 'priceUpper_2[' + i + ']';
        var measureUnit = 'measureUnit_2[' + i + ']';
        var produceDetail = 'produceDetail_2[' + i + ']';
        that.setData({
          [single]: false,
          [double]: true,
          [check]: false,
          [productIndex]: 0,
          [productImg]: "../../img/addImg.png",

          [produceName]: "",
          [produceSpecs]: "",
          [price]: "",
          [priceLower]: "",
          [priceUpper]: "",
          [produceDetail]: "",
        })
      }
    }
  },
  /*获取input输入框的内容*/
  //产品名称
  getProductName_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var produceName = "produceName_2[" + index + "]";
    that.setData({
      [produceName]: data
    })
    //console.log(that.data.produceName[0]);
  },
  //产品规格
  getproduceSpecs_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var produceSpecs = "produceSpecs_2[" + index + "]";
    that.setData({
      [produceSpecs]: data
    })
    //console.log(that.data.produceSpecs[0]);
  },
  //产品价格
  getprice_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var price = "price_2[" + index + "]";
    that.setData({
      [price]: data
    })
    //console.log(that.data.price[0]);
  },
  //产品最低价格
  getpriceLower_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var priceLower = "priceLower_2[" + index + "]";
    that.setData({
      [priceLower]: data
    })
    //console.log(that.data.priceLower[0]);
  },
  //产品最高价格
  getpriceUpper_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var priceUpper = "priceUpper_2[" + index + "]";
    that.setData({
      [priceUpper]: data
    })
    //console.log(that.data.priceUpper[0]);
  },
  //计量单位
  getmeasureUnit_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var measureUnit = "measureUnit_2[" + index + "]";
    that.setData({
      [measureUnit]: data
    })
    //console.log(that.data.measureUnit[0]);
  },
  //产品详情
  getproduceDetail_2: function (e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var produceDetail = "produceDetail_2[" + index + "]";
    that.setData({
      [produceDetail]: data
    })
    //console.log(that.data.produceDetail[0]);
  },
  //提交表单
  submit_2: function (e) {
    //console.log(e)
    var that = this;

    var id = that.data.id;

    var flag = 0;
    var productArray = that.data.productArray_2;
    for (var i = 0; i < that.data.productSum_2; i++) {
      flag = 0;
      //数组
      var producePicPath = that.data.trueProductImg_2[i];
      console.log(producePicPath)

      var productIndex = that.data.productIndex_2[i];
      console.log(productIndex)
      var produceType = that.data.procutType_2[productIndex];
      console.log(produceType)

      var companyAddress = that.data.companyName_2[i];
      console.log(companyAddress)

      var area = that.data.area_2[i];
      console.log(area)

      var isDiversity = [];
      if (that.data.check_2[i] == true) {
        isDiversity[i] = 1;
      } else {
        isDiversity[i] = 0;
      }

      //表单里的值
      var produceName = that.data.produceName_2[i];
      console.log(produceName)
      var produceSpecs = that.data.produceSpecs_2[i];
      console.log(produceSpecs)
      var price = that.data.price_2[i];
      console.log(price)
      var priceLower = that.data.priceLower_2[i];
      console.log(priceLower)
      var priceUpper = that.data.priceUpper_2[i];
      console.log(priceUpper)
      var measureUnit = that.data.measureUnit_2[i];
      console.log(measureUnit)
      var produceDetail = that.data.produceDetail_2[i];
      console.log(produceDetail)

      if (producePicPath != "" ? true : false && produceName != "" ? true : false && companyAddress != "" ? true : false && produceSpecs != "" ? true : false && (price != "" ? true : false || (priceLower != "" ? true : false && priceUpper != "" ? true : false && (priceLower < priceUpper))) && measureUnit != "" ? true : false && produceDetail != "" ? true : false) {
        if (typeof (producePicPath) != "undefined" && typeof (produceName) != "undefined" && typeof (companyAddress) != "undefined" && typeof (produceSpecs) != "undefined" && (typeof (price) != "undefined" || (typeof (priceLower) != "undefined" && typeof (priceUpper) != "undefined" && (typeofpriceLower < priceUpper))) && typeof (measureUnit) != "undefined" && typeof (produceDetail) != "undefined") {
          flag = 1;
        }
      }
    }
    if (flag == 1) {
      if (id != "" ? true : false) {
        var upProductImgUrl;
        var productimg = that.data.productimg_2;
        if (that.data.isAlterProduct_2 == 1) { //修改图片了
          upProductImgUrl = producePicPath;
        } else if (that.data.isAlterProduct_2 == 0) { //没修改图片
          upProductImgUrl = productimg;
        }
        wx.request({
          url: 'http://25y41l4404.wicp.vip/deviceMaterials/updateDeviceMaterials',
          data: {
            openId: "1",
            id: id,
            producePicPath: upProductImgUrl,
            produceName: produceName,
            produceType: produceType,
            companyAddress: companyAddress,
            area: area,
            produceSpecs: produceSpecs,
            isDiversity: isDiversity[0],
            price: price,
            priceLower: priceLower,
            priceUpper: priceUpper,
            measureUnit: measureUnit,
            produceDetail: produceDetail
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'PUT',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            console.log(res)
            if (res.data.code == 200) {
              console.log(res);
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
              })
              /*清空*/
              //加载产品价格默认
              var single = that.data.single_2;

              //加载产品价格距离默认
              var double = that.data.double_2;

              //加载switch开关默认
              var check = that.data.check_2;

              //加载产品类型默认索引0
              var productIndex = that.data.productIndex_2;

              //加载默认图片
              var productImg = that.data.productImg_2;
              var len = that.data.productSum_2;

              for (var k = 0; k < len; k++) {
                var single = 'single_2[' + k + ']';
                var double = 'double_2[' + k + ']';
                var check = 'check_2[' + k + ']';
                var productIndex = 'productIndex_2[' + k + ']';
                var productImg = 'productImg_2[' + k + ']';

                that.setData({
                  [single]: false,
                  [double]: true,
                  [check]: false,
                  [productIndex]: "0",
                  [productImg]: "../../img/addImg.png",
                })
              }
              that.setData({
                productSum_2: 1,
                productArray_2: [],

                trueProductImg_2: [],
                companyName_2: [],
                area_2: [],

                produceName_2: [],
                produceSpecs_2: [],
                price_2: [],
                priceLower_2: [],
                priceUpper_2: [],
                measureUnit_2: [],
                produceDetail_2: [],

                productimg_2: "",

                id_2: "",
                count_2: true
              })
            }
            flag = 0;
            //返回上一页
            wx.navigateBack({
              delta: 1
            })
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      } else {
        var product = {
          "openId": "1",
          "producePicPath": producePicPath,
          "produceName": produceName,
          "produceType": produceType,
          "companyAddress": companyAddress,
          "area": area,
          "produceSpecs": produceSpecs,
          "isDiversity": isDiversity[i],
          "price": price,
          "priceLower": priceLower,
          "priceUpper": priceUpper,
          "measureUnit": measureUnit,
          "produceDetail": produceDetail
        };
        productArray.push(product);
        wx.request({
          url: 'http://25y41l4404.wicp.vip/deviceMaterials/addDeviceMaterials',
          data: JSON.stringify(productArray),
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            console.log(res)
            if (res.data.code == 200) {
              console.log(res);
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
              })
              /*清空*/
              //加载产品价格默认
              var single = that.data.single_2;

              //加载产品价格距离默认
              var double = that.data.double_2;

              //加载switch开关默认
              var check = that.data.check_2;

              //加载产品类型默认索引0
              var productIndex = that.data.productIndex_2;

              //加载默认图片
              var productImg = that.data.productImg_2;
              var len = that.data.productSum_2;

              for (var k = 0; k < len; k++) {
                var single = 'single_2[' + k + ']';
                var double = 'double_2[' + k + ']';
                var check = 'check_2[' + k + ']';
                var productIndex = 'productIndex_2[' + k + ']';
                var productImg = 'productImg_2[' + k + ']';

                that.setData({
                  [single]: false,
                  [double]: true,
                  [check]: false,
                  [productIndex]: "0",
                  [productImg]: "../../img/addImg.png",
                })
              }
              that.setData({
                productSum_2: 1,
                productArray_2: [],

                trueProductImg_2: [],
                companyName_2: [],
                area_2: [],

                produceName_2: [],
                produceSpecs_2: [],
                price_2: [],
                priceLower_2: [],
                priceUpper_2: [],
                measureUnit_2: [],
                produceDetail_2: []
              })
            }
            flag = 0;
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    /*设备材料*/
    //加载产品价格默认
    var single = that.data.single_2;

    //加载产品价格距离默认
    var double = that.data.double_2;

    //加载seitch开关默认
    var check = that.data.check_2;

    //加载产品类型默认索引0
    var productIndex = that.data.productIndex_2;

    //加载默认图片
    var productImg = that.data.productImg_2;
    var len = that.data.productSum_2;

    //加载表单
    var produceName = that.data.produceName_2;
    var produceSpecs = that.data.produceSpecs_2;
    var price = that.data.price_2;
    var priceLower = that.data.priceLower_2;
    var priceUpper = that.data.priceUpper_2;
    var measureUnit = that.data.measureUnit_2;
    var produceDetail = that.data.produceDetail_2;

    for (var i = 0; i < len; i++) {
      var single = 'single_2[' + i + ']';
      var double = 'double_2[' + i + ']';
      var check = 'check_2[' + i + ']';
      var productIndex = 'productIndex_2[' + i + ']';
      var productImg = 'productImg_2[' + i + ']';

      var produceName = 'produceName_2[' + i + ']';
      var produceSpecs = 'produceSpecs_2[' + i + ']';
      var price = 'price_2[' + i + ']';
      var priceLower = 'priceLower_2[' + i + ']';
      var priceUpper = 'priceUpper_2[' + i + ']';
      var measureUnit = 'measureUnit_2[' + i + ']';
      var produceDetail = 'produceDetail_2[' + i + ']';

      that.setData({
        [single]: false,
        [double]: true,
        [check]: false,
        [productIndex]: "0",
        [productImg]: "../../img/addImg.png",

        [produceName]: "",
        [produceSpecs]: "",
        [price]: "",
        [priceLower]: "",
        [priceUpper]: "",
        [measureUnit]: "",
        [produceDetail]: ""
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