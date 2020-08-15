import styled, { keyframes } from 'styled-components'
import Flex from '../../styles/layout/Flex'
import Button from '../../styles/elements/Button'
import { useState } from 'react'
import { withFirebase } from '../../firebase'

const Notification = withFirebase(({ type, active, firebase }) => {
  const [isShown, show] = useState(active || false)
  const { icon, content, color, bg } = getContent(type, firebase)
  if (!isShown) return null
  return (
    <Main>
      <CloseIcon onClick={() => show(false)}>
        <i className='fa fa-close' />
      </CloseIcon>
      <Icon color={color} bg={bg}>
        <i
          className={icon}
        />

      </Icon>
      <Content>

        {content}
      </Content>
    </Main>
  )
})

export default Notification

const getContent = (type, firebase) => {
  switch (type) {
    case 'email': {
      return {
        icon: 'fa fa-envelope-o',
        content: (
          <>
        You still need to verify your email: samote.wood@gmail.com
            <Button
              ml='4px'
              bg='warning'
              color='greyDarkest'
              height='30px'
              px='10px'
              sx={{ display: 'flex' }}
              onClick={() => firebase.doSendVerificationEmail()}
            >Resend Email
            </Button>
          </>
        ),
        bg: 'warning',
        color: 'greyDarkest'
      }
    }
    default: {
      return { icon: 'fa fa-info-circle', content: '', color: 'primary' }
    }
  }
}

const enter = keyframes`
    from: {
        opacity: 0;
    }
    to {
        transform: scale(1,1);
        opacity: 1;
    }
`
const Main = styled(Flex)`
    position: absolute;
    top: 10px;
    background: ${({ theme }) => theme.colors.greyDarkest};
    min-width: 200px;
    max-width: 100%;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.greyLightest};
    overflow: auto;
    z-index: 999;
    transform: scale(.9,.9);
    opacity:0;
    animation: ${enter} .1s linear 1;
    animation-fill-mode: forwards;
`

const Icon = styled.div`
    width: 40px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ bg, theme }) => theme.colors[bg]};
    color: ${({ color, theme }) => theme.colors[color]};
`
const Content = styled.div`
    padding: 20px 30px 20px 20px;
    font-size: 15px;
    display: flex;
    align-items:center;
`
const CloseIcon = styled.button`
    position: absolute;
    right: 0px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.greyLightest};
    outline: none;
    cursor: pointer;
    transition: .2s;
    font-size: 17px;
    &:hover {
        color: ${({ theme }) => theme.colors.greyLight};
    }
`
