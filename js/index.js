import '../scss/main.scss'
import Canvas from './Canvas'
import Menu from './Interface'
import music from '../audio/DROELOE.mp3'

window.addEventListener('load', (e) => {
  let loadingCover = document.querySelector('.loading-cover')

  Canvas.init(music)
  Menu.init()

  loadingCover.classList.add('loading-cover--hide')
})
