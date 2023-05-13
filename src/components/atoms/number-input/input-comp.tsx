import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form'
import { InputStyles } from './input-styles'

type InputProps = {
  placeholder: any
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  name: string
  register: UseFormRegister<FieldValues>
}

export const NumberInput = ({
  placeholder,
  name,
  register,
  error,
}: InputProps) => {
  return (
    <>
      <input
        placeholder={error ? error.message : placeholder}
        className={InputStyles(error)}
        type="number"
        step={0.01}
        {...register(name, {
          valueAsNumber: true,
        })}
      />
    </>
  )
}
