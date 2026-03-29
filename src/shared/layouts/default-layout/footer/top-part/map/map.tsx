'use client'

import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { coordinatesOrganicaLviv, setDestination } from './set-destination'
import { styles } from './styles'

export const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      container: 'mapboxContainer',
      style: 'mapbox://styles/smartsdtmp/cm7iyh0xk00o901r3awj08ap7',
      center: coordinatesOrganicaLviv,
      attributionControl: false,
      zoom: 13,
    })

    map.on('load', function () {
      map.removeControl(new mapboxgl.NavigationControl())
    })

    const markerElement = document.createElement('img')
    markerElement.src = '/marker.svg'

    new mapboxgl.Marker({
      element: markerElement,
      anchor: 'center',
    })
      .setLngLat(coordinatesOrganicaLviv)
      .addTo(map)

    map.on('click', setDestination)

    return () => map.remove()
  }, [])

  return <div id='mapboxContainer' className={styles.map} />
}
