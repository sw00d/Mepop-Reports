import React, { useEffect, useState } from 'react'
// Third party
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { PageTransition } from 'next-page-transitions'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CookieConsent from 'react-cookie-consent'
import withGA from 'next-ga'

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
import Firebase, { FirebaseContext, withFirebase, stripeKey } from '../firebase'
import { UPDATE_USER, TOGGLE_LOADING, NOTIFICATION } from '../store/generalReducer'
import { fetchFiles } from '../store/actions/files'
import Head from 'next/head'

// Components
import Notification from '../components/general/Notification'
import Button from '../styles/elements/Button'
import Flex from '../styles/layout/Flex'
import Layout from '../components/Layout'
import { setupLocationKeys } from '../store/actions/keySetup'
import { routes } from '../components/routes'

const isProduction = process.env.NODE_ENV === 'production'
const stripePromise = loadStripe(stripeKey)

// Main Root
export const MyApp = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Reports for Depop Sellers</title>
          <meta name='description' content='A comprehensive reporting tool for Depop sellers.' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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

// This adds Google Analytics to the app
export default withGA('UA-162984588-1', Router)(MyApp)

// This persists user sessions and sets up app from there.
const Setup = withFirebase(({ Component, pageProps, firebase }) => {
  const { user } = useSelector(state => state.generalReducer)
  const router = useRouter()
  const dispatch = useDispatch()
  const route = routes[router.pathname] || routes['/']
  const unprotectedRoute = route.unprotectedRoute

  useEffect(() => {
    firebase.auth.onAuthStateChanged((persistedUser) => {
      if (persistedUser) {
        console.log('Persisting user...')
        dispatch({
          type: TOGGLE_LOADING,
          payload: true
        })
        firebase.handleMembership(persistedUser, (userObj) => {
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
      {
        isProduction ? (
          <>
            <CookieConsent
              style={{ right: 'unset', left: 'unset', width: 'unset' }}
              buttonStyle={{ background: theme.colors.warning }}
              location='bottom'
            >
            By using this site, you are agreeing to our <a href='/privacy-policy' style={{ color: 'white' }}>Privacy Policy</a>.
            </CookieConsent>
            <Notification />
          </>
        ) : null
      }
      {
        <PageTransition timeout={300} classNames='page-transition'>
          <Component {...pageProps} key={router.pathname} />
        </PageTransition>
      }
    </Layout>
  )
})

const SaleToast = ({ action }) => {
  const [btnLoading, setBtnLoading] = useState(false)

  return (
    <Flex flexDirection='column'>
      <div>
        We're having a sale on <i>Premium</i> 🎉 You can now enjoy all <i>Premium</i> features for just <strong>$4.99/month</strong>!
      </div>
      <Button
        onClick={() => { setBtnLoading(true); action() }}
        p='0px'
        mt='4px'
        bg='blue'
        height='25px'
        isLoading={btnLoading}
      >
    🌟 Upgrade Now! 🌟
      </Button>
    </Flex>)
}
