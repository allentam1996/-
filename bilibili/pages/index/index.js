Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航栏数据接收
    navlist:[],

    //点击选中菜单栏下划线
    currentIndexNav:0,

    //轮播图数据接收
    swiperlist:[ ],

    //九宫格视频数据接收
    videolist:[ ]
  },

  //首页点击按钮
  activeNav(e){
    //简单DOM逻辑部分
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

//导航栏数据
  getnavlist(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navlist",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          // console.log(res)
          that.setData({
            navlist:res.data.data.navList//(大小写错误- -.)
          })
        }
      }
    })
  },

  //轮播图数据
  getswiperlist(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperlist",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            swiperlist:res.data.data.swiperList
          })      
        }
      }
    })
  },

 //九宫格视频数据
 getvideolist(){
  let that=this;
  wx.request({
    url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
    success(res){
      if(res.data.code===0){
        // console.log(res); 
         that.setData({
         videoslist:res.data.data.videosList
        })      
      }
    }
  })
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页导航数据
    this.getnavlist();
    //获取轮播图数据
    this.getswiperlist();
    //九宫格数据
    this.getvideolist();
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