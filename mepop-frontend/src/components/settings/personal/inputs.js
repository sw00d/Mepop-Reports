import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import Button from '../../../styles/elements/Button'
import Flex from '../../../styles/layout/Flex'
import Input from '../../../styles/elements/Input'
import { useSelector } from 'react-redux'

export const InputField = ({ onClick, user, defaultValue, label, btnText, ...inputProps }) => {
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
        mb='10px'
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

export const PasswordFields = ({ onClick, user, btnText, passwordSuccess, isLoading, ...inputProps }) => {
  const [btnIsOpen, openBtn] = useState(false)
  const [passwords, setPasswords] = useState({
    newPassword: '',
    oldPassword: ''
  })
  useEffect(() => {
    if (passwordSuccess && btnIsOpen) {
      openBtn(false)
    }
  })

  const isCloseMode = !passwords.newPassword || !passwords.oldPassword
  return (
    <Flex alignItems='flex-end' flexDirection={btnIsOpen ? 'column' : 'row'} width={[1]} mt='10px'>

      {!btnIsOpen ? (
        <Button
          bg='greyLightest'
          color='primary'
          p='10px'
          pr='8px'
          mr='10px'
          mb='10px'
          width='50px'
          onClick={() => {
            openBtn(true)
          }}
        >
          {
            <i
              className='fa fa-edit'
            />
          }
        </Button>
      ) : null}

      <Input
        width={[1]}
        mb='4px'
        pl={btnIsOpen ? '0px' : null}
        value={!btnIsOpen ? 'fakepassword' : passwords.oldPassword}
        disabled={!btnIsOpen}
        hideEye={!btnIsOpen}
        onChange={(e) => {
          setPasswords({ ...passwords, oldPassword: e.target.value })
        }}
        label={btnIsOpen ? 'Old Password' : 'Password'}
        type='password'
        {...inputProps}
      />
      {btnIsOpen ? (
        <>
          <Input
            width={[1]}
            mb='4px'
            pl={!inputProps.disabled ? '0px' : null}
            value={passwords.newPassword}
            onChange={(e) => {
              setPasswords({ ...passwords, newPassword: e.target.value })
            }}
            label='New Password'
            type='password'
            {...inputProps}
          />

          <Button
            bg={isCloseMode ? 'greyLightest' : null}
            color={isCloseMode ? 'primary' : null}
            p='10px'
            pr='8px'
            mr='10px'
            isLoading={isLoading}
            mb='4px'
            width='100%'
            onClick={() => {
              if (passwords.newPassword && passwords.oldPassword) {
                onClick(passwords)
              } else {
                openBtn(false)
              }
            }}
          >
            <FadeIn>{isCloseMode ? 'Close' : btnText}</FadeIn>
          </Button>
        </>
      ) : null}
    </Flex>
  )
}

export const EmailFields = ({ label, btnText, success, onClick, isLoading }) => {
  const { user } = useSelector(state => state.generalReducer)

  const [btnIsOpen, openBtn] = useState(false)
  const [info, setInfo] = useState({
    email: user.profile.email,
    password: ''
  })

  useEffect(() => {
    if (success && btnIsOpen) {
      setInfo({ email: user.profile.email, password: '' })
      openBtn(false)
    }
  })

  useEffect(() => {
    setInfo({ ...info, email: user.profile.email })
  }, [user.profile.email])

  const isCloseMode = !info.email || !info.password

  return (
    <Flex alignItems='flex-end' flexDirection={btnIsOpen ? 'column' : 'row'} width={[1]} mt='10px'>

      {!btnIsOpen ? (
        <Button
          bg='greyLightest'
          color='primary'
          p='10px'
          pr='8px'
          mr='10px'
          mb='10px'
          width='50px'
          onClick={() => {
            openBtn(true)
          }}
        >
          {
            <i
              className='fa fa-edit'
            />
          }
        </Button>
      ) : null}

      <Input
        width={[1]}
        mb='4px'
        pl={btnIsOpen ? '0px' : null}
        value={info.email}
        disabled={!btnIsOpen}
        hideEye={!btnIsOpen}
        onChange={(e) => {
          setInfo({ ...info, email: e.target.value })
        }}
        label={btnIsOpen ? 'New Email' : 'Email'}
        alwaysShowLabel

      />
      {btnIsOpen ? (
        <>
          <Input
            width={[1]}
            mb='4px'
            pl={btnIsOpen ? '0px' : null}
            label='Password'
            type='password'
            onChange={(e) => {
              setInfo({ ...info, password: e.target.value })
            }}
            alwaysShowLabel
          />
          <Button
            bg={isCloseMode ? 'greyLightest' : null}
            color={isCloseMode ? 'primary' : null}
            p='10px'
            pr='8px'
            mr='10px'
            isLoading={isLoading}
            mb='4px'
            width='100%'
            onClick={() => {
              if (info.email && info.password) {
                onClick(info)
              } else {
                openBtn(false)
              }
            }}
          >
            <FadeIn>{isCloseMode ? 'Close' : btnText}</FadeIn>
          </Button>
        </>
      ) : null}
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
