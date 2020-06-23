import React from 'react'
import ReactDOM from 'react-dom'
import 'react-tippy/dist/tippy.css'

import './styles/index.module.scss'
import './styles/index.css'
import App from './site/main'
import Firebase, { FirebaseContext } from './firebase'
import CookieConsent from 'react-cookie-consent'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <CookieConsent location='bottom'>By using this site, you are agreeing to our <a href='/privacy-policy' style={{ color: 'white' }}>Privacy Policy</a>.</CookieConsent>

      <App />
    </FirebaseContext.Provider>,
  </React.StrictMode>,

  document.getElementById('root')
)
