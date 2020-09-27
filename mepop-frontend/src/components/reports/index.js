import Flex from '../../styles/layout/Flex'
import Button from '../../styles/elements/Button'
import Text from '../../styles/elements/Text'
import { useSelector } from 'react-redux'

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
import NoDataFound from '../../styles/elements/NoDataFound'
import Link from 'next/link'

const Reports = (props) => {
  const { rangedData, allData, compareData, user } = useSelector(state => state.generalReducer)
  const data = rangedData

  const noData = data.sales ? !data.sales.length : true
  const isBasic = user.membership.type === 'basic'

  if (isBasic) {
    return <NotPremiumUser />
  }
  if (JSON.stringify(compareData) !== '{}') {
    return <CompareView data={rangedData} compareData={compareData} />
  }
  return (
    <Flex flexDirection='column' width={[1]} justifyContent='center'>
      {
        noData ? <NoDataFound />
          : (
            <>
              {/* <RoadToVerified data={data} /> */}
              <Flex>
                <TotalEarningsView data={data} />
              </Flex>
              <TopValueBoxes data={data} minWidth='20%' />

              <Flex
                sx={{
                  '@media only screen and (max-width: 1200px)': {
                    flexDirection: 'column'
                  }
                }}
              >
                <RevenueOverview data={data} />
                <SalesByPaymentType data={data} />
              </Flex>
              <SalesByDate data={data} />
              <SalesByCategory data={data} />
              <SalesMap data={data} />

              <Flex
                sx={{
                  '@media only screen and (max-width: 1200px)': {
                    flexDirection: 'column'
                  }
                }}
              >
                <SalesAndListingsByDay data={data} />
                <ProfitsByMonth data={data} />
              </Flex>
              <VariableLineGraph data={data} />
              <RecentSales data={allData} />
              <SalesByTime data={data} />
            </>
          )
      }
    </Flex>
  )
}
export default Reports

const NotPremiumUser = () => {
  const msg = (
    <Flex alignItems='center' flexWrap='wrap'>
      <Text mr='4px'>
        You must have a Premium account to view this area.
      </Text>
      <Link href='/settings/membership'>
        <a>
          <Button>
            Manage Account
          </Button>
        </a>
      </Link>
    </Flex>
  )
  return (
    <Flex height='70vh'>
      <NoDataFound title='Premium Only' msg={msg} />
    </Flex>
  )
}
