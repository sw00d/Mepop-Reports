import Switch from 'react-ios-switch'
import theme from '../../../theme'
import styled from 'styled-components'

const SwitchView = ({ label, ...props }) => {
  return (
    <>
      <Switch {...props} pendingOnColor={theme.colors.green} />
      <Label>
        {label}
      </Label>
    </>)
}

export default SwitchView

const Label = styled.div`
    font-weight: ${theme.fontWeights.regular};
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    margin-left: 5px;
`
