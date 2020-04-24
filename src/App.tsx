import React, { FunctionComponent } from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from './components'

const App: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default App
