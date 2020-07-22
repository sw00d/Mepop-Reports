import React from 'react'
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts'

import Card from '../../elements/Card'
import theme from '../../../theme'
import { ChartWrap } from '../styleUtil'

const Piechart = ({
  color,
  color2,
  data,
  dataKey,
  tickFormatter,
  labelFormatter,
  currencyType,
  ...props
}) => {
  return (
    <Card {...props} width={[1]}>
      <ChartWrap height={400}>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              innerRadius={10}
              dataKey={dataKey}
              paddingAngle={5}

            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
              }
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </ChartWrap>

    </Card>
  )
}

export default Piechart

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

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
