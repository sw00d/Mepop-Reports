import styled from 'styled-components'
import { transparentize } from 'polished'

import Flex from '../../layout/Flex'
import Button from '../../elements/Button'
import Text from '../../elements/Text'
import theme from '../../../theme'

function BlurShield (props) {
  return (
    <Container img={'/blurs/' + props.img}>
      <Flex bg={transparentize(0.8, theme.colors.black)} flex={[1]} justifyContent='center' alignItems='center' flexDirection='column'>
        <Text textAlign='center' fontSize='25px' fontWeight={600}>{props.component}</Text>
        <Divider />
        <Text textAlign='center' fontSize='15px' fontWeight={400} mb='10px'>Pro Version Only</Text>
        <Button background='primary' color='white' size='md'>Upgrade Now</Button>
      </Flex>
    </Container>

  )
}

export default BlurShield

const Container = styled(Flex)`
  background-image: url(${({ img }) => img});
  height: 100%;
  width: 100%;
`
const Divider = styled.div`
  width: 100px;
  height: 2px; 
  background: ${({ theme }) => theme.colors.primary};
  margin: 10px 0px 10px 0px;
`
