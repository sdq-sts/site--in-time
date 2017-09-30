import '../scss/main.scss'
import canvas from './canvas'
import menu from './interface'
import music from '../audio/DROELOE.mp3'

document.addEventListener('DOMContentLoaded', (event) => {
  let loadingCover = document.querySelector('.loading-cover')

  canvas.init(music)
  menu.init()

  loadingCover.classList.add('loading-cover--hide')
})
