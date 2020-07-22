
import { groupByCategory } from '../util/grouping'
import VertComposedChart from '../../../styles/reporting/VertBarChart'
import Flex from '../../../styles/layout/Flex'
import ValueBox from '../../../styles/reporting/ValueBox'
import { useMemo, useState } from 'react'

const SalesByDate = ({ data }) => {
  const [revenue, showRevenue] = useState(false)
  const chartData = useMemo(() => groupByCategory(data), [data])
  let max = chartData[0]
  chartData.forEach((current, i) => {
    if (current['Gross Earnings'] > max['Gross Earnings']) max = current
  })

  return (
    <Flex flexWrap='wrap'>

      <VertComposedChart
        minWidth='400px'
        maxWidtdh='100%'
        headerText='Sales By Category'
        data={chartData}
        xdataKey={revenue ? 'Gross Earnings' : 'Items Sold'}
        ydataKey='Category'
        height={500}
        formatTooltip={(t, l) => formatTooltip(t, l, data)}
        switchLabel='Show Earnings'
        switchCheck={revenue}
        switchEvent={() => {
          showRevenue(!revenue)
        }}
      />
      <Flex justifyContent='space-between' flexWrap='wrap' alignItems='stretch' maxWidth='50%'>
        <ValueBox
          minWidth='31%'
          title='Highest Earning Category'
          string
          smallText
          value={`${max.Category} - ${data.currency_type}${max['Gross Earnings']} Gross Profit`}
        />
        <ValueBox
          minWidth='31%'
          title='Most Sold Category'
          string
          smallText
          value={`${chartData[0].Category} - ${chartData[0]['Items Sold']} Items Sold`}
        />
        <ValueBox
          minWidth='31%'
          value={data.sales ? data.sales.length : 0}
          title='Items Sold'
        />
        <ValueBox
          minWidth='31%'
          float
          currencyType={data.currency_type}
          value={data.avg_price}
          title='Average Item Price'
        />
        <ValueBox
          minWidth='31%'
          value={data.avg_time_listed}
          title='Average Days Listed'
        />
        <ValueBox
          minWidth='31%'
          value={data.free_shipping}
          title='Items Offered with Free Shipping'
        />

      </Flex>
    </Flex>
  )
}

export default (SalesByDate)

const formatTooltip = (tickItem, label, data) => {
  if (label === 'Gross Earnings') {
    return `${data.currency_type}${tickItem.toFixed(2)}`
  }
  return tickItem
}
