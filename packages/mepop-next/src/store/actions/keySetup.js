import { SET_LOCATION_KEYS } from '../generalReducer'

export const setupLocationKeys = async ({ firebase, dispatch }) => {
  const mapKey = await firebase.retreiveMapQuestKey()
  const googleKey = await firebase.retreiveGoogleMapsKey()

  if (mapKey.error || googleKey.error) {
    // Put in error UI box
    alert('Error Occurred')
  }
  dispatch({
    type: SET_LOCATION_KEYS,
    payload: { mapQuestKey: mapKey.data, googleKey: googleKey.data }
  })
}
