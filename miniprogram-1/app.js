// app.js
App({
  onLaunch() {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init({
      env:"cloud1-3gs56q7cf6a19e63",
      traceUser:"true"
    })
  },
  globalData: {
    userInfo: null
  }
})
