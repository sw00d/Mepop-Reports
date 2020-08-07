
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import FirebaseContext, { withFirebase } from './context'
import { getFileMethod, deleteFileMethod, uploadFilesMethod } from './methods/files'

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

  // Get api Keys from firestore
  retreiveGoogleMapsKey () {
    // getGoogleMapsKey(this.db)
    const docRef = this.db.collection('keys').doc('googleMaps')
    return docRef.get().then(function (doc) {
      if (doc.exists) {
        return { error: null, data: doc.data() }
      } else {
        window.alert('Unknown Error Occurred')
      }
    }).catch(function (error) {
      return { error, data: null }
    })
  }

  // profiles
  handleProfile (userAndMembership) {
    return this.db.collection('profiles').doc(this.auth.currentUser.uid).get().then((doc) => {
      if (!doc.exists) {
        this.setProfile().then((newDoc) => {
          // creates new profile if it doesn't exist (only on first login/signup ever)
          return { ...userAndMembership, profile: newDoc }
        })
      } else {
        return { ...userAndMembership, profile: doc.data() }
      }
    })
  }

  setProfile (incomingDoc) {
    const newDoc = { firstName: '', lastName: '', depopShopName: '' }
    return this.db.collection('profiles').doc(this.auth.currentUser.uid).set(incomingDoc || newDoc).then(() => {
      return newDoc
    }).catch(() => alert('Error Occurred Creating Profile'))
  }

  // memberships
  handleMembership (user) {
    return this.db.collection('memberships').doc(this.auth.currentUser.uid).get().then((doc) => {
      if (!doc.exists) {
        this.setMembership().then((newDoc) => {
          // creates new membership if it doesn't exist (only on first login/signup ever)
          return this.handleProfile({ user, membership: newDoc }).then((newUserObject) => {
            return newUserObject
          })
        })
      } else {
        return this.handleProfile({ user, membership: doc.data() }).then((newUserObject) => {
          return newUserObject
        })
      }
    })
  }

  setMembership (incomingDoc) {
    const newDoc = { type: 'free', paymentInfo: {} }
    return this.db.collection('memberships').doc(this.auth.currentUser.uid).set(incomingDoc || newDoc).then(() => {
      return newDoc
    }).catch(() => alert('Error Occurred Creating Membership'))
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
      .then(({ user }) => {
        return this.handleMembership(user)
      })
  }

  doSignOut () { this.auth.signOut() }

  doPasswordReset (email) {
    return this.auth.sendPasswordResetEmail(email)
  }

  doPasswordUpdate (password) { return this.auth.currentUser.updatePassword(password) }

  // files
  getUserFiles (resolve) {
    getFileMethod(this.auth, this.storage, resolve)
  }

  deleteFile (filename, fetchFiles) {
    deleteFileMethod(this.auth, this.storage, filename, fetchFiles)
  }

  uploadFiles (files, fetchFiles) {
    uploadFilesMethod(this.auth, this.storage, files, fetchFiles)
  }
}

export default Firebase
export { FirebaseContext, withFirebase }
