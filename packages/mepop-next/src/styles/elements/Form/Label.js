import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label as RebassLabel } from '@rebass/forms'

Label.propTypes = {
  label: PropTypes.string,
  htmlfor: PropTypes.string,
  color: PropTypes.string
}

function Label (props) {
  return (
    <LabelComponent htmlFor={props.htmlfor} color={props.color}>
      {props.label}
      {props.children}
    </LabelComponent>
  )
}

export default Label

const LabelComponent = styled(RebassLabel)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    transition: color .5s;
    text-transform: capitalize;
    user-select: none;
    color: ${props => props.color || props.theme.colors.greyDark};
`
