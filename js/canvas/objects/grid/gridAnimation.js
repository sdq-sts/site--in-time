export default (THREE, grid, player) => {
  let time = Date.now() * 0.001
  let fData = player.frequencies()

  grid.children.map((el, i, arr) => {
    let value = Math.floor(fData[i] / 20)
    if (i <= 5 || i >= arr.length - 5) {
      el.visible = false
    }

    el.children[0].visible = true

    el.children.map((v, x) => {
      x !== 0 && x >= value ? v.visible = false : v.visible = true
    })

    el.rotation.y = time * 0.3
  })
}
