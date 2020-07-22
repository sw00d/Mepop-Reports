import Flex from '../../styles/layout/Flex'
import { useSelector } from 'react-redux'

import LineChart from '../../styles/reporting/LineChart'
import ValueBox from '../../styles/reporting/ValueBox'

import SalesByDate from './SalesByDate'
import SalesByCategory from './SalesByCategory'
import SalesMap from './SalesMap'
import RoadToVerified from './RoadToVerified'
import SalesByTime from './SalesByTime'
import SalesAndListingsByDay from './SalesAndListingsByDay'
import RecentSales from './RecentSales'
import Spinner from '../../styles/elements/Loading/Spinner'
import SalesByPaymentType from './SalesByPaymentType'
import RevenueOverview from './RevenueOverview'

const Reports = (props) => {
  const { allData } = useSelector(state => state.generalReducer)
  const data = allData
  if (JSON.stringify(data) === '{}' || !data) {
    return (
      <Flex justifyContent='space-between' flexWrap='wrap' alignItems='center' bg='mainBg'>
        <Spinner />
      </Flex>)
  }
  return (
    <Flex flexDirection='column'>
      {/* <RoadToVerified data={data} /> */}
      <Flex>
        <RevenueOverview data={data} />
        <SalesByPaymentType data={data} />
      </Flex>
      <SalesByDate data={data} />
      <SalesByCategory data={data} />
      <SalesMap data={data} />
      <SalesAndListingsByDay data={data} />
      <RecentSales data={data} />
      <SalesByTime data={data} />

      <Flex>
        <LineChart data={tempData} headerText='digichem style line graph of gross, net, items sold by month' />
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