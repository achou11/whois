const m = require('mithril')
const Nav = require('../components/Nav')
const Footer = require('../components/Footer')

module.exports = {
  view (vnode) {
    return m('div.grid', [
      m(Nav),
      m('div.content-wrapper', m('div.content', vnode.children)),
      m(Footer)
    ])
  }
}
