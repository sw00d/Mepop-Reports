import React from 'react'
import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, YAxis
} from 'recharts'
import styled from 'styled-components'

// styles
import Card from '../../../styles/elements/Card'
import theme from '../../../theme'

const Barchart = ({
  color,
  data,
  xdataKey,
  barDataKey,
  highlight,
  barGap,
  barSize,
  ...props
}) => {
  const getColor = (entry, i) => {
    if (highlight) {
      if (highlight.condition(entry, i)) {
        return theme.colors[highlight.color]
      } else {
        return theme.colors[color] || theme.colors.primary
      }
    } else {
      return theme.colors[color] || theme.colors.primary
    }
  }

  return (
    <Card {...props}>
      <Title>Net Profit by month</Title>
      <ChartWrap>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} barCategoryGap={barGap} barSize='10px'>
            <XAxis dataKey={xdataKey} />
            {/* <YAxis dataKey='sales' /> */}
            <Tooltip formatter={formatTooltip} label='Net Profit' />
            <Bar
              dataKey={barDataKey}
              type='monotone'
            >
              {
                data.map((entry, index) => {
                  const currentColor = getColor(entry, index)
                  return (<Cell key={index} fill={currentColor} />)
                })
              }
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </ChartWrap>

    </Card>
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
