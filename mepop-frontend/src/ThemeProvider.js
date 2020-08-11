import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import theme from './theme'

export default ({ children }) => <Provider theme={theme}>{children}</Provider>
