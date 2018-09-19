const m = require('mithril')
const Social = require('../components/Social')

module.exports = {
  oncreate () {
    drawRhombus()
  },

  view () {
    return [
      m('h1.text-center.title', 'Andrew Chou'),
      m('canvas#rhombus'),
      m(Social)
    ]
  }
}

function drawRhombus () {
  let canvas = document.getElementById('rhombus')
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d')
    ctx.lineWidth = 2

    // Figure out how to change the stroke color dynamically based on theme
    // ctx.strokeStyle = document.body.className === 'theme-light' ? 'x #363636' : '#f1f1f1'
    ctx.strokeStyle = '#919191'

    ctx.beginPath()
    ctx.moveTo(0, 140)
    ctx.lineTo(100, 15)
    ctx.lineTo(300, 15)
    ctx.lineTo(200, 140)
    ctx.lineTo(0, 140)
    ctx.closePath()
    ctx.stroke()
  }
}
