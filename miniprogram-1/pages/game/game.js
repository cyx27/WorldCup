Page({
    data: {
      itemsA: [
        {name: '1', value: '卡塔尔'},
        {name: '2', value: '厄瓜多尔'},
        {name: '3', value: '塞内加尔'},
        {name: '4', value: '荷兰'}
      ],
      itemsB: [
        {name: '1', value: '英格兰'},
        {name: '2', value: '伊朗'},
        {name: '3', value: '美国'},
        {name: '4', value: '威尔士'}
      ],
      itemsC: [
        {name: '1', value: '阿根廷'},
        {name: '2', value: '沙特阿拉伯'},
        {name: '3', value: '墨西哥'},
        {name: '4', value: '波兰'}
      ],
      itemsD: [
        {name: '1', value: '法国'},
        {name: '2', value: '秘鲁'},
        {name: '3', value: '丹麦'},
        {name: '4', value: '突尼斯'}
      ],
      itemsE: [
        {name: '1', value: '西班牙'},
        {name: '2', value: '哥斯达黎加'},
        {name: '3', value: '德国'},
        {name: '4', value: '日本'}
      ],
      itemsF: [
        {name: '1', value: '比利时'},
        {name: '2', value: '加拿大'},
        {name: '3', value: '摩洛哥'},
        {name: '4', value: '克罗地亚'}
      ],
      itemsG: [
        {name: '1', value: '巴西'},
        {name: '2', value: '塞尔维亚'},
        {name: '3', value: '瑞士'},
        {name: '4', value: '喀麦隆'}
      ],
      itemsH: [
        {name: '1', value: '葡萄牙'},
        {name: '2', value: '加纳'},
        {name: '3', value: '乌拉圭'},
        {name: '4', value: '韩国'}
      ],
      chuxianA:[],
      chuxianB:[],
      chuxianC:[],
      chuxianD:[],
      chuxianE:[],
      chuxianF:[],
      chuxianG:[],
      chuxianH:[],
    },
    checkboxChangeA: function(e) {
      this.setData({
          chuxianA: e.detail.value
      })
    },
    checkboxChangeB: function(e) {
        this.setData({
            chuxianB: e.detail.value
        })
      },
      checkboxChangeC: function(e) {
        this.setData({
            chuxianC: e.detail.value
        })
      },
      checkboxChangeD: function(e) {
        this.setData({
            chuxianD: e.detail.value
        })
      },
      checkboxChangeE: function(e) {
        this.setData({
            chuxianE: e.detail.value
        })
      },
      checkboxChangeF: function(e) {
        this.setData({
            chuxianF: e.detail.value
        })
      },
      checkboxChangeG: function(e) {
        this.setData({
            chuxianG: e.detail.value
        })
      },
      checkboxChangeH: function(e) {
        this.setData({
            chuxianH: e.detail.value
        })
      },
    post: function(e) {
        let toPost="A="+this.data.chuxianA.join("")+"&B="+this.data.chuxianB.join("")+"&C="+this.data.chuxianC.join("")+"&D="+this.data.chuxianD.join("")+"&E="+this.data.chuxianE.join("")+"&F="+this.data.chuxianF.join("")+"&G="+this.data.chuxianG.join("")+"&H="+this.data.chuxianH.join("")
        console.log(toPost)
        wx.navigateTo({
          url: '/pages/guess/guess?'+toPost,
        })
    }
  })