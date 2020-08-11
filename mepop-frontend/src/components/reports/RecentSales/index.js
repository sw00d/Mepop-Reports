
import { useState, useEffect } from 'react'

import { getRecentSales } from '../util/tables'
import Table from '../../../styles/elements/Table'
import SaleDetails from '../../general/SaleDetails'
import Flex from '../../../styles/layout/Flex'

const RecentSales = ({ data }) => {
  const tableData = getRecentSales(data)
  const [activeRow, activateRow] = useState(tableData[0])
  const [idx, activateIdx] = useState(0)
  useEffect(() => {
    if (JSON.stringify(activeRow) !== JSON.stringify(tableData[0])) {
      activateRow(tableData[0])
    }
  }, [tableData])
  return (
    <Flex flexWrap='wrap'>

      <Table
        background='mainBg'
        minWidth='300px'
        tableHeight={380}
        headerContent='Recent Sales'
        data={tableData}
        activeRow={idx}
        handleRowClick={(row) => {
          activateRow(tableData[row.index])
          activateIdx(row.index)
        }}
        columnLabels={
          ['date sold', 'username', 'item price']
        }
        p='0px'
      />
      {activeRow
        ? (
          <SaleDetails
            row={activeRow} getUrl={data.getUrl} currencyType={data.currency_type}
          />
        )
        : null}
    </Flex>
  )
}

export default (RecentSales)

// const formatXAxis = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('M/D') }
// const formatTooltip = (tickItem) => { return moment(tickItem, 'MM/DD/YYYY').format('MMM Do YYYY') }
