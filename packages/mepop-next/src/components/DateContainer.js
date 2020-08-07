import { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import Flex from '../styles/layout/Flex'
import DateRangePicker from '../styles/elements/DateRangePicker'
import Select from '../styles/elements/Select'

import { getRangedData } from '../dataProcessing/utils'
import { UPDATE_RANGED_DATA, UPDATE_COMPARE_DATA, TOGGLE_LOADING } from '../store/generalReducer'
import Text from '../styles/elements/Text'
import Spinner from '../styles/elements/Loading/Spinner'

const DateContainer = ({ page }) => {
  const { allData, loading } = useSelector(state => state.generalReducer)
  const fixedFullRange = page === 'Dashboard'
  const dispatch = useDispatch()

  const min = useMemo(() => allData.sales ? allData.sales[0].date_of_sale : null, [allData])
  const max = useMemo(() => allData.sales ? allData.sales[allData.sales.length - 1].date_of_sale : null, [allData])
  const [dateRange, setDates] = useState({ startDate: min, endDate: max }) // stored in MM-DD-YYYY format
  const [compareDateRange, setCompareDates] = useState({ startDate: min, endDate: max }) // stored in MM-DD-YYYY format
  const [preset, setPreset] = useState({ label: 'Full Range', value: 'full' })
  const [comparePreset, setComparePreset] = useState({ label: 'Full Range', value: 'full' })
  const [showCompareDate, toggleCompare] = useState(false)
  // const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (dateRange.startDate === null || dateRange.endDate === null) {
      setPreset({ label: 'Full Range', value: 'full' })
      setDates({ startDate: min, endDate: max })
    } else if (dateRange.startDate && dateRange.endDate) {
      if (!moment(dateRange.startDate).isSame(min) && !moment(dateRange.endDate).isSame(max)) {
        setPreset({ label: 'Full Range', value: 'full' })
        setDates({ startDate: min, endDate: max })
      }
    }
  }, [min, max])
  useEffect(() => {
    setTimeout(() => {
      if (allData.sales && dateRange.startDate && dateRange.endDate) {
        const rangedData = getRangedData(allData, {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate
        })
        dispatch({
          type: UPDATE_RANGED_DATA,
          payload: rangedData
        })
      }
    })
  }, [allData, dateRange])

  useEffect(() => {
    // const shouldBeLoading = (compareDateRange.startDate !== null && compareDateRange.endDate !== null)
    setTimeout(() => {
      if (allData.sales && compareDateRange.startDate && compareDateRange.endDate) {
        const rangedData = getRangedData(allData, {
          startDate: compareDateRange.startDate,
          endDate: compareDateRange.endDate
        })
        // console.log(rangedData)
        dispatch({
          type: UPDATE_COMPARE_DATA,
          payload: rangedData
        })
      }
      if (!showCompareDate) {
        dispatch({
          type: UPDATE_COMPARE_DATA,
          payload: {}
        })
      }
    })
  }, [allData, compareDateRange, showCompareDate])

  useEffect(() => {
    const { startDate, endDate } = getDatePreset(preset, min, max)
    if (startDate && endDate) {
      setDates({ startDate, endDate })
    }
  }, [preset])

  useEffect(() => {
    const { startDate, endDate } = getDatePreset(comparePreset, min, max)
    if (startDate && endDate) {
      setCompareDates({ startDate, endDate })
    }
  }, [comparePreset])

  if (!allData.sales) return null

  return (
    <Flex alignItems='center'>
      <Flex flexDirection='column' justifyContent='space-between' height={showCompareDate && !fixedFullRange ? 96 : 'auto'}>

        <Select
          opacity={fixedFullRange ? 0 : 1}
          options={options}
          onChange={(arr) => setPreset(arr[0])}
          selectProps={{
            values: preset ? [preset] : [],
            disabled: fixedFullRange,
            searchable: false,
            style: { width: '140px', fontSize: '15px' },
            separator: true
          }}
        />
        {
          showCompareDate ? (
            <Select
              opacity={fixedFullRange ? 0 : 1}
              options={options}
              onChange={(arr) => setComparePreset(arr[0])}
              selectProps={{
                values: comparePreset ? [comparePreset] : [],
                disabled: fixedFullRange,
                searchable: false,
                style: { width: '140px', fontSize: '15px' },
                separator: true
              }}
            />
          ) : null
        }
      </Flex>
      <Flex flexDirection='column'>

        <DateRangePicker
          startDate={dateRange.startDate ? moment(fixedFullRange ? min : dateRange.startDate) : null}
          endDate={dateRange.endDate ? moment(fixedFullRange ? max : dateRange.endDate) : null}
          disabled={fixedFullRange}
          isOutsideRange={(day) => {
            console.log(day, moment(max))
            return (day.isBefore(moment(min)) || day.isAfter(moment(max)))
          }}
          enableOutsideDays={false}
          onDatesChange={({ startDate, endDate }) => {
            setPreset({ label: 'Custom', value: null })
            setDates({
              startDate: startDate ? startDate.format('MM-DD-YYYY') : null,
              endDate: endDate ? endDate.format('MM-DD-YYYY') : null
            })
          }}
        />
        {
          showCompareDate && !fixedFullRange ? (
            <>
              <Text
                display='flex'
                alignItems='center'
                justifyContent='center'
                color='primary'
                fontWeight='100'
                fontSize='15px'
              >
              vs.
              </Text>
              <DateRangePicker
                startDate={compareDateRange.startDate ? moment(fixedFullRange ? min : compareDateRange.startDate) : null}
                endDate={compareDateRange.endDate ? moment(fixedFullRange ? max : compareDateRange.endDate) : null}
                disabled={fixedFullRange}
                isOutsideRange={(day) => {
                  return (day.isBefore(min) || day.isAfter(max))
                }}
                onDatesChange={({ startDate, endDate }) => {
                  setComparePreset({ label: 'Custom', value: null })
                  setCompareDates({
                    startDate: startDate ? startDate.format('MM-DD-YYYY') : null,
                    endDate: endDate ? endDate.format('MM-DD-YYYY') : null
                  })
                }}
              />
            </>
          ) : null
        }
      </Flex>

      <AddBtn
        isFixedFullRange={fixedFullRange}
        onClick={() => {
          if (loading || fixedFullRange) return
          toggleCompare(!showCompareDate)
        }}
        disabled={loading || fixedFullRange}
      >
        {
          fixedFullRange ? null
            : loading ? (
              <Spinner width='2em' size={3} />
            ) : (
              <i className={showCompareDate ? 'fa fa-minus-circle' : 'fa fa-plus-circle'} />
            )
        }
      </AddBtn>
    </Flex>

  )
}

