import React from 'react'
import Card from '../../styles/elements/Card'
import Flex from '../../styles/layout/Flex'
import Table from '../../styles/elements/Table'
import Text from '../../styles/elements/Text'
import { formatSalesTable } from '../reports/util/tables'
import { useSelector } from 'react-redux'

function SalesTable ({ data, labels, onClose, title, currencyType, ...props }) {
  const { allData } = useSelector(state => state.generalReducer)
  const tableData = formatSalesTable(data.sales ? data : { sales: data, date_format: allData.date_format }, currencyType)
  return (
    <>
      {
        tableData.length
          ? (
            <Table
              minWidth='300px'
              height='100%'
              onClose={onClose}
              headerContent={title || 'Sales Table'}
              data={tableData}
              columnLabels={
                labels || ['date sold', 'username', 'item price']
              }
              p='0px'
              {...props}
            />
          )
          : (
            <Card background='mainBg' onClose={onClose} headerContent={title || 'Sales Table'} minWidth='300px' {...props}>
              <Flex height='100%' width={[1]} justifyContent='center' pt='40px'>
                <Text notFound>No Sales</Text>
              </Flex>
            </Card>)
      }
    </>
  )
}

export default SalesTable
