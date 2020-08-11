import { Box as BoxView } from 'rebass/styled-components'
import styled from 'styled-components'

const BoxEl = styled(BoxView)`
  background: ${({ theme, bg }) => theme.colors[bg] || 'transparent'};
`
const Form = props => {
  return (
    <BoxEl {...props} as='form'>
      {props.children}
    </BoxEl>
  )
}

export default Form
