import Flex from '../../styles/layout/Flex'
import TotalEarningsView from './TotalEarnings'
import RevenueOverview from './RevenueOverview'
import SalesByPaymentType from './SalesByPaymentType'
import SalesByDate from './SalesByDate'
import SalesByCategory from './SalesByCategory'
import SalesMap from './SalesMap'
import SalesAndListingsByDay from './SalesAndListingsByDay'
import ProfitsByMonth from './ProfitsByMonth'
import TopValueBoxes from './TopValueBoxes'
import VariableLineGraph from './VariableLineGraph'
import NoDataFound from '../../styles/elements/NoDataFound'
import styled from 'styled-components'

export const CompareView = ({ data, compareData }) => {
  return (
    <Flex width={[1]}>

      {JSON.stringify(data) !== '{}' ? <DataColumn data={data} /> : <EmptyColumn idx={1} />}
      {!compareData.msg ? <DataColumn data={compareData} /> : <EmptyColumn idx={2} />}
    </Flex>
  )
}

const DataColumn = ({ data }) => (
  <Flex flexDirection='column' width={[1]}>
    <TotalEarningsView data={data} />
    <Flex>
      <TopValueBoxes data={data} width={[1]} minWidth='60%' /> {/* minWidth is to just make sure all boxes wrap */}
    </Flex>
    <Flex>
      <RevenueOverview data={data} />
    </Flex>
    <Flex>
      <SalesByPaymentType data={data} />
    </Flex>
    <Flex>
      <SalesByDate data={data} />
    </Flex>
    <Flex>
      <SalesByCategory data={data} hideBoxes halfSize />
    </Flex>
    <Flex>
      <VariableLineGraph data={data} />
    </Flex>
    <Flex>
      <SalesMap data={data} />
    </Flex>
    <Flex>
      <SalesAndListingsByDay data={data} />
    </Flex>
    <Flex>
      <ProfitsByMonth data={data} />
    </Flex>

  </Flex>
)

const EmptyColumn = ({ idx }) => {
  return (
    <Flex width={[1]}>
      <ScrollContainer>
        <NoDataMsg
          msg={
           `We couldn't find any sales in your ${idx === 1 ? 'first' : 'second'} date range.`
          }
          title='Shoot!'
        />
      </ScrollContainer>
    </Flex>
  )
}
const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const NoDataMsg = styled(NoDataFound)`
  position: sticky;
  top: 40%;

`
