Page({
  data:{
    weeklyMovieList:[
      {
      name:"肖申克的救赎",
      comment:"一条漫长的自由之路、一次灵魂深处的洗涤、一部不朽的励志经典。",
      imagePath:"/images/2.jpg",
      isHighlyRecommended:true,
      id:1292052
    },
    {
      name: "教父",
      comment: "最精彩的剧本，最真实的黑帮电影。",
      imagePath: "/images/godfather.jpg",
      isHighlyRecommended: true,
      id: 1291841
    },
    {
      name: "泰坦尼克号",
      comment: "失去的才是永恒的。",
      imagePath: "/images/titanic.jpg",
      isHighlyRecommended: true,
      id: 1292722
    }
  ],

    count:0,
    score:98,
    currentIndex:0
  },
  onLoad: function(options){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  f0:function(event){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },


  f1:function(event){
    var movieId = event.currentTarget.dataset.movieId
    console.log(movieId);
    wx.navigateTo({
      
      url: '/pages/detail/detail?id=' + movieId,
    })
  },
  onShareAppMessage:function(){
    return{
      title:"每周推荐"
    }
  }
  
  
})