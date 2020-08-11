import React, { useState } from 'react'
import Modal from 'react-modal'
import Switch from 'react-ios-switch'

import ButtonSwitch from '../ButtonSwitch'
import GuestView from './GuestView'
import AuthView from './AuthView'
import Instructions from './Instructions'
import LoggedInView from './LoggedInView'

import {
  container, modal, switchContainer,
  heading, closeX, label,
  topButtonContainer
} from './styles/fileModal.module.scss'
import { withFirebase } from '../../../firebase'

Modal.setAppElement('#root')

const FileModal = withFirebase(({ open, closeModal, setState, saveAndClose, state, firebase }) => {
  const [loginView, setLogin] = useState(true)
  const [guestView, setGuest] = useState(false)
  return (
    <div className={container}>
      <Modal
        className={modal}
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
      >
        <button className={closeX} onClick={closeModal}>X</button>
        <h2 className={heading}>{state.user.email ? 'Your' : 'Upload'} Files</h2>
        {
          !state.user.email ? (

            <div className={switchContainer}>
              <Switch
                checked={guestView}
                onChange={() => setGuest(!guestView)}
              />
              <div className={label}>
                Continue as guest
              </div>
            </div>
          )
            : null
        }
        {
          !guestView && !state.user.email
            ? (
              <div className={topButtonContainer}>
                <ButtonSwitch
                  bool={loginView}
                  event1={() => setLogin(true)}
                  event2={() => setLogin(false)}
                  title1='Use Saved Files'
                  title2='Sign Up'
                  big
                />
              </div>)
            : null
        }
        <Instructions />

        {
          guestView ? (
            <GuestView setState={setState} saveAndClose={saveAndClose} />)
            : loginView && !state.user.email ? (
              <AuthView setState={setState} signIn firebase={firebase} />
            )
              : !loginView && !state.user.email ? (
                <AuthView setState={setState} firebase={firebase} />
              )
                : state.user.email
                  ? (
                    <LoggedInView
                      state={state}
                      setState={setState}
                      saveAndClose={saveAndClose}
                      firebase={firebase}
                    />
                  )
                  : null
        }
      </Modal>
    </div>
  )
})

export default FileModal
