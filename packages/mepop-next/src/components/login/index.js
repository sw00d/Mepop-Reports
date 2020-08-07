import { useState, useEffect } from 'react'
import { withFirebase } from '../../firebase'

import Flex from '../../styles/layout/Flex'
import Card from '../../styles/elements/Card'
import Input from '../../styles/elements/Input'
import Form from '../../styles/elements/Form'
import Button from '../../styles/elements/Button'
import Text from '../../styles/elements/Text'
import VertDivider from '../../styles/elements/VertDivider'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_USER, TOGGLE_LOADING } from '../../store/generalReducer'
import { fetchFiles } from '../../store/actions/files'
import { useRouter } from 'next/router'
import LearnMore from './LearnMore'

const Login = withFirebase(({ firebase }) => {
  const { user } = useSelector(state => state.generalReducer)
  const router = useRouter()
  const dispatch = useDispatch()
  const [form, updateForm] = useState({ email: 'samote.wood@gmail.com', password: '83815Mso' })
  const [isLoading, setLoading] = useState(false)
  const noUser = JSON.stringify(user) === '{}'
  useEffect(() => {
    console.log(user)
    if (!noUser) {
      console.log('pushing to dash')
      router.push('/dashboard')
    }
  }, [])

  const login = () => {
    setLoading(true)
    firebase.doSignIn(form.email, form.password).then(({ user }) => {
      router.push({ pathname: '/dashboard' })
      dispatch({
        type: UPDATE_USER,
        payload: user
      })
      dispatch({
        type: TOGGLE_LOADING,
        payload: true
      })
      fetchFiles({ firebase, dispatch }, () => {
        // after fetching files do this
        dispatch({
          type: TOGGLE_LOADING,
          payload: false
        })
      })
    }).catch(() => {
      setLoading(false)
    })
  }
  if (!noUser) return null
  return (
    <Flex alignItems='center' width={[0.5, 0.5, 0.8, 0.9]} minWidth='1000px' maxWidth='98%'>
      <Card p={30} pr='0px' justifyContent='flex-start'>
        <Text fontSize={30} fontWeight={600} color='primary' width={[1]} mb={2}><i>Mepop Reports</i></Text>
        <Text fontSize={18} fontWeight={500} color='greyDark' width={[1]} mb={20}>A tool for Depop Sellers.</Text>
        <Flex width={[1]}>

          <Flex flexDirection='column' width={[1]}>
            <Form>

              <Input
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
              <Input
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
                isLoading={isLoading}
                type='button'
                width={[1]}
                mt='20px'
                height='40px'
                onClick={login}
              >Login
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
              height='15px'
            >
              Forgot Password
            </Button>
          </Flex>
          <Flex m='0px 30px'>
            <VertDivider />
          </Flex>
          <LearnMore />
        </Flex>
      </Card>
    </Flex>
  )
})

export default Login
