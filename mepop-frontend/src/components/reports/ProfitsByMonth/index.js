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
        { dataKey: 'Gross Profit', color: 'pastelPurple' },
        { dataKey: 'Net Profit', color: 'pastelBlue' },
        { dataKey: 'Depop Fees', color: 'pastelBlueLight' },
        { dataKey: 'Shipping (Seller and Buyer paid)', color: 'pastelGreenLight' },
        { dataKey: 'Payment Fees (Depop and Paypal)', color: 'pastelGreen' }
      ]}
    />
  )
})

export default (ProfitsByMonth)
