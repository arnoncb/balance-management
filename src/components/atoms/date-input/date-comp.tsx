import { FieldValues, UseFormRegister } from 'react-hook-form'
import { DateStyles } from './date-styles'

type DateProps = {
  name: string
  register: UseFormRegister<FieldValues>
}

export const DateInput = ({ register, name }: DateProps) => {
  const date = new Date().toISOString()

  return (
    <input
      type="date"
      className={DateStyles()}
      {...register(name, { value: date.substring(0, 10) })}
    />
  )
}
