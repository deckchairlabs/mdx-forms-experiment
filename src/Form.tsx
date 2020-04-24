import React, { FunctionComponent, useState } from 'react'
import { useForm, FormContext } from 'react-hook-form'

export const Form: FunctionComponent<{
  defaultValues?: any
  validationSchema?: any
}> = ({ children, defaultValues, validationSchema }) => {
  const methods = useForm({ defaultValues, validationSchema })

  const onSubmit = (data: Record<string, any>) => {
    console.log(data)
  }

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormContext>
  )
}
