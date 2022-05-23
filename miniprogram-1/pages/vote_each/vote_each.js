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
        let key = "comment"+this.data.id
        if(wx.getStorageSync(key)){
            this.setData({
                msgData: wx.getStorageSync(key)
            })
        }
        console.log(this.data)
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
        let allMsg = this.data.msgData
        let tempMsg = []
        tempMsg.push(this.data.inputVal)
        tempMsg.push(this.data.time)
        tempMsg.push(this.data.nickName)
        tempMsg.push(this.data.avatarUrl)
        tempMsg.push(0)
        allMsg.push(tempMsg)
        this.setData({
            msgData: allMsg,
            inputVal: "",
        })
        let key = "comment"+this.data.id
        wx.setStorageSync(key, this.data.msgData)
    },
    thumpUp(e) {
        let time = e.currentTarget.dataset.time
        let newMsgData = []
        for(let i=0;i<this.data.msgData.length;i++){
            if(this.data.msgData[i][1] == time){
                let temp = this.data.msgData[i]
                temp[4] += 1
                newMsgData.push(temp)
            }else{
                newMsgData.push(this.data.msgData[i])
            }
        }
        this.setData({
            msgData: newMsgData
        })
        let key = "comment"+this.data.id
        wx.setStorageSync(key, this.data.msgData)
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