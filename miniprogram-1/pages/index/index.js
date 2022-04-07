// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    player:[ ]
  },
  handletap(e){
    let that=this
    wx.cloud.callFunction({
      name: 'getData',
      success: res => {
        that.setData({
          player: res.result
        })
      }
    })
 }
})
