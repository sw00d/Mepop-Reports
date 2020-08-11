import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import Flex from '../styles/layout/Flex'
import Spinner from '../styles/elements/Loading/Spinner'

export default (props) => {
  const router = useRouter()
  const { user } = useSelector(state => state.generalReducer)
  const noUser = JSON.stringify(user) === '{}'
  useEffect(() => {
    if (!noUser) {
      router.push('/dashboard')
    } else {
      router.push('/sign-in')
    }
  }, [])
  return (
    <Flex justifyContent='center' alignItems='center' bg='mainBg' height='100%'>
      <Spinner />
    </Flex>
  )
}
