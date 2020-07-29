import { UPDATE_FILES, UPDATE_DATA, SET_GEO_DATA } from '../generalReducer'
import { processFiles } from '../../dataProcessing'
import { setupLocationKeys } from './keySetup'

export const fetchFiles = (user, { firebase, dispatch }, resolve) => {
  firebase.getUserFiles((files) => {
    if (!files) return
    if (files) {
      const processedFiles = processFiles(files)
      dispatch({ type: UPDATE_DATA, payload: processedFiles })

      if (processedFiles) {
        resolve()
      }
    }

    dispatch({ type: UPDATE_FILES, payload: files })
    setupLocationKeys({ firebase, dispatch })
  })
  return null
}
