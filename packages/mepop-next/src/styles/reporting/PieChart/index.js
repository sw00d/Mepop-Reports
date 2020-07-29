import React from 'react'
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts'

import Card from '../../elements/Card'
import Flex from '../../layout/Flex'
import styled from 'styled-components'

const Piechart = ({
  data,
  dataKey,
  ...props
}) => {
  return (
    <Card {...props} width={[1]}>
      <ChartContainer>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              innerRadius={10}
              dataKey={dataKey}

            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
              }
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

    </Card>
  )
}

export default Piechart

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const ChartContainer = styled(Flex)`
  display: flex;
  height: 260px;
  width:100%;
`
