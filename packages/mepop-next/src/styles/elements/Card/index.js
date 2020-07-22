import styled from 'styled-components'

import Flex from '../../layout/Flex'
import Switch from '../Switch'
import Spinner from '../Loading/Spinner'

const Card = ({ onClose, switchLabel, switchCheck, switchEvent, ...props }) => {
  return (
    <Container
      m='10px'
      flexDirection='column'
      alignItems='center'
      {...props}
    >
      {props.headerText ? (
        <Header boxShadow={props.boxShadow}>
          {props.headerText}
          {

            switchLabel || onClose ? (
              <Flex alignItems='center'>
                {
                  switchLabel
                    ? (
                      <Switch
                        label={switchLabel}
                        checked={switchCheck}
                        onChange={switchEvent}
                      />) : null
                }
                {
                  onClose ? (
                    <Button onClick={onClose}>
                      <i className='fa fa-close' />
                    </Button>
                  ) : null
                }
              </Flex>
            )
              : null
          }
        </Header>
      ) : null}
      {
        props.isLoading
          ? (
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>)
          : (
            <>{props.children}</>
          )
      }

    </Container>

  )
}

export default Card

const Container = styled(Flex)` 
  flex: 1;
  border-radius: ${props => props.borderRadius ? props.borderRadius : props.theme.borderRadius.normal};
  background-color: ${props => props.theme.colors[props.background] || props.theme.colors.white};
  min-height:${({ minHeight }) => minHeight || 150}px;
  /* min-width: 1px; */
  position: relative;
  z-index: 1;
  height: ${({ height }) => height};
  border-radius: ${props => props.theme.borderRadius.normal};

  ${({ isLoading }) => isLoading ? `
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding-bottom: 3%;
  ` : null}

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-shadow: ${props => props.boxShadow !== 'none' ? props.theme.shadows.normal : 'none'};
    /* background: green; */
    z-index: -1;
  }
`
const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
`
const Header = styled.div`
  padding: 15px;
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  display:flex;
  height:40px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  border: ${({ boxShadow, theme }) => boxShadow === 'none'
                              ? theme.colors.greyLightest
                              : 'transparent'} 1px solid;
  border-bottom: 1px solid ${props => props.theme.colors.greyLightest};
  background-color: ${props => props.theme.colors.white};
  border-top-right-radius: ${props => props.theme.borderRadius.normal};
  border-top-left-radius: ${props => props.theme.borderRadius.normal};

`
const Button = styled.button`
  border: none;
  background: transparent;
  cursor:pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.greyDark};
  transition: .1s;
  &:hover {

    color: ${({ theme }) => theme.colors.black};
  }

`
