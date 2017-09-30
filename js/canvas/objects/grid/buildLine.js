import pyramid from './pyramid'

export default (THREE) => {
  const line = new THREE.Object3D()
  const n = Math.floor(255 / 20)
  let i = 1

  const material = new THREE.LineBasicMaterial({ color: 0xD3D3D3, transparent: true, opacity: 0.3 })

  const geometry = new THREE.Geometry()
  geometry.vertices.push(
    new THREE.Vector3(0, -window.innerHeight / 2, 0),
    new THREE.Vector3(0, window.innerHeight / 2, 0)
  )

  const thinLine = new THREE.Line(geometry, material)
  line.add(thinLine)

  for (i; i <= n; i++) {
    let py = pyramid(THREE)
    py.position.y = (i * (window.innerHeight / 64)) + 35
    line.add(py)
  }

  return line
}
