import React from 'react'

import ThemeProvider from './ThemeProvider.js'

export default ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)
