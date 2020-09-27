import { Textarea } from '@rebass/forms'
import styled from 'styled-components'
import Box from '../../layout/Box'
import Flex from '../../layout/Flex'
import Label from '../Form/Label'

const TextAreaView = ({ label, placeholder, onChange, value, ...props }) => {
  return (
    <Flex flexDirection='column' m='2px' {...props}>
      {
        label
          ? (
            <Label
              label={label}
              fontWeight={500}
            />
          ) : null
      }
      <Box>
        <StyledTextArea
          maxWidth='100%'
          minHeight='200px'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Box>
    </Flex>
  )
}

export default TextAreaView

const StyledTextArea = styled(Textarea)`
    border-radius: 4px;
    outline: none;
    border: none !important;
    background: ${({ theme }) => theme.colors.greyDisabled} !important;
`
