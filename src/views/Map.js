const m = require('mithril')
const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3Y2hvdSIsImEiOiJjajJqeXR5b2cwMGRiMnFucW53NWJmNjlnIn0.LmmouuLX7C6EE61cOUez3A'


const layer = {
    "id": "places",
    "type": "symbol",
    "source": {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-73.71006, 40.848415]
                    },
                    "properties": {
                        "name": "Port Washington, New York",
                        "period": {
                            "start": "1997",
                            "end": "2015"
                        },
                        "description": "I grew up here. Not much of a choice for this one.",
                        "icon": "monument"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-97.748306, 30.285085]
                    },
                    "properties": {
                        "name": "Austin, Texas",
                        "period": {
                            "start": "2015",
                            "end": "2018"
                        },
                        "description": "Pursuing a B.S. in mathematics with a ~certificate~ in computer science @ <a href='https://www.utexas.edu/' target='_blank'>UT Austin</a>. Emphasis on the B.S. 😉",
                        "icon": "monument"
                    },
                
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.3321, 47.6062]
                    },
                    "properties": {
                        "name": "Seattle, Washington",
                        "period": {
                            "start": "2016 (Summer)",
                            "end": null
                        },
                        "description": "Spent the summer with my twin brother, who goes to UW, and worked as a cashier @ <a href='https://www.pacificsciencecenter.org/' target='_blank'>Pacific Science Center</a>.",
                        "icon": "harbor"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-87.630385, 41.882331]
                    },
                    "properties": {
                        "name": "Chicago, Illinois",
                        "period": {
                            "start": "2017 (Summer)",
                            "end": null
                        },
                        "description": "Data intern @ <a href='https://nexttier.com/' target='_blank'>NextTier Education</a> and mapping intern @ <a href='https://www.hotosm.org/'  target='_blank'>Humanitarian OpenStreetMap Team</a> (HOT).",
                        "icon": "harbor"
                    }
                }
            ]
        }
    },
    "layout": {
        "icon-image": "{icon}-11",
        "text-field": "{name}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
    },
    "paint": {
        "text-color": "blue"
    }
}


/*
const createPopup = function (place, period, coordinates, map) {
    return new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(`
        <div>${place}</div>
        <div>When: ${period}</div>
    `)
    .addTo(map)
}
*/

const MapBoxComponent = function () {
    let map

    /*
    let markers = [
        {
            'place': 'Port Washington, New York',
            'period': '1997 - 2015',
            'coordinates': [-73.71006, 40.848415]
        },
    
        {
            'place': 'Austin, Texas',
            'period': '2015 - 2018',
            'coordinates': [-97.748306, 30.285085]
        },
        
        {
            'place': 'Seattle, Washington',
            'period': '2016 (Summer)',
            'coordinates': [-122.3321, 47.6062]
        },
    
        {
            'place': 'Chicago, Illinois',
            'period': '2017 (Summer)',
            'coordinates': [-87.630385, 41.882331]
        }
    ]
    */

    return {

        oncreate() {
            // fix map border color bug when applying theme change before switching to map page
            if (document.body.className === 'theme-dark') {
                document.getElementById('map-container').className = 'border-light'
            } else {
                document.getElementById('map-container').className = 'border-dark'
            }
        
            // create map
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/andrewchou/cj3nmat3z002b2sqnvy3g2c04',
                center: [-95, 38],
                zoom: 3
            })

            /*
            markers.forEach( m => {
                return new mapboxgl.Marker()
                .setLngLat(m.coordinates)
                .addTo(map)
                .setPopup(createPopup(m.place, m.period, m.coordinates, map))
                .togglePopup()
            })
            */

            map.on('load', function () {
                map.addLayer(
                    {
                        "id": "places",
                        "type": "symbol",
                        "source": {
                            "type": "geojson",
                            "data": {
                                "type": "FeatureCollection",
                                "features": [
                                    {
                                        "type": "Feature",
                                        "geometry": {
                                            "type": "Point",
                                            "coordinates": [-73.71006, 40.848415]
                                        },
                                        "properties": {
                                            "name": "Port Washington, New York",
                                            "period": {
                                                "start": "1997",
                                                "end": "2015"
                                            },
                                            "description": "I grew up here. Not much of a choice for this one."
                                        }
                                    },
                                    {
                                        "type": "Feature",
                                        "geometry": {
                                            "type": "Point",
                                            "coordinates": [-97.748306, 30.285085]
                                        },
                                        "properties": {
                                            "name": "Austin, Texas",
                                            "period": {
                                                "start": "2015",
                                                "end": "2018"
                                            },
                                            "description": "Pursuing a B.S. in mathematics with a ~certificate~ in computer science @ <a href='https://www.utexas.edu/' target='_blank'>UT Austin</a>. Emphasis on the B.S. 😉"
                                        },
                                    
                                    },
                                    {
                                        "type": "Feature",
                                        "geometry": {
                                            "type": "Point",
                                            "coordinates": [-122.3321, 47.6062]
                                        },
                                        "properties": {
                                            "name": "Seattle, Washington",
                                            "period": {
                                                "start": "2016 (Summer)",
                                                "end": null
                                            },
                                            "description": "Spent the summer with my twin brother, who goes to UW, and worked as a cashier @ <a href='https://www.pacificsciencecenter.org/' target='_blank'>Pacific Science Center</a>."
                                        }
                                    },
                                    {
                                        "type": "Feature",
                                        "geometry": {
                                            "type": "Point",
                                            "coordinates": [-87.630385, 41.882331]
                                        },
                                        "properties": {
                                            "name": "Chicago, Illinois",
                                            "period": {
                                                "start": "2017 (Summer)",
                                                "end": null
                                            },
                                            "description": "Data intern @ <a href='https://nexttier.com/' target='_blank'>NextTier Education</a> and mapping intern @ <a href='https://www.hotosm.org/'  target='_blank'>Humanitarian OpenStreetMap Team</a> (HOT)."
                                        }
                                    }
                                ]
                            }
                        },
                        "layout": {
                            "icon-image": 'marker-stroked-15',
                            "text-field": "{name}",
                            "text-offset": [0, 0.6],
                            "text-anchor": "top"
                        },
                        "paint": {
                            "text-color": "blue"
                        }
                    }
                    
                )
            })

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'places', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'places', function () {
                map.getCanvas().style.cursor = '';
            });

            /*map.on('load', function () {
                map.addLayer(layer)
            })*/
        },
        
        onremove() {
            map.remove()
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
            m('#map-container.border-dark', m(MapBoxComponent))
        ]
    }
}