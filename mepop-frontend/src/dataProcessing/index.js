
import { readString } from 'react-papaparse'
import currency from 'currency.js'
import moment from 'moment'
import { headers } from '../assets/exampleBuyers'

// Reads CSV Content
export const processFiles = (files, setState, err) => {
  if (!files.length) return
  let results = []
  // Parses CSV content into arrays using readCSVString
  files.forEach((file) => {
    readCSVString(
      file.content,
      (res) => { results = [...results, ...res] },
      err
    )
  })

  // initState takes array of CSV data and formats everything for the app
  return initState(results, err)
}

const readCSVString = (CSVcontent, results, err) => {
  if (readString(CSVcontent).errors.length) {
    err()
  } else {
    results(readString(CSVcontent).data)
  }
}

// Initialized data format that we'll throw into our app's state
export const initState = (originalFiles, err) => {
  const cleanedFiles = [...originalFiles]
  for (let i = 0; i < cleanedFiles.length; i++) {
    const row = cleanedFiles[i]
    if (row.length === 23){
      row.splice(7, 1)
      i--
    } else if (row.length !== 22) {
      cleanedFiles.splice(i, 1)
      i--
    }
  }
  const files = cleanAndSort(cleanedFiles)
  const sorted = sort(files)
  return setUpState(sorted)
}
export const setUpState = (files, currencyType) => {
  const data = {}
  data.sales = files
  data.total_earnings = 0
  data.total_shipping_cost = 0
  data.seller_shipping_cost = 0
  data.buyer_shipping_cost = 0
  data.depop_fees = 0
  data.depop_payments_fees = 0
  data.paypal_fees = 0
  data.avg_price = 0
  data.avg_shipping = 0
  data.avg_total = 0
  data.avg_time_listed = 0
  data.free_shipping = 0
  data.currency_type = currencyType || files[0].item_price[0]
  data.date_format = data.currency_type === '$' ? ({
    standard: 'MM/DD/YYYY',
    shorthand: 'M/D',
    longhand: 'MMM Do YYYY'
  })
    : ({
      standard: 'DD/MM/YYYY',
      shorthand: 'D/M',
      longhand: 'D, MMM YYYY'
    })

  files.forEach((file) => {
    const miliSeconds = new Date(moment(file.date_of_sale).format()).getTime() -
      new Date(moment(file.date_of_listing).format()).getTime()
    data.avg_price += currency(file.item_price).value
    data.avg_shipping += currency(file.buyer_shipping_cost).value
    data.avg_total += currency(file.total).value
    data.total_earnings += currency(file.total).value

    data.total_shipping_cost += currency(file.buyer_shipping_cost).value + currency(file.usps_cost).value
    data.buyer_shipping_cost += currency(file.buyer_shipping_cost).value
    data.seller_shipping_cost += currency(file.usps_cost).value

    data.depop_fees += parseFloat(currency(file.depop_fee).value)
    data.depop_payments_fees += parseFloat(currency(file.depop_payments_fee).value)

    data.avg_time_listed += miliSeconds / (1000 * 3600 * 24)

    if (currency(file.buyer_shipping_cost).value === 0) {
      data.free_shipping++
    }

    if (file.payment_type === 'PAYPAL') {
      // TODO Make this dynamic to countries involved in sale (we need to know which country the sale originated from)
      // paypal fees are 2.9% + $0.30
      data.paypal_fees += (0.029 * currency(file.item_price).value) + 0.30
    }
  })
  data.avg_time_listed = parseInt(data.avg_time_listed / files.length)
  data.avg_price = parseFloat(data.avg_price / files.length).toFixed(2)
  data.avg_shipping = parseFloat(data.avg_shipping / files.length).toFixed(2)
  data.avg_total = parseFloat(data.avg_total / files.length).toFixed(2)
  data.total_earnings = parseFloat(data.total_earnings).toFixed(2)
  data.total_shipping_cost = parseFloat(data.total_shipping_cost).toFixed(2)
  data.buyer_shipping_cost = parseFloat(data.buyer_shipping_cost).toFixed(2)
  data.seller_shipping_cost = parseFloat(data.seller_shipping_cost).toFixed(2)
  data.depop_fees = parseFloat(data.depop_fees).toFixed(2)
  data.depop_payments_fees = parseFloat(data.depop_payments_fees).toFixed(2)
  data.paypal_fees = parseFloat(data.paypal_fees).toFixed(2)
  data.getUrl = slug => `https://www.depop.com/${slug}/`
  return data
}

// Util function that cleans up format and sorts our files
const cleanAndSort = (originalFiles) => {
  // gets rid of header row
  const mapHeaders = originalFiles.slice().filter(row => row[0] !== headers[0])
  const newFiles = []
  // get's rid of duplicates and converts arrays to objects
  for (let j = 0; j < mapHeaders.length; j++) {
    const row = mapHeaders[j]
    const item = {}
    // this loops through the first file to get headers
    for (let i = 0; i < originalFiles[0].length; i++) {
      const key = originalFiles[0][i]
      const keyStr = key.toLowerCase().replace(/ /g, '_')
      const val = () => {
        if (keyStr === 'date_of_sale' || keyStr === 'date_of_listing') {
        // converts UTC to local time
          const utc = moment.utc(`${row[i]} ${row[1]}`, 'DD/MM/YYYY h:mm A').format()
          return moment.utc(utc).local().format()
        } else if (keyStr === 'time_of_sale') {
          const utc = moment.utc(`${row[0]} ${row[i]}`, 'DD/MM/YYYY h:mm A').format()
          return moment.utc(utc).local().format('hh:mm A')
        }
        return row[i]
      }

      item[keyStr] = val()
    }

    let existsAlready = false
    // this loop checks for duplicates and ignores them
    for (let i = 0; i < newFiles.length; i++) {
      if (
        newFiles[i].address_line_1 === item.address_line_1 &&
        newFiles[i].address_line_2 === item.address_line_2 &&
        newFiles[i].date_of_listing === item.date_of_listing &&
        newFiles[i].date_of_sale === item.date_of_sale &&
        newFiles[i].time_of_sale === item.time_of_sale &&
        newFiles[i].description === item.description &&
        newFiles[i].total === item.total &&
        newFiles[i].category === item.category
      ) {
        existsAlready = true
        break
      }
    }

    if (!existsAlready) {
      newFiles.push(item)
    }
  }

  return newFiles
}

const sort = (sales) => {
  // Sorts by date
  const sorted = sales.sort((a, b) => {
    const fullDateA = new Date(
      moment(a.date_of_sale)
    )
    const fullDateB = new Date(
      moment(b.date_of_sale)
    )
    return fullDateA - fullDateB
  })

  return sorted
}
