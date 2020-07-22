import HeatMap from 'react-heatmap-grid'
import Tooltip from '../../elements/Tooltip'
import Card from '../../elements/Card'
import theme from '../../../theme'
import styled from 'styled-components'

const BubbleChart = ({ height, color, data, xLabels, yLabels, tooltipContent, onClick, ...props }) => {
  return (
    <Card {...props}>

      <ChartWrap height={height}>

        <HeatMap
          background={color || theme.colors.pastelTeal}
          xLabels={xLabels}
          yLabels={yLabels}
          xLabelsLocation='bottom'
          data={data}
          onClick={onClick}
          cellRender={(value, x, y) => (
            <Tooltip
              title={tooltipContent(value, x, y)}
              delay={0}
              hideOnClick={false}
              stickyDuration={50}
              arrow={false}
              offset={-25}
              positio='top-start'
              animation='shift'
            >
              <Value />
            </Tooltip>
          )}
          unit='Items Sold'
        />

      </ChartWrap>
    </Card>
  )
}
export default BubbleChart

export const ChartWrap = styled.div`
  display:flex;
  flex-wrap:wrap;

  height: ${({ height }) => height || 300}px;
  width:100%;
  padding: 20px 10px 0px 10px;
  justify-content:center;

  >div {
    overflow: auto;
  }
`
const Value = styled.div`
  height: 30px;
  margin-top: -8px;
`
