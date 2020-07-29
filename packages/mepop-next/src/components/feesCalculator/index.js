import { useState, useEffect } from 'react'

import Card from '../../styles/elements/Card'
import Input from '../../styles/elements/Input'
import Select from '../../styles/elements/Select'
import Text from '../../styles/elements/Text'
import Flex from '../../styles/layout/Flex'
import styled from 'styled-components'
import { currencies, countries } from './utils'
const initVals = {
  pricePaid: '',
  listingPrice: '',
  shipping: '0',
  depopFee: '10',
  paypalFee: '2.9',
  paypalCurrencyFee: '0.30',
  sellerCountry: { label: 'United States', value: '2.9' },
  buyerCountry: { label: 'United States', value: '2.9' }
}
function FeeCalculator (props) {
  // (listing price+shipping-pricepaid) - all fees
  const [form, updateForm] = useState(initVals)

  const updateVal = (field) => {
    updateForm({ ...form, [field.target.name]: field.target.value })
  }
  const handleSelect = (field) => {
    if (field.target.name === 'currency') {
      updateForm({ ...form, paypalCurrencyFee: JSON.parse(field.target.value).value })
    }

    if (field.target.name === 'sellerCountry' || field.target.name === 'buyerCountry') {
      const fieldObj = JSON.parse(field.target.value)
      updateForm({
        ...form,
        [field.target.name]: { label: fieldObj.label, value: fieldObj.value }
      })
    }
  }
  useEffect(() => {
    if (form.sellerCountry.label === form.buyerCountry.label) {
      updateForm({ ...form, paypalFee: form.sellerCountry.value })
    } else {
      updateForm({ ...form, paypalFee: add(form.sellerCountry.value, form.buyerCountry.value) })
    }
  }, [form.sellerCountry, form.buyerCountry])
  const totalRevenue = add(
    form.listingPrice || 0,
    form.shipping || 0
  )
  const paypalFee = getPercent(
    totalRevenue || 0,
    form.paypalFee || 0
  )

  const depopFee = getPercent(
    totalRevenue || 0,
    form.depopFee || 0
  )
  const shipping = add(0, form.shipping || 0)
  const costOfItem = add(0, form.pricePaid || 0)
  const profit = (
    parseFloat(totalRevenue) -
    parseFloat(paypalFee) -
    parseFloat(depopFee) -
    parseFloat(shipping) -
    parseFloat(costOfItem)
  ).toFixed(2)
  return (
    <Flex flexDirection='column' alignItems='center' width={[1]}>

      <Card p='40px' width={[0.5]} minWidth='800px'>
        <Text fontWeight={600} fontSize='40px' mb='25px' color='depopRed'>Depop Fees Calculator</Text>
        <Flex justifyContent='space-between' width={[1]}>

          <Flex flexDirection='column' width={[1]} mr='10px'>
            <Input
              label='Cost of Item (optional)'
              placeholder='Cost of Item (optional)'
              name='pricePaid'
              onChange={updateVal}
              type='number'
              min='0'
              max='1000'
              mb='3px'
            />
            <Input
              label='Listing Price'
              placeholder='Item Listing Price'
              name='listingPrice'
              onChange={updateVal}
              type='number'
              min='0'
              max='1000'
              mb='3px'
            />

            <Input
              label='Postage/Shipping'
              placeholder='Postage/Shipping'
              name='shipping'
              onChange={updateVal}
              type='number'
              min='0'
              max='1000'
              mb='3px'
            />

            <Input
              label='Depop Fee (%)'
              placeholder='Depop Fee (%)'
              type='number'
              value='10'
              disabled
              mb='3px'
            />
            <Select
              rebass
              label='Currency'
              name='currency'
              options={currencies}
              onChange={handleSelect}
            />
            <Select
              rebass
              label="Seller's Country"
              name='sellerCountry'
              options={countries}
              onChange={handleSelect}

            />
            <Select
              rebass
              label="Buyer's Country"
              name='buyerCountry'
              options={countries}
              onChange={handleSelect}

            />

          </Flex>
          <Flex width={[1]} ml='10px'>
            <Breakdown>
              <Text textAlign='center' fontWeight={600} fontSize={18}>Breakdown</Text>
              <Flex mt='30px' justifyContent='space-between'>
                <Text fontWeight={500} fontSize={17}>Total Revenue:</Text>
                <Text fontWeight={500} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Span>
                    {form.listingPrice ? `$${form.listingPrice}` : null}
                    {form.listingPrice && form.shipping ? ' + ' : null}
                    {form.shipping !== '0' ? ` $${form.shipping} ` : null}
                    {form.listingPrice || form.shipping !== '0' ? ' = ' : null}
                  </Span>
                  <SpanValue>${totalRevenue}</SpanValue>
                </Text>

              </Flex>
              <Flex mt='20px' justifyContent='space-between'>
                <Text fontWeight={500} fontSize={17}>Depop Fee ({parseFloat(form.depopFee)}%):</Text>
                <Text fontWeight={500} sx={{ display: 'flex', alignItems: 'center' }}>
                  <SpanValue>${depopFee}</SpanValue>
                </Text>
              </Flex>

              <Flex mt='20px' justifyContent='space-between'>
                <Text fontWeight={500} fontSize={17}>Paypal Fee ({parseFloat(form.paypalFee)}%):</Text>
                <Text fontWeight={500} sx={{ display: 'flex', alignItems: 'center' }}>
                  <SpanValue>${paypalFee}</SpanValue>
                </Text>
              </Flex>
              <Flex mt='20px' justifyContent='space-between'>
                <Text fontWeight={500} fontSize={17}>Paypal Currency Fee:</Text>
                <Text fontWeight={500} sx={{ display: 'flex', alignItems: 'center' }}>
                  <SpanValue>${form.paypalCurrencyFee}</SpanValue>
                </Text>
              </Flex>
              <Flex mt='20px' justifyContent='space-between'>
                <Text fontWeight={500} fontSize={17}>Shipping:</Text>
                <Text fontWeight={500} sx={{ display: 'flex', alignItems: 'center' }}>
                  <SpanValue>${shipping}</SpanValue>
                </Text>
              </Flex>
              {
                costOfItem !== '0.00' ? (
                  <Flex mt='20px' justifyContent='space-between'>
                    <Text fontWeight={500} fontSize={17}>Cost of Item:</Text>
                    <Text fontWeight={500} sx={{ display: 'flex', alignItems: 'center' }}>
                      <SpanValue>${costOfItem}</SpanValue>
                    </Text>
                  </Flex>) : null
              }
              <Divider />
              <Flex mt='30px' justifyContent='space-between'>
                <Text fontSize={20} fontWeight={600}>Profit:</Text>
                <Text sx={{ display: 'flex', alignItems: 'center' }}>
                  <SpanValue>${profit}</SpanValue>
                </Text>
              </Flex>

            </Breakdown>
          </Flex>
        </Flex>

      </Card>
    </Flex>
  )
}

export default FeeCalculator

const add = (str1, str2) => {
  return (parseFloat(str1) + parseFloat(str2)).toFixed(2)
}
const getPercent = (str1, percent) => {
  return (parseFloat(str1) * (parseFloat(percent) / 100)).toFixed(2)
}
const Breakdown = styled.div`
  width: 100%;
  height:100%;
  background: ${({ theme }) => theme.colors.whiteDark};
  margin-left:20px;
  border-radius: ${({ theme }) => theme.borderRadius.more};
  padding: 15px;
`
const Span = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;
`
const SpanValue = styled.span`
  margin-left: 10px;
  font-weight: 600;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin: 30px 0px;
  background: ${({ theme }) => theme.colors.depopRed};
`
