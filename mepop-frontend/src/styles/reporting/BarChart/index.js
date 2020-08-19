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
  disableAnimation,
  bars = [],
  hideLegend,
  ...props
}) => {
  return (
    <Card {...props}>
      <ChartWrap height={400}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <XAxis dataKey={xdataKey} tickFormatter={tickFormatter} />
            <Tooltip labelFormatter={labelFormatter} formatter={formatTooltip} />
            {!hideLegend ? (
              <Legend
                verticalAlign='top'
                iconType='circle'
                align='left'
              />
            ) : null}
            {
              bars.map(({ size, dataKey, color }, i) => {
                return (
                  <Bar
                    isAnimationActive={typeof disableAnimation !== 'boolean'}
                    key={i}
                    barSize={size}
                    dataKey={dataKey}
                    type='monotone'
                    fill={theme.colors[color] || theme.colors.primary}
                  />)
              })
            }

          </BarChart>
        </ResponsiveContainer>
      </ChartWrap>

    </Card>
  )
}

export default Barchart
