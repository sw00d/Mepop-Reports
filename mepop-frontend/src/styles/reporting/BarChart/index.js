import React from 'react'
import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, YAxis
} from 'recharts'

import Card from '../../elements/Card'
import Text from '../../elements/Text'
import Box from '../../layout/Box'
import Flex from '../../layout/Flex'

import { ChartWrap } from '../styleUtil'
import theme from '../../../theme'
import { transparentize } from 'polished'

const Barchart = ({
  data,
  xdataKey,
  ydataKey,
  tickFormatter,
  ytickFormattter,
  labelFormatter,
  formatTooltip,
  disableAnimation,
  bars = [],
  hideLegend,
  ...props
}) => {
  // console.log(data)
  return (
    <Card {...props}>
      {!hideLegend ? (
        <Flex width={[1]} pl='15px'>
          {
            bars.map(({ color, dataKey }, i) => {
              return (
                <Flex key={i} mr='10px' fontSize='14px'>
                  <Box mr='5px' color={color}>
                    <i className='fa fa-circle' aria-hidden='true' />
                  </Box>
                  <Text color='greyDark'>{dataKey}</Text>
                </Flex>
              )
            })
          }

        </Flex>
      ) : null}
      <ChartWrap height={400}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            {/* {showYAxis <X} */}
            <XAxis dataKey={xdataKey} tickFormatter={tickFormatter} />
            {ydataKey ? (
              <YAxis
                dataKey={ydataKey}
                tickFormatter={ytickFormattter}
              />)
              : null}
            <Tooltip
              cursor={{ fill: transparentize(0.8, theme.colors.greyDark) }}
              labelFormatter={labelFormatter}
              formatter={formatTooltip}
            />
            {
              bars.map(({ size, dataKey, color }, i) => {
                return (
                  <Bar
                    radius={[4, 4, 0, 0]}
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
