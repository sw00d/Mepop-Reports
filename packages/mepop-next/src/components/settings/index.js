import PersonalSettings from './personal'
import { useState } from 'react'
import Flex from '../../styles/layout/Flex'
import Button from '../../styles/elements/Button'
import PaymentSettings from './payment'
import Card from '../../styles/elements/Card'

const Settings = ({ tab }) => {
  const [activeTab, activateTab] = useState(tab)
  return (
    <Flex flexDirection='column' mt='10px' flex={[1]}>
      <Flex ml='10px'>
        <Button
          color={activeTab === 'personal' ? 'primary' : 'greyDark'}
          bg={activeTab === 'personal' ? 'white' : 'whiteDark'}
          sx={{ outline: 'none', borderRadius: '0px', zIndex: activeTab === 'personal' ? 2 : 0 }}
          onClick={() => activateTab('personal')}
        >Personal
        </Button>
        <Button
          bg={activeTab === 'payment' ? 'white' : 'whiteDark'}
          color={activeTab === 'payment' ? 'primary' : 'greyDark'}
          sx={{ outline: 'none', borderRadius: '0px', zIndex: activeTab === 'payment' ? 2 : 0 }}
          onClick={() => activateTab('payment')}
        >Payment
        </Button>
      </Flex>
      <Card
        p='40px'
        mt='0px'
        sx={{ borderTopLeftRadius: '0px !important' }}
      >

        {
          activeTab === 'personal' ? <PersonalSettings /> : <PaymentSettings />
        }
      </Card>
    </Flex>
  )
}

export default Settings
