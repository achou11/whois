const m = require('mithril')
const Text = require('../../markdown/FAQs.md')


module.exports = {
    view() {
        return m('div', [
            m('h1.title', 'Not-So-FAQs'), 
            m.trust(Text)
        ])
    }
}