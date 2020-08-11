import Link from 'next/link'

import Flex from '../../styles/layout/Flex'
import Text from '../../styles/elements/Text'
import Button from '../../styles/elements/Button'
import AreaChart from '../../styles/reporting/AreaChart'
import Card from '../../styles/elements/Card'

const LearnMore = (props) => {
  return (
    <>
      <Flex sx={{ position: 'relative' }}>
        <Flex flexDirection='column' sx={{ position: 'absolute', zIndex: 2 }} p='10px' pl='30px'>
          <Text fontSize={18} fontWeight={500} color='greyDark' width={[1]} mb='5px'>
            🌟 Monitor your sales.
          </Text>
          <Text fontSize={18} fontWeight={500} color='greyDark' width={[1]} mb='5px'>
            🌟 Track your revenue.
          </Text>
          <Text fontSize={18} fontWeight={500} color='greyDark' width={[1]}>
            🌟 Grow your shop.
          </Text>
        </Flex>
        <Card boxShadow='none' m={0}>
          <AreaChart
            boxShadow='none'
            data={data}
            onHover={() => null}
            areas={[
              { key: 'uv', color: 'pastelGreen' },
              { key: 'pv', color: 'pastelBlue' }
            ]}
          />
        </Card>
      </Flex>

      <Flex
        pl='30px'
        sx={{
          '@media only screen and (max-width: 650px)': {
            marginTop: '20px',
            paddingLeft: '0px'
          }
        }}
      >
        <Link href='/sign-up'>
          <Button width={[1]} mt='20px' mr='4px' height='40px'>Sign Up</Button>
        </Link>
        <Button width={[1]} mt='20px' height='40px' mr='20px'>Learn More</Button>
      </Flex>
    </>
  )
}

export default LearnMore

const data = [
  {
    uv: 0, pv: 0
  },
  {
    uv: 10, pv: 6
  },
  {
    uv: 20, pv: 18
  },
  {
    uv: 30, pv: 22
  },
  {
    uv: 40, pv: 33
  },
  {
    uv: 52, pv: 40
  },
  {
    uv: 63, pv: 50
  }
]
