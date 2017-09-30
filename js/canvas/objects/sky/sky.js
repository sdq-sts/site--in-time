export default (THREE) => {
  const starsGeometry = new THREE.Geometry()
  const depth = 4000

  for (let i = 0; i < 30000; i++) {
    const star = new THREE.Vector3()

    star.x = THREE.Math.randFloatSpread(window.innerWidth / 5)
    star.y = THREE.Math.randFloatSpread(window.innerHeight / 5)
    star.z = THREE.Math.randFloatSpread(depth)

    starsGeometry.vertices.push(star)
  }

  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.001,
    sizeAttenuation: false
  })

  const system = new THREE.Points(starsGeometry, starsMaterial)
  system.sortParticles = true

  return system
}
