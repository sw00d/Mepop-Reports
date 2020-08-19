import React from 'react'
import { Flex as FlexView } from 'rebass/styled-components'

const Flex = props => {
  return (
    <FlexView {...props}>
      {props.children}
    </FlexView>
  )
}

export default Flex
