export default (THREE, size = 0.5) => {
  const geometry = new THREE.CylinderGeometry(0, size * 3, size * 5, 4)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })

  return new THREE.Mesh(geometry, material)
}
