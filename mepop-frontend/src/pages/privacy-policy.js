import styled from 'styled-components'
import HorzDivider from '../styles/elements/HorzDivider'
import Box from '../styles/layout/Box'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import Text from '../styles/elements/Text'
import Button from '../styles/elements/Button'

export default () => {
  const { user } = useSelector(state => state.generalReducer)

  return (
    <Container p='20px 50px 20px 50px' bg='white' m='20px' overflow='auto' height='93vh'>
      <Link href={user.user ? '/dashboard' : '/sign-in'}>
        <A>
          <Button style={{ display: 'flex' }}>
            <Box mr='10px'>

              <i className='fa fa-chevron-left' />
            </Box>

            <Text color='white'>Back</Text>
          </Button>
        </A>
      </Link>
      <Text as='h1'>Mepop Report's Privacy Policy</Text>
      <HorzDivider />
      <Text as='h2' mb='0px' pb='0px'>Our Commitment to Privacy</Text>
      <HorzDivider height='1px' width='330px' maxWidth='90%' />

      <p>
        Your privacy is important to us. To better protect your privacy we provide this notice explaining our online information practices and the
        choices you can make about the way your information is collected and used. By creating an account with Mepop Reports, you are automatically
        agreeing to this privacy policy.
      </p>

      <h2>The Information We Collect</h2>
      <HorzDivider height='1px' width='330px' maxWidth='90%' />

      <p>
        This notice applies to all information collected or submitted on the website. On some pages, you can make requests, and register to receive materials. The types of personal information collected at these pages are:
      </p>
      <ul>
        <li>Name</li>
        <li>Email</li>
        <li>Password</li>
        <li>Depop Shop Name</li>
        <li>Depop-generated Sales CSV files</li>
        <li>Cookies</li>
      </ul>
      <Text as='h2' mb='0px' pb='0px'>How We Use Your Information</Text>
      <HorzDivider height='1px' width='330px' maxWidth='90%' />

      <p>
        We use this information you provide to keep track of user sessions, authentication, as well as access saved files from our database.
        We do not sell any of your personal information to third party marketers or advertisers. At any point, if you feel the need to remove your
        account from our site, feel free to reach out to <a href='mailto:mepopreports@gmail.com'>mepopreports@gmail.com </a>and we will assist you in deleting your account and all records
        associated with said records. Our site is hosted by Firebase. You can read more about their privacy
        guidelines <a target='_blank' rel='noopener noreferrer' href='https://firebase.google.com/support/privacy'>here</a>. Thank you for using Mepop
        Reports.
      </p>
    </Container>
  )
}

const Container = styled(Box)`
    border-radius: 4px;
`
const A = styled.a`
    text-decoration: none;
`
