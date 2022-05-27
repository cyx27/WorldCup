// index.js

// 获取应用实例
const app = getApp()

Page({
  data: {
    res: !1,
    imageWidth: wx.getSystemInfo().windowWidth,
    imageHeight: wx.getSystemInfo().screenHeight,
    player:[ ],
    todoname:'卡塔尔',
    msgData:[],
    flagUrl:['https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PyAX4i0AAAJXV6GRFw977.png','https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FSADy_DAAALaURezqo279.png','https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2RKAS3NNAAAC2Nr8OzA389.png','https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2N6AEWYMAAABPByVIVM465.png','https://sd.qunliao.info/fastdfs3/M00/B5/76/ChOxM1xC2G2Acp31AAABNMvdP0U855.png','https://sd.qunliao.info/fastdfs3/M00/B5/78/ChOxM1xC2KGAIsqKAAAVUXXXPL0755.png','https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2UmAAa6sAAAQEZEKYAA997.png','https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2VGAYhOTAAAbZ1CFkQg735.png','https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2A-AI_uOAAAHB-5pMAU501.png','https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2QmAWthoAAAKQAUuoQY168.png','https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NOAIENZAAAIVenmXhE159.png','https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PGALY-zAAAAqYWqc08697.png','https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2IKANG6tAAABFW9OqCQ523.png','https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2OyAMboLAAAE67UTWH4126.png','https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FGAU4XgAAABUo4hnUQ558.png','https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2T6AVxyuAAAF5xZKmyM136.png','https://sd.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2TCAWMemAAAJsy8Pgbg246.png', 'https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EKAaFLCAAAGgA8WOkI815.png','https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGAd79VAAAAyGVvoVQ975.png','https://sd.qunliao.info/fastdfs3/M00/B5/79/ChOxM1xC2L6AHvC4AAAEdawnP9Q689.png','https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2CKAJTG3AAAAypTh1A8948.png','https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DSAay2bAAAF1Vkv5Qg286.png','https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NWAZiM1AAADL6R9t6s156.png','https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EOAbUHIAAAOg6JpgzM729.png','https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DCAM4slAAAMODYb5Wo093.png','https://sd.qunliao.info/fastdfs3/M00/B5/87/ChOxM1xC2iSAWoJLAAANi61d2EA772.png','https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2TyANIAKAAABeUfO5gM520.png','https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DOANFruAAAC0MdXvjY313.png','https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PuALvwRAAAK3F_koeE108.png','https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGASs2QAAAEP6RcnSU543.png','https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2UyAFIQpAAAJFbiniWQ532.png','https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2MSAQaWAAAAL1VFSq5U098.png']
  },
  handleinput(e){
    console.log(e);
    this.setData({
      todoname:e.detail.value
    })
  },
  handletap(e){
    let that = this;
    var url="https://segmenter.xyz:8000";
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
 },

  // onLoad(){
  //   let that = this;
  //   var url="https://segmenter.xyz:8000";
  //   wx.request({
  //       url: url+"/getcommentall",
  //       method:'get',
  //       header: {'Content-Type': 'application/json'},
  //       success: function(res) {
  //         console.log(res.data);
  //               that.setData({
  //                 msgData:that.shuffle(res.data,10)
  //               })
  //               for(var i=0;i<that.data.msgData.length;i++){
  //                 that.data.msgData[i].teamId = that.data.flagUrl[that.data.msgData[i].teamId-1]
  //               }
  //               console.log(that.data.msgData)
  //               that.setData({
  //                 msgData:that.data.msgData
  //               })
  //          }
  //     })
  // },

  onShow(){
    let that = this;
    var url="https://segmenter.xyz:8000";
    wx.request({
        url: url+"/getcommentall",
        method:'get',
        header: {'Content-Type': 'application/json'},
        success: function(res) {
          console.log(res.data);
                that.setData({
                  msgData:that.shuffle(res.data,10)
                })
                for(var i=0;i<that.data.msgData.length;i++){
                  that.data.msgData[i].teamId = that.data.flagUrl[that.data.msgData[i].teamId-1]
                }
                console.log(that.data.msgData)
                that.setData({
                  msgData:that.data.msgData
                })
           }
      })  
  },

shuffle(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
      temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
      if (temp_array.length > 0) {
        var arrIndex = Math.floor(Math.random() * temp_array.length);
        return_array[i] = temp_array[arrIndex];
        temp_array.splice(arrIndex, 1);
      } else {
        break;
      }
    }
    return return_array;
  },

 gotoindex(){
   wx.switchTab({
     url: '/pages/index/index',
   })
 },

 oneclick:function(){
     this.setData({
         res: !0
    })
 }
})
