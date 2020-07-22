
import Barchart from '../../../styles/reporting/BarChart'

import { groupByDay } from '../util/grouping'

const SalesAndListingsByDay = ({ data }) => {
  const chartData = groupByDay(data)

  return (
    <Barchart
      headerText='Sales and Listings by day'
      color='pastelGreen'
      color2='pastelBlue'
      data={chartData}
      xdataKey='Day'
      barDataKey='Items Sold'
      barDataKey2='Items Listed'
    />
  )
}

export default (SalesAndListingsByDay)
