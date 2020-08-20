
// styles
import Flex from '../../styles/layout/Flex'
import ValueBox from '../../styles/reporting/ValueBox'
import TotalEarnings from '../../styles/reporting/TotalEarnings'

// components
import ProfitsByMonth from './ProfitsByMonth'
import SaleTable from './SaleTable'
// custom containers
import { ValueContainer, GraphContainer } from './styles'
import { useSelector } from 'react-redux'

// utils
import { getAvgProfits, bestTimeToList, avgItemsPerDay } from './util'
import NoDataFound from '../../styles/elements/NoDataFound'

const Dashboard = () => {
  const { allData } = useSelector(state => state.generalReducer)
  const data = allData
  if (!data || JSON.stringify(data) === '{}') {
    return <NoDataFound />
  }
  const avgNetProfit = getAvgProfits(data)
  const whenToList = bestTimeToList(data)
  const itemsSoldPerDay = avgItemsPerDay(data)
  return (
    <Flex justifyContent='space-between' flexWrap='wrap' alignItems='center' bg='mainBg' width={[1]}>
      <Flex width={[1]} flexDirection='column'>
        <ValueContainer sx={{
          '@media only screen and (max-width: 950px)': {
            flexDirection: 'column'
          }
        }}
        >

          <ValueBox
            minWidth='167px' // for mobile. Should change
            title='Average Net Profit'
            value={avgNetProfit.weekly}
            value2={avgNetProfit.monthly}
            float
            hideCompare
            currencyType={allData.currency_type}
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
          sx={{
            '@media only screen and (max-width: 950px)': {
              flexDirection: 'column'
            }
          }}
        >
          <TotalEarnings
            boxShadow='none'
            borderRadius='0px'
            float
            currencyType={allData.currency_type}
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
              { name: 'Depop Fees', value: parseFloat(data.depop_fees) },
              { name: 'Paypal Fees', value: parseFloat(data.paypal_fees) },
              { name: 'Total Shipping', value: parseFloat(data.total_shipping_cost) }
            ]}
          />
          <ProfitsByMonth data={data} />
        </GraphContainer>
        <SaleTable data={data} getUrl={data.getUrl} />
      </Flex>

    </Flex>
  )
}
export default Dashboard
