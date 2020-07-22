import React, { useEffect, useState } from 'react'
import theme from '../theme'
import { ThemeProvider } from 'styled-components'
import 'font-awesome/css/font-awesome.css'
import 'react-virtualized/styles.css'
import '../globalStyle.css'
import 'react-tippy/dist/tippy.css'
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux'

import Firebase, { FirebaseContext, withFirebase } from '../firebase'
import Layout from '../components/Layout'
import Flex from '../styles/layout/Flex'
import Loading from '../styles/elements/Loading'

import store from '../store'
import { UPDATE_USER } from '../store/generalReducer'
import { fetchFiles } from '../store/actions/files'
import { setupLocationKey } from '../store/actions/keySetup'
// import { processFiles } from '../dataProcessing'

export const MyApp = (props) => {
  return (
    <ReduxProvider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <Setup {...props} />
      </FirebaseContext.Provider>
    </ReduxProvider>

  )
}

export default MyApp

// This persists user sessions and sets up app from there.
const Setup = withFirebase(({ Component, pageProps, firebase }) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.generalReducer)
  useEffect(() => {
    firebase.doSignIn('samote.wood@gmail.com', '83815Mso').then((user) => {
      dispatch({
        type: UPDATE_USER,
        payload: user
      })
      fetchFiles(user, { firebase, dispatch }, () => setLoading(false))
    })
    // firebase.auth.onAuthStateChanged((persistedUser) => {
    //   console.log(persistedUser)
    //   // if (persistedUser && JSON.stringify(state.user) === '{}') {
    //   //   // User is signed in.
    //   //   updateState({
    //   //     user: {
    //   //       email: persistedUser.email,
    //   //       fullUser: persistedUser
    //   //     }
    //   //   })
    //   //   setLoading(false)
    //   // } else {
    //   //   // No user is signed in.
    //   //   updateState({ user: {} })
    //   //   setLoading(false)
    //   // }
    // })
  }, [])
  if (JSON.stringify(user) === '{}') return null
  return (

    <ThemeProvider theme={theme}>
      <Layout>
        {
          !loading
            ? <Component {...pageProps} />
            : (
              <Flex justifyContent='center' height='90vh' alignItems='center'>
                <Loading />
              </Flex>
            )
        }
      </Layout>
    </ThemeProvider>
  )
})
