import React, { FunctionComponent } from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import { Box, Input, Label, Select, Textarea } from 'theme-ui'

type FieldProps = {
  label?: string
  type: string
  name: string
  required?: string | boolean
}

export const Field: FunctionComponent<FieldProps> = ({
  label,
  type = 'text',
  name,
  required = true,
  children,
  ...props
}) => {
  const {
    register,
    errors,
    formState: { dirty },
  } = useFormContext()

  const Component =
    type === 'select' ? Select : type === 'textarea' ? Textarea : Input

  return React.useMemo(
    () => (
      <Box>
        {label && <Label htmlFor={`field-${name}`}>{label}</Label>}
        <Component
          id={`field-${name}`}
          type={type}
          ref={register({
            required,
          })}
          name={name}
          children={children}
          {...props}
        />
        <ErrorMessage errors={errors} name={name} />
      </Box>
    ),
    [dirty, errors]
  )
}
