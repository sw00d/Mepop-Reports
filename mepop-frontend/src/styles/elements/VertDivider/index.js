import styled from 'styled-components'
import Box from '../../layout/Box'

const VertDivider = (props) => {
  return <Divider {...props} />
}

const Divider = styled(Box)`
  width: 3px;
  height: 100%;
  background: ${({ theme, color }) => theme.colors[color || 'primary']};
`

export default VertDivider
