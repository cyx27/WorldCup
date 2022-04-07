// pages/team_info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "",
        baseUrl: "",
        swiperList: ["1.png","2.png","3.png"],
        currentId: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    ChangeHI(e){
        this.setData({
            currentId:e.detail.current
        });
    },
    onLoad: function (e) {
        this.setData({
            name: e.team_name,
            baseUrl: "/static/images/team_image/" + e.team_name + "/"
        });
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