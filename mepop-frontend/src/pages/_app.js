import React, { useEffect } from 'react'
// Third party
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications'
import { PageTransition } from 'next-page-transitions'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
// Initialize Date Picker
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../styles/datePicker.css'

// CSS
import 'react-virtualized/styles.css'
import 'react-tippy/dist/tippy.css'
import 'font-awesome/css/font-awesome.css'
import '../globalStyle.css'

// Util
import theme from '../theme'
import store from '../store'
import Firebase, { FirebaseContext, withFirebase } from '../firebase'
import { UPDATE_USER, TOGGLE_LOADING, NOTIFICATION } from '../store/generalReducer'
import { fetchFiles } from '../store/actions/files'
import Head from 'next/head'

// Components
import Notification from '../components/general/Notification'
import Layout from '../components/Layout'
import { setupLocationKeys } from '../store/actions/keySetup'

const stripePromise = loadStripe('pk_live_c9rOKGsnQdeKY5fmn2gYNbiL')
export const MyApp = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Reports for Depop Sellers</title>
          <meta name='description' content='A comprehensive reporting tool for Depop sellers.' />
        </Head>
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
  // const { notification, user = {} } = {}
  const { user } = useSelector(state => state.generalReducer)
  const router = useRouter()
  const dispatch = useDispatch()
  const unprotectedRoute = unprotectedRoutes.includes(router.pathname)

  useEffect(() => {
    firebase.auth.onAuthStateChanged((persistedUser) => {
      if (persistedUser) {
        console.log('Persisting user...')
        dispatch({
          type: TOGGLE_LOADING,
          payload: true
        })
        firebase.handleMembership(persistedUser, { dispatch, user }).then((userObj) => {
          dispatch({
            type: UPDATE_USER,
            payload: userObj
          })
          fetchFiles({ firebase, dispatch }, () => {
            setupLocationKeys({ firebase, dispatch }, () => {
              // after fetching files/keys, this fires
              dispatch({
                type: TOGGLE_LOADING,
                payload: false
              })
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

  useEffect(() => {
    if (user.user) {
      if (!user.user.emailVerified) {
        dispatch({
          type: NOTIFICATION,
          payload: { type: 'email', active: true }
        })
      }
    } else {
      dispatch({
        type: NOTIFICATION,
        payload: { type: 'email', active: false }
      })
    }
  }, [user.user])
  return (
    <Layout>
      <Notification />
      {
        <PageTransition timeout={300} classNames='page-transition'>
          <Component {...pageProps} key={router.pathname} />
        </PageTransition>
      }
    </Layout>
  )
})

export const unprotectedRoutes = ['/sign-in', '/sign-up', '/privacy-policy']
