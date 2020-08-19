import styled from 'styled-components'
import Box from '../../layout/Box'

const HorzDivider = (props) => {
  return <Divider height='3px' width='100%' {...props} />
}

const Divider = styled(Box)`
  background: ${({ theme }) => theme.colors.primary};
`

export default HorzDivider
