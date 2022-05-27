Page({

  onLoad:function(){
    let that=this
    
    wx.showToast({
      title:'点击球队所在行,可以查看球队信息~',
      icon:'none',
      duration:3000
    })
  },

  data: {
    schedule:[],
    nowgroup:true,
    corrent:0,
    urls:[
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&app=dqd&version=0&platform=web",
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&round_id=11467&gameweek=2&app=dqd&platform=web&version=0",
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&round_id=11467&gameweek=3&app=dqd&platform=web&version=0",
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&round_id=11582&app=dqd&platform=web&version=0",
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&round_id=11584&app=dqd&platform=web&version=0",
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&round_id=11586&app=dqd&platform=web&version=0",
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&round_id=11587&app=dqd&platform=web&version=0",
      "https://www.dongqiudi.com/sport-data/soccer/biz/data/schedule?season_id=10346&round_id=11588&app=dqd&platform=web&version=0"
    ],
    groupA:[
      ['卡塔尔', 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PyAX4i0AAAJXV6GRFw977.png','1'],
      ['厄瓜多尔', 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FSADy_DAAALaURezqo279.png','2'],
      ['塞内加尔', 'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2RKAS3NNAAAC2Nr8OzA389.png','3'],
      ['荷兰', 'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2N6AEWYMAAABPByVIVM465.png','4']
    ],
    groupB:[
      ['英格兰', 'https://sd.qunliao.info/fastdfs3/M00/B5/76/ChOxM1xC2G2Acp31AAABNMvdP0U855.png','1'],
      ['伊朗', 'https://sd.qunliao.info/fastdfs3/M00/B5/78/ChOxM1xC2KGAIsqKAAAVUXXXPL0755.png','2'],
      ['美国', 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2UmAAa6sAAAQEZEKYAA997.png','3'],
      ['威尔士', 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2VGAYhOTAAAbZ1CFkQg735.png','4']
    ],
    groupC:[
      ['阿根廷', 'https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2A-AI_uOAAAHB-5pMAU501.png','1'],
      ['沙特阿拉伯', 'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2QmAWthoAAAKQAUuoQY168.png','2'],
      ['墨西哥', 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NOAIENZAAAIVenmXhE159.png','3'],
      ['波兰', 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PGALY-zAAAAqYWqc08697.png','4']
    ],
    groupD:[
      ['法国', 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2IKANG6tAAABFW9OqCQ523.png','1'],
      ['秘鲁', 'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2OyAMboLAAAE67UTWH4126.png','2'],
      ['丹麦', 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FGAU4XgAAABUo4hnUQ558.png','3'],
      ['突尼斯', 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2T6AVxyuAAAF5xZKmyM136.png',4]
    ],
    groupE:[
      ['西班牙', 'https://sd.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2TCAWMemAAAJsy8Pgbg246.png','1'],
      ['哥斯达黎加', 'https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EKAaFLCAAAGgA8WOkI815.png','2'],
      ['德国', 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGAd79VAAAAyGVvoVQ975.png','3'],
      ['日本', 'https://sd.qunliao.info/fastdfs3/M00/B5/79/ChOxM1xC2L6AHvC4AAAEdawnP9Q689.png','4']
    ],
    groupF:[
      ['比利时', 'https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2CKAJTG3AAAAypTh1A8948.png','1'],
      ['加拿大', 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DSAay2bAAAF1Vkv5Qg286.png','2'],
      ['摩洛哥', 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NWAZiM1AAADL6R9t6s156.png','3'],
      ['克罗地亚', 'https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EOAbUHIAAAOg6JpgzM729.png','4']
    ],
    groupG:[
      ['巴西', 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DCAM4slAAAMODYb5Wo093.png','1'],
      ['塞尔维亚', 'https://sd.qunliao.info/fastdfs3/M00/B5/87/ChOxM1xC2iSAWoJLAAANi61d2EA772.png','2'],
      ['瑞士', 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2TyANIAKAAABeUfO5gM520.png','3'],
      ['喀麦隆', 'https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DOANFruAAAC0MdXvjY313.png','4']
    ],
    groupH:[
      ['葡萄牙', 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PuALvwRAAAK3F_koeE108.png','1'],
      ['加纳', 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGASs2QAAAEP6RcnSU543.png','2'],
      ['乌拉圭', 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2UyAFIQpAAAJFbiniWQ532.png','3'],
      ['韩国', 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2MSAQaWAAAAL1VFSq5U098.png','4']
    ],
  },
  switchtoschedule:function(e){
    let that = this;

    this.setData({
      nowgroup:false,
      corrent:0
    }),

    wx.request({
      url: that.data.urls[that.data.corrent],
      data:{},
      success: function(res) {
        that.setData({
          schedule:res.data.content.matches
        });
        console.log(that.data.schedule);
      }
    })
  },
  switchtogroup:function(e){
    this.setData({
      nowgroup:true
    })
  },
  goahead:function(e){
    let that = this;
    const operation=e.currentTarget.dataset.operation;
    this.setData({
      corrent:that.data.corrent+Number(operation)
  }),
  wx.request({
    url: that.data.urls[that.data.corrent],
    data:{},
    success: function(res) {
      that.setData({
        schedule:res.data.content.matches
      });
      console.log(that.data.schedule);
    }
  })
  }
})