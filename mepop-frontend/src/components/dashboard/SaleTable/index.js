
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import currency from 'currency.js'

import Table from '../../../styles/elements/Table'
import Input from '../../../styles/elements/Input'
import Flex from '../../../styles/layout/Flex'
import SaleDetails from '../../general/SaleDetails'
import Text from '../../../styles/elements/Text'
import { formatSalesTable } from '../../reports/util/tables'
import { SortIndicator } from 'react-virtualized'

const allColumns = ['date sold', 'username', 'name', 'item price', 'buyer-paid shipping', 'seller-paid shipping', 'depop fees', 'item description', 'category']
const someColumns = ['date sold', 'username', 'name', 'item price']
const sortObj = {
  ASC: true,
  by: ''
}

const SaleTable = ({ data, getUrl }) => {
  const formattedData = formatSalesTable(data, data.date_format, data.currency_type)

  const [searchTerm, setTerm] = useState('')
  const [tableData, setTableData] = useState(formattedData)
  const [activeRow, activateRow] = useState(tableData[0])
  const [sortInfo, setSortInfo] = useState(sortObj)
  const idx = tableData.indexOf(activeRow)

  useEffect(() => {
    if (!searchTerm) setTableData(data)
    const filtered = formattedData.filter((item) => {
      return (
        item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item['date sold'].includes(searchTerm) ||
        item['item price'].includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item['item description'].toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    setTableData(filtered)
  }, [searchTerm, data])

  const sortByColumn = ({ sortBy, sortDirection }) => {
    const newSortInfo = {
      by: sortBy[0],
      ASC: !sortInfo.ASC
    }
    const sorted = sort(tableData, newSortInfo)

    setTableData(sorted)

    setSortInfo(newSortInfo)
  }
  console.log(data)
  return (
    <Flex mb='30px' flexWrap='wrap'>
      <Table
        minWidth='500px'
        activeRow={idx}
        headerContent={<Header data={tableData} setTerm={setTerm} term={searchTerm} />}
        data={tableData}
        columnLabels={
          !activeRow
            ? allColumns
            : someColumns
        }
        handleRowClick={(row, i) => {
          activateRow(row.rowData)
        }}
        p='0px'
        tableHeight={420 - 40}
        sort={sortByColumn}
        sortBy={[sortInfo.by]}
        sortDirection={sortInfo.ASC ? 'ASC' : 'DESC'}
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
  const updateTerm = _.debounce((value) => {
    setTerm(value)
  }, 200)
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
          onChange={(e) => updateTerm(e.target.value)}
        />
      </Flex>
    </Flex>
  )
}

const StyledInput = styled(Input)`
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.greyDarker};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const sort = (data, { by, ASC }) => {
  let sortedData

  switch (by) {
    case 'item price': {
      sortedData = sortPrice(data, by)
      break
    }
    case 'buyer-paid shipping': {
      sortedData = sortPrice(data, by)
      break
    }
    case 'seller-paid shipping': {
      sortedData = sortPrice(data, by)
      break
    }
    case 'depop fees': {
      sortedData = sortPrice(data, by)
      break
    }
    default: {
      sortedData = sortStrings(data, by)
    }
  }
  return ASC ? sortedData : sortedData.reverse()
}

const sortStrings = (data, sortBy) => {
  const sortedData = [...data].sort((a, b) => {
    if (b[sortBy].toLowerCase() > a[sortBy].toLowerCase()) {
      return -1
    }
    if (b[sortBy].toLowerCase() < a[sortBy].toLowerCase()) {
      return 1
    }
    return 0
  })
  return sortedData
}

const sortPrice = (data, sortBy) => {
  const sortedData = [...data].sort((a, b) => {
    return currency(a[sortBy]).value - currency(b[sortBy]).value
  })
  return sortedData
}
