import React from 'react'
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from 'recharts'

import Card from '../../elements/Card'
import theme from '../../../theme'
import { ChartWrap } from '../styleUtil'

const Linechart = ({
  data,
  xdataKey,
  disableAnimation,
  labelFormatter,
  tickFormatter,
  formatTooltip,
  color,
  hideDot,
  lines,
  ...props
}) => {
  return (
    <Card {...props}>
      <ChartWrap>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data}>
            <XAxis dataKey={xdataKey} tickFormatter={tickFormatter} />
            <Tooltip labelFormatter={labelFormatter} formatter={formatTooltip} />
            {
              lines.map(({ size, dataKey, disabled, color }, i) => {
                if (disabled) return null
                return (
                  <Line
                    key={i}
                    isAnimationActive={typeof disableAnimation !== 'boolean'}
                    dataKey={dataKey}
                    type='monotone'
                    dot={!hideDot}
                    stroke={theme.colors[color] || theme.colors.primary}
                    strokeWidth={2}
                  />
                )
              })
            }

          </LineChart>
        </ResponsiveContainer>
      </ChartWrap>
    </Card>
  )
}

export default Linechart
