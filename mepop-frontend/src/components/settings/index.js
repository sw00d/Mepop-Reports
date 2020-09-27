import PersonalSettings from './personal'
import ContactForm from './contact'
import { useState } from 'react'
import Flex from '../../styles/layout/Flex'
import Card from '../../styles/elements/Card'

const Settings = ({ tab }) => {
  const [activeTab] = useState('personal')
  return (
    <Flex mt='10px' flex={[1]} justifyContent='flex-around' flexWrap='wrap'>
      {/* <Flex ml='10px'>
        <Button
          color={activeTab === 'personal' ? 'primary' : 'greyDark'}
          bg={activeTab === 'personal' ? 'white' : 'whiteDark'}
          sx={{ outline: 'none', borderRadius: '0px', zIndex: activeTab === 'personal' ? 2 : 0 }}
          onClick={() => activateTab('personal')}
        >
      Personal
        </Button>
      </Flex> */}
      <Card
        p='20px 40px 0px 40px'
        minWidth='300px'
        mt='0px'
        borderTop='primary'
      >

        {
          activeTab === 'personal' ? <PersonalSettings /> : null
        }
      </Card>
      <Card
        p='20px 40px 0px 40px'
        minWidth='300px'
        mt='0px'
        borderTop='primary'
      >
        <ContactForm />
      </Card>
    </Flex>
  )
}

export default Settings
