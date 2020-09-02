import { Checkbox } from '@rebass/forms'
import Flex from '../../layout/Flex'
import Label from '../Form/Label'
import theme from '../../../theme'

const CheckBox = ({ label, containerProps, ...props }) => {
  return (
    <Flex flexDirection='row' width={[1]} m='2px' {...containerProps}>
      <Label fontWeight={500} flexDirection='row' alignItems='center' justifyContent='flex-start'>
        <Checkbox
          {...props}
          color={props.color ? theme.colors[props.color] : theme.colors.greyDarker}
        />
        {label}
      </Label>
    </Flex>
  )
}

export default CheckBox
