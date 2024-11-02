Page({
  data: {},

  onLoad() {
    console.log("Index page loaded");
  },

  // Navigation functions
  navigateToExpo1() {
    wx.navigateTo({
      url: '../expo1/expo1'
    });
  },

  navigateToExpo2() {
    wx.navigateTo({
      url: '../expo2/expo2'
    });
  }
});
