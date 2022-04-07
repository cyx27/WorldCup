Page({
  data: {
    msg:"hello mina",
    num:0
  },
  handleinput(e){
    console.log(e);
    this.setData({
      num:Number(e.detail.value)
    })
  },
  handletap(e){
    const operation=e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num+Number(operation)
  })
  }
})
