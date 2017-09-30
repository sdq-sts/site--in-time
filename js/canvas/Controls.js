// import OrbitControlsFn from 'three-orbit-controls'

export default (THREE, camera, rendererDOM) => {
  const OrbitControls = OrbitControlsFn(THREE)
  const controls = new OrbitControls(camera, rendererDOM)

  controls.minPolarAngle = Math.PI * 0.5
  controls.maxPolarAngle = Math.PI * 0.5
  controls.enableZoom = false
  controls.rotateSpeed = 0.25

  return controls
}
