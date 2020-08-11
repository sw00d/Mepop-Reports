import styled from 'styled-components'
import Box from '../../layout/Box'

const HorzDivider = (props) => {
  return <Divider {...props} />
}

const Divider = styled(Box)`
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
`

export default HorzDivider
