import { useState, memo } from 'react'
import styled from 'styled-components'

import { groupByPaymentType } from '../util/grouping'
import Flex from '../../../styles/layout/Flex'
import Text from '../../../styles/elements/Text'
import PieChart from '../../../styles/reporting/PieChart'
import Card from '../../../styles/elements/Card'

const SalesByPaymentType = memo(({ data }) => {
  const [chartType, toggleChartType] = useState(false)
  const chartData = groupByPaymentType(data)
  return (
    <Card
      minHeight='420px'
      flexDirection='row-reverse'
      flexWrap='wrap'
      sx={{
        '@media only screen and (max-width: 1200px)': {
          flexDirection: 'column'
        }
      }}
    >
      <Flex
        height='40%'
        flexDirection='column'
        mr={5}
        justifyContent='flex-start'
        alignItems='center'
        sx={{
          '@media only screen and (max-width: 1200px)': {
            paddingTop: '40px',
            margin: 0
          }
        }}
      >
        <Title color='primary' fontSize={25} mb='10px'>
          Total: {formatNum(data.currency_type, data.total_earnings)}
        </Title>
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
      <PieChart
        m={0}
        justifyContent='center'
        sx={{
          '@media only screen and (max-width: 1200px)': {
            marginBottom: '20px'
          }
        }}
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

    </Card>

  )
})

export default (SalesByPaymentType)

const formatNum = (type, num) => {
  return type + parseFloat(num).toLocaleString(undefined, {
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
