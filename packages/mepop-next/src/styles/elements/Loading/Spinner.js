import React from 'react'
import styled, { keyframes } from 'styled-components'
import Flex from '../../layout/Flex'

const Spinner = props => {
  return <Loader {...props} />
}

export default Spinner

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Loader = styled(Flex)`
    font-size: 10px;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    position: relative;
    animation: ${spin} 1.4s infinite linear;
    transform: translateZ(0);  
    border: 4px solid ${props => props.theme.colors[props.color] || props.theme.colors.primary};
    border-right-color: transparent;

`
