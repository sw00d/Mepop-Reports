
import Barchart from '../../../styles/reporting/BarChart'

import { groupByDay } from '../util/grouping'

const SalesAndListingsByDay = ({ data }) => {
  const chartData = groupByDay(data)

  return (
    <Barchart
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
}

export default (SalesAndListingsByDay)
