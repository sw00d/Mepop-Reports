import React from 'react'
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from 'recharts'

import Card from '../../elements/Card'
import theme from '../../../theme'
import { ChartWrap } from '../styleUtil'

const Linechart = props => {
  return (
    <Card {...props}>
      <ChartWrap>

        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={props.data}>
            <XAxis dataKey={props.xdataKey} />
            <Tooltip />
            <Line dataKey={props.lineDataKey} type='monotone' stroke={theme.colors[props.color] || theme.colors.primary} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrap>
    </Card>
  )
}

export default Linechart
