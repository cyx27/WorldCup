Page({
    data: {
        zero: 0,
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
    //   console.log(e)
      let name = e.currentTarget.dataset.name
      for (let i = 0; i < this.data.itemsA.length; i++) {
        if (this.data.itemsA[i].name == name) {
            if(this.data.itemsA[i].checked){
                let j;
                for (j = 0; j <this.data.chuxianA.length;j++){
                    if(this.data.chuxianA[j] == name){
                        this.data.chuxianA.splice(j,1)
                    }
                }
                this.data.itemsA[i].checked = false;
                this.setData({
                    itemsA: this.data.itemsA,
                    chuxianA: this.data.chuxianA
                  })
            }
            else{
                if(this.data.chuxianA.length == 2){
                    wx.showModal({
                        title: "警告",
                        content: "最多选择两个",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm;
                        }
                      });
                }else{     
                    this.data.itemsA[i].checked = true;
                    this.setData({
                        itemsA: this.data.itemsA,
                        chuxianA: this.data.chuxianA.concat(name)
                    })
                }
            }
        }
      }
      console.log(this.data.chuxianA)
    },
    
    checkboxChangeB: function(e) {
        //   console.log(e)
          let name = e.currentTarget.dataset.name
          for (let i = 0; i < this.data.itemsB.length; i++) {
            if (this.data.itemsB[i].name == name) {
                if(this.data.itemsB[i].checked){
                    let j;
                    for (j = 0; j <this.data.chuxianB.length;j++){
                        if(this.data.chuxianB[j] == name){
                            this.data.chuxianB.splice(j,1)
                        }
                    }
                    this.data.itemsB[i].checked = false;
                    this.setData({
                        itemsB: this.data.itemsB,
                        chuxianB: this.data.chuxianB
                      })
                }
                else{
                    if(this.data.chuxianB.length == 2){
                        wx.showModal({
                            title: "警告",
                            content: "最多选择两个",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                          });
                    }else{     
                        this.data.itemsB[i].checked = true;
                        this.setData({
                            itemsB: this.data.itemsB,
                            chuxianB: this.data.chuxianB.concat(name)
                        })
                    }
                }
            }
          }
          console.log(this.data.chuxianB)
      },
      checkboxChangeC: function(e) {
        //   console.log(e)
          let name = e.currentTarget.dataset.name
          for (let i = 0; i < this.data.itemsC.length; i++) {
            if (this.data.itemsC[i].name == name) {
                if(this.data.itemsC[i].checked){
                    let j;
                    for (j = 0; j <this.data.chuxianC.length;j++){
                        if(this.data.chuxianC[j] == name){
                            this.data.chuxianC.splice(j,1)
                        }
                    }
                    this.data.itemsC[i].checked = false;
                    this.setData({
                        itemsC: this.data.itemsC,
                        chuxianC: this.data.chuxianC
                      })
                }
                else{
                    if(this.data.chuxianC.length == 2){
                        wx.showModal({
                            title: "警告",
                            content: "最多选择两个",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                          });
                    }else{     
                        this.data.itemsC[i].checked = true;
                        this.setData({
                            itemsC: this.data.itemsC,
                            chuxianC: this.data.chuxianC.concat(name)
                        })
                    }
                }
            }
          }
          console.log(this.data.chuxianC)
      },
      checkboxChangeD: function(e) {
        //   console.log(e)
          let name = e.currentTarget.dataset.name
          for (let i = 0; i < this.data.itemsD.length; i++) {
            if (this.data.itemsD[i].name == name) {
                if(this.data.itemsD[i].checked){
                    let j;
                    for (j = 0; j <this.data.chuxianD.length;j++){
                        if(this.data.chuxianD[j] == name){
                            this.data.chuxianD.splice(j,1)
                        }
                    }
                    this.data.itemsD[i].checked = false;
                    this.setData({
                        itemsD: this.data.itemsD,
                        chuxianD: this.data.chuxianD
                      })
                }
                else{
                    if(this.data.chuxianD.length == 2){
                        wx.showModal({
                            title: "警告",
                            content: "最多选择两个",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                          });
                    }else{     
                        this.data.itemsD[i].checked = true;
                        this.setData({
                            itemsD: this.data.itemsD,
                            chuxianD: this.data.chuxianD.concat(name)
                        })
                    }
                }
            }
          }
          console.log(this.data.chuxianD)
      },
      checkboxChangeE: function(e) {
        //   console.log(e)
          let name = e.currentTarget.dataset.name
          for (let i = 0; i < this.data.itemsE.length; i++) {
            if (this.data.itemsE[i].name == name) {
                if(this.data.itemsE[i].checked){
                    let j;
                    for (j = 0; j <this.data.chuxianE.length;j++){
                        if(this.data.chuxianE[j] == name){
                            this.data.chuxianE.splice(j,1)
                        }
                    }
                    this.data.itemsE[i].checked = false;
                    this.setData({
                        itemsE: this.data.itemsE,
                        chuxianE: this.data.chuxianE
                      })
                }
                else{
                    if(this.data.chuxianE.length == 2){
                        wx.showModal({
                            title: "警告",
                            content: "最多选择两个",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                          });
                    }else{     
                        this.data.itemsE[i].checked = true;
                        this.setData({
                            itemsE: this.data.itemsE,
                            chuxianE: this.data.chuxianE.concat(name)
                        })
                    }
                }
            }
          }
          console.log(this.data.chuxianE)
      },
      checkboxChangeF: function(e) {
        //   console.log(e)
          let name = e.currentTarget.dataset.name
          for (let i = 0; i < this.data.itemsF.length; i++) {
            if (this.data.itemsF[i].name == name) {
                if(this.data.itemsF[i].checked){
                    let j;
                    for (j = 0; j <this.data.chuxianF.length;j++){
                        if(this.data.chuxianF[j] == name){
                            this.data.chuxianF.splice(j,1)
                        }
                    }
                    this.data.itemsF[i].checked = false;
                    this.setData({
                        itemsF: this.data.itemsF,
                        chuxianF: this.data.chuxianF
                      })
                }
                else{
                    if(this.data.chuxianF.length == 2){
                        wx.showModal({
                            title: "警告",
                            content: "最多选择两个",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                          });
                    }else{     
                        this.data.itemsF[i].checked = true;
                        this.setData({
                            itemsF: this.data.itemsF,
                            chuxianF: this.data.chuxianF.concat(name)
                        })
                    }
                }
            }
          }
          console.log(this.data.chuxianF)
      },
      checkboxChangeG: function(e) {
        //   console.log(e)
          let name = e.currentTarget.dataset.name
          for (let i = 0; i < this.data.itemsG.length; i++) {
            if (this.data.itemsG[i].name == name) {
                if(this.data.itemsG[i].checked){
                    let j;
                    for (j = 0; j <this.data.chuxianG.length;j++){
                        if(this.data.chuxianG[j] == name){
                            this.data.chuxianG.splice(j,1)
                        }
                    }
                    this.data.itemsG[i].checked = false;
                    this.setData({
                        itemsG: this.data.itemsG,
                        chuxianG: this.data.chuxianG
                      })
                }
                else{
                    if(this.data.chuxianG.length == 2){
                        wx.showModal({
                            title: "警告",
                            content: "最多选择两个",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                          });
                    }else{     
                        this.data.itemsG[i].checked = true;
                        this.setData({
                            itemsG: this.data.itemsG,
                            chuxianG: this.data.chuxianG.concat(name)
                        })
                    }
                }
            }
          }
          console.log(this.data.chuxianG)
      },
      checkboxChangeH: function(e) {
        //   console.log(e)
          let name = e.currentTarget.dataset.name
          for (let i = 0; i < this.data.itemsH.length; i++) {
            if (this.data.itemsH[i].name == name) {
                if(this.data.itemsH[i].checked){
                    let j;
                    for (j = 0; j <this.data.chuxianH.length;j++){
                        if(this.data.chuxianH[j] == name){
                            this.data.chuxianH.splice(j,1)
                        }
                    }
                    this.data.itemsH[i].checked = false;
                    this.setData({
                        itemsH: this.data.itemsH,
                        chuxianH: this.data.chuxianH
                      })
                }
                else{
                    if(this.data.chuxianH.length == 2){
                        wx.showModal({
                            title: "警告",
                            content: "最多选择两个",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                          });
                    }else{     
                        this.data.itemsH[i].checked = true;
                        this.setData({
                            itemsH: this.data.itemsH,
                            chuxianH: this.data.chuxianH.concat(name)
                        })
                    }
                }
            }
          }
          console.log(this.data.chuxianH)
      },
    post: function(e) {
      if(this.data.chuxianA.length<2||this.data.chuxianB.length<2||this.data.chuxianC.length<2||this.data.chuxianD.length<2||this.data.chuxianE.length<2||this.data.chuxianF.length<2||this.data.chuxianG.length<2||this.data.chuxianH.length<2){
        wx.showModal({
          title: "提示",
          content: "请继续选择",
          showCancel: !1,
          success: function(t) {
              t.confirm;
          }
        });
      }else{
        let toPost="A="+this.data.chuxianA.join("")+"&B="+this.data.chuxianB.join("")+"&C="+this.data.chuxianC.join("")+"&D="+this.data.chuxianD.join("")+"&E="+this.data.chuxianE.join("")+"&F="+this.data.chuxianF.join("")+"&G="+this.data.chuxianG.join("")+"&H="+this.data.chuxianH.join("")
        wx.navigateTo({
          url: '/pages/guess/guess?'+toPost,
        })
    }
  }
  })