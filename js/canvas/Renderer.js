export default (THREE) => {
  let width
  let height
  let renderer

  width = window.innerWidth   // largura da tela
  height = window.innerHeight // altura da tela

  // Cria o renderer
  renderer = new THREE.WebGLRenderer({
    // Permite transparência para que aceite a cor de background com CSS
    alpha: true,

    // Diminui o serrilhado
    antialias: true
  })

  // Define o tamanho do renderer, nesse caso vai tomar a tela inteira
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio
                        ? window.devicePixelRatio
                        : 1)

  // Ativa sombras
  renderer.shadowMap.enabled = true

  return renderer
}
