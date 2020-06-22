import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Cookies from 'js-cookie'

import Notification from '../components/Notification'
import PrivacyPolicy from '../../privacyPolicy'
import Header from './Header'
import About from './About'
import MainApp from '../../demo'
import { coreContainer } from '../styles/index.module.scss'
import { withFirebase } from '../../firebase'
import { NoneFound } from '../../demo/'
const Core = withFirebase(({ firebase }) => {
  const initialState = {
    data: {},
    notification: {},
    files: [],
    user: {},
    queryData: [] // This exists globally so the check marks will persist when closing/reopening file modal
  }
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const updateState = (newState) => {
    setState({ ...state, ...newState })
  }
  useEffect(() => {
    firebase.auth.onAuthStateChanged((persistedUser) => {
      if (persistedUser && JSON.stringify(state.user) === '{}') {
        // User is signed in.
        updateState({
          user: {
            email: persistedUser.email,
            fullUser: persistedUser
          }
        })
        setLoading(false)
      } else {
        // No user is signed in.
        updateState({ user: {} })
        setLoading(false)
      }
    })
  }, [])
  return (
    <div className={coreContainer}>

      <Router>
        <Header />
        <Switch>
          <Route path='/privacy-policy'>
            <PrivacyPolicy />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            {
              loading ? <NoneFound msg='Setting up...' />
                : <MainApp state={state} setState={updateState} />
            }

            {
              state.notification.msg
                ? (
                  <Notification
                    notification={state.notification}
                    close={() => updateState({ notification: { disabled: true } })}
                  />
                )
                : null
            }
          </Route>
        </Switch>
      </Router>
    </div>

  )
})

export default Core

const GET_USER = `
 { 
   getUser {
    id
    email
    files
    account {
      type
    }
  }
}
`
const fetchUser = (updateState, setShow) => {
  window.fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('pomc')}`
    },
    body: JSON.stringify({
      query: GET_USER
    })
  }).then(response => response.json())
    .then((res) => {
      if (res.data) {
        updateState({ user: res.data.getUser || {} })
      }
      setShow(true)
    })
    .catch(err => console.error(err))
}
