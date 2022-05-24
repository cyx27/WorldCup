function t(t, a, i) {
    return a in t ? Object.defineProperty(t, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = i, t;
}

var a = getApp();

Page({
    data: {
        imageWidth: wx.getSystemInfoSync().windowWidth,
        imageHeight: wx.getSystemInfoSync().screenHeight,
        wid1: wx.getSystemInfoSync().screenHeight / 15 - wx.getSystemInfoSync().windowWidth,
        q16: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16" ],
        q8: [ "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg" ],
        q4: [ "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg" ],
        q2: [ "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg", "../../image/guo/0.jpg" ],
        q1: "../../image/guo/0.jpg",
        xcxurl: "",
        huab: !1,
        tanc: !1,
    },
    qux: function() {
        "../../image/guo/0.jpg" != this.data.q1 && this.setData({
            tanc: !0
        });
    },
    draw: function() {
        var t = this, i = t.data.imageWidth / 750, e = t.data.imageWidth, d = (t.data.imageHeight, 
        this.data.q16[1]), g = this.data.q16[2], s = this.data.q16[3], r = this.data.q16[4], h = this.data.q16[5], q = this.data.q16[6], n = this.data.q16[7], o = this.data.q16[8], m = this.data.q16[9], u = this.data.q16[10], w = this.data.q16[11], c = this.data.q16[12], f = this.data.q16[13], l = this.data.q16[14], I = this.data.q16[15], x = this.data.q16[16], p = this.data.q8[0], j = this.data.q8[1], D = this.data.q8[2], v = this.data.q8[3], T = this.data.q8[4], b = this.data.q8[5], y = this.data.q8[6], S = this.data.q8[7], F = this.data.q4[0], P = this.data.q4[1], W = this.data.q4[2], A = this.data.q4[3], H = this.data.q2[0], M = this.data.q2[1], C = this.data.q1, B = this.data.suiji, L = wx.createCanvasContext("canvas");
        L.drawImage("../../image/bag.jpg", 0, 0, e, 1320.2 * i), L.translate(750 * i, 750 * i), 
        L.rotate(90 * Math.PI / 180), L.translate(-663 * i, 20 * i), L.drawImage("../../image/bag1.png", 0, 0, 1125.2 * i, 686 * i), 
        L.drawImage("../../image/dali.png", 533 * i, 110 * i, 89 * i, 178 * i), L.setFontSize(40 * i), 
        L.drawImage(d, 10 * i, 10 * i, 99 * i, 66 * i), 
        L.drawImage(g, 10 * i, 100 * i, 99 * i, 66 * i), L.drawImage(s, 10 * i, 190 * i, 99 * i, 66 * i), 
        L.drawImage(r, 10 * i, 280 * i, 99 * i, 66 * i), L.drawImage(h, 10 * i, 370 * i, 99 * i, 66 * i), 
        L.drawImage(q, 10 * i, 460 * i, 99 * i, 66 * i), L.drawImage(n, 10 * i, 550 * i, 99 * i, 66 * i), 
        L.drawImage(o, 10 * i, 640 * i, 99 * i, 66 * i), L.drawImage(m, 1020 * i, 10 * i, 99 * i, 66 * i), 
        L.drawImage(u, 1020 * i, 100 * i, 99 * i, 66 * i), L.drawImage(w, 1020 * i, 190 * i, 99 * i, 66 * i), 
        L.drawImage(c, 1020 * i, 280 * i, 99 * i, 66 * i), L.drawImage(f, 1020 * i, 370 * i, 99 * i, 66 * i), 
        L.drawImage(l, 1020 * i, 460 * i, 99 * i, 66 * i), L.drawImage(I, 1020 * i, 550 * i, 99 * i, 66 * i), 
        L.drawImage(x, 1020 * i, 640 * i, 99 * i, 66 * i), L.drawImage(p, 180 * i, 55 * i, 99 * i, 66 * i), 
        L.drawImage(j, 180 * i, 235 * i, 99 * i, 66 * i), L.drawImage(D, 180 * i, 415 * i, 99 * i, 66 * i), 
        L.drawImage(v, 180 * i, 595 * i, 99 * i, 66 * i), L.drawImage(T, 860 * i, 55 * i, 99 * i, 66 * i), 
        L.drawImage(b, 860 * i, 235 * i, 99 * i, 66 * i), L.drawImage(y, 860 * i, 415 * i, 99 * i, 66 * i), 
        L.drawImage(S, 860 * i, 595 * i, 99 * i, 66 * i), L.drawImage(F, 340 * i, 145 * i, 99 * i, 66 * i), 
        L.drawImage(P, 340 * i, 505 * i, 99 * i, 66 * i), L.drawImage(W, 700 * i, 145 * i, 99 * i, 66 * i), 
        L.drawImage(A, 700 * i, 505 * i, 99 * i, 66 * i), L.drawImage(H, 360 * i, 320 * i, 99 * i, 66 * i), 
        L.drawImage(M, 680 * i, 320 * i, 99 * i, 66 * i), L.drawImage(C, 520 * i, 320 * i, 99 * i, 66 * i), 
        L.drawImage(this.data.xcxurl, 528 * i, 500 * i, 100 * i, 100 * i), L.draw();
    },
    save: function() {
        console.log(this.data)
        if (this.draw(), "0" == this.data.q1) wx.showToast({
            duration: 2e3,
            title: "请选择出你的冠军队伍"
        }); else {
            this.setData({
                huab: !0
            });
            var t = this;
            t.data.imageWidth;
            setTimeout(function() {
                wx.canvasToTempFilePath({
                    canvasId: "canvas",
                    x: 0,
                    y: 0,
                    width: t.data.imageWidth,
                    height: t.data.imageHeight,
                    success: function(t) {
                        wx.saveImageToPhotosAlbum({
                            filePath: t.tempFilePath,
                            success: function(t) {
                                wx.showToast({
                                    title: "已保存到相册"
                                });
                            },
                            fail: function() {
                                wx.hideLoading();
                            }
                        });
                    }
                });
            }, 1e3);
        }
    },
    butt: function(a) {
        if (1 == a.target.id || 2 == a.target.id) {
            i = "q8[0]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        if (3 == a.target.id || 4 == a.target.id) {
            i = "q8[1]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        if (5 == a.target.id || 6 == a.target.id) {
            i = "q8[2]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        if (7 == a.target.id || 8 == a.target.id) {
            i = "q8[3]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        if (9 == a.target.id || 10 == a.target.id) {
            i = "q8[4]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        if (11 == a.target.id || 12 == a.target.id) {
            i = "q8[5]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        if (13 == a.target.id || 14 == a.target.id) {
            i = "q8[6]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        if (15 == a.target.id || 16 == a.target.id) {
            var i = "q8[7]";
            this.setData(t({}, i, this.data.q16[a.target.id]));
        }
        console.log(this.data.q8), this.qux();
    },
    butt1: function(a) {
        if (11 == a.target.id || 12 == a.target.id) {
            i = "q4[0]";
            this.setData(t({}, i, this.data.q8[a.target.id - 11]));
        }
        if (13 == a.target.id || 14 == a.target.id) {
            i = "q4[1]";
            this.setData(t({}, i, this.data.q8[a.target.id - 11]));
        }
        if (15 == a.target.id || 16 == a.target.id) {
            i = "q4[2]";
            this.setData(t({}, i, this.data.q8[a.target.id - 11]));
        }
        if (17 == a.target.id || 18 == a.target.id) {
            var i = "q4[3]";
            this.setData(t({}, i, this.data.q8[a.target.id - 11]));
        }
        this.qux();
    },
    butt2: function(a) {
        if (21 == a.target.id || 22 == a.target.id) {
            i = "q2[0]";
            this.setData(t({}, i, this.data.q4[a.target.id - 21]));
        }
        if (23 == a.target.id || 24 == a.target.id) {
            var i = "q2[1]";
            this.setData(t({}, i, this.data.q4[a.target.id - 21]));
        }
        this.qux();
    },
    butt3: function(t) {
        this.setData({
            q1: this.data.q2[t.target.id - 31]
        }), this.qux();
    },
    onLoad: function(e) {
        console.log(e);
        switch(e.A[0]){
            case "1":
                this.setData({
                    ['q16[1]']: '../../image/guo/卡塔尔.png',
                });break;
            case "2":
                this.setData({
                    ['q16[1]']: '../../image/guo/厄瓜多尔.png',
                });break;
            case "3":
                this.setData({
                    ['q16[1]']: '../../image/guo/塞内加尔.png',
                });break;
            case "4":
                this.setData({
                    ['q16[1]']: '../../image/guo/荷兰',
                });break;
        }
        switch(e.A[1]){
            case "1":
                this.setData({
                    ['q16[10]']: '../../image/guo/卡塔尔.png',
                });break;
            case "2":
                this.setData({
                    ['q16[10]']: '../../image/guo/厄瓜多尔.png',
                });break;
            case "3":
                this.setData({
                    ['q16[10]']: '../../image/guo/喀麦隆.png',
                });break;
            case "4":
                this.setData({
                    ['q16[10]']: '../../image/guo/荷兰.png',
                });break;
        }
        switch(e.B[0]){
            case "1":
                this.setData({
                    ['q16[9]']: '../../image/guo/英格兰.png',
                });break;
            case "2":
                this.setData({
                    ['q16[9]']: '../../image/guo/伊朗.png',
                });break;
            case "3":
                this.setData({
                    ['q16[9]']: '../../image/guo/美国.png',
                });break;
            case "4":
                this.setData({
                    ['q16[9]']: '../../image/guo/威尔士.png',
                });break;
        }
        switch(e.B[1]){
            case "1":
                this.setData({
                    ['q16[2]']: '../../image/guo/英格兰.png',
                });break;
            case "2":
                this.setData({
                    ['q16[2]']: '../../image/guo/伊朗.png',
                });break;
            case "3":
                this.setData({
                    ['q16[2]']: '../../image/guo/美国.png',
                });break;
            case "4":
                this.setData({
                    ['q16[2]']: '../../image/guo/威尔士.png',
                });break;
        }
        switch(e.C[0]){
            case "1":
                this.setData({
                    ['q16[3]']: "../../image/guo/阿根廷.png"
                });break;
            case "2":
                this.setData({
                    ['q16[3]']: "../../image/guo/沙特阿拉伯.png"
                });break;
            case "3":
                this.setData({
                    ['q16[3]']: '../../image/guo/墨西哥.png'
                });break;
            case "4":
                this.setData({
                    ['q16[3]']: "../../image/guo/波兰.png"
                });break;
        }
        switch(e.C[1]){
            case "1":
                this.setData({
                    ['q16[12]']: "../../image/guo/阿根廷.png"
                });break;
            case "2":
                this.setData({
                    ['q16[12]']: "../../image/guo/沙特阿拉伯.png"
                });break;
            case "3":
                this.setData({
                    ['q16[12]']: '../../image/guo/墨西哥.png'
                });break;
            case "4":
                this.setData({
                    ['q16[12]']: "../../image/guo/波兰.png"
                });break;
        }
        switch(e.D[0]){
            case "1":
                this.setData({
                    ['q16[11]']: "../../image/guo/法国.png"
                });break;
            case "2":
                this.setData({
                    ['q16[11]']: "../../image/guo/秘鲁.png"
                });break;
            case "3":
                this.setData({
                    ['q16[11]']: '../../image/guo/丹麦.png'
                });break;
            case "4":
                this.setData({
                    ['q16[11]']: "../../image/guo/突尼斯.png"
                });break;
        }
        switch(e.D[1]){
            case "1":
                this.setData({
                    ['q16[4]']: "../../image/guo/法国.png"
                });break;
            case "2":
                this.setData({
                    ['q16[4]']: "../../image/guo/秘鲁.png"
                });break;
            case "3":
                this.setData({
                    ['q16[4]']: '../../image/guo/丹麦.png'
                });break;
            case "4":
                this.setData({
                    ['q16[4]']: "../../image/guo/突尼斯.png"
                });break;
        }
        switch(e.E[0]){
            case "1":
                this.setData({
                    ['q16[5]']: "../../image/guo/西班牙.png"
                });break;
            case "2":
                this.setData({
                    ['q16[5]']: "../../image/guo/哥斯达黎加.png"
                });break;
            case "3":
                this.setData({
                    ['q16[5]']: '../../image/guo/德国.png'
                });break;
            case "4":
                this.setData({
                    ['q16[5]']: "../../image/guo/日本.png"
                });break;
        }
        switch(e.E[1]){
            case "1":
                this.setData({
                    ['q16[14]']: "../../image/guo/西班牙.png"
                });break;
            case "2":
                this.setData({
                    ['q16[14]']: "../../image/guo/哥斯达黎加.png"
                });break;
            case "3":
                this.setData({
                    ['q16[14]']: '../../image/guo/德国.png'
                });break;
            case "4":
                this.setData({
                    ['q16[14]']: "../../image/guo/日本.png"
                });break;
        }
        switch(e.F[0]){
            case "1":
                this.setData({
                    ['q16[13]']: "../../image/guo/比利时.png"
                });break;
            case "2":
                this.setData({
                    ['q16[13]']: "../../image/guo/加拿大.png"
                });break;
            case "3":
                this.setData({
                    ['q16[13]']: '../../image/guo/摩洛哥.png'
                });break;
            case "4":
                this.setData({
                    ['q16[13]']: "../../image/guo/克罗地亚.png"
                });break;
        }
        switch(e.F[1]){
            case "1":
                this.setData({
                    ['q16[6]']: "../../image/guo/比利时.png"
                });break;
            case "2":
                this.setData({
                    ['q16[6]']: "../../image/guo/加拿大.png"
                });break;
            case "3":
                this.setData({
                    ['q16[6]']: '../../image/guo/摩洛哥.png'
                });break;
            case "4":
                this.setData({
                    ['q16[6]']: "../../image/guo/克罗地亚.png"
                });break;
        }
        switch(e.G[0]){
            case "1":
                this.setData({
                    ['q16[7]']: "../../image/guo/巴西.png"
                });break;
            case "2":
                this.setData({
                    ['q16[7]']: "../../image/guo/塞尔维亚.png"
                });break;
            case "3":
                this.setData({
                    ['q16[7]']: '../../image/guo/瑞士.png'
                });break;
            case "4":
                this.setData({
                    ['q16[7]']: "../../image/guo/喀麦隆.png"
                });break;
        }
        switch(e.G[1]){
            case "1":
                this.setData({
                    ['q16[16]']: "../../image/guo/巴西.png"
                });break;
            case "2":
                this.setData({
                    ['q16[16]']: "../../image/guo/塞尔维亚.png"
                });break;
            case "3":
                this.setData({
                    ['q16[16]']: '../../image/guo/瑞士.png'
                });break;
            case "4":
                this.setData({
                    ['q16[16]']: "../../image/guo/喀麦隆.png"
                });break;
        }
        switch(e.H[0]){
            case "1":
                this.setData({
                    ['q16[15]']: "../../image/guo/葡萄牙.png"
                });break;
            case "2":
                this.setData({
                    ['q16[15]']: "../../image/guo/加纳.png"
                });break;
            case "3":
                this.setData({
                    ['q16[15]']: '../../image/guo/乌拉圭.png'
                });break;
            case "4":
                this.setData({
                    ['q16[15]']: "../../image/guo/韩国.png"
                });break;
        }
        switch(e.H[1]){
            case "1":
                this.setData({
                    ['q16[8]']: "../../image/guo/葡萄牙.png"
                });break;
            case "2":
                this.setData({
                    ['q16[8]']: "../../image/guo/加纳.png"
                });break;
            case "3":
                this.setData({
                    ['q16[8]']: '../../image/guo/乌拉圭.png'
                });break;
            case "4":
                this.setData({
                    ['q16[8]']: "../../image/guo/韩国.png"
                });break;
        }
        var i;
        wx.showModal({
            title: "提示",
            content: "请翻转屏幕，点击国旗进行选择",
            showCancel: !1,
            success: function(t) {
                t.confirm;
            }
        });
        
    },
});