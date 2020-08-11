import styled from 'styled-components'
import Flex from '../layout/Flex'

export const ChartWrap = styled(Flex)`
  display:flex;
  flex-wrap:wrap;
  height: ${({ height }) => height || 300}px;
  width:100%;
  padding: ${({ noPadding }) => noPadding ? '0px' : '0px 10px '};
`
