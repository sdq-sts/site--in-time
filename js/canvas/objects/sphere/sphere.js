export default (THREE) => {
  const geometry = new THREE.SphereGeometry(8, 6, 6)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.3 })

  return new THREE.Mesh(geometry, material)
}
