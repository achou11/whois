const m = require('mithril')
const Social = require('../components/Social')


module.exports = {
    view() {
        return [
            m('h1.text-center.title', 'Andrew Chou'),
            m('div', 'Software Engineer'),
            m('img.pro-pic', {
                src: 'images/my-gopher-mini.png',
                alt: 'spirit gopher'
            }),
            m(Social)
        ]
    }
}
