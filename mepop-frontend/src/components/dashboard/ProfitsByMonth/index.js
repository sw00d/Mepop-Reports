import React from 'react'
import BarChart from '../../../styles/reporting/BarChart'
import { getProfitsByMonth } from '../util'
import { formatNum } from '../../reports/util/general'

// styles

const MonthlyProfits = ({
  color,
  data,
  xdataKey,
  barDataKey,
  barGap,
  barSize,
  ...props
}) => {
  const monthlyNetProfit = getProfitsByMonth(data)
  return (
    <BarChart
      hideLegend
      headerBorder='none'
      boxShadow='none'
      headerContent='Net Earnings By Month'
      data={monthlyNetProfit}
      formatTooltip={(val) => formatNum(data.currency_type, val)}
      ytickFormattter={(num) => formatNum(data.currency_type, num, 0)}
      xdataKey='month'
      ydataKey='Net Profit'
      bars={[
        { dataKey: 'Net Profit', size: 30, color: 'teal' }
      ]}
    />
  )
}

export default MonthlyProfits
