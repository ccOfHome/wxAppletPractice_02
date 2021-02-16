Page({
  /**
   * 页面的初始数据
   */
  data: {
    single: [], //产品价格
    double: [], //产品价格距离
    check: [], //switch开关

    procutType: ["氟系统材料", "水系统管道", "风系统材料", "保温材料", "电及自控系统设备材料", "水系统机房辅助设备", "水系统阀门管件", "空调主机末端设备", "施工工具", "设备材料人工大包"],
    productIndex: [], //产品类型索引

    productImg: [], //产品图片
    trueProductImg: [], //返回的产品图片

    companyName: [],
    area: [],

    productSum: 1, //产品个数

    //定义一个数组  存放多个产品
    productArray: [],

    produceName: [],
    produceSpecs: [],
    price: [],
    priceLower: [],
    priceUpper: [],
    measureUnit: [],
    produceDetail: [],

    productimg: "",

    id: "",
    count: true,
    btnName: ["发布", "保存"],

    //在修改页判断是否修改产品图片
    isAlterProduct: 0
  },
  //产品类型
  bindPickerChange: function(e) {
    //console.log(e);
    var index = e.currentTarget.dataset.index;

    var that = this;
    var singleProductIndex = e.detail.value;

    var productIndex = "productIndex[" + index + "]";
    that.setData({
      [productIndex]: singleProductIndex
    })
    /*for (var i = 0; i < that.data.productIndex.length; i++) {
      console.log(that.data.productIndex[i])
    }*/
  },
  //公司地址
  getLocation: function(e) {
    //console.log(e)
    var that = this;
    wx.chooseLocation({
      success: function(res) {
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
        var companyname = "companyName[" + index + "]";
        var area = "area[" + index + "]";
        var areaData = pro + "-" + city;
        that.setData({
          [companyname]: res.name,
          [area]: areaData
        })
        /*for (var i = 0; i < that.data.companyName.length; i++) {
          console.log(that.data.companyName[i])
        }*/
      },
      fail: function() {},
      complete: function() {}
    })
  },
  //产品规格多样
  click: function(e) {
    var that = this;
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var check = "check[" + index + "]";
    var single = "single[" + index + "]";
    var double = "double[" + index + "]";

    var price = "price[" + index + "]";
    var priceLower = "priceLower[" + index + "]";
    var priceUpper = "priceUpper[" + index + "]";

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
  upProductImg: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var productImg = "productImg[" + index + "]";
    var trueProductImg = "trueProductImg[" + index + "]";

    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        //console.log(res.tempFilePaths);
        var img = res.tempFilePaths;
        that.setData({
          [productImg]: img
        });
        var type = "3";
        wx.uploadFile({
          url: 'http://25y41l4404.wicp.vip/image/imageUpload',
          filePath: img[0],
          name: 'file',
          formData: {
            'type': type
          },
          success(res) {
            var obj = JSON.parse(res.data);
            if (obj.code == 200) {
              var img = obj.msg;
              that.setData({
                [trueProductImg]: img,
                isAlterProduct: 1
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
  addProduct: function() {
    var that = this;
    that.setData({
      productSum: that.data.productSum + 1
    })
    //加载产品价格默认
    var single = that.data.single;

    //加载产品价格距离默认
    var double = that.data.double;

    //加载seitch开关默认
    var check = that.data.check;

    //添加产品类型默认索引0
    var productIndex = that.data.productIndex;

    //加载默认图片
    var productImg = that.data.productImg;
    var len = that.data.productSum;

    //加载表单
    var produceName = that.data.produceName;
    var produceSpecs = that.data.produceSpecs;
    var price = that.data.price;
    var priceLower = that.data.priceLower;
    var priceUpper = that.data.priceUpper;
    var measureUnit = that.data.measureUnit;
    var produceDetail = that.data.produceDetail;

    for (var i = 0; i < len; i++) {
      if (i + 1 === len) {
        var single = 'single[' + i + ']';
        var double = 'double[' + i + ']';
        var check = 'check[' + i + ']';
        var productIndex = 'productIndex[' + i + ']'; //产品类型默认索引
        var productImg = 'productImg[' + i + ']'; //产品图片

        var produceName = 'produceName[' + i + ']';
        var produceSpecs = 'produceSpecs[' + i + ']';
        var price = 'price[' + i + ']';
        var priceLower = 'priceLower[' + i + ']';
        var priceUpper = 'priceUpper[' + i + ']';
        var measureUnit = 'measureUnit[' + i + ']';
        var produceDetail = 'produceDetail[' + i + ']';
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
  getProductName: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var produceName = "produceName[" + index + "]";
    that.setData({
      [produceName]: data
    })
    //console.log(that.data.produceName[0]);
  },
  //产品规格
  getproduceSpecs: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var produceSpecs = "produceSpecs[" + index + "]";
    that.setData({
      [produceSpecs]: data
    })
    //console.log(that.data.produceSpecs[0]);
  },
  //产品价格
  getprice: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var price = "price[" + index + "]";
    that.setData({
      [price]: data
    })
    //console.log(that.data.price[0]);
  },
  //产品最低价格
  getpriceLower: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var priceLower = "priceLower[" + index + "]";
    that.setData({
      [priceLower]: data
    })
    //console.log(that.data.priceLower[0]);
  },
  //产品最高价格
  getpriceUpper: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var priceUpper = "priceUpper[" + index + "]";
    that.setData({
      [priceUpper]: data
    })
    //console.log(that.data.priceUpper[0]);
  },
  //计量单位
  getmeasureUnit: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var measureUnit = "measureUnit[" + index + "]";
    that.setData({
      [measureUnit]: data
    })
    //console.log(that.data.measureUnit[0]);
  },
  //产品详情
  getproduceDetail: function(e) {
    //console.log(e)
    var index = e.currentTarget.dataset.index;
    var data = e.detail.value;
    var that = this;
    var produceDetail = "produceDetail[" + index + "]";
    that.setData({
      [produceDetail]: data
    })
    //console.log(that.data.produceDetail[0]);
  },
  //提交表单
  submit: function(e) {
    //console.log(e)
    var that = this;

    var id = that.data.id;

    var flag = 0;
    var productArray = that.data.productArray;
    for (var i = 0; i < that.data.productSum; i++) {
      flag = 0;
      //数组
      var producePicPath = that.data.trueProductImg[i];
      console.log(producePicPath)

      var productIndex = that.data.productIndex[i];
      console.log(productIndex)
      var produceType = that.data.procutType[productIndex];
      console.log(produceType)

      var companyAddress = that.data.companyName[i];
      console.log(companyAddress)

      var area = that.data.area[i];
      console.log(area)

      var isDiversity = [];
      if (that.data.check[i] == true) {
        isDiversity[i] = 1;
      } else {
        isDiversity[i] = 0;
      }

      //表单里的值
      var produceName = that.data.produceName[i];
      console.log(produceName)
      var produceSpecs = that.data.produceSpecs[i];
      console.log(produceSpecs)
      var price = that.data.price[i];
      console.log(price)
      var priceLower = that.data.priceLower[i];
      console.log(priceLower)
      var priceUpper = that.data.priceUpper[i];
      console.log(priceUpper)
      var measureUnit = that.data.measureUnit[i];
      console.log(measureUnit)
      var produceDetail = that.data.produceDetail[i];
      console.log(produceDetail)

      if (producePicPath != "" ? true : false && produceName != "" ? true : false && companyAddress != "" ? true : false && produceSpecs != "" ? true : false && (price != "" ? true : false || (priceLower != "" ? true : false && priceUpper != "" ? true : false && (priceLower < priceUpper))) && measureUnit != "" ? true : false && produceDetail != "" ? true : false) {
        if (typeof(producePicPath) != "undefined" && typeof(produceName) != "undefined" && typeof(companyAddress) != "undefined" && typeof(produceSpecs) != "undefined" && (typeof(price) != "undefined" || (typeof(priceLower) != "undefined" && typeof(priceUpper) != "undefined" && (typeofpriceLower < priceUpper))) && typeof(measureUnit) != "undefined" && typeof(produceDetail) != "undefined") {
          console.log("判空了")
          flag = 1;
        }
      }
    }
    if (flag == 1) {
      if (id != "" ? true : false) {
        console.log("bbbb")
        var upProductImgUrl;
        var productimg = that.data.productimg;
        if (that.data.isAlterProduct == 1) { //修改图片了
          upProductImgUrl = producePicPath;
        } else if (that.data.isAlterProduct == 0) { //没修改图片
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
          success: function(res) {
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
              var single = that.data.single;

              //加载产品价格距离默认
              var double = that.data.double;

              //加载switch开关默认
              var check = that.data.check;

              //加载产品类型默认索引0
              var productIndex = that.data.productIndex;

              //加载默认图片
              var productImg = that.data.productImg;
              var len = that.data.productSum;

              for (var k = 0; k < len; k++) {
                var single = 'single[' + k + ']';
                var double = 'double[' + k + ']';
                var check = 'check[' + k + ']';
                var productIndex = 'productIndex[' + k + ']';
                var productImg = 'productImg[' + k + ']';

                that.setData({
                  [single]: false,
                  [double]: true,
                  [check]: false,
                  [productIndex]: "0",
                  [productImg]: "../../img/addImg.png",
                })
              }
              that.setData({
                productSum: 1,
                productArray: [],

                trueProductImg: [],
                companyName: [],
                area: [],

                produceName: [],
                produceSpecs: [],
                price: [],
                priceLower: [],
                priceUpper: [],
                measureUnit: [],
                produceDetail: [],

                productimg: "",

                id: "",
                count: true
              })
            }
            flag = 0;
            //返回上一页
            wx.navigateBack({
              delta: 1
            })
          },
          fail: function(res) {},
          complete: function(res) {},
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
          success: function(res) {
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
              var single = that.data.single;

              //加载产品价格距离默认
              var double = that.data.double;

              //加载switch开关默认
              var check = that.data.check;

              //加载产品类型默认索引0
              var productIndex = that.data.productIndex;

              //加载默认图片
              var productImg = that.data.productImg;
              var len = that.data.productSum;

              for (var k = 0; k < len; k++) {
                var single = 'single[' + k + ']';
                var double = 'double[' + k + ']';
                var check = 'check[' + k + ']';
                var productIndex = 'productIndex[' + k + ']';
                var productImg = 'productImg[' + k + ']';

                that.setData({
                  [single]: false,
                  [double]: true,
                  [check]: false,
                  [productIndex]: "0",
                  [productImg]: "../../img/addImg.png",
                })
              }
              that.setData({
                productSum: 1,
                productArray: [],

                trueProductImg: [],
                companyName: [],
                area: [],

                produceName: [],
                produceSpecs: [],
                price: [],
                priceLower: [],
                priceUpper: [],
                measureUnit: [],
                produceDetail: []
              })
            }
            flag = 0;
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
      console.log(options);
      var id = options.data;
      wx.request({
        url: "http://25y41l4404.wicp.vip/deviceMaterials/getDeviceMaterialsByOpenIdAndId",
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
          var produceName = res.data.produceName;

          var producetype = res.data.produceType;
          var productIndex_0 = "productIndex[" + 0 + "]";
          for (var i = 0; i < that.data.procutType.length; i++) {
            if (that.data.procutType[i] == producetype) {
              console.log(i)
              that.setData({
                [productIndex_0]: i
              })
            }
          }

          var companyName = res.data.companyAddress;
          console.log(companyName)
          var area = res.data.area;

          var produceSpecs = res.data.produceSpecs;

          var check = res.data.isDiversity;
          console.log(check)
          var check_0 = "check[" + 0 + "]";
          var single_0 = "single[" + 0 + "]";
          var double_0 = "double[" + 0 + "]";
          if (check == 0) {
            that.setData({
              [check_0]: false,
              [single_0]: false,
              [double_0]: true
            })
          } else if (check == 1) {
            that.setData({
              [check_0]: true,
              [single_0]: true,
              [double_0]: false
            })
          }

          var price = res.data.price;
          var priceLower = res.data.priceLower;
          var priceUpper = res.data.priceUpper;
          var measureUnit = res.data.measureUnit;

          var producePicPath = res.data.producePicPath;
          var trueProducePicPath = "http://25y41l4404.wicp.vip/imgUpload/produce/" + producePicPath;
          //console.log(trueProducePicPath)

          var produceDetail = res.data.produceDetail;

          //变成数组第一个元素
          var produceName_0 = "produceName[" + 0 + "]";
          var companyName_0 = "companyName[" + 0 + "]";
          var area_0 = "area[" + 0 + "]";
          var produceSpecs_0 = "produceSpecs[" + 0 + "]";
          var price_0 = "price[" + 0 + "]";
          var priceLower_0 = "priceLower[" + 0 + "]";
          var priceUpper_0 = "priceUpper[" + 0 + "]";
          var measureUnit_0 = "measureUnit[" + 0 + "]";

          var productImg_0 = "productImg[" + 0 + "]";
          var trueProductImg_0 = "trueProductImg[" + 0 + "]";
          var produceDetail_0 = "produceDetail[" + 0 + "]";

          that.setData({
            [produceName_0]: produceName,
            [companyName_0]: companyName,
            [area_0]: area,
            [produceSpecs_0]: produceSpecs,
            [price_0]: price,
            [priceLower_0]: priceLower,
            [priceUpper_0]: priceUpper,
            [measureUnit_0]: measureUnit,
            [productImg_0]: trueProducePicPath,
            [trueProductImg_0]: trueProducePicPath,
            [produceDetail_0]: produceDetail,

            add: true, //加号
            show: false, //头像
            IDcardBorder: true,
            IDcardPhoto: false, //身份证照片

            productimg: producePicPath,

            isAlterProduct: 0,
            id: id,
            count: false
          })
        }
      })
    } else {
      //加载产品价格默认
      var single = that.data.single;

      //加载产品价格距离默认
      var double = that.data.double;

      //加载seitch开关默认
      var check = that.data.check;

      //加载产品类型默认索引0
      var productIndex = that.data.productIndex;

      //加载默认图片
      var productImg = that.data.productImg;
      var len = that.data.productSum;

      //加载表单
      var produceName = that.data.produceName;
      var produceSpecs = that.data.produceSpecs;
      var price = that.data.price;
      var priceLower = that.data.priceLower;
      var priceUpper = that.data.priceUpper;
      var measureUnit = that.data.measureUnit;
      var produceDetail = that.data.produceDetail;

      for (var i = 0; i < len; i++) {
        var single = 'single[' + i + ']';
        var double = 'double[' + i + ']';
        var check = 'check[' + i + ']';
        var productIndex = 'productIndex[' + i + ']';
        var productImg = 'productImg[' + i + ']';

        var produceName = 'produceName[' + i + ']';
        var produceSpecs = 'produceSpecs[' + i + ']';
        var price = 'price[' + i + ']';
        var priceLower = 'priceLower[' + i + ']';
        var priceUpper = 'priceUpper[' + i + ']';
        var measureUnit = 'measureUnit[' + i + ']';
        var produceDetail = 'produceDetail[' + i + ']';

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