import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { useToasts } from 'react-toast-notifications'

import { withFirebase } from '../../firebase'
import Flex from '../../styles/layout/Flex'
import Button from '../../styles/elements/Button'
import Tooltip from '../../styles/elements/Tooltip'
import InfoModal from './InfoModal'
import { fetchFiles } from '../../store/actions/files'
import { useDispatch } from 'react-redux'
const Dropzone = withFirebase(({ firebase }) => {
  const dispatch = useDispatch()
  const { addToast } = useToasts()
  const [modalIsOpen, toggleModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const startFetch = useCallback(() => {
    fetchFiles({ firebase, dispatch }, () => {
      setLoading(false)
      addToast(<div>Success! <A href='/dashboard'>Go to sales dashboard.</A></div>, {
        appearance: 'success'
        // autoDismiss: true
      })
    })
  }, [])

  const onError = (msg, dismiss) => {
    addToast(<div>{msg || 'Error Occurred'}</div>, {
      appearance: 'error',
      autoDismiss: dismiss
    })
  }
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length) {
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
      <Flex justifyContent='flex-end' px='10px'>
        <Tooltip title="What's this?">
          <Button
            bg='transparent'
            color='greyDarkest'
            fontSize='20px'
            onClick={() => toggleModal(!modalIsOpen)}

          >
            <i className='fa fa-question-circle' />
          </Button>
        </Tooltip>
      </Flex>

      <DropZone isDragActive={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        <H2>
            Drop files here
        </H2>
        <p>or</p>
        <Button isLoading={loading} minWidth='115px' color='blue' bg='white' size='lg'>Select Files</Button>
        <p>Files must be from Depop to be valid</p>
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
  margin-top: 10px;
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
`
