export const coordinatesOrganicaLviv: [longitude: number, latitude: number] = [
  24.000570897377862, 49.847716139461575,
]

export const googleMapsUrl = `https://www.google.com/maps/dir//Organiсa+||+Органіка+-+ресторан+живої+кухні/@${coordinatesOrganicaLviv[1]},${coordinatesOrganicaLviv[0]},200m`

export const setDestination = () => {
  window.open(googleMapsUrl, '_blank')
}
