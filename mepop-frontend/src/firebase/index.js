
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
      // uncomment this if running functions in emulator
      // if (window.location.href.includes('localhost')) {
      //   console.log('Dev env')
      //   firebase.functions().useFunctionsEmulator('http://localhost:4001')
      // }
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.message)
      }
    }

    this.auth = firebase.auth()
    this.storage = firebase.storage()
    this.db = firebase.firestore()
    this.functions = firebase.functions()
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
  // Stripe

  handleStripeClients () {
    // creates stripe client if doesn't exist (This handles people moving over from legacy app but who already have accounts)
    return this.db.collection('stripeClients').doc(this.auth.currentUser.uid).get()
      .then((doc) => {
        if (!doc.exists) {
          return this.createStripeClient()
        }
      })
  }

  createStripeClient () {
    const createStripeClientFunction = firebase.functions().httpsCallable('createStripeClient')
    const { email, uid } = this.auth.currentUser
    createStripeClientFunction({ email, uid }).then(() => {
      console.log('Created Stripe Client')
    })
  }

  // profiles
  handleProfile (userAndMembership) {
    return this.db.collection('profiles').doc(this.auth.currentUser.uid).get().then((doc) => {
      this.handleStripeClients()
      if (!doc.exists) {
        return this.setProfile().then((newDoc) => {
          // creates new profile if it doesn't exist (only on first login/signup ever)

          return { ...userAndMembership, profile: newDoc }
        })
      } else {
        return { ...userAndMembership, profile: doc.data() }
      }
    })
  }

  setProfile (incomingDoc, uid) {
    const initialDoc = {
      firstName: '',
      lastName: '',
      depopShopName: '',
      hasSignedIn: false,
      email: this.auth.currentUser ? this.auth.currentUser.email : ''
    }
    return this.db.collection('profiles').doc(uid || this.auth.currentUser.uid).set(incomingDoc || initialDoc).then(() => {
      return incomingDoc || initialDoc
    }).catch(() => alert('Error Occurred Creating Profile'))
  }

  // memberships
  handleMembership (user) {
    return this.db.collection('memberships').doc(this.auth.currentUser.uid).get().then((doc) => {
      if (!doc.exists) {
        return this.setMembership().then((newDoc) => {
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
    const newDoc = { type: 'basic', paymentInfo: {} }
    return this.db.collection('memberships').doc(this.auth.currentUser.uid).set(incomingDoc || newDoc).then(() => {
      return incomingDoc || newDoc
    }).catch(() => window.alert('Error Occurred Creating Membership'))
  }

  // auth
  doSendVerificationEmail () {
    return this.auth.currentUser.sendEmailVerification()
  }

  doCreateUser ({ password, ...form }) {
    return this.auth.createUserWithEmailAndPassword(form.email, password)
      .then(({ user }) => {
        return this.setProfile(form, user.uid)
      })
  }

  doGetCurrentUser () {
    return this.auth
  }

  doSignIn (email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
    // .then(({ user }) => {
    //   return {user, membership: {type: "basic"}, profile: {}}
    //   // return this.handleMembership(user)
    // })
  }

  doSignOut () { return this.auth.signOut() }

  doPasswordReset (email) {
    return this.auth.sendPasswordResetEmail(email)
  }

  doPasswordUpdate (passwords) {
    return this.auth.signInWithEmailAndPassword(this.auth.currentUser.email, passwords.oldPassword)
      .then(({ user }) => {
        return this.auth.currentUser.updatePassword(passwords.newPassword)
      })
  }

  // files
  getUserFiles (resolve) {
    getFileMethod(this.auth, this.storage, resolve)
  }

  deleteFile (filename, fetchFiles) {
    deleteFileMethod(this.auth, this.storage, filename, fetchFiles)
  }

  uploadFiles (files, fetchFiles, err) {
    uploadFilesMethod(this.auth, this.storage, files, fetchFiles, err)
  }
}

export default Firebase
export { FirebaseContext, withFirebase }
