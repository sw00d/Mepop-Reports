import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'

import { withFirebase } from '../../../firebase'
import { UPDATE_USER } from '../../../store/generalReducer'

import Text from '../../../styles/elements/Text'
import Button from '../../../styles/elements/Button'
import Flex from '../../../styles/layout/Flex'
import { InputField, PasswordFields } from './inputs'
import styled from 'styled-components'
import Box from '../../../styles/layout/Box'

const UserSettings = withFirebase(({ firebase }) => {
  const [loading, setLoading] = useState(false)
  const { addToast } = useToasts()
  const { user } = useSelector(state => state.generalReducer)
  const dispatch = useDispatch()
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  const plan = {
    title: user.membership.type === 'basic' ? 'Free Plan' : 'Premium Plan',
    btnText: user.membership.type === 'basic' ? 'Upgrade' : 'Manage',
    handleClick: user.membership.type === 'basic'
      ? () => firebase.startSubscription()
      : () => firebase.openCustomerPortal()
  }

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

    <Flex width={[1]}>
      <Flex flexDirection='column' width={[1]}>
        <Flex
          justifyContent='space-between'
          mb='15px'
          sx={{
            '@media only screen and (max-width: 500px)': {
              flexDirection: 'column'
            }
          }}
        >
          <Flex
            flexDirection='column'
            width={[1]}
            mr='15px'
            justifyContent='flex-end'
          >

            <Text
              color='tealDark'
              fontWeight={600}
              fontSize='20px'
              mb='30px'
              alignSelf='flex-start'
            >
             Account
            </Text>
          </Flex>
          <MembershipContainer
            alignItems='center'
            bg='greyLightest'
            p='15px'
            width='400px'
            justifyContent='space-between'
          >
            <Text fontWeight={600} fontSize='16px'>
              {plan.title}
            </Text>
            <Button
              bg='good'
              onClick={plan.handleClick}
              minWidth='100px'
              p='0px'
              height='25px'
            >
              {plan.btnText}
            </Button>
          </MembershipContainer>
        </Flex>
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
        <Flex my='10px' fontSize='13px' justifyContent='space-between'>
          <Flex>

            <Box mr='10px'>
              <i className='fa fa-envelope' />
            </Box>
            <Text>
            Need support? Email us here: <A href='mailto:mepopreports@gmail.com'>
              mepopreports@gmail.com
              </A>
            </Text>
          </Flex>
          <Text>
            <A href='/privacy-policy'>
              Privacy Policy
            </A>
          </Text>
        </Flex>
        {/* <button onClick={() => firebase.startSubscription()}>
          Start sub
        </button>
        <button onClick={() => firebase.openCustomerPortal()}>
          open portal
        </button> */}

      </Flex>
    </Flex>

  )
})

export default UserSettings

const MembershipContainer = styled(Flex)`
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  border-left: 3px solid ${({ theme }) => theme.colors.tealDark};
  max-width: 100%;
  min-width: 212px;
`
const A = styled.a`
  color: ${({ theme }) => theme.colors.greyDarkest};
`
