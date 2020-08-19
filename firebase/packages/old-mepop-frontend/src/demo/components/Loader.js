import React from 'react'

import { container, spinner } from '../styles/loader.module.scss'

const Loader = ({ customContainer }) => {
  return (
    <div className={container} style={customContainer}>
      <div className={spinner} />
    </div>
  )
}

export default Loader
