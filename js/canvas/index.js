import * as THREE from 'three'
import Scene from './Scene'
import Camera from './Camera'
import Renderer from './Renderer'
import buildSphere from './objects/sphere/sphere'
import buildSky from './objects/sky/sky'
import buildGrid from './objects/grid/buildGrid'
import gridAnimation from './objects/grid/gridAnimation'
import sphereAnimation from './objects/sphere/sphereAnimation'
import skyAnimation from './objects/sky/skyAnimation'
import Player from '../MusicPlayer'
/* global requestAnimationFrame */

function init (music) {
  let i = 1
  let particlesSpeed = 0.5
  const container = document.getElementById('world')

  const player = new Player(music, 128)
  const scene = Scene(THREE)
  const camera = Camera(THREE)
  const renderer = Renderer(THREE)
  const grid = buildGrid(THREE, player.fftSize)
  const sphere = buildSphere(THREE)
  const sky = buildSky(THREE)

  // Definindo a posição dos objetos
  sphere.position.z = -50
  grid.position.z = -250
  grid.position.y = -(window.innerHeight / 6)
  grid.position.x = -(window.innerWidth / 7.2)

  // Adicionando objetos à cena
  scene.add(grid)
  scene.add(sphere)
  scene.add(sky)

  // Inciando o player
  player.init()

  container.appendChild(renderer.domElement)
  window.addEventListener('resize', handleWindowResize, false)

  function handleWindowResize () {
    let h = window.innerHeight
    let w = window.innerWidth

    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }

  function animate () {
    requestAnimationFrame(animate)

    const freqZero = player.frequencies()[0]

    particlesSpeed = freqZero > 50 ? (freqZero / 255) * 2 : 0.2

    skyAnimation(THREE, sky, player, particlesSpeed)
    sphereAnimation(THREE, sphere, player, i)
    gridAnimation(THREE, grid, player)

    player.frequencies()[0] > 254 && i < 10000 ? i += 15 : i = 1

    renderer.clear()
    renderer.render(scene, camera)
  }

  animate()
}

export default { init }
