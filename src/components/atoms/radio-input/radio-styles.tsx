import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export const radioStyles = (
  // eslint-disable-next-line prettier/prettier
  inputError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
) => {
  return `
    flex
    grow
    cursor-pointer
    peer-checked:bg-indigo-700
    text-sm
    font-semibold
    text-zinc-50    
    px-4
    py-2
    rounded-xl
    justify-center
    bg-zinc-900
    ${inputError && 'border-2 border-red-500'}
  `
}
