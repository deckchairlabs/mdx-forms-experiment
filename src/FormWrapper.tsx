import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'theme-ui'
// @ts-ignore
import { base } from '@theme-ui/presets'
import { Form } from './Form'

export const FormWrapper: FunctionComponent = ({ children, ...props }) => {
  if (Array.isArray(children)) {
    children.map((child) => {
      // @ts-ignore
      child.type.displayName = `MDXCreateElement(${child.props.mdxType})`
    })
  }
  return (
    <ThemeProvider theme={base}>
      <Form {...props}>{children}</Form>
    </ThemeProvider>
  )
}
