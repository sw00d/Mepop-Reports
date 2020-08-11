import { withFirebase } from '../../firebase'
import Modal from '../../styles/elements/Modal'
import Flex from '../../styles/layout/Flex'
import Button from '../../styles/elements/Button'
import Input from '../../styles/elements/Input'
import Text from '../../styles/elements/Text'
import { useState } from 'react'

const ForgotPass = withFirebase(({ modalIsOpen, email, onRequestClose, firebase }) => {
  const [val, setVal] = useState(email)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const submit = () => {
    setLoading(true)
    firebase.doPasswordReset(val).then(() => {
      setSuccess(true)
      setLoading(false)
    }).catch((err) => {
      setError(err.message)
      setSuccess(false)
      setLoading(false)
    })
  }
  return (
    <Modal
      isOpen={modalIsOpen} onRequestClose={() => {
        setSuccess(false)
        onRequestClose()
      }}
    >
      <Flex minWidth='400px' maxWidth='100%' minHeight='175px' p='30px' pt='0px'>
        <Flex flexDirection='column' width={[1]} justifyContent={success ? 'center' : 'space-between'}>
          {
            success ? (
              <Text
                width={[1]}
                m='5px 2px'
                height='40px'
                color='primary'
                textAlign='center'
              >
                 Email sent. Please check your email.
              </Text>
            )
              : (
                <>
                  <Text mb='10px' fontSize='20px'>Reset Password</Text>
                  <Flex flexDirection='column' width={[1]}>
                    <Input
                      placeholder='Email'
                      label='Email'
                      bg='greyDisabled'
                      type='email'
                      borderRadius='4px'
                      color='white'
                      value={val}
                      onChange={(e) => setVal(e.target.value)}
                      onKeyPress={e => e.key === 'Enter' ? submit() : null}
                    />

                    <Button
                      type='button'
                      width={[1]}
                      m='5px 2px'
                      height='40px'
                      onClick={submit}
                      isLoading={isLoading}
                    >
                    Send Email
                    </Button>
                  </Flex>
                </>
              )
          }
        </Flex>
      </Flex>
    </Modal>
  )
})

export default ForgotPass
