
import Barchart from '../../../styles/reporting/BarChart'

import { getProfitsByMonth } from '../../dashboard/util'

const ProfitsByMonth = ({ data }) => {
  const chartData = getProfitsByMonth(data)
  return (
    <Barchart
      headerBorder='none'
      headerContent='Profits By Month'
      data={chartData}
      formatTooltip={(t, l) => formatTooltip(t, l, data)}
      xdataKey='month'
      bars={[
        { dataKey: 'Net Profit', size: 40, color: 'pastelPurple' },
        { dataKey: 'Depop Fees', size: 40, color: 'pastelBlue' },
        { dataKey: 'Seller-Paid-Shipping', size: 40, color: 'pastelBlueLight' }
      ]}
    />
  )
}

export default (ProfitsByMonth)

const formatTooltip = (tickItem, label, data) => {
  return `${data.currency_type}${tickItem.toFixed(2)}`
}
