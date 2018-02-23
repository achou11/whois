const m = require('mithril')
const Social = require('../components/Social')


module.exports = {
    view() {
        return [
            m('img.pro-pic', { src: 'images/my-gopher.png' }),
            m('br'),
            m('h1.title', 'Andrew Chou'),
            m('div', 'Software Developer'),
            m('br'),
            m(Social)
        ]
    }
}