import React from 'react'
import { radioStyles } from './radio-styles'
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form'

type RadioProps = {
  items: {
    name: string
    id: string
    value?: string
    label: string
    checked?: boolean
    onClick?: React.MouseEventHandler<HTMLLabelElement>
  }[]
  register: UseFormRegister<FieldValues>
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export const RadioInput = ({ items, register, error }: RadioProps) => {
  return (
    <fieldset className={` w-full flex flex-wrap gap-2`}>
      {items.map((item) => (
        <div className={`flex grow gap-2`} key={item.id}>
          <input
            type="radio"
            className="hidden peer"
            id={item.id}
            value={item.value}
            {...register(item.name)}
            checked={item.checked}
          />
          <label
            className={radioStyles(error)}
            htmlFor={item.id}
            onClick={item.onClick}
          >
            {item.label}
          </label>
        </div>
      ))}
    </fieldset>
  )
}
