import { SET_LOCATION_KEYS } from '../generalReducer'

export const setupLocationKeys = async ({ firebase, dispatch }) => {
  const googleKey = await firebase.retreiveGoogleMapsKey()

  if (googleKey.error) {
    // Put in error UI box
    alert('Error Occurred')
  }
  dispatch({
    type: SET_LOCATION_KEYS,
    payload: { googleKey: googleKey.data }
  })
}
