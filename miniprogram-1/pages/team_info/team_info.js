// pages/team_info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "",
        swiperList: [],
        currentId: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (e) {
        this.setData({
            name: e.team_name
        });
        switch(e.team_name){
            case "Qatar":
                this.setData({
                    swiperList: ["https://s2.loli.net/2022/04/07/HSqwdFvL9rDezBQ.jpg","https://s2.loli.net/2022/04/07/4EW8nK3oHujBIkU.jpg","https://s2.loli.net/2022/04/07/ItAnYSPBkF4MczW.jpg"]
                });break;
            case "Senegal":
                this.setData({
                    swiperList: ["https://s2.loli.net/2022/04/07/JxVO3EYQBmMTHWk.jpg","https://s2.loli.net/2022/04/07/d1S6nXgQ93wWRAG.jpg","https://s2.loli.net/2022/04/07/3LcwCrEgfUqyzBS.jpg"]
                });break;
            case "Ecuador":
                this.setData({
                    swiperList: ["https://s2.loli.net/2022/04/07/Wk62VRlz3i1JYjh.jpg","https://s2.loli.net/2022/04/07/NaH2iunMlk1drxY.jpg","https://s2.loli.net/2022/04/07/WUOvuAQzRVTohKi.jpg"]
                });break;
            case "Netherlands":
                this.setData({
                    swiperList: ["https://s2.loli.net/2022/04/07/OLgmB4fG8KAqeQh.jpg","https://s2.loli.net/2022/04/07/Dizxo29v3PbUFYt.jpg","https://s2.loli.net/2022/04/07/sp2Z1r3vcTGduoV.jpg"]
                });break;
        }
    },

    changeFun: function(e){
        this.setData({
            currentId: e.detail.current
        })
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