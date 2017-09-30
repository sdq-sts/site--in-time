export default (THREE, sky, track, speed) => {
  sky.position.z += speed

  if (sky.position.z > (4000 / 2) - 4000 * 0.05) {
    sky.position.z = -(4000 / 2) + 4000 * 0.05
  }
}
