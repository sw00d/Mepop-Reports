import ValueBox from '../../../styles/reporting/ValueBox'
import Flex from '../../../styles/layout/Flex'

const TopValueBoxes = ({ data, minWidth }) => {
  return (
    <Flex flexWrap='wrap'>
      <ValueBox
        minWidth={minWidth}
        value={data.sales ? data.sales.length : 0}
        title='Items Sold'
      />
      <ValueBox
        minWidth={minWidth}
        float
        currencyType={data.currency_type}
        value={data.avg_price}
        title='Average Item Price'
      />
      <ValueBox
        minWidth={minWidth}
        value={data.avg_time_listed}
        title='Average Days Listed'
      />
      <ValueBox
        minWidth={minWidth}
        value={data.free_shipping}
        title='Items Offered with Free Shipping'
      />
    </Flex>
  )
}

export default TopValueBoxes
