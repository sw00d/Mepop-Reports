import Flex from '../../styles/layout/Flex'
import { useSelector } from 'react-redux'

import LineChart from '../../styles/reporting/LineChart'

import SalesByDate from './SalesByDate'
import SalesByCategory from './SalesByCategory'
import SalesMap from './SalesMap'
import SalesByTime from './SalesByTime'
import SalesAndListingsByDay from './SalesAndListingsByDay'
import RecentSales from './RecentSales'
import Spinner from '../../styles/elements/Loading/Spinner'
import SalesByPaymentType from './SalesByPaymentType'
import RevenueOverview from './RevenueOverview'
import ProfitsByMonth from './ProfitsByMonth'
import TotalEarningsView from './TotalEarnings'
// import ValueBox from '../../styles/reporting/ValueBox'

const Reports = (props) => {
  const { rangedData, allData, compareData } = useSelector(state => state.generalReducer)
  const data = rangedData
  if (JSON.stringify(data) === '{}' || !data.sales) {
    return (
      <Flex justifyContent='space-between' flexWrap='wrap' alignItems='center' bg='mainBg'>
        <Spinner />
      </Flex>)
  }
  return (
    <Flex flexDirection='column'>
      {/* <RoadToVerified data={data} /> */}
      <Flex>
        <TotalEarningsView data={data} />
        {/* <Flex flexWrap='wrap' width={[0.5]}>
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
        </Flex> */}
      </Flex>
      <Flex>
        <RevenueOverview data={data} />
        <SalesByPaymentType data={data} />
      </Flex>
      <SalesByDate data={data} />
      <SalesByCategory data={data} />
      <SalesMap data={data} />

      <Flex>

        <SalesAndListingsByDay data={data} />
        <ProfitsByMonth data={data} />
      </Flex>
      <RecentSales data={allData} />
      <SalesByTime data={data} />

      <Flex>
        <LineChart data={tempData} headerContent='digichem style line graph of gross, net, items sold by month' />
      </Flex>

    </Flex>
  )
}
export default Reports

const tempData = [
  { time: '13:11', sales: 5 },
  { time: '14:11', sales: 10 },
  { time: '15:11', sales: 20 },
  { time: '16:11', sales: 40 },
  { time: '17:11', sales: 30 },
  { time: 'May', sales: 30 },
  { time: 'June', sales: 40 },
  { time: 'July', sales: 50 },
  { time: 'August', sales: 60 },
  { time: 'September', sales: 70 },
  { time: 'October', sales: 50 },
  { time: 'November', sales: 100 }
]
