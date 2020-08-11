
import Barchart from '../../../styles/reporting/BarChart'

import { groupByDay } from '../util/grouping'
import { memo } from 'react'

const SalesAndListingsByDay = memo(({ data }) => {
  const chartData = groupByDay(data)

  return (
    <Barchart
      minHeight='400px'
      disableAnimation
      headerBorder='none'
      headerContent='Sales and Listings by day'
      data={chartData}
      xdataKey='Day'
      bars={[
        { dataKey: 'Items Sold', size: 20, color: 'pastelRose' },
        { dataKey: 'Items Listed', size: 20, color: 'pastelBlue' }
      ]}
    />
  )
})

export default (SalesAndListingsByDay)
