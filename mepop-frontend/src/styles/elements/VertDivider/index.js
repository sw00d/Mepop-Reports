import styled from 'styled-components'
import Box from '../../layout/Box'
import theme from '../../../theme'
const VertDivider = (props) => {
  return <Divider {...props} />
}

const Divider = styled(Box)`
  width: 3px;
  height: 100%;
  background: ${theme.colors.primary};
`

export default VertDivider
