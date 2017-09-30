function Interface () {
  this.findUsText = `You can find us in the light
  We know it's time
  You can lose what holds you back
  When you know that you can follow time
  When you know that you can follow time`

  this.runFastText = `You can run fast
  But tonight try holding you down
  Holding you down
  Show yourself in the light
  But the street is puoring right now, pouring right now
  In time`
}

Interface.prototype.init = function () {
  const lyricsText = document.querySelector('.overlay > .overlay__text')
  const findUsBtn = document.querySelector('.list__item.first')
  const runFastBtn = document.querySelector('.list__item.second')
  const container = document.querySelector('.container')
  const overlay = document.querySelector('.overlay')
  const lyrics = document.querySelector('.lyrics')

  findUsBtn.addEventListener('click', (e) => {
    lyricsText.innerText = this.findUsText

    if (!lyrics.classList.contains('lyrics--show')) {
      lyrics.classList.add('lyrics--show')
      lyrics.classList.remove('lyrics--hide')
    } else {
      overlay.classList.add('overlay--hide')
      overlay.classList.remove('overlay--show')
    }
  })

  runFastBtn.addEventListener('click', (e) => {
    lyricsText.innerText = this.runFastText

    if (!lyrics.classList.contains('lyrics--show')) {
      lyrics.classList.add('lyrics--show')
      lyrics.classList.remove('lyrics--hide')
    } else {
      overlay.classList.add('overlay--hide')
      overlay.classList.remove('overlay--show')
    }
  })

  lyrics.addEventListener('animationend', (e) => {
    if (e.animationName === 'lyrics-show') {
      overlay.classList.add('overlay--show')
    } else if (e.animationName === 'lyrics-hide') {
      overlay.classList.remove('overlay--show')
      overlay.classList.remove('overlay--hide')
      lyrics.classList.remove('lyrics--show')
      lyrics.classList.remove('lyrics--hide')
    }
  })

  overlay.addEventListener('animationend', (e) => {
    if (e.animationName === 'overlay-hide') {
      overlay.classList.add('overlay--show')
      lyrics.classList.add('lyrics--hide')
    }
  })

  document.body.addEventListener('click', (e) => {
    if (lyrics.classList.contains('lyrics--show') && e.target === container) {
      overlay.classList.add('overlay--hide')
    }
  })
}

export default new Interface()
