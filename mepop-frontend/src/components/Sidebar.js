import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { withFirebase } from '../firebase'

import Tooltip from '../styles/elements/Tooltip'
import Text from '../styles/elements/Text'

const Sidebar = withFirebase(({ firebase, ...props }) => {
  const [isMini, minify] = useState(true)
  const router = useRouter()
  const [activeRoute, updateRoute] = useState(router.pathname)

  useEffect(() => {
    updateRoute(router.pathname)
  }, [router.pathname])
  return (
    <Container isMini={isMini}>

      <Row title='true' onClick={() => minify(!isMini)}>
        <Title isMini={isMini}>Mepop</Title>

        <IconButton isMini={isMini} onClick={() => minify(!isMini)}>
          <i
            onClick={() => minify(!isMini)}
            className='fa fa-bars'
            style={{
              fontSize: 20
            }}
          />
        </IconButton>

      </Row>
      <SubContainer>

        <Nav>
          <Tooltip
            title='Dashboard'
            disabled={!isMini}
            distance={0}
            position='right-start'
            arrow={false}
          >

            <Link href='/dashboard'>
              <Row
                isMini={isMini}
                onClick={() => updateRoute('/dashboard')}
                isActive={activeRoute === '/dashboard'}
              >
                <I className='fa fa-home' />
                <RowText isMini={isMini}>Dashboard</RowText>
              </Row>
            </Link>
          </Tooltip>
          <Tooltip
            title='Reports'
            disabled={!isMini}
            distance={0}
            position='right-start'

            arrow={false}
          >
            <Link href='/reports'>
              <Row
                isMini={isMini}
                onClick={() => updateRoute('/reports')}
                isActive={activeRoute === '/reports'}
              >
                <I className='fa fa-area-chart' />
                <RowText isMini={isMini}>Reports</RowText>
              </Row>
            </Link>
          </Tooltip>
          <Tooltip
            title='Fee Calculator'
            disabled={!isMini}
            distance={0}
            position='right-start'

            arrow={false}
          >

            <Link href='/fees-calculator'>
              <Row
                isMini={isMini}
                onClick={() => updateRoute('/fees-calculator')}
                isActive={activeRoute === '/fees-calculator'}
              >
                <I className='fa fa-calculator' />
                <RowText isMini={isMini}>Fees Calculator</RowText>
              </Row>
            </Link>
          </Tooltip>
          <Tooltip
            title='Files'
            disabled={!isMini}
            distance={0}
            position='right-start'

            arrow={false}
          >

            <Link href='/files'>
              <Row
                isMini={isMini}
                onClick={() => updateRoute('/files')}
                isActive={activeRoute === '/files'}
              >
                <I className='fa fa-file' />
                <RowText isMini={isMini}>Files</RowText>
              </Row>
            </Link>
          </Tooltip>
          <Tooltip
            title='Settings'
            disabled={!isMini}
            distance={0}
            position='right-start'

            arrow={false}
          >
            <Link href='/settings/personal'>
              <Row
                isMini={isMini}
                onClick={() => updateRoute('/settings')}
                isActive={activeRoute === '/settings'}
              >
                <I className='fa fa-cog' />
                <RowText isMini={isMini}>Settings</RowText>
              </Row>
            </Link>

          </Tooltip>

        </Nav>
        <Tooltip
          title='Sign Out'
          disabled={!isMini}
          distance={0}
          position='right-start'
          arrow={false}
        >
          <Row
            isMini={isMini}
            onClick={() => firebase.doSignOut()}
          >
            <I className='fa fa-sign-out' />
            <RowText isMini={isMini}>Sign Out</RowText>
          </Row>

        </Tooltip>
      </SubContainer>

    </Container>
  )
})

export default Sidebar

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  min-width: ${({ isMini }) => isMini ? 57 : 200}px;
  width: 10px; /* This is an arbitrary value that is needs to minify correctly */
  height: 100vh;
  transition: .5s;
  box-shadow: ${({ theme }) => theme.shadows.subtle};
  border-right: 1px solid ${({ theme }) => theme.colors.mainBg};
`
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 50px);
  overflow: auto;
  overflow-x: hidden;

/* width */
&::-webkit-scrollbar {
  width: 0px;
  transition: 0.5s;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555;
  transition: 0.5s;
}
/* Track */
&::-webkit-scrollbar-track {
  transition: 0.5s;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background: #555;
  transition: 0.5s;
}

&:hover {
  /* width */
  &::-webkit-scrollbar {
    width: 1px;
    transition: 0.5s;
  }
}
  
`
const Nav = styled.div`
    padding-top:20px;
`
const Row = styled.div`
    position: relative;
    padding: 0px 20px;
    display: flex;
    align-items:center;
    height: 50px;
    cursor:pointer;
    background: ${({ theme, isActive }) =>
    isActive
    ? theme.colors.mainBg
    : null};
    border-top-right-radius: ${({ theme, isMini, title }) => isMini || title ? '0px' : theme.borderRadius.normal};
    border-bottom-right-radius: ${({ theme, isMini, title }) => isMini || title ? '0px' : theme.borderRadius.normal};
    margin-right: ${({ isMini, title }) => isMini || title ? 0 : 10}px;
    
    /* border-bottom: 1px solid ${({ theme, title }) => title ? theme.colors.mainBg : 'transparent'}; */
    
    &:hover {
      background:${({ theme, isActive }) => isActive ? null : theme.colors.mainBg};
    }
    transition: .2s;
`

const I = styled.i`
    color: ${({ theme }) => theme.colors.textSubtle};
    font-size: 20px;
    margin-right:10px;
`
const RowText = styled(Text)`
    color: ${({ theme, isMini }) => isMini ? 'transparent' : theme.colors.textSubtle};
    font-size: 15px;
    transition: .1s;
    transition-delay:.1s;
    user-select: none;
    white-space: nowrap;
    > i {
        color: ${({ theme, isMini }) => isMini ? 'transparent' : theme.colors.white}; 
    }
`
const IconButton = styled.div`
    background: transparent;
    color: ${({ theme }) => theme.colors.black};
    border-color: transparent;
    min-width: 55px;
    padding: 0px;
    position:${({ isMini }) => 'absolute'};
    right:0px;
    text-align:center;
    transform:${({ isMini }) => isMini ? 'rotate(180deg)' : 'rotate(90deg)'};
    transition: .2s;

`
const Title = styled(Text)`
    color: ${({ theme, isMini }) => isMini ? 'transparent' : theme.colors.primary};
    font-size: 20px;
    font-style: italic;
    transition: .2s;
    transition-delay:.1s;
    user-select: none;

`
