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
      <Link href={user.user ? '/settings/membership' : '/sign-in'}>
        <A>
          <Button style={{ display: 'flex' }}>
            <Box mr='10px'>
              <i className='fa fa-chevron-left' />
            </Box>

            <Text color='white'>Back</Text>
          </Button>
        </A>
      </Link>
      <Text as='h1'>Woodwork Development, LLC Terms of Service</Text>
      <HorzDivider height='2px' />

      <Text as='h3'>1. Terms</Text>
      <p>
        By accessing the website at http://www.mepopreports.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
      </p>

      <Text as='h3'>2. Use License</Text>
      <p>
        Permission is granted to temporarily download one copy of the materials (information or software) on Woodwork Development, LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        modify or copy the materials;
        use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
        attempt to decompile or reverse engineer any software contained on Woodwork Development, LLC's website;
        remove any copyright or other proprietary notations from the materials; or
        transfer the materials to another person or "mirror" the materials on any other server.
        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Woodwork Development, LLC at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
      </p>
      <Text as='h3'>3. Disclaimer</Text>
      <p>
        The materials on Woodwork Development, LLC's website are provided on an 'as is' basis. Woodwork Development, LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        Further, Woodwork Development, LLC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
      </p>
      <Text as='h3'>4. Limitations</Text>
      <p>
        In no event shall Woodwork Development, LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Woodwork Development, LLC's website, even if Woodwork Development, LLC or a Woodwork Development, LLC authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
      </p>

      <Text as='h3'>5. Accuracy of materials</Text>
      <p>
        The materials appearing on Woodwork Development, LLC's website could include technical, typographical, or photographic errors. Woodwork Development, LLC does not warrant that any of the materials on its website are accurate, complete or current. Woodwork Development, LLC may make changes to the materials contained on its website at any time without notice. However Woodwork Development, LLC does not make any commitment to update the materials.
      </p>
      <Text as='h3'>6. Links</Text>
      <p>
        Woodwork Development, LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Woodwork Development, LLC of the site. Use of any such linked website is at the user's own risk.
      </p>
      <Text as='h3'>7. Modifications</Text>
      <p>
        Woodwork Development, LLC may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
      </p>
      <Text as='h3'>8. Governing Law</Text>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of Montana and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
      </p>
      <Text as='h3'> 9: Sales Tax</Text>
      <p>
        Woodwork Development is not to be held responsible for any tax, government, or regulatory transaction fees that apply outside of the state of Montana. Should these costs be an issue, Woodwork development has the authority to pass the responsibility of paying these costs off to the Purchaser.
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
