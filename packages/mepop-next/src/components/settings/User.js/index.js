import Flex from '../../../styles/layout/Flex'
import Input from '../../../styles/elements/Input'
import Form from '../../../styles/elements/Form'
import Card from '../../../styles/elements/Card'
import { useSelector, useDispatch } from 'react-redux'
import Text from '../../../styles/elements/Text'
import Button from '../../../styles/elements/Button'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { CreditCard } from '../../../styles/elements/CreditCard'
import { withFirebase } from '../../../firebase'
import { UPDATE_USER } from '../../../store/generalReducer'

const UserSettings = withFirebase(({ firebase }) => {
  const { user } = useSelector(state => state.generalReducer)
  const dispatch = useDispatch()
  const updateProfile = (key, value) => {
    const newProfile = { ...user.profile }
    newProfile[key] = value
    firebase.setProfile(newProfile).then(() => {
      console.log('updated')
      dispatch({
        type: UPDATE_USER,
        payload: { ...user, profile: newProfile }
      })
    }).catch(() => {
      console.log('error')
    })
  }
  return (
    <Flex alignItems='center' width={[1]} flexWrap='wrap'>
      <Card p='40px' width={[0.5]} minWidth='250px' height='100%'>
        <Text fontWeight={600} fontSize='20px' mb='15px' alignSelf='flex-start'>Personal</Text>
        <InputField
          onClick={(val) => updateProfile('lastName', val)}
          objKey='name'
          label='First Name'
          btnText='Save'
          defaultValue={user.profile.firstName}
          placeholder='i.e. Harry'
          alwaysShowLabel
        />
        <InputField
          onClick={(val) => updateProfile('firstName', val)}
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
        <InputField
          onClick={() => null}
          objKey='password'
          label='Password'
          btnText='Save'
          defaultValue='fakepassword'
          type='password'
          disabled
          alwaysShowLabel
        />
      </Card>
      <Card p='40px' width={[0.5]} minWidth='250px'>
        <Form>

          <Text fontWeight={600} fontSize='20px' mb='15px' alignSelf='flex-start'>Payment Info</Text>
          <CreditCard />
          <Flex width={[1]} mt={10}>

            <Input
              alwaysShowLabel
              bg='greyDisabled'
              borderRadius
              label='First Name'
              pl='5px'
              boxProps={{ mt: '10px', mr: '5px' }}
            />
            <Input
              alwaysShowLabel
              bg='greyDisabled'
              borderRadius
              label='Last Name'
              pl='5px'
              boxProps={{ mt: '10px' }}
            />
          </Flex>
          <Flex width={[1]}>
            <Input
              alwaysShowLabel
              bg='greyDisabled'
              borderRadius
              label='Street Address'
              pl='5px'
              boxProps={{ mt: '10px', mr: '5px' }}

            />
            <Input
              alwaysShowLabel
              bg='greyDisabled'
              borderRadius
              label='Town/City'
              pl='5px'
              boxProps={{ mt: '10px' }}
            />
          </Flex>
          <Flex width={[1]}>
            <Input
              alwaysShowLabel
              bg='greyDisabled'
              borderRadius
              label='State/Country'
              pl='5px'
              boxProps={{ mt: '10px', mr: '5px' }}

            />
            <Input
              alwaysShowLabel
              bg='greyDisabled'
              borderRadius
              label='Postal/Zip Code'
              pl='5px'
              type='number'
              boxProps={{ mt: '10px', mr: '5px' }}

            />
            <Input
              alwaysShowLabel
              bg='greyDisabled'
              borderRadius
              label='Country'
              pl='5px'
              boxProps={{ mt: '10px' }}

            />
          </Flex>
        </Form>
      </Card>
    </Flex>
  )
})

export default UserSettings

const InputField = ({ onClick, user, defaultValue, label, btnText, ...inputProps }) => {
  const [btnIsOpen, openBtn] = useState(false)
  const [value, setValue] = useState(defaultValue)
  return (
    <Flex alignItems='flex-end' width={[1]}>
      <Button
        bg='greyLightest'
        color='primary'
        p='10px'
        pr='8px'
        mr='10px'
        mb='4px'
        width={!btnIsOpen ? '50px' : '100px'}
        onClick={() => {
          if (btnIsOpen && value !== defaultValue) {
            onClick(value)
          }
          openBtn(!btnIsOpen)
        }}
      >
        {
          !btnIsOpen ? (
            <i
              className='fa fa-edit'
            />
          ) : <FadeIn>{btnText}</FadeIn>
        }
      </Button>
      <Input
        width={[1]}
        mb='4px'
        pl={!inputProps.disabled ? '0px' : null}
        label={label}
        value={value}
        onKeyPress={({ key }) => {
          if (key === 'Enter') {
            if (value !== defaultValue) {
              onClick(value)
              openBtn(!btnIsOpen)
            }
          }
        }}

        defaultValue={defaultValue}
        onChange={(e) => {
          setValue(e.target.value)
          if (!btnIsOpen) openBtn(true)
          if (e.target.value === defaultValue) {
            openBtn(false)
          }
        }}
        {...inputProps}
      />
    </Flex>
  )
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const FadeIn = styled.span`
    opacity: 0;
    animation: .2s ${fadeIn} linear 1;
    animation-fill-mode: forwards;
`
