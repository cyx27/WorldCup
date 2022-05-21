// pages/votelist/votelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      q32: []
  },

  vote: function(e) {
    //   console.log(e)
    //   console.log(e.currentTarget.dataset.name)
    let name = e.currentTarget.dataset.name
    let vote = "vote" + name
      if(!wx.getStorageSync(vote)){
          wx.setStorageSync(vote, 1)
          this.setVote()
      }else{
          wx.setStorageSync(vote, wx.getStorageSync(vote)+1)
          this.setVote()
      }
  },

  setVote: function(){
      for(let i = 1; i <=32; i++){
          let vote = "vote" + i
          let t = i - 1
          if(wx.getStorageSync(vote)){
            this.setData({
                ["q32[" + t + "].vote"]: wx.getStorageSync(vote)
            })
          }else{
            this.setData({
                ["q32[" + t + "].vote"]: 0
            })
          }
      }
  },

  resetVote: function(){
      wx.clearStorage({
        success: (res) => {},
      })
        this.setVote()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          q32: [
            {name: '1', value: '卡塔尔', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PyAX4i0AAAJXV6GRFw977.png',vote: 0, comment:[]},
            {name: '2', value: '厄瓜多尔', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FSADy_DAAALaURezqo279.png',vote: 0, comment:[]},
            {name: '3', value: '塞内加尔', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2RKAS3NNAAAC2Nr8OzA389.png',vote: 0, comment:[]},
            {name: '4', value: '荷兰', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2N6AEWYMAAABPByVIVM465.png',vote: 0, comment:[]},
            {name: '5', value: '英格兰', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/76/ChOxM1xC2G2Acp31AAABNMvdP0U855.png',vote: 0, comment:[]},
            {name: '6', value: '伊朗', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/78/ChOxM1xC2KGAIsqKAAAVUXXXPL0755.png',vote: 0, comment:[]},
            {name: '7', value: '美国', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2UmAAa6sAAAQEZEKYAA997.png',vote: 0, comment:[]},
            {name: '8', value: '威尔士', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2VGAYhOTAAAbZ1CFkQg735.png',vote: 0, comment:[]},
            {name: '9', value: '阿根廷', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2A-AI_uOAAAHB-5pMAU501.png',vote: 0, comment:[]},
            {name: '10', value: '沙特阿拉伯', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2QmAWthoAAAKQAUuoQY168.png',vote: 0, comment:[]},
            {name: '11', value: '墨西哥', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NOAIENZAAAIVenmXhE159.png',vote: 0, comment:[]},
            {name: '12', value: '波兰', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PGALY-zAAAAqYWqc08697.png',vote: 0, comment:[]},
            {name: '13', value: '法国', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2IKANG6tAAABFW9OqCQ523.png',vote: 0, comment:[]},
            {name: '14', value: '秘鲁', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2OyAMboLAAAE67UTWH4126.png',vote: 0, comment:[]},
            {name: '15', value: '丹麦', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FGAU4XgAAABUo4hnUQ558.png',vote: 0, comment:[]},
            {name: '16', value: '突尼斯', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2T6AVxyuAAAF5xZKmyM136.png',vote: 0, comment:[]},
            {name: '17', value: '西班牙', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2TCAWMemAAAJsy8Pgbg246.png',vote: 0, comment:[]},
            {name: '18', value: '哥斯达黎加',url: 'https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EKAaFLCAAAGgA8WOkI815.png',vote: 0, comment:[]},
            {name: '19', value: '德国', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGAd79VAAAAyGVvoVQ975.png',vote: 0, comment:[]},
            {name: '20', value: '日本', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/79/ChOxM1xC2L6AHvC4AAAEdawnP9Q689.png',vote: 0, comment:[]},
            {name: '21', value: '比利时', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2CKAJTG3AAAAypTh1A8948.png',vote: 0, comment:[]},
            {name: '22', value: '加拿大', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DSAay2bAAAF1Vkv5Qg286.png',vote: 0, comment:[]},
            {name: '23', value: '摩洛哥', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NWAZiM1AAADL6R9t6s156.png',vote: 0, comment:[]},
            {name: '24', value: '克罗地亚', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EOAbUHIAAAOg6JpgzM729.png',vote: 0, comment:[]},
            {name: '25', value: '巴西', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DCAM4slAAAMODYb5Wo093.png',vote: 0, comment:[]},
            {name: '26', value: '塞尔维亚', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/87/ChOxM1xC2iSAWoJLAAANi61d2EA772.png',vote: 0, comment:[]},
            {name: '27', value: '瑞士', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2TyANIAKAAABeUfO5gM520.png',vote: 0, comment:[]},
            {name: '28', value: '喀麦隆', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DOANFruAAAC0MdXvjY313.png',vote: 0, comment:[]},
            {name: '29', value: '葡萄牙', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PuALvwRAAAK3F_koeE108.png',vote: 0, comment:[]},
            {name: '30', value: '加纳', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGASs2QAAAEP6RcnSU543.png',vote: 0, comment:[]},
            {name: '31', value: '乌拉圭', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2UyAFIQpAAAJFbiniWQ532.png',vote: 0, comment:[]},
            {name: '32', value: '韩国', url: 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2MSAQaWAAAAL1VFSq5U098.png',vote: 0, comment:[]}]
      })
      this.setVote();
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