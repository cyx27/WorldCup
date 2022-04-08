// index.js


// 获取应用实例
const app = getApp()

Page({
  data: {
    player:[ ],
    todoname:'卡塔尔'
  },
  handleinput(e){
    this.setData({
      todoname:e.detail.value
    })
  },
  handletap(e){
    let that = this;
    var url="http://150.158.20.204:8000";
    wx.request({
      url: url,
      data:{
       name:that.data.todoname
      },
      method:'get',
      header: {'Content-Type': 'application/json'},
      success: function(res) {
        console.log(res.data);
              that.setData({
                player:res.data
              })
         }
    })
 }
})
