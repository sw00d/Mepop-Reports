// import React, { Component } from 'react'

// import 'react-dates/initialize'

// import { DateRangePicker } from 'react-dates'

// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       startDate: null,
//       endDate: null,
//       focusedInput: null
//     }
//   }

//   render () {
//     return (
//       <div className='App'>
//         <DateRangePicker
//           startDateId='startDate'
//           endDateId='endDate'
//           startDate={this.state.startDate}
//           endDate={this.state.endDate}
//           onDatesChange={({ startDate, endDate }) => {
//             console.log(startDate.format('MM_DD_yyyy'))
//             this.setState({ startDate, endDate })
//           }}
//           focusedInput={this.state.focusedInput}
//           onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
//         />
//       </div>
//     )
//   }
// }

// export default App
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
            color={this.props.disabled ? 'greyLight' : 'primary'}
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
