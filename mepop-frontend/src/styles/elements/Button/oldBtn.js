import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../../layout/Flex'
import ThreeDotLoader from '../Loading/ThreeDotLoader'

const disabled = props => ({
  opacity: props.disabled ? 0.9 : 1,
  cursor: props.disabled ? 'not-allowed' : 'pointer'
})

export const size = props => {
  const fontSizes = {
    xs: props.caps ? '10px' : props.theme.fontSizes[0],
    sm: `${props.theme.fontSizes[props.caps ? 0 : 1]}px`,
    md: `${props.theme.fontSizes[props.caps ? 0 : 1]}px`,
    lg: `${props.theme.fontSizes[2]}px`
  }

  const paddings = {
    xs: `0 ${props.theme.space[2]}px`,
    sm: `0 ${props.theme.space[3]}px`,
    md: `0 ${props.theme.space[4]}px`,
    lg: `0 ${props.theme.space[5]}px`
  }

  const height = {
    xs: `${props.theme.heights.xs}px`,
    sm: `${props.theme.heights.sm}px`,
    md: `${props.theme.heights.md}px`,
    lg: `${props.theme.heights.lg}px`
  }

  const result = {
    fontSize: fontSizes[props.size],
    padding: paddings[props.size],
    height: height[props.size]
    // ...height({ ...props, height: props.size })
  }

  return result
}
const borders = props => {
  return {
    border: props.outlined ? `${props.theme.borders[1]}` : `${props.theme.borders[0]}`,
    borderColor: `${props.theme.colors.accent}`,
    borderRadius: `${props.theme.borderRadius.normal}`
  }
}
const colors = props => {
  const text = props.theme.colors[props.color]
  const backgroundColor = props.theme.colors[props.background || '#E1E1E1']
  const borderColor = props.background ? props.theme.colors[props.background] : props.theme.colors.accent

  return {
    color: text,
    backgroundColor,
    borderColor
  }
}
const ButtonWrapper = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-decoration: none;
  font-family: ${props => props.theme.fonts[1]};
  min-width: 110px;

  &:active {
    opacity: 0.8;
  }

  ${borders}
  ${disabled}
  ${size}
  ${colors}
  `

// @component
const Button = props => {
  const { children, disabled, isLoading, color, background } = props
  return (
    <ButtonWrapper
      {...props}
      color={color}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <Flex justifyContent='center' alignItems='center'>
          <ThreeDotLoader color={color} bg={background} />
        </Flex>
      ) : (
        children
      )}
    </ButtonWrapper>
  )
}
const propTypes = {
  caps: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  color: PropTypes.string,
  background: PropTypes.string,
  subtle: PropTypes.bool,
  outlined: PropTypes.bool,
  isLoading: PropTypes.bool,
  borderRadius: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  theme: PropTypes.object
}
Button.propTypes = propTypes
Button.defaultProps = {
  caps: true,
  size: 'md',
  color: 'greyDarkest',
  borderRadius: 1,
  type: 'button',
  outlined: true
}

export default Button
