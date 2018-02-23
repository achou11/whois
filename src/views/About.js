const m = require('mithril')
const Text = require('../../markdown/About.md')


module.exports = {
    view() {
        return m('div', [
            m('h1.title', 'About'), 
            m.trust(Text)
        ])
    }
}