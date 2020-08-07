import Flex from '../../styles/layout/Flex'
import { useSelector } from 'react-redux'

import LineChart from '../../styles/reporting/LineChart'

import SalesByDate from './SalesByDate'
import SalesByCategory from './SalesByCategory'
import SalesMap from './SalesMap'
import SalesByTime from './SalesByTime'
import SalesAndListingsByDay from './SalesAndListingsByDay'
import RecentSales from './RecentSales'
import SalesByPaymentType from './SalesByPaymentType'
import RevenueOverview from './RevenueOverview'
import ProfitsByMonth from './ProfitsByMonth'
import TotalEarningsView from './TotalEarnings'
import { CompareView } from './CompareView'
import TopValueBoxes from './TopValueBoxes'
import VariableLineGraph from './VariableLineGraph'

const Reports = (props) => {
  const { rangedData, allData, compareData } = useSelector(state => state.generalReducer)
  const data = rangedData

  if (JSON.stringify(compareData) !== '{}') {
    return <CompareView data={rangedData} compareData={compareData} />
  }
  return (
    <Flex flexDirection='column'>
      {/* <RoadToVerified data={data} /> */}
      <Flex>
        <TotalEarningsView data={data} />
      </Flex>
      <TopValueBoxes data={data} minWidth='20%' />

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
      <VariableLineGraph data={data} />
      <RecentSales data={allData} />
      <SalesByTime data={data} />

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
