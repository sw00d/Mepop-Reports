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

export const CompareView = ({ data, compareData }) => {
  return (
    <Flex flexDirection='column'>
      <Flex>
        <TotalEarningsView half data={data} />
        <TotalEarningsView half data={compareData} />
      </Flex>
      <Flex>
        <TopValueBoxes data={data} minWidth='45%' />
        <TopValueBoxes data={compareData} minWidth='45%' />
      </Flex>
      <Flex>
        <RevenueOverview data={data} />
        <RevenueOverview data={compareData} />
      </Flex>
      <Flex>
        <SalesByPaymentType data={data} />
        <SalesByPaymentType data={compareData} />
      </Flex>
      <Flex>
        <SalesByDate data={data} />
        <SalesByDate data={compareData} />
      </Flex>
      <Flex>
        <SalesByCategory data={data} hideBoxes halfSize />
        <SalesByCategory data={compareData} hideBoxes halfSize />
      </Flex>
      <Flex>
        <VariableLineGraph data={data} />
        <VariableLineGraph data={compareData} />
      </Flex>
      <Flex>
        <SalesMap data={data} />
        <SalesMap data={compareData} />
      </Flex>
      <Flex>
        <SalesAndListingsByDay data={data} />
        <SalesAndListingsByDay data={compareData} />
      </Flex>
      <Flex>
        <ProfitsByMonth data={data} />
        <ProfitsByMonth data={compareData} />
      </Flex>

    </Flex>
  )
}
