import { readString } from 'react-papaparse'
import axios from 'axios'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import { headers } from '../assets/exampleBuyers'
import FirebaseContext, { withFirebase } from './context'

import { UPDATE_GEOCODES } from '../store/generalReducer'

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
    this.db = firebase.firestore()
  }

  updateGeocodesInDB (doc, obj, dispatch) { // this is unused right now
    // Add a new document in collection "geocodes"
    this.db.collection('geocodes').doc('points').set(obj)
      .then(function () {
        console.log('Updated Geocodes!')
        dispatch({ type: UPDATE_GEOCODES, payload: obj })
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
  }

  // Get api Keys from firestore
  retreiveMapQuestKey () {
    const docRef = this.db.collection('keys').doc('mapQuest')
    return docRef.get().then(function (doc) {
      if (doc.exists) {
        return { error: null, data: doc.data() }
      } else {
        alert('Unknown Error Occurred')
      }
    }).catch(function (error) {
      return { error, data: null }
    })
  }

  retreiveGoogleMapsKey () {
    const docRef = this.db.collection('keys').doc('googleMaps')
    return docRef.get().then(function (doc) {
      if (doc.exists) {
        return { error: null, data: doc.data() }
      } else {
        alert('Unknown Error Occurred')
      }
    }).catch(function (error) {
      return { error, data: null }
    })
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

// This below is for holding geocoordinates in firebase
// allSales.sales.forEach((sale) => {
//   const doc = sale.post_code.trim()
//   docRequests.push(this.db.collection('geocodes').doc(doc).get())
// })
// Promise.all(docRequests).then(responses => {
//   const geocodeRequests = [] // holds addresses need to be updated
//   const newDocObjs = {} // holds all updated data which will be sent to firestore and state
//   const newDocRequests = [] // holds firebase doc update requests
//   const userEmail = this.auth.currentUser.email

//   responses.forEach((doc, i) => {
//     const sale = allSales.sales[i]
//     const zip = sale.post_code.trim()
//     if (doc.exists) {
//       const newDoc = { ...doc.data() }

//       // Doc exists so this updates sellers if need be updated.
//       if (!doc.data().sellers.includes(userEmail)) {
//         newDoc.sellers.push(userEmail)
//       }
//       // Updates sales if need be updated.
//       const exists = newDoc.sales.find(current => {
//         return current.date_of_sale === sale.date_of_sale &&
//         current.date_of_listing === sale.date_of_listing &&
//         current.description === sale.description &&
//         current.buyer === sale.buyer &&
//         current.item_price === sale.item_price &&
//         current.address_line_1 === sale.address_line_1 &&
//         current.bundle === sale.bundle
//       })

//       if (!exists) {
//         newDoc.sales.push(sale)
//       }

//       if (JSON.stringify(newDoc) !== JSON.stringify(doc.data())) {
//         const zip = newDoc.location.zip
//         if (zip) {
//           // pushes newDoc to list of docs to add to firestore if it's been updated
//           newDocRequests.push(this.db.collection('geocodes').doc(zip).set(newDoc))
//         }
//       }
//       newDocObjs[zip] = newDoc
//     } else {
//       // If doc does not exist starts the process of creating new doc

//       geocodeRequests.push(zip)

//       newDocObjs[zip] = {
//         sales: newDocObjs[zip] ? [...newDocObjs[zip].sales, allSales.sales[i]] : [allSales.sales[i]],
//         sellers: [userEmail],
//         geopoint: { lat: 0, lng: 0 },
//         location: {}
//       }
//     }
//   })

// if (geocodeRequests.length) {
//   // finds geocode in JSON obj
//   for (let i = 0; i < geocodeRequests.length; i++) {
//     const zip = geocodeRequests[i]
//     for (let j = 0; j < geocodes.length; j++) {
//       if (zip === geocodes[j].fields.zip) {
//         newDocObjs[zip].geopoint = {
//           lat: geocodes[j].fields.latitude,
//           lng: geocodes[j].fields.longitude
//         }

//         newDocObjs[zip].location = {
//           city: geocodes[j].fields.city,
//           state: geocodes[j].fields.state,
//           zip: geocodes[j].fields.zip,
//           timezone: geocodes[j].fields.timezone
//         }
//         continue
//       }
//     }
//   }

//   Object.keys(newDocObjs).forEach((key) => {
//     newDocRequests.push(this.db.collection('geocodes').doc(key).set(newDocObjs[key]))
//   })
// }

//   if (newDocRequests.length) {
//     // adds new docs to firestore
//     Promise.all(newDocRequests).then(responses => {
//       console.log('Updated Docs: ', newDocRequests.length)
//       resolve(newDocObjs)
//     })
//   } else {
//     console.log('No need to talk to firestore')
// resolve(newDocObjs)
//   }
// })
