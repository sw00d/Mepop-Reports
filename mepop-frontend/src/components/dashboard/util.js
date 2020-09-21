import moment from 'moment'
import currency from 'currency.js'

export const getProfits = (sale) => {
  const fees = cleanNumber(sale.depop_fee) + cleanNumber(sale.depop_payments_fee)
  const shipping = cleanNumber(sale.usps_cost) + cleanNumber(sale.buyer_shipping_cost)
  return {
    net: currency(cleanNumber(sale.total) - fees - shipping).value,
    gross: currency(cleanNumber(sale.total)).value
  }
}
export const getProfitsByMonth = (data) => {
  const months = {}
  const monthArray = []
  data.sales.forEach((sale) => {
    const month = moment(sale.date_of_sale).format('MMM')
    const date = moment(sale.date_of_sale).format('MM/DD/yyyy')

    const fees = cleanNumber(sale.depop_fee) + cleanNumber(sale.depop_payments_fee)
    const shipping = cleanNumber(sale.usps_cost) + cleanNumber(sale.buyer_shipping_cost)
    const netProfit = getProfits(sale).net

    if (months[month]) {
      months[month] = {
        ...months[month],
        net: currency(netProfit + months[month].net).value,
        depop_fees: currency(fees + months[month].depop_fees).value,
        shipping: currency(shipping + months[month].shipping).value
      }
    } else {
      months[month] = {
        net: netProfit || 0,
        depop_fees: fees || 0,
        shipping: shipping || 0
      }
    }

    // sets start dates
    if (months[month].start) {
      const start = new Date(months[month].start)
      const current = date
      if (current < start) months[month].start = date
    } else months[month].start = date
    if (months[month].end) {
      const end = new Date(months[month].end)
      const current = date
      if (current > end) months[month].end = date
    } else months[month].end = date

    months[month].end = date
  })
  Object.keys(months).forEach((key) => {
    monthArray.push({
      month: key,
      'Net Profit': months[key].net,
      'Depop Fees': months[key].depop_fees,
      'Seller-Paid-Shipping': months[key].sellerPaidShipping
    })
  })
  return monthArray
}

// Value Box 1
export const getAvgProfits = (data) => {
  const monthlyProfit = getProfitsByMonth(data)
  let avg = 0
  monthlyProfit.forEach((data) => {
    avg += data['Net Profit']
  })
  avg = avg / monthlyProfit.length
  return { monthly: currency(avg).value, weekly: currency(avg / 4).value }
}

// Value Box 2
export const bestTimeToList = (data) => {
  const obj = {
    sell: {},
    list: {}
  }
  data.sales.forEach(({ date_of_listing, date_of_sale }) => {
    const listDay = moment(date_of_listing).format('dddd')

    if (obj.list[listDay]) obj.list[listDay] += 1
    else obj.list[listDay] = 1

    const saleDay = moment(date_of_sale).format('dddd')
    if (obj.sell[saleDay]) obj.sell[saleDay] += 1
    else obj.sell[saleDay] = 1
  })

  const final = { sell: [], list: [] }
  let topSellCount = 0
  let topListCount = 0

  Object.keys(obj.sell).forEach((key) => {
    if (obj.sell[key] === topSellCount) {
      final.sell.push(key)
    } else if (obj.sell[key] > topSellCount) {
      final.sell = [key]
      topSellCount = obj.sell[key]
    }
  })
  Object.keys(obj.list).forEach((key) => {
    if (obj.list[key] === topListCount) {
      final.list.push(key)
    } else if (obj.list[key] > topListCount) {
      final.list = [key]
      topListCount = obj.list[key]
    }
  })
  return final
}

// Value Box 3
export const avgItemsPerDay = data => {
  const obj = {}
  data.sales.forEach(({ date_of_sale }) => {
    const dateOfSale = moment.utc(date_of_sale).format('DD-MM-YYYY')
    if (obj[dateOfSale]) {
      obj[dateOfSale] += 1
    } else obj[dateOfSale] = 1
  })
  const sales = data.sales.length
  const days = Object.keys(obj).length

  return sales / days
}

// Tables
// export const formatSalesTable = (sales) => {
//   const newSales = []

//   sales.forEach((sale) => {
//     const ms = new Date(sale.date_of_sale).getTime() - new Date(sale.date_of_listing).getTime()
//     const days = ms / (1000 * 3600 * 24)
//     newSales.push({
//       ...sale,
//       'date sold': moment(sale.date_of_sale).format('MM/DD/YYYY'),
//       buyer: `${sale.name}`,
//       username: `${sale.buyer}`,
//       'item price': sale.item_price,
//       'buyer-paid-shipping': sale.buyer_shipping_cost,
//       fees: sale.depop_fee,
//       'date listed': moment(sale.date_of_listing).format('MM/DD/YYYY'),
//       'days listed': days, // converts from ms to days
//       'item description': formatDescription(sale.description),
//       address: `${sale.address_line_1} ${sale.city}, ${sale.state ? sale.state : ''} ${sale.post_code}`

//     })
//   })

//   return sort(newSales)
// }

// utils
// const sort = (sales) => {
//   return sales.sort((a, b) => {
//     const date1 = new Date(a['date sold'])
//     const date2 = new Date(b['date listing'])
//     return date1 - date2
//   })
// }

// const formatDescription = (text) => {
//   const tagStart = text.lastIndexOf('{')

//   const withoutTags = tagStart !== -1 ? text.substring(0, tagStart) : text
//   return withoutTags
// }

const cleanNumber = (num) => {
  if (!num || num === '-') return 0
  const withoutCurrency = num.substring(1, num.length)
  return parseFloat(withoutCurrency)
}
