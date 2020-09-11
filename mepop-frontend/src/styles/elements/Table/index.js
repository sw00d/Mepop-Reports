import React from 'react'
import { Column, Table as TableComp } from 'react-virtualized' // https://github.com/bvaughn/react-virtualized
import Card from '../Card'
import theme from '../../../theme'
import styled from 'styled-components'

const Table = (props) => {
  const { data, columnLabels, tableHeight, tableWidth, handleRowClick, background, activeRow, sort = null, sortBy, sortDirection } = props
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
        sort={sort}
        sortBy={sortBy}
        sortDirection={sortDirection}
      >
        {columnLabels.map((label, i) => {
          return (
            <Column
              headerRenderer={headerRenderer}
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

export const rowStyle = (props, activeRow) => {
  return (
    {
      cursor: props.handleRowClick ? 'pointer' : 'default',
      color: activeRow === props.index && props.index !== -1 ? theme.colors.mainBg
        : theme.colors.textGrey,
      background:
        activeRow === props.index && props.index !== -1 ? theme.colors.teal
          : props.index % 2 === 0
            ? theme.colors.greyLight2
            : theme.colors.mainBg
    }
  )
}

const headerRenderer = ({ sortBy, label, sortDirection }) => {
  return (
    <div>
      {label}
      {
        sortBy && sortDirection ? (
          <>
            {sortBy[0] === label ? (
              sortDirection === 'ASC' ? <Icon className='fa fa-caret-up' /> : <Icon className='fa fa-caret-down' />
            ) : null}
          </>
        ) : null
      }
    </div>
  )
}

const Icon = styled.div`
  position: absolute;
  margin-left: 3px;
  font-size: 14px;
`
