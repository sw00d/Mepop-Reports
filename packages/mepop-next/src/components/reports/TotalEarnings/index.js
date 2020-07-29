import TotalEarnings from '../../../styles/reporting/TotalEarnings'

const TotalEarningsView = ({ data }) => (
  <TotalEarnings
    m='0px'
    borderRadius='0px'
    float
    currencyType='$'
    title='Total Earnings'
    value={data.total_earnings}
    netValue={
      (data.total_earnings - data.total_shipping_cost - data.depop_fees).toFixed(2)
    }
    data={[
      {
        name: 'Net Earnings',
        value: parseFloat(data.total_earnings - data.total_shipping_cost - data.depop_fees)
      },
      { name: 'Depop Fees', value: parseFloat(data.depop_fees) },
      { name: 'Paypal Fees', value: parseFloat(data.paypal_fees) },
      { name: 'Total Shipping', value: parseFloat(data.total_shipping_cost) }
    ]}
  />)

export default TotalEarningsView
