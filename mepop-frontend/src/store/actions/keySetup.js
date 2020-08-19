import { SET_LOCATION_KEYS } from '../generalReducer'

export const setupLocationKeys = async ({ firebase, dispatch }, resolve) => {
  const googleKey = await firebase.retreiveGoogleMapsKey()

  if (googleKey.error) {
    // Put in error UI box
    console.log('Error occurred retreiving keys.')
  }
  dispatch({
    type: SET_LOCATION_KEYS,
    payload: { googleKey: googleKey.data }
  })

  resolve()
}
