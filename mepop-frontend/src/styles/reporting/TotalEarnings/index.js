import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts'
import Switch from '../../elements/Switch'
import theme from '../../../theme'
import { ActiveShape } from '../RadialChart'
import {
  Container,
  ChartContainer,
  TitleContainer,
  BoxTitle,
  SwitchContainer,
  BoxValue
} from './styles'

const COLORS = [theme.colors.pastelOrange, theme.colors.pastelRose, theme.colors.greenSoft, theme.colors.pastelBlue, theme.colors.blueLight]

const TotalEarnings = ({
  title,
  value = 0,
  currencyType,
  float,
  data,
  disableAnimation,
  netValue,
  ...rest
}) => {
  const [index, setIndex] = useState(0)
  const [net, setNet] = useState(false)
  const [activeVal, setActiveVal] = useState(value)

  useEffect(() => {
    setActiveVal(value)
  }, [value])
  return (
    <Container flexDirection='row' justifyContent='space-evenly' {...rest}>
      {
        title
          ? (
            <TitleContainer>

              <BoxTitle>
                {title.toUpperCase()}
              </BoxTitle>
              <SwitchContainer>
                <Switch
                  label='Show Net Profit'
                  checked={net}
                  onChange={() => {
                    setNet(!net)
                    setActiveVal(value === activeVal ? netValue : value)
                  }}
                />

              </SwitchContainer>
              <BoxValue>
                {currencyType}
                <CountUp
                  formattingFn={
                    num => num.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })
                  }
                  decimals={float ? 2 : 0}
                  start={activeVal === value ? parseFloat(netValue) : parseFloat(value)}
                  end={float ? parseFloat(activeVal) : typeof activeVal === 'number' ? activeVal : 0}
                />
              </BoxValue>
            </TitleContainer>)
          : null
      }
      <ChartContainer>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              activeIndex={index}
              activeShape={(props) => <ActiveShape {...props} currency={currencyType} />}
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey='value'
              isAnimationActive={typeof disableAnimation !== 'boolean'}
              onMouseEnter={(_, i) => setIndex(i)}
            >
              {
                data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                )
                )
              }
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  )
}

export default TotalEarnings
