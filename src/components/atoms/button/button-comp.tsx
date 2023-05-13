import { ButtonStyles } from './button-styles'
import React from 'react'

type ButtonProps = {
  type?: 'submit'
  children: React.ReactNode
  compact?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  selected?: boolean
}

export const Button = ({
  type,
  children,
  compact = false,
  onClick,
  selected = false,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={ButtonStyles({ compact, selected })}
      >
        {children}
      </button>
    </>
  )
}
