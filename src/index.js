import m from 'mithril'
import Layout from './views/Layout'
import Home from './views/Home'
import About from './views/About'
import Faq from './views/Faq'
import Map from './views/map'
import Error from './views/Error'

// Uncomment in production
m.route.prefix = ''

m.route(document.body, '/', {
  '/': {
    render () {
      return m(Layout, m(Home))
    }
  },

  '/nsfaq': {
    render () {
      return m(Layout, m(Faq))
    }
  },

  '/about': {
    render () {
      return m(Layout, m(About))
    }
  },

  '/map': {
    render () {
      return m(Layout, m(Map))
    }
  },

  '/:404...': {
    render () {
      return m(Layout, m(Error))
    }
  }
})

// REFACTOR THIS SHIT!
// IT NEEDS TO GO IN Nav.js BUT I DON'T UNDERSTAND HOW TO DO IT
// Change nav bar style on scroll
window.addEventListener(
  'scroll',
  () => {
    const navBar = document.getElementById('nav-bar')

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
  },
  { passive: true }
)
