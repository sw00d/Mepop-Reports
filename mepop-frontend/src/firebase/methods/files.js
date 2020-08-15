import { readString } from 'react-papaparse'
import axios from 'axios'
import { headers } from '../../assets/exampleBuyers'
import firebase from 'firebase'

export const getFileMethod = (auth, storage, resolve) => {
  const UID = auth.currentUser.uid
  const storageRef = storage.ref(`${UID}`)

  storageRef.listAll().then(({ items }) => {
    const getDownloadPromises = []
    items.forEach((fileRef, i) => {
      // pushes promises to resolve synchronously
      getDownloadPromises.push(fileRef.getDownloadURL())
    })

    const calls = []
    // resolves getting the download URL's then pushes axios call to calls array
    Promise.all(getDownloadPromises).then((responses) => {
      responses.forEach((url) => {
        calls.push(axios.get(url))
      })
      // resolves all calls in calls array and then sets up new state array for component
      axios.all(calls).then(axios.spread((...responses) => {
        const newData = []
        responses.forEach((res, j) => {
          newData.push({ content: res.data, filename: items[j].name })
        })
        resolve(newData)
      }))
        .catch((err) => {
          resolve([])
          console.log(err)
          window.alert('Error occurred while retreiving files. Try again')
        })
    })
      .catch(() => {
        resolve()
        console.error('Error Occurred')
        window.alert('Error Occurred')
      })
  })
    .catch(() => {
      resolve()
      console.error('Error Occurred')
      window.alert('Error Occurred')
    })
}

export const deleteFileMethod = (auth, storage, filename, resolve) => {
  const UID = auth.currentUser.uid
  const storageRef = storage.ref(`${UID}/${filename}`)

  storageRef.delete().then(() => {
    resolve()
  }).catch((err) => {
    console.log(err)
    window.alert(err.message)
  })
}

export const uploadFilesMethod = (auth, storage, files, fetchFiles, err) => {
  const rejectedFiles = []

  // upload accepted files to firebase
  const UID = auth.currentUser.uid
  let counter = 0
  files.forEach((file, i) => {
    const fileReader = new FileReader()
    fileReader.readAsText(file)

    fileReader.onloadend = () => {
      // converts CSV's data to string
      if (readString(fileReader.result).errors.length) {
        rejectedFiles.push(file.name)
        counter++
      } else {
        const rows = readString(fileReader.result).data
        counter++

        if (rows[0].length !== 22) {
          // checks row length for length of 22
          rejectedFiles.push(file.name)
        } else if (JSON.stringify(rows[0]) !== JSON.stringify(headers)) {
          // Compares Depop headers to first row of file
          rejectedFiles.push(file.name)
        } else {
          // File passed all tests so it's upload time now...
          const storageRef = storage.ref(`${UID}/${file.name}`)
          const uploadTask = storageRef.put(file)

          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                  console.log('Upload is paused')
                  break
                case firebase.storage.TaskState.RUNNING:
                  // console.log('Upload is running')
                  break
              }
            }, (error) => {
              switch (error.code) {
                case 'storage/unauthorized':
                  window.alert("You don't have permission to execute this action.")
                  break
                case 'storage/canceled':
                  window.alert('Unknown Error. Operation canceled')
                  break
                case 'storage/unknown':
                  window.alert('Unknown Error')
                  break
              }
            }, () => {
              if (counter === files.length) {
                fetchFiles()
              }
            })
        }
        if (i === files.length - 1) {
          if (rejectedFiles.length) {
            err(`The following files were not processed because they are not Depop files: ${rejectedFiles.join(', ')}. If this seems to be an error, please contact samote.wood@gmail.com for support.`)
          }
        }
      }
    }
  })
}
