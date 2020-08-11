import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as RebassCheckbox } from '@rebass/forms'
import Label from './Label'
import styled from 'styled-components'
Checkbox.propTypes = {
  name: PropTypes.string
}

function Checkbox (props) {
  return (
    <Label {...props}>
      <StyledCheckbox
        name={props.name}
      />
    </Label>
  )
}

export default Checkbox

const StyledCheckbox = styled(RebassCheckbox)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  `
