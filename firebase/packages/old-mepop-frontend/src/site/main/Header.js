import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { container, logo, navigation, navBtn, activeNavBtn } from '../styles/header.module.scss'

const Header = () => {
  const [activeTab, setActiveTab] = useState(window.location.pathname)

  return (
    <div className={container}>
      <Link to='/' onClick={() => setActiveTab('/')}>
        <h1 className={logo}><i>Mepop</i></h1>
      </Link>
      <div className={navigation}>
        <Link
          className={activeTab === '/' ? activeNavBtn : navBtn}
          onClick={() => setActiveTab('/')}
          to='/'
        >Reports
        </Link>
        <Link
          className={activeTab === '/about' ? activeNavBtn : navBtn}
          onClick={() => setActiveTab('/about')}
          to='/about'
        >About
        </Link>
      </div>
    </div>
  )
}

export default Header
