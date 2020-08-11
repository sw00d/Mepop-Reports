import React from 'react'
import styled, { keyframes } from 'styled-components'
// const text = props.theme.colors[props.color]

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
`
const circleCSS = props => {
  return (`
    border-radius: 50%;
    width: 1em;
    height: 1em;
    `)
}
const Loader = styled.div`
    ${circleCSS}
    background:transparent;
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;
    position: absolute;
    top: -2.5em;
    color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;


   &:before {
    ${circleCSS}
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;
    content: '';
    position: absolute;
    top: 0;
    left: -2.5em;
    animation-delay: -0.32s;
  }

  &:after {
    ${circleCSS}
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;
    content: '';
    position: absolute;
    top: 0;
    left: 2.5em;

  }   
`

const ThreeDotLoader = props => {
  return <Loader {...props} />
}

export default ThreeDotLoader
