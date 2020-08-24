import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { withFirebase } from '../../firebase'

import Flex from '../../styles/layout/Flex'
import Card from '../../styles/elements/Card'
import Input from '../../styles/elements/Input'
import Form from '../../styles/elements/Form'
import Button from '../../styles/elements/Button'
import Text from '../../styles/elements/Text'
import VertDivider from '../../styles/elements/VertDivider'
import Box from '../../styles/layout/Box'
import RightSection from './RightSection'
import ForgotPass from './ForgotPass'

const Login = withFirebase(({ firebase }) => {
  const { user } = useSelector(state => state.generalReducer)
  const router = useRouter()
  const [form, updateForm] = useState({ email: '', password: '' })
  const [isLoading, setLoading] = useState(false)
  const [modalIsOpen, openModal] = useState(false)
  const [error, setError] = useState('')
  const noUser = JSON.stringify(user) === '{}'
  useEffect(() => {
    if (!noUser) {
      router.push('/dashboard')
    }
  }, [])

  const login = () => {
    setLoading(true)
    setError('')

    firebase.doSignIn(form.email, form.password).then(() => {
      router.push({ pathname: '/dashboard' })
      setLoading(false)
    }).catch((err) => {
      setError(translateError(err))
      setLoading(false)
    })
  }
  if (!noUser) return null
  return (
    <Flex alignItems='center' width={[1]} maxWidth='1200px'>
      <ForgotPass modalIsOpen={modalIsOpen} onRequestClose={() => openModal(false)} email={form.email} />
      <Card p={30} pr='0px' justifyContent='flex-start' width={[1]}>
        <Text fontSize={30} fontWeight={600} color='primary' width={[1]} mb={2}><i>Mepop Reports</i></Text>
        <Text fontSize={18} fontWeight={500} color='greyDark' width={[1]} mb={20}>A tool for Depop sellers.</Text>
        <Flex
          width={[1]}
          sx={{
            '@media only screen and (max-width: 650px)': {
              flexDirection: 'column'
            }
          }}
        >

          <Flex
            flexDirection='column'
            width={[1]}
            sx={{
              '@media only screen and (max-width: 650px)': {
                paddingRight: '20px !important',
                zIndex: 2
              }
            }}
          >
            <Form>
              <Text fontSize='14px' color='depopRed'>{error}</Text>
              <Flex mb='15px'>
                <Input
                  className='test_target_email'
                  placeholder='Email'
                  label='Email'
                  bg='greyDisabled'
                  type='email'
                  borderRadius='4px'
                  color='white'
                  value={form.email}
                  onKeyPress={e => e.key === 'Enter' ? login() : null}
                  onChange={(e) => {
                    updateForm({ ...form, email: e.target.value })
                  }}
                />
              </Flex>
              <Input
                className='test_target_password'
                placeholder='Password'
                label='Password'
                bg='greyDisabled'
                type='password'
                borderRadius='4px'
                color='white'
                value={form.password}
                onKeyPress={e => e.key === 'Enter' ? login() : null}
                onChange={(e) => {
                  updateForm({ ...form, password: e.target.value })
                }}
              />
              <Button
                className='test_target_signinBtn'
                m='2px'
                isLoading={isLoading}
                type='button'
                width={[1]}
                mt='30px'
                height='40px'
                onClick={login}
                bg='primary'
                color='white'
                sx={{ display: 'flex' }}
              >
                <Box mr='10px'>
                  <i className='fa fa-sign-in' />
                </Box>
                Sign In
              </Button>
            </Form>
            <Button
              mt='10px'
              fontSize='13px'
              bg='transparent'
              color='greyDarkest'
              width='135px'
              justifyContent='flex-start'
              textAlign='left'
              p='0px'
              pl='1px'
              height='20px'
              type='button'
              onClick={() => openModal(!modalIsOpen)}
            >
              Forgot Password
            </Button>
          </Flex>
          <Flex
            m='0px 0px 0px 30px'
            sx={{
              '@media only screen and (max-width: 650px)': {
                display: 'none'
              }
            }}
          >
            <VertDivider />
          </Flex>
          <Flex
            flexDirection='column'
            width={[1]}
            sx={{
              '@media only screen and (max-width: 650px)': {
                marginTop: '20px'
              }
            }}
          >
            <RightSection />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
})

export default Login

const translateError = (err) => {
  switch (err.code) {
    case 'auth/invalid-email':
      return 'Please ensure that your email is correct.'
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
      return err.message
  }
}
