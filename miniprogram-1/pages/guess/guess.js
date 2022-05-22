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
        huab: !1,
        tanc: !1,
    },
    qux: function() {
        "../../image/guo/0.jpg" != this.data.q1 && this.setData({
            tanc: !0
        });
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
                    ['q16[1]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PyAX4i0AAAJXV6GRFw977.png',
                });break;
            case "2":
                this.setData({
                    ['q16[1]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FSADy_DAAALaURezqo279.png',
                });break;
            case "3":
                this.setData({
                    ['q16[1]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2RKAS3NNAAAC2Nr8OzA389.png',
                });break;
            case "4":
                this.setData({
                    ['q16[1]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2N6AEWYMAAABPByVIVM465.png',
                });break;
        }
        switch(e.A[1]){
            case "1":
                this.setData({
                    ['q16[10]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PyAX4i0AAAJXV6GRFw977.png',
                });break;
            case "2":
                this.setData({
                    ['q16[10]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FSADy_DAAALaURezqo279.png',
                });break;
            case "3":
                this.setData({
                    ['q16[10]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2RKAS3NNAAAC2Nr8OzA389.png',
                });break;
            case "4":
                this.setData({
                    ['q16[10]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2N6AEWYMAAABPByVIVM465.png',
                });break;
        }
        switch(e.B[0]){
            case "1":
                this.setData({
                    ['q16[9]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/76/ChOxM1xC2G2Acp31AAABNMvdP0U855.png',
                });break;
            case "2":
                this.setData({
                    ['q16[9]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/78/ChOxM1xC2KGAIsqKAAAVUXXXPL0755.png',
                });break;
            case "3":
                this.setData({
                    ['q16[9]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2UmAAa6sAAAQEZEKYAA997.png',
                });break;
            case "4":
                this.setData({
                    ['q16[9]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2VGAYhOTAAAbZ1CFkQg735.png',
                });break;
        }
        switch(e.B[1]){
            case "1":
                this.setData({
                    ['q16[2]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/76/ChOxM1xC2G2Acp31AAABNMvdP0U855.png',
                });break;
            case "2":
                this.setData({
                    ['q16[2]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/78/ChOxM1xC2KGAIsqKAAAVUXXXPL0755.png',
                });break;
            case "3":
                this.setData({
                    ['q16[2]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2UmAAa6sAAAQEZEKYAA997.png',
                });break;
            case "4":
                this.setData({
                    ['q16[2]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2VGAYhOTAAAbZ1CFkQg735.png',
                });break;
        }
        switch(e.C[0]){
            case "1":
                this.setData({
                    ['q16[3]']: "https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2A-AI_uOAAAHB-5pMAU501.png"
                });break;
            case "2":
                this.setData({
                    ['q16[3]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2QmAWthoAAAKQAUuoQY168.png"
                });break;
            case "3":
                this.setData({
                    ['q16[3]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NOAIENZAAAIVenmXhE159.png'
                });break;
            case "4":
                this.setData({
                    ['q16[3]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PGALY-zAAAAqYWqc08697.png"
                });break;
        }
        switch(e.C[1]){
            case "1":
                this.setData({
                    ['q16[12]']: "https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2A-AI_uOAAAHB-5pMAU501.png"
                });break;
            case "2":
                this.setData({
                    ['q16[12]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7D/ChOxM1xC2QmAWthoAAAKQAUuoQY168.png"
                });break;
            case "3":
                this.setData({
                    ['q16[12]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NOAIENZAAAIVenmXhE159.png'
                });break;
            case "4":
                this.setData({
                    ['q16[12]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PGALY-zAAAAqYWqc08697.png"
                });break;
        }
        switch(e.D[0]){
            case "1":
                this.setData({
                    ['q16[11]']: "https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2IKANG6tAAABFW9OqCQ523.png"
                });break;
            case "2":
                this.setData({
                    ['q16[11]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2OyAMboLAAAE67UTWH4126.png"
                });break;
            case "3":
                this.setData({
                    ['q16[11]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FGAU4XgAAABUo4hnUQ558.png'
                });break;
            case "4":
                this.setData({
                    ['q16[11]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2T6AVxyuAAAF5xZKmyM136.png"
                });break;
        }
        switch(e.D[1]){
            case "1":
                this.setData({
                    ['q16[4]']: "https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2IKANG6tAAABFW9OqCQ523.png"
                });break;
            case "2":
                this.setData({
                    ['q16[4]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7B/ChOxM1xC2OyAMboLAAAE67UTWH4126.png"
                });break;
            case "3":
                this.setData({
                    ['q16[4]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/75/ChOxM1xC2FGAU4XgAAABUo4hnUQ558.png'
                });break;
            case "4":
                this.setData({
                    ['q16[4]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2T6AVxyuAAAF5xZKmyM136.png"
                });break;
        }
        switch(e.E[0]){
            case "1":
                this.setData({
                    ['q16[5]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2TCAWMemAAAJsy8Pgbg246.png"
                });break;
            case "2":
                this.setData({
                    ['q16[5]']: "https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EKAaFLCAAAGgA8WOkI815.png"
                });break;
            case "3":
                this.setData({
                    ['q16[5]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGAd79VAAAAyGVvoVQ975.png'
                });break;
            case "4":
                this.setData({
                    ['q16[5]']: "https://sd.qunliao.info/fastdfs3/M00/B5/79/ChOxM1xC2L6AHvC4AAAEdawnP9Q689.png"
                });break;
        }
        switch(e.E[1]){
            case "1":
                this.setData({
                    ['q16[14]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2TCAWMemAAAJsy8Pgbg246.png"
                });break;
            case "2":
                this.setData({
                    ['q16[14]']: "https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EKAaFLCAAAGgA8WOkI815.png"
                });break;
            case "3":
                this.setData({
                    ['q16[14]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGAd79VAAAAyGVvoVQ975.png'
                });break;
            case "4":
                this.setData({
                    ['q16[14]']: "https://sd.qunliao.info/fastdfs3/M00/B5/79/ChOxM1xC2L6AHvC4AAAEdawnP9Q689.png"
                });break;
        }
        switch(e.F[0]){
            case "1":
                this.setData({
                    ['q16[13]']: "https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2CKAJTG3AAAAypTh1A8948.png"
                });break;
            case "2":
                this.setData({
                    ['q16[13]']: "https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DSAay2bAAAF1Vkv5Qg286.png"
                });break;
            case "3":
                this.setData({
                    ['q16[13]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NWAZiM1AAADL6R9t6s156.png'
                });break;
            case "4":
                this.setData({
                    ['q16[13]']: "https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EOAbUHIAAAOg6JpgzM729.pngg"
                });break;
        }
        switch(e.F[1]){
            case "1":
                this.setData({
                    ['q16[6]']: "https://sd.qunliao.info/fastdfs3/M00/B5/72/ChOxM1xC2CKAJTG3AAAAypTh1A8948.png"
                });break;
            case "2":
                this.setData({
                    ['q16[6]']: "https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DSAay2bAAAF1Vkv5Qg286.png"
                });break;
            case "3":
                this.setData({
                    ['q16[6]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2NWAZiM1AAADL6R9t6s156.png'
                });break;
            case "4":
                this.setData({
                    ['q16[6]']: "https://sd.qunliao.info/fastdfs3/M00/B5/74/ChOxM1xC2EOAbUHIAAAOg6JpgzM729.pngg"
                });break;
        }
        switch(e.G[0]){
            case "1":
                this.setData({
                    ['q16[7]']: "https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DCAM4slAAAMODYb5Wo093.png"
                });break;
            case "2":
                this.setData({
                    ['q16[7]']: "https://sd.qunliao.info/fastdfs3/M00/B5/87/ChOxM1xC2iSAWoJLAAANi61d2EA772.png"
                });break;
            case "3":
                this.setData({
                    ['q16[7]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2TyANIAKAAABeUfO5gM520.png'
                });break;
            case "4":
                this.setData({
                    ['q16[7]']: "https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DOANFruAAAC0MdXvjY313.png"
                });break;
        }
        switch(e.G[1]){
            case "1":
                this.setData({
                    ['q16[16]']: "https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DCAM4slAAAMODYb5Wo093.png"
                });break;
            case "2":
                this.setData({
                    ['q16[16]']: "https://sd.qunliao.info/fastdfs3/M00/B5/87/ChOxM1xC2iSAWoJLAAANi61d2EA772.png"
                });break;
            case "3":
                this.setData({
                    ['q16[16]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/7F/ChOxM1xC2TyANIAKAAABeUfO5gM520.png'
                });break;
            case "4":
                this.setData({
                    ['q16[16]']: "https://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DOANFruAAAC0MdXvjY313.png"
                });break;
        }
        switch(e.H[0]){
            case "1":
                this.setData({
                    ['q16[15]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PuALvwRAAAK3F_koeE108.png"
                });break;
            case "2":
                this.setData({
                    ['q16[15]']: "https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGASs2QAAAEP6RcnSU543.png"
                });break;
            case "3":
                this.setData({
                    ['q16[15]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2UyAFIQpAAAJFbiniWQ532.png'
                });break;
            case "4":
                this.setData({
                    ['q16[15]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2MSAQaWAAAAL1VFSq5U098.png"
                });break;
        }
        switch(e.H[1]){
            case "1":
                this.setData({
                    ['q16[8]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7C/ChOxM1xC2PuALvwRAAAK3F_koeE108.png"
                });break;
            case "2":
                this.setData({
                    ['q16[8]']: "https://sd.qunliao.info/fastdfs3/M00/B5/77/ChOxM1xC2JGASs2QAAAEP6RcnSU543.png"
                });break;
            case "3":
                this.setData({
                    ['q16[8]']: 'https://sd.qunliao.info/fastdfs3/M00/B5/80/ChOxM1xC2UyAFIQpAAAJFbiniWQ532.png'
                });break;
            case "4":
                this.setData({
                    ['q16[8]']: "https://sd.qunliao.info/fastdfs3/M00/B5/7A/ChOxM1xC2MSAQaWAAAAL1VFSq5U098.png"
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