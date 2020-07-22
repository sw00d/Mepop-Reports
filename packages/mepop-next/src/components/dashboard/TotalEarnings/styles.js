import styled from 'styled-components'
import Card from '../../../styles/elements/Card'

const label = ({ theme }) => (
  `
    font-weight: ${theme.fontWeights.regular};
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    `
)
export const ChartContainer = styled.div`
  min-width: 250px;
  height: 100px;
  min-height: 250px;
  display: flex;
  align-items:center;
`

export const Container = styled(Card)`
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
  `

export const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  @media only screen and (max-width: 600px) {
        align-items:center;
  }
`

export const BoxTitle = styled.h2`
    padding:5px;
  text-align: left;
  font-size: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainBg};
  position: relative;
  display:flex;
  font-size: 25px;
  font-weight: 500;
  margin: 0px;
  color: ${({ theme }) => theme.colors.primary};

`
export const Label = styled.div`
    ${label};
    margin-left: 5px;
`
export const SwitchContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding-top: 10px;
    ${label};
`

export const BoxValue = styled.div`
  margin-top: 10px;
  text-align: left;
  font-size: 30px;
  font-weight:500;
  color: ${({ theme }) => theme.colors.primary};
`
