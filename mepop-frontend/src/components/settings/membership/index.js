import { withFirebase } from '../../../firebase'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../../styles/elements/Card'
import Button from '../../../styles/elements/Button'
import Text from '../../../styles/elements/Text'
import Flex from '../../../styles/layout/Flex'
import styled from 'styled-components'
import Tooltip from '../../../styles/elements/Tooltip'
import Box from '../../../styles/layout/Box'
import { UPDATE_USER } from '../../../store/generalReducer'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'

const ChooseMembership = withFirebase(({ firebase }) => {
  const router = useRouter()
  const { addToast } = useToasts()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.generalReducer)
  const { hasSignedIn } = user.profile
  const onChoose = (type) => {
    const newProfile = { ...user.profile, hasSignedIn: true }
    const newMembership = { ...user.membership, type: type }
    firebase.setMembership(newMembership)

    firebase.setProfile(newProfile).then(() => {
      dispatch({
        type: UPDATE_USER,
        payload: { ...user, profile: newProfile, membership: newMembership }
      })
      if (!hasSignedIn) {
        addToast(<div>Everything is good to go! Now let's upload some files.</div>, {
          appearance: 'success'
        })
        router.push('/files')
      } else {
        router.push('/dashboard')
      }
    }).catch((err) => {
      addToast(<div>{err.message}. Please email samote.wood@gmail.com</div>, {
        appearance: 'error'
      })
    })
  }
  return (
    <Card minHeight='650px'>
      <Text as='h1' color='greyDarker'>Continue with a Plan</Text>
      <div>

        <Table flexDirection='column' alignItems='flex-end' mb='20px'>
          <Flex>
            <Cell />
            {tiers.map(({ title, icon, price }) => {
              return (
                <Cell key={title} alignItems='center' flexDirection='column' justifyContent='center'>
                  <Flex alignItems='center' fontSize='18px' mb='15px' mt='2px'>
                    <Text mr='5px'>{title}</Text>
                    <i className={`fa fa-${icon}`} />
                  </Flex>
                  <Flex mb='2px'>
                    <Text fontSize='15px' fontWeight={500}>{price}</Text>

                  </Flex>
                </Cell>
              )
            })}
          </Flex>
          {
            options.map(({ title, ref, tooltip }, i) => {
              return (
                <Flex key={i}>
                  <Cell px='10px'>
                    <Tooltip
                      title={tooltip}
                      position='right'
                      height='100%'
                      arrow={false}
                      style={{ width: '100%' }}
                    >
                      <Flex justifyContent='space-between' width={[1]}>
                        {title}
                        <Box ml='5px' fontSize='20px' alignItems='center'>
                          <i className='fa fa-question-circle' />
                        </Box>
                      </Flex>
                    </Tooltip>
                  </Cell>
                  {
                    tiers.map((tier, j) => {
                      return (

                        <Cell key={j} justifyContent='center'>
                          <I
                            good={tier[ref]}
                            className={`fa fa-${!tier[ref] ? 'times-circle' : 'check-circle'}`}
                          />

                        </Cell>
                      )
                    })
                  }
                </Flex>
              )
            })
          }
          <Flex>
            <Cell />
            {tiers.map(({ title, type }) => {
              return (
                <Cell key={title} justifyContent='center'>
                  <Button
                    bg='success'
                    minWidth='150px'
                    onClick={() => onChoose(type)}
                  >Go {title}!
                  </Button>
                </Cell>
              )
            })}
          </Flex>
        </Table>
        <Text mb='10px' width={[1]} justifyContent='flex-start'>* By choosing a plan, you automatically agree to our 'terms of service'</Text>
      </div>
    </Card>
  )
})

export default ChooseMembership

const I = styled.i`
    color: ${({ good, theme }) => good ? theme.colors.good : theme.colors.bad};
    font-size: 25px;
`
const Cell = styled(Flex)`
    min-height: 50px;
    min-width: 300px;
    overflow: auto;
    border-right: 1px solid ${({ theme }) => theme.colors.whiteDark};
    border-bottom: 1px solid ${({ theme }) => theme.colors.whiteDark};
    align-items:center;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`
const Table = styled(Flex)`
    border: 1px solid ${({ theme }) => theme.colors.greyLightest};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
`

const options = [
  { ref: 'reports', title: 'In Depth Reports', tooltip: 'The best available reporting for Depop Sellers.' },
  { ref: 'saveCSV', title: "Saving of CSV's", tooltip: 'The ability to upload and save your sales.' },
  { ref: 'feeCalculator', title: 'Depop Fee Calculator', tooltip: 'Automatically calculate at what price to list your items.' },
  { ref: 'salesDashboard', title: 'Sales Dashboard', tooltip: 'A quick overview of all sales and revenue.' },
  { ref: 'featureRich', title: 'Way more features!', tooltip: 'Additional charts, maps, and graphs to better analyze your sale trends.' },
  { ref: 'dateComparison', title: 'Date Comparison', tooltip: 'Ever wonder how last month compared to this month? Wonder no more.' },
  { ref: 'exclusiveAccess', title: 'Exclusive Access', tooltip: 'Lots of features are in the works and will be released sporadically.' },
  { ref: 'monthlyFeatures', title: 'Monthly Feature Releases', tooltip: 'Every month at least one new feature will be released.' }
]
const tiers = [
  {
    title: 'Basic',
    type: 'basic',
    icon: 'home',
    price: 'Totally Free',
    saveCSV: true,
    feeCalculator: true,
    salesDashboard: true,
    reports: true,
    featureRich: false,
    dateComparison: false,
    exclusiveAccess: false,
    monthlyFeatures: false
  },
  {
    title: 'Premium',
    type: 'premium',
    icon: 'diamond',
    price: '$14.99 / month',
    saveCSV: true,
    feeCalculator: true,
    salesDashboard: true,
    reports: true,
    featureRich: true,
    dateComparison: true,
    exclusiveAccess: true,
    monthlyFeatures: true

  }
]
