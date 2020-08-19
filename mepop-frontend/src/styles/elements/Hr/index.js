import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../../layout/Flex'

const H2 = (props) => {
  return (
    <Hr mt='5px' mb='5px' {...props} />
  )
}

export default H2

H2.propTypes = {
  height: PropTypes.number,
  background: PropTypes.string

}

const Hr = styled(Flex)`
    width: 100%;
    height: ${({ height }) => height || 3}px;
    background: ${({ background, theme }) => theme.colors[background] || theme.colors.primary};
`
