import currency from 'currency.js'
import ValueBox from '../../styles/reporting/ValueBox'
import Card from '../../styles/elements/Card'
import HorzDivider from '../../styles/elements/HorzDivider'
import Tooltip from '../../styles/elements/Tooltip'
import Text from '../../styles/elements/Text'
import RadialChart from '../../styles/reporting/RadialChart'
import Flex from '../../styles/layout/Flex'
import styled from 'styled-components'
import BlurBackground from './BlurBackground'
import { useSelector } from 'react-redux'
import { formatNum } from '../reports/util/general'

const SaleDetails = ({ row, getUrl, onClose, chartHeight, currencyType, ...props }) => {
  const { user } = useSelector(state => state.generalReducer)
  const isBasic = user.membership.type === 'basic'
  const chartData = [
    {
      name: 'Sale Price', value: currency(row['item price']).value, fill: 'green'
    },
    {
      name: 'Buyer Shipping', value: currency(row['buyer-paid shipping']).value, fill: 'blueLight'
    },
    {
      name: 'Seller Shipping', value: currency(row['seller-paid shipping']).value, fill: 'bluePastel'
    },
    {
      name: 'Depop Fees', value: currency(row['depop fees']).value, fill: 'red'
    }
  ]
  return (
    <Card
      minWidth='500px'
      defaultTooltip={`Sale card - @${row.username}`}
      headerContent={<CardTitle getUrl={getUrl} row={row} onClose={onClose} />}
      headerBorder='none'
      background='mainBg'
      {...props}
    >
      {isBasic ? <BlurBackground component='Sale Details' /> : null}

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
            radius={60}
            data={chartData}
            height={chartHeight}
          />
          <ValueBox
            m='0px'
            mr='4px'
            title='Item Description'
            string
            value={(
              <Description>
                {row['item description']}
                <HorzDivider my='10px' color='success' />
                <strong>Buyer:</strong> {row.name}<br />
                <strong>Sale Price:</strong> {formatNum(currencyType, currency(row['item price']).value)}<br />
                <strong>Buyer-Paid Shipping:</strong> {formatNum(currencyType, currency(row['buyer-paid shipping']).value)}<br />
                <strong>Seller-Paid Shipping:</strong> {formatNum(currencyType, currency(row['seller-paid shipping']).value)}<br />
                <strong>Depop Fees:</strong> {formatNum(currencyType, currency(row['depop fees']).value)}<br />
                <strong>Address:</strong> {row.address}<br />
              </Description>
            )}
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
      {
        onClose ? (
          <Button onClick={onClose}>
            <i className='fa fa-close' />
          </Button>
        ) : null
      }
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
    color: ${({ theme }) => theme.colors.greyDarkest};
`
const Button = styled.button`
  border: none;
  background: transparent;
  cursor:pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.greyDark};
  transition: .1s;
  &:hover {

    color: ${({ theme }) => theme.colors.greyDarkest};
  }

`
