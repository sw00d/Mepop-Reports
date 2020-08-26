import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input as RebassInput } from '@rebass/forms'
import Label from '../Form/Label'
import Flex from '../../layout/Flex'
import Tooltip from '../Tooltip'

const Input = ({ htmlfor, label, alwaysShowLabel, boxProps, hideEye, info, ...rest }) => {
  const [showPassword, togglePassword] = useState(false)
  const [labelIsShown, showLabel] = useState(!!rest.value || !!rest.defaultValue || alwaysShowLabel)
  const handleFocus = (e) => {
    if (!alwaysShowLabel) {
      if (e.target.value && !labelIsShown) showLabel(true)
      else if (!e.target.value && labelIsShown) showLabel(false)
    }

    if (rest.onChange) rest.onChange(e)
  }
  const hoverIcon = (type) => {
    togglePassword(type === 'enter')
  }
  return (
    <Flex flexDirection='column' width={[1]} m='2px'>
      {
        label
          ? (
            <Label
              htmlfor={htmlfor}
              label={label}
              fontWeight={500}
              color={!labelIsShown ? 'transparent' : null}
            />) : null
      }
      <Flex alignItems='center'>

        <StyleInput
          pl={rest.bg ? '5px' : !rest.disabled ? '0px' : null}
          {...rest}
          type={showPassword ? 'text' : rest.type}
          onChange={handleFocus}
        />

        {
          rest.type === 'password' && !hideEye
            ? (
              <Flex
                ml='3px'
                // color='greyDisabled'
                height='100%'
                py='8px'
                px='5px'
                onMouseOver={() => hoverIcon('enter')}
                onMouseLeave={() => hoverIcon('leave')}
              >

                <i className='fa fa-eye' />
              </Flex>
            )
            : null
        }
        {
          info ? (
            <Tooltip title={info}>
              <Flex
                ml='3px'
                // color='greyDisabled'
                height='100%'
                py='8px'
                px='5px'
                onMouseOver={() => hoverIcon('enter')}
                onMouseLeave={() => hoverIcon('leave')}
              >

                <i className='fa fa-question-circle' />
              </Flex>
            </Tooltip>
          ) : null
        }
      </Flex>
    </Flex>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string,
  htmlfor: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const StyleInput = styled(RebassInput)`
    background: ${({ theme, disabled, bg }) => (
      disabled ? theme.colors.greyDisabled : theme.colors[bg || 'white']
    )} !important;

    transition: ${({ theme }) => theme.transitionDurations[1]};
    height: 35px;
    padding-left: 15px;
    color: ${({ theme, disabled }) => disabled ? null : theme.colors.greyDarker} !important;
    font-size: 15px;
    font-weight: 500;
    border-radius: ${({ theme, disabled, borderRadius }) => disabled || borderRadius ? theme.borderRadius.normal : 0};
    /* border-width: 0px !important; */
    border: 1px solid ${({ borderColor, theme }) => borderColor ? theme.colors[borderColor] : 'transparent'} !important;
    border-bottom: 1px solid ${({ theme, disabled, bg, borderColor }) =>
    disabled ? theme.colors[bg || 'white'] : theme.colors[borderColor || 'greyDisabled']
    } !important;
    outline: none;
    &::placeholder {
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      /* color: #aab7c4; */
    }
`
