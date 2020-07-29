import React, { useState } from 'react'
import { Flex } from 'rebass'
import SelectInput from 'react-dropdown-select'
import { Select as RebassSelect } from '@rebass/forms'
import Box from '../../layout/Box'
import Label from '../Form/Label'

const Select = ({
  options,
  labelField = 'label',
  valueField = 'value',
  onChange,
  rebass,
  label,
  selectProps = { style: {} },
  ...props
}) => {
  const [labelIsShown, showLabel] = useState(false)

  return (
    <>
      {
        rebass ? (
          <Box>
            {
              label
                ? (
                  <Label
                    label={label}
                    fontWeight={500}
                    // color={!labelIsShown ? 'transparent' : null}
                  />) : null
            }
            <RebassSelect {...props} onChange={onChange}>
              {options.map((opt, key) => (
                <option
                  key={key}
                  value={JSON.stringify({ value: opt[valueField], label: opt[labelField] })}
                >
                  {opt[labelField]}
                </option>
              ))}

            </RebassSelect>
          </Box>
        ) : (

          <Flex {...props}>
            <SelectInput
              options={options}
              onChange={onChange}
              {...selectProps}
              style={{ ...selectProps.style, fontWeight: 500, fontSize: '15px', minWidth: '50px' }}
            />
          </Flex>
        )
      }
    </>
  )
}

export default Select
