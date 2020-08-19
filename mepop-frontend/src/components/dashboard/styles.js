import styled from 'styled-components'
import Card from '../../styles/elements/Card'

export const ValueContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
      flex-direction: column;
  }
`
export const GraphContainer = styled(Card)`

  >div {
    width: 100%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}px) {
      flex-direction: column;

  }
`
