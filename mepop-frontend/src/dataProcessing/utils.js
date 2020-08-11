import moment from 'moment'
import { setUpState } from './index'

export const getRangedData = (data, { startDate, endDate }) => {
  const newData = []

  data.sales.forEach((sale) => {
    // this if statement compares date by moment object.
    if (
      moment(sale.date_of_sale, 'MM-DD-YYYY').format() >= moment(startDate).format() &&
      moment(sale.date_of_sale, 'MM-DD-YYYY').format() <= moment(endDate).format()
    ) {
      newData.push(sale)
    }
  })
  if (newData.length) {
    return setUpState(newData, data.currency_type)
  } else return {}
}
