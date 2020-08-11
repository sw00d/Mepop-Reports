import { useMemo, useState, memo } from 'react'

import { formatNum } from '../util/general'
import { groupByCategory } from '../util/grouping'
import VertComposedChart from '../../../styles/reporting/VertBarChart'
import Flex from '../../../styles/layout/Flex'
import ValueBox from '../../../styles/reporting/ValueBox'

const SalesByCategory = memo(({ data, hideBoxes, halfSize, isBasic }) => {
  const [revenue, showRevenue] = useState(false)
  const chartData = useMemo(() => groupByCategory(data, revenue), [revenue, data])
  const max = { gross: chartData[0], sold: chartData[0] }
  const min = { gross: chartData[0], sold: chartData[0] }
  chartData.forEach((current, i) => {
    if (current['Gross Earnings'] > max.gross['Gross Earnings']) max.gross = current
    if (current['Items Sold'] > max.sold['Items Sold']) max.sold = current
    if (current['Gross Earnings'] < min.gross['Gross Earnings']) min.gross = current
    if (current['Items Sold'] < min.sold['Items Sold']) min.sold = current
  })
  if (!chartData.length) return null
  if (halfSize) {
    return (
      <VertComposedChart
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
        proOnly={isBasic ? {
          component: 'Sales by Category',
          img: 'sales-by-category.png'
        } : null}
      />
    )
  }
  return (
    <Flex flexWrap='wrap'>

      <VertComposedChart
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
        proOnly={isBasic ? {
          component: 'Sales by Category',
          img: 'sales-by-category.png'
        } : null}
      />
      {
        !hideBoxes ? (
          <Flex justifyContent='space-between' flexWrap='wrap' alignItems='stretch' maxWidth='50%' flexDirection='column'>
            {
              max
                ? (
                  <>
                    <ValueBox
                      minWidth='50px'
                      title='Highest Earning Category'
                      string
                      smallText
                      value={`${max.gross.Category} - ${formatNum(data.currency_type, max.gross['Gross Earnings'])} Gross Profit`}
                    />
                    <ValueBox
                      minWidth='50px'
                      title='Most Sold Category'
                      string
                      smallText
                      value={`${max.sold.Category} - ${max.sold['Items Sold']} Items Sold`}
                    />
                    <ValueBox
                      minWidth='50px'
                      title='Lowest Earning Category'
                      string
                      smallText
                      value={`${min.gross.Category} -${formatNum(data.currency_type, min.gross['Gross Earnings'])} Gross Profit`}
                    />
                    <ValueBox
                      minWidth='50px'
                      title='Least Sold Category'
                      string
                      smallText
                      value={`${min.sold.Category} - ${min.sold['Items Sold']} Items Sold`}
                    />
                  </>
                ) : null
            }
          </Flex>
        ) : null
      }

    </Flex>
  )
})

export default (SalesByCategory)

const formatTooltip = (tickItem, label, data) => {
  if (label === 'Gross Earnings') {
    return `${data.currency_type}${tickItem.toFixed(2)}`
  }
  return tickItem
}