export default DateContainer

const options = [
  { label: 'Full Range', value: 'full' },
  { label: 'This Month', value: 'this_month' },
  { label: 'Last Month', value: 'last_month' },
  { label: 'Past 3 Months', value: 'past_three_months' }
]

const getDatePreset = (preset, min, max) => {
  switch (preset.value) {
    case 'full': {
      return { startDate: min, endDate: max }
    }
    case 'this_month': {
      const newStart = moment(moment(max).startOf('month')).format('MM-DD-YYYY')
      const newEnd = moment(moment(max).endOf('month')).format('MM-DD-YYYY')
      return {
        startDate: newStart,
        endDate: new Date(newEnd) <= new Date(max) ? newEnd : max
      }
    }
    case 'last_month': {
      const newStart = moment(moment(max).subtract(1, 'months').startOf('month')).format('MM-DD-YYYY')
      const newEnd = moment(moment(max).subtract(1, 'months').endOf('month')).format('MM-DD-YYYY')

      return {
        startDate: newStart,
        endDate: new Date(newEnd) <= new Date(max) ? newEnd : max
      }
    }
    case 'past_three_months': {
      const newStart = moment(moment(max).subtract(3, 'months')).format('MM-DD-YYYY')
      return { startDate: newStart, endDate: max }
    }
    default: {
      return {}
    }
  }
}

const AddBtn = styled.div`
  color: ${({ theme }) => theme.colors.greyLight};
  background: none;
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-size: 20px;
  margin-top: 3px;
  transition: ${({ theme }) => theme.transitionDurations[1]};
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
  border-left: 1px solid ${({ theme, isFixedFullRange }) => isFixedFullRange ? 'transparent' : theme.colors.mainBg};
  justify-content: center;
  &:hover {
    color: ${({ theme, disabled }) => !disabled ? theme.colors.primary : null};
  }
`
