import m from 'mithril'
import Social from '../components/Social'

const drawRhombus = () => {
  const canvas = document.getElementById('rhombus')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
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

const Home = {
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

export default Home
