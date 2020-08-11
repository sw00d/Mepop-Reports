import React from 'react'
import { Box as BoxView } from 'rebass/styled-components'
import styled from 'styled-components'

const BoxEl = styled(BoxView)`
  background: ${({ theme, bg }) => theme.colors[bg] || 'transparent'};
`
const Box = props => {
  return (
    <BoxEl {...props}>
      {props.children}
    </BoxEl>
  )
}

export default Box
