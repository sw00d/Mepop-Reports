import React from 'react'
import PropTypes from 'prop-types'
import { Column, Table as TableComp } from 'react-virtualized' // https://github.com/bvaughn/react-virtualized
import Card from '../Card'
import theme from '../../../theme'

const Table = (props) => {
  const { data, columnLabels, tableHeight, tableWidth, handleRowClick, background, activeRow } = props
  return (
    <Card {...props}>

      <TableComp
        width={tableWidth || 250}
        height={tableHeight || 280}
        headerHeight={20}
        rowWidth='100%'
        rowHeight={30}
        onRowClick={handleRowClick}
        rowStyle={({ index }) => rowStyle({ handleRowClick, index }, activeRow)}
        rowCount={data.length}
        rowGetter={({ index }) => {
          return data[index]
        }}
        style={{
          willChange: 'auto',
          width: '100%',
          height: props.height,
          background: background || theme.colors.mainBg,
          borderRadius: theme.borderRadius.normal,
          transition: '.2s'
        }}
      >
        {columnLabels.map((label, i) => {
          return (
            <Column
              key={label + i}
              label={label}
              dataKey={[label]}
              cellDataGetter={({ rowData }) => rowData[label]}
              width={100}
            />
          )
        })}
      </TableComp>
    </Card>

  )
}
export default Table

Table.propTypes = {
  tableHeight: PropTypes.number, // specificies table height
  tableWidth: PropTypes.number,
  height: PropTypes.string, // specificies card height
  width: PropTypes.string,
  data: PropTypes.array,
  columnLabels: PropTypes.array
  // There's a lot more potentially because of rebass's styling system that we pass to
  // the card wrapper, but that'll do for now.
}

const rowStyle = (props, activeRow) => {
  return (
    {
      cursor: props.handleRowClick ? 'pointer' : 'default',
      color: activeRow === props.index && props.index !== -1 ? theme.colors.mainBg
        : theme.colors.textGrey,
      background:
        activeRow === props.index && props.index !== -1 ? theme.colors.pastelTeal
          : props.index % 2 === 0
            ? theme.colors.greyLight2
            : theme.colors.mainBg
    }
  )
}
