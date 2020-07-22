
import { useState } from 'react'

import Table from '../../../styles/elements/Table'
import Flex from '../../../styles/layout/Flex'
import SaleDetails from '../../general/SaleDetails'

const SaleTable = ({ data, getUrl }) => {
  const [activeRow, activateRow] = useState(data[0])
  const idx = data.indexOf(activeRow)

  return (
    <Flex mb='30px' flexWrap='wrap'>

      <Table
        minWidth='500px'
        activeRow={idx}
        headerText={`All Sales - ${data.length}`}
        data={data}
        columnLabels={
          ['date sold', 'username', 'item price', 'buyer-paid-shipping', 'item description']
        }
        handleRowClick={(row, i) => {
          activateRow(row.rowData)
        }}
        p='0px'
        // height='320px'
        tableHeight={420 - 40}
      />
      {activeRow
        ? (
          <SaleDetails row={activeRow} getUrl={getUrl} onClose={() => activateRow(null)} />
        )
        : null}
    </Flex>
  )
}

export default SaleTable
