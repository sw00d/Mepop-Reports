import React from 'react'
import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, Legend
} from 'recharts'

import Card from '../../elements/Card'
import theme from '../../../theme'
import { ChartWrap } from '../styleUtil'

const Barchart = ({
  data,
  xdataKey,
  tickFormatter,
  labelFormatter,
  formatTooltip,
  bars = [],
  ...props
}) => {
  return (
    <Card {...props}>
      <ChartWrap>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <XAxis dataKey={xdataKey} tickFormatter={tickFormatter} />
            <Tooltip labelFormatter={labelFormatter} formatter={formatTooltip} />
            {
              bars.map(({ size, dataKey, color }, i) => {
                return (
                  <Bar
                    key={i}
                    barSize={size}
                    dataKey={dataKey}
                    type='monotone'
                    fill={theme.colors[color] || theme.colors.primary}
                  />)
              })
            }

            <Legend />

          </BarChart>
        </ResponsiveContainer>
      </ChartWrap>

    </Card>
  )
}

export default Barchart
