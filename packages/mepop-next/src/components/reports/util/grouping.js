import moment from 'moment'
import currency from 'currency.js'
import theme from '../../../theme'

export const groupByDay = (data) => {
  const groupedData = {
    Sun: { sales: 0, listings: 0 },
    Mon: { sales: 0, listings: 0 },
    Tue: { sales: 0, listings: 0 },
    Wed: { sales: 0, listings: 0 },
    Thu: { sales: 0, listings: 0 },
    Fri: { sales: 0, listings: 0 },
    Sat: { sales: 0, listings: 0 }
  }
  const newData = []
  if (data.sales) {
    // groups data
    data.sales.forEach((file) => {
      const saleDay = moment(file.date_of_sale, 'MM/DD/YYYY').format('ddd')
      const listingDay = moment(file.date_of_listing, 'MM/DD/YYYY').format('ddd')
      groupedData[listingDay].listings++
      groupedData[saleDay].sales++
    })
    // sets up data in recharts format
    Object.keys(groupedData).forEach((key) => {
      newData.push({ Day: key, 'Items Sold': groupedData[key].sales, 'Items Listed': groupedData[key].listings })
    })
  }
  return newData
}

export const groupByDate = (data, showEmptyDates) => {
  const newData = []
  if (data.sales) {
    data.sales.forEach(({ date_of_sale, total, buyer_shipping_cost, usps_cost }) => {
      const gross = currency(total).value
      const net = gross - currency(buyer_shipping_cost).value - currency(usps_cost).value
      const latest = newData[newData.length - 1]
      if (!newData.length || latest['Date Sold'] !== date_of_sale) {
        if (latest && showEmptyDates) {
          const milisecs =
              new Date(moment(date_of_sale, 'MM-DD-YYYY').format()).getTime() -
              new Date(moment(latest['Date Sold'], 'MM-DD-YYYY').format()).getTime()
          const diff = milisecs / (1000 * 3600 * 24)
          if (diff !== 1) {
            for (let i = 1; i < diff; i++) {
              const day = new Date(moment(latest['Date Sold'], 'MM-DD-YYYY').format()).getDate() + i
              const date = new Date(moment(latest['Date Sold'], 'MM-DD-YYYY').format())
              const formatted = moment(date.setDate(day)).format('MM-DD-YYYY')

              newData.push({ 'Date Sold': formatted, 'Items Sold': 0, Gross: 0, Net: 0 })
            }
          }
        }

        newData.push({ 'Date Sold': date_of_sale, 'Items Sold': 1, Gross: gross, Net: net })
      } else {
        latest['Items Sold'] += 1
        latest.Net += net
        latest.Gross += gross
      }
    })
  }
  return newData
}

export const groupByTime = (data) => {
  // const groupedData = {}
  const newData = [[], [], [], [], [], [], []].fill(0)
    .map(() => new Array(24).fill(0))
  const obj = {
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: []
  }
  if (data.sales) {
    // groups data
    data.sales.forEach((sale) => {
      const hourIndex = moment(sale.time_of_sale, 'hh:mm A').format('H')
      const day = moment(sale.date_of_sale).format('ddd').toLowerCase()
      if (obj[day][hourIndex]) {
        obj[day][hourIndex].push(sale)
      } else obj[day][hourIndex] = [sale]
      // obj[day].push(sale)
      switch (day) {
        case 'sun': {
          newData[0][hourIndex] += 1
          break
        }
        case 'mon': {
          newData[1][hourIndex] += 1
          break
        }
        case 'tue': {
          newData[2][hourIndex] += 1
          break
        }
        case 'wed': {
          newData[3][hourIndex] += 1
          break
        }
        case 'thu': {
          newData[4][hourIndex] += 1
          break
        }
        case 'fri': {
          newData[5][hourIndex] += 1
          break
        }
        case 'sat': {
          newData[6][hourIndex] += 1
          break
        }
      }
    })
  }
  return { arr: newData, obj }
}

export const groupByCategory = (data, gross) => {
  const newData = []
  const allCategories = {}
  if (data.sales) {
    data.sales.forEach(({ category, total }) => {
      const totalNum = currency(total).value
      if (allCategories[category]) {
        allCategories[category].sold += 1
        allCategories[category].gross += totalNum
      } else allCategories[category] = { sold: 1, gross: totalNum }
    })
  }

  Object.keys(allCategories).forEach((key) => {
    newData.push({
      Category: capitalize(key),
      'Items Sold': allCategories[key].sold,
      'Gross Earnings': allCategories[key].gross
    })
  })
  newData.sort((a, b) => {
    return b['Items Sold'] - a['Items Sold']
  })
  return newData.slice(0, 15)
}

export const groupByPaymentType = (data) => {
  const newData = []
  const paymentTypes = {}
  if (data.sales) {
    data.sales.forEach(({ payment_type, total }) => {
      const totalNum = currency(total).value
      if (paymentTypes[payment_type]) {
        paymentTypes[payment_type].sold += 1
        paymentTypes[payment_type].gross += totalNum
      } else paymentTypes[payment_type] = { sold: 1, gross: totalNum }
    })
  }
  const colors = [theme.colors.pastelOrange, theme.colors.pastelRose, theme.colors.primary, theme.colors.pastelBlueLight]

  Object.keys(paymentTypes).forEach((key, i) => {
    newData.push({
      name: key === 'STRIPE' ? 'BANK ACCOUNT' : key,
      sold: paymentTypes[key].sold,
      gross: paymentTypes[key].gross,
      color: colors[i]
    })
  })

  return newData
}

export const groupByWeek = (data, showEmptyDates) => {
  const newData = []
  const obj = {}
  if (data.sales) {
    data.sales.forEach(({ date_of_sale, total, buyer_shipping_cost, usps_cost }) => {
      const { week, month } = getDateInfo(date_of_sale)
      const currentWeek = `${month} - Wk${week}`

      if (!obj[currentWeek]) obj[currentWeek] = { Gross: 0, Net: 0 }

      const gross = currency(total).value
      const net = gross - currency(buyer_shipping_cost).value - currency(usps_cost).value
      obj[currentWeek].Gross += gross
      obj[currentWeek].Net += net
    })
    Object.keys(obj).forEach(key => {
      newData.push({ week: key, ...obj[key] })
    })
  }
  return newData
}

function getDateInfo (date) {
  const month = moment(date).format('MMM YYYY')
  var nthOfMonth = Math.ceil(moment(date).date() / 7)
  if (nthOfMonth >= 5) return { week: 4, month }
  else return { week: nthOfMonth, month }
}

function capitalize (str) {
  str = str.split(' ')
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
  }

  return str.join(' ')
}
