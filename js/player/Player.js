import Analyzer from './PlayerAnalyzer'

function Player (song, fftSize) {
  this.song = new window.Audio(song)
  this.isPlaying = false
  this.fftSize = fftSize
  this.playPauseBtn = document.querySelector('.player > .controls > .controls__play-pause')
  this.analyzer = new Analyzer(this.song)
}

Player.prototype.init = function () {
  this.song.volume = 0.6
  this.song.play()
  this.isPlaying = true

  if (this.isPlaying) {
    this.playPauseBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
  } else {
    this.playPauseBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
  }

  this.analyzer = new Analyzer(this.fftSize)
  this.analyzer.init()
  this.analyzer.connect(this.song)

  this.fftSize = this.analyzer.analyser.fftSize || this.fftSize

  this.setEvents()
  this.update()
}

Player.prototype.setEvents = function () {
  // PLAY AND PAUSE
  this.playPauseBtn.addEventListener('click', () => {
    this.isPlaying ? this.pause() : this.play()

    this.update()
  })

  this.song.addEventListener('ended', () => this.stop())
}

Player.prototype.update = function () {
  if (this.isPlaying) {
    this.playPauseBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
  } else {
    this.playPauseBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
  }
}

Player.prototype.play = function () {
  this.song.play()
  this.isPlaying = true
  this.update()
}

Player.prototype.pause = function () {
  this.song.pause()
  this.isPlaying = false
  this.update()
}

Player.prototype.stop = function () {
  this.pause()
  this.song.currentTime = 0
  this.isPlaying = false
  this.update()
}

Player.prototype.currentTime = function (time) {
  let ct = time
         ? this.song.currentTime = time
         : this.song.currentTime

  return ct
}

Player.prototype.frequencies = function () {
  return this.analyzer.getFrequencies()
}

Player.prototype.volume = function (vol) {
  let volume = vol
             ? this.song.volume = vol
             : this.song.volume

  return volume
}

export default Player
