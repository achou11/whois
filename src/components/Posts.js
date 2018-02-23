const m = require('mithril')
const text = require('../../markdown/About.md')


module.exports = {
    view() {
        return m('div.post', m.trust(text))
    }
}