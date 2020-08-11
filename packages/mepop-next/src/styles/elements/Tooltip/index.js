import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip as Tippy } from 'react-tippy'

// @component
export const Tooltip = ({ title, size, ...rest }) => {
  const html = title ? <div>{title}</div> : rest.html
  return (
    <Tippy
      html={html}
      size={size}
      {...rest}
    />
  )
}

Tooltip.propTypes = {
  position: PropTypes.oneOf([
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
  ])
}
Tooltip.defaultProps = {
  arrow: true,
  arrowSize: 'small'
}

export default Tooltip
