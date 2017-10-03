function AudioAnalyzer (fftSize) {
  this.fftSize = fftSize
}

AudioAnalyzer.prototype.getFrequencies = function () {
  let dataArray = new Uint8Array(this.analyser.frequencyBinCount)
  this.analyser.getByteFrequencyData(dataArray)

  return dataArray
}

AudioAnalyzer.prototype.init = function (audio, fftSize) {
  this.context = new (window.AudioContext || window.webkitAudioContext)()
  this.analyser = this.context.createAnalyser()
  this.analyser.fftSize = this.fftSize || 64
}

AudioAnalyzer.prototype.connect = function (audio, fftSize) {
  this.audio = audio
  this.source = this.context.createMediaElementSource(audio)
  this.source.connect(this.analyser)
  this.analyser.connect(this.context.destination)
}

AudioAnalyzer.prototype.disconnect = function (audio, fftSize) {
  this.source.disconnect()
  this.analyser.disconnect()
}

export default AudioAnalyzer
