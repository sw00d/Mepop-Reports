import { Button } from 'rebass'
import theme from '../../../theme'
import styled from 'styled-components'
import ThreeDotLoader from '../Loading/ThreeDotLoader'
import Flex from '../../layout/Flex'

const Btn = ({ children, bg, height, color, isLoading, ...props }) => {
  return (
    <StyledButton
      fontSize={15}
      {...props}
      bg={theme.colors[bg || 'primary']}
      color={theme.colors[color || 'white']}
      height={height || '35px'}
    >
      {isLoading ? (
        <Flex justifyContent='center' alignItems='center'>
          <ThreeDotLoader color={color || 'white'} bg={bg || 'primary'} />
        </Flex>
      ) : (
        children
      )}
    </StyledButton>
  )
}

export default Btn

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${({ theme }) => theme.transitionDurations[1]};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    user-select: none;
    overflow: hidden;
    letter-spacing: .5px;
    border: 2px solid ${({ borderColor, theme }) => borderColor ? theme.colors[borderColor] : 'transparent'} !important;
    &:hover {
      opacity: .7;
    }
    &:active {
      outline: none;
    }
`
