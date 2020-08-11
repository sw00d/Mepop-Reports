import { CardElement } from '@stripe/react-stripe-js'
import Flex from '../../layout/Flex'
import theme from '../../../theme'
export const CreditCard = () => {
  return (
    <Flex width={[1]}>

      <CardElement
        options={{
          iconStyle: 'solid',

          style: {
            base: {
              fontSize: '16px',
              color: theme.colors.primary,
              width: '100%',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#9e2146'
            }
          }
        }}
      />
    </Flex>
  )
}
