import m from 'mithril'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = {
  view (vnode) {
    return m('div.grid', [
      m(Nav),
      m('div.content-wrapper', m('div.content', vnode.children)),
      m(Footer)
    ])
  }
}

export default Layout
