import { UPDATE_FILES, UPDATE_DATA } from '../generalReducer'
import { processFiles } from '../../dataProcessing'

export const fetchFiles = ({ firebase, dispatch }, resolve) => {
  firebase.getUserFiles((files) => {
    if (!files) return
    if (files) {
      const processedFiles = processFiles(files)
      dispatch({ type: UPDATE_DATA, payload: processedFiles })
      dispatch({ type: UPDATE_FILES, payload: files })
    }
    if (resolve) resolve()
  })
  return null
}
