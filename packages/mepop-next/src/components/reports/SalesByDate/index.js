import { useState } from 'react'
import moment from 'moment'

import Barchart from '../../../styles/reporting/BarChart'

import { groupByDate } from '../util/grouping'

const SalesByDate = ({ data }) => {
  const [allDates, showAllDates] = useState(false)
  const chartData = groupByDate(data, allDates)

  return (
    <Barchart
      headerText='Sales by date'
      color='pastelTeal'
      data={chartData}
      xdataKey='Date Sold'
      barDataKey='Items Sold'
      tickFormatter={formatXAxis}
      labelFormatter={formatTooltip}
      switchLabel='Show dates with no sales'
      switchCheck={allDates}
      switchEvent={() => {
        showAllDates(!allDates)
      }}
    />
  )
}

export default (SalesByDate)

const formatXAxis = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('M/D') }
const formatTooltip = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('MMM Do YYYY') }
