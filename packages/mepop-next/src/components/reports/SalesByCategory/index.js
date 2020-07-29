
import { groupByCategory } from '../util/grouping'
import VertComposedChart from '../../../styles/reporting/VertBarChart'
import Flex from '../../../styles/layout/Flex'
import ValueBox from '../../../styles/reporting/ValueBox'
import { useMemo, useState } from 'react'

const SalesByDate = ({ data }) => {
  const [revenue, showRevenue] = useState(false)
  const chartData = useMemo(() => groupByCategory(data, revenue), [revenue, data])
  const max = { gross: chartData[0], sold: chartData[0] }
  chartData.forEach((current, i) => {
    if (current['Gross Earnings'] > max.gross['Gross Earnings']) max.gross = current
    if (current['Items Sold'] > max.sold['Items Sold']) max.sold = current
  })
  if (!chartData.length) return null
  return (
    <Flex flexWrap='wrap'>

      <VertComposedChart
        minWidth='400px'
        maxWidtdh='100%'
        headerContent={`Sales By Category${chartData.length < 15 ? '' : ' - ( Top 15 )'}`}
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
        {
          max
            ? (
              <>
                <ValueBox
                  minWidth='31%'
                  title='Highest Earning Category'
                  string
                  smallText
                  value={`${max.gross.Category} - ${data.currency_type}${max.gross['Gross Earnings']} Gross Profit`}
                />
                <ValueBox
                  minWidth='31%'
                  title='Most Sold Category'
                  string
                  smallText
                  value={`${max.sold.Category} - ${max.sold['Items Sold']} Items Sold`}
                />
              </>
            ) : null
        }
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
