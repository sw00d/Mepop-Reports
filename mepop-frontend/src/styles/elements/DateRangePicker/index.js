import { Component } from 'react'
import { DateRangePicker } from 'react-dates'

import Flex from '../../layout/Flex'

class Dates extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focusedInput: null
    }
  }

  render () {
    return (
      <DateRangePicker
        noBorder
        customArrowIcon={(
          <Flex
            fontSize={20}
            alignItems='center'
            color={this.props.disabled ? 'greyLight' : 'greyDarkest'}
          >
            <i className='fa fa-arrow-circle-o-right' />
          </Flex>
        )}
        startDateId='startDate'
        endDateId='endDate'
        focusedInput={this.state.focusedInput}
        onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
        {...this.props}
      />
    )
  }
}

export default Dates
