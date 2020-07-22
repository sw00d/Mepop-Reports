import { withFirebase } from '../../../firebase'
import { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

import Card from '../../../styles/elements/Card'
import Flex from '../../../styles/layout/Flex'
import Button from '../../../styles/elements/Button'
import Tooltip from '../../../styles/elements/Tooltip'
import Text from '../../../styles/elements/Text'
import { fetchFiles } from '../../../store/actions/files'
import { useSelector, useDispatch } from 'react-redux'

const Dropzone = withFirebase(({ firebase }) => {
  const dispatch = useDispatch()
  const { files, user } = useSelector(state => state.generalReducer)
  const [loading, setLoading] = useState(files.length)
  const [buttonDisable, disableBtns] = useState(false)
  const startFetch = useCallback(() => {
    disableBtns(true)
    setLoading(true)
    fetchFiles(user, { firebase, dispatch }, () => {
      setLoading(false)
      disableBtns(false)
    })
  }, [])
  useEffect(() => startFetch(), [startFetch])

  const onDrop = useCallback(acceptedFiles => {
    setLoading(true)
    disableBtns(true)

    firebase.uploadFiles(acceptedFiles, startFetch)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv'
  })

  const deleteFile = (filename) => {
    firebase.deleteFile(filename, (file) => {
      // success! Now remove that file from local state or refresh files in some way.
      startFetch()
    })
  }

  return (

    <Container>
      <DropZone isDragActive={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        <H2>
            Drop files here
        </H2>
        <p>or</p>
        <Button color='blue' size='lg'>Select Files</Button>
        <p>Files must be from Depop to be valid</p>
      </DropZone>
      {
        <Card headerText='Current Files' isLoading={loading}>
          {
            files.length
              ? (
                <Table>{files.map(({ filename }, i) => (
                  <Row key={i} index={i}>
                    <Tooltip
                      title='Delete file'
                      arrow={false}
                      position='right'
                    >
                      <DeleteBtn
                        disabled={buttonDisable}
                        aria-label={`Click to delete ${filename}`}
                        onClick={() => deleteFile(filename)}
                      >
                        <i
                          className='fa fa-close'
                        />
                      </DeleteBtn>
                    </Tooltip>
                    {filename}
                  </Row>
                )
                )}
                </Table>
              )
              : <Text fontSize='20px' pt='1em' color='greyDark'>Upload Files Above</Text>
          }

        </Card>
      }

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
const Row = styled.div`
  width: 100%;
  padding: 3px 0px 0px 5px;
  border-bottom: ${({ theme, key }) => theme.colors.mainBg} 1px solid;
  background: ${({ theme, index }) => index % 2 === 0 ? theme.colors.mainBg : theme.colors.greyLighter};
`
const DeleteBtn = styled.button`
  margin-right: 5px;
  cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
  &:hover {
  color: ${({ theme }) => theme.colors.redDark};
  }
`
const Table = styled.div`
  max-height: 250px;
  overflow: auto;
  width: 100%;
`
