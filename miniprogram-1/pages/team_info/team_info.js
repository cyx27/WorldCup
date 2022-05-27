// pages/team_info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "",
        swiperLists: {
            "卡塔尔":["https://s2.loli.net/2022/04/07/HSqwdFvL9rDezBQ.jpg","https://s2.loli.net/2022/04/07/4EW8nK3oHujBIkU.jpg","https://s2.loli.net/2022/04/07/ItAnYSPBkF4MczW.jpg"],
            "厄瓜多尔":["https://s2.loli.net/2022/04/07/JxVO3EYQBmMTHWk.jpg","https://s2.loli.net/2022/04/07/d1S6nXgQ93wWRAG.jpg","https://s2.loli.net/2022/04/07/3LcwCrEgfUqyzBS.jpg"],
            "塞内加尔":["https://s2.loli.net/2022/04/07/Wk62VRlz3i1JYjh.jpg","https://s2.loli.net/2022/04/07/NaH2iunMlk1drxY.jpg","https://s2.loli.net/2022/04/07/WUOvuAQzRVTohKi.jpg"],
            "荷兰":["https://s2.loli.net/2022/04/07/OLgmB4fG8KAqeQh.jpg","https://s2.loli.net/2022/04/07/Dizxo29v3PbUFYt.jpg","https://s2.loli.net/2022/04/07/sp2Z1r3vcTGduoV.jpg"],
            "英格兰":["https://s2.loli.net/2022/05/23/coHg4GQTkXz5hvf.jpg","https://s2.loli.net/2022/05/23/7HraCiuTZtzb6f2.jpg","https://s2.loli.net/2022/05/23/y9x3PXtilsqWDAe.jpg"],
            "伊朗":["https://s2.loli.net/2022/05/23/mvh57tfHErnTs1o.jpg","https://s2.loli.net/2022/05/23/AagVPepsfbD5OMi.jpg","https://s2.loli.net/2022/05/23/d9xcRUCLbuZEXVF.png"],
            "美国":["https://s2.loli.net/2022/05/23/1qdEoXrBQhxn2Wi.jpg","https://s2.loli.net/2022/05/23/fyzMAXeEiH3IVTk.png","https://s2.loli.net/2022/05/23/KV625zEOU8JWtFu.png"],
            "威尔士":["https://s2.loli.net/2022/05/23/tl9v8e2MKPLoZUR.jpg","https://s2.loli.net/2022/05/23/d7s1FJXWrSKpIGU.jpg","https://s2.loli.net/2022/05/23/OQgV5iCyLFjzfZP.jpg"],
            "阿根廷":["https://s2.loli.net/2022/05/23/EfXrjdW2mUFJDbp.jpg","https://s2.loli.net/2022/05/23/T29nBAxdPMfSwr6.jpg","https://s2.loli.net/2022/05/23/eLpYOqkanvxgiN6.jpg"],
            "沙特阿拉伯":["https://s2.loli.net/2022/05/23/lZhwA9NJM8IrnKd.jpg","https://s2.loli.net/2022/05/23/KxY6hoynRB9Su5U.jpg","https://s2.loli.net/2022/05/23/8C2AGLyzgPOoHiE.jpg"],
            "墨西哥":["https://s2.loli.net/2022/05/23/FJfbQqn3GIicu6h.jpg","https://s2.loli.net/2022/05/23/dqxRsML5YluzWG8.jpg","https://s2.loli.net/2022/05/23/bhlMLa4tkmzs8X2.jpg"],
            "波兰":["https://s2.loli.net/2022/05/23/S1opG9vL7N8rRqJ.jpg","https://s2.loli.net/2022/05/23/8FbQ3AXmstTEWM1.jpg","https://s2.loli.net/2022/05/23/JeMYCsEt29imaSw.jpg"],
            "法国":["https://s2.loli.net/2022/05/23/ydD2opK5UqCSF84.jpg","https://s2.loli.net/2022/05/23/hFtXsTxwfdKkYoE.jpg","https://s2.loli.net/2022/05/23/S15VgmxXwWrvL3e.jpg"],
            "秘鲁":["https://s2.loli.net/2022/05/23/bwJpGHfXE5amMrA.jpg","https://s2.loli.net/2022/05/23/eyarjAtNlqJvXVo.jpg","https://s2.loli.net/2022/05/23/XEdqM2FZxNUa8eY.jpg"],
            "丹麦":["https://s2.loli.net/2022/05/23/nyQDpRHmUhcqaTt.jpg","https://s2.loli.net/2022/05/23/HpsVR12SGoblhEc.jpg","https://s2.loli.net/2022/05/23/u2xWk8PZaS7YcLp.jpg"],
            "突尼斯":["https://s2.loli.net/2022/05/23/9zLkpHN32wbRh6T.jpg","https://s2.loli.net/2022/05/23/NAvOqtjkauX1m34.jpg","https://s2.loli.net/2022/05/23/nJoAtex1a92QBbX.jpg"],
            "西班牙":["https://s2.loli.net/2022/05/23/Udkax1jDC2EcehQ.jpg","https://s2.loli.net/2022/05/23/FH3am4zEyOfrj6S.jpg","https://s2.loli.net/2022/05/23/sFV1ROp5CMP3UDi.jpg"],
            "哥斯达黎加":["https://s2.loli.net/2022/05/23/PU5fCvsrIVqBZiG.jpg","https://s2.loli.net/2022/05/23/t1Sw3Goh96EJCbe.jpg","https://s2.loli.net/2022/05/23/Cd5oEXfSpe8Hl43.jpg"],
            "德国":["https://s2.loli.net/2022/05/23/KSC6xrIYfmL7th3.jpg","https://s2.loli.net/2022/05/23/vVFmEZlYxTysMGp.jpg","https://s2.loli.net/2022/05/23/QH43z7uZl8mPt1E.jpg"],
            "日本":["https://s2.loli.net/2022/05/23/xurf51oqCZdiKP4.jpg","https://s2.loli.net/2022/05/23/5UlZYfmg7iCKTn8.jpg","https://s2.loli.net/2022/05/23/oSM2crpENAHbqBn.jpg"],
            "比利时":["https://s2.loli.net/2022/05/23/ZJ4hO7f3RygKCuS.jpg","https://s2.loli.net/2022/05/23/QF21tTdenGo7r4K.jpg","https://s2.loli.net/2022/05/23/JPzpuLeCgN2O6it.jpg"],
            "加拿大":["https://s2.loli.net/2022/05/23/POEC8I2Dy6ZJVvg.jpg","https://s2.loli.net/2022/05/23/IdGlZjtQrmVnf9P.jpg","https://s2.loli.net/2022/05/23/qMF1yfIYpAvxnKS.jpg"],
            "摩洛哥":["https://s2.loli.net/2022/05/23/TXrsbmfdkyJzHBU.jpg","https://s2.loli.net/2022/05/23/DfrqR2b5Mn4XIxN.jpg","https://s2.loli.net/2022/05/23/DgfFAqUSNC542yY.jpg"],
            "克罗地亚":["https://s2.loli.net/2022/05/23/ORUi1mx586b3QvY.jpg","https://s2.loli.net/2022/05/23/zxqsfXCVjRQkKHI.jpg","https://s2.loli.net/2022/05/23/a5UQfcxOMFhYRC1.jpg"],
            "巴西":["https://s2.loli.net/2022/05/23/pJLPUy2G7VszqAf.jpg","https://s2.loli.net/2022/05/23/WL1FEoxjR5nJQTb.jpg","https://s2.loli.net/2022/05/23/MZWagU7C1RQ3YjP.jpg"],
            "塞尔维亚":["https://s2.loli.net/2022/05/23/hP6SjZERbOq7sfG.png","https://s2.loli.net/2022/05/23/wMj4UhaSOLlR9VA.jpg","https://s2.loli.net/2022/05/23/JL1gQK4Ucfi9Vsv.jpg"],
            "瑞士":["https://s2.loli.net/2022/05/23/D7FLQo8nyH6TumK.jpg","https://s2.loli.net/2022/05/23/dGz7SJbIcpD4muQ.jpg","https://s2.loli.net/2022/05/23/pxQ8agVB2SjRACi.jpg"],
            "喀麦隆":["https://s2.loli.net/2022/05/23/sDFw6ApG71ImHiK.jpg","https://s2.loli.net/2022/05/23/eI8kNEHsQKPSbXp.jpg","https://s2.loli.net/2022/05/23/8yvu4QEIzLrAcY6.jpg"],
            "葡萄牙":["https://s2.loli.net/2022/05/23/Vmpj4UAylRkwZSW.jpg","https://s2.loli.net/2022/05/23/gE3kdU8BvSrp2Z4.jpg","https://s2.loli.net/2022/05/23/SouAMDrpsta5QVk.jpg"],
            "加纳":["https://s2.loli.net/2022/05/23/QURn6OjWVlAPBSc.jpg","https://s2.loli.net/2022/05/23/SvtmB6FKi2AqJkY.jpg","https://s2.loli.net/2022/05/23/rFqa4fyve63OHso.jpg"],
            "乌拉圭":["https://s2.loli.net/2022/05/23/P8UmRXM42wNQp1c.png","https://s2.loli.net/2022/05/23/yaCZMhmxnvKbHQk.jpg","https://s2.loli.net/2022/05/23/kbvedI4mf7UFOVK.jpg"],
            "韩国":["https://s2.loli.net/2022/05/23/SNAgVeMcORpLDYZ.jpg","https://s2.loli.net/2022/05/23/mKv5olTFL3pAj8C.jpg","https://s2.loli.net/2022/05/23/6LohP38IluTzgHk.jpg"]
        }, 
        flags:{
            '卡塔尔':'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PyAX4i0AAAJXV6GRFw977.png',
            '厄瓜多尔':'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FSADy_DAAALaURezqo279.png',
            '塞内加尔':'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2RKAS3NNAAAC2Nr8OzA389.png',
            '荷兰':'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2N6AEWYMAAABPByVIVM465.png',
            '英格兰': 'https://sd.qunliao.info/fastdfs3/M00/B5/76/ChOxM1xC2G2Acp31AAABNMvdP0U855.png',
            '伊朗': 'https://sd.qunliao.info/fastdfs3/M00/B5/78/ChOxM1xC2KGAIsqKAAAVUXXXPL0755.png',
            '美国':'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2UmAAa6sAAAQEZEKYAA997.png',
            '威尔士':'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2VGAYhOTAAAbZ1CFkQg735.png',
            '阿根廷': 'https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2A-AI_uOAAAHB-5pMAU501.png',
            '沙特阿拉伯': 'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2QmAWthoAAAKQAUuoQY168.png',
            '墨西哥': 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NOAIENZAAAIVenmXhE159.png',
            '波兰': 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PGALY-zAAAAqYWqc08697.png',
            '法国': 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2IKANG6tAAABFW9OqCQ523.png',
            '秘鲁': 'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2OyAMboLAAAE67UTWH4126.png',
            '丹麦': 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FGAU4XgAAABUo4hnUQ558.png',
            '突尼斯': 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2T6AVxyuAAAF5xZKmyM136.png',
            '西班牙': 'https://sd.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2TCAWMemAAAJsy8Pgbg246.png',
            '哥斯达黎加': 'https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EKAaFLCAAAGgA8WOkI815.png',
            '德国': 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGAd79VAAAAyGVvoVQ975.png',
            '日本': 'https://sd.qunliao.info/fastdfs3/M00/B5/79/ChOxM1xC2L6AHvC4AAAEdawnP9Q689.png',
            '比利时': 'https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2CKAJTG3AAAAypTh1A8948.png',
            '加拿大': 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DSAay2bAAAF1Vkv5Qg286.png',
            '摩洛哥': 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NWAZiM1AAADL6R9t6s156.png',
            '克罗地亚': 'https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EOAbUHIAAAOg6JpgzM729.png',
            '巴西': 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DCAM4slAAAMODYb5Wo093.png',
            '塞尔维亚': 'https://sd.qunliao.info/fastdfs3/M00/B5/87/ChOxM1xC2iSAWoJLAAANi61d2EA772.png',
            '瑞士': 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2TyANIAKAAABeUfO5gM520.png',
            '喀麦隆': 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DOANFruAAAC0MdXvjY313.png',
            '葡萄牙': 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PuALvwRAAAK3F_koeE108.png',
            '加纳': 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGASs2QAAAEP6RcnSU543.png',
            '乌拉圭': 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2UyAFIQpAAAJFbiniWQ532.png',
            '韩国': 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2MSAQaWAAAAL1VFSq5U098.png'
            },
        //剩余国家国旗待添加
        currentId: 0,
        swiperList:[],
        player:[],
        info:[]
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
        console.log(e)
        this.setData({
            name: e.team_name,
            swiperList:this.data.swiperLists[e.team_name]
        });
        let that = this;
        var url="https://segmenter.xyz:8000";
        wx.request({
              url: url+"/names",
              data:{
               name:that.data.name
              },
              method:'get',
              header: {'Content-Type': 'application/json'},
              success: function(res) {
                console.log(res.data);
                      that.setData({
                        player:res.data
                      })
                 }
            }),
        wx.request({
                url: url+"/info",
                data:{
                 name:that.data.name
                },
                method:'get',
                header: {'Content-Type': 'application/json'},
                success: function(res) {
                  
                        that.setData({
                          info:res.data
                        });
                        console.log(that.data.info);
                   }
              })
    },

    changeFun: function(e){
        this.setData({
            currentId: e.detail.current
        })
    },
    /**
     * 生命周期函数-监听页面初次渲染完成
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