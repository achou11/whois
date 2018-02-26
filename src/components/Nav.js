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


/*
Which bug is better?
1. Scroll to top for each nav icon pressed, even the theme toggler.
2. No scroll to top for any of the nav icons.
*/

// Add onclick method to keep nav icon of current page highlighted
// Not working with anchor tags
module.exports = {
    view() {
        return m('nav#nav-bar.background-light', [

            m('a[href=/nsfaq].nav__link', {
                title: titles.faq,
                oncreate: m.route.link,
                //onupdate: m.route.link
            }, helper.generateIcon('help-circle')),

            m('a[href=/about].nav__link', {
                title: titles.about,
                oncreate: m.route.link,
                //onupdate: m.route.link
            }, helper.generateIcon('user')),

            m('a[href=/].nav__link', {
                title: titles.home,
                oncreate: m.route.link,
                //onupdate: m.route.link
            }, helper.generateIcon('home')),

            m('a[href=/map].nav__link', {
                title: titles.map,
                oncreate: m.route.link,
                //onupdate: m.route.link
            }, helper.generateIcon('map-pin')),

            m(`a.nav__link`, {
                title: titles.theme,
                onclick: helper.changeTheme
            }, helper.generateIcon('eye'))
        ])
    }

}