import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form'
import { ErrorStyle, InputStyles } from './input-styles'

type InputProps = {
  placeholder: any
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  type: string
  name: string
  register: UseFormRegister<FieldValues>
}

export const TextInput = ({
  placeholder,
  type,
  name,
  register,
  error,
}: InputProps) => {
  const message = `${error?.message}`
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={InputStyles(error)}
        {...register(name)}
      />
      {error?.message && <span className={ErrorStyle()}>{message}</span>}
    </>
  )
}
