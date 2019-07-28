import m from 'mithril'
import feather from 'feather-icons'

const helpers = {
  generateIcon: name => m.trust(feather.icons[name].toSvg()), // I hope there's a better way to do this
  changeTheme: () => {
    // Change address bar theme
    const addrBar = document.querySelector('meta[name="theme-color"]').content

    if (addrBar === '#363636') {
      document.querySelector('meta[name="theme-color"]').content = '#f1f1f1'
    } else {
      document.querySelector('meta[name="theme-color"]').content = '#363636'
    }

    // Change body theme
    const currentTheme = document.body.className
    document.body.className =
      currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark'

    // Change map border color
    if (document.getElementById('map-container')) {
      const mapBorderColor = document.getElementById('map-container')

      switch (mapBorderColor.className) {
        case 'border-light':
          mapBorderColor.className = 'border-dark'
          break

        case 'border-dark':
          mapBorderColor.className = 'border-light'
          break
      }
    }

    // Change nav border color
    if (document.getElementById('nav-bar')) {
      const navBar = document.getElementById('nav-bar')

      if (navBar.classList.contains('background-light')) {
        navBar.classList.add('background-dark')
        navBar.classList.remove('background-light')

        if (navBar.classList.contains('border-dark-thin')) {
          navBar.classList.add('border-light-thin')
          navBar.classList.remove('border-dark-thin')
        }
      } else {
        navBar.classList.add('background-light')
        navBar.classList.remove('background-dark')

        if (navBar.classList.contains('border-light-thin')) {
          navBar.classList.add('border-dark-thin')
          navBar.classList.remove('border-light-thin')
        }
      }
    }
  }
}

export default helpers
