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
      var items=this.data.itemsA, values=e.detail.value;
      for(var i=0,lenI=items.length;i<lenI;++i){
        items[i].checked = false;
        for(var j=0,lenJ=values.length;j<lenJ;++j){
          if(values.length>2){
            wx.showModal({
              title: "警告",
              content: "最多选择两个",
              showCancel: !1,
              success: function(t) {
                  t.confirm;
              }
            });
            values.shift(values[0]);
          }
          if(items[i].name==values[j]){
            items[i].checked=true;
            break
          }
        }
      }
      this.setData({
        itemsA: items,
        chuxianA: values
      })
    },
    
    checkboxChangeB: function(e) {
      var items=this.data.itemsB, values=e.detail.value;
      for(var i=0,lenI=items.length;i<lenI;++i){
        items[i].checked = false;
        for(var j=0,lenJ=values.length;j<lenJ;++j){
          if(values.length>2){
            wx.showModal({
              title: "警告",
              content: "最多选择两个",
              showCancel: !1,
              success: function(t) {
                  t.confirm;
              }
            });
            values.shift(values[0]);
          }
          if(items[i].name==values[j]){
            items[i].checked=true;
            break
          }
        }
      }
      this.setData({
        itemsB: items,
        chuxianB: values
      })
      },
      checkboxChangeC: function(e) {
        var items=this.data.itemsC, values=e.detail.value;
        for(var i=0,lenI=items.length;i<lenI;++i){
          items[i].checked = false;
          for(var j=0,lenJ=values.length;j<lenJ;++j){
            if(values.length>2){
              wx.showModal({
                title: "警告",
                content: "最多选择两个",
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
              });
              values.shift(values[0]);
            }
            if(items[i].name==values[j]){
              items[i].checked=true;
              break
            }
          }
        }
        this.setData({
          itemsC: items,
          chuxianC: values
        })
      },
      checkboxChangeD: function(e) {
        var items=this.data.itemsD, values=e.detail.value;
        for(var i=0,lenI=items.length;i<lenI;++i){
          items[i].checked = false;
          for(var j=0,lenJ=values.length;j<lenJ;++j){
            if(values.length>2){
              wx.showModal({
                title: "警告",
                content: "最多选择两个",
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
              });
              values.shift(values[0]);
            }
            if(items[i].name==values[j]){
              items[i].checked=true;
              break
            }
          }
        }
        this.setData({
          itemsD: items,
          chuxianD: values
        })
      },
      checkboxChangeE: function(e) {
        var items=this.data.itemsE, values=e.detail.value;
        for(var i=0,lenI=items.length;i<lenI;++i){
          items[i].checked = false;
          for(var j=0,lenJ=values.length;j<lenJ;++j){
            if(values.length>2){
              wx.showModal({
                title: "警告",
                content: "最多选择两个",
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
              });
              values.shift(values[0]);
            }
            if(items[i].name==values[j]){
              items[i].checked=true;
              break
            }
          }
        }
        this.setData({
          itemsE: items,
          chuxianE: values
        })
      },
      checkboxChangeF: function(e) {
        var items=this.data.itemsF, values=e.detail.value;
        for(var i=0,lenI=items.length;i<lenI;++i){
          items[i].checked = false;
          for(var j=0,lenJ=values.length;j<lenJ;++j){
            if(values.length>2){
              wx.showModal({
                title: "警告",
                content: "最多选择两个",
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
              });
              values.shift(values[0]);
            }
            if(items[i].name==values[j]){
              items[i].checked=true;
              break
            }
          }
        }
        this.setData({
          itemsF: items,
          chuxianF: values
        })
      },
      checkboxChangeG: function(e) {
        var items=this.data.itemsG, values=e.detail.value;
        for(var i=0,lenI=items.length;i<lenI;++i){
          items[i].checked = false;
          for(var j=0,lenJ=values.length;j<lenJ;++j){
            if(values.length>2){
              wx.showModal({
                title: "警告",
                content: "最多选择两个",
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
              });
              values.shift(values[0]);
            }
            if(items[i].name==values[j]){
              items[i].checked=true;
              break
            }
          }
        }
        this.setData({
          itemsG: items,
          chuxianG: values
        })
      },
      checkboxChangeH: function(e) {
        var items=this.data.itemsH, values=e.detail.value;
        for(var i=0,lenI=items.length;i<lenI;++i){
          items[i].checked = false;
          for(var j=0,lenJ=values.length;j<lenJ;++j){
            if(values.length>2){
              wx.showModal({
                title: "警告",
                content: "最多选择两个",
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
              });
              values.shift(values[0]);
            }
            if(items[i].name==values[j]){
              items[i].checked=true;
              break
            }
          }
        }
        this.setData({
          itemsH: items,
          chuxianH: values
        })
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
        console.log(toPost)
        wx.navigateTo({
          url: '/pages/guess/guess?'+toPost,
        })
    }
  }
  })