import { ReactNode } from 'react'
import { CardStyles } from './card-styles'

type CardProps = {
  children: ReactNode
  width?: string
  height?: string
  padding?: string
}

export const Card = ({
  children,
  width,
  height,
  padding = 'p-7',
}: CardProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={CardStyles({ width, height, padding })}
    >
      {children}
    </div>
  )
}
