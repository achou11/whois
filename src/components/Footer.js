const m = require('mithril')

module.exports = {
    oncreate() {
        let sourceUrl = document.getElementById('source-url')

        document.addEventListener('DOMContentLoaded', function() {
            const isDat = window.DatArchive && window.location.origin.startsWith('dat:')
            const url = isDat
              ? `beaker://library/${window.location}`
              : 'https://github.com/achou11/whois'
          
            sourceUrl.href = url
          }
        )
    },

    view() {
        return m('footer', [
            m.trust('<span>Copyright &copy; 2018 Andrew Chou</span>'),
            m('a#source-url', { target: '_blank', rel: 'noopener'}, 'View Source')
        ])
    }
}
