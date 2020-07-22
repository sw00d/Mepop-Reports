
// styles
import Flex from '../../styles/layout/Flex'
import ValueBox from '../../styles/reporting/ValueBox'

// components
import TotalEarnings from './TotalEarnings'
import ProfitsByMonth from './ProfitsByMonth'
import SaleTable from './SaleTable'
// custom containers
import { ValueContainer, GraphContainer } from './styles'
import { useSelector } from 'react-redux'

// utils
import { getProfitsByMonth, getAvgProfits, bestTimeToList, avgItemsPerDay } from './util'
import { formatSalesTable } from '../reports/util/tables'
import Spinner from '../../styles/elements/Loading/Spinner'

const Dashboard = (props) => {
  const { allData } = useSelector(state => state.generalReducer)
  const data = allData
  if (JSON.stringify(data) === '{}' || !data) {
    return (
      <Flex justifyContent='space-between' flexWrap='wrap' alignItems='center' bg='mainBg'>
        <Spinner />
      </Flex>)
  }
  const monthlyNetProfit = getProfitsByMonth(data)
  const avgNetProfit = getAvgProfits(data)
  const whenToList = bestTimeToList(data)
  const itemsSoldPerDay = avgItemsPerDay(data)
  const tableData = formatSalesTable(data)

  return (
    <Flex justifyContent='space-between' flexWrap='wrap' alignItems='center' bg='mainBg'>
      <Flex width={[1]} flexDirection='column'>
        <ValueContainer>

          <ValueBox
            minWidth='167px' // for mobile. Should change
            title='Average Net Profit'
            value={avgNetProfit.weekly}
            value2={avgNetProfit.monthly}
            float
            hideCompare
            currencyType='$'
            label1='Weekly'
            label2='Monthly'
          />
          <ValueBox
            title='Hottest Days'
            value={whenToList.list.join(', ')}
            value2={whenToList.sell.join(', ')}
            string
            hideCompare
            label1='To List'
            label2='To Sell'
          />
          <ValueBox
            title='Avg. Items Sold Per Day'
            value={itemsSoldPerDay}
          />
        </ValueContainer>
        <GraphContainer
          m='0px'
          justifyContent='space-around'
          alignItems='center'
          flexDirection='row'
          borderRadius='0px'
          flexWrap='wrap'
        >
          <TotalEarnings
            boxShadow='none'
            borderRadius='0px'
            float
            currencyType='$'
            title='Total Earnings'
            value={data.total_earnings}
            netValue={
              (data.total_earnings - data.total_shipping_cost - data.depop_fees).toFixed(2)
            }
            data={[
              {
                name: 'Net Earnings',
                value: parseFloat(data.total_earnings - data.total_shipping_cost - data.depop_fees)
              },
              { name: 'Depop Fees', value: parseFloat(depop_fees) },
              { name: 'Paypal Fees', value: parseFloat(paypal_fees) },
              { name: 'Total Shipping', value: parseFloat(total_shipping_cost) }
            ]}
          />
          <ProfitsByMonth
            data={monthlyNetProfit}
            xdataKey='month'
            barDataKey='profit'
            color='primary'
            boxShadow='none'
            highlight={
              {
                condition: ({ time }, i) => {
                  return i === monthlyNetProfit.length - 1
                },
                color: 'blueLight'
            }
            }
          />
        </GraphContainer>
        <SaleTable data={tableData} getUrl={data.getUrl} />
      </Flex>

    </Flex>
  )
}
export default Dashboard

const total_earnings = 14000
const total_shipping_cost = 2000
const depop_fees = 1000
const paypal_fees = 700

const tempData = [
  // { time: '13:11', sales: 5 },
  // { time: '14:11', sales: 10 },
  // { time: '15:11', sales: 20 },
  // { time: '16:11', sales: 40 },
  // { time: '17:11', sales: 30 },
  { time: 'May', sales: 30 },
  { time: 'June', sales: 40 },
  { time: 'July', sales: 50 },
  { time: 'August', sales: 60 },
  { time: 'September', sales: 70 },
  { time: 'October', sales: 50 },
  { time: 'November', sales: 100 }
]
