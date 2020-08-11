import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import Label from './Label'
import Box from '../../layout/Box'
import styled from 'styled-components'

const Input = ({ htmlfor, label, showLabelAtStart, ...rest }) => {
  const [labelIsShown, showLabel] = useState(showLabelAtStart)
  const handleLabel = (e) => {
    if (e.target.value && !labelIsShown) showLabel(true)
    else if (!e.target.value && labelIsShown) showLabel(false)

    if (rest.onChange) rest.onChange(e)
  }
  return (
    <Box>
      <Label
        htmlfor={htmlfor}
        label={label}
        color={!labelIsShown ? 'transparent' : null}
      />
      <StyleInput
        {...rest}
        onChange={handleLabel}
      />
    </Box>
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

const StyleInput = styled(Field)`
    background: ${({ theme }) => theme.colors.greyDisabled};
    border: none;
    height: 35px;
    padding-left: 15px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 15px;
    font-weight: 600;
`
