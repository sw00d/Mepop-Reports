import { useRouter } from 'next/router'

import Flex from '../styles/layout/Flex'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import DateContainer from './DateContainer'
import { useSelector } from 'react-redux'
import NoDataFound from '../styles/elements/NoDataFound'
import Loading from '../styles/elements/Loading'
import { withFirebase } from '../firebase'

const getheaderContent = pathname => {
  switch (pathname) {
    case '/dashboard':
      return 'Dashboard'
    case '/reports':
      return 'Reports'
    case '/files':
      return 'Files'
    case '/settings/personal':
      return 'Settings'
    case '/fees-calculator':
      return 'Fees Calculator'
    default:
      return 'Mepop Reports'
  }
}
const Layout = withFirebase((props) => {
  const { loading, compareData, files, rangedData, user } = useSelector(state => state.generalReducer)
  const router = useRouter()
  const heading = getheaderContent(router.pathname)
  const noData = !files.length || JSON.stringify(rangedData) === '{}'
  const noUser = JSON.stringify(user) === '{}' || !user
  const routeRequiresData = heading === 'Reports' || heading === 'Dashboard'
  const centerContent = loading || noData
  const unprotectedRoute = router.pathname === '/sign-in' || router.pathname === '/sign-up'
  const hideSideBar = router.pathname === '/settings/membership/'

  if (noUser && !unprotectedRoute) {
    return null
  }
  if (user.profile && router.pathname !== '/settings/membership') {
    if (!user.profile.hasSignedIn) {
      router.push('/settings/membership')
    }
  }
  return (
    <Flex
      justifyContent='center'
      bg='mainBg'
      flex={[1]}
    >
      {
        unprotectedRoute ? (
          <Body
            centerContent
            headerSize={0}
          >
            {
              loading ? (
                <Flex justifyContent='center' height='90vh' alignItems='center'>
                  <Loading />
                </Flex>
              ) : props.children
            }
          </Body>
        )
          : (

            <>
              {hideSideBar ? null : <Sidebar />}
              <Flex
                justifyContent='space-between'
                flexWrap='wrap'
                alignItems='flex-start'
                bg='mainBg'
              >

                <Header>
                  {heading}
                  {(heading === 'Reports' || heading === 'Dashboard') ? (
                    <DateContainer page={heading} />
                  ) : null}
                </Header>
                <Body
                  centerContent={centerContent}
                  headerSize={JSON.stringify(compareData) !== '{}' ? 110 : 45}
                >
                  {
                    noData && routeRequiresData && !loading ? <NoDataFound />
                      : loading ? (
                        <Flex justifyContent='center' height='90vh' alignItems='center'>
                          <Loading />
                        </Flex>
                      ) : props.children
                  }

                </Body>
              </Flex>
            </>
          )
      }
    </Flex>

  )
})

export default Layout

const Body = styled.div`
    overflow: auto;
    height:calc(100vh - ${({ headerSize }) => headerSize}px);
    width:100vw;
    padding-bottom:70px;
${({ centerContent }) => {
  if (centerContent) {
    return (`
      display: flex;
      justify-content: center;
    `)
  }
}}
`
const Header = styled.div`
    background: white;
    width: 100%;
    min-height: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainBg};
    display: flex;
    align-items:center;
    padding-left: 10px;
    font-wieght: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 20px;
    justify-content: space-between;
`
