import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export const InputStyles = (
  // eslint-disable-next-line prettier/prettier
  inputError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
) => {
  return `
  border
  rounded-lg  
  w-full
  h-[48px]
  text-neutral-900
  placeholder-neutral-400
  text-sm
  px-4
  ${
    inputError
      ? 'border-2 border-red-500 placeholder-red-500 focus:outline-none focus:border-red-500'
      : 'border-gray-300 placeholder-neutral-400'
  }
  `
}
