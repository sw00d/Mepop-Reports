import Flex from '../../layout/Flex'
import Text from '../Text'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import VertDivider from '../VertDivider'

const NoDataFound = ({ title, msg, ...props }) => {
  const { files } = useSelector(state => state.generalReducer)
  return (
    <Flex justifyContent='center' alignItems='center' {...props}>
      <Text color='greyDarker' fontSize={22} fontWeight={600}>{title || 'Oops!'}</Text>
      <VertDivider height='70px !important' mx='10px' />
      <Flex flexDirection='column' justifyContent='space-between' alignItems='center'>

        <Flex alignItems='center'>
          {
            files.length ? <Text color='greyDarker'>{msg || "It seems that you don't any sales yet!"}</Text>
              : (
                <>
              It seems that you need to
                  <Link href='/files'>
                    <A>
                      upload some files. <I className='fa fa-chevron-right' />
                    </A>
                  </Link>
                </>
              )
          }
        </Flex>
      </Flex>

    </Flex>
  )
}

export default NoDataFound

const I = styled.i`
    margin-left: 10px;
`
const A = styled.a`
    cursor: pointer;
    text-decoration: none;
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textGrey};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 10px;
    margin-left: 5px;
    width: 147px;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    transition: ${({ theme }) => theme.transitionDurations[1]};
    &:hover {
        width: 170px;
    }
`
