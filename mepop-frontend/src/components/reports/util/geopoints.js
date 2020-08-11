import geocodes from '../../../assets/geocodes.json'

export const getGeopoints = (allSales, resolve) => {
  if (!allSales) return
  const geocodeRequests = [] // holds addresses that need to be updated
  const newDocObjs = {} // holds all updated data which will be sent to state

  allSales.sales.forEach((doc, i) => {
    const sale = allSales.sales[i]
    const zip = sale.post_code.trim()

    geocodeRequests.push(zip)

    newDocObjs[zip] = {
      sales: newDocObjs[zip] ? [...newDocObjs[zip].sales, allSales.sales[i]] : [allSales.sales[i]],
      geopoint: { lat: 0, lng: 0 },
      location: {}
    }
  })
  if (geocodeRequests.length) {
    // finds geocode in JSON obj
    for (let i = 0; i < geocodeRequests.length; i++) {
      const zip = geocodeRequests[i]
      for (let j = 0; j < geocodes.length; j++) {
        if (zip === geocodes[j].fields.zip) {
          newDocObjs[zip].geopoint = {
            lat: geocodes[j].fields.latitude,
            lng: geocodes[j].fields.longitude
          }

          newDocObjs[zip].location = {
            city: geocodes[j].fields.city,
            state: geocodes[j].fields.state,
            zip: geocodes[j].fields.zip,
            timezone: geocodes[j].fields.timezone
          }
          continue
        }
      }
    }
  }
  resolve(newDocObjs)
}
