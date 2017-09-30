export default (THREE) => {
  const fieldOfView = 48
  const width = window.innerWidth   // Largura da janela
  const height = window.innerHeight // Altura da janela
  const aspectRatio = width / height
  const nearPlane = 1
  const farPlane = 1000
  const camera = new THREE.PerspectiveCamera(fieldOfView,
                                             aspectRatio,
                                             nearPlane,
                                             farPlane)

  // Define a posição da câmera
  camera.position.x = 0
  camera.position.z = 1
  camera.position.y = 0
  camera.lookAt(new THREE.Vector3())

  return camera
}
