import { useState, useEffect } from 'react'
import { withFirebase } from '../../firebase'
import Link from 'next/link'

import Flex from '../../styles/layout/Flex'
import Card from '../../styles/elements/Card'
import Input from '../../styles/elements/Input'
import Form from '../../styles/elements/Form'
import Button from '../../styles/elements/Button'
import Text from '../../styles/elements/Text'
import HorzDivider from '../../styles/elements/HorzDivider'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useToasts } from 'react-toast-notifications'

const initVals = {
  email: '',
  firstName: '',
  lastName: '',
  depopShopName: '',
  password: ''

}
const SignUp = withFirebase(({ firebase }) => {
  const { user } = useSelector(state => state.generalReducer)
  const { addToast } = useToasts()
  const router = useRouter()
  const [form, updateForm] = useState(initVals)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const noUser = JSON.stringify(user) === '{}'
  useEffect(() => {
    if (!noUser) {
      router.push('/dashboard')
    }
  }, [])

  const signUp = () => {
    setError('')
    setLoading(true)
    firebase.doCreateUser(form)
      .then((user) => {
        addToast(<div>Successfully signed up as {form.email}.</div>, {
          appearance: 'success',
          autoDismiss: true
        })
        router.push('/sign-in')
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }
  const allFieldsVerified = () => {
    for (const field of fields) {
      if (!field.validate(form[field.ref])) {
        return false
      }
    }
    return true
  }
  const btnDisabled = !allFieldsVerified()
  return (
    <Flex alignItems='center' width={[1]} maxWidth='500px' mt='50px'>
      <Card p={30} justifyContent='flex-start' width={[1]}>
        <Text fontSize={30} fontWeight={600} color='primary' width={[1]} mb={2}><i>Mepop Reports</i></Text>
        <Text fontSize={18} fontWeight={500} color='greyDark' width={[1]}>
          The most popular reporting tool for Depop sellers.
        </Text>
        <HorzDivider my='10px' />
        <Flex alignItems='center' justifyContent='flex-start' width={[1]} mb='10px'>
          <Text fontSize={15} fontWeight={500} color='greyDark' mr='5px'>Already a user?</Text>
          <Link href='sign-in'>
            <Button
              fontSize='13px'
              fontWeight='600'
              sx={{ textDecoration: 'underline' }}
              justifyContent='flex-start'
              textAlign='left'
              bg='transparent'
              color='primary'
              p='0px'
              height='25px'
              type='button'

            >
            Sign In
            </Button>
          </Link>
        </Flex>
        <Flex
          width={[1]}
        >

          <Flex
            flexDirection='column'
            width={[1]}
          >
            <Form>
              <Text fontSize='14px' color='depopRed'>{error}</Text>
              {
                fields.map(({ label, validate, type, ref }, i) => {
                  return (

                    <Flex mb='5px' key={i}>
                      <InputField
                        placeholder={label}
                        label={label}
                        bg='greyDisabled'
                        validate={validate}
                        type={type}
                        borderRadius='4px'
                        value={form[ref]}
                        // onKeyPress={e => e.key === 'Enter' ? login() : null}
                        onChange={(e) => {
                          updateForm({ ...form, [ref]: e.target.value })
                        }}
                      />
                    </Flex>
                  )
                })
              }

              <Button
                m='2px'
                isLoading={isLoading}
                type='button'
                width={[1]}
                mt='30px'
                height='40px'
                disabled={btnDisabled}
                bg={btnDisabled ? 'greyDisabled' : null}
                color={btnDisabled ? 'greyLight' : null}
                onClick={signUp}
              >
                Sign Up
              </Button>

            </Form>

          </Flex>

        </Flex>
      </Card>
    </Flex>
  )
})

export default SignUp

// util component and functions

const InputField = ({ validate, ...props }) => {
  const color = validate(props.value) ? 'success' : 'greyDisabled'
  return (
    <Flex alignItems='center' width={[1]}>

      <Input {...props} />
      <Flex
        alignItems='flex-end'
        mb='13px'
        ml='10px'
        fontSize='25px'
        height='100%'
        color={color}
        sx={{ transition: 'color .2s' }}
      >

        <i className='fa fa-check-circle' />
      </Flex>
    </Flex>
  )
}

const validateEmail = (email) => {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

  return expression.test(String(email).toLowerCase())
}

const fields = [
  {
    label: 'First Name',
    type: 'text',
    validate: (val) => val.length,
    ref: 'firstName'
  },
  {
    label: 'Last Name',
    type: 'text',
    validate: (val) => val.length,
    ref: 'lastName'
  },
  {
    label: 'Depop Shop Name',
    type: 'text',
    validate: (val) => val.length,
    ref: 'depopShopName'
  },
  {
    label: 'Email',
    type: 'text',
    validate: validateEmail,
    ref: 'email'
  },
  {
    label: 'Password',
    type: 'password',
    validate: (val) => val.length >= 6,
    ref: 'password'
  }

]
