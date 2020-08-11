import React, { useEffect } from 'react'
import theme from '../theme'
import { ThemeProvider } from 'styled-components'
import 'font-awesome/css/font-awesome.css'
import 'react-virtualized/styles.css'
import '../globalStyle.css'
import 'react-tippy/dist/tippy.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Provider as ReduxProvider, useDispatch } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications'
import { PageTransition } from 'next-page-transitions'

// Initialize Date Picker
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../styles/datePicker.css'
import Firebase, { FirebaseContext, withFirebase } from '../firebase'

import Layout from '../components/Layout'

import store from '../store'
import { UPDATE_USER, TOGGLE_LOADING } from '../store/generalReducer'
import { fetchFiles } from '../store/actions/files'
import { useRouter } from 'next/router'

const stripePromise = loadStripe('pk_live_c9rOKGsnQdeKY5fmn2gYNbiL')
export const MyApp = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <FirebaseContext.Provider value={new Firebase()}>
            <ToastProvider>
              <Setup {...props} />
            </ToastProvider>
          </FirebaseContext.Provider>
        </ReduxProvider>
      </ThemeProvider>
    </Elements>

  )
}

export default MyApp

// This persists user sessions and sets up app from there.
const Setup = withFirebase(({ Component, pageProps, firebase }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const unprotectedRoute = router.pathname === '/sign-in' || router.pathname === '/sign-up'

  useEffect(() => {
    firebase.auth.onAuthStateChanged((persistedUser) => {
      const isNewUser = persistedUser ? persistedUser.metadata.creationTime === persistedUser.metadata.lastSignInTime : true
      if (persistedUser && !isNewUser) {
        firebase.handleMembership(persistedUser).then((userObj) => {
          dispatch({
            type: UPDATE_USER,
            payload: userObj
          })
          dispatch({
            type: TOGGLE_LOADING,
            payload: true
          })
          fetchFiles({ firebase, dispatch }, () => {
            // after fetching files do this
            dispatch({
              type: TOGGLE_LOADING,
              payload: false
            })
          })
        })
      } else {
        if (!unprotectedRoute) router.push({ pathname: '/sign-in' })
        dispatch({
          type: UPDATE_USER,
          payload: {}
        })
        dispatch({
          type: TOGGLE_LOADING,
          payload: false
        })
      }
    })
  }, [])
  return (
    <Layout>
      {
        <PageTransition timeout={300} classNames='page-transition'>
          <Component {...pageProps} />
        </PageTransition>
      }

    </Layout>
  )
})
