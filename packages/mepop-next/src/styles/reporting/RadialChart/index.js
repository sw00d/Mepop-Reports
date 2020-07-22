import React, { useState } from 'react'
import {
  PieChart, Pie, Cell, ResponsiveContainer, Sector
} from 'recharts'
import theme from '../../../theme'
import styled from 'styled-components'
import Card from '../../elements/Card'
import { useSelector } from 'react-redux'

const COLORS = [theme.colors.warning, theme.colors.sunset, theme.colors.greenSoft, theme.colors.pastelBlueLight]

const RadialGraph = ({
  float,
  data,
  radius = 50,
  ...rest
}) => {
  const [index, setIndex] = useState(0)
  const { allData: { currency_type } } = useSelector(state => state.generalReducer)
  return (
    <ChartContainer>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            activeIndex={index}
            activeShape={(props) => <ActiveShape {...props} currency={currency_type} />}
            data={data}
            innerRadius={radius}
            outerRadius={radius + 20}
            fill='#8884d8'
            paddingAngle={5}
            dataKey='value'
            onMouseEnter={(_, i) => setIndex(i)}
          >
            {
              data.map((set, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={theme.colors[set.fill] || COLORS[index % COLORS.length]}
                  />
                )
              }
              )
            }
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default RadialGraph

const ActiveShape = (props) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, currency
  } = props
  const value = payload.value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor='middle' fill={fill}>{payload.name}</text>
      <text x={cx} y={cy + 10} dy={8} textAnchor='middle' fill={fill}>
        {currency}{value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius + 5}
        outerRadius={outerRadius + 5}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

    </g>
  )
}

export const ChartContainer = styled.div`
  min-width: 250px;
  height: 100px;
  min-height: 250px;
  display: flex;
  align-items:center;
`

export const Container = styled(Card)`
    
    @media only screen and (max-width: 80px) {
        flex-direction: column;
    }
  `
