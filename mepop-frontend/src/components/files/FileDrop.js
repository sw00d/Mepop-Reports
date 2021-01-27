import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { useToasts } from 'react-toast-notifications'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { withFirebase } from '../../firebase'
import Flex from '../../styles/layout/Flex'
import Text from '../../styles/elements/Text'
import Button from '../../styles/elements/Button'
import Tooltip from '../../styles/elements/Tooltip'
import InfoModal from './InfoModal'
import { fetchFiles } from '../../store/actions/files'

const Dropzone = withFirebase(({ firebase }) => {
  const dispatch = useDispatch()
  const { addToast } = useToasts()
  const [modalIsOpen, toggleModal] = useState(null)
  const [loading, setLoading] = useState(false)
  const { files } = useSelector(state => state.generalReducer)

  const startFetch = useCallback(() => {
    fetchFiles({ firebase, dispatch }, () => {
      setLoading(false)
      addToast(<div>Success! <Link href='/dashboard'><A>Go to sales dashboard.</A></Link></div>, {
        appearance: 'success',
        autoDismiss: true
      })
    })
  }, [])

  const onError = (msg, dismiss) => {
    setLoading(false)

    addToast(<div>{msg || 'Error Occurred'}</div>, {
      appearance: 'error',
      autoDismiss: dismiss
    })
  }
  const onDrop = useCallback(acceptedFiles => {
    let warningThreshold = 0

    if (acceptedFiles.length) {
      acceptedFiles.forEach(({ size }) => { warningThreshold += size })
      if (warningThreshold > 1000000) {
        addToast(<div>Due to the amount/size of the file(s) uploaded, this may take a some time.</div>, {
          appearance: 'warning',
          autoDismiss: true
        })
      }
      setLoading(true)
      firebase.uploadFiles(acceptedFiles, startFetch, onError)
    } else {
      onError('File appears to be of wrong format.', true)
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv'
  })

  return (

    <Container>
      <InfoModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      <TextBox>
            <Text>
              We've had recently reported issues with the application. These issues stem from the CSV files being wrongly formatted, specifically with the dates provided with each sale. Please double check that all dates provided in your CSV files are in the format of day/month/year (i.e. 24/08/2020). If you're having issues with the application, this is the most likely culprit.
            </Text>
      </TextBox>
      <Flex justifyContent='flex-end' px='10px'>

        <Button
          bg='transparent'
          color='greyDarkest'
          fontSize='20px'
          onClick={() => toggleModal(!modalIsOpen)}
          height='50px'
        >
          <Tooltip title="What's this?" position='left' open={modalIsOpen === null && files.length === 0}>
            <i className='fa fa-question-circle' />
          </Tooltip>
        </Button>
      </Flex>

      <DropZone isDragActive={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        <H2>
            Drop files here
        </H2>
        <p>or</p>
        <Button isLoading={loading} minWidth='115px' color='primary' bg='white' size='lg'>Select Files</Button>
        <Flex justifyContent='center' alignItems='center' my="20px">
          Please ensure columns <SubText>Date of Sale</SubText> and <SubText>Date of Listing</SubText> are in the format of <SubText>day/month/year</SubText> (i.e. 24/08/2020)
        </Flex>
      </DropZone>

    </Container>
  )
})

export default Dropzone

const Container = styled.div`
  width:100%;
`

const DropZone = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  min-height: 250px;
  margin-top: 0px;
  transition: .2s;
  position:relative;
  border: 5px dashed ${({ theme, isDragActive }) => isDragActive ? theme.colors.greyDark : theme.colors.greyLight};
  border-radius: ${({ theme, isDragActive }) => isDragActive ? theme.borderRadius.more : theme.borderRadius.normal};
`

const H2 = styled.h2`
    margin: 0;
    margin-top: 10px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
`
const A = styled.a`
  color: ${({ theme }) => theme.colors.greenDark};
  text-decoration: underline;
  cursor: pointer;
  transition: .2s;
  &:hover {
    opacity: .7;
  }
`

const SubText = styled.i`
  color: ${({ theme }) => theme.colors.greyDark};
  margin: 0px 4px;
`

const TextBox = styled(Flex)`
  margin: 40px;
  margin-bottom: 0px;
  background: white;
  padding: 20px 30px;
  border: 1px solid red;
  border-radius: 4px;
`