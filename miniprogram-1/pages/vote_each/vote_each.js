// pages/vote_each/vote_each.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num0: 0,
        num1: 1,
        num2: 2,
        num3: 3,
        num4: 4,
        id: 0,
        url: "",
        vote: 0,
        name: "",
        nickName: "",
        avatarUrl: "",
        time: "",
        inputVal: "",//留⾔框内的数据
        msgData: [],//所有留⾔数据:每条数据是一个数组，依次储存发表内容(0)、发表时间(1)、用户昵称(2)、用户头像(3)、点赞数(4)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(e) {
        let app = wx.getStorageSync('userInfo')
        this.setData({
            id: e.teamId,
            url: e.url,
            vote: e.vote,
            name: e.teamName,
            nickName: app.nickName,
            avatarUrl: app.avatarUrl,
        })
        let that = this;
        var url="http://150.158.20.204:8000";
        wx.request({
            url: url+"/getcomment",
            data:{
             name:that.data.id
            },
            method:'get',
            header: {'Content-Type': 'application/json'},
            success: function(res) {
              console.log(res.data);
                    that.setData({
                      msgData:res.data
                    })
                    console.log(that.data.msgData)     
               }
          })
        console.log(this.data)
        console.log(this.data.msgData)
    },
    getallcomment:function(e){
        let that = this;
        var url="http://150.158.20.204:8000";
        wx.request({
            url: url+"/getcomment",
            data:{
             name:that.data.id
            },
            method:'get',
            header: {'Content-Type': 'application/json'},
            success: function(res) {
              console.log(res.data);
                    that.setData({
                      msgData:res.data
                    })
               }
          })
    },
    changeInputVal(ev) {
        this.setData({
         inputVal: ev.detail.value//暂存输入框的内容
        });
    },
    addMsg() {
        let app = wx.getStorageSync('userInfo')
        this.setData({
            nickName: app.nickName,
            avatarUrl: app.avatarUrl,
        })
        let dataTime
        let yy = new Date().getFullYear()
        let mm = new Date().getMonth()+1
        let dd = new Date().getDate()
        let hh = new Date().getHours()
        let mf = new Date().getMinutes()<10?'0'+new Date().getMinutes():
            new Date().getMinutes()
        let ss = new Date().getSeconds()<10?'0'+new Date().getSeconds():
            new Date().getSeconds()
        dataTime = `${yy}-${mm}-${dd} ${hh}:${mf}:${ss}`
        console.log(dataTime)
        this.setData({
            time: dataTime,
        })//先设置时间
        let that = this;
        var url="http://150.158.20.204:8000";
        wx.request({
            url: url+"/comment",
            data:{
             teamId:that.data.id,
             content:that.data.inputVal,
             postTime:that.data.time,
             nickName:that.data.nickName,
             avatarUrl:that.data.avatarUrl,
            },
            method:'get',
            header: {'Content-Type': 'application/json'},
            success: function(res) {
                console.log('评论成功');
               }
          })
        this.getallcomment();
        this.setData({
            inputVal: "",
        })
    },
    thumpUp(e) {
        console.log(this.data.msgData)
        let time = e.currentTarget.dataset.time
        let that = this;
        var url="http://150.158.20.204:8000";
        wx.request({
            url: url+"/like",
            data:{
             teamId:that.data.id,
             time:time
            },
            method:'get',
            header: {'Content-Type': 'application/json'},
            success: function(res) {
                console.log('点赞成功');
               }
          })
        this.getallcomment();
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})