import moment from 'moment'

export const formatSalesTable = ({ sales }) => {
  const newSales = []

  sales.forEach((sale) => {
    const ms = new Date(sale.date_of_sale).getTime() - new Date(sale.date_of_listing).getTime()
    const days = ms / (1000 * 3600 * 24)
    newSales.push({
      ...sale,
      'date sold': moment(sale.date_of_sale).format('MM/DD/YYYY'),
      buyer: `${sale.name}`,
      username: `${sale.buyer}`,
      'item price': sale.item_price,
      'buyer-paid-shipping': sale.buyer_shipping_cost,
      fees: sale.depop_fee,
      'date listed': moment(sale.date_of_listing).format('MM/DD/YYYY'),
      'days listed': days, // converts from ms to days
      'item description': formatDescription(sale.description),
      address: `${sale.address_line_1} ${sale.city}, ${sale.state ? sale.state : ''} ${sale.post_code}`

    })
  })

  return sort(newSales)
}

export const getRecentSales = ({ sales }) => {
  const newSales = []
  const mostRecentDate = sales[0].date_of_sale
  sales.forEach((sale) => {
    if (sale.date_of_sale === mostRecentDate || newSales.length < 10) {
      const ms = new Date(sale.date_of_sale).getTime() - new Date(sale.date_of_listing).getTime()
      const days = ms / (1000 * 3600 * 24)
      newSales.push({
        // ...sale,
        'date sold': moment(sale.date_of_sale).format('MM/DD/YYYY'),
        buyer: `${sale.name}`,
        username: `${sale.buyer}`,
        'item price': sale.item_price,
        'buyer-paid-shipping': sale.buyer_shipping_cost,
        fees: sale.depop_fee,
        'date listed': moment(sale.date_of_listing).format('MM/DD/YYYY'),
        'days listed': days, // converts from ms to days
        'item description': formatDescription(sale.description),
        address: `${sale.address_line_1} ${sale.city}, ${sale.state ? sale.state : ''} ${sale.post_code}`

      })
    }
  })

  return newSales
}

// utils
const sort = (sales) => {
  return sales.sort((a, b) => {
    const date1 = new Date(a['date sold'])
    const date2 = new Date(b['date listing'])
    return date1 - date2
  })
}
const formatDescription = (text) => {
  const tagStart = text.lastIndexOf('{')

  const withoutTags = tagStart !== -1 ? text.substring(0, tagStart) : text
  return withoutTags
}
