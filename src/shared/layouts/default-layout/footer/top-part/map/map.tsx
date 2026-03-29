'use client'

import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { styles } from './styles'

const coordinatesOrganicaLviv: [longitude: number, latitude: number] = [
  24.000570897377862, 49.847716139461575,
]

export const setDestination = () => {
  const googleMapsUrl = `https://www.google.com/maps/dir//Organiсa+||+Органіка+-+ресторан+живої+кухні/@${coordinatesOrganicaLviv[1]},${coordinatesOrganicaLviv[0]},200m`
  window.open(googleMapsUrl, '_blank')
}

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
