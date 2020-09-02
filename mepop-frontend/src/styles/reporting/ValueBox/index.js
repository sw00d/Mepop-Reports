import React from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import Flex from '../../layout/Flex'

const ValueBox = ({
  title,
  value = 0,
  value2,
  currencyType,
  noAnimate,
  float,
  label1,
  label2,
  lessIsGood,
  hideCompare,
  string,
  formattingFn,
  smallText,
  ...rest
}) => {
  const biggerValue = value > value2 ? value : value2
  const smallerValue = value < value2 ? value : value2
  const plusOrMinus = biggerValue === value && !lessIsGood ? 'fa-plus' : 'fa-minus'
  const caret = biggerValue === value && !lessIsGood ? 'fa-caret-up' : 'fa-caret-down'
  const diff = biggerValue - smallerValue
  const percentChange = Math.round((smallerValue / biggerValue) * 100)
  let color
  if (value > value2) {
    color = lessIsGood ? 'bad' : 'good'
  } else {
    color = lessIsGood ? 'good' : 'bad'
  }
  return (
    <Container m='10px' {...rest}>
      <Title>
        {title}
        {
          !isNaN(percentChange) && !hideCompare
            ? (
              <ChangeValue good={color === 'good'}>
                <i
                  className={`fa ${plusOrMinus}`}
                  style={{
                    marginRight: 3,
                    fontSize: 10,
                    marginTop: -1
                  }}
                />
                {percentChange}%
              </ChangeValue>)
            : null
        }

      </Title>
      <Content>
        <Value smallText={!value2 && !smallText}>

          {currencyType}
          {
            string ? (
              value
            )
              : <CountUp
                formattingFn={formattingFn}
                decimals={float ? 2 : 0}
                start={noAnimate ? value : 0}
                end={float ? parseFloat(value) : typeof value === 'number' ? value : 0}
              />

          }
        </Value>
        {
          !isNaN(percentChange) && !hideCompare
            ? (
              <ChangeValue good={color === 'good'}>
                <i
                  className={`fa ${caret}`}
                  style={{
                    marginRight: 3,
                    fontSize: 10,
                    marginTop: -1
                  }}
                />
                {currencyType}
                {diff}
              </ChangeValue>)
            : null
        }
        <Labels>
          {label1 || null}
        </Labels>
      </Content>

      {
        label2 ? (
          <Content borderTop>
            <Value>
              {currencyType}
              {
                string
                  ? (
                    value2
                  ) : (

                    <CountUp
                      formattingFn={formattingFn}
                      decimals={float ? 2 : 0}
                      start={noAnimate ? value2 : 0}
                      end={float ? parseFloat(value2) : typeof value2 === 'number' ? 100 : 0}
                    />
                  )
              }
            </Value>
            <Labels>
              {label2 || null}
            </Labels>

          </Content>) : null
      }
    </Container>

  )
}

export default ValueBox

const Container = styled(Flex)`
    border-top: 2px solid ${props => props.theme.colors.teal};
    background-color: ${props => props.theme.colors.white};
    overflow: auto;
    border-radius: $border-radius;
    flex: 1 1;
    box-shadow: ${props => props.theme.shadows.normal};
    border-radius: ${props => props.theme.borderRadius.normal};
    min-height: 92px;
    flex-direction:column;
`
const Content = styled.div`
  padding:5px 10px;
  text-align: left;
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  border-top: ${props => props.borderTop ? 1 : 0}px solid ${props => props.theme.colors.greyLightest};
}
`
const Title = styled.div`
    padding: 10px;
    text-align: left;
    color: ${props => props.theme.colors.greyDarkest};
    position: relative;
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: 18px;
    display:flex;
    background: ${props => props.theme.colors.greyLightest};
`

const Labels = styled.div`
  font-size: 15px;
  display: flex;
  align-items:center;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textSubtle};
  font-style: italic;
`
const Value = styled.div`
  font-size: ${props => props.smallText ? 25 : 20}px;
`
const ChangeValue = styled.span`
  margin-left: 10px;
  font-size: 15px;
  display:flex;
  align-items:center;
  color: ${props => props.good ? props.theme.colors.good : props.theme.colors.bad};
  font-weight: ${props => props.theme.fontWeights.medium};
`
