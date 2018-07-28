const m = require('mithril')
const helper = require('../utilities/Helpers')

// Tooltips
const titles = {
  home: 'Go home',
  about: 'About me',
  map: 'Where I\'ve been',
  faq: 'Not-So-FAQs',
  theme: 'Toggle theme'
}

// Add onclick method to keep nav icon of current page highlighted
// Not working with anchor tags
module.exports = {
  view () {
    return m('nav#nav-bar.background-light', [

      m('a[href=/nsfaq].nav__link', {
        title: titles.faq,
        onclick: (e) => {
          e.preventDefault()
          m.route.set('/nsfaq')
          window.scrollTo(0, 0)
        }
      }, helper.generateIcon('help-circle')),

      m('a[href=/about].nav__link', {
        title: titles.about,
        onclick: (e) => {
          e.preventDefault()
          m.route.set('/about')
          window.scrollTo(0, 0)
        }
      }, helper.generateIcon('user')),

      m('a[href=/].nav__link', {
        title: titles.home,
        onclick: (e) => {
          e.preventDefault()
          m.route.set('/')
          window.scrollTo(0, 0)
        }
      }, helper.generateIcon('home')),

      m('a[href=/map].nav__link', {
        title: titles.map,
        onclick: (e) => {
          e.preventDefault()
          m.route.set('/map')
          window.scrollTo(0, 0)
        }
      }, helper.generateIcon('map-pin')),

      m(`a.nav__link`, {
        title: titles.theme,
        onclick: helper.changeTheme
      }, document.body.className === 'theme-light' ? helper.generateIcon('sun') : helper.generateIcon('moon'))
    ])
  }

}
