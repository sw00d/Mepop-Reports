import { memo, useMemo, useState } from 'react'
import moment from 'moment'

import LineChart from '../../../styles/reporting/LineChart'

import { groupByDate } from '../util/grouping'
import Flex from '../../../styles/layout/Flex'
import Button from '../../../styles/elements/Button'

const VariableLineChart = memo(({ data }) => {
  const [variables, updateVars] = useState([
    { dataKey: 'Items Sold', size: 70, color: 'teal', disabled: false },
    { dataKey: 'Gross', size: 70, color: 'pastelPurple', disabled: true },
    { dataKey: 'Net', size: 70, color: 'pastelGreen', disabled: true }
  ])
  const chartData = useMemo(() => groupByDate(data, true), [data])
  const handleClick = i => {
    const newVars = [...variables]
    newVars[i].disabled = !newVars[i].disabled
    updateVars(newVars)
  }
  const Buttons = () => (
    <Flex>
      {
        variables.map(({ dataKey, color, disabled }, i) => (
          <Button
            key={i}
            mr='4px'
            bg='mainBg'
            color={disabled ? 'greyDark' : color}
            onClick={() => handleClick(i)}
          >
            {dataKey}
          </Button>
        ))
      }

    </Flex>
  )
  return (
    <LineChart
      headerContent={<Buttons />}
      data={chartData}
      xdataKey='Date Sold'
      lines={variables}
      hideDot
      tickFormatter={formatXAxis}
      labelFormatter={formatLabel}
      formatTooltip={(t, l) => formatTooltip(t, l, data)}
    />
  )
})

export default (VariableLineChart)

const formatXAxis = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('M/D') }
const formatLabel = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('MMM Do YYYY') }

const formatTooltip = (value, name, props) => {
  if (name !== 'Items Sold') {
    const num = value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return `$${num}`
  }
  return value
}
