import Flex from '../styles/layout/Flex'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import { useRouter } from 'next/router'

const getHeaderText = pathname => {
  switch (pathname) {
    case '/dashboard':
      return 'Dashboard'
    case '/reports':
      return 'Reports'
    case '/files':
      return 'Files'
    case '/settings':
      return 'Settings'
    default:
      return 'Mepop'
  }
}
export default (props) => {
  const router = useRouter()
  const heading = getHeaderText(router.pathname)
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
        </Header>
        <Body>
          {props.children}
        </Body>
      </Flex>
    </Flex>

  )
}

const Body = styled.div`
    overflow: auto;
    height:calc(100vh - 45px);
    width:100vw;
    /* align-items: center;
    justify-content: center;
    display: flex; */
`
const Header = styled.div`
    background: white;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainBg};
    display: flex;
    align-items:center;
    padding-left: 10px;
    font-wieght: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 20px;
`
