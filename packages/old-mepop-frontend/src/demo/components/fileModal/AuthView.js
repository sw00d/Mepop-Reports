import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import {
  container, input, mainButton,
  inputContainer, label, hiddenLabel, errorText, hiddenError,
  inputContainerWithoutMargin
} from './styles/signIn.module.scss'
import { loginSetup } from '../../../site/auth/util'

import { subContainer, heading, forgotMyPass } from './styles/styles.module.scss'
import Loader from '../Loader'
import ForgotPassword from './ForgotPassView'

const Auth = ({ setState, signIn, firebase }) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [details, add] = useState({ email: '', password: '' })
  const [forgotPassword, openForgotPass] = useState(false)

  const handleKeyPress = (e) => {
    e.preventDefault()
    if (e.keyCode === 13) openForgotPass(true)
  }

  const handleAuthAction = ({ email, password }) => {
    setError(null)
    setLoading(true)
    const type = signIn ? 'doSignIn' : 'doCreateUser'
    firebase[type](email, password)
      .then(({ user }) => {
        setLoading(false)
        // this token allows access to firebase stuff and cloud storage.
        user.getIdToken().then((idToken) => {
          Cookies.set('pomc', idToken)
          loginSetup(user, setState)
        })
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
        setError(translateError(error))
      })
  }
  useEffect(() => {
    setError(null)
  }, [setError, signIn])

  return (
    <div className={container}>
      <div className={subContainer}>
        {
          forgotPassword
            ? <ForgotPassword email={details.email} firebase={firebase} openForgotPass={openForgotPass} />
            : (
              <div>
                <div className={heading}>{signIn ? 'Login to access saved files' : 'Sign up to save files'}</div>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  handleAuthAction({ email: details.email, password: details.password })
                }}
                >
                  {/* {data ? <div>Logged in</div> : null} */}
                  <div className={!error ? hiddenError : errorText}>
                    {error
                      ? (
                        <span>{error}</span>
                      )

                      : <span>hidden mock error</span>}
                  </div>
                  <div className={inputContainerWithoutMargin}>
                    <label className={details.email.length ? label : hiddenLabel}>Email</label>
                    <input
                      placeholder='Email'
                      className={input}
                      type='text'
                      value={details.email}
                      onChange={(e) => add({ ...details, email: e.target.value })}
                    />
                  </div>
                  <div className={inputContainer}>
                    <label className={details.password.length ? label : hiddenLabel}>Password</label>
                    <input
                      placeholder='Password'
                      className={input}
                      type='password'
                      value={details.password}
                      onChange={(e) => add({ ...details, password: e.target.value })}
                    />
                  </div>
                  {
                    signIn ? (
                      <div className={forgotMyPass}>

                        <input
                          type='button'
                          tabIndex='0'
                          className={label}
                          onKeyDown={handleKeyPress}
                          onClick={() => openForgotPass(true)}
                          value='Forgot Password'
                        />

                      </div>)
                      : null
                  }
                  {
                    loading
                      ? <Loader customContainer={{ margin: '20px 0px 0px 0px' }} />
                      : (
                        <button
                          className={mainButton}
                          disabled={!details.email.length || !details.password.length}
                          onClick={() => {
                            handleAuthAction({ email: details.email, password: details.password })
                          }}
                        >
                          {signIn ? 'Login' : 'Sign Up & Login'}
                        </button>
                      )
                  }
                </form>
              </div>)
        }

      </div>
    </div>
  )
}
export default Auth

const translateError = (err) => {
  switch (err.code) {
    case 'auth/invalid-email':
      return 'Invalid email'
    case 'auth/user-disabled':
      return 'Account temporarily disabled. Please email samote.wood@gmail.com for support.'
    case 'auth/user-not-found':
      return 'No account found with this email.'
    case 'auth/wrong-password':
      return 'Please verify password and try again.'
    case 'auth/email-already-in-use':
      return 'An account associated with this email already exists. Try logging in.'
    case 'auth/operation-not-allowed':
      return 'Error Occurred. Please email samote.wood@gmail.com for support'
    case 'auth/weak-password':
      return err.message
    default:
      return err.message
  }
}
