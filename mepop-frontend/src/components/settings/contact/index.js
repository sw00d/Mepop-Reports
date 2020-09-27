import { withFirebase } from '../../../firebase'

import Flex from '../../../styles/layout/Flex'
import HorzDivider from '../../../styles/elements/HorzDivider'
import Text from '../../../styles/elements/Text'
import TextArea from '../../../styles/elements/TextArea'
import Button from '../../../styles/elements/Button'
import Input from '../../../styles/elements/Input'
import { useState } from 'react'
import { useToasts } from 'react-toast-notifications'

const UserSettings = withFirebase(({ firebase }) => {
  const { addToast } = useToasts()

  const [subject, updateSubject] = useState('')
  const [content, updateContent] = useState('')
  const [isLoading, setLoading] = useState(false)

  const notify = (type, msg) => {
    addToast(msg, {
      appearance: type,
      autoDismiss: true
    })
  }
  const sendEmail = () => {
    setLoading(true)
    firebase.sendEmail({ subject, content }).then(() => {
      updateContent('')
      updateSubject('')
      setLoading(false)
      notify('success', 'Email sent! ')
    }).catch(() => {
      setLoading(false)
      notify('error', 'Oops! Something happening. Can you try again?')
    })
  }
  return (
    <Flex width={[1]}>
      <Flex flexDirection='column' width={[1]}>
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
            alignSelf='flex-start'
            mb='5px'
          >
             Contact Us
          </Text>
          <Text fontSize='14px'>Feel free to send us any comments or questions you may have!</Text>
        </Flex>
        <HorzDivider my='10px' />
        <Flex flexDirection='column' flex={1}>
          <Input
            placeholder='Subject'
            label='Subject'
            alwaysShowLabel
            bg='greyDisabled'
            borderRadius
            value={subject}
            onChange={(e) => updateSubject(e.target.value)}
          />
          <TextArea
            mt='10px !important'
            label='Content'
            placeholder='Content'
            width='100%'
            value={content}
            onChange={(e) => updateContent(e.target.value)}

          />

          <Button width='150px' my='20px' ml='2px' alignSelf='flex-end' onClick={sendEmail} isLoading={isLoading}>
            <Flex width='100%' justifyContent='space-around'>
              <i className='fa fa-envelope' />
              Send Email
            </Flex>
          </Button>
        </Flex>

      </Flex>
    </Flex>

  )
})

export default UserSettings
