const m = require('mithril')
const Nav = require('../components/Nav')


module.exports = {
    view(vnode) {
        return m('div.grid', [
            m(Nav),
            m('div.content-wrapper', m('div.content', vnode.children)),
            m('footer', m.trust('<span>Copyright &copy; 2018 Andrew Chou</span>'))
        ])
    }
}