//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541155848068&di=79ecc124b5832b35ef09870a37e84186&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F5791e7dc997d9.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541155285955&di=e4d5a75fd6fad050b717d9c6af3b4636&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb999a9014c086e064a76b12f0f087bf40bd1cbfc.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541155285934&di=17414737d75c939e55f37cfb83519a55&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcdbf6c81800a19d8c7a695633efa828ba61e462a.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
    // 折叠view标题
    isFold:false,
    foldTitle:'这是一个折叠面板',
    foldContent:'折叠内容'
  },
  changeFold: function (e) {
    this.setData({
      isFold: !this.data.isFold
    });
  }
})
