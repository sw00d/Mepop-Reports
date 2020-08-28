
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/analytics'

import FirebaseContext, { withFirebase } from './context'
import { getFileMethod, deleteFileMethod, uploadFilesMethod } from './methods/files'

const isProduction = process.env.NODE_ENV === 'production'

// Stripe specifics
export const stripeKey = isProduction ? 'pk_live_c9rOKGsnQdeKY5fmn2gYNbiL' : 'pk_test_KHpQTtgimPnyoIoWSyW98Lac'
const stripePrice = isProduction ? 'price_1HGtWiI6QogDwA7GZcdXzmxg' : 'price_1HAkcLI6QogDwA7GDj1WDk1z'

const firebaseConfig = isProduction ? {
  apiKey: 'AIzaSyB04NiM6bapVV6Jd2ZRw5vUVLy3Cu7o0x0',
  authDomain: 'mepop-app.firebaseapp.com',
  databaseURL: 'https://mepop-app.firebaseio.com',
  projectId: 'mepop-app',
  storageBucket: 'mepop-app.appspot.com',
  messagingSenderId: '619885550344',
  appId: '1:619885550344:web:28a8d730b1ca91a5f6aabd',
  measurementId: 'G-WM4LPLQMKX'
} : {
  apiKey: 'AIzaSyD1hcZCd-_RgDYrwmYK2l77kkSj6-UaPuw',
  authDomain: 'mepop-dev.firebaseapp.com',
  databaseURL: 'https://mepop-dev.firebaseio.com',
  projectId: 'mepop-dev',
  storageBucket: 'mepop-dev.appspot.com',
  messagingSenderId: '861002171305',
  appId: '1:861002171305:web:079a2b115da7246d6e7ab8',
  measurementId: 'G-8JMFKFVKS9'
}

class Firebase {
  constructor () {
    try {
      firebase.initializeApp(firebaseConfig)
      if (isProduction) firebase.analytics()
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
    const createStripeClientFunction = this.functions.httpsCallable('createStripeClient')
    const { email, uid } = this.auth.currentUser
    createStripeClientFunction({ email, uid }).then(() => {
      console.log('Created Stripe Client')
    })
  }

  async openCustomerPortal (res) {
    const functionRef = firebase
      .app()
      .functions('us-central1')
      .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink')
    const { data } = await functionRef({ returnUrl: window.location.origin + '/settings' })
    if (res) res()
    window.location.assign(data.url)
  }

  async startSubscription (successUrl = window.location.origin + '/settings') {
    const docRef = await this.db
      .collection('stripeClients')
      .doc(this.auth.currentUser.uid)
      .collection('checkout_sessions')
      .add({
        price: stripePrice,
        success_url: successUrl,
        cancel_url: window.location.origin + '/settings'
      })

    // Wait for the CheckoutSession to get attached by the extension
    docRef.onSnapshot((snap) => {
      if (snap.data) {
        const { sessionId } = snap.data()
        if (sessionId) {
          // We have a session, let's redirect to Checkout
          // Init Stripe
          const stripe = window.Stripe(stripeKey)
          stripe.redirectToCheckout({ sessionId })
        }
      } else {
        window.alert(
          'Oh no! It looks like an error occurred. Please email mepopreports@gmail.com for support.'
        )
      }
    })
  }

  // profiles
  handleProfile (userAndMembership) {
    return this.db.collection('profiles').doc(this.auth.currentUser.uid).get().then((doc) => {
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

  handleMembership (user, cb) {
    return this.db.collection('stripeClients')
      .doc(this.auth.currentUser.uid)
      .collection('subscriptions')
      .where('status', 'in', ['trialing', 'active'])
      .onSnapshot(async (snapshot) => {
        if (!snapshot.empty) {
          // In this implementation we only expect one active or trialing subscription to exist.
          this.handleProfile({ user, membership: { type: 'premium' } }).then((newUserObject) => {
            cb(newUserObject)
          })
        } else {
          this.handleProfile({ user, membership: { type: 'basic' } }).then((newUserObject) => {
            cb(newUserObject)
          })
        }
      })
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
    uploadFilesMethod(this.auth, this.storage, files, fetchFiles, err, this.db)
  }
}

export default Firebase
export { FirebaseContext, withFirebase }
