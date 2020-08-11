import Input from '../../../styles/elements/Input'
import Form from '../../../styles/elements/Form'
import { CreditCard } from '../../../styles/elements/CreditCard'
import Text from '../../../styles/elements/Text'
import Flex from '../../../styles/layout/Flex'

const PaymentSettings = (props) => {
  return (
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
  )
}

export default PaymentSettings
