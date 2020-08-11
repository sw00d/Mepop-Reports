
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Table from '../../../styles/elements/Table'
import Input from '../../../styles/elements/Input'
import Flex from '../../../styles/layout/Flex'
import SaleDetails from '../../general/SaleDetails'
import Text from '../../../styles/elements/Text'
import { formatSalesTable } from '../../reports/util/tables'

const SaleTable = ({ data, getUrl }) => {
  const formattedData = formatSalesTable(data)
  const [searchTerm, setTerm] = useState('')
  const [tableData, setTableData] = useState(formattedData)
  const [activeRow, activateRow] = useState(tableData[0])
  const idx = tableData.indexOf(activeRow)

  useEffect(() => {
    if (!searchTerm) setTableData(data)
    const filtered = formattedData.filter((item) => {
      return (
        item.username.includes(searchTerm) ||
        item.name.includes(searchTerm) ||
        item['date sold'].includes(searchTerm) ||
        item['item price'].includes(searchTerm) ||
        item.name.includes(searchTerm) ||
        item['item description'].includes(searchTerm)
      )
    })
    setTableData(filtered)
  }, [searchTerm, data])
  return (
    <Flex mb='30px' flexWrap='wrap'>
      <Table
        minWidth='500px'
        activeRow={idx}
        headerContent={<Header data={tableData} setTerm={setTerm} term={searchTerm} />}
        data={tableData}
        columnLabels={
          !activeRow
            ? ['date sold', 'username', 'name', 'item price', 'buyer-paid shipping', 'seller-paid shipping', 'depop fees', 'item description']
            : ['date sold', 'username', 'name', 'item price']
        }
        handleRowClick={(row, i) => {
          activateRow(row.rowData)
        }}
        p='0px'
        tableHeight={420 - 40}
      />
      {activeRow
        ? (
          <SaleDetails row={activeRow} getUrl={getUrl} onClose={() => activateRow(null)} currencyType={data.currency_type} />
        )
        : null}
    </Flex>
  )
}

export default SaleTable

const Header = ({ data, setTerm, term }) => {
  return (
    <Flex alignItems='center' justifyContent='space-between' width={[1]}>
      <Text mr='5px'>
          All Sales - {data.length}
      </Text>
      <Flex>

        <StyledInput
          borderColor='greyLight'
          placeholder='Search...'
          pl='10px'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </Flex>
    </Flex>
  )
}

const StyledInput = styled(Input)`
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.mainBg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
