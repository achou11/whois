const m = require('mithril')
const feather = require('feather-icons')


module.exports = {
    generateIcon(name) {
        return m.trust(feather.icons[name].toSvg()) // I hope there's a better way to do this 
    },

    changeTheme() {

        let currentTheme = document.body.className
        document.body.className = currentTheme == 'theme-dark' ? 'theme-light' : 'theme-dark';


        if (document.getElementById('map-container')) {

            let mapBorderColor = document.getElementById('map-container')
            console.log(mapBorderColor)

            switch (mapBorderColor.className) {
                case 'border-light':
                    mapBorderColor.className = 'border-dark'
                    break
                
                case 'border-dark':
                    mapBorderColor.className = 'border-light'
                    break
            }
        }

        if (document.getElementById('nav-bar')) {
            let navBar = document.getElementById('nav-bar')

            switch (navBar.classList.contains('background-light')) {
                case true:
                    navBar.classList.add('background-dark')
                    navBar.classList.remove('background-light')

                    if (navBar.classList.contains('border-dark-thin')) {
                        navBar.classList.add('border-light-thin')
                        navBar.classList.remove('border-dark-thin')
                    }

                    break
                
                case false:
                    navBar.classList.add('background-light')
                    navBar.classList.remove('background-dark')

                    if (navBar.classList.contains('border-light-thin')) {
                        navBar.classList.add('border-dark-thin')
                        navBar.classList.remove('border-light-thin')
                    }

                    break
            }
        }
    }
}