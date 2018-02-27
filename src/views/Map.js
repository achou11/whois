const m = require('mithril')
const L = require('leaflet')


const MapComponent = function () {
    let map

    return {

        oncreate() {

            // fix map border color bug when applying theme change before switching to map page
            if (document.body.className === 'theme-dark') {
                document.getElementById('map-container').className = 'border-light'
            } else {
                document.getElementById('map-container').className = 'border-dark'
            }
            
           const map = L.map('map').setView([38, -98], 4)

           L.tileLayer('https://api.mapbox.com/styles/v1/andrewchou/cj3nmat3z002b2sqnvy3g2c04/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5kcmV3Y2hvdSIsImEiOiJjajJqeXR5b2cwMGRiMnFucW53NWJmNjlnIn0.LmmouuLX7C6EE61cOUez3A', {
           maxZoom: 11,
           accessToken: 'pk.eyJ1IjoiYW5kcmV3Y2hvdSIsImEiOiJjajJqeXR5b2cwMGRiMnFucW53NWJmNjlnIn0.LmmouuLX7C6EE61cOUez3A'
        }).addTo(map);
        },

        view() {
            return m('#map')
        }
    }
}


module.exports = {
    view() {
        return [
            m('h1.title', 'Whereabouts'),
            m('div.text-center', 'If you\'re on mobile, I suggest turning your screen horizontally.'),
            m('br'),
            m('#map-container.border-dark', m(MapComponent))
        ]
    }
}