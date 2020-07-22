import React from 'react'
import Card from '../../styles/elements/Card'
import Flex from '../../styles/layout/Flex'
import Table from '../../styles/elements/Table'
import Text from '../../styles/elements/Text'
import { formatSalesTable } from '../reports/util/tables'

function SalesTable ({ data, labels, onClose, title, ...props }) {
  const tableData = formatSalesTable({ sales: data })
  return (
    <>
      {
        data.length
          ? (
            <Table
              minWidth='300px'
              height='100%'
              onClose={onClose}
              headerText={title || 'Sales Table'}
              data={tableData}
              columnLabels={
                labels || ['date sold', 'username', 'item price']
              }
              p='0px'
              {...props}
            />
          )
          : (
            <Card background='mainBg' onClose={onClose} headerText={title || 'Sales Table'} minWidth='300px' {...props}>
              <Flex height='100%' width={[1]} justifyContent='center' pt='40px'>
                <Text notFound>No Sales</Text>
              </Flex>
            </Card>)
      }
    </>
  )
}

export default SalesTable
