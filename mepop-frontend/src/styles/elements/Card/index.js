import styled from 'styled-components'

import Flex from '../../layout/Flex'
import Switch from '../Switch'
import Tooltip from '../Tooltip'
import Spinner from '../Loading/Spinner'
import BlurShield from '../BlurShield'
const Card = ({
  onClose,
  headerBorder,
  switchLabel,
  switchCheck,
  switchEvent,
  switchDisabled,
  switchDisabledMsg,
  proOnly,
  ...props
}) => {
  return (
    <Container
      m='10px'
      flexDirection='column'
      alignItems='center'
      {...props}
    >
      {
        proOnly ? (
          <BlurShield {...proOnly} />
        ) : (
          <>
            {props.headerContent ? (
              <Header boxShadow={props.boxShadow} border={headerBorder}>
                {props.headerContent}
                {

                  switchLabel || onClose ? (
                    <Tooltip disabled={!switchDisabled} title={switchDisabledMsg} hideOnClick={false}>
                      <Flex alignItems='center'>
                        {
                          switchLabel
                            ? (
                              <Switch
                                label={switchLabel}
                                checked={switchCheck}
                                onChange={switchEvent}
                                disabled={switchDisabled}
                              />
                            ) : null
                        }
                        {
                          onClose ? (
                            <Button onClick={onClose}>
                              <i className='fa fa-close' />
                            </Button>
                          ) : null
                        }
                      </Flex>
                    </Tooltip>
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
          </>
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
  position: relative;
  z-index: 1;
  height: ${({ height }) => height};
  border-radius: ${props => props.theme.borderRadius.normal};
  border-top: ${({ borderTop, theme }) => borderTop ? `3px solid ${theme.colors[borderTop]}` : null};
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
  min-height:40px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  border: ${({ boxShadow, theme, border }) =>
                              border || (boxShadow === 'none'
                              ? theme.colors.greyLightest
                              : 'transparent')} 1px solid;
  border-bottom: ${({ border, theme }) => border || `1px solid ${theme.colors.greyLightest}`};
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

    color: ${({ theme }) => theme.colors.greyDarkest};
  }

`
