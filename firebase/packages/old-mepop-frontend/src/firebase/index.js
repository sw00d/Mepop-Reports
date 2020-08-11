import { readString } from 'react-papaparse'
import axios from 'axios'

import firebase from 'firebase'
import 'firebase/auth'
import { headers } from '../assets/example_buyers'
import FirebaseContext, { withFirebase } from './context'

const firebaseConfig = {
  apiKey: 'AIzaSyB04NiM6bapVV6Jd2ZRw5vUVLy3Cu7o0x0',
  authDomain: 'mepop-app.firebaseapp.com',
  databaseURL: 'https://mepop-app.firebaseio.com',
  projectId: 'mepop-app',
  storageBucket: 'mepop-app.appspot.com',
  messagingSenderId: '619885550344',
  appId: '1:619885550344:web:28a8d730b1ca91a5f6aabd',
  measurementId: 'G-WM4LPLQMKX'
}

class Firebase {
  constructor () {
    try {
      firebase.initializeApp(firebaseConfig)
      firebase.analytics()
      if (window.location.href.includes('localhost')) {
        firebase.functions().useFunctionsEmulator('http://localhost:4001')
      }
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.message)
      }
    }

    this.auth = firebase.auth()
    this.storage = firebase.storage()
  }

  // auth
  doCreateUser (email, password) {
    console.log('created user for:', email)

    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  doGetCurrentUser () {
    return this.auth
  }

  doSignIn (email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  doSignOut () { this.auth.signOut() }

  doPasswordReset (email) {
    return this.auth.sendPasswordResetEmail(email)
  }

  doPasswordUpdate (password) { return this.auth.currentUser.updatePassword(password) }

  // files
  getUserFiles (resolve) {
    const UID = this.auth.currentUser.uid
    const storageRef = this.storage.ref(`${UID}`)

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
            newData.push({ content: res.data, filename: items[j].name, checked: true })
          })
          resolve(newData)
        }))
          .catch(() => {
            resolve()
            window.alert('Error occurred while retreiving files. Try again')
          })
      })
        .catch(() => {
          resolve()
          window.alert('Error Occurred')
        })
    })
      .catch(() => {
        resolve()
        window.alert('Error Occurred')
      })
  }

  deleteFile (filename, fetchFiles) {
    const UID = this.auth.currentUser.uid
    const storageRef = this.storage.ref(`${UID}/${filename}`)

    storageRef.delete().then(() => {
      fetchFiles()
    }).catch((err) => {
      console.log(err)
      alert(err.message)
    })
  }

  uploadFiles (files, fetchFiles) {
    const rejectedFiles = []

    // upload accepted files to firebase
    const UID = this.auth.currentUser.uid
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
            const storageRef = this.storage.ref(`${UID}/${file.name}`)
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
              window.alert(`The following files were not processed because they are not Depop files: ${rejectedFiles.join(', ')}. If this seems to be an error, please contact samote.wood@gmail.com for support.`)
            }
          }
        }
      }
    })
  }
}

export default Firebase
export { FirebaseContext, withFirebase }
