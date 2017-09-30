// import StatsJS from 'stats-js'

function Stats (StatsJS) {
  const stats = new StatsJS()
  stats.setMode(0) /* 0 => fps, 1 => ms */

  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'

  document.body.appendChild(stats.domElement)

  return stats
}

export default Stats(StatsJS)
