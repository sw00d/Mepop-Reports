
import { groupByPaymentType } from '../util/grouping'
import Flex from '../../../styles/layout/Flex'
import Text from '../../../styles/elements/Text'
import PieChart from '../../../styles/reporting/PieChart'
import { useState } from 'react'
import Card from '../../../styles/elements/Card'
import styled from 'styled-components'

const SalesByPaymentType = ({ data }) => {
  const [chartType, toggleChartType] = useState(false)
  const chartData = groupByPaymentType(data)

  return (
    <Card flexDirection='row'>

      <PieChart
        boxShadow='none'
        data={chartData}
        dataKey={chartType ? 'sold' : 'gross'}
        currencyType={data.currency_type}
        switchLabel='Show # of Items'
        switchCheck={chartType}
        switchEvent={() => {
          toggleChartType(!chartType)
        }}
      />
      <Flex height='40%' flexDirection='column' pr={5} justifyContent='flex-start' alignItems='center'>
        <Title color='primary' fontSize={25} mb='10px'>Payment Types</Title>
        {
          chartData.map(({ name, gross, color }, i) => {
            return (
              <Text key={i} color={color} fontSize={17} fontWeight={600}>
                {name} - {formatNum(data.currency_type, gross)}
              </Text>
            )
          })
        }
      </Flex>
    </Card>

  )
}

export default (SalesByPaymentType)

const formatNum = (type, num) => {
  return type + num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const Title = styled(Text)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainBg};
  width: 200px;
  padding-bottom:3px;
  text-align: center;
`
