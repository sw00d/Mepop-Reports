import { useMemo, useState } from 'react'
import moment from 'moment'

// Utils
import { groupByTime } from '../util/grouping'

// Components
import BubbleChart from '../../../styles/reporting/BubbleChart'
import Flex from '../../../styles/layout/Flex'
import styled from 'styled-components'

import SalesTable from '../../general/SalesTable'

const xLabels = [
  '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am',
  '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm',
  '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'

]
const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const SalesByDate = ({ data }) => {
  const [coords, activateCoords] = useState(null)
  const chartData = useMemo(() => groupByTime(data), [data])
  return (
    <Flex flexWrap='wrap'>

      <BubbleChart
        minWidth='850px'
        isLoading={!data.sales}
        headerContent='Sales By time'
        data={chartData.arr}
        tooltipContent={tooltipContent}
        xLabels={xLabels}
        yLabels={yLabels}
        onClick={(x, y) => {
          activateCoords({ x, y })
        }}
      />
      {
        coords ? (
          <PopOut
            xLabels={xLabels}
            yLabels={yLabels}
            data={chartData.obj}
            coords={coords}
            onClose={() => activateCoords(null)}
          />

        )
          : null
      }

    </Flex>
  )
}

export default (SalesByDate)

const PopOut = ({ data, xLabels, yLabels, coords: { x, y }, onClose }) => {
  const time = moment(xLabels[x], 'h a').format('H')
  const day = yLabels[y].toLowerCase()
  const sales = data[day][parseInt(time)] || []
  return (
    <SalesTable
      minWidth='400px'
      data={sales}
      onClose={onClose}
      headerContent={`${day} - ${xLabels[x]}`}
      columnLabels={
        ['date sold', 'username', 'item price']
      }
    />
  )
}

const tooltipContent = (value, time, day) => {
  return (
    <Flex flexDirection='column'>
      <Flex>
        <Strong>Day:</Strong> {day}
      </Flex>
      <Flex>
        <Strong>Time:</Strong> {time}
      </Flex>
      <Flex>
        <Strong>Sold:</Strong> {value} {value === 1 ? 'Item' : 'Items'}
      </Flex>
    </Flex>)
}

const Strong = styled.strong`
  margin-right: 5px;
`
