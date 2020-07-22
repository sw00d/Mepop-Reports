import React from 'react'
import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, Legend
} from 'recharts'

import Card from '../../elements/Card'
import theme from '../../../theme'
import { ChartWrap } from '../styleUtil'

const Barchart = ({
  color,
  color2,
  data,
  xdataKey,
  barDataKey,
  barDataKey2,
  barGap,
  barSize,
  tickFormatter,
  labelFormatter,
  ...props
}) => {
  return (
    <Card {...props}>
      <ChartWrap>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} barCategoryGap={barGap} barSize='10px'>
            <XAxis dataKey={xdataKey} tickFormatter={tickFormatter} />
            <Tooltip labelFormatter={labelFormatter} />
            <Bar
              dataKey={barDataKey}
              type='monotone'
              fill={theme.colors[color] || theme.colors.primary}
            />
            {
              barDataKey2 ? (

                <Bar
                  dataKey={barDataKey2}
                  type='monotone'
                  fill={theme.colors[color2] || theme.colors.primary}
                />
              ) : null
            }
            <Legend />

          </BarChart>
        </ResponsiveContainer>
      </ChartWrap>

    </Card>
  )
}

export default Barchart
