const m = require('mithril')

module.exports = {
    view(vnode) {
        let Text
        
        if (vnode.attrs.title === 'About') {
            Text = require('../../markdown/About.md')
        } else if (vnode.attrs.title === 'Not-So-FAQs') {
            Text = require('../../markdown/FAQs.md')
        }

        return m('div', [
            m('h1.text-center', vnode.attrs.title), 
            m.trust(Text)
        ])
    }
}