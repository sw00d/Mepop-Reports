import React from 'react'
import styled from 'styled-components'
import BlurShield from '../../styles/elements/BlurShield'
import Flex from '../../styles/layout/Flex'

const BlurBackground = ({ component, ...props }) => {
  return (
    <Background>
      <BlurShield component={component} />
    </Background>
  )
}

export default BlurBackground

const Background = styled(Flex)`
    width: 100%;
    height: calc(100% - 45px);
    position: absolute;
    z-index: 1;
    backdrop-filter: blur(10px);
    bottom: 0px;
`
