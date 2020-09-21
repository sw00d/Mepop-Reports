import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import { headers } from '../../assets/exampleBuyers'
import Flex from '../../styles/layout/Flex'
import Modal from '../../styles/elements/Modal'
import Button from '../../styles/elements/Button'
import Text from '../../styles/elements/Text'

const FeeBreakdown = () => {
  const { allData } = useSelector(state => state.generalReducer)
  const [modalIsOpen, openModal] = useState(false)
  const sale = allData.sales[allData.sales.length - 1]

  return (
    <Flex width='100%' pl='10px'>
      <Button mt='10px' onClick={() => openModal(true)}>
        Fee Breakdown
        <Icon className='fa fa-info-circle' />
      </Button>
      {
        modalIsOpen ? (
          <Modal isOpen={modalIsOpen} onRequestClose={() => openModal(false)}>
            <Flex p='50px' pt='0px' flexDirection='column' maxWidth='1200px'>

              <Text fontSize='25px' color='primary' fontWeight='bold' mb='0px'>Fee Breakdown</Text>
              <Text mt='5px' mb='15px'>The following fees occur with every sale made.</Text>
              <Table>

                {
                  options.map(({ title, description }, i) => {
                    return (
                      <Row key={i} bg={i % 2 ? 'greyLighter' : 'greyLightest'}>
                        <Column width='250px' title>
                          <Text color='primary' fontWeight='600'>
                            {title}
                          </Text>
                        </Column>
                        <Column width={[1]}>
                          {description}
                        </Column>
                      </Row>
                    )
                  })
                }
              </Table>
              <Text fontSize='25px' color='primary' fontWeight='bold' mt='20px' mb='0px'>Profits Breakdown</Text>
              <Text mt='5px' mb='15px'>With the fees defined above, we can accurately calculate your profits.</Text>
              <Table>
                <Row bg={options.length % 2 ? 'greyLighter' : 'greyLightest'}>
                  <Column width='250px' title>
                    <Text color='primary' fontSize='17px' fontWeight='600'>
                        Gross Profit
                    </Text>
                  </Column>
                  <Column width={[1]}>
                    <Text>
                      An aggregation of all total sale prices + buyer-shipping cost provided by Depop in column titled <strong>Total</strong>.
                    </Text>
                  </Column>
                </Row>
                <Row bg={options.length % 2 ? 'greyLightest' : 'greyLighter'}>
                  <Column width='250px' title>
                    <Text color='primary' fontSize='17px' fontWeight='600'>
                        Net Profit
                    </Text>
                  </Column>
                  <Column width={[1]}>
                    <Text>
                      To calculate net profit, we subtract the <strong>Depop Fee</strong>, <strong>Depop Payments Fee</strong>, <strong>PayPal Fee</strong>
                      , and the <strong>Seller Paid Shipping</strong> from the <strong>Gross Profit</strong>.
                    </Text>
                  </Column>
                </Row>
              </Table>
              <ExampleSale sale={sale} />
            </Flex>
          </Modal>
        ) : null
      }
    </Flex>
  )
}

export default FeeBreakdown

const ExampleSale = ({ sale }) => {
  return (
    <Flex flexDirection='column' mt='10px'>
      <Text fontSize='15px' fontWeight='bold' mb='10px'>Sample Sale</Text>
      <ExampleRow>
        {
          Object.keys(sale).map((key, i) => {
            return (
              <CellContainer key={i}>
                <ExampleCell>
                  {headers[i]}
                </ExampleCell>
                <ExampleCell>
                  {key.includes('date_of')
                    ? moment.utc(sale[key]).format('DD/MM/YYYY')
                    : sale[key].replace('_', ' ')}
                </ExampleCell>
              </CellContainer>
            )
          })
        }
      </ExampleRow>
    </Flex>
  )
}

const ExampleRow = styled(Flex)`
  overflow: auto;
  padding-bottom: 1px;
  ${({ theme }) => theme.scrollbars.light}
`
const ExampleCell = styled.div`
  padding: 3px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  white-space: nowrap;
  height: 34px;
`
const CellContainer = styled(Flex)`
  flex-shrink: 0;
  flex-direction: column;
`
const Icon = styled.i`
  margin-left: 5px;
`
const Row = styled(Flex)`
  transition: .1s;
  &:hover {
    background: ${({ theme }) => theme.colors.whiteDark};
  }
  `
const Column = styled(Flex)`
  padding: 15px;
  border-right: 1px solid ${({ theme, title }) => title ? theme.colors.greyLight : 'transparent'};
  
`
const Span = styled.span`
  transition: .2s;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: .7;
  }
`
const Table = styled(Flex)`
  border-left: ${({ theme }) => theme.colors.primary} 2px solid;
  flex-direction: column;
  overflow: auto;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
`

const options = [
  {
    title: 'Depop Fee',
    description: (
      <div>
        Depop takes 10% of every sale made. This value is pre-calculated by Depop and provided with the uploaded files in the column <strong>Depop fee</strong>.
      </div>
    )
  },
  {
    title: 'Depop Payment Fee',
    description: (
      <div>
        This occurs only when the sale is processed through Depop and <i>not</i> Paypal. This value is pre-calculated by Depop and provided with the uploaded files in the column <strong>Depop Payments fee</strong>.
      </div>
    )
  },
  {
    title: 'PayPal Fee',
    description: (
      <div>
        This varies depending on the countries of transaction. Since we don't know the country in which the seller is located, Mepop Reports assumes both the seller and buyer are located in the US, meaning the fee per sale is: <strong>(2.9% of <i>Item price</i>) + .30USD</strong>. To learn more about your country's rates <strong><a rel='noopener noreferrer' target='_blank' href='https://www.PayPal.com/us/webapps/mpp/merchant-fees#standard-transaction-fees'><Span>click here</Span></a></strong>.
      </div>
    )

  },
  {
    title: 'Buyer Paid Shipping',
    description: (
      <div>
        Specified by the seller and provided with the uploaded files in the column <strong>Buyer shipping cost</strong>.
      </div>
    )
  },
  {
    title: 'Seller Paid Shipping',
    description: (
      <div>
        Specified by the seller and provided with the uploaded files in the column <strong>USPS Cost</strong>.
      </div>
    )
  }
]
