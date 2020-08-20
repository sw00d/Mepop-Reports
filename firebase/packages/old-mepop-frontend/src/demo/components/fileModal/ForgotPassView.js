import React, { useState } from 'react'

import {
  input, mainButton, label, hiddenLabel, errorText, hiddenError,
  inputContainerWithoutMargin
} from './styles/signIn.module.scss'
// import { loginSetup } from '../../../site/auth/util'

import { heading, forgotMyPass, centerHeading } from './styles/styles.module.scss'
import Loader from '../Loader'

const ForgotPassword = ({ openForgotPass, firebase, email }) => {
  const [details, add] = useState({ email })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleKeyPress = (e) => {
    e.preventDefault()
    if (e.keyCode === 13) openForgotPass(false)
  }
  const handleEmailReset = () => {
    setLoading(true)

    firebase.doPasswordReset(details.email)
      .then(() => {
        setLoading(false)
        setError(false)
        setSuccess(true)
        console.log('success')
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
        setError(translateError(error))
      })
  }
  if (success) {
    return (
      <>
        <div className={centerHeading}>Please check your email and follow instructions to reset your password.</div>
        {
          <div className={forgotMyPass}>
            <input type='button' tabIndex='0' className={label} onKeyDown={handleKeyPress} onClick={() => openForgotPass(false)} value='Back to login' />
          </div>
        }
      </>)
  }
  return (
    <>
      <div className={heading}>Reset Password</div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleEmailReset()
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
        {
          <div className={forgotMyPass}>
            <input type='button' tabIndex='0' className={label} onKeyDown={handleKeyPress} onClick={() => openForgotPass(false)} value='Back to login' />
          </div>
        }
        {
          loading
            ? <Loader customContainer={{ margin: '20px 0px 0px 0px' }} />
            : (
              <button
                type='submit'
                className={mainButton}
                disabled={!details.email.length}
                onClick={handleEmailReset}
              >
              Send Password Reset Email
              </button>
            )
        }
      </form>
    </>
  )
}

export default ForgotPassword

const translateError = (err) => {
  switch (err.code) {
    case 'auth/invalid-email':
      return 'Invalid email'
    case 'auth/user-disabled':
      return 'Account temporarily disabled. Please email mepopreports@gmail.com for support.'
    case 'auth/user-not-found':
      return 'No account found with this email.'
    case 'auth/wrong-password':
      return 'Please verify password and try again.'
    case 'auth/email-already-in-use':
      return 'An account associated with this email already exists. Try logging in.'
    case 'auth/operation-not-allowed':
      return 'Error Occurred. Please email mepopreports@gmail.com for support'
    case 'auth/weak-password':
      return err.message
    default:
      return 'Error Occurred'
  }
}
