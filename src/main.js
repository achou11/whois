const m = require('mithril')

const Layout = require('./views/Layout')
const Home = require('./views/Home')
const Mdpage = require('./views/Mdpage')
const Map = require('./views/Map')
const Error = require('./views/Error')

// Uncomment in production 
m.route.prefix('')


m.route(document.body, '/', {
    '/': {
        render() {
            return m(Layout, m(Home))
        }
    },

    '/about': {
        /* Old
        render() {
            return m(Layout, m(About))
        }
        */
        render() {
            return m(Layout, m(Mdpage, { title: 'About' }))
        }
    },

    '/map': {
        render() {
            return m(Layout, m(Map))
        }
    },

    '/nsfaq': {
        /* Old
        render() {
            return m(Layout, m(Faq))
        }
        */

        render() {
            return m(Layout, m(Mdpage, { title: 'Not-So-FAQs' }))
        }
    },

    '/:404...': {
        render() {
            return m(Layout, m(Error))
        }
    },
})


// Change nav bar style on scroll
window.addEventListener('scroll', function () {

    let navBar = document.getElementById('nav-bar')

    if (window.pageYOffset <= 30) {

        if (navBar.classList.contains('background-light')) {
            navBar.classList.remove('border-dark-thin')
        } else {
            navBar.classList.remove('border-light-thin')
        }

    } else {

        if (navBar.classList.contains('background-light')) {
            navBar.classList.add('border-dark-thin')
        } else {
            navBar.classList.add('border-light-thin')
        }
    }
})