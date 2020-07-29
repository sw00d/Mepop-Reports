import { useRouter } from 'next/router'

import Flex from '../styles/layout/Flex'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import DateContainer from './DateContainer'

const getheaderContent = pathname => {
  switch (pathname) {
    case '/dashboard':
      return 'Dashboard'
    case '/reports':
      return 'Reports'
    case '/files':
      return 'Files'
    case '/settings':
      return 'Settings'
    case '/fees-calculator':
      return 'Fees Calculator'
    default:
      return 'Mepop'
  }
}
const Layout = (props) => {
  const router = useRouter()
  const heading = getheaderContent(router.pathname)
  return (
    <Flex
      justifyContent='center'
      bg='mainBg'
    >
      <Sidebar />
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
        <Body>
          {props.children}
        </Body>
      </Flex>
    </Flex>

  )
}

export default Layout

const Body = styled.div`
    overflow: auto;
    height:calc(100vh - 45px);
    width:100vw;
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
