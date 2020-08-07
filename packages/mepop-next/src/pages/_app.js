import React, { useEffect, useState } from 'react'
import theme from '../theme'
import { ThemeProvider } from 'styled-components'
import 'font-awesome/css/font-awesome.css'
import 'react-virtualized/styles.css'
import '../globalStyle.css'
import 'react-tippy/dist/tippy.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux'

// Initialize Date Picker
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../styles/datePicker.css'
import Firebase, { FirebaseContext, withFirebase } from '../firebase'

import Layout from '../components/Layout'
import Flex from '../styles/layout/Flex'
import Loading from '../styles/elements/Loading'

import store from '../store'
import { UPDATE_USER, TOGGLE_LOADING } from '../store/generalReducer'
import { fetchFiles } from '../store/actions/files'
import { useRouter } from 'next/router'

const stripePromise = loadStripe('pk_test_KHpQTtgimPnyoIoWSyW98Lac')
export const MyApp = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <FirebaseContext.Provider value={new Firebase()}>
            <Setup {...props} />
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
  useEffect(() => {
    firebase.auth.onAuthStateChanged((persistedUser) => {
      console.log('persisted user session...')
      if (persistedUser) {
        dispatch({
          type: UPDATE_USER,
          payload: persistedUser.user
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
      } else {
        console.log('no persisted user')
        router.push({ pathname: '/login' })
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
        <Component {...pageProps} />
      }

    </Layout>
  )
})
