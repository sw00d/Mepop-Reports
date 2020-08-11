import { memo, useState, useMemo } from 'react'
import moment from 'moment'

import Barchart from '../../../styles/reporting/BarChart'

import { groupByDate } from '../util/grouping'

const SalesByDate = memo(({ data }) => {
  const [allDates, showAllDates] = useState(false)
  const soldDatesData = useMemo(() => groupByDate(data), [data])
  const allDatesData = useMemo(() => groupByDate(data, true), [data])
  const switchDisable = soldDatesData.length === allDatesData.length
  return (
    <Barchart
      hideLegend
      minHeight='450px'
      headerContent='Sales by date'
      data={allDates ? allDatesData : soldDatesData}
      xdataKey='Date Sold'
      bars={[
        { dataKey: 'Items Sold', size: 70, color: 'pastelGreen' }
      ]}
      tickFormatter={formatXAxis}
      labelFormatter={formatTooltip}
      switchLabel={switchDisable ? null : 'Show dates with no sales'}
      switchCheck={allDates}
      switchEvent={() => showAllDates(!allDates)}
    />
  )
})

export default (SalesByDate)

const formatXAxis = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('M/D') }
const formatTooltip = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('MMM Do YYYY') }
