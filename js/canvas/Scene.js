export default (THREE) => {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x000000, 0.004)

  return scene
}
