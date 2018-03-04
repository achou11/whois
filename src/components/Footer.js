const m = require('mithril')

module.exports = {
    view() {
        return m('footer', [
            m.trust('<span>Copyright &copy; 2018 Andrew Chou</span>'),
            m('span', [
                'Built with ',
                m('a[href="https://mithril.js.org"]', { target: '_blank', rel: 'noopener' }, 'Mithril'),
                ', ',
                m('a[href="https://feathericons.com"]', { target: '_blank', rel: 'noopener' }, 'Feather Icons'),
                ', and ',
                m('a[href="http://leafletjs.com"]', { target: '_blank', rel: 'noopener' }, 'Leaflet'),
                '.'
            ])
        ])
    }
}