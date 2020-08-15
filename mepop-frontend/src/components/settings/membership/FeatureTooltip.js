import styled from 'styled-components'

import Flex from '../../../styles/layout/Flex'
import Text from '../../../styles/elements/Text'

const FeatureToolTip = () => {
  return (
    <>
      <Title m='0px 20px' fontSize='20px' fontWeight={600}>
          Premium Features Include:
      </Title>
      <Container>
        <ImgContainer>
          <Img src='/components/categories.png' />
        </ImgContainer>
        <ImgContainer>
          <Img src='/components/paymenttypes.png' />
        </ImgContainer>
        <ImgContainer>
          <Img src='/components/revenueoverview.png' />
        </ImgContainer>
        <ImgContainer>
          <Img src='/components/salesmap.png' />
          {/* <Text>And Lots More!</Text> */}
        </ImgContainer>
        <Text
          textAlign='center'
          my='30px'
          fontSize='15px'
          color='greyDark'
          fontWeight={600}
        >
         AND LOTS MORE! <span style={{ fontSize: '20px', marginLeft: '5px' }}>🎉</span>
        </Text>

      </Container>
    </>
  )
}

export default FeatureToolTip

const Title = styled(Text)`
color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyLightest};
    padding-bottom: 10px;
`
const Container = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
    overflow: scroll;
    max-height: 80vh;
`
const Img = styled.img`
    width: 800px;
`

const ImgContainer = styled(Flex)`
    overflow: auto;
    margin: 10px 20px;
    border: 1px solid ${({ theme }) => theme.colors.greyLightest};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    box-shadow: ${({ theme }) => theme.shadows.normal};

`
