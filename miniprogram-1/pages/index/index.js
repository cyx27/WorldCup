// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    items: [1,2,3],
  },
  clickMe(){
    this.setData({motto: "hello world"})
  }
})