import moment from 'moment'
import { setUpState } from './index'

export const getRangedData = (data, { startDate, endDate }) => {
  const newData = []
  data.sales.forEach((sale) => {
    // this if statement compares date by moment object.
    if (
      (moment(sale.date_of_sale).isAfter(startDate, 'day') &&
      moment(sale.date_of_sale).isBefore(endDate, 'day')) ||
      moment(sale.date_of_sale).isSame(endDate, 'day') ||
      moment(sale.date_of_sale).isSame(startDate, 'day')
    ) {
      newData.push(sale)
    }
  })
  if (newData.length) {
    return setUpState(newData, data.currency_type)
  } else return {}
}
