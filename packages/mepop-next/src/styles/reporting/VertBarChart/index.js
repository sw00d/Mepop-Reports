import React from 'react'
import {
  Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer,
  BarChart,
  Cell
} from 'recharts'

import Card from '../../elements/Card'
import { ChartWrap } from '../styleUtil'
import theme from '../../../theme'

const VertBarChart = ({
  data,
  ydataKey,
  xdataKey,
  height,
  formatTooltip,

  ...props
}) => {
  return (
    <Card {...props}>
      <ChartWrap height={height}>
        <ResponsiveContainer width='100%' height='100%'>

          <BarChart
            layout='vertical'
            data={data}
            margin={{ top: 10, right: 20, bottom: 0, left: 50 }}
          >
            <XAxis type='number' />
            <YAxis dataKey={ydataKey} type='category' />
            <Tooltip formatter={formatTooltip} />
            <Bar dataKey={xdataKey}>
              {
          	    data.map((entry, index) => {
                  const currentColor = getColor(entry, index)
            	    return <Cell key={index} fill={currentColor} />
                })
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartWrap>

    </Card>
  )
}

export default VertBarChart

const getColor = (entry, index) => {
  const i = theme.colors.pastelArray[index] ? index : index - theme.colors.pastelArray.length

  return theme.colors.pastelArray[i]
}
