Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '东城区'],

    salary: ['2k-3k', '3k-4k', '4k-5k', '5k-6k', '6k-7k', '7k以上'],
    salaryIndex: "",
    salaryFlag: false,

    position: "",
    address: "",
    companyName: "",
    introduce: "",
    description: "",
    phone: "",

    id: "",
    count: true,
    btnName: ["发布", "保存"]
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
  //薪资待遇选择
  bindSalaryChange: function(e) {
    var that = this;
    //console.log(e);
    var salaryIndex = e.detail.value;
    that.setData({
      salaryIndex,
      salaryFlag: true
    })
  },
  //提交表单
  submit: function(e) {
    console.log(e);
    var that = this;
    var id = that.data.id;

    var jobName = e.detail.value.position;

    var pro = e.detail.value.region;
    var province = pro[0];
    var city = pro[1];

    var salaryIndex = that.data.salaryIndex;
    var salary = that.data.salary[salaryIndex];

    var jobAddress = e.detail.value.address;
    var companyName = e.detail.value.companyName;
    var companyDesc = e.detail.value.introduce;
    var jobDesc = e.detail.value.description;
    var telephone = e.detail.value.phone;

    //判空
    if (jobName != "" ? true : false && province != "" ? true : false && salaryIndex != "" ? true : false && jobAddress != "" ? true : false && companyName != "" ? true : false && companyDesc != "" ? true : false && jobDesc != "" ? true : false && telephone != "" ? true : false) {
      if (id != "" ? true : false) {
        wx.request({
          url: "http://25y41l4404.wicp.vip/recruit/updateRecruit",
          data: {
            "openId": "1",
            id,
            jobName,
            province,
            city,
            salary,
            jobAddress,
            companyName,
            companyDesc,
            jobDesc,
            telephone,
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'PUT',
          dataType: 'json',
          responseType: 'text',
          success: function(res) {
            //console.log(res);
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            //清空表单
            that.setData({
              region: ['北京市', '北京市', '东城区'],
              salaryIndex: "",
              salaryFlag: false,

              position: "",
              address: "",
              companyName: "",
              introduce: "",
              description: "",
              phone: "",

              id: "",
              count: true
            })

            //返回上一页
            wx.navigateBack({
              delta: 1
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      } else {
        console.log("发布")
        wx.request({
          url: "http://25y41l4404.wicp.vip/recruit/addRecruit",
          data: {
            "openId": "1",
            jobName,
            province,
            city,
            salary,
            jobAddress,
            companyName,
            companyDesc,
            jobDesc,
            telephone,
            createTime: new Date()
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function(res) {
            //console.log(res);
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            //清空表单
            that.setData({
              region: ['北京市', '北京市', '东城区'],
              salaryIndex: "",
              salaryFlag: false,

              position: "",
              address: "",
              companyName: "",
              introduce: "",
              description: "",
              phone: ""
            })
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
        url: "http://25y41l4404.wicp.vip/recruit/getRecruitByOpenIdAndId",
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
          //console.log(res);

          //获取到的数据
          var jobName = res.data.jobName;
          var province = res.data.province;
          var city = res.data.city;
          var salary = res.data.salary;
          var jobAddress = res.data.jobAddress;
          var companyName = res.data.companyName;
          var companyDesc = res.data.companyDesc;
          var jobDesc = res.data.jobDesc;
          var telephone = res.data.telephone;

          //赋值
          var regionArray = [];
          regionArray.push(province);
          regionArray.push(city);

          var salaryindex;
          for (var i = 0; i < that.data.salary.length; i++) {
            if (salary == that.data.salary[i]) {
              salaryindex = i;
            }
          }

          that.setData({
            position: jobName,

            region: regionArray,

            salaryIndex: salaryindex,
            salaryFlag: true,

            address: jobAddress,
            companyName: companyName,
            introduce: companyDesc,
            description: jobDesc,
            phone: telephone,

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