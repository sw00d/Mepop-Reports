import currency from 'currency.js'
import ValueBox from '../../styles/reporting/ValueBox'
import Card from '../../styles/elements/Card'
import Tooltip from '../../styles/elements/Tooltip'
import Text from '../../styles/elements/Text'
import RadialChart from '../../styles/reporting/RadialChart'
import Flex from '../../styles/layout/Flex'
import styled from 'styled-components'

const SaleDetails = ({ row, getUrl, onClose }) => {
  const chartData = [
    {
      name: 'Sale Price', value: currency(row['item price']).value, fill: 'green'
    },
    {
      name: 'Shipping', value: currency(row['buyer-paid-shipping']).value, fill: 'blueLight'
    },
    {
      name: 'Fees', value: currency(row.fees).value, fill: 'red'
    }
  ]
  return (
    <Card
      minWidth='500px'
      defaultTooltip={`Sale card - @${row.username}`}
      headerText={<CardTitle getUrl={getUrl} row={row} onClose={onClose} />}
    >
      <Flex justifyContent='space-between' width={[1]} flexWrap='wrap'>

        <ValueBox
          smallText
          title='Date Listed'
          string
          value={row['date listed']}
        />
        <ValueBox
          smallText
          title='Date Sold'
          string
          value={row['date sold']}
        />
        <ValueBox
          smallText
          title='Days In Shop'
          value={row['days listed']}
        />
      </Flex>
      <Flex flexDirection='column' width={[1]}>
        <Flex alignItems='center' width={[1]} justifyContent='center'>

          <RadialChart
            data={chartData}
          />
          <ValueBox
            ml='0px'
            title='Item Description'
            string
            value={<Description>{row['item description']}</Description>}
            value2='-'
          />
        </Flex>
      </Flex>
    </Card>
  )
}
export default SaleDetails

const CardTitle = ({ row, getUrl, onClose }) => {
  return (
    <Flex justifyContent='space-between' width={[1]} alignItems='center'>

      <Text>
          Buyer -{' '}
        <Tooltip title={`Visit ${row.username}'s Shop`}>

          <A
            target='_blank'
            rel='noopener noreferrer'
            href={getUrl(row.username)}
          >
            @{row.username}
          </A>
        </Tooltip>
      </Text>
      <Button onClick={onClose}>
        <i className='fa fa-close' />
      </Button>
    </Flex>
  )
}

const A = styled.a`
    color: ${({ theme }) => theme.colors.greyDarker};
`
const Description = styled.div`
    height: 180px;
    overflow: auto;
    font-size: 15px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
`
const Button = styled.button`
  border: none;
  background: transparent;
  cursor:pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.greyDark};
  transition: .1s;
  &:hover {

    color: ${({ theme }) => theme.colors.black};
  }

`
