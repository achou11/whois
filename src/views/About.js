import m from 'mithril'

const technologies = [
  'GraphQL',
  'Electron',
  'JavaScript/HTML/CSS (React + Emotion)',
  'Relay',
  'Ruby (on Rails)'
]

const About = {
  view () {
    return m('div', [
      m('h1.text-center.title', 'About'),
      m(
        'div',
        `My name is Andrew. I'm a software engineer and web enthusiast. Software fosters my curiosity and I'm confident in its ability to build socially-driven technology.

        I've focused most of my efforts on web development, primarily working in front-end. I'm also fascinated with geospatial and peer-to-peer (P2P) technologies and I would love to work in those domains some time in the future.`
      ),
      m('br'),
      m('div', `Programming languages and tech that I use right now:`),
      m('ul', technologies.map(tech => m('li', tech)))
    ])
  }
}

export default About
