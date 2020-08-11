import React from 'react'
import { Flex } from 'rebass'
import SelectInput from 'react-dropdown-select'
import { Select as RebassSelect } from '@rebass/forms'
import Box from '../../layout/Box'
import Label from '../Form/Label'
import styled from 'styled-components'

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
            <StyledSelect {...props} onChange={onChange}>
              {options.map((opt, key) => (
                <option
                  key={key}
                  value={JSON.stringify({ value: opt[valueField], label: opt[labelField] })}
                >
                  {opt[labelField]}
                </option>
              ))}

            </StyledSelect>
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

const StyledSelect = styled(RebassSelect)`
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  border-color: ${({ theme }) => theme.colors.greyDisabled} !important;
  color: ${({ theme }) => theme.colors.primary} !important;
`
