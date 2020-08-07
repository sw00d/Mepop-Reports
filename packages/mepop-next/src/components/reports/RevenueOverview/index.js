import { useState, memo } from 'react'

import { groupByWeek } from '../util/grouping'

import Card from '../../../styles/elements/Card'
import Text from '../../../styles/elements/Text'
import Flex from '../../../styles/layout/Flex'
import Areachart from '../../../styles/reporting/AreaChart'
import styled from 'styled-components'
import theme from '../../../theme'

const RevenueOverview = memo(({ data }) => {
  const chartData = groupByWeek(data)
  const [week, setWeek] = useState(chartData[chartData.length - 1].week)
  const [revenue, setRevenue] = useState({ gross: chartData[chartData.length - 1].Gross, net: chartData[chartData.length - 1].Net })

  const onHover = (val1, val2) => {
    if (val2 === 'Gross') {
      if (revenue.gross !== val1) {
        setRevenue({ ...revenue, gross: val1 })
      }
    } else if (val2 === 'Net') {
      if (revenue.net !== val1) {
        setRevenue({ ...revenue, net: val1 })
      }
    } else {
      setWeek(val1)
    }
  }
  return (
    <Card
      sx={{ overflow: 'hidden', boxShadow: theme.shadows.normal }}
      minHeight='420px'

      // proOnly={{
      //   component: 'Revenue Overview',
      //   img: 'revenue-overview.png'
      // }}
    >
      <Flex flexDirection='column' width={[1]} p={50}>

        <Title color='primary' fontSize={25}>{week}</Title>
        <Text pt='10px' color='pastelGreen' fontSize={20} fontWeight={600}>
          Gross: {formatNum(data.currency_type, revenue.gross)}
        </Text>
        <Text color='pastelPurple' fontSize={20} fontWeight={600}>
          Net: {formatNum(data.currency_type, revenue.net)}
        </Text>
      </Flex>
      <Areachart
        boxShadow='none'
        data={chartData}
        xdataKey='Date Sold'
        onHover={onHover}
        areas={[
          { key: 'Gross', color: 'pastelGreen' },
          { key: 'Net', color: 'pastelPurple' }
        ]}
      />
    </Card>

  )
})

export default RevenueOverview

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
`
