export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_FILES = 'UPDATE_FILES'
export const UPDATE_GEOCODES = 'UPDATE_GEOCODES'
export const UPDATE_DATA = 'UPDATE_DATA'
export const SET_LOCATION_KEYS = 'SET_LOCATION_KEYS'
export const SET_GEO_DATA = 'SET_GEO_DATA'

const initialState = {
  user: {},
  files: [],
  allData: {},
  geocodes: {},
  mapQuestKey: null,
  googleMapsKey: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      return { ...state, user: action.payload }
    }
    case UPDATE_GEOCODES: {
      return { ...state, geocodes: action.payload }
    }
    case UPDATE_FILES: {
      return { ...state, files: action.payload }
    }
    case UPDATE_DATA: {
      return { ...state, allData: action.payload }
    }
    case SET_GEO_DATA: {
      return {...state, geocodes: action.payload}
    }
    case SET_LOCATION_KEYS: {
      return {
        ...state,
        mapQuestKey: action.payload.mapQuestKey,
        googleMapsKey: action.payload.googleKey
      }
    }
    default: {
      return { ...state }
    }
  }
}