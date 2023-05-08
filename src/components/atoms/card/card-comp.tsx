import { ReactNode } from "react"
import { CardStyles } from "./card-styles"

type CardProps = {
  children: ReactNode
  minWidth?: string
  padding?: string
}

export const Card = ({
  children,
  minWidth = "0",
  padding = "16",
}: CardProps) => {
  return <div className={CardStyles({ minWidth, padding })}>{children}</div>
}
