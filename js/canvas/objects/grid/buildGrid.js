import buildLine from './buildLine'

export default (THREE, fftsize) => {
  let lines = new THREE.Object3D()
  let size = fftsize || 64
  let i = 1

  for (i; i <= (size / 2); i++) {
    let line = buildLine(THREE)
    line.position.x = i * (window.innerWidth / 240)
    lines.add(line)
  }

  lines.rotation.x = -(Math.PI / 180) * 25

  return lines
}
