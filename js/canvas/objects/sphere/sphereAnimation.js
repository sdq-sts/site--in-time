export default (THREE, sphere, track, counter) => {
  let time = Date.now() * 0.0001
  let fData = track.frequencies()
  let newScale = 1 + Math.pow((fData[0] / 400), 4)

  sphere.position.x = Math.cos(counter) / 10
  sphere.position.y = Math.sin(-counter) / 10

  sphere.scale.set(newScale, newScale, newScale)

  sphere.rotation.y = time
}
