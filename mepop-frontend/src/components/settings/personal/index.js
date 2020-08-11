import { useSelector, useDispatch } from 'react-redux'

import Text from '../../../styles/elements/Text'
import { withFirebase } from '../../../firebase'
import { UPDATE_USER } from '../../../store/generalReducer'
import { useToasts } from 'react-toast-notifications'
import { InputField, PasswordFields } from './inputs'
import { useState } from 'react'

const UserSettings = withFirebase(({ firebase }) => {
  const [loading, setLoading] = useState(false)
  const { addToast } = useToasts()
  const { user } = useSelector(state => state.generalReducer)
  const dispatch = useDispatch()
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const updateProfile = (key, value) => {
    const newProfile = { ...user.profile }
    newProfile[key] = value
    setLoading(true)
    firebase.setProfile(newProfile).then(() => {
      addToast(<div>Successfully Updated</div>, {
        appearance: 'success',
        autoDismiss: true
      })
      dispatch({
        type: UPDATE_USER,
        payload: { ...user, profile: newProfile }
      })
      setLoading(false)
    }).catch((err) => {
      console.log('error', err)
      addToast(<div>Oops! Something went wrong!</div>, {
        appearance: 'error',
        autoDismiss: true
      })
      setLoading(false)
    })
  }
  const updatePass = (passwords) => {
    setLoading(true)
    firebase.doPasswordUpdate(passwords).then(() => {
      setPasswordSuccess(true)
      setLoading(false)
      addToast(<div>Successfully Updated Password</div>, {
        appearance: 'success',
        autoDismiss: true
      })
    }).catch((err) => {
      console.log('error', err)
      setPasswordSuccess(false)
      setLoading(false)
      addToast(<div>{err.message}</div>, {
        appearance: 'error',
        autoDismiss: true
      })
    })
  }
  return (
    <>
      <Text fontWeight={600} fontSize='20px' mb='15px' alignSelf='flex-start'>Personal</Text>
      <InputField
        onClick={(val) => updateProfile('firstName', val)}
        objKey='name'
        label='First Name'
        btnText='Save'
        defaultValue={user.profile.firstName}
        placeholder='i.e. Harry'
        alwaysShowLabel
      />
      <InputField
        onClick={(val) => updateProfile('lastName', val)}
        objKey='name'
        label='Last Name'
        btnText='Save'
        defaultValue={user.profile.lastName}
        placeholder='i.e. Styles'
        alwaysShowLabel
      />
      <InputField
        onClick={(val) => updateProfile('depopShopName', val)}
        objKey='depopShopName'
        label='Depop Shop Name'
        btnText='Save'
        placeholder='i.e. @marguillen'
        defaultValue={user.profile.depopShopName}
        alwaysShowLabel
      />
      <PasswordFields
        onClick={updatePass}
        btnText='Update Password'
        passwordSuccess={passwordSuccess}
        alwaysShowLabel
        isLoading={loading}
      />
    </>

  )
})

export default UserSettings
