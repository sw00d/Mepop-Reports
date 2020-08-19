import PersonalSettings from './personal'
import { useState } from 'react'
import Flex from '../../styles/layout/Flex'
import Card from '../../styles/elements/Card'

const Settings = ({ tab }) => {
  const [activeTab] = useState('personal')
  return (
    <Flex flexDirection='column' mt='10px' flex={[1]}>
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
        maxWidth='700px'
        p='20px 40px 0px 40px'
        mt='0px'
      >

        {
          activeTab === 'personal' ? <PersonalSettings /> : null
        }
      </Card>
    </Flex>
  )
}

export default Settings
