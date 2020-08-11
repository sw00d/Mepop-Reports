import React from 'react'
import { Text as TextComponent } from 'rebass'
import styled from 'styled-components'
import theme from '../../../theme'

const Text = ({ notFound, ...props }) => {
  const preset = notFound ? {
    color: theme.colors.textSubtle,
    fontSize: '25px'
  } : {}

  return <StyledText {...preset} {...props} />
}

export default Text

const StyledText = styled(TextComponent)`
  color: ${({ theme, color }) => theme.colors[color]};
`
