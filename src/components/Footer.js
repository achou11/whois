const m = require('mithril')

module.exports = {
  oncreate () {
    const sourceUrl = document.getElementById('source-url')

    document.addEventListener('DOMContentLoaded', () => {
      const isDat =
        window.DatArchive && window.location.origin.startsWith('dat:')
      const url = isDat
        ? `beaker://library/${window.location}`
        : 'https://github.com/achou11/whois'

      sourceUrl.href = url
    })
  },

  view () {
    return m('footer', [
      m('span', m.trust('&copy; 2018-2019 Andrew Chou')),
      m('a#source-url', { target: '_blank', rel: 'noopener' }, 'View Source')
    ])
  }
}
