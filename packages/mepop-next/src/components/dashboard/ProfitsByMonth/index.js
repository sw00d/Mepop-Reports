import React from 'react'
import BarChart from '../../../styles/reporting/BarChart'
import styled from 'styled-components'
import { getProfitsByMonth } from '../util'

// styles

const Barchart = ({
  color,
  data,
  xdataKey,
  barDataKey,
  barGap,
  barSize,
  ...props
}) => {
  const monthlyNetProfit = getProfitsByMonth(data)

  return (
    <BarChart
      headerBorder='none'
      boxShadow='none'
      headerContent='Net Earnings By Month'
      data={monthlyNetProfit}
      formatTooltip={(t, l) => formatTooltip(t, l, data)}
      xdataKey='month'
      bars={[
        { dataKey: 'Net Profit', size: 50, color: 'pastelPurple' }
      ]}
    />
  )
}

export default Barchart

const formatTooltip = (value, name, props) => {
  return `$${value}`
}
const ChartWrap = styled.div`
  display:flex;
  flex-wrap:wrap;
  height: 300px;
  width:100%;
`
const Title = styled.div`
    width:100%;
    padding: 0px 20px;
    font-size: 18px;
    font-weight: 500;
    margin: 0px;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    border-bottom: 1px solid #e0e0e0;
    `
