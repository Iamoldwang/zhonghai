// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: '../../images/icon.jpg',
    imgUrls: [{
      imgPath: '../../images/home/zh1.jpg',
      toPage: '/pages/worldCupMatch/worldCupMatch',
      title: '入户花园'
    }, {
        imgPath: '../../images/home/zh2.jpg',
      toPage: '/pages/worldCupPoint/worldCupPoint',
      title: '地下车库'
    }, {
        imgPath: '../../images/home/zh3.png',
      toPage: '/pages/worldCupPlayer/worldCupPlayer',
      title: '大门屏风'
    }, {
      imgPath: '../../images/home/zh4.jpg',
      toPage: '/pages/worldCupPlayer/worldCupPlayer',
      title: '楼栋一览'
    }],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    indicatorActiveColor: '#5ad239',
    circular: true,
    newList: {},
    currentPageNum: 1,
    loading: false,
    routers: [
      {
        name: '投诉',
        url: '/pages/Course/course',
        icon: '../../images/home/ts.png'
      },
      {
        name: '缴费',
        url: '/pages/Course/course',
        icon: '../../images/home/jf.png'
      },
      {
        name: '开门',
        url: '/pages/Course/course',
        icon: '../../images/home/km.png'
      },
      {
        name: '停车',
        url: '/pages/Course/course',
        icon: '../../images/home/tc.png'
      },
      {
        name: '视频',
        url: '/pages/Course/course',
        icon: '../../images/home/sp.png'
      },
      {
        name: '快递',
        url: '/pages/Course/course',
        icon: '../../images/home/kd.png'
      },
      {
        name: '投票',
        url: '/pages/Course/course',
        icon: '../../images/home/tp.png'
      },
      {
        name: '访客',
        url: '/pages/Course/course',
        icon: '../../images/home/fk.png'
      },
      {
        name: '公告',
        url: '/pages/Course/course',
        icon: '../../images/home/gg.png'
      }
    ]
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