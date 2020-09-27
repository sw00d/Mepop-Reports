import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Card from '../../styles/elements/Card'
import Text from '../../styles/elements/Text'
import Tooltip from '../../styles/elements/Tooltip'

import { withFirebase } from '../../firebase'
import Spinner from '../../styles/elements/Loading/Spinner'
import { rowStyle } from '../../styles/elements/Table'
import { fetchFiles } from '../../store/actions/files'

const FileTable = withFirebase(({ firebase }) => {
  const { files } = useSelector(state => state.generalReducer)
  const dispatch = useDispatch()
  const [buttonDisable, disableBtns] = useState(false)
  const [activeBtn, activateBtn] = useState(null)

  const updateData = useCallback(() => {
    fetchFiles({ firebase, dispatch }, () => disableBtns(false))
  }, [])

  const deleteFile = (filename) => {
    disableBtns(true)
    firebase.deleteFile(filename, (file) => {
      updateData()
    })
  }
  return (
    <Card headerContent='Uploaded Files' minHeight='0px' mb='50px'>
      {
        files.length
          ? (
            <Table>
              {files.map(({ filename }, i) => {
                const getStyle = rowStyle({ handleRowClick: true, index: i })
                return (
                  <Row key={i} index={i} style={getStyle}>
                    <Tooltip
                      title='Delete'
                      arrow={false}
                      position='right'
                    >
                      <DeleteBtn
                        disabled={buttonDisable}
                        aria-label={`Click to delete ${filename}`}
                        onClick={() => {
                          deleteFile(filename)
                          activateBtn(i)
                        }}
                      >
                        {
                          buttonDisable && activeBtn === i ? (
                            <Spinner width='9px' color='red' size='2' />
                          ) : (
                            <i
                              className='fa fa-close'
                            />
                          )
                        }
                      </DeleteBtn>
                    </Tooltip>
                    {filename}
                  </Row>
                )
              }
              )}
            </Table>
          )
          : <Text fontSize='20px' pt='1em' color='greyDark'>Upload Files Above</Text>
      }

    </Card>
  )
})

export default FileTable

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0px 4px 15px;
  color: ${({ theme }) => theme.colors.greyDarker};
`
const DeleteBtn = styled.button`
  margin-right: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
  height: 25px;
  width: 25px;
  border-radius: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
`
const Table = styled.div`
  /* max-height: 250px; */
  overflow: auto;
  width: 100%;
  /* background: ${({ theme }) => theme.colors.greyLight}; */
`
