Page({
  data: {
    isPlaying: false,
  },

  onReady() {
    this.audioContext = wx.createAudioContext('audioPlayer');
  },

  toggleAudio() {
    if (this.data.isPlaying) {
      this.audioContext.pause();
    } else {
      this.audioContext.play();
    }

    this.setData({
      isPlaying: !this.data.isPlaying
    });
  }
});
