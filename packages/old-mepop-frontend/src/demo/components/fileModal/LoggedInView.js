import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { document_upload as uploadIcon } from 'react-icons-kit/ikons/document_upload'
import { Tooltip } from 'react-tippy'
import { logout as logOut } from 'react-icons-kit/ikons/logout'
import { checkmark, close } from 'react-icons-kit/ionicons'
import Icon from 'react-icons-kit'

import { processFiles } from '../../utils/dataSetup'
import { activeDropzone, btn, btnDisabled } from './styles/fileModal.module.scss'
import {
  container, fileRow, dropzone,
  checkIcon, deleteIcon, h2, hiddenText,
  topBtnContainer, logoutBtn, addBtn
} from './styles/loggedInView.module.scss'
import Loader from '../Loader'

const sort = (files) => {
  const newFiles = [...files]
  newFiles.sort((a, b) => a.filename < b.filename ? 1 : -1)
  return newFiles
}
const LoggedInView = ({
  state,
  setState,
  saveAndClose,
  client,
  firebase
}) => {
  const [loading, setLoading] = useState(false)
  const [btnIsDisabled, disableBtn] = useState(false)

  useEffect(() => {
    const checked = state.queryData.find(({ checked }) => checked === true)
    if (checked) {
      disableBtn(false)
    } else {
      disableBtn(true)
    }
  }, [state.queryData])
  const fetchFiles = useCallback(() => {
    setLoading(true)
    const resolve = (newFiles) => {
      if (newFiles) setState({ queryData: sort(newFiles) })
      setLoading(false)
    }
    firebase.getUserFiles(resolve)
  }, [])
  const onDelete = file => {
    firebase.deleteFile(file, () => {
      const fileToRemove = state.queryData.find(({ filename }) => filename === file)
      const idx = state.queryData.indexOf(fileToRemove)
      const newQueryData = [...state.queryData]
      newQueryData.splice(idx, 1).sort()

      setState({ queryData: sort(newQueryData) })
    })
  }
  const onDrop = useCallback(acceptedFiles => {
    firebase.uploadFiles(acceptedFiles, fetchFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv'
  })
  const updateFileHandler = (listOfFiles, onSuccess) => {
    const files = []
    listOfFiles.forEach((file) =>
      file.checked ? files.push(file.content) : null
    )
    processFiles(
      files,
      (data) => {
        if (onSuccess) onSuccess()
        setState(
          {
            data,
            originalData: data,
            notification: {},
            example: false
          }
        )
      },
      () => { console.error('Error: Possible unknown file type.') },
      true
    )
  }
  useEffect(() => {
    if (!state.queryData.length) {
      fetchFiles()
    }
  }, [fetchFiles])

  return (
    <div>
      <div {...getRootProps()} className={isDragActive ? activeDropzone : dropzone}>
        <input {...getInputProps()} />
        <div className={topBtnContainer}>

          <button
            className={logoutBtn}
            onClick={(e) => {
              e.stopPropagation()
              firebase.doSignOut()
            }}
          >
            Sign out {state.user.email}
            <Icon size={20} icon={logOut} />
          </button>

          <Tooltip title='Upload File' style={{ display: 'flex' }}>
            <button
              className={addBtn}
            >
              <Icon size={25} icon={uploadIcon} />

            </button>
          </Tooltip>

        </div>
        <div className={container}>
          <h2 className={isDragActive ? h2 : hiddenText} hidden={!isDragActive}>
            Drop files here
          </h2>
          {
            state.queryData.length && !loading ? (
              state.queryData.map(({ filename, checked }, i) => {
                return (
                  <div className={fileRow} key={i} onClick={e => e.stopPropagation()}>

                    <button
                      className={deleteIcon}
                      disabled={loading}
                      onClick={(e) => {
                        e.stopPropagation()
                        onDelete(filename)
                      }}
                    >
                      <Icon size={18} icon={close} />
                    </button>

                    <button
                      className={checkIcon}
                      onClick={(e) => {
                        e.stopPropagation()
                        const newData = [...state.queryData]
                        newData[i].checked = !checked
                        setState({ queryData: newData })
                      }}
                    >
                      {checked ? <Icon size={18} icon={checkmark} /> : null}
                    </button>
                    {filename.replace(`${state.user.id}_`, '')}
                  </div>)
              })
            ) : loading ? (
              <Loader customContainer={{ margin: '60px auto' }} />
            ) : (
              <h2 className={h2}>
              Drop files here or click to upload
              </h2>
            )
          }

        </div>
      </div>
      {
        state.queryData
          ? (
            <button
              className={btnIsDisabled ? btnDisabled : btn}
              onClick={(e) => {
                e.stopPropagation()
                updateFileHandler(state.queryData, saveAndClose)
              }}
            >
              Generate Report
            </button>
          ) : null
      }
    </div>
  )
}

export default LoggedInView
