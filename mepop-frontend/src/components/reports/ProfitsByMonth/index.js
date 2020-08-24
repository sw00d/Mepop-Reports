import { memo } from 'react'

import Barchart from '../../../styles/reporting/BarChart'

import { getProfitsByMonth } from '../../dashboard/util'
import { formatNum } from '../util/general'

const ProfitsByMonth = memo(({ data }) => {
  const chartData = getProfitsByMonth(data)
  return (
    <Barchart
      minHeight='400px'
      disableAnimation
      headerBorder='none'
      headerContent='Profits By Month'
      data={chartData}
      formatTooltip={(val) => formatNum(data.currency_type, val)}
      xdataKey='month'
      bars={[
        { dataKey: 'Net Profit', size: 40, color: 'pastelPurple' },
        { dataKey: 'Depop Fees', size: 40, color: 'pastelBlue' },
        { dataKey: 'Seller-Paid-Shipping', size: 40, color: 'pastelBlueLight' }
      ]}
    />
  )
})

export default (ProfitsByMonth)
