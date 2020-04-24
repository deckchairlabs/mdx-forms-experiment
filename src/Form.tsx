import React, { FunctionComponent } from 'react'
import { useForm, FormContext } from 'react-hook-form'

const encode = (data: Record<string, any>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const Form: FunctionComponent<{
  defaultValues?: any
  validationSchema?: any
}> = ({ children, defaultValues, validationSchema }) => {
  const methods = useForm({ defaultValues, validationSchema })

  const onSubmit = (data: Record<string, any>) => {
    console.log(data)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'person', ...data }),
    })
  }

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormContext>
  )
}
