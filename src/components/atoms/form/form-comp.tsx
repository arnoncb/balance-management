import { BaseSyntheticEvent, ReactNode } from 'react'
import { FormStyles } from './form-styles'

type FormProps = {
  children: ReactNode
  onSubmit: (e?: BaseSyntheticEvent) => {}
}

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={FormStyles()}>
      {children}
    </form>
  )
}
